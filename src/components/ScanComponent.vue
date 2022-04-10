<script>
import { init, start, stop, onDetected, onProcessed } from "quagga";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      expanded: false,
      camera: null,
      boxes: null,
      lastResult: null,
    };
  },
  beforeUnmount() {
    stop();
  },
  mounted() {
    onDetected((data) => {
      if (this.lastResult == null) {
        console.log(data.codeResult.code);
        this.lastResult = null;
        this.expanded = false;
        stop();
        this.addItem(data.codeResult.code);
      }
    }),
      onProcessed((data) => {
        if (data) console.log(data);
        // this.camera.
      });
  },
  methods: {
    ...mapMutations(["addItem"]),
    toggle() {
      this.expanded = !this.expanded;
      
      if (this.expanded) {
        //Init Quagga
        this.lastResult = null;

        const rect = document
          .querySelector(".scanner .viewport")
          .getBoundingClientRect();
        console.log(rect);

        init(
          {
            inputStream: {
              type: "LiveStream",
              constraints: {
                width: { max: rect.width },
                // height: { min: rect.height },
                facingMode: "environment",
                // aspectRatio: { min: 1, max: 2 },
              },
              target: ".viewport",
            },
            locator: {
              patchSize: "medium",
              halfSample: true,
            },
            numOfWorkers: 2,
            frequency: 10,
            decoder: {
              readers: [
                {
                  format: "ean_reader",
                  config: {},
                },
              ],
            },
            locate: true,
          },
          (err) => {
            if (err) {
              console.error(err);
              // return this.handleError(err);
            }
            // this.checkCapabilities();
            start();
            this.expanded = true;
            // scanner.style.height = rect.height + "px";
          }
        );
      } else {
        this.lastResult = null;
        stop();
        this.expanded = false;
        // scanner.style.height = "0px";
      }
    },
  },
};
</script>

<template>
  <div class="scanner" :class="{ show: expanded }">
    <div @click="toggle" class="handle">Add new Entry</div>
    <div class="viewport">
      <!-- <canvas v-cam-viewport></canvas> -->
    </div>
  </div>
</template>

<style>
.drawingBuffer {
  display: none !important;
  /* height: 90vh; */
  /* width: 100vw; */
}
</style>

<style scoped>
/* .handle {
/*   position: absolute;
  bottom: 0px;
  transition: all 1s linear; *
} */

/* .hide {
  transform: translate(0, 200px);
} */

.scanner {
  position: fixed;
  /* clip: rect(0px, 100vw, 10px, 0px); */
  width: 100vw;
  /* top: calc(100vh) */
  bottom: 0px;
  transform: translate(0, 90vh);
  transition: transform 0.25s cubic-bezier(0.4, 0, 1, 1);
}

.show {
  transform: translate(0, 0) !important;
  display: block !important;
  /* height: 90vh !important; */
}

.handle {
  background-color: darkred;
  color: white;
  border-radius: 15px 15px 0px 0px;
  padding-top: 1vh;
  font-size: 2vh;
  padding-bottom: 1vh;
  text-align: center;

  -webkit-box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.75);
}

.viewport {
  /* display: none; */
  height: 90vh;
  background-color: black;
  color: white;

  /* transition: all 0.2s linear; */
}
</style>
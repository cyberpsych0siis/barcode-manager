/** SETTINGS */
export const settings = {

    "inputStream": {
        "type": "LiveStream",
        "constraints": {
            "width": { "min": 640 },
            "height": { "min": 480 },
            "facingMode": "environment",
            "aspectRatio": { "min": 1, "max": 2 }
        }
    },
    "locator": {
        "patchSize": "medium",
        "halfSample": true
    },
    "numOfWorkers": 2,
    "frequency": 10,
    "decoder": {
        "readers": [{
            "format": "code_128_reader",
            "config": {}
        }]
    },
    "locate": true

}
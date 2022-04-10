// import { createStore } from 'vuex';
import Vuex from 'vuex';
// import VuexPersist from 'vuex-persist';

/* const vuexLocalStorage = new VuexPersist({
    key: 'barcode-manager',
    storage: window.localStorage
}) */

export const store = new Vuex.Store({
    // plugins: [vuexLocalStorage.plugin],
    state() {
        return {
            count: 0,
            // items: [],
            items: new Map(),
            editMode: false,
            scaleMode: false
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        addItem(state, ean) {
            if (state.items.has(ean)) {
                state.items.get(ean).qty++;
            } else {   
                state.items.set(ean, {
                    qty: 1,
                    name: "EAN Code " + ean,
                    barcode: ean
                })
            }
        },
        increaseQuantity(state, ean) {
            state.items.get(ean).qty++;
        },
        decreaseQuantity(state, ean) {
            if (state.items.get(ean) > 0) state.items.get(ean).qty--;
        },
        removeItem(state, ean) {
            console.log(ean, state.items);
            if (state.items.has(ean)) {
                if (state.items.get(ean).qty > 1) {
                    state.items.get(ean).qty--;
                } else {
                    state.items.delete(ean);
                }
            }
        },
        toggleEdit(state) {
            state.editMode = !state.editMode;
            // console.log(state.editMode);
        }
    },
})
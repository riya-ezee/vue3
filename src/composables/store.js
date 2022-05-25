import { reactive, ref } from "vue"

let availableFunds = ref(10000)
const stocks = reactive({
    lists: [
        { name: "BMW", quantity: 0, holding:0, price: 110, total: 0, isIncluded:false },
        { name: "Google", quantity: 0, holding:0, price: 200, total: 0, isIncluded:false },
        { name: "Apple", quantity: 0, holding:0, price: 250, total: 0, isIncluded:false },
        { name: "TCS", quantity: 0, holding:0, price: 250, total: 0, isIncluded:false },
        { name: "LIC", quantity: 0, holding:0, price: 900, total: 0, isIncluded:false },
        { name: "Relience", quantity: 0, holding:0, price: 1200, total: 0, isIncluded:false },
    ],
})

export {stocks, availableFunds}
const inches = document.getElementById("inches") as HTMLInputElement
const centimeter = document.getElementById("centimeter") as HTMLInputElement

type Fnlistener = (this: HTMLInputElement, e: Event) => void

const convert: Fnlistener = function (e){
    if(e.target === inches){
        centimeter.value = (calculateCm(parseFloat(this.value))).toString()
    } else if(e.target === centimeter){
        inches.value = (calculateIn(parseFloat(this.value)).toFixed(4)).toString()
    }
}

inches.addEventListener("input", convert)
centimeter.addEventListener("input", convert)

function calculateCm(inche: number):number {
    return inche * 2.54
}

function calculateIn(centimeter: number):number {
    return centimeter / 2.54
}
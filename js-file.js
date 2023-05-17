const textholder = document.querySelector(".text")
const numholder = document.querySelector(".numholder")

const num7 = document.querySelector("#num7")
const num8 = document.querySelector("#num8")
const num9 = document.querySelector("#num9")
const numslash = document.querySelector("#numslash")
const numequal = document.querySelector("#numequal")


num7.addEventListener('click', function (e) {
    if (textholder.textContent.includes("/") || textholder.textContent.includes("x") || textholder.textContent.includes("-") || textholder.textContent.includes("+")) {
        numholder.textContent = textholder.textContent
        textholder.textContent = 7
    } else {
        textholder.textContent = textholder.textContent + 7
    }
})

num8.addEventListener('click', function (e) {
    textholder.textContent = textholder.textContent + 8
})

num9.addEventListener('click', function (e) {
    textholder.textContent = textholder.textContent + 9
})

//Operators Below

numslash.addEventListener('click', function (e) {
    if (textholder.textContent === " ") {

    } else {
        textholder.textContent = textholder.textContent + "/"
        numslash.setAttribute('style', 'background: antiquewhite')
    }
})

nummultiply.addEventListener('click', function (e) {
    if (textholder.textContent === " ") {

    } else {
        textholder.textContent = textholder.textContent + "x"
        nummultiply.setAttribute('style', 'background: antiquewhite')
    }
})

numplus.addEventListener('click', function (e) {
    if (textholder.textContent === " ") {

    } else {
        textholder.textContent = textholder.textContent + "+"
        numplus.setAttribute('style', 'background: antiquewhite')
    }
})

numminus.addEventListener('click', function (e) {
    if (textholder.textContent === " ") {

    } else {
        textholder.textContent = textholder.textContent + "-"
        numminus.setAttribute('style', 'background: antiquewhite')
    }
})

//Finalizers Below

numequal.addEventListener('click', function (e) {
    if (numholder.textContent.includes("/")) {
        numslash.setAttribute('style', 'background: lightgrey')

        let num1 = numholder.textContent.replace('/','')
        let num2 = textholder.textContent
        let solved = num1/num2
        
        textholder.textContent = solved.toFixed(1)
    } else if (numholder.textContent.includes("x")) {
        nummultiply.setAttribute('style', 'background: lightgrey')

        let num1 = numholder.textContent.replace('x','')
        let num2 = textholder.textContent
        let solved = num1*num2
        
        textholder.textContent = solved.toFixed(1)
    } else if (numholder.textContent.includes("+")) {
        numplus.setAttribute('style', 'background: lightgrey')

        let num1 = numholder.textContent.replace('+','')
        let num2 = textholder.textContent
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        let solved = num1 + num2
        
        textholder.textContent = solved.toFixed(1)
    } else if (numholder.textContent.includes("-")) {
        numminus.setAttribute('style', 'background: lightgrey')

        let num1 = numholder.textContent.replace('-','')
        let num2 = textholder.textContent
        let solved = num1 - num2
        
        textholder.textContent = solved.toFixed(1)
    } else {

    }
})
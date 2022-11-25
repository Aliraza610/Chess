// Inserting Images 

function insertImage() {
    document.querySelectorAll('.box').forEach(image =>{
        if (image.innerText.length !==0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else {
                image.innerHTML = `${image.innerText} <img class = 'allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()

// coloring 

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color =>{

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundcolor = 'rgb(240 , 201 , 150)'
        }

        if (a % 2 !== 0) {
            color.style.backgroundcolor = 'rgb(100 , 75 , 43)'
        }
    })
}
coloring()

// Function to not remove the same team element
function reddish(){
    document.querySelectorAll('.box').forEach(i1 =>{
        if(i1.style.backgroundcolor == 'pink'){
            document.querySelectorAll('.box').forEach(i2 =>{
                if (i2.style.backgroundcolor == 'green' && i2.innerText.length !==0) {
                    greenText = i2.innerText
                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if(a%2 == 0 && pinkColor == greenColor){
                        i2.style.backgroundcolor = 'rgb(240, 201 ,105)'
                    }

                    if(a%2 !==0 && pinkColor == greenColor){
                        i2.style.backgroundcolor = 'rgb(100, 75 , 43)'
                    }
                }
            })
        }
    })
}
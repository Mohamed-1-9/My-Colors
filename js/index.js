var next = document.getElementById("next")
var closeItem = document.getElementById("close")
var prev = document.getElementById("prev")
var itemcontainer = document.querySelector(".item")
var items = Array.from(document.getElementsByName("items"))
var color = document.querySelector("#color")
// ! to close the item
function closeItem1() {
    itemcontainer.classList.add("d-none")
}

closeItem.addEventListener("click", closeItem1)
// document.addEventListener("click", function (e) {
//     closeItem1()
// })
document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeItem1()
    }
})
// ! end
// * to open item
var index;
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click",(e) => {
        openItem()
        color.setAttribute("class",`${items[i].getAttribute("class")}`)
        index = i
    })
}
function openItem(){
    itemcontainer.classList.remove("d-none")
    
}
// * end
// ! next btn
function nextItem(){
    index++
    if(index ==items.length) index = 0 
    color.setAttribute("class",`${items[index].getAttribute("class")}`)
    
}
next.addEventListener("click",nextItem)
document.addEventListener("keydown",(e) => {
    if(e.key == "ArrowRight") nextItem()
    
})
// ! end
// ^ prev btn
function prevItem(){
    index--
    if(index <0) index= items.length-1
    color.setAttribute("class",`${items[index].getAttribute("class")}`)
    
}
prev.addEventListener("click",prevItem)
document.addEventListener("keydown",(e) => {
    if(e.key == "ArrowLeft") prevItem()
    
})
// ^ end
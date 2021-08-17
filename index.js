let toggle = document.querySelectorAll(".toggle")[0]
let navList = document.querySelectorAll(".nav-list")[0]
let navListLi = document.querySelectorAll(".nav-list li")
console.log(navListLi)

toggle.addEventListener("click", function(){
    let temoin = toggle.dataset.active
    if(temoin == "false"){
        navList.style.display = "block"
        toggle.dataset.active = "true"
    } else if (temoin == "true"){
        navList.style.display = "none"
        toggle.dataset.active = "false"
    }
})

navListLi.forEach(element => {

    element.addEventListener("click", function(){
        navList.style.display = "none"
        toggle.dataset.active = "false"
    })

});

console.log(toggle)
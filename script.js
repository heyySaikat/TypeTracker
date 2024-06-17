document.addEventListener("keydown", (e) =>{
    console.log(e);
    document.querySelector(".textbox").innerHTML = 'You entered\n        <div class="text"></div>\n      ';
    var key = e.key;
    document.querySelector(".text").insertAdjacentHTML("afterbegin", key);
})

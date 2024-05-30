let inputBox = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("#items");

btn.addEventListener("click",()=>{
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;  
    item.innerText = inputBox.value;
    console.log(item)
    item.appendChild(delBtn);
    ul.appendChild(item)
    inputBox.value="";
});

ul.addEventListener("click",(e)=>{
   if(e.target.nodeName=="I")
    {
        let listItem = e.target.parentElement.parentElement;
        console.dir(listItem)
        listItem.remove();
    }
})
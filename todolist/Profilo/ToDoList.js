let inputbox=document.querySelector("#input-box")
let button=document.getElementById("button")
let text=document.getElementById("list-contianer")

button.addEventListener("click",(e)=>{
    if(inputbox.value===""){
        alert("Please Enter SomeThing!")
    }else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value; 
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        text.appendChild(li)
    }
    inputbox.value=""
    saved()
})
text.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("complete")
        saved()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saved()
    }
})
function saved(){
    localStorage.setItem("data",text.innerText)
}
function show(){
    text.innerHTML=localStorage.getItem("data")
}

show();
//Checked class ekleme-çıkarma
let liste = document.querySelector("#list")

liste.addEventListener("click", function(ev)
{
    if(ev.target.tagName == "LI"){
        ev.target.classList.toggle("checked")
    }
},false)

function listedenSil()
{
    let close= document.querySelectorAll(".closeList")
    for(let i=0;close.length;i++){
        close[i].onclick = function (){
        var element = this.closest("LI")
        element.remove()
        }
    }
}  


let yapilacaklar = document.querySelector("#list")

const addItem = text =>
{
    let liDOM= document.createElement("li")
    liDOM.innerHTML=`${text} <button type="button" class="close closeList" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>`
    yapilacaklar.append(liDOM)
}

function newElement()
{
    let textDOM = document.getElementById("task")
    if( textDOM.value.trim() != ""){
        addItem(textDOM.value.trim())
        $("#liveToast").toast('show')
    }else{
        $("#liveToastError").toast('show')
    }
    
    textDOM.value=""    

    listedenSil()

}

listedenSil()
newElement()




const links = document.querySelectorAll(".alternate-style"),
      total_links = links.length;




function setActiveStyle(color){
     for(let i=0 ; i < total_links ; i++){
         if(color == links[i].getAttribute("title")){
             links[i].removeAttribute("disabled");
         }
         else {
             links[i].setAttribute("disabled","true");
         }
     }
}

// body skin
  

  const bodyskin = document.querySelectorAll(".body-skin"),
        totalBodySkin=bodyskin.length;     
    for(let i=0; i< totalBodySkin ;i++ ){
        bodyskin[i].addEventListener('change',function(){
            if(this.value == "Dark"){
                document.body.classList.add("dark");
            }
            else{
                document.body.classList.remove("dark");
            }
        })
    }    



document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
    document.querySelector(".styleSwitcher").classList.toggle("open");
})
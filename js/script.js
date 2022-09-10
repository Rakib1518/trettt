/*let togglerBtn = document.querySelector('nav .toggeLerBtn');
togglerBtn.addEventListener('click', sideBerOpen);

function  sideBerOpen(){
   let sideBar = document.querySelector('.sidebar');

   sideBar.classList.toggle('activeSidebar');
}


let Dark = document.querySelector('.button .dark');
let isDarkMode = false;
let heading = document.querySelector(".button h2");
let darkIcon = document.querySelector('.min .button.Btn');

Dark.addEventListener('click',DArkishColor);

function DArkishColor(){
   let mainDiv = document.querySelector('.min');
   mainDiv.classList.toggle('MinDivColo');
   
   isDarkMode = !isDarkMode;

   if (isDarkMode == true) {
      heading.innerHTML = "Dark Mode";
     
      heading.style.color='white';
      transition ='2s';
      darkIcon.style.marginTop = '-100%';

    } else {
      heading.innerHTML = "Light Mode";
     
      heading.style.color='black';
      transition ='2s';
      darkIcon.style.marginTop = '0px';
    }
    //   console.log(isDarkMode);
  }
   //if (isDarkMode == true){
   /*  heading.innerHTML ='Dark Mode'; 
   }
   else{
      heading.innerHTML ='Light Mode';
   }

}
*/
$(function(){
   let toggeErBtn = $("nav .toggeLerBtn");
   let sideBar = $(".sidebar");
   let isActive = false;
   let toggeLerBtn = $('.toggeLerBtn');
   let toggeLrBtn = $('.toggeLrBtn ');

   toggeErBtn.click(function(){
     
      sideBar.toggleClass("activeSidebar");
      isActive = !isActive;
     if (isActive ==true){
      toggeLerBtn.hide();
      toggeLrBtn.show();

     } else {
      toggeLerBtn.show();
      toggeLrBtn.hide();
     }
     
      
   });


});
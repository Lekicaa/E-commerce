  const close=document.querySelector(".close");  
  const open=document.querySelector(".ham");  
  const menu=document.querySelector(".menu")  
  close.addEventListener("click",()=>{  
    menu.style.visibility="hidden";  
  })  
  open.addEventListener("click",()=>{  
    menu.style.visibility="visible";  
  })

$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});
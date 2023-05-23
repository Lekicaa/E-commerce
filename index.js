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

function showDiscountedPrice() {
  // Dobivanje trenutne cijene iz prikazanog elementa
  const currentPriceElement = document.querySelector('.price1');
  const currentPrice = parseFloat(currentPriceElement.textContent);
console.log(currentPrice);
  // Izračunavanje snižene cijene (npr. 30% popusta)
  const discountedPrice = calculateDiscountedPrice(currentPrice, 30);

  // Prikaz snižene cijene (možete prilagoditi način prikaza prema potrebama)
  alert('Snižena cijena: ' + discountedPrice.toFixed(2));
}
// Funkcija koja izračunava sniženu cijenu
function calculateDiscountedPrice(currentPrice, discountPercentage) {
  const discountAmount = currentPrice * (discountPercentage / 100);
  return currentPrice - discountAmount;
}

function PostaviVrijeme() {
  var danas= new Date();	
  var sat=danas.getHours();
  var min=danas.getMinutes();
  var sek=danas.getSeconds();
  var vrijeme=sat+":"+min;
  document.getElementById("time").innerHTML = vrijeme;
}

function PostaviDatum() {
  var danas= new Date();	
  var dan=danas.getDate();	
  var mjesec=danas.getMonth();
  mjesec=mjesec+1;
  var godina=danas.getFullYear();
  var datum=dan+"/"+mjesec+"/"+godina;
  document.getElementById("date").innerHTML = datum;
}


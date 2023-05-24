function myFunction() {
    var x, text;

    x = document.getElementById("tezina").value;
    y=document.getElementById("visina").value;

    if (isNaN(x) || x < 1 || x > 200 || isNaN(y)|| y<1 || y>200) {
        text = "Unos nije validan";
    } else if( x >=40 && x<=50 && y>150) {
        text = "Vaša veličina je S."
    } else if( x >=51 && x<=61 && y>160){
        text = "Vaša veličina je M."
    } else if (x >=62 && x<=75 && y>160) {
        text = "Vaša veličina je L."
    } else if (x >=75 && x<=95 && y>160) {
        text = "Vaša veličina je XL."}
    else
        text = "Nažalost nismo u mogućnosti da odredimo vašu veličinu. "


    document.getElementById("demo").innerHTML = text;
}

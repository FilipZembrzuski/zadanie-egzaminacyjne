function sprawdz(){
    var haslo = document.getElementById("haslo").value;

    var haselko = new RegExp('[0-9]{1}');

    var wynik = haselko.test(haslo);

    console.log(wynik);

    if(haslo.length >= 4 && wynik == true){
        if(haslo.length < 7){
            document.getElementById("wynik").innerHTML = "Miernik jakości hasła: średnie";
        }
        else{
            document.getElementById("wynik").innerHTML = "Miernik jakości hasła: silne"
        }
    }
    else{
        document.getElementById("wynik").innerHTML = "Miernik jakości hasła: słabe";
    }
}
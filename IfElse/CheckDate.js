let month =3;
let day =19;
if ( month >= 7 || month <= 2 ){
    console.log("False")
}
else{
    if(month==3 && day<20){
        console.log("False")
    }
    else if(month == 6 && day > 20){
        console.log("False");
    }
    else{
        console.log("True");
    }
}

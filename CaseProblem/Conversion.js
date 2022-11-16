const number = 15;
 const conversion=3;
switch (conversion) {
    case 1:
        let feetToInch = number * 12;
        console.log("Feet to Inch : " +feetToInch);
        break;
    case 2:
        let feetToMeter = number / 3.281;
        console.log("Feet to Meter : " +feetToMeter);
        break;
    case 3:
        let inchToFeet = number / 12;
        console.log("Inch to Feet : " +inchToFeet);
        break;    
    case 4:
        let meterToFeet = number * 3.281;
        console.log("Inch to Feet : " +meterToFeet);
        break
    default:
        console.log("You have entered the wrong options!!!");
        break;
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function celciousToFahrenheit(celcius){
    return celcius * 1.8 + 32;
}

module.exports = {generateRandomNumber, celciousToFahrenheit};

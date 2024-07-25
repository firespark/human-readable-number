module.exports = function toReadable (number) {
    // 0, 10 - 19 - exceptions array
    // 1-9 - units array
    // 20, 30 .. 90 - tens array

    // Check number. If in exceptions array, return its value

    // Else check number length:

    // If 1, return units[number - 1]

    // If 2, return tens[number[0] - 1] + units[number[1] - 1]

    // If 3, returns units[number[0] - 1] + 'hundred' + tens[number[0] - 1] + units[number[1] - 1]

    console.log('111');


  
}
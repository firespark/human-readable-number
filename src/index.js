module.exports = function toReadable (number) {

    
    const exceptionsArr = {
        0: 'zero',
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven', 
        8: 'eight', 
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty', 
        30: 'thirty', 
        40: 'fourty', 
        50: 'fifty', 
        60: 'sixty', 
        70: 'seventy', 
        80: 'eighty', 
        90: 'ninety'
    };

    
    
    if (exceptionsArr[number]) {
        
        return exceptionsArr[number];
    }

    if (number < 100) {
        
        // First figure in number
        const figure1 = Math.trunc(number / 10);
        
        // Second figure in number
        //const figure2 = Math.trunc((number / 10 - figure1)) * 10; // This does not work correctly
        const figure2 = parseInt(number.toString()[1]);

        return exceptionsArr[figure1 * 10] + ' ' + exceptionsArr[figure2];


    }

    if (number > 100) {
        // First figure in number
        const figure1 = Math.trunc(number / 100);
        // Second and third figures
        const figureTens = parseInt(number.toString()[1] + number.toString()[2]);

        return exceptionsArr[figure1] + ' hundred and ' + toReadable(figureTens);
    }

    

    return;
    
}
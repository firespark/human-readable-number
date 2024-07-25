module.exports = function toReadable (number) {
    
    const exceptionsArr = [
        [0, 'zero'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
    ];

    const unitsArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tensArr = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (exceptionsArr[number]) {
        return exceptionsArr[number];
    }

    else {
        const numberLength = number.length;

        switch (numberLength) {

            case 1:
                return units[number - 1];
                break;

            case 2:
                return tens[number[0] - 1] + ' ' + units[number[1] - 1];
                break;

            case 3:
                return units[number[0] - 1] + ' hundred ' + tens[number[0] - 1] + ' ' + units[number[1] - 1];


        }

        return;
    }



}
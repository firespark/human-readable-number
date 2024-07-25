module.exports = function toReadable (number) {

    const getFigureFromNumber = function (figurePosition) {
        const numberStr = number.toString();
        return parseInt(numberStr[figurePosition]);
    }
    
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

        const numberLength = number.toString().length;

        switch (numberLength) {

            case 1:
                return unitsArr[number - 1];
                break;

            case 2:

                return tensArr[getFigureFromNumber(0) - 2] + ' ' + unitsArr[getFigureFromNumber(1) - 1];
                break;

            case 3:
                return unitsArr[getFigureFromNumber(0) - 1] + ' hundred ' + tensArr[getFigureFromNumber(0) - 2] + ' ' + unitsArr[getFigureFromNumber(1) - 1];


        }

        return;
    }



}
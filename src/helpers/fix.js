//this function will return to fixed value of number
//the deference is you don't have to worry about validation
const fix = (number, trailing = 2) => {
    if(isNaN(number))
        return parseFloat('0').toFixed(trailing);
    else if(typeof number === 'number')
        return parseFloat(number).toFixed(trailing);
}

export { fix }
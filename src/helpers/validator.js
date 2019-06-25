export const handleInvalidDate = (date) => {
    const valid = date instanceof Date && !isNaN(date);
    if(!valid)
        throw Error('Invalid date');
}

export const handleUncountable = (data) => {
    if(typeof data === ('function' || 'symbol' || 'boolean' || 'undefined')){
        throw Error('Uncountable property');
    }
    return true;
} 
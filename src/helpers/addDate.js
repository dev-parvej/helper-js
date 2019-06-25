import { handleInvalidDate } from './validator'
//this function will add to days
//first parameter is the date and the last parameter is the number fo date you want add
//if both parameter are missing it gonna return current date plus one day

const addDate = function(startDate = new Date(), numberOfDays = 1){
    handleInvalidDate(startDate); //throw error on invalid date
    let returnDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()+numberOfDays
    );
    return returnDate;
};

export { addDate }
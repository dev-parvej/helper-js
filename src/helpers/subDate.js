import {handleInvalidDate} from './validator'
//this function will substract to days
//first parameter is the date and the last parameter is the number fo date you want substract
//if both parameter are missing it gonna return current date minus one day
const subDate = ( startDate = new Date(), numberOfDays = 1) => {
    handleInvalidDate(startDate); //through error if the date is invalid
    startDate.setDate(startDate.getDate() - numberOfDays);
    return startDate.toISOString().slice(0,10)
}

export {subDate};
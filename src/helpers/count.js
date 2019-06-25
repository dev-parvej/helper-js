import { handleUncountable } from './validator'
//this function will retiurn the counted value of object/array
//if the parameter is an object then it will return total number keys(Element i guess)
//if the parameter is a string then it will return total string length. Althoiugh string and array both length counted in same way i am just bugging arround

const count = (data) => {
    handleUncountable(data);

    if(Array.isArray(data)){
        return data.length;
    }else if(typeof data === 'object'){
        return Object.keys(data).length;
    }else if(typeof data === 'string'){
        return data.length;
    }else if(typeof data === 'number'){
        return data.toString().length;
    }
    return 0;
}

export { count };
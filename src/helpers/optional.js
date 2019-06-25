//optional parameter
//it's kind of laravel optional parameter
// deference is here you have to pass the parameter as string
let optional = (obj, ...props) => {
    if(typeof obj !== 'object')
        throw Error('First parameter must be an Object');
    const val = obj[props[0]];
    if(props.length === 1 || !val) return val;
    const rest = props.slice(1);
    return optional.apply(null, [val, ...rest])
};

export { optional }
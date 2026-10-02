function push(arr,ele){
    arr.push(ele);
    return arr;
}

function pop(arr){
    arr.pop();
    return arr;
}

function max(arr){
    return Math.max(...arr);
}

function min(arr){
    return Math.min(...arr);
}

module.exports={push,pop,max,min};
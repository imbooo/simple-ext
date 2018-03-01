/**
 * @param {Function} fn
 * */
Array.prototype.mapSeries = async function(fn){
    let result = [];
    for(let i of this){
        let a = await fn(i,this.indexOf(i),this.length);
        result.push(a);
    }

    return result;
};
module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let mas1 = [];
    let mas2 = [];
    for (let elem of bracketsConfig){
        mas1.push(elem[0]);
        mas2.push(elem[1]);
    }
    let lenStr = str.length;
    if (lenStr%2 !== 0) return false;
    for (let i = 0; i < lenStr; i++) {
        if(mas1.includes(str[i]) && mas2.includes(str[i])){
            let s = stack.pop();
            if( s !== undefined && s !== str[i]){
                stack.push(s);
                stack.push(str[i]);
            }
            else if( s === undefined ){
                stack.push(str[i]);
            }
        }
        else {
            if (mas1.includes(str[i])){
                stack.push(str[i]);
            }
            else if (mas2.includes(str[i])){
                if(mas1.indexOf(stack.pop(),0) !== mas2.indexOf(str[i],0)) {
                    return false
                }
            }
        }
    }
    return stack.length === 0;
}

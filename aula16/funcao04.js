function fatorial(num){
    let fat = 1;
    let resp = ''
    for(let c = num; c > 1; c--){
        fat = fat * c;
        resp = resp + c + 'x'
    }
    console.log(resp)
    return fat
}

console.log(fatorial(5));

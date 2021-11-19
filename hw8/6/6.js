let zirka = 9;
let probel = 1;

for(let a = 1; a<=10;a++){
    let b = ' ';

    for(let i = 1; i<=probel; i++){
        b += ' ';
    }
    for(let i = 1; i<=zirka; i++){
        b += '*'
    }
    
    zirka--
    probel++
    console.log(b)
}
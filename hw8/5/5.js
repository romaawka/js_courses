let zirka = 1;
let probel = 9;

for(let a = 1; a <= 10; a++){
    let b = ' ';

    for(let i = 1; i <=probel; i++){
        b += ' '; 
    }
    
    for(let i = 1; i <= zirka; i++){
        b += '*';
    }
    zirka++
    probel--
    console.log(b)
}


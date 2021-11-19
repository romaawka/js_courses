let zirka = 1;
let probel = 5;

for (let a = 1; a <= 6; a++) {
    let b = '';
    for (let r = 1; r <= probel; r++) {
        b += ' '
    }
    for (let i = 1; i <= zirka; i++) {
        b += '*'
    }
    zirka = zirka + 2;
    probel--
    console.log(b)
}

zirka = 9;
probel = 1;

for (let a = 1; a <= 5; a++) {
    let b = '';
    for (let r = 1; r <= probel; r++) {
        b += ' '
    }
    for (let i = 1; i <= zirka; i++) {
        b += '*'
    }
    zirka = zirka - 2;
    probel++
    console.log(b)
}

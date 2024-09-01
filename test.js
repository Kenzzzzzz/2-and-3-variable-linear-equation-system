const var_a = [];
const var_b = [];
const var_c = [];
const result = [];

const pos_a = [];
const pos_b = [];
const pos_c = [];

var_a.push(1);
var_b.push(2);
var_c.push(3);
result.push(14);

let total = var_a.length;
possibilityCheck(total);

function possibilityCheck(total){
    console.log(`CP1`);
    
    console.log(`CP2`);
    if(total == 1){
        console.log(`CP3`);
        for(let i = 0; i < 30; i++){
            for(let j = 0; j < 30; j++){
                for(let k = 0; k < 30; k++){
                    let res = (var_a[0] * i) + (var_b[0] * j) + (var_c[0] * k);
                    if(res == result){
                        //console.log(`a = ${i}, b = ${j}, c = ${k}`);                
                        pos_a.push(i);
                        pos_b.push(j);
                        pos_c.push(k);
                    }
                }
            }
        }
    }else{
        console.log(`CP4`);
        let lenPos = pos_a.length;
        let lenVar = var_a.length;

        console.log(`pos_a = ${pos_a.length}`);
        console.log(`var_a = ${var_a.length}`);
        i = lenVar-1;
        console.log(`i = ${i}`);
        console.log(`CP5`);
        console.log(`lenPos awal = ${lenPos}`);

        for(let j = 0; j < lenPos; j++){
            console.log(`CP6`);
            console.log(`j = ${j}`);

            console.log(var_a[i]);
            console.log(var_b[i]);
            console.log(var_c[i]);
            console.log(result[i]);

            console.log(pos_a[j]);
            console.log(pos_b[j]);
            console.log(pos_c[j]);
            

            if((var_a[i] * pos_a[j] + var_b[i] * pos_b[j] + var_c[i] * pos_c[j] != result[i])){
                console.log(`CP7`);
                console.log(j);
                
                console.log(`Sebelum: ` , pos_a[j], pos_b[j], pos_c[j]);
                pos_a.splice(j, 1);
                pos_b.splice(j, 1);
                pos_c.splice(j, 1);
                console.log(`Sesudah: `, pos_a[j], pos_b[j], pos_c[j]);
                j--;
                lenPos--;
            }
            console.log(`lenPos akhir = ${lenPos}\n`);
        }
        console.log(`Total Pos = ${pos_a.length}`);

        // for(let i = 1; i < lenVar; i++){

        // }
    }   

    // for(let x = 0; x == total; x++){
        
    // }

    console.log(`NIH LISTNYA: `);
    
    let len = pos_a.length;
    for(let y = 0; y < len; y++){
        // const table = document.getElementById('possibility-table').getElementsByTagName('tbody')[0];
        // const newRow = table.insertRow();

        // const cellA = newRow.insertCell(0);
        // const cellB = newRow.insertCell(1);
        // const cellC = newRow.insertCell(2);

        // cellA.textContent = pos_a[y];
        // cellB.textContent = pos_b[y];
        // cellC.textContent = pos_c[y];

        console.log(`a=${pos_a[y]}, b=${pos_b[y]}, c=${pos_c[y]}`);
        
    }
}

console.log(`MASUK KEDUA`);
var_a.push(3);
var_b.push(2);
var_c.push(1);
result.push(10);

total = var_a.length;
possibilityCheck(total);

console.log(`MASUK KETIGA`);
var_a.push(1);
var_b.push(1);
var_c.push(1);
result.push(6);

total = var_a.length;
console.log(`Total: ${total}`);
possibilityCheck(total);

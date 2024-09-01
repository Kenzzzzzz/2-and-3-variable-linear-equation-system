const var_a = [];
const var_b = [];
const result = [];

function threevles() {
    window.location.href = `3vles.html`;
}

function addEquation() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const res = document.getElementById('res').value;

    if (a && b && res) {
        const table = document.getElementById('equation-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cellA = newRow.insertCell(0);
        const cellB = newRow.insertCell(1);
        const cellRes = newRow.insertCell(2);

        cellA.textContent = a;
        cellB.textContent = b;
        cellRes.textContent = res;

        var_a.push(a);
        var_b.push(b);
        result.push(res);

        let total = var_a.length;
        console.log(total);
        
        possibilityCheck(total);

        // Clear input fields
        document.getElementById('a').value = '';
        document.getElementById('b').value = '';
        document.getElementById('res').value = '';
    } else {
        alert('Please fill in all variables.');
    }
}

const pos_a = [];
const pos_b = [];

function possibilityCheck(total){
    const possibilityTable = document.getElementById('possibility-table').getElementsByTagName('tbody')[0];
    possibilityTable.innerHTML = '';

    for(let x = 0; x < total; x++){
        if(x == 0){
            for(let i = 0; i < 50; i++){
                for(let j = 0; j < 50; j++){
                    let res = (var_a[x] * i) + (var_b[x] * j);
                        if(res == result){
                            console.log(`a = ${i}, b = ${j}`);                
                            pos_a.push(i);
                            pos_b.push(j);
                        }
                }
            }
        }else{
            let lenPos = pos_a.length;
            let lenVar = var_a.length;

            for(let i = 1; i < lenVar; i++){
                for(let j = 0; j < lenPos; j++){
                    if((var_a[i] * pos_a[j] + var_b[i] * pos_b[j]!= result[i])){
                        pos_a[j].pop;
                        pos_a.splice(j, 1);
                        pos_b.splice(j, 1);
                        j--;
                        lenPos--;
                    }
                }
            }
        }   
    }

    let len = pos_a.length;
    for(let y = 0; y < len; y++){
        const table = document.getElementById('possibility-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cellA = newRow.insertCell(0);
        const cellB = newRow.insertCell(1);

        cellA.textContent = pos_a[y];
        cellB.textContent = pos_b[y];
    }
}   

function clearFields() {
    // Clear input fields when the Clear button is clicked
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';

    var_a.length = 0;
    var_b.length = 0;
    result.length = 0;
    pos_a.length = 0;
    pos_b.length = 0;

    // Clear the equation table
    const equationTable = document.getElementById('equation-table').getElementsByTagName('tbody')[0];
    equationTable.innerHTML = ''; // Clear all rows

    // Clear the possibility table
    const possibilityTable = document.getElementById('possibility-table').getElementsByTagName('tbody')[0];
    possibilityTable.innerHTML = ''; // Clear all rows
}
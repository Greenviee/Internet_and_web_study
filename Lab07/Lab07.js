var n1 = prompt("Enter the first integer (q1)", 0);
var n2 = prompt("Enter the second integer (q1)", 0);
var n3 = prompt("Enter the integer (q2)", 0);
var name_ = prompt("Your name : ", "name");
var major = prompt("Your major :", "major");
var n4 = prompt("Enter the integer (q4)", 0);

function q1_solve() {
    if (n1 > n2) {
        document.getElementById('q1').innerHTML = `${n1} is greater than ${n2}`;
    }
    else if (n1 < n2) {
        document.getElementById('q1').textContent = `${n1} is smaller than ${n2}`;
    }
    else {
        document.getElementById('q1').textContent = `${n1} and ${n2} are equal`;
    }
}
q1_solve();

document.getElementById('N').textContent = n3;

table = document.getElementById('q2');
for (let k = 0; k <= n3; k++) {
    for (let i = 0; i < table.rows.length; i++) {
        const newCell = table.rows[i].insertCell(-1);
        if (i === 0) {
            newCell.innerText = k;
        }
        else {
            newCell.innerText = k * k;
        }
    }
}

if (name_ != null && major != null) {
    document.getElementById('q3').textContent = `Hello, my name is ${name_} and my major is ${major}.`;
}
else if (name_ != null) {
    document.getElementById('q3').textContent = `Hello, my name is ${name_}.`;
}
else if (major != null) {
    document.getElementById('q3').textContent = `Hello, my major is ${major}.`;
}
else {
    document.getElementById('q3').textContent = 'Hello!'
}
document.getElementById('q4-num').textContent = n4;

var to_sum = parseInt(n4, 10);
var sum = 0;
var sum_even = 0;
var sum_odd = 0;
for (let i = 1; i <= to_sum; i++) {
    sum += i;
    if (i % 2 == 0) {
        sum_even += i;
    }
    else {
        sum_odd += i;
    }
}
document.getElementById('sum').textContent = sum;
document.getElementById('sum-even').textContent = sum_even;
document.getElementById('sum-odd').textContent = sum_odd;
function validateArr() {
    const inputString = document.getElementById('arr').value
    const arr = inputString.split(' ');
    let odd = 0;
    let even = 0;
    arr.forEach(element => {
        element%2 ? odd++ : even++
    });
    document.getElementById('outputDiv').innerText = odd > even ? even : odd
}
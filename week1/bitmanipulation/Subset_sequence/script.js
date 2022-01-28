function getSubset() {
    const initialArr = Array(40).fill(1);
    for(i=1;i<40;i++){
        initialArr[i] = initialArr[i-1]*3;
    }
    const num = Number(document.getElementById('num').value)
    const binaryNum = num.toString(2).split('');
    let numberOfOne = 0;
    const subsetArr = [];
    for(let i =0;i<binaryNum.length;i++){
        if (binaryNum[i] === '1') {
            subsetArr.push(initialArr[i])
            numberOfOne++;
        }
    }
    document.getElementById('outputDiv').innerText = `total number of element is ${numberOfOne} and subset is {${subsetArr}}`;
}
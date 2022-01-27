function maximumSchools() {
    let boxes = Number(document.getElementById('boxes').value);
    const school = document.getElementById('school').value;
    const schoolArray = school.split(' ')

    //sort the array 
    schoolArray.sort((a,b) => a-b)  
    let result = 0;
    for(let i =0 ;i<schoolArray.length;i++){
        if (boxes >= schoolArray[i]) { // reduse the boxes so get idea to maximum number of school
            result ++;
            boxes -= schoolArray[i];
        }
        else{
            break;
        }
    }
    document.getElementById('outputDiv').innerText = `maximum number of schools is ${result}`
}
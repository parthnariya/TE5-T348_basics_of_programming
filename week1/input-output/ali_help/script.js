// https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/cartag-948c2b02/


/**
 * 
 * @returns display the out put on the page
 */
function validateTag() {
    const inputTag = document.getElementById("inputTag").value;
    // console.log(inputTag);
    const arr = inputTag.split("")
    let result;
    // console.log(arr);
    if ((arr[0] + arr[1]) % 2 === 0) {
        if (['A', 'E', 'I', 'O', 'U'].includes(arr[2])) {
            if ((arr[3] + arr[4]) % 2 === 0) {
                if ((arr[4] + arr[5]) % 2 === 0) {
                    if ((arr[7] + arr[8]) % 2 === 0) {
                        result = "valid"
                    }
                    else {
                        result = "invalid1";
                    }
                }
                else {
                    result = "invalid2";
                }
            }
            else {
                result = "invalid3";
              
            }
        }
        else {
            result = "invalid5";
           
        }
    }
    else {
        result = "invalid6";
    }
    document.getElementById("outputDiv").innerText = `${inputTag} is ${result}`
    document.getElementById("inputTag").value = ""
    return
}
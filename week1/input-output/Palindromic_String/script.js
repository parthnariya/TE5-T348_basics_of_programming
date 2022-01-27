// https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/palindrome-check-2/

function palindronCheck() {
  const inputString = document.getElementById("inputString").value;
  const arr = inputString.split("");
  let i = 0;
  let j = arr.length - 1;
  let result = true;
  // console.log(arr);
  for (i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[j]) {
      result = false;
      break;
    }
    j--;
  }
  document.getElementById("outputDiv").innerText = `"${inputString}" is ${
    result ? "a" : "not a"
  } palindron`;
  document.getElementById("inputString").value = ""
}

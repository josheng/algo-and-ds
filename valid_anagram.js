let validAnagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};
  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1
  }
  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1
  }
  console.log(freq1);
  console.log(freq2);
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]){
      return false;
    }
  }
  return true;
}

console.log(validAnagram('',''));
console.log(validAnagram('aaz','zza'));
console.log(validAnagram('rat','tar'));

let findSubstrings = s => {
  if (s.length < 2) return s; // This is our break condition

  var permutations = []; // This array will hold our permutations
  for (var i = 0; i < s.length; i++) {
    var char = s[i];

    // Cause we don't want any duplicates:
    if (s.indexOf(char) != i)
      // if char was used already
      continue; // skip it this time

    var remainings =
      s.slice(0, i) + s.slice(i + 1, s.length); //Note: you can concat ss via '+' in JS

    for (var subPermutation of findSubstrings(remainings))
      permutations.push(char + subPermutation);
  }
  return permutations;
}

console.log(findSubstrings("abac"));

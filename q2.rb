def findSubstrings(s)
    # Write your code here
    arr = []
    counter = 1
    while counter < s.length do
      arr << s.chars.permutation(counter).to_a
      counter += 1
    end
    p arr
end

findSubstrings("abac")

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

cleanString = (strng) => {
    const returnString = [];
    for(let i = 0; i < strng.length;i++)
    {strng[i] === "#" ? returnString.pop() : returnString.push(strng[i])    
    };
  return returnString.join('');
}

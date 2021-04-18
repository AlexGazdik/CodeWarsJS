// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

//     Strings passed in will consist of only letters and spaces.
//     Spaces will be included only when more than one word is present.




function spinWords(words) {
       let reverseString = ''
        let wordList = words.split(' ')
        for(let i = 0;i < wordList.length;i++) {
            if(wordList[i].length > 4) {
                reverseString += wordList[i].split("").reverse().join("");
            }else{reverseString += wordList[i]
        }reverseString += " "
    }
    return reverseString.slice(0,reverseString.length -1)
}

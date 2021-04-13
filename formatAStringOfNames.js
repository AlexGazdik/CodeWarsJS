// // Given: an array containing hashes of names
// // Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))//, 'Bart, Lisa, Maggie, Homer & Marge',
// // "Must work with many names")
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))//, 'Bart, Lisa & Maggie',
// // "Must work with many names")
// console.log(list([{name: 'Bart'},{name: 'Lisa'}]))//, 'Bart & Lisa', "Must work with two names")
// console.log(list([{name: 'Bart'}]))//, 'Bart', "Wrong output for a single name")
// console.log(list([]))//, '', "Must work with no names")




list = (names) => {
    const length = names.length
    if (length === 0) {
        return [];
    }else if 
        (length === 1) {
            return names[0].name;
    }else if (length === 2) {
        return names[0].name + ' & ' + names[1].name
    }else    {
    const lastEntry = names.pop();
    let retrnString = ''
    names.forEach(element => {
        element.name = element.name + ', '
    })
    names.push({name: '& '})
    names.push(lastEntry)
    names.forEach(element => {
        retrnString += element.name
    });return retrnString
    }
}

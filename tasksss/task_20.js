let styles = ['Djazz', 'Bluzz'];

styles.push('Rock-n-Roll')

const findAndReplaceCenter = function(array, element) {
    let centerID = Math.floor(array.length / 2)
    array[centerID] = element
    return array
}

findAndReplaceCenter(styles, 'Classica');

console.log(styles.shift())
styles.unshift('Rap', 'Reggi')

console.log(styles)
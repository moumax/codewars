function makePassword(phrase) {
    let arr = []
    arr.push(phrase[0])
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === " ") arr.push(phrase[i + 1])
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "i" || arr[j] === "I") arr[j] = 1
        if (arr[j] === "o" || arr[j] === "O") arr[j] = 0
        if (arr[j] === "s" || arr[j] === "S") arr[j] = 5
    }
    return arr.join('')
}
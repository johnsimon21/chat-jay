export function getInitialLettersOfName(name: string): string {
    const arrayEachName = name.split(" ")
    const initialOfFirstName = arrayEachName[0][0]
    const initialOfLastName = arrayEachName.length > 1 ? arrayEachName[arrayEachName.length - 1][0] : '';
    const abbreviatianOfName = initialOfFirstName.concat(initialOfLastName)

    return abbreviatianOfName
}

export function getRandomColor(): string {

    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let randomPosition = 0
    let randomNumber = ""
    let alphaNumeric = ""

    for (let index = 0; index < 3; index++) {
        randomPosition = Math.floor(Math.random() * 4)
        randomNumber = (Math.floor(Math.random() * 10)).toString()
        const letter = alphabet[randomPosition];
        alphaNumeric += randomNumber.concat(letter);
    }

    return ("#" + alphaNumeric)
}

export function getInitialLettersOfName(name: string): string {
    const arrayEachName = name.split(" ")
    const initialOfFirstName = arrayEachName[0][0]
    const initialOfLastName = arrayEachName[arrayEachName.length - 1][0]
    const abbreviatianOfName = initialOfFirstName.concat(initialOfLastName)

    return abbreviatianOfName
}

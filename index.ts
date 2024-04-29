const words = [
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour'
]

const pruneAndSort = (word: any): string => {
    return String(word).replace(/\s+/g, '').toLocaleLowerCase().split("").sort().join("");
}

const findAndGroupAnagrams = (wordArray: string[]): string[][] => {
    const anagramMap: Map<string, string[]> = new Map(); 

    wordArray.forEach(word => {
        const anagramKey = pruneAndSort(word);
        const anagramCollection = anagramMap.get(anagramKey) || [];
        anagramCollection.push(word);
        anagramMap.set(anagramKey, anagramCollection);
    });

    return [...anagramMap.values()];
};

console.log(findAndGroupAnagrams(words));
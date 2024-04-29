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

const pruneAndSort = (word: string): string => {
    return word.replace(/\s+/g, '').toLocaleLowerCase().split("").sort().join("");
}

const isAnagram = (word1: string, word2:string): boolean => {
    return pruneAndSort(String(word1)) === pruneAndSort(String(word2));
}

const findAndGroupAnagrams = (wordArray: string[]): (string[])[] => {
  const result: (string[])[] = [];

  for (let i = 0; i < wordArray.length; i++) {
    const alreadyFound = result.flat().find((word) => word === wordArray[i]);

    if (alreadyFound) {
      continue;
    }

    let current = new Set<string>();
    current.add(wordArray[i]);

    for (let j = 0; j < wordArray.length; j++) {
      if (current.has(wordArray[j])) {
        continue;
      }

      if (isAnagram(wordArray[i], wordArray[j])) {
        current.add(wordArray[j]);
      }
    }

    result.push([...current]);
  }

  return result;
};

console.log(findAndGroupAnagrams(words));
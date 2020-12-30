export function getLetterMatchCount(guessedWord, secretWord){
const secterLetterSet = new Set(secretWord.split(''))
const guessedLetterSet = new Set(guessedWord.split(''))
return [...secterLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}
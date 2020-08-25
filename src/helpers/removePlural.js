export const removePlural = (word) => {
    if (word[word.length - 1] === 's') {
        return word.substring(0, word.length -1 );
    }
    return word;
};

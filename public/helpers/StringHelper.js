class StringHelper {
    /**
     * @param {String} word
     */
    static ucfirst(word) {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    }
}

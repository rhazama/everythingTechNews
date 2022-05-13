module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date)}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    }
}
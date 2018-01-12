class StringUtil {
    static concatWithSpaceBetween(text1,text2) {
        return `${text1} ${text2}`
    }
    static joinWithSeparator(texts,separator) {
        return texts.join(separator)
    }
    static split(text,separator) {
        return text.split(separator)
    }
    static captializeWord(text) {
        return `${text.substring(0,1).toUpperCase()}${text.substring(1,text.length)}`
    }
    static capitalizeSentence(sentence) {
        return sentence.split(" ").map(StringUtil.captializeWord).join(" ")
    }
}
module.exports = StringUtil

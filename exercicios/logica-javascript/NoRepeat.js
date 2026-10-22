function primeiroNaoRepetido(str) {
    const frequencia = {};

    for (const char of str) {
        frequencia[char] = (frequencia[char] || 0) + 1;
    }

    for (const char of str) {
        if (frequencia[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(primeiroNaoRepetido("abracadabra")); 
console.log(primeiroNaoRepetido("aabbcc"));     
console.log(primeiroNaoRepetido("leetcode"));    
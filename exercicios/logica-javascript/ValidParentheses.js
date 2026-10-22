function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (map[char]) {
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()[]{}")); 
console.log(isValid("(]"));     
console.log(isValid("([)]"));  
console.log(isValid("{[]}"));   
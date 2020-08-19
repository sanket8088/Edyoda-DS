
// Question 1 (Balance Paranthesis)
const balancePara = (mStr) => {
    stack = []
    start = ["[", "{", "("]
    end = ["]", "}", ")"]
    c=0
    for (i = 0; i < mStr.length; i++) {
        if (start.includes(mStr[i])) {
            stack.push(mStr[i])
        }
        else if (end.includes(mStr[i])) {
            c++
            closeIndex = end.indexOf(mStr[i])
            lastIndex = start.indexOf(stack[stack.length - 1])
            if (closeIndex === lastIndex) {
                stack.pop()
            }
            else {
                return i + 1
            }
        }

    }
    if (stack.length == 0) {
        return "Success"
    }
    else {
        if (c == 0) {
            return 1
        }
        return mStr.indexOf(stack[stack.length - 1]) + 1
    }

}

// console.log(balancePara("{[}"))

//End of question one 



// Question 2 (Stack)

class stack {
    constructor() {
        this.count = 0
        this.storage = {}
    }
    push(n) {
        this.storage[this.count] = n
        this.count++
        return n
    }
    pop() {
        if (this.count === 0) {
            return "No value to pop"
        }
        this.count--
        let delItem = this.storage[this.count]
        delete this.storage[this.count]
        return delItem
    }
    max() {
        if (this.count === 0) {
            return "No value to pop"
        }
        let maximum = this.storage[0]
        for (let i in this.storage) {
            if (this.storage[i] > maximum) {
                maximum = this.storage[i]
            }
        }
        return maximum
    }
}

// a = new stack()
// console.log(a.push(3))
// console.log(a.push(1))
// console.log(a.push(2))
// console.log(a.max())
// console.log(a.pop())
// console.log(a)

// End of question 2

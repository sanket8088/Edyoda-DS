// Without Stack

// const bracket = (a) => {
//     let b = a.split("")
//     let countOpen = 0
//     let countClose = 0

//     for (i = 0; i < b.length; i++) {
//         if (b[i] == "{") {
//             countOpen++
//         }
//         else {
//             countClose++
//         }

//     }

//     if (countOpen == countClose) {
//         return true
//     }
//     return false
// }


// let re = bracket("{{{}}}")
// console.log(re)


// With stack
// const withStack = (a) => {
//     let map = { "{": "}", "(": ")", "[": "]" }
//     stack = []
//     for (i = 0; i < a.length; i++) {
//         if (a[i] in map) {
//             stack.push(a[i])
//         }
//         else {
//             lastElement = stack[stack.length - 1]
//             if (map[lastElement] == a[i]) {
//                 stack.pop()
//             }
//             else {
//                 return false
//             }
//         }
//     }
//     if (stack.length == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// let re = withStack("{(())}")
// console.log(re)





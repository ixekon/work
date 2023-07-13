import _ from 'lodash'
let result = ''
for (let index = 0; index < 15; index++) {
    result += '-' + Math.round(Math.random() * 100)

}
console.log(result.slice(1))  
console.log(_.last(['one', 'two']));
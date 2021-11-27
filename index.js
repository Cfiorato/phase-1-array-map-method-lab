const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//splits the strings by space
// const splitFn = string => string.split(" ")
// //Caps first letter in each word
// function tCaseFn(word){
//   return word.charAt(0).toUpperCase() + word.slice(1)
// }
// //joins array into one string
// function joinFn(array){
//   return array.join(" ")
// }
// let test = ["toot", "fart", "gas", "flatulence"]

//works doesn't trigger learn though?
// let tCasedTitles = []
// function titleCased(tutorials){
//   let splitStr = tutorials.map(splitFn)
//   splitStr.map(function(array){
//     let toAdd = array.map(tCaseFn)
//     tCasedTitles.push(toAdd)
//   })
//   let titleCasedTitles = tCasedTitles.map(joinFn)
//   return titleCasedTitles
//   }

const titleCased = () => {
  return tutorials.map(function(title){
    return title.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
  })
  // let tCasedTitles = []
  // let splitStr = tutorials.map(function(string){
  //   return string.split(" ")
  // })
  // splitStr.map(function(array){
  //   let toAdd = array.map(function(word){
  //     return word.charAt(0).toUpperCase() + word.slice(1)  
  //   })
  //   return tCasedTitles.push(toAdd)
  // })
  // let titleCasedTitles = tCasedTitles.map(function(list){
  //   return list.join(" ")
  // })
  // return titleCasedTitles

  }

// const newTitles = titleCased(tutorials);

console.log(titleCased());

// console.log(titleCased(tutorials))
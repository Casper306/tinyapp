// function generateRandomString() {
//   const string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let result = '';
//   for (let i = 0; i < string; i++) {
//     result += string[Math.floor(Math.random() * 62)];
//   return result;
// }
// };

// console.log(generateRandomString());

function generateRandomString() {
  let character = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 6 ; i++) 
  result += character[Math.floor(Math.random() * character.length)];
  return result;
}
const randomString = generateRandomString();

console.log(randomString);
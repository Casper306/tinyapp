// function generateRandomString() {
//   const string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let result = '';
//   for (let i = 0; i < string; i++) {
//     result += string[Math.floor(Math.random() * 62)];
//   return result;
// }
// };

// console.log(generateRandomString());

function generateRandomString(length, chars) {
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
const randomString = generateRandomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

console.log(randomString);
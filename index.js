const billing = require('./array');

// const firstQuestion = () => {
//   let index = 12;
//   let sum = 0;
//   let k = 1;

//   while (k < index) {
//     k += 1;
//     sum += k;
//   }

//   return sum;
// };

// const secondQuestion = () => {
//   // 9, 128, 49, 100, 13, 20
// };

const thirdQuestion = (arr = []) => {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  };

  const average = sum / arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) count++;
  };

  return {
    minBilling: min,
    maxBilling: max,
    aboveAverage: count
  };
};

const fourthQuestion = () => {
  // SELECT 
  //     u.id_user,
  //     u.company_name,
  //     p.number AS phone
  // FROM 
  //     Users u
  // JOIN 
  //     Phone p ON u.id_user = p.id_user
  // JOIN 
  //     State s ON u.id_state = s.id_state
  // WHERE 
  //     s.state_code = 'SP';
};

console.log(thirdQuestion(billing));

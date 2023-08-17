import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const  {textVal}  = await request.json();

  const substrings = textVal.split(" ");
  const parsedIntArray = [];
  const operator = [];
  const paresOpIndex = [];

  
  for (const str of substrings) {
    const parsedInt = parseFloat(str, 10);
    if (!isNaN(parsedInt)) {
      parsedIntArray.push(parsedInt);
    } else {
      operator.push(str);
    }
  }


// prase the index of opertator to int

for (let i = 0; i < operator.length; i++) {
  const char = operator[i];
  if (char === "*" || char === "÷") {
    paresOpIndex.push(i);
  }
}

let replace = 0;

  for (let i = 0; i<operator.length; i++) {

      if (operator[i] === "*") {
       const num1 = parsedIntArray[i];
        const num2 = parsedIntArray[i+1];
        replace = num1 * num2;

        operator.splice(i, 1);
        parsedIntArray.splice(i, 2, replace);
        i--
      } 
      else if (operator[i] === "÷") {
        const num1 = parsedIntArray[i];
        const num2 = parsedIntArray[i+1];
        replace = num1 / num2;

        parsedIntArray.splice(i, 2, replace);
        operator.splice(i, 1);
        i--
      }
  }

    let result = parsedIntArray[0];

for (let i = 1; i < parsedIntArray.length; i++) {
  const num = parsedIntArray[i];
  const op = operator[i - 1];

  if (op === "+") {
    result += num;
  } else if (op === "-") {
    result -= num;
  } 
}

  return json(result);
}
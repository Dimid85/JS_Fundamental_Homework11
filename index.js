//Завдання 1

/*function getPromise(message, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  }*/
  
//Завдання 2

/*function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
      const result = arr.reduce(function(acc, value) {
        if (typeof value !== 'number') {
          reject("Error! Incorrect array!");
        }
        return acc * value;
      }, 1);
      
      resolve(result);
    });
  }*/

//Завдання 3

 /* new Promise(function(resolve, reject) {
    const number = prompt("Enter a number:");
    if (isNaN(number)) {
      reject();
    } else {
      resolve(Number(number));
    }
  })
    .catch(function(error) {
      return new Promise(function(resolve) {
        function askNumber() {
          const number = prompt("Enter a number:");
          if (isNaN(number)) {
            askNumber();
          } else {
            resolve(Number(number));
          }
        }
        askNumber();
      });
    })
    .then(function(result) {
      console.log(result);
    });*/

    //Завдання 4

/*const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i <= 10; i++) {
    await delay(i, Math.random() * 2000);
    console.log(i);
  }
}

showNumbers();*/
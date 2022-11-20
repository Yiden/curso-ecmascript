const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!!');
    } else {
      reject('Whoooops!')
    }
  })
}

anotherFunction()
  .then(Response => console.log(a))
  .catch(err => console.log(err));
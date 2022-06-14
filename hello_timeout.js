const array = ['hello', 'there', 'world'];
for(let i = 0; i <= array.length; i++) {
  setTimeout(() => {
    console.log(array[i])

  }, 4000);

}


const capSpace = (txt) => txt.replace(/[A-Z]/g, ' $&').toLowerCase();

const result = capSpace('helloWorld');
console.log(result);

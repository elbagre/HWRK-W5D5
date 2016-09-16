const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  reader.question('Would you like some tea?', (res) => {
    console.log(`You replied ${res}`);
    reader.question('Would you like some biscuits?', (res) => {
      console.log(`You replied ${res}`);
      const first = (res === 'yes') ? 'do' : 'don\'t';
      const second = (res === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} wamt tea and ${second} want biscuits.`);
      reader.close();
    });
  });
}

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase(Markov); // Noddles chases Markov...
Noodles.chase.call(Markov, Noodles); // Markov chases Noodles
Noodles.chase.apply(Markov, [Noodles]); //Same effect

//function bugging out at name... can't figure out why.

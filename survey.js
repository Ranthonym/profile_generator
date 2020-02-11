const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  // TODO: Log the answer in a database
  rl.question('What do you listen to? ', (music) => {
    rl.question('What is you favorite sport? ', (sport) => {
      rl.question('What is your favorite season? ', (season) => {
        rl.question('What do you like to eat? ', (food) => {

          rl.close();
          console.log(`${name} lies to listen to ${music}. His favorite sport is ${sport} and they love ${season} while eating ${food}`);
        });
      });
    });
  });
});

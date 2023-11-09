// Creates an animated sentence 

const sentence = "follow the white rabbit";
let timer = 0; // An empty timer that will increment
let iterations = sentence.length;
for (const letter of sentence) {
  if (!--iterations) {
    setTimeout(() => {
      process.stdout.write(letter + `\n`);
    }, timer); 
    timer += 100;
  } else {
  setTimeout(() => {
    process.stdout.write(letter);
  }, timer); 
  timer += 100;
}
}

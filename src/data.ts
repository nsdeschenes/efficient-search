// Function to generate a random name
function generateRandomName() {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const nameLength = Math.floor(Math.random() * 8) + 4; // Random length between 4 and 12 characters
  let name = "";

  for (let i = 0; i < nameLength; i++) {
    if (i % 2 === 0) {
      name += consonants[Math.floor(Math.random() * consonants.length)];
    } else {
      name += vowels[Math.floor(Math.random() * vowels.length)];
    }
  }

  return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter
}

// Generate an array of 100,000 random names
const namesArray: string[] = [];
for (let i = 0; i < 50_000; i++) {
  namesArray.push(generateRandomName());
}

export { namesArray };

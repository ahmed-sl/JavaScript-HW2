let arrayOfUsers = [];

function creatUser(name, height, gender, mass, eyeColor) {
  let user = {
    name,
    height,
    gender,
    mass,
    eyeColor,
  };
  arrayOfUsers.push(user);
}

creatUser("ahmed", 170, "male", 90, "black");
creatUser("sara", 150, "female", 37, "bule");
creatUser("salah", 190, "male", 770, "green");

console.log("\n" + "Q1" + "\n");
let namesAndHeight = arrayOfUsers.map((users) => [users.name, users.height]);
console.log(namesAndHeight);

console.log("\n" + "Q2" + "\n");
let names = arrayOfUsers.map((users) => users.name);
console.log("names: " + names);

console.log("\n" + "Q3" + "\n");
let totalMass = arrayOfUsers.reduce((p, c) => {
  return p + c.mass;
}, 0);
console.log("total mass: " + totalMass);

console.log("\n" + "Q4" + "\n");

function getCharacter(str) {
  let arrayOfCharacter = [];
  for (let index = 0; index < str.length; index++) {
    arrayOfCharacter.push(str.charAt(index));
  }
  return arrayOfCharacter;
}
let character = arrayOfUsers.map((users) => getCharacter(users.name));
console.log(character);

console.log("\n" + "Q5" + "\n");
arrayOfUsers.filter((users) => {
  if (users.mass > 100) {
    console.log(`user ${users.name} with mass ${users.mass} >100`);
  }
});

console.log("\n" + "Q6" + "\n");
arrayOfUsers.filter((users) => {
  if (users.gender === "female") {
    console.log(`user ${users.name} his gender is ${users.gender} `);
  }
});

console.log("\n" + "Q7" + "\n");
console.log("befor name sort");
console.log(arrayOfUsers);
arrayOfUsers.sort((a, b) => a.name.localeCompare(b.name));
console.log("after name sort");
console.log(arrayOfUsers);

console.log("\n" + "Q8" + "\n");
console.log("befor gender sort");
console.log(arrayOfUsers);
arrayOfUsers.sort((a, b) => a.gender.localeCompare(b.gender));
console.log("after gender sort");
console.log(arrayOfUsers);

console.log("\n" + "Q9" + "\n");
let isCheckEyeColor = arrayOfUsers.every((users) => {
  if (users.eyeColor === "bule") {
    return true;
  }
});
console.log("Is all eye color bule? " + isCheckEyeColor);

console.log("\n" + "Q10" + "\n");
let isMale = arrayOfUsers.every((users) => {
  if (users.gender === "male") {
    return true;
  }
});
console.log("Is all male? " + isMale);

console.log("\n" + "Q11" + "\n");
let isHaveMale = arrayOfUsers.some((users) => users.gender === "male");
console.log("Is there at least one male ? " + isHaveMale);

console.log("\n" + "Q12" + "\n");
let isHaveMass = arrayOfUsers.some((users) => users.mass < 50);
console.log("Is there at least one <50? " + isHaveMale);

async function getImage() {
  const size = 20;
  // const items = list.slice(0, size) ;
  let data = await fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((value) => value);
  let results = data.results;
  console.log(results);
  const dataImage = results.map(
    (re) =>
      `
        <div class="col-lg-4 col-md-6 col-sm-12 card">
            <div class="card-body">
            <img src=${re.image} class="card-img-top" alt="image" />
            </div>
            <div class="card-body">
            <h5 class="card-title">${re.name}</h5>
           </div>
        </div>
    `
  );

  let continer = document.querySelector(".row");
  continer.innerHTML = dataImage.join("");
}
getImage();

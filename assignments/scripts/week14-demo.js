// const myCar = new Object();
// myCar.color = 'White';
// myCar.make = 'Volkswagen';
// myCar.model = 'Tiguan';
// myCar.year = '2013';

// console.log(myCar.make);

// const mySecondCar = {
//     color: 'Gray',
//     make: 'NASA',
//     model: 'Saturn V',
//     year: '2000',
// }

// console.log(mySecondCar.make);

var superHeroes = {
    squadName: "Super Hero Squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super Tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation Resistance",
                "Turning Tiny",
                "Radiation Blast"]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million Tonne Punch",
                "Damage Resistance",
                "Superhuman Reflexes"]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional Travel"]
        }
    ]
}

// console.log(superHeroes['members'][1]['powers'][1]);

function addHero(superHeroes, heroName, heroAge, heroIdentity, heroPowers) {
    var newHero = {
        name: heroName,
        age: heroAge,
        secretIdentity: heroIdentity,
        powers: heroPowers
    }

    superHeroes['members'].push(newHero);
}

addHero(superHeroes, "Batman", 32, "Bruce Wayne", ['Money', 'Armor', 'Intelligence', 'Alfred']);

function populateHeader(superHeroes) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');

    myH1.textContent = superHeroes['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = "Hometown: " + superHeroes['homeTown'] + " // Formed: " + superHeroes['formed'];
    header.appendChild(myPara);
}

populateHeader(superHeroes);

function populateHeroes(superHeroes) {
    const section = document.querySelector('section');
    const heroes = superHeroes['members'];

    for (const hero of heroes) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret Identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = 'Superpowers:';

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

populateHeroes(superHeroes);
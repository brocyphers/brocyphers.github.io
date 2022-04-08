window.onload = function () {
    var quoteButton = document.getElementById('btn');
    quoteButton.addEventListener('click', getQuote);
}

async function getQuote() {
    console.log('Button Clicked');
    const endpoint = 'https://randomuser.me/api/?inc=name,nat,dob,picture';
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();

        var fullName = "Name: " + json.results[0].name.title + ". " + json.results[0].name.first + " " + json.results[0].name.last;
        // console.log(fullName);
        var dob = "Date of Birth: " + json.results[0].dob.date.substring(0, 10);
        // console.log(dob);
        var age = "Age: " + json.results[0].dob.age;
        // console.log(json.results[0].dob.age);
        var nat = "Nationality: " + json.results[0].nat;
        // console.log(json.results[0].nat);
        var picture = json.results[0].picture.large;
        // console.log(json.results[0].picture.large);

        displayData(fullName, dob, age, nat, picture);
    }
    catch (err) {
        console.log(err);
        alert('Failed');
    }
}

function displayData(fullName, dob, age, nat, picture) {
    var nameText = document.getElementById('name');
    nameText.textContent = fullName;
    var dobText = document.getElementById('dob');
    dobText.textContent = dob;
    var ageText = document.getElementById('age');
    ageText.textContent = age;
    var natText = document.getElementById('nat');
    natText.textContent = nat;
    var picturePath = document.getElementById('picture');
    picturePath.src = picture;
}
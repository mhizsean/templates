const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
    console.log(response);
});

let myAge = 22;

let script = document.cre
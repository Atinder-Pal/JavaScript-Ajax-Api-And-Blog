//alert('Hello!');

//Grab the elements we want to use to display jokes 
const setup = document.getElementById( 'setup' );
const punchline = document.getElementById( 'punchline');
console.log( setup );
console.log( punchline );

//Grab the button to pull a new joke
const newJokeButton = document.getElementById( 'more-jokes' );
console.log( newJokeButton );

//Add a function that grabs data from API and updates the elements
const getJokes = () => {
    fetch( 'https://official-joke-api.appspot.com/random_joke' )
        .then( response => { return response.json(); })
        .then( data => {
            console.log(data);

            //Grab our setup and punchline for joke from the data
            setup.textContent = data.setup;
            punchline.textContent = data.punchline;
            console.log( setup.textContent );
            console.log( punchline.textContent );

        } )
}

getJokes();

newJokeButton.addEventListener( 'click', (event) => {
    event.preventDefault();
    getJokes();
    //document.location.reload(true);
});
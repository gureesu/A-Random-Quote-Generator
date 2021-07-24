/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Create a variable named quotes and set it equal to an empty array.
let quotes = [];

//Add a minimum of five objects to your quotes array containing quote, source, citation and year properties.
quotes = [/*1st quote*/{quote: '', 
                        source: '',
                        citaion: '',
                        year: ''}, 
          /*2nd quote*/{quote: '', 
                        source: '', 
                        citaion: '',
                        year: ''}, 
          /*3rd quote*/{quote: '', 
                        source: '',
                        citaion: '',
                        year: ''}, 
          /*4th quote*/{quote: '', 
                        source: '',
                        citaion: '',
                        year: ''}, 
          /*5th quote*/{quote: '', 
                        source: '',
                        citaion: '',
                        year: ''}]

//console.log(quotes)

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.round(Math.random())
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// !! IMPORTANT README:
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const quoteData = [
  {text: "hello world html", author: "bull"},
  {text: "hello world css", author: "bill"},
  {text: "hello world java script", author: "bondon"},
  {text: "hello world react js", author: "bara"},
  {text: "hello world express js", author: "boy"},
  {text: "hello world node js", author: "aldi"},
  {text: "hello world mongo db", author: "fahroza"}
]

const QuoteBox = ({ quote,  handleNewQuote}) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button id="new-quote"
        class="button"
        onClick={handleNewQuote}
        >
        New Quote
      </button>
      <a 
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
        >
        tweet
      </a>
    </div>
  </div>
) 

const getRandomIndex = () => 
  Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);


const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  return (
  <div class="main">
    <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
  </div>
)
};
ReactDOM.render(<App /> , document.querySelector("#app"))

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

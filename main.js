// Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const quotes = [
    {
        quote: `"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."`,
        author: `Abraham Lincoln`
    },
    {
        quote: `"Be yourself; everyone else is already taken."`,
        author: `Oscar Wilde`
    },
    {
        quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
        author: `Bernard M. Baruch`
    },
    {
        quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams"`,
        author: `Dr. Seuss`
    },
    {
        quote: `"You only live once, but if you do it right, once is enough."`,
        author: `Mae West`
    },
    {
        quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
        author: `Robert Frost`
    },
    {
        quote: `"If you tell the truth, you don't have to remember anything."`,
        author: `Mark Twain`
    },
    {
        quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
        author: `Maya Angelou`
    },
    {
        quote: `"A friend is someone who knows all about you and still loves you."`,
        author: `Elbert Hubbard`
    },
    {
        quote: `"Always forgive your enemies; nothing annoys them so much."`,
        author: `Oscar Wilde`
    }
];


btn.addEventListener('click', generateQuote);

function generateQuote() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
}
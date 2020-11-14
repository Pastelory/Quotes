const quote = [
    {
        name:'Stephen King',
        quote:'Get busy living or get dying.'
    },
    {
        name:'John F.Kennedy',
        quote:'Those who dare to fail miserably can achieve greatly.'
    },
    {
        name:'Abraham Lincoln',
        quote:"I'm a sucess today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name: 'Leonardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    },
    {
        name:'Leo Tolsoy',
        quote: 'If you want to be happy, be.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quote.length);
    quoteAuthor.innerHTML = quote[number].name;
    quote.innerHTML = 'sarah';
}








// const simpleQuotes = [
//     {
//         name:'author number 1',
//         quote: 'quote number 1'
//     }
//     {
//         name:'author number 2',
//         quote: 'quote number 2'
//     }
// ]
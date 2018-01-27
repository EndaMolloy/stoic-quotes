const quotes = require('./quotes')

module.exports = function(author) {
  if(!author)
    return quotes[Math.floor(Math.random() * quotes.length)];
  else{

    const trimAuthor = author.trim();
    const formattedAuthor = trimAuthor.charAt(0).toUpperCase() + trimAuthor.slice(1);

    const chosenAuthor = (formattedAuthor=='Marcus') ? 'Marcus Aurelius' : formattedAuthor;
    const chosenAuthorArr = quotes.filter(quote => quote.author == chosenAuthor);
    return chosenAuthorArr[Math.floor(Math.random() * chosenAuthorArr.length)]
  }
}

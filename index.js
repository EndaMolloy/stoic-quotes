const quotes = require('./quotes')

module.exports = function(author) {
  if(!author)
    return quotes[Math.floor(Math.random() * quotes.length)];
  else{

    const chosenAuthor = (author=='Marcus') ? 'Marcus Aurelius' : author;
    const chosenAuthorArr = quotes.filter(quote => quote.author == chosenAuthor);
    return chosenAuthorArr[Math.floor(Math.random() * chosenAuthorArr.length)]
  }
}

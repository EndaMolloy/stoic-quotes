const expect = require('chai').should();
const quote = require('../index');


describe('get me a quote', function(){
  it('should return a random quote', function(){
    quote().should.be.an('object');
    quote().should.include.a.property('quote');
    quote().should.include.a.property('author');

  });

  it('should return a Marcus Aurelius quote', function(){
    quote('Marcus').should.have.a.property('author','Marcus Aurelius');
    quote('marcus').should.have.a.property('author','Marcus Aurelius');
    quote('marcus ').should.have.a.property('author','Marcus Aurelius');
    quote(' marcus ').should.have.a.property('author','Marcus Aurelius');
  });

  it('should return a Seneca quote', function(){
    quote('Seneca').should.have.a.property('author','Seneca');
  });

  it('should return an Epictetus quote', function(){
    quote('Epictetus').should.have.a.property('author','Epictetus');
  });


})

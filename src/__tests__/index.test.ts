import { getRandomQuote } from './../';
import quotes from './../quotes.json';

describe('test getRandomQuote', () => {

    /* these test will fail miserably if quotes array is empty - but it's only game, why u heff to be mad */ 

    it('expect random quote to be an object', () => {
        const randomQuote = getRandomQuote();
        expect(randomQuote instanceof Object).toBe(true);
    });

    it('if all quotes except one is excluded, expect to get that last quote every time', () => {
        const quoteIds = quotes.map(i => i.id);
        const lastIdInArray = quoteIds.pop();
        const quote = getRandomQuote(quoteIds);

        expect(quote.id === lastIdInArray).toBe(true);
    })
    
});
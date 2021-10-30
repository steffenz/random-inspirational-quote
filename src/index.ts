import quotes from './quotes.json';

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

export const getRandomQuote = (excludedIds?: Array<number>) => {
        
    const availableQuotes = (excludedIds && excludedIds.length !<= quotes.length) 
        ? quotes.filter(i => !excludedIds.includes(i.id))
        : [...quotes];

    return availableQuotes[getRandomNumber(availableQuotes.length)];
}

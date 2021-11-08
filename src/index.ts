import quotes from './quotes.json';

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

export interface Quote {
    id: number,
    q: string,
    s: string
}

export const getRandomQuote = (excludedIds?: Array<number>): Quote => {
        
    const availableQuotes = (excludedIds && excludedIds.length !<= quotes.length) 
        ? quotes.filter(i => !excludedIds.includes(i.id))
        : [...quotes];

    return availableQuotes[getRandomNumber(availableQuotes.length)];
}

export const getAllQuoteIds = (): Array<number> => quotes.map(q => q.id);

export const getAllQuotes = (): Array<Quote> => quotes;

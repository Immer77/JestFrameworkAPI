const { expect } = require("chai");

// The prices that we are mocking
const MOCK_PRICES = [50, 47, 53, 50, 49, 51, 52];
const MOCK_AVERAGE =  50.29;

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_PRICES)
}));

async function getPricesLastDays(days){

    try {
        // Den returnere et promise som vi kan arbejde videre  med
        const result = await fetch(`https://api.gold/price?days=${days}`);
        const prices = await result.json();


        const sum = prices.reduce((total, currentValue) => total + currentValue, 0);
        const average = sum / prices.length;

        return { average: +average.toFixed(2) };

    } catch (error) {
        console.error("Error");
    }
}

describe("Jest function testing with mocked api", function() {
    let averageprice;
    
    beforeEach(async function(){
        averageprice = await getPricesLastDays(7);
    });


    it("expecting price", function(){
        expect(averageprice).to.deep.equal({ average: MOCK_AVERAGE});
    })
})
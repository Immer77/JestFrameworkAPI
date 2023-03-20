const main = require('./async');

describe("Testing the async function main", function() {

    it("Should return todos with ID of 1", async ()  => {
        const todo = await main(1);
        expect(todo.userId).toBe(1);

    })
})
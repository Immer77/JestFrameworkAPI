const sum = require('./sum');

describe("Gathering of simple tests", function() {

    it("Should 1+2 retun 3", function(){
        expect(sum(1,2)).toBe(3);
    });


    it("Testing object with toEqual instead of toBe", function() {
        const obj = {};
        expect(obj).toEqual({});
    })

})

describe('Falsey or truthy test', () => { 
    
    it("Should return falsey", function(){
        const n = null;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeNull();
    })

});

describe('Numbers', () => { 
    

    it("should be equal 4", () => {
        const value = 2+2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeLessThan(8);
    });

    it("Adding floats", function(){
        const floatvalue = 0.1 + 0.3;
        expect(floatvalue).toBeCloseTo(0.39999999999);

    })
})

describe("Strings", function() {

    it("There's no I in team", () => {
        expect("team").not.toMatch(/I/);
    });

})

describe("arrays", function() {

    it("Testing contains", function() {
        let shoppingList = ["Diapers", "Milk", "Skittles", "Apples"];
        expect(shoppingList).toContain("Milk");
    })
})

function wrongCode(){
    throw new Error("Du Bruger det forkerte funktion");
}

describe("Exceptions", function() {


    it("Expected to fail", () => {

        expect(() => wrongCode()).toThrow("Du Bruger det forkerte funktion");

    })
})
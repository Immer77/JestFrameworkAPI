let animals = ['Tiger', 'Cat', 'Dog', 'Lion'];


describe("Animals Array", () =>{

    beforeAll(() =>{
        console.log("Running before All");
    })

    beforeEach(() => {
        animals = ['Tiger', 'Cat', 'Dog', 'Lion'];
    })

    afterEach(() => {
        console.log("AFTER EACH");
    })

    afterAll(() => {
        console.log("AfterAll");
    })

    it("Should add animal to end Array", function(){
        animals.push('Alligator');
        expect(animals[animals.length - 1]).toBe("Alligator");

    });

    it("Should add animal to beginning of Array", function(){
        animals.unshift('Monkey');
        expect(animals[0]).toBe("Monkey");
    });

    it("Initial length of array should be 4", () => {
        expect(animals.length).toBe(4);
    })
})

describe("Tester noget andet", () =>{
    // Only gør at det kun er denne test der bliver kørt
    it.only("True should return truthy", () =>{
        expect(true).toBeTruthy();
    })
})
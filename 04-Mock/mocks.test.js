const fetch = require('node-fetch');
const url = "https://jsonplaceholder.typicode.com/todos/1";
const axios = require('axios');

async function get(){
    let response = await axios.get(url);
    
    return response.data;
}

async function main(id){

    try {
        let result = await get(url + id);
        return result;
    } catch (error) {
        console.error(error);
    }
}




// Mocking er godt at bruge til API kald for at sikre dig at din funktion fungere som den skal
// Det kunne godt være at det kald man laver til en API returnere pludseligt falsk data.
const forEach = (items,callback) => {
    for(let i = 0; i < items.length; i++){
        callback(items[i]);
    }
}

// Vi vil gerne mock callback

describe("Mocking tests", () => {

    it("Mock Callback", function() {
        // I jest for at mocke bruger du jest.fn() med hvad den skal gøre i parameteren
        const mockedCallback = jest.fn((x) => x+ 42);

        forEach([0,1], mockedCallback);

        // For at se hvor mange gange mockedcallback er blevet kørt.
        expect(mockedCallback.mock.calls.length).toBe(2);

        // Det første 0 er det første mockedcall det andet 0 er værdien i det så 0,1,2 ;
        expect(mockedCallback.mock.calls[0][0]).toBe(0);

        // Hvis vi gerne vil have resultatet her for første kald nemlig 0 + 42;
        expect(mockedCallback.mock.results[0].value).toBe(42);

        // Hvis vi gerne vil have resultatet her for første kald nemlig 1 + 42;
        expect(mockedCallback.mock.results[1].value).toBe(43);

    })

    it("Mock return value", () => {
        const mockFunction = jest.fn();


        mockFunction.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hello");

        const result = mockFunction();
        const result1 = mockFunction();
        const result2 = mockFunction();

        expect(result).toBe(true);
        expect(result1).toBe(false);
        expect(result2).toBe("Hello");
    });

    it("Mock fetch call", async () => {
        jest.spyOn(axios, "get").mockReturnValueOnce({
            data: {
                id: 1,
                todos: "Get good at testing"
            }
        });
        const result = await get();

        expect(result.todos).toBe("Get good at testing");

    })
})
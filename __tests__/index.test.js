// const add = require('../index').add;
// const findByName = require('../index').finByName;

const {add, findByName} = require('../index');


test ('The add function adds two numbers and return the sum', function () {
    console.log('Ik word uitgevoerd!')
    // Arrange
    const number1 = 5;
    const number2 = 10;


    // Act
    const sum = add(number1,number2);


    // Assert
    expect(sum).toBe(15);

})



    test('findByName wil return an object from an array with the specified name', function  () {
        //Arrange
        const username = [
            {name: "Piet", id:1},
            {name: " Klaas", id: 2},
            {name: "Henk", id: 3},

        ];

        const userToFind = "Klaas";

        //Act

        const result = findByName(username,userToFind);

        //Assert
        expect(result).toEqual({name: " Klaas", id: 2});
    })

    test('FindByName returns null if a user is not found', () => {
        // Arrange
        const username = [
            {name: "Piet", id:1},
            {name: " Klaas", id: 2},
            {name: "Henk", id: 3},
        ];

        const userToFind = "Beppie";

        // Act
        const result = finByName(username,userToFind);

        // Assert
        expect(result).toBeNull();

    })
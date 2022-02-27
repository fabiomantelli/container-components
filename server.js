const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
    name: 'John Doe',
    age: 30,
    hairColor: 'brown',
    hobbies: ['cooking', 'fishing', 'swimming']
}


const users =  [{
    id: '123',
    name: 'John Doe',
    age: 0,
    hairColor: 'brown',
    hobbies: ['music', 'sports', 'games']
  }, {
    id: '234',
    name: 'Jane Doe',
    age: 30,
    hairColor: 'blonde',
    hobbies: ['music', 'football', 'mathematics', 'biology', 'sociology']
  }, {
    id: '345',
    name: 'Jack Doe',
    age: 25,
    hairColor: 'black',
    hobbies: ['hokey', 'novels', 'painting']
  }]
  
  
const products = [{
    id: '1234',
    name: 'banana',
    price: 1.5,
    description: 'yellow and delicious',
    rating: 4.5
  }, {
    id: '2345',
    name: 'orange',
    price: 2.5,
    description: 'orange and delicious',
    rating: 3.8
  }, {
    id: '3456',
    name: 'apple',
    price: 3.5,
    description: 'red and delicious',
    rating: 2.5
  }]

app.get('/current-user', (req, res) => {
res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
const { id } = req.params;

res.json(users.find(user => user.id === id));
})

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { user: updateUser } = req.body;

    users = users.map(user => user.id === id ? updateUser : user);

    res.json(users.find(user => user.id === id));
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;

    res.json(products.find(product => product.id === id));
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})
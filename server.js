const express = require('express');
const app = express();


const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]


// This function will respond to a GET request at http://localhost:8000/users with a JSON file, which includes our mockData under the key 'users'.
app.get('/users', function(req,res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.listen(8000, function(){
    console.log('server is running')
})

//In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through req.params, like this:
app.get('/users/:whatever', function(req,res) {
    console.log(req.params) //> This prints an object: {whatever: 'sandra'} 
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.whatever //navigate to http://localhost:8000/users/sandra  You should see the name 'sandra', since it is the value we passed in place of the 'whatever' variable. 
    })
})
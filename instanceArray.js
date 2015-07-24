/*
 Your 3 Users will be the following.
 0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
 1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
 2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
 */

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

//code here
var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

//code here

var user0 = new User("Tyler", "tylermcginnis33@gmail.com", 'iLoveJS');
var user1 = new User("Cahlan", "cahlan@devmounta.in", 'iLoveHashtags');
var user2 = new User("Lenny", "lenny@theLenster.com", 'iLoveLentilSoup');

users.push(user0, user1, user2);


//Console.log all of Tylers information
console.log('Tyler\'s information is ' + user0.name, user0.email, user0.pw);
//code here

console.log("next!");

console.log('Lenny\'s information is ' + user2.name, user2.email, user2.pw);
//Now console.log all of Lennys information

//code here

//Now create another instance of User using your own information and then add that to your users array.

//code here
var userMe = new User("Jon", "Jon.Spalding@outlook.com", "freakyou!");

users.push(userMe);

//Now loop through your users Array and console.log every users name. 

//code here
console.log('All my users names are ' + user0.name, user1.name, user2.name, userMe.name);
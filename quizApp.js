//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
var User = function(name, email, password, totalScore) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.totalScore = totalScore
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
var Question = function(title, answersArray, rightAnswer, difficulty) {
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
}

//Create a users Array which is going to hold all of our users.

  //code here
var users = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
var user1 = new User("James", "james@fake.com", "featdsa", 78);
var user2 = new User("Albert", "albert@fake.com", "f3j4d23dq", 95);
var user3 = new User("Frank", "frank@fake.com", "123456", 54);
users.push(user1, user2, user3);

//Create a questions Array which is going to hold all of our questions

  //code here
var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
var question1 = new Question("Inheritance is achieved in JavaScript through Prototypes?", "True/False", "True", "Medium");
var question2 = new Question("JavaScript is just a scripting version of Java", "True/False", "False", "Easy");
var question3 = new Question("In Javascript, == doesn't check 'type' but just the value - where === checks type and value", "True/False", "True", "Hard");


//Now push all of your instances of Question into the questions Array

  //code here
questions.push(question1, question2, question3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here
var loop = function(arr1, arr2){
	for (var i = 0; i < arr1.length; i++) {
		console.log(arr1[i]);
	}
	for (var i = 0; i < arr2.length; i++) {
		console.log(arr2[i]);
	}
}

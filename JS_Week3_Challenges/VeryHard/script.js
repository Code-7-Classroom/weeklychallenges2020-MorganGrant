/*VERY HARD: Object prototype chain and prototypal inheritance exercise.
1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
 
See next page…
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { }
*/


var Person = function(name, job , age) {
    this.name = name;
    this.job = job; 
    this.age = age;
    
}



Person.prototype.excercise = function() {
    console.log("Running is fun! - said no one ever")
}

Person.prototype.fetchJob = function() {
    console.log(`${this.name} is a ${this.job}`)
}

var Programmer = function ( name, job, age, languages , busy ) {
    Person.call( this, name , job, age);
    this.languages = languages;
    this.busy = true;
}

Programmer.prototype = new Person();


Programmer.prototype.completeTask = function() {
    return this.busy = false
}

Programmer.prototype.acceptNewTask = function() {
    return this.busy = true
}

Programmer.prototype.offerNewTask= function(busy) {
    if ( this.busy = false ){ 
        console.log(`${this.name} can't accept any new tasks right now.`);

    }
    if ( this.busy = true ) {
        console.log(`${this.name} would love to take on a new responsibility.`);

    }
}
Programmer.prototype.learnLanguage = function( newLanguage ) {
     this.languages.push(newLanguage);

}

Programmer.prototype.listLanguages = function() {
    console.log(this.languages)

}


// var grant = new Person ( 'Grant', 'R2H Student' , 24 );

// console.log(grant);
// console.log(grant.excercise());
// console.log(grant.fetchJob());

var greg = new Programmer ('Greg' , 'Rockstar' , 23 , ['html' , 'css' , 'javaScript' ] , false )
var lila = new Programmer ('Lila' , 'designer' , 44 , [ 'css' , 'Spanish' ] , true )
var john = new Programmer ('John Snow' , 'Warden of the north ' , 25 , [ 'nothing' , 'wildling' ] , false )
console.log(greg)
console.log(greg.excercise())
// console.log(lila)
// console.log(lila.offerNewTask(true))
// console.log(greg.learnLanguage('English'))
// console.log(greg.listLanguages())
// console.log(john)
// console.log(john.fetchJob())
// console.log(greg.lastName)
// console.log(lila.lastName)

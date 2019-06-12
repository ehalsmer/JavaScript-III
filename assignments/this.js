/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Window/Global binding is what 'this' is when it is in the outermost, global scope. We don't want to use it this way, and strictmode will prevent it. 
* 2. Implicit binding is when this is used in context. To figure out what it is refering to, look for where the function is invoked (not where it is written), and to the left of the 'dot'. For example, in the case of myObject.speak(), 'this' will refer to myObject. 
* 3. New binding refers to the use of this with constructor functions. The newly constructed object will be the context for this. 
* 4. Explicit binding is when we explicitly define the context by using .call or .apply, both of which allow us to specify the object we want this to refer to. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const windowBinding = function (){
    console.log(this);
}
// windowBinding();

// Principle 2

// code example for Implicit Binding

const myObject = {
    name: 'Eleasah',
    school: 'Lambda School',
    track: 'Web Development',
    sayHello: function (){
        console.log(`Hi, my name is ${this.name} and I'm studying ${this.track} at ${this.school}`);
    }
}
myObject.sayHello();

// Principle 3

// code example for New Binding

const Student = function (attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.grade = attributes.grade;
    this.email = attributes.email;
    this.favoriteClass = attributes.favoriteClass;
    this.study = function(){
        return `${this.name} is now studying ${this.favoriteClass}.`;
    };
    this.sendMail = function(){
        return `Email sent to ${this.email}.`;
    };
};

const alice = new Student({
    name: 'Alice',
    age: '20',
    grade: 'junior',
    email: 'alice@uvu.edu',
    favoriteClass: 'math'
})

console.log(alice.study());
console.log(alice.sendMail());

// Principle 4

// code example for Explicit Binding

const catObject = {
    name: 'Pooka',
    favoritePhrase: 'meow',
}

const favoriteActivities = ['climbing trees', 'laying in the sun', 'singing', 'hissing at dogs'];

function myCat(param1, param2, param3, param4){
    return `My cat's name is ${this.name}. Her favorite phrase is "${this.favoritePhrase}", and she enjoys ${param1}, ${param2}, ${param3}, and sometimes ${param4}.`
}

console.log(myCat.apply(catObject, favoriteActivities));
console.log(myCat.call(catObject, favoriteActivities[0], favoriteActivities[1], favoriteActivities[2], favoriteActivities[3]));

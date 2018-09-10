function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'liu',
    lastName: 'wei'
};
console.log(greeter(user));

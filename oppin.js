const person = function(name, birthYear) {
    this.firstName = name;
    this.birthYear = birthYear;
};
person.prototype.calcAge = function() {
    const currentYear = 2025;
    console.log(currentYear - this.birthYear);
    return currentYear - this.birthYear;
};
const john = new person("John", 2007);
john.calcAge();
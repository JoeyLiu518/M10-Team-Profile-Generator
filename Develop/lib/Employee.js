// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
        console.log(`Name: ${this.name}`);
    };
    
    getId() {
        return this.id;
        console.log(`Id: ${this.id}`);
    };
    
    getEmail() {
        return this.email;
        console.log(`Email: ${this.email}`);
    };
    
    getRole() {
        return 'Employee';
        console.log(`Role: ${this.Employee}`)
    };
};

module.exports = Employee

class Person{
    public name: string;
    private salary: number;
    protected isPermanent: boolean;

    constructor(name: string, salary: number, isPermanent: boolean){
        this.name = name;
        this.salary = salary;
        this.isPermanent = isPermanent;
    }

    display(){
        console.log(`Name is ${this.name}`);
        console.log(`Salary is ${this.salary}`);
        console.log(`isPermanent is ${this.isPermanent}`);
    }

}

class Employee extends Person{
    constructor(name: string, salary: number, isPermanent: boolean){
        super(name, salary, isPermanent);
    }

    display(){
        console.log(`Name is ${this.name}`); //public - accessable
        // console.log(`Salary is ${this.salary}`); //private - not accessable
        console.log(`isPermanent is ${this.isPermanent}`); //protected - accessable to subclass
    }
}

let emp = new Employee("John", 10000, true);
emp.display();
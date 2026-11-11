class Person{

    id: number;
    name: string;
    salary: number;
    isPermanent: boolean;

   constructor(id: number, name: string, salary: number, isPermanent: boolean){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.isPermanent = isPermanent;
    }

    getDetails(){
        console.log(`Id is ${this.id}`);
        console.log(`Name is ${this.name}`);
        console.log(`Salary is ${this.salary}`);
        console.log(`isPermanent is ${this.isPermanent}`);
    }

}

let employee1 = new Person(1, "John", 10000, true);
employee1.getDetails();

console.log("********".repeat(10));


let employee2 = new Person(2, "Jane", 20000, false);
employee2.getDetails();

console.log("********".repeat(10));

let employee3 = new Person(3, "Scott", 30000, true);
employee3.getDetails();

console.log("********".repeat(10));
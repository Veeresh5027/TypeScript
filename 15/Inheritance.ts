class Car{
    color: string;
    model: string;
    year: number;

    constructor(color: string, model: string, year: number){
        this.color = color;
        this.model = model;
        this.year = year;
    }

    start(): void{
        console.log("Car is started");
    }
    stop(): void{
        console.log("Car is stopped");
    }

    displayInfo(): void{
        console.log(`Color: ${this.color}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

class Tata extends Car{
    

    type: string;

    constructor(color: string, model: string, year: number, type: string){
        super(color, model, year);
          this.type = type;
    }

    start(): void {
        console.log("Tata car is started");
    }

    stop(): void {
        console.log("Tata car is stopped");
    }

    displayInfo(): void {
        super.displayInfo();
    
        console.log(`Type: ${this.type}`);
    }
    
}

class Maruti extends Car{

    type: string
    constructor(color: string, model: string, year: number, type: string){
        super(color, model, year);
        this.type = type;
    }

    start(): void {
        console.log("Maruti car is started");
    }
    stop(): void {
        console.log("Maruti car is stopped");
    }
    displayInfo(): void {
        super.displayInfo();
        
        console.log(`Type: ${this.type}`);
    }
}

// let tata = new Tata("Red", "Nano", 2022, "SUV");
// tata.start();
// tata.stop();
// tata.displayInfo();
// console.log("********".repeat(10));
// let maruti = new Maruti("Blue", "Swift", 2022, "Hatchback");
// maruti.start();
// maruti.stop();
// maruti.displayInfo();

//Here parent class holding che child class object

let car:Car = new Tata("Red", "Nano", 2022, "SUV");
car.start();
car.stop();
car.displayInfo();
console.log("********".repeat(10));
car = new Maruti("Blue", "Swift", 2022, "Hatchback");
car.start();
car.stop();
car.displayInfo();
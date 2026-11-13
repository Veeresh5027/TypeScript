class Parent{
    num: number = 10;

    constructor(num: number){
        this.num = num;
        console.log(`Parent class constructor called with ${num}`);
    }

    display(){
        console.log(`Parent class display method called with ${this.num}`);
    }
}

class Child extends Parent{
    constructor(num: number){
        super(num);
        console.log(`Child class constructor called with ${num}`);
    }

    display(){
        super.display();
        console.log(`Child class display method called with ${this.num}`);
    }
}

let child = new Child(20);
child.display();
    
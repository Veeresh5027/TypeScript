
class Student{
    readonly studentId: number; // Read only
    studentName: string; // Regular variable
    studentEmail?: string; // Optional variable
    isPlaced: boolean;
    static collegeName: string = "ABC College"; // Static variable

    constructor(studentId: number, studentName: string, isPlaced: boolean, studentEmail?: string){
        this.studentId = studentId;
        this.studentName = studentName;
        this.isPlaced = isPlaced;
        this.studentEmail = studentEmail;
    }

    //Method
    displayInfo(): void {

        console.log(`Id: ${this.studentId}`);
        console.log(`Name: ${this.studentName}`);
        console.log(`Placed: ${this.isPlaced}`);

        if(this.studentEmail){
            console.log(`Email: ${this.studentEmail}`);
        } else {
            console.log("No email");
        }

        console.log(`College: ${Student.collegeName}`);
    }

    static changeCollegeName(newCollegeName: string): void {
        Student.collegeName = newCollegeName;
    }

}

//Usage of class by creating objects

let student1 = new Student(1, "John", true);
let student2 = new Student(2, "Jane", false, "CvW1g@example.com");

student1.displayInfo();
console.log("********".repeat(10));
student2.displayInfo();
console.log("********".repeat(10));
Student.changeCollegeName("XYZ College");
student1.displayInfo();

//try to modify the readonly variable it will throw an error
// student1.studentId = 2;

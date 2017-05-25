// class starts..
var Student = (function () {
    function Student(studentName, studentAge) {
        this.name = studentName;
        this.age = studentAge;
    }
    Student.prototype.getStudentInfo = function () {
        console.log("NAME OF THE STUDENT IS " + this.name + " & AGE IS " + this.age);
    };
    return Student;
}());
// INSTANCE CREATED..
var info = new Student('shaquib', 23);
info.getStudentInfo();

// class starts..
class Student {
  private name: string ;
  private age:  number ;
	
	constructor (studentName: string , studentAge: number ){
		this.name = studentName;
		this.age = studentAge; 
	}	
		
	getStudentInfo(){
		console.log(`NAME OF THE STUDENT IS ${this.name} & AGE IS ${this.age}`);
	}
}		
// INSTANCE CREATED..
	var info = new Student('shaquib' ,23);
	info.getStudentInfo();
	

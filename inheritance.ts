// Multilevel inheritance
class Animal {   
    eat():void {   
        console.log("Eating")   
     }   
}   
class Dog extends Animal {   
   bark():void {   
      console.log("Barking")   
   }   
}  
class BabyDog extends Dog{   
    weep():void {   
        console.log("Weeping")   
     }  
}  
let obj = new BabyDog();   
obj.eat();  
obj.bark();  
obj.weep() ;

// Use of super() in inheritance
class Person{
    // variables
    name:String
    gender:String
    // methods
    constructor(nameArg,genderArg){
        this.name=nameArg;
        this.gender=genderArg;
    }
    talk(){
        console.log(`Iam a person called ${this.name}`)
    }
}

class Mother extends Person{
    // variables
    children=4
    // methods
    constructor(nameArg, genderArg, children){
        super(nameArg, genderArg)
        this.children=children;
    }
    talk(){
        console.log(`Iam a mother called ${this.name} and i have ${this.children}`)
    }
}

let John=new Person("monica","female");
let mother1=new Mother("Monica", "female",5)
mother1.talk();
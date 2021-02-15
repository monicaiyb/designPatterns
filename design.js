

function House(){
    houseFrame={

        window: "window",
        wall:"wall",
        door:"door",
        paint:function (color) {
            houseFrame.color=color;            
        }      
    }
return houseFrame;
}
let bangalow = House();
console.log(bangalow);

// constructor
// constructor
class Person {
	constructor(first,eye, year){
		this.firstName = first;      
        this.eyeColor = eye;
        this.year = year;
    }
    age(personAge){
    this.age = age;
    return personAge=this.year;
    }
  }
const myFather = new Person("John", "blue", 50, );
console.log(myFather)

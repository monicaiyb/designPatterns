// step 1: Create a class
class User{
    // step2: specify all class data members
    
    public username:string
    public password:string
    protected email:string;
    protected phoneNumber:string;
    protected name:string;
    // step 4: Create static member of the class
    static currentUser
    // step 3:Specify all class operation or methods
    constructor(username,name){
        // step 6:
            if (User.currentUser instanceof User){
                return User.currentUser
            }
            this.username=username;
            this.name=name;
        // step 5: Within and at the end of the constructor
        User.currentUser=this
    }

    public getUser(){}

}

const user1 = new User("@senjack_", "Jackson");
console.log(user1.getUser());



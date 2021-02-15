/*
The Strategy Pattern
-------------------------

Traveller
    -shortRouteTraveller
    -mediumRouteTraveller
    -longRouteTraveller

Travel means
    -ByBicycle
    -ByTaxi
    -ByBus

*/
// Travel Strategy SuperType
interface TravelStrategy{
    travel(): any
}

// Travel Strategy concrete Implementations
class TravelByBus implements TravelStrategy{
    travel(){
        console.log("Traveling by Bus")
    }
}

class TravelByTax implements TravelStrategy{
    travel(){
        console.log("Traveling by Tax")
    }
}

class TravelByBicycle implements TravelStrategy{
    travel(){
        console.log("Traveling by Bicycle")
    }
}

class TravelByPlane implements TravelStrategy{
    travel(){
        console.log("Traveling by Plane")
    }
}
//Travel is the context class.
class Traveler{
    // Variables
    protected travelStrategy:TravelStrategy;

    // Methods
    travel(){
        // The choice of the travel strategy is by delegation and composition
        this.travelStrategy.travel();
    }

    // Strategy Setter
    public setTravelStrategy(travelStrategyArg:TravelStrategy){
        this.travelStrategy = travelStrategyArg
    }
}
// Specific Travelers (They are Travelers)
class ShortRouteTraveler extends Traveler{
    travel(){
        console.log("I am a short route traveler");        
        this.travelStrategy.travel();
    }
}

class MediumRouteTraveler extends Traveler{
    travel(){
        console.log("I am a Medium route traveler");        
        this.travelStrategy.travel();
    }
}


class LongRouteTraveler extends Traveler{
    travel(){
        console.log("I am a Long route traveler");        
        this.travelStrategy.travel();
    }
}

class InternationalTraveler extends Traveler{
    travel(){
        console.log("I am an International traveler");        
        this.travelStrategy.travel();
    }
}
// a Traveler who cam polymorphically travel
let traveler: Traveler;
// This code is just for testing Purposes

// Ashort route traveler who wants to travel by Bus
traveler = new ShortRouteTraveler()
traveler.setTravelStrategy(new TravelByBus())
traveler.travel()



// A long route traveler who wants to travel by Bus
traveler = new LongRouteTraveler()
traveler.setTravelStrategy(new TravelByBus())
traveler.travel()


// A medium route traveler who wants to travel by Bicycle
traveler = new MediumRouteTraveler()
traveler.setTravelStrategy(new TravelByBicycle())
traveler.travel()

// An international traveler who wants to travel by Bicycle
traveler = new InternationalTraveler()
traveler.setTravelStrategy(new TravelByBicycle())
traveler.travel()

// An international traveler who wants to travel by Plane
traveler = new InternationalTraveler()
traveler.setTravelStrategy(new TravelByPlane())
traveler.travel()

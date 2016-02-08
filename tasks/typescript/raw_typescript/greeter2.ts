class Greeter2 {
    constructor(public greeting: string) { }
    greet() {
        return "<h2> " + this.greeting + "</h2>";
    }
};

var greeter = new Greeter2("Hello, world!");
    
document.body.innerHTML = greeter.greet();
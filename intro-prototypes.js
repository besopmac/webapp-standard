// Write an object that will act as the prototype. This is going to contain two methods
// the increase age method and a method that returns the full name of the person as the
// concatenation of the first and last name

person = {
    getFullName: function() {
        return this.firstName+" "+this.lastName;
    },
    increaseAge: function() {
        this.age++;
    }
}

// Notice that this object is referring to properties that are undefined...
// We will now write a extend function that accepts this object as a parameter
// and returns a new object with this object set as its prototype

function extend(obj) {
    function E(){};
    E.prototype = obj;
    return new E();x
}
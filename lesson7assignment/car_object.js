let car = {
    make: "Nissan",
    model: "Sentra",
    year: 2015,
    odometer: 80000,
    serviceCount: 20,
    service: function () { this.serviceCount++; },
    getOdemeterReading: function () { return this.odometer},
    reset: function(){ 
        this.serviceCount =  0;
        this.odometer = 0},
    
    // showService: function () { console.log(this.serviceCount); },
    // showReset: function () { console.log(this.serviceCount); console.log(this.odometer);},

}


console.log(car.odometer);
console.log(car.serviceCount);
car.service();
car.service();
car.service();
console.log(car.odometer);
console.log(car.serviceCount);

car.reset();

console.log(car.odometer);
console.log(car.serviceCount);


// car.showService();

// car.showReset();

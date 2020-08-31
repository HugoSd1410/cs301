let car = {
    make: "Nissan",
    model: "Sentra",
    year: 2015,
    odometer: 80000,
    serviceCount: 20,
    service: function () { return this.serviceCount++; },
    getOdemeterReading: function () { console.log(this.odometer) },
    reset: function(){ return this.serviceCount = this.odometer = 0},
    
    showService: function () { console.log(this.serviceCount); },
    showReset: function () { console.log(this.serviceCount); console.log(this.odometer);},

}


car.service();
car.service();
car.service();
car.showService();
car.getOdemeterReading();
car.reset();
car.showReset();
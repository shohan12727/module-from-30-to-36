class vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    move() {
        console.log("ami colacol korte pari");

    }
}

class Bus extends vehicle {
    constructor(name, price, seat) {
        super(name, price)
        this.seat = seat;
    }
    route() {
        console.log("dhaka to cox");

    }
}

class Truck extends vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load
    }
}
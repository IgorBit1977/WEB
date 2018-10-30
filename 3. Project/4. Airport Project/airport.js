(function () {
    'use strict'

    var numOfPassenger = 0;

    function Person(name, surname) {

        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    };


    function Seat(number, category) {

        switch (typeof number) {
            case 'undefined':
                this.number = parseInt(Math.random() * 10 + 90);
                break;
            case 'number':
                this.number = number;
                break;
            default:
                console.log('Number of seat has to be type of number!');
        }
        switch (category) {
            case 'b':
                this.category = 'b';
                break;
            case undefined:
                this.category = 'e';
            case 'e':
                this.category = 'e';
                break;
            default:
                this.category = 'e';
                console.log('Category of seat has to be e - for ECONOMY or b - for BUSINESS class');
        }


        this.getData = function () {
            return /*this.number + ', ' + */this.category.toUpperCase();
        };
    };

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData();
        };
    };

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];
        this.totalPassenger = 0;



        this.addPassenger = function (newPassenger) {
            this.listOfPassengers.push(newPassenger);
            this.totalPassenger++;
        };

        this.getData = function () {
            var dataString = '\t' + this.date.toLocaleDateString() + ',\t' + this.relation + '\n';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                var passenger = this.listOfPassengers[i];
                numOfPassenger++;
                dataString += '\t\t\t' + numOfPassenger + ', ' + passenger.getData() + '\n';
            }
            return dataString;
        };
    };



    function Airport() {
        this.name = 'Nikola Tesla';
        this.listOfFlights = [];
        this.numOfAllPassengers = 0;

        this.addFlight = function (newFlight) {
            this.listOfFlights.push(newFlight);
            this.numOfAllPassengers += newFlight.totalPassenger;
        };

        this.getData = function () {
            var data = 'Airport: ' + this.name + ', total passengers: ' + this.numOfAllPassengers + '\n';

            for (var i = 0; i < this.listOfFlights.length; i++) {

                var flight = this.listOfFlights[i];
                data += flight.getData();
            }
            return data;
        }
    };


    function createFlight(relation, date) {
        return new Flight(relation, date);
    }


    function createPassenger(name, surname, seatNumber, category) {
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    }


    // --------------------------------TEST----------------------------------

    var airportNikolaTesla = new Airport();

    var firstFlight = createFlight('Belgrade - New York', new Date('Oct 25 2019'));
    var secondFlight = createFlight('Barcelona - Belgrade', new Date('Nov 11 2019'));

    var passenger1 = createPassenger('John', 'Snow', 1, 'b');
    var passenger2 = createPassenger('Cersei', 'Lannister', 2, 'b');
    var passenger3 = createPassenger('Daenerys', 'Targeryan', 14);
    var passenger4 = createPassenger('Tyrion', 'Lannister');

    firstFlight.addPassenger(passenger1);
    firstFlight.addPassenger(passenger2);

    secondFlight.addPassenger(passenger3);
    secondFlight.addPassenger(passenger4);

    airportNikolaTesla.addFlight(firstFlight);
    airportNikolaTesla.addFlight(secondFlight);


    console.log(airportNikolaTesla.getData());



    // --------------------------------TEST----------------------------------





})();
(function () {
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;

        // this.countryShort = function () {
        //     return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
        // }
    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;

        this.getData = function () {
            var today = new Date()
            var yearOfBirth = Math.floor((today - this.dateOfBirth) / 31536e6)

            return this.name + " " + this.surname + ", " + yearOfBirth + ' years';
        }
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getData = function () {
            return this.country.odds + ", " + this.betAmount + "eur, " + this.person.getData();
        }
    }

    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
        this.getData = function () {
            return this.streetAndNumber + ", " + this.postalCode + ", " + this.city + ", " + this.country.odds;
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.numOfPlayers = 0;

        this.addPlayer = function (newPlayer) {
            this.listOfPlayers.push(newPlayer);
            this.numOfPlayers++;
        }
        this.sumOfAllBets = 0;

        this.getData = function () {
            var street = this.address.streetAndNumber.split(' ');
            street = street[0];

            var data = '';
            for (var i = 0; i < this.listOfPlayers.length; i++) {
                var player = this.listOfPlayers[i];
                this.sumOfAllBets += player.betAmount;
                data += '\t\t\t' + player.getData() + '\n';

            }
            var data1 = street + ', ' + this.address.postalCode + ', ' + this.address.city + ', sum of all bets ' + this.sumOfAllBets + 'eur' + '\n';
            return data1 + data;
        }
    }
    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = 0;
        this.numberOfBettingPlaces = 0;
        this.addBettingPlace = function (newBettingPlace) {
            this.listOfBettingPlaces.push(newBettingPlace);
            this.numberOfBettingPlaces++;
            this.numberOfPlayers += newBettingPlace.numOfPlayers;
        }
        this.getData = function () {

            var data = this.competition + ", " + this.numberOfBettingPlaces + " betting places, " + this.numberOfPlayers + " bets" + '\n';
            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                var bettingPlace = this.listOfBettingPlaces[i];
                data += '\t' + bettingPlace.getData();
            }
            return data;
        }

    }
    var Continent = Object.freeze({
        ASIA: 'Asia'
    });



    function createPlayer(name, surname, dateOfBirth, countryName, odds, continent, betAmount) {

        var person = new Person(name, surname, dateOfBirth);
        var country = new Country(countryName, odds, continent);

        return new Player(person, betAmount, country);

    }


    function createBettingPlace(countryName, odds, continent, city, postalCode, streetAndNumber) {

        var country = new Country(countryName, odds, continent);
        var address = new Address(country, city, postalCode, streetAndNumber);

        return new BettingPlace(address);

    }

    var bettingHouse = new BettingHouse('Football World Cup Winner');

    var player1 = createPlayer('Petar', 'Peric', new Date('1994-10-28'), 'Serbia', 'SR', 'EU', 2200);
    var player2 = createPlayer('Marko', 'Maric', new Date('1974-10-18'), 'Serbia', 'GR', 'EU', 1220);
    var player3 = createPlayer('Luka', 'Karic', new Date('1984-06-08'), 'Serbia', 'GR', 'EU', 3000);
    var player4 = createPlayer('Zika', 'Peric', new Date('1964-11-11'), 'Serbia', 'SR', 'EU', 500);



    var bettingPlace1 = createBettingPlace('Serbia', 'SR', 'EU', 'Belgrade', '11000', 'Nemanjina 4');
    var bettingPlace2 = createBettingPlace('Serbia', 'GR', 'EU', 'Belgrade', '11000', 'Balkanska 4');

    bettingPlace1.addPlayer(player1);
    bettingPlace1.addPlayer(player2);
    bettingPlace2.addPlayer(player3);
    bettingPlace2.addPlayer(player4);

    bettingHouse.addBettingPlace(bettingPlace1);
    bettingHouse.addBettingPlace(bettingPlace2);

    console.log(bettingHouse.getData());





















})()
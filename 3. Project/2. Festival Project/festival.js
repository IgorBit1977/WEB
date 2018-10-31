'use strict';
(function () {

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
        };
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + ', ' + this.length + 'min, ' + genre.getData();
        };
    }
    function Program(date) {
        this.date = new Date(date);
        this.listOfMoivies = [];
        this.totalNumbersOfMovies = 0;
        this.addMovie = function (newMovie) {
            this.listOfMoivies.push(newMovie);
            this.totalNumbersOfMovies++;

        }
        this.getData = function () {
            var allData = '';
            var movieLength = 0;

            for (var i = 0; i < this.listOfMoivies.length; i++) {
                allData += this.listOfMoivies[i].getData() + '\n';
                movieLength += this.listOfMoivies[i].length;
            }

            return this.date.toDateString() + ', ' + movieLength + '\n' + allData;
        }
    }
    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.totalNumbersOfMovies = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                sum += this.listOfPrograms[i].totalNumbersOfMovies;
            }
            return sum;
        };


        this.addProgram = function (newProgram) {
            this.listOfPrograms.push(newProgram);
        }


        this.getData = function () {
            var allFilmsInProgram = 'Weekend festival has ' + this.totalNumbersOfMovies() + " movies" + "\n ";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                allFilmsInProgram += this.listOfPrograms[i].getData() + '\n';
            }
            return allFilmsInProgram;
        }
    }



    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }
    function createProgram(date) {
        return new Program(date);
    }


    var action = new Genre("Action");
    var drama = new Genre("Drama");
    var comedy = new Genre("Comedy");

    var redemption = createMovie("The Shawshank Redemption", action, 130);
    var spiderMan = createMovie("Spider-Man: Homecoming", action, 133);
    var darkTower = createMovie("The Dark Tower", comedy, 140);

    var program1 = createProgram("2018, 10,10");
    var program2 = createProgram("2019, 10, 10");


    var festival = new Festival('Kan');


    var festival = new Festival("Weekend festival");

    program1.addMovie(redemption);
    program1.addMovie(spiderMan);
    program2.addMovie(darkTower);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData());



})();


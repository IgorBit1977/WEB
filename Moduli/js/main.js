var dataModule = (function() {
  var data = {
    movies: []
  };

  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
  }
  //validate input

  //createMovie

  //addMovie
  Movie.prototype.getInfo = function() {
    return this.name + ", " + this.length;
  };

  function createMovie(name, length, genre) {
    return Movie(name, length, genre);
  }
  function addMovie(movie) {
    data.movies.push(movie);
  }

  return {
    createMovie: createMovie,
    addMovie: addMovie
  };
})();

var uiModule = (function() {
  var $titleInput = document.querySelector(".movieTitle");
  var $lengthInput = document.querySelector(".movieLength");
  var $genreSelect = document.querySelector(".selectGenre");
  var $movieList = document.querySelector(".counter");

  function collectFormInput() {
    var movieTitle = $titleInput.value;
    var movieLength = $lengthInput.value;
    var movieGenre = $genreSelect.value;
    console.log(collectFormInput);

    return {
      title: movieTitle,
      genre: movieGenre,
      length: movieLength
    };
  }

  function displayMovie(movie) {
    // if(movie instanceof Movie){
    $movieList.innerHTML += movie.getInfo() + "<br/>";
    // }
  }

  return {
    collectFormInput: collectFormInput,
    displayMovie: displayMovie
  };
})();

var controler = (function(ui, data) {
  var $addMovie = document.querySelector(".button");
  $addMovie.addEventListener("click", function(event) {
    //collect form data
    var movieObj = ui.collectFormInput();
    console.log(movieObj);

    //validate input
    var movie = data.createMovie(
      movieObj.title,
      movieObj.length,
      movieObj.genre
    );
    //add movie to list
    data.addMovie(movie);
    //display movie
    ui.displayMovie(movie);
    //reset form
  });
})(uiModule, dataModule);

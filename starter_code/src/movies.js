/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    let h = 0;
    let min = 0;

    if (movie.duration.includes("h")) {
      h = movie.duration.slice(0, movie.duration.indexOf("h"));
    }
    if (movie.duration.includes("min")) {
      min = movie.duration.substring(
        movie.duration.length - 5,
        movie.duration.length - 3
      );
    }
    const duration = parseInt(h, 10) * 60 + parseInt(min, 10);
    const newMovie = Object.assign({}, movie, { duration });
    return newMovie;
  });
}

// Get the average of all rates with 2 decimals

function ratesAverage(myArray) {
  var sum = myArray.reduce(function(acc, curr) {
    return acc + parseFloat(curr.rate);
  }, 0);

  var average = sum / myArray.length;
  return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(myArray) {
  var dramaArray = myArray.filter(function(oneMovie) {
    return oneMovie.genre.indexOf("Drama") >= 0;
  });

  var total = dramaArray.reduce(function(acc, curr) {
    return acc + Number(curr.rate);
  }, 0);
  if (total === 0) {
    return undefined;
  }

  return Math.round((total / dramaArray.length) * 100) / 100;
}

// Order by time duration, in growing order

function orderByDuration(myArray) {
  var timeOrder = myArray.sort(function(a, b) {
    if (a.duration === b.duration) {
      return a.title.localeCompare(b.title);
    }
    return a.duration - b.duration;
  });

  return timeOrder;
}
// How many movies did STEVEN SPIELBERG

function howManyMovies(myArray) {
  if (myArray.length === 0) {
    return undefined;
  }
  var steve = myArray.filter(function(el) {
    return (
      el.director.indexOf("Steven Spielberg") >= 0 &&
      el.genre.indexOf("Drama") >= 0
    );
  });
  return `Steven Spielberg directed ${steve.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(title) {
  var titleSort = title.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  return titleSort
    .map(function(movie) {
      return movie.title;
    })
    .slice(0, 20);
}
// Best yearly rate average

function bestYearAvg() {}

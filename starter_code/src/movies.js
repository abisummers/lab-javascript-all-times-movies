/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(mins) {
  minutes = mins.map(function(el) {
    el;
  });
  return minutes;
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
  //var order =
  var timeOrder = myArray.sort(function(timeA, timeB) {
    timeA.duration - timeB.duration;
  });
  return timeOrder;
}
// How many movies did STEVEN SPIELBERG

function howManyMovies(myArray) {
  var steve = myArray.filter(function(el) {
    el.director.indexOf("Steven Spielberg") >= 0;
  });

  return "Steven Spielberg directed 0 drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(title) {
  var titleSort = title.sort(function(a, b) {
    return a.title[0] - b.title[0];
  });

  return titleSort;
}
// Best yearly rate average

function bestYearAvg() {}

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#comicButton').click(function() {
    let userInput = $('#comicNumber').val();
    $('#comicNumber').val("");

      let request = new XMLHttpRequest();
      const url = `https://CORS-anywhere.herokuapp.com/xkcd.com/${userInput}/info.0.json`;

      request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        }
      }

      request.open("GET", url, true);
      request.send();

      const getElements = function(response) {
      $('.showComic').html(`<img src="${response.img}">`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);




    }
  });
});

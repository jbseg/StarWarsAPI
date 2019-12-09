# SWAPI
Fun, light-weight front-end interaction with a live api


## Learning Goals
1. Understand how to interact with live api's
2. Front end can call an api with fetch
3. Javascript can manipulate the DOM
4. Stregthn the idea of front and back end. You will create both in insta485

## Directions
1. See what's you get when you queery the api
```
$ curl https://swapi.co/api/people/1/
{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/14/","https://swapi.co/api/vehicles/30/"],"starships":["https://swapi.co/api/starships/12/","https://swapi.co/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.co/api/people/1/"}%
```
your fetch function can get a dictionary version of this json. Check out the website to see what info you can get. The current html is set up for a queery of people. https://swapi.co/

2. change the ```name.innerHTML``` to a different name to see that JS can modify the html
3. Use fetch to queery the api and set those elements to the data you receive
4. Add two more things to display in the html and Javascript
```
<--!index.html-->
<p> Eye Color: <span id="eye_color">...</span></p>
```
and in the JS
```
// starwars.js
let eye_color = document.getElementById("eye_color");
...
eye_color = data.eye_color;
```
5. Play around with JS manipulating the HTML and the type of information you can get from the API

## Developers
**[Joshua Segal](http://joshuabsegal.com/)**

let name = document.getElementById("name");
let birth_year = document.getElementById("birth_year");
let eye_color = document.getElementById("eye_color");
let profile_pic = document.getElementById("profile-pic");
fetch('https://swapi.co/api/people/1/')
  .then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then((data) => {
    name.innerHTML = data.name;
    birth_year.innerHTML = data.birth_year;
    eye_color.innerHTML = data.eye_color
    if(data.name === 'Luke Skywalker'){
      profile_pic.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png");
    }
  })
  .catch(error => console.log(error));

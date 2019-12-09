let name = document.getElementById("name");
let birth_year = document.getElementById("birth_year");
let eye_color = document.getElementById("eye_color");
let profile_pic = document.getElementById("profile-pic");

name.innerHTML = 'Luke Skywalker';
birth_year.innerHTML = '19BBY';
eye_color.innerHTML = 'blue';
if(data.name === 'Luke Skywalker'){
  profile_pic.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png");
}

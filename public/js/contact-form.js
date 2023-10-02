//  Maryam Afshar, Student ID: 301034443, Due Date: October 3, 2023

//get form and redirect to home page
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Tanks For Your Message");
  location.assign("/");
});

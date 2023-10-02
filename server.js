//  Maryam Afshar, Student ID: 301034443, Due Date: October 3, 2023

const app = require("./app");

const PORT = process.env.PORT || 3000;

//listen application
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const db = require("../model/index");
const User = db.user;
const user = new User();

exports.getAll = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(500).send({
        status: "Error 404 not Found",
        message: "Unable to get all Data",
      });
    } else {
      return res.status(200).send({
        status: "Success",
        data: users,
      });
    }
  });
  // res.send("All User Route is Working");
};
exports.getOne = (req, res) => {
  res.send("Get User by Id Route is Working");
};
exports.addOne = (req, res) => {
  const { name, email, age } = req.body;
  console.log(name, email, age);
  //Populates Instance of user Model
  user = new User({
    name,
    email,
    age,
  });
  //Saving Data into Database
  user.save();
  res.send("Add User Route is Working");
};
exports.update = (req, res) => {
  console.log(req.params.id);
  console.log(req.query);
  res.send("Update User Route is Working");
};
exports.delete = (req, res) => {
  res.send("Delete User Route is Working");
};

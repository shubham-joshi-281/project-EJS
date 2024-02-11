import userModel from "../models/usermodels.js";

class userController {
  static home = (req, res) => {
    res.render("index");
  };
  static registration = (req, res) => {
    res.render("registration");
  };

  static createUser = async (req, res) => {
    try {
      const { name, email, age, phone, password, confirmpassword } = req.body;
      const details = new userModel({
        name: name,
        email: email,
        age: age,
        phone: phone,
        password: password,
        confirmpassword: confirmpassword,
      });
      if (password === confirmpassword) {
        await details.save();
        res.redirect("/login");
        res.send("hello");
      } else {
        res.send("password not matched");
      }
    } catch (err) {
      console.log(err);
    }
  };

  static login = (req, res) => {
    res.render("login");
  };

  static veryfyLogin = async (req, res) => {
    try {
      const { email, password, name } = req.body;
      const result = await userModel.findOne({ email: email });
      if (result != null) {
        if (result.email === email && result.password === password) {
          res.render("login/dashbord", {
            userName: `${result.name}`,
            userEmail: `${result.email}`,
          });
        } else {
          res.send(` please Enter a Valid Email or Password Thank You`);
        }
      } else {
        res.send("You are not Registerd");
      }
    } catch (err) {
      console.log(err);
    }
  };
  static dashBord = (req, res) => {
    res.send("dashbord");
  };
  //     // userName: `${result.name}`,
  //     // userEmail: `${result.email}`,
  //   });
  // };
}

export default userController;

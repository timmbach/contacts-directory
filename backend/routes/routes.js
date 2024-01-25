const express = require("express");
const router = express.Router();
const Contact = require("../models/contacts.js");
const { addContact } = require("../controllers/contact.controller.js");
const multer = require("multer");

// image upload
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

// add new contact to database

let upload = multer({
  storage: storage,
}).single("image");

router.post("/add", upload, addContact);

// (req, res) => {
//   const contact = new Contact({
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     image: req.file.filename,
//     viewCount: req.body.viewCount,
//   });
//   contact.save((err) => {
//     if (err) {
//       res.json({ message: err.message, type: "danger" });
//     } else {
//       req.session.message = {
//         type: "success",
//         message: "Contact added successfully!",
//       };
//       res.redirect("/");
//     }
//   });
// }

router.get("/", (req, res) => {
  res.send("All Contacts");
});

module.exports = router;

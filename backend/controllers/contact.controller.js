const Contact = require("../models/contacts.js");

const errorHandler = require("../utils/error.js");

const addContact = async (req, res, next) => {
  const contactBody = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    image: req.file.filename,
    viewCount: req.body.viewCount,
  });
  try {
    const contact = await Contact.create(contactBody);
    return res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

const viewContact = async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return next(errorHandler(404, "Contact not found!"));
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return next(errorHandler(404, "Contact not found"));
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addContact,
  viewContact,
  getAllContacts,
};

const Contact = require("../models/contacts.js");
const errorHandler = require("../utils/error.js");

const addContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
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
    const viewedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(viewedContact);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = req.query.startIndex || 0;

    let underOffer = req.query.underOffer;

    if (underOffer === undefined || underOffer === "false") {
      underOffer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let purchaseType = req.query.purchaseType;

    if (purchaseType === undefined || purchaseType === "all") {
      purchaseType = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: "i" },
      underOffer,
      furnished,
      parking,
      purchaseType,
    })
      .sort({
        [sort]: order,
      })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addContact,
  viewContact,
  getAllContacts,
};

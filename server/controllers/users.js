const db = require("../models");
const fs = require('fs')
const createJWT = require("./helpers");

const index = async (req, res) => {
    const users = await db.User.find({});
    console.log(users);
    res.json(users);
};

const create = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) return console.log("Error in User#create:", err);

        const token = createJWT(savedUser);
        return res.status(201).json({
            message: "Success",
            data: { token },
        });
    });
};

const update = (req, res) => {
    console.log('update controller')
    db.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedUser) => {
        if (err) console.log('ERROR: UPDATING USER', err);

        return res.status(202).json({
            message: "Success",
            data: updatedUser,
        });
    });
}

module.exports = { index, create, update };
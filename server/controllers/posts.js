const db = require("../models");
const mongoose = require('mongoose')

// ===== Index - GET
const index = (req, res) => {
    db.Post.find()
        .populate('user')
        .exec((err, posts) => {
            return res.status(200).json({
                message: 'Success',
                data: posts,
            });
        });
};

module.exports = {
    index,
    // show,
    // showComments,
    // create,
    // createComment,
    // update,
    // updateComment,
    // destroy,
    // destroyComment,
};
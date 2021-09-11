const db = require("../models");

// ===== Index - GET - ALL posts by a user
const index = (req, res) => {
    db.Post.find((err, posts) => {
            return res.status(200).json({
                message: 'Success',
                data: posts,
            });
        });
};

// ===== Show - GET - One post by id
const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return console.log('ERROR: Prolly no post found', err);

        return res.status(200).json({
            message: 'Success',
            data: foundPost,
        });
    });
};

// ===== Create - POST - Functional (Status code 201)
const create = (req, res) => {
    console.log(req.body);
    db.Post.create(req.body, (err, savedPost) => {
       
        if (err) return console.log("Error in Posts#create:", err);

        return res.status(201).json({
            message: 'Success',
            data: savedPost,
        });
    });
};

// ===== Update - PUT 
const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) console.log("Error in Posts#update:", err);

            return res.status(202).json({
                data: updatedPost,
            })
        }
    )
}

// Destroy - DELETE - Functional (id)
const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log("Error in Posts#destroy:", err);

        return res.status(200).json({
            data: deletedPost,
        });
    });
};

// ======== COMMENTS SECTION

// Create - POST - Functional (For comments)
const createComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then((foundPost) => {

            foundPost.comments.push(req.body);
            foundPost.save();
            
            return res.status(201).json({
                message: 'Success',
                data: foundPost.comments,
            });
        })
        .catch((err) => console.log(err));
};

// Show - GET - Presentational (for Comments)
const showComments = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return console.log("Error in Comment#show", err);

        return res.status(200).json({
            message: "Success",
            data: foundPost.comments,
        });
    });
};

// Update - PUT - Functional (For comments)
const updateComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then((foundPost) => {

            const commentById = foundPost.comments.id(req.params.commentId);
            commentById.body = req.body.body;
            foundPost.save();

            return res.status(202).json({
                message: "Success",
                data: commentById,
            });
        })
        .catch((err) => console.log(err));
};

// Destroy - DELETE - Functional (For Comments)
const destroyComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then((foundPost) => {

            const commentById = foundPost.comments.id(req.params.commentId);
            commentById.remove();
            foundPost.save();

            return res.status(200).json({
                message: "Success",
                data: commentById,
            });
        })
        .catch((err) => console.log(err));
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    showComments,
    createComment,
    updateComment,
    destroyComment,
};
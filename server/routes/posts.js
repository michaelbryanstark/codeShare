// Posts Router
const router = require("express").Router();
const { posts } = require("../controllers");

// router.use(require("../config/auth"));
router.get("/", posts.index);
router.get("/:id", posts.show);
router.post("/", posts.create);
router.put("/:id", posts.update);
router.delete("/:id", posts.destroy);

router.get("/:id/comments", posts.showComments);
router.post("/:id/comments", posts.createComment);
router.put("/:id/comments/:commentId", posts.updateComment);
router.delete("/:id/comments/:commentId", posts.destroyComment);

module.exports = router;
const epxress = require("express");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const { renderProfile, renderJoin, renderMain } = require("../controllers/page");

const router = epxress.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.following = 0;
    res.locals.followingIdList = [];
    next();
});

router.get("/profile", isLoggedIn, renderProfile);

router.get("/join", isNotLoggedIn, renderJoin);

router.get("/", renderMain);

module.exports = router;

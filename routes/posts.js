const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {

    return res.json({
        posts: {
            title: 'My post',
            description: 'random data'
        }
    });
});

module.exports = router;
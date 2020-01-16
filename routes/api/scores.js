const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

/*--- protected routes ---*/
router.use(require('../../config/auth'));
router.post('/', scoresCtrl.create);

module.exports = router;

const router = require('express').Router();

const {
    getAllThought,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

router
    .route('/')
    .get(getAllThought)
    .post(addThought)

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought)

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;
const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId/reactions/')
    .put(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;
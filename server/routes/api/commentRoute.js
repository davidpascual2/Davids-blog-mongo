//STUDY THIS
const router = require('express').Router();

const { //this references all differenct crud options in controllers
    getComments,
    getSingleComment,
    createComment,
} = require('../../controllers/commentController');

// /api/comments
router.route('/').get(getComments).post(createComment);
//================ ALTERNATIVE writing controller directly into routes ===============//
// ??????
// router.get('/', async function ( req, res ) {
//     try{
//         const comment = await Comment.find(); //commnets variable?
//         res.json(comment);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }).post(createComment);

//====================================================//

// /api/comments/:commentId
router.route('/:commentId').get(getSingleComment);

module.exports = router;
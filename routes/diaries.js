const express = require('express');
const diaryController = require('../controllers/diaries');
const router = express.Router();
router.get('/', diaryController.getDiaries);
router.post('/add', diaryController.addNoteToDairy);
router.put('/edit', diaryController.editNote);
router.delete('/delete',diaryController.deleteDiaryNote);
router.get('/get/:email', diaryController.getDiaryNotesByEmail);
router.get('/getNote',diaryController.getDiaryNoteByDateEmail);
module.exports = router;

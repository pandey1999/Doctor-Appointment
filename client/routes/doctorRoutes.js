const express = require('express');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController } = require('../controllers/doctorCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//Get single info
router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)
router.post('/updateProfile',authMiddleware,updateProfileController)
router.post('/getDoctorById',authMiddleware,getDoctorByIdController)


module.exports = router;
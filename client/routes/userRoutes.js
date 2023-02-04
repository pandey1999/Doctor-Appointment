const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  getAllDotsController,
  deleteAllNotificationController,
  bookAppointmentController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", authMiddleware, authController);
router.post("/apply-doctor", authMiddleware, applyDoctorController);
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

router.get('/getAllDoctors',authMiddleware, getAllDotsController )
router.post('/book-appointment',authMiddleware,bookAppointmentController)


module.exports = router;

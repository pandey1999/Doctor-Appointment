const express = require("express");
const {
  getAllUserController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getAllUsers", authMiddleware, getAllUserController);
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
router.post("/changeAccountStatus", authMiddleware, changeAccountStatusController);

module.exports = router;

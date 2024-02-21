const express = require("express");
const router = express.Router();
const {
  getCoursesSortedByName,
  getCoursesNameAndSpecialization,
  getPublishedCourses,
} = require("../controllers/courseController");

router.get("/sortedByName", getCoursesSortedByName);

router.get("/coursesAndSpecialization", getCoursesNameAndSpecialization);

router.get("/publishedCourses", getPublishedCourses);

module.exports = router;

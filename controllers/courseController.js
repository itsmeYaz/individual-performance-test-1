const Course = require("../models/courseModel");

const getCoursesSortedByName = async (req, res) => {
  try {
    const years = await Course.find();
    let courses = [];
    years.forEach((year) => {
      ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach((yearKey) => {
        if (year[yearKey]) {
          courses = courses.concat(year[yearKey]);
        }
      });
    });
    courses.sort((a, b) => a.description.localeCompare(b.description));
    const courseDetails = courses.map((course) => ({
      year: course.year,
      code: course.code,
      description: course.description,
    }));
    res.json(courseDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCoursesNameAndSpecialization = async (req, res) => {
  try {
    const years = await Course.find();
    let courses = [];
    years.forEach((year) => {
      ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach((yearKey) => {
        if (year[yearKey]) {
          courses.push(...year[yearKey]);
        }
      });
    });
    const descriptionsTagsAndCode = courses.map((course) => ({
      code: course.code, // added this line
      description: course.description,
      tags: course.tags,
    }));
    res.json(descriptionsTagsAndCode);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPublishedCourses = async (req, res) => {
  try {
    const years = await Course.find();
    let courses = [];
    years.forEach((year) => {
      ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach((yearKey) => {
        if (year[yearKey]) {
          courses.push(...year[yearKey]);
        }
      });
    });
    const descriptionsTagsAndCode = courses
      .filter(
        (course) => course.tags.includes("BSIT") || course.tags.includes("BSIS")
      )
      .map((course) => ({
        code: course.code,
        description: course.description,
        tags: course.tags,
      }));
    res.json(descriptionsTagsAndCode);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getCoursesSortedByName,
  getCoursesNameAndSpecialization,
  getPublishedCourses,
};

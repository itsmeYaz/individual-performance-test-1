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
    res.json(courses);
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
    const descriptionsAndTags = courses.map((course) => ({
      description: course.description,
      tags: course.tags,
    }));
    res.json(descriptionsAndTags);
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
    const descriptionsAndTags = courses
      .filter(
        (course) => course.tags.includes("BSIT") || course.tags.includes("BSIS")
      )
      .map((course) => ({
        description: course.description,
        tags: course.tags,
      }));
    res.json(descriptionsAndTags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCoursesSortedByName,
  getCoursesNameAndSpecialization,
  getPublishedCourses,
};

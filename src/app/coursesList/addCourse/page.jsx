import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  TextField,
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";
import Link from "next/link";

const AddCourses = () => {
  const [category, setCategory] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [courseDisplayImage, setCourseDisplayImage] = useState(null);
  const [warning, setWarning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("courseName", courseName);
    formData.append("courseCode", courseCode);
    formData.append("moduleName", moduleName);
    if (courseDisplayImage) {
      formData.append(
        "courseDisplayImage",
        courseDisplayImage,
        courseDisplayImage.name
      );
    } else {
      setWarning("Please upload a course display image.");
      return;
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    axios
      .post("http://localhost:5000/api/courses", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Response:", res);
        setCategory("");
        setCourseName("");
        setCourseCode("");
        setModuleName("");
        setCourseDisplayImage(null);
      })
      .catch((err) => {
        console.error("Error:", err);
        setWarning(
          "Failed to save the course. Check console for more details."
        );
      });
  };

  return (
    <div className="items-center justify-center flex">
      <Card className="lg:w-[70%]">
        <CardContent>
          <h2 className="font-semibold text-[20px] mb-3">New Course</h2>
          <hr />
          <Container component="main">
            <form onSubmit={handleSubmit}>
              <Box sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Course Name"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Course Code"
                      value={courseCode}
                      type="number"
                      onChange={(e) => setCourseCode(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Module Name"
                      value={moduleName}
                      onChange={(e) => setModuleName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                      Course Display Image
                    </Typography>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ width: "100%" }}
                      onChange={(e) => setCourseDisplayImage(e.target.files[0])}
                    />
                    <p className="text-[13px] mt-3">
                      Maximum file size: 500 KB.
                    </p>
                    {warning && (
                      <p
                        style={{
                          color: "orange",
                          fontSize: "13px",
                          marginTop: "8px",
                        }}
                      >
                        {warning}
                      </p>
                    )}
                  </Grid>
                </Grid>
                <Typography
                  className="text-[15px] text-gray-600"
                  variant="body1"
                  sx={{ mt: 5, mb: 2 }}
                >
                  In the next step, you will need to add course details such as
                  translations, videos, and questionnaire of this course.
                </Typography>
                <div className="flex gap-3">
                  <Button type="submit" variant="contained">
                    Save
                  </Button>
                  <Link href="/" passHref>
                    <Button component="a" variant="outlined">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </Box>
            </form>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCourses;

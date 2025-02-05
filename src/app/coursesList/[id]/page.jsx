"use client";

import { useEffect, useState } from "react";
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
import { useParams } from "next/navigation";

const CourseEdit = () => {
  const params = useParams();


  const rowsData = [
    {
      ID: "1",
      Category: "Coding",
      Course_Name: "HTML",
      Course_Code: "12345",
      Module: "HTML_course",
      Featured: "No",
      In_Portal: "Active",
      In_Training: "Active",
      Languages: "1",
    },
    {
      ID: "2",
      Category: "Coding",
      Course_Name: "HTML",
      Course_Code: "12345",
      Module: "HTML_course",
      Featured: "No",
      In_Portal: "Inactive",
      In_Training: "Inactive",
      Languages: "0",
    },
    {
      ID: "3",
      Category: "Course",
      Course_Name: "Javascript",
      Course_Code: "123",
      Module: "Module",
      Featured: "No",
      In_Portal: "Active",
      In_Training: "Active",
      Languages: "1",
    },
    {
      ID: "4",
      Category: "Machine Learning",
      Course_Name: "Python",
      Course_Code: "123",
      Module: "Learning_Module",
      Featured: "No",
      In_Portal: "Active",
      In_Training: "Active",
      Languages: "1",
    },
    {
      ID: "5",
      Category: "demo_Category",
      Course_Name: "demo1",
      Course_Code: "123",
      Module: "demo_module",
      Featured: "No",
      In_Portal: "Active",
      In_Training: "Active",
      Languages: "1",
    },
    {
      ID: "6",
      Category: "Category 2",
      Course_Name: "Course 2",
      Course_Code: "563",
      Module: "Module 2",
      Featured: "No",
      In_Portal: "Inactive",
      In_Training: "Inactive",
      Languages: "0",
    },
    {
      ID: "7",
      Category: "Category 4",
      Course_Name: "Course 4",
      Course_Code: "456",
      Module: "Module 4",
      Featured: "No",
      In_Portal: "Active",
      In_Training: "Active",
      Languages: "1",
    },
  ];



  return (
    <>
      <h2 className="font-semibold lg:text-[25px] mb-5"> Course Edit</h2>
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3"> Course Update</h2>
            <hr />
            <div>
              <Container component="main" className="">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Category"
                        name="Category"
                        autoComplete="given-name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Course Name"
                        name="Course Name"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Course Code"
                        name="Course Code"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Module Name"
                        name="Module Name"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                        Course Display Image
                      </Typography>
                      <input
                        type="file"
                        accept="image/*"
                        name="photo"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>

                  <Typography
                    className="text-[15px] text-gray-600"
                    variant="body1"
                    sx={{ mt: 5, mb: 2 }}
                  >
                    In the next step, you will add translations, Videos and
                    Questionnaire of this course.
                  </Typography>

                  <div className="flex gap-3">
                    <Button type="submit" variant="contained">
                      Update
                    </Button>

                    <Button type="submit" variant="outlined">
                      Cancel
                    </Button>
                  </div>
                </Box>
              </Container>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CourseEdit;

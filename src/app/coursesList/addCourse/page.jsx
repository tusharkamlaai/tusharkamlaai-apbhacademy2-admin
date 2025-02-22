"use client";

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
import { useState } from "react";

const AddCourses = () => {
  const [fileSize, setFileSize] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileSize(file.size);
    } else {
      setFileSize(null);
    }
  };
  return (
    <>
    {''}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">New Course</h2>
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
                        onChange={handleFileChange}
                      />
                      {fileSize && (
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          File size: {(fileSize / 1024).toFixed(2)} KB
                        </Typography>
                      )}
                    <p className="text-[13px] mt-3">Maximum file size: 200 KB.</p>  
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
                      Save
                    </Button>

                    <Link href="/">
                      <Button type="submit" variant="outlined">
                        Cancel
                      </Button>
                    </Link>
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

export default AddCourses;

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
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const AddCourses = () => {
  const [all, setAll] = useState("");

  const [warning, setWarning] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      setWarning("File size exceeds 500 KB. Please upload a smaller file.");
      event.target.value = "";
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const { width, height } = img;
      const standardWidth = 500;
      const standardHeight = 500;

      if (width > standardWidth || height > standardHeight) {
        setWarning(
          `Uploaded image dimensions (${width}x${height}) do not match the required dimensions (${standardWidth}x${standardHeight}).`
        );
      } else {
        setWarning("");
      }
    };
  };
  return (
    <>
      {""}
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
                      <Box sx={{ minWidth: 120 }} >
                        <FormControl fullWidth margin="normal">
                          <InputLabel id="demo-simple-select-label">
                            Category
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Category"
                            onChange={(e) => setAll(e.target.value)}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
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
                        onChange={handleFileUpload}
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
                    In the next step, you will need to add course details such as translations, Videos and
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

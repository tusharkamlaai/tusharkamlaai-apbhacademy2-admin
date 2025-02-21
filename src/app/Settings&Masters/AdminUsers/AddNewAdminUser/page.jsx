"use client";

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  Grid,
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";

let Trainer = [
  {
    TrainerName: "Ravi Sham",
    Language: "English",
    numbers: "123",
  },
];

const SendAssessmentLink = () => {
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
      {""}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Add New Admin User
            </h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Email ID (Login ID)"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Mobile Number"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            User Role
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Default Language"
                          >
                            <MenuItem value="Course">Numbers</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                        Upload Profile Pic
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

                  <div className="flex gap-3 mt-5">
                    <Button type="submit" variant="contained">
                      Save
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

export default SendAssessmentLink;

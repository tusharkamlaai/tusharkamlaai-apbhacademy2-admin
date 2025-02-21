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
} from "@mui/material";
import TextField from "@mui/material/TextField";

const AddNewImage = () => {
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
            <h2 className="font-semibold text-[20px] mb-3">Add New Role</h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Role Name"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Language
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Language"
                          >
                            <MenuItem value="Course">Language</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                    <div className="flex gap-5 items-center mt-5">
                      <p>Slider Image:</p>
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          name="photo"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <p className="text-[13px] mt-3">Maximum file size: 200 KB.</p>  

                  </Grid>

                  </Grid>
                  <div className="flex gap-3 mt-5">
                    <Button type="submit" variant="contained">
                      Save
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

export default AddNewImage;

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

const page = () => {
  return (
    <>
      {""}
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">
          Automated Report Scheduler
        </h2>
      </div>
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3"> Scheduler</h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Mode of Training
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Mode of Training
"
                          >
                            <MenuItem value="Course">Mode of Training</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Division
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Division
"
                          >
                            <MenuItem value="Course">Division</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Region
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Region
"
                          >
                            <MenuItem value="Course">Region</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Trainer
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Trainer
"
                          >
                            <MenuItem value="Course">Trainer</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Languages
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Languages
"
                          >
                            <MenuItem value="Course">Languages</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Courses
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Courses
"
                          >
                            <MenuItem value="Course">Courses</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Period
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Period
"
                          >
                            <MenuItem value="Course">Period</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Frequency
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Frequency
"
                          >
                            <MenuItem value="Course">Frequency</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Enter Email Id's"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>
                  </Grid>
                  <p className="text-sm mt-3">
                    You can enter multple emails, seperated by comma
                  </p>
                  <div className="flex gap-3 mt-5">
                    <Button type="submit" variant="contained">
                      Schedule Report
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

      <div className="items-center justify-center flex mt-5">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3"> Scheduled Reports</h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  ss
                </Box>
              </Container>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;

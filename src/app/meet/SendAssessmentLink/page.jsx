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
import Link from "next/link";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

let Trainer = [
  {
    TrainerName: "Ravi Sham",
    Language: "English",
    numbers: "123",
  },
];

const SendAssessmentLink = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTrainer, setselectedTrainere] = useState("");
  const [selectedCourse, setselectedselectedCourse] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleChangeTrai = (event) => {
    setselectedTrainere(event.target.value);
  };

  return (
    <>
      {/* <h2 className='font-semibold lg:text-[25px] mb-5'>Add New Course</h2> */}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Send Assessment Link
            </h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Trainer
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Language"
                            onChange={handleChangeTrai}
                            value={selectedTrainer}
                          >
                            {Trainer.map((lang, index) => (
                              <MenuItem key={index} value={lang.TrainerName}>
                                {lang.TrainerName}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
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
                            onChange={handleChange}
                            value={selectedLanguage}
                          >
                            {Trainer.map((lang, index) => (
                              <MenuItem key={index} value={lang.Language}>
                                {lang.Language}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Course
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Course"
                            // onChange={handleChange}
                          >
                            <MenuItem value="Course">Course</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Select Date"
                          value={selectedDate}
                          onChange={(newValue) => setSelectedDate(newValue)}
                          className="w-[100%]"
                        />
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Numbers
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Course"
                            // onChange={handleChange}
                          >
                            <MenuItem value="Course">Numbers</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
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
                      <Button variant="contained" color="success">
                        Add Mobile Number
                      </Button>
                    </Grid>
                  </Grid>

                  <h3 className="py-5">Participants' Mobile Number</h3>

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

export default SendAssessmentLink;

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
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">App Configuration</h2>
      </div>
      {/* <h2 className='font-semibold lg:text-[25px] mb-5'>Add New Course</h2> */}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
            Update Config
            </h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                 
                  <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Passing Percentage"
                        variant="outlined"
                        className="w-[100%]"
                        type="number"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box className="lg:w-[100%]">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                          Default Language
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Default Language"
                            // onChange={handleChange}
                          >
                            <MenuItem value="Course">Numbers</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
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

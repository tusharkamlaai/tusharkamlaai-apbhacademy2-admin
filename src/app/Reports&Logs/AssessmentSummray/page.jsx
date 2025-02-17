"use client";

import { useState } from "react";
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
  TextField,
} from "@mui/material";
import Link from "next/link";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const page = () => {
  const [Training, setTraining] = useState("");
  const [Trainer, setTrainer] = useState("");
  const [Languages, setLanguages] = useState("");
  const [Courses, setCourses] = useState("");
  const [StartDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div>
          <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">Reports</h2>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className="">
              <Card>
                <Container component="main" className="mt-8">
                  <h2 className="font-semibold text-[20px] mb-3">Filter</h2>
                  <hr />
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Training
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Training}
                              label="Training"
                              onChange={(e) => setTraining(e.target.value)}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Trainer
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Trainer}
                              label="Trainer"
                              onChange={(e) => setTrainer(e.target.value)}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Languages
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Languages}
                              label="Languages"
                              onChange={(e) => setLanguages(e.target.value)}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Courses
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Courses}
                              label="Division"
                              onChange={(e) => setCourses(e.target.value)}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Start Date"
                            value={StartDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            className="w-[100%]"
                          />
                        </LocalizationProvider>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            className="w-[100%]"
                          />
                        </LocalizationProvider>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <p className="my-2 text-[18px]">Email Report To:</p>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          label="Enter Email Id's"
                          variant="outlined"
                          sx={{ mb: 3 }}
                          className="lg:w-[70%] w-[100%] "
                          type="email"
                          fullWidth
                        />

                        <div className="text-center flex justify-center items-center ">
                          <p className=" text-[14px] w-[60%]">
                            You can enter multple emails, seperated by comma
                          </p>
                        </div>
                      </Grid>
                    </Grid>

                    <div className="flex gap-3 mt-5 justify-center py-5">
                      <Button type="submit" variant="contained">
                        View Report
                      </Button>

                      <Link href="/">
                        <Button type="submit" variant="outlined">
                          Cancel
                        </Button>
                      </Link>
                    </div>
                  </Box>
                </Container>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="">
              <Card className="h-[500px]">
                <Container component="main" className="mt-8">
                  <h2 className="font-semibold text-[20px] mb-3">Assessments Results: Total 0
                  </h2>
                  <hr />
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <div className="flex items-center justify-center gap-5">
                    <div className="flex gap-3 items-center">
                      <div className="bg-green-500 w-[20px] h-[10px]"></div>
                      <div>Pass</div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <div className="bg-red-500 w-[20px] h-[10px]"></div>
                      <div>Failed</div>
                    </div>
                    </div>
                  </Box>
                </Container>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default page;

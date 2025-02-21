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
} from "@mui/material";
import Link from "next/link";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const page = () => {
  const [Trainer, setTrainer] = useState("");
  const [StartDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      {""}
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">Reports</h2>
      </div>
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Trainer Assessment IP Report
            </h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
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
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Start Date"
                          value={StartDate}
                          onChange={(newValue) => setStartDate(newValue)}
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
                  </Grid>
                  <div className="flex gap-3 mt-5 justify-center py-5">
                    <Button type="submit" variant="contained">
                      gemerate report
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
      <div className="items-center justify-center flex mt-5"></div>
    </>
  );
};

export default page;

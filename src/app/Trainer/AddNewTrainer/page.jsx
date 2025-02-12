"use client";

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
import TextField from "@mui/material/TextField";

let Trainer = [
  {
    TrainerName: "Ravi Sham",
    Language: "English",
    numbers: "123",
  },
];

const AddNewTrainer = () => {


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
                            Division
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Language"
                            value="Division"
                          >
                            <MenuItem value="Division">Division</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Region"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Zoom User Email"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>
                  </Grid>

                  {/* <h3 className="py-5">
                  Profile Picture</h3> */}

                  <Grid item xs={12}>
                    <div className="flex gap-5 items-center mt-5">
                      <p>Profile Pic:</p>
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          name="photo"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </Grid>

                  <div className="flex gap-3 mt-5">
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

export default AddNewTrainer;

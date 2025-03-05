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
  Typography,
} from "@mui/material";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import { useState } from "react";

let Trainer = [
  {
    TrainerName: "Ravi Sham",
    Language: "English",
    numbers: "123",
  },
];

const AddNewTrainer = () => {
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
                    <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                      Profile Picture
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

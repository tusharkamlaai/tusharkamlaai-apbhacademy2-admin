"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  TextField,
  Grid,
  Box,
  Container,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const AddUser = () => {
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
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

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const states = [
    {
      name: "Maharashtra",
      districts: [
        {
          name: "Mumbai",
          cities: ["Mumbai", "Navi Mumbai"],
        },
      ],
    },
  ];

  const districts = state
    ? states.find((s) => s.name === state)?.districts
    : [];

  const cities = district
    ? districts.find((d) => d.name === district)?.cities
    : [];

  return (
    <>
      {""}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%]">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">New User</h2>
            <hr />
            <div>
              <Container component="main">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Full Name"
                        autoComplete="given-name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Mobile Number"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin="normal" required>
                        <InputLabel id="state-label">State</InputLabel>
                        <Select
                          labelId="state-label"
                          id="state-select"
                          value={state}
                          label="State"
                          onChange={handleStateChange}
                        >
                          <MenuItem value="" disabled>
                            Select a state
                          </MenuItem>
                          {states.map((state) => (
                            <MenuItem key={state.name} value={state.name}>
                              {state.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin="normal" required>
                        <InputLabel id="district-label">District</InputLabel>
                        <Select
                          labelId="district-label"
                          id="district-select"
                          value={district}
                          label="District"
                          onChange={handleDistrictChange}
                          disabled={!state}
                        >
                          <MenuItem value="" disabled>
                            Select a district
                          </MenuItem>
                          {districts.map((district) => (
                            <MenuItem key={district.name} value={district.name}>
                              {district.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin="normal" required>
                        <InputLabel id="city-label">City</InputLabel>
                        <Select
                          labelId="city-label"
                          id="city-select"
                          value={city}
                          label="City"
                          onChange={handleCityChange}
                          disabled={!district}
                        >
                          <MenuItem value="" disabled>
                            Select a city
                          </MenuItem>
                          {cities.map((city) => (
                            <MenuItem key={city} value={city}>
                              {city}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email ID"
                        autoComplete="email"
                      />
                    </Grid>
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
                  </Grid>
                  <div className="flex gap-3 mt-8">
                    <Button type="submit" variant="contained">
                      Save
                    </Button>
                    <Button type="reset" variant="outlined">
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

export default AddUser;

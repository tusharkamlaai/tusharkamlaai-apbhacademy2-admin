"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import {
  Select,
  useMediaQuery,
  MenuItem,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Container,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useNavigate, useParams } from 'react-router-dom';

let languages = [
  {
    language: "English",
    transliteration: "",
  },
  {
    language: "Hindi",
    transliteration: "<4",
  },
  {
    language: "Gujarati",
    transliteration: "Tyīxīʤ",
  },
  {
    language: "Marathi",
    transliteration: "Tīxīʤ",
  },
  {
    language: "Malayalam",
    transliteration: "@P1000go",
  },
  {
    language: "Kannada",
    transliteration: "rāʣʣ",
  },
  {
    language: "Bangla",
    transliteration: "xīsīʤ",
  },
  {
    language: "Odia",
    transliteration: "@?l",
  },
  {
    language: "Tamil",
    transliteration: "gūbīʤ",
  },
  {
    language: "Telugu",
    transliteration: "œcōǒ",
  },
  {
    language: "Assamese",
    transliteration: "vīxīʤ",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Page = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const [courseDuration, setCourseDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState("Minutes");

  const params = useParams();
  console.log(params.courseId,"lll")

  const isMobileTab = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const headings = ["Translation Add", "Upload Translation"];

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <>
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">{headings[value]}</h2>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          {isMobileTab ? (
            <Select
              value={value}
              onChange={handleSelectChange}
              fullWidth
              displayEmpty
            >
              <MenuItem value={0}>Translation Add</MenuItem>
              <MenuItem value={1}>Upload Translation</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Translation Add" />
              <Tab label="Upload Translation" />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* <h2 className="font-semibold lg:text-[25px] mb-5">Add FAQs</h2> */}
          <div className="items-center justify-center flex">
            <Card className="lg:w-[90%] ">
              <CardContent>
                <h2 className="font-semibold text-[20px] mb-3">
                  Course Translation
                </h2>
                <hr />
                <div>
                  <Container component="main" className="mt-5">
                    <Box className="lg:w-[50%]">
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
                          {languages.map((lang, index) => (
                            <MenuItem key={index} value={lang.language}>
                              {lang.language}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    <div className="text-center font-semibold mt-5 text-xl">
                      Translations for हिन्दी (Hindi)
                    </div>
                    <div className="mt-5 lg:flex flex-col items-center">
                      <TextField
                        id="assamese-question"
                        label="Course Name"
                        variant="outlined"
                        sx={{ mb: 3 }}
                        className="lg:w-[70%] w-[100%] "
                      />
                      <TextField
                        id="assamese-answer"
                        label="Description"
                        multiline
                        rows={2}
                        variant="outlined"
                        sx={{ mb: 3 }}
                        className="lg:w-[70%] w-[100%] "
                      />
                      <div className="flex gap-3 items-center lg:w-[70%]">
                        <TextField
                          id="course-duration"
                          label="Course Duration"
                          variant="outlined"
                          sx={{ mb: 3, width: "70%" }}
                          type="number"
                          value={courseDuration}
                          onChange={(e) => setCourseDuration(e.target.value)}
                        />

                        <FormControl
                          sx={{ mb: 3, width: "30%" }}
                          disabled={!courseDuration}
                        >
                          <InputLabel id="duration-unit-label">
                            Duration is in
                          </InputLabel>
                          <Select
                            labelId="duration-unit-label"
                            id="duration-unit"
                            label="Duration is in"
                            value={durationUnit}
                            onChange={(e) => setDurationUnit(e.target.value)}
                          >
                            <MenuItem value="Minutes">Minutes</MenuItem>
                            <MenuItem value="Hours">Hours</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      <div className="flex gap-3">
                        <span>
                          <Button variant="contained">Save</Button>
                        </span>
                        <span>
                          <Button
                            variant="outlined"
                            onClick={() => router.back()}
                          >
                            Cancel
                          </Button>
                        </span>
                      </div>
                    </div>
                  </Container>
                </div>
              </CardContent>
            </Card>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="items-center justify-center flex">
            <Card className="lg:w-[70%]">
              <CardContent>
                <h2 className="font-semibold text-[20px] mb-3">
                  Upload Translations
                </h2>
                <hr />
                <div>
                  <Container component="main">
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <div>
                        <span>
                          You can download the sample excel file here. The order
                          of columns should be exactly as in
                        </span>
                        <span className="text-blue-400 ml-2">
                          {" "}
                          <a href="">sample file.</a>{" "}
                        </span>
                        <div>
                          <span className="font-semibold">
                            Columns in Excel File:{" "}
                          </span>
                          <span className="ml-2">
                            Language ID, Course Name, Description, Course
                            Duration, Active on Portal, Active in Training
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-5 items-center mt-5">
                        <p className="font-semibold">Upload XLSX File:</p>
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            name="photo"
                            style={{ width: "100%" }}
                          />
                          <p className="text-[13px] mt-3">
                            Maximum file size: 200 KB.
                          </p>
                        </div>
                      </div>

                      <div className="flex mt-5 items-center">
                        <div className="w-[200px]">
                          <p> Old Records:</p>
                        </div>
                        <div>
                          <span>
                            {" "}
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="Append New records. (Keep Existing as it is.)"
                            />
                          </span>
                          <span>
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="Remove All Old Records and Add New from Excel"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-5 justify-center">
                        <Button type="submit" variant="contained">
                          Upload
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
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Page;

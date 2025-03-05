"use client";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormControlLabel,
  MenuItem,
  Radio,
  Select,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CourseDetail from "../../CourseDetail/page";

const rowsData = [
  { ID: 1, Language: "English", Portal: "Active", Training: "Active" },
  { ID: 2, Language: "हिन्दी (Hindi)", Portal: "Inactive", Training: "Active" },
  {
    ID: 3,
    Language: "गुजराती (Gujarati)",
    Portal: "Inactive",
    Training: "Inactive",
  },
  {
    ID: 4,
    Language: "मराठी (Marathi)",
    Portal: "Inactive",
    Training: "Inactive",
  },
  {
    ID: 5,
    Language: "മലയാളം (Malayalam)",
    Portal: "Inactive",
    Training: "Inactive",
  },
  {
    ID: 6,
    Language: "ಕನ್ನಡ (Kannada)",
    Portal: "Inactive",
    Training: "Inactive",
  },
  {
    ID: 7,
    Language: "বাংলা (Bangla)",
    Portal: "Inactive",
    Training: "Inactive",
  },
  { ID: 8, Language: "ଓଡିଆ (Odia)", Portal: "Inactive", Training: "Inactive" },
  {
    ID: 9,
    Language: "தமிழ் (Tamil)",
    Portal: "Inactive",
    Training: "Inactive",
  },
  {
    ID: 10,
    Language: "తెలుగు (Telugu)",
    Portal: "Inactive",
    Training: "Inactive",
  },
  {
    ID: 11,
    Language: "অসমীয়া (Assamese)",
    Portal: "Inactive",
    Training: "Inactive",
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

export default function CourseMange() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const rowsPerPage = 100;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const filteredData = useMemo(() => {
    return rowsData.filter((item) => {
      return (
        (!searchTerm ||
          Object.values(item).some((val) =>
            val.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )) &&
        (!languageFilter || item.Language === languageFilter) // No semicolon here
      );
    });
  }, [searchTerm, languageFilter]);

  const displayedRows = useMemo(() => {
    const start = currentPage * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        {isMobile ? (
          <Select
            value={value}
            onChange={handleSelectChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value={0}>Course Language</MenuItem>
            <MenuItem value={1}>Upload Translations</MenuItem>
            <MenuItem value={2}>Upload Videos</MenuItem>
            <MenuItem value={3}>Upload Questions</MenuItem>
            <MenuItem value={4}>Course Details</MenuItem>
          </Select>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Course Language" {...a11yProps(0)} />
            <Tab label="Upload Translations" {...a11yProps(1)} />
            <Tab label="Upload Videos" {...a11yProps(2)} />
            <Tab label="Upload Questions" {...a11yProps(3)} />
            <Tab label="Course Details" {...a11yProps(4)} />
          </Tabs>
        )}
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* Content for Course Language */}
        <div className="items-center flex gap-3">
          <div>
            <h2 className="font-semibold lg:text-[22px]">Course Name:</h2>
          </div>
          <div>
            <span className="lg:text-[22px]">Coding</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 mt-5">
          <div>
            <FilterListIcon />
          </div>
          <div>Filter</div>
        </div>

        <div className="lg:flex justify-between my-4 gap-4">
          <TextField
            label="Search..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
          <Select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Select Language</MenuItem>
            {[...new Set(rowsData.map((row) => row.Language))].map(
              (Language) => (
                <MenuItem key={Language} value={Language}>
                  {Language}
                </MenuItem>
              )
            )}
          </Select>
        </div>

        {!isMobile ? (
          <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block bg-white">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {[
                    "No",
                    "Language",
                    "Portal",
                    "Training",
                    "Translation",
                    "Videos",
                    "Questionairre",
                  ].map((header, index) => (
                    <th key={index} className="px-6 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedRows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{row.ID}</td>
                    <td className="px-6 py-4">{row.Language}</td>
                    <td
                      className={`px-6 py-4 ${
                        row.Portal == "Active" ? "text-green-600" : ""
                      } ${row.Portal == "Inactive" ? "text-red-600" : ""} ${
                        row.Portal == "Pending" ? "text-yellow-600" : ""
                      }`}
                    >
                      <button>{row.Portal}</button>
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        row.Training == "Active" ? "text-green-600" : ""
                      } ${row.Training == "Inactive" ? "text-red-600" : ""} ${
                        row.Training == "Pending" ? "text-yellow-600" : ""
                      }`}
                    >
                      <button>{row.Training}</button>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/coursesList/translationAdd/${row.ID}`}>
                        <button className="text-blue-500 hover:text-blue-700">
                          (Add Now)
                        </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/coursesList/CourseVideos/${row.ID}`}>
                        <button className="text-blue-500 hover:text-blue-700">
                          (Add Now)
                        </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/coursesList/Questionairre/${row.ID}`}>
                        <button className="text-blue-500 hover:text-blue-700">
                          (Add Now)
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid gap-4 mt-5">
            {displayedRows.map((row, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded-lg border"
              >
                <p>
                  <strong>ID:</strong> {row.ID}
                </p>
                <p>
                  <strong>Language:</strong> {row.Language}
                </p>
                <p>
                  <strong>Portal:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded ${
                      row.Portal === "Active"
                        ? "bg-green-200 text-green-800"
                        : row.Portal === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {row.Portal}
                  </span>
                </p>
                <p>
                  <strong>Training:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded ${
                      row.Training === "Active"
                        ? "bg-green-200 text-green-800"
                        : row.Training === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {row.Training}
                  </span>
                </p>
                <div className="flex justify-between mt-3">
                  <Link href={`/coursesList/translationAdd/${row.ID}`}>
                    <div className="flex items-center gap-3">
                      <p>Questionairre:</p>
                      <button className="text-blue-500 hover:text-blue-700">
                        (Add Now)
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="flex justify-between mt-3">
                  <Link href={`/coursesList/CourseVideos/${row.ID}`}>
                    <div className="flex items-center gap-3">
                      <p>Videos:</p>
                      <button className="text-blue-500 hover:text-blue-700">
                        (Add Now)
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="flex justify-between mt-3">
                  <Link href={`/coursesList/Questionairre/${row.ID}`}>
                    <div className="flex items-center gap-3">
                      <p>Translation:</p>
                      <button className="text-blue-500 hover:text-blue-700">
                        (Add Now)
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Content for Upload Translations */}
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
                        <a href="">sample file.</a>
                      </span>
                      <div>
                        <span className="font-semibold">
                          Columns in Excel File:
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
                        <p>Old Records:</p>
                      </div>
                      <div>
                        <span>
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
      <CustomTabPanel value={value} index={2}>
        {/* Content for Upload Videos */}
        <div className="items-center justify-center flex">
          <Card className="lg:w-[70%]">
            <CardContent>
              <h2 className="font-semibold text-[20px] mb-3">Upload Videos</h2>
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
                        <a href="">sample file.</a>
                      </span>
                      <div>
                        <span className="font-semibold">
                          Columns in Excel File:
                        </span>
                        <span className="ml-2">
                          Language ID, Title, YoutubeID, Description, Display
                          Order, Status
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
                        <p>Old Records:</p>
                      </div>
                      <div>
                        <span>
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
      <CustomTabPanel value={value} index={3}>
        {/* Content for Upload Questions */}
        <div className="items-center justify-center flex">
          <Card className="lg:w-[70%]">
            <CardContent>
              <h2 className="font-semibold text-[20px] mb-3">
                Upload Questions
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
                        <a href="">sample file.</a>
                      </span>
                      <div>
                        <span className="font-semibold">
                          Columns in Excel File:
                        </span>
                        <span className="ml-2">
                          Language ID, Question, Option 1, Option 2, Option 3,
                          Option 4, Answer Option Number, Status
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
                        <p>Old Records:</p>
                      </div>
                      <div>
                        <span>
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
      <CustomTabPanel value={value} index={4}>
        <CourseDetail/>
      </CustomTabPanel>

    </Box>
  );
}

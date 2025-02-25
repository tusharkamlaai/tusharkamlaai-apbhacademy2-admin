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
  Radio,
} from "@mui/material";

const rowsData = [
  { ID: 1, Language: "English", Portal: "Active", Training: "Active" },
  {
    ID: 2,
    Language: "हिन्दी (Hindi)",
    Portal: "Inactive",
    Training: "Inactive",
  },
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

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false); // Detect Mobile View

  const rowsPerPage = 5;

  useEffect(() => {
    // Check screen size to switch between table & card view
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Change view if width is below 768px
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const sortedData = useMemo(() => {
    let sortableItems = [...rowsData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "ascending" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }
    if (searchTerm) {
      sortableItems = sortableItems.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    return sortableItems;
  }, [sortConfig, searchTerm]);
  const displayedRows = useMemo(() => {
    const start = currentPage * rowsPerPage;
    const end = start + rowsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Course Language" {...a11yProps(0)} />
          <Tab label="Upload Translations" {...a11yProps(1)} />
          <Tab label="Upload Videos" {...a11yProps(2)} />
          <Tab label="Upload Questions" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="justify-between lg:flex ">
          <h2 className="font-semibold lg:text-[25px] mb-5">Course Name</h2>
        </div>

        <div className="lg:flex justify-end">
          <div className="mb-5 lg:mb-0">
            <TextField
              id="Search"
              label="Search..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Conditionally Render Table (Large Screens) or Cards (Mobile View) */}
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
                    <td className="px-6 py-4">{row.Portal}</td>
                    <td className="px-6 py-4">{row.Training}</td>

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
            <div className="flex justify-between p-4">
              <button
                onClick={() => setCurrentPage((current) => current - 1)}
                disabled={currentPage === 0}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage((current) => current + 1)}
                disabled={
                  currentPage >= Math.ceil(sortedData.length / rowsPerPage) - 1
                }
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
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
                      row.Status === "Active"
                        ? "bg-green-200 text-green-800"
                        : row.Status === "Pending"
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
                      row.Status === "Active"
                        ? "bg-green-200 text-green-800"
                        : row.Status === "Pending"
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

            <div className="flex justify-between p-4">
              <button
                onClick={() => setCurrentPage((current) => current - 1)}
                disabled={currentPage === 0}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage((current) => current + 1)}
                disabled={
                  currentPage >= Math.ceil(sortedData.length / rowsPerPage) - 1
                }
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
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
      <CustomTabPanel value={value} index={2}>
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
      <CustomTabPanel value={value} index={3}>
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
  );
}

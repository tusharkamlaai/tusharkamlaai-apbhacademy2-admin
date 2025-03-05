"use client";

import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  useMediaQuery,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { TextField, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

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

const rowsData = [
  {
    ID: "1",
    Question: "Question 1",
    Status: "Active",
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

const page = () => {
  const [value, setValue] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false); // Detect Mobile
  const theme = useTheme();
  const isMobileTab = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const rowsPerPage = 5;

  useEffect(() => {
    // Check screen size to switch between table & card view
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200); // Change view if width is below 768px
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
          value.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div></div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {isMobileTab ? (
            <Select
              value={value}
              onChange={handleSelectChange}
              fullWidth
              displayEmpty
            >
              <MenuItem value={0}> Course Questionairre</MenuItem>
              <MenuItem value={1}>Interactive Questionairre</MenuItem>
              <MenuItem value={3}>Upload Questions</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Course Questionairre" />
              <Tab label="Interactive Questionairre" />
              <Tab label="Upload Questions" />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
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
                      Assessment Questions in मराठी (Marathi)
                    </div>

                    <div className="lg:flex justify-end">
                      <div className="mb-5 lg:mb-0">
                        <TextField
                          id="Search"
                          label="Search..."
                          variant="outlined"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-[100%]"
                        />
                      </div>
                    </div>

                    {/* Conditionally Render Table (Large Screens) or Cards (Mobile View) */}
                    {!isMobile ? (
                      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block  bg-white">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              {[
                                "ID",
                                "Question",
                                "Status",
                                "Edit",
                                "Delete",
                              ].map((header, index) => (
                                <th key={index} className="px-3 py-3">
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
                                <td className="px-6 py-4">{row.Question}</td>
                                <td className="px-6 py-4">{row.Status}</td>

                                <td className="px-6 py-4">
                                  <button className="text-blue-500 hover:text-blue-700">
                                    Edit
                                  </button>
                                </td>

                                <td className="px-6 py-4">
                                  <button className="text-blue-500 hover:text-blue-700">
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="flex justify-between p-4">
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current - 1)
                            }
                            disabled={currentPage === 0}
                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current + 1)
                            }
                            disabled={
                              currentPage >=
                              Math.ceil(sortedData.length / rowsPerPage) - 1
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
                              <strong>Question:</strong> {row.Question}
                            </p>
                            <p>
                              <strong>Status:</strong> {row.Status}
                            </p>

                            <div className="flex justify-between mt-3">
                              <button className="text-blue-500 hover:text-blue-700">
                                Edit
                              </button>
                              <button className="text-blue-500 hover:text-blue-700">
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}

                        <div className="flex justify-between p-4">
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current - 1)
                            }
                            disabled={currentPage === 0}
                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current + 1)
                            }
                            disabled={
                              currentPage >=
                              Math.ceil(sortedData.length / rowsPerPage) - 1
                            }
                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                  </Container>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="items-center justify-center flex mt-5">
            <Card className="lg:w-[90%] ">
              <CardContent>
                <h2 className="font-semibold text-[20px] mb-3">
                  Add Question - मराठी (Marathi)
                </h2>
                <hr />
                <div>
                  <Container component="main" className="mt-5">
                    <div className="flex items-center gap-5">
                      <p>Question:</p>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className="w-[70%]"
                        placeholder="Question"
                      />
                    </div>

                    <div className="flex items-center gap-5 mt-5 ml-2">
                      <p>Option 1:</p>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className="w-[60%]"
                        placeholder="Option 1"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="(This is Right Answer)"
                      />
                    </div>

                    <div className="flex items-center gap-5 mt-5 ml-2">
                      <p>Option 2:</p>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className="w-[60%]"
                        placeholder="Option 2"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="(This is Right Answer)"
                      />
                    </div>

                    <div className="flex items-center gap-5 mt-5 ml-2">
                      <p>Option 3:</p>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className="w-[60%]"
                        placeholder="Option 3"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="(This is Right Answer)"
                      />
                    </div>

                    <div className="flex items-center gap-5 mt-5 ml-2">
                      <p>Option 4:</p>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className="w-[60%]"
                        placeholder="Option 4"
                      />
                      <FormControlLabel
                        value="(This is Right Answer)"
                        control={<Radio />}
                        label="(This is Right Answer)"
                      />
                    </div>
                    <div className="flex justify-center mt-5 gap-5">
                      <Button variant="contained">Save</Button>
                      <Button variant="outlined" onClick={() => router.back()}>
                        Cancel
                      </Button>
                    </div>
                  </Container>
                </div>
              </CardContent>
            </Card>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
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
                      Assessment Questions in मराठी (Marathi)
                    </div>

                    <div className="lg:flex justify-end">
                      <div className="mb-5 lg:mb-0">
                        <TextField
                          id="Search"
                          label="Search..."
                          variant="outlined"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-[100%]"
                        />
                      </div>
                    </div>

                    {/* Conditionally Render Table (Large Screens) or Cards (Mobile View) */}
                    {!isMobile ? (
                      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block hidden bg-white">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              {[
                                "ID",
                                "Qtype",
                                "After Video ID	",
                                "Question",
                                "Status",
                                "Edit",
                                "Delete",
                              ].map((header, index) => (
                                <th key={index} className="px-3 py-3">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td className="px-6 py-4"></td>
                              <td className="px-6 py-4"></td>
                              <td className="px-6 py-4"></td>

                              {/* <td className="px-6 py-4">
                                  <button className="text-blue-500 hover:text-blue-700">
                                    Edit
                                  </button>
                                </td>

                                <td className="px-6 py-4">
                                  <button className="text-blue-500 hover:text-blue-700">
                                    Delete
                                  </button>
                                </td> */}
                            </tr>
                          </tbody>
                        </table>
                        <div className="flex justify-between p-4">
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current - 1)
                            }
                            disabled={currentPage === 0}
                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current + 1)
                            }
                            disabled={
                              currentPage >=
                              Math.ceil(sortedData.length / rowsPerPage) - 1
                            }
                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-4 mt-5">
                        <div className="bg-white p-4 shadow rounded-lg border">
                          <p>
                            <strong>ID:</strong>
                          </p>
                          <p>
                            <strong>Qtype:</strong>
                          </p>
                          <p>
                            <strong>After Video ID:</strong>
                          </p>
                          <p>
                            <strong>Question:</strong>
                          </p>
                          <p>
                            <strong>Status:</strong>
                          </p>
                          <p>
                            <strong>Edit:</strong>
                          </p>
                          <p>
                            <strong>Delete:</strong>
                          </p>
                          <div className="flex justify-between mt-3">
                            <button className="text-blue-500 hover:text-blue-700">
                              Edit
                            </button>
                            <button className="text-blue-500 hover:text-blue-700">
                              Delet
                            </button>
                          </div>
                        </div>

                        <div className="flex justify-between p-4">
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current - 1)
                            }
                            disabled={currentPage === 0}
                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() =>
                              setCurrentPage((current) => current + 1)
                            }
                            disabled={
                              currentPage >=
                              Math.ceil(sortedData.length / rowsPerPage) - 1
                            }
                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                  </Container>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="items-center justify-center flex mt-5">
            <Card className="lg:w-[90%] ">
              <CardContent>
                <h2 className="font-semibold text-[20px] mb-3">
                  Add Question - मराठी (Marathi)
                </h2>
                <hr />
                <div>
                  <Container component="main" className="mt-5">
                    <div className="flex items-center gap-5">
                      <span>Question After Video:</span>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select"
                          onChange={handleChange}
                          className="w-[50%]"
                        >
                          <MenuItem>Select</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div className="flex items-center gap-5 mt-5">
                      <span>Question Type:</span>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select"
                          onChange={handleChange}
                          className="w-[50%]"
                        >
                          <MenuItem>Select</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="flex justify-center mt-5 gap-5">
                      <Button variant="contained">Save</Button>
                      <Button variant="outlined" onClick={() => router.back()}>
                        Cancel
                      </Button>
                    </div>
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
    </>
  );
};

export default page;

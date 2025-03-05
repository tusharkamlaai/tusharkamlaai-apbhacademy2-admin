"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import VideoCourse from "@/app/components/ui/VideoCourse";

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
    Title: "Coding",
    Youtube_Id: "HTML",
    Desci: "12345",
    Order: "HTML_course",
    Status: "Active",
  },
  {
    ID: "2",
    Title: "Web Development",
    Youtube_Id: "CSS",
    Desci: "67890",
    Order: "CSS_course",
    Status: "Active",
  },
  {
    ID: "3",
    Title: "JavaScript Basics",
    Youtube_Id: "JS",
    Desci: "11223",
    Order: "JS_course",
    Status: "Inactive",
  },
  {
    ID: "4",
    Title: "Advanced JavaScript",
    Youtube_Id: "JS_Advanced",
    Desci: "44556",
    Order: "JS_Advanced_course",
    Status: "Active",
  },
  {
    ID: "5",
    Title: "React Fundamentals",
    Youtube_Id: "React",
    Desci: "77889",
    Order: "React_course",
    Status: "Active",
  },
  {
    ID: "6",
    Title: "Node.js Essentials",
    Youtube_Id: "Node",
    Desci: "99001",
    Order: "Node_course",
    Status: "Inactive",
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
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false); // Detect Mobile
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

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

  const isMobileTab = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const headings = ["Video Add", "Upload Video"];

  return (
    <>
      <div className="justify-between lg:flex">
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
              <MenuItem value={0}>Video Add</MenuItem>
              <MenuItem value={1}>Upload Video</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Video Add" {...a11yProps(0)} />
              <Tab label="Upload Video" {...a11yProps(1)} />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="mb-5">
            <VideoCourse />
          </div>

          {/* <h2 className="font-semibold lg:text-[25px] mb-5">Add FAQs</h2> */}
          <div className="items-center justify-center flex">
            <Card className="lg:w-[100%] ">
              <CardContent>
                <h2 className="font-semibold text-[20px] mb-3">
                  Course Videos
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
                    <div className=" font-semibold mt-5 text-xl">
                      Videos in {selectedLanguage}
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
                      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block bg-white">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              {[
                                "ID",
                                "Title",
                                "Youtube ID",
                                "Desc.",
                                "Order",
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
                                <td className="px-6 py-4">{row.Title}</td>
                                <td className="px-6 py-4">{row.Youtube_Id}</td>
                                <td className="px-6 py-4">{row.Desci}</td>
                                <td className="px-6 py-4">{row.Order}</td>
                                <td className="px-6 py-4">{row.Status}</td>
                                <td className="px-6 py-4">
                                  {/* <Link href={`/coursesList/manage/${row.ID}`}> */}
                                  <button className="text-blue-500 hover:text-blue-700">
                                    Edit
                                  </button>
                                  {/* </Link> */}
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
                              <strong>Title:</strong> {row.Title}
                            </p>
                            <p>
                              <strong>Youtube Id:</strong> {row.Youtube_Id}
                            </p>
                            <p>
                              <strong>Desc:</strong> {row.Desci}
                            </p>
                            <p>
                              <strong>Order:</strong> {row.Order}
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <div className="items-center justify-center flex">
          <Card className="lg:w-[70%]">
            <CardContent>
              <h2 className="font-semibold text-[20px] mb-3">
                Upload Videos
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
      </Box>
    </>
  );
};

export default Page;

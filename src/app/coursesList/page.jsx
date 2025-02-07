"use client";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CourseEdit from "./[id]/page";
import AddCourses from "./addCourse/page";
import { Select, useMediaQuery, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const rowsData = [
  {
    ID: "1",
    Category: "Coding",
    Course_Name: "HTML",
    Course_Code: "12345",
    Module: "HTML_course",
    Featured: "No",
    In_Portal: "Active",
    In_Training: "Active",
    Languages: "1",
  },
  {
    ID: "2",
    Category: "Coding",
    Course_Name: "HTML",
    Course_Code: "12345",
    Module: "HTML_course",
    Featured: "No",
    In_Portal: "Inactive",
    In_Training: "Inactive",
    Languages: "0",
  },
  {
    ID: "3",
    Category: "Course",
    Course_Name: "Javascript",
    Course_Code: "123",
    Module: "Module",
    Featured: "No",
    In_Portal: "Active",
    In_Training: "Active",
    Languages: "1",
  },
  {
    ID: "4",
    Category: "Machine Learning",
    Course_Name: "Python",
    Course_Code: "123",
    Module: "Learning_Module",
    Featured: "No",
    In_Portal: "Active",
    In_Training: "Active",
    Languages: "1",
  },
  {
    ID: "5",
    Category: "demo_Category",
    Course_Name: "demo1",
    Course_Code: "123",
    Module: "demo_module",
    Featured: "No",
    In_Portal: "Active",
    In_Training: "Active",
    Languages: "1",
  },
  {
    ID: "6",
    Category: "Category 2",
    Course_Name: "Course 2",
    Course_Code: "563",
    Module: "Module 2",
    Featured: "No",
    In_Portal: "Inactive",
    In_Training: "Inactive",
    Languages: "0",
  },
  {
    ID: "7",
    Category: "Category 4",
    Course_Name: "Course 4",
    Course_Code: "456",
    Module: "Module 4",
    Featured: "No",
    In_Portal: "Active",
    In_Training: "Active",
    Languages: "1",
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const headings = ["Manage Courses", "Add New Course", "Download Course"];

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
              <MenuItem value={0}>Courses List</MenuItem>
              <MenuItem value={1}>Add Course</MenuItem>
              <MenuItem value={2}>Download Course</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Courses List" />
              <Tab label="Add Course" />
              <Tab label="Download Course" />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
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

            {/* <div className="gap-3 flex mt-5 lg:mt-0">
              <Button
                onClick={() => router.push("coursesList/addCourse")}
                variant="contained"
                className="flex gap-5"
              >
                <span>Add Course</span>
                <span>
                  <AddIcon />
                </span>
              </Button>

              <Button variant="contained">
                <span>Download Course</span>
              </Button>
            </div> */}
          </div>

          {/* Conditionally Render Table (Large Screens) or Cards (Mobile View) */}
          {!isMobile ? (
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block hidden bg-white">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {[
                      "ID",
                      "Category",
                      "Course Name",
                      "Course Code",
                      "Module",
                      "Featured",
                      "In Portal",
                      "In Training",
                      "Languages",
                      "Manage",
                      "Actions",
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
                      <td className="px-6 py-4">{row.Category}</td>
                      <td className="px-6 py-4">{row.Course_Name}</td>
                      <td className="px-6 py-4">{row.Course_Code}</td>
                      <td className="px-6 py-4">{row.Module}</td>
                      <td className="px-6 py-4">{row.Featured}</td>
                      <td className="px-6 py-4">{row.In_Portal}</td>
                      <td className="px-6 py-4">{row.In_Training}</td>
                      <td className="px-6 py-4">{row.Languages}</td>
                      <td className="px-6 py-4">
                        <Link href={`/coursesList/manage/${row.ID}`}>
                          <button className="text-blue-500 hover:text-blue-700">
                            Manage
                          </button>
                        </Link>
                      </td>

                      <td className="px-6 py-4">
                        <Link href={`/coursesList/${row.ID}`}>
                          <button className="text-blue-500 hover:text-blue-700">
                            Edit
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
                    <strong>Category:</strong> {row.Category}
                  </p>
                  <p>
                    <strong>Course Name:</strong> {row.Course_Name}
                  </p>
                  <p>
                    <strong>Course Code:</strong> {row.Course_Code}
                  </p>
                  <p>
                    <strong>Module:</strong> {row.Module}
                  </p>
                  <p>
                    <strong>Featured:</strong> {row.Featured}
                  </p>
                  <p>
                    <strong>In Portal:</strong> {row.In_Portal}
                  </p>
                  <p>
                    <strong>In Training:</strong> {row.In_Training}
                  </p>
                  <p>
                    <strong>Languages:</strong> {row.Languages}
                  </p>
                  <div className="flex justify-between mt-3">
                    <Link href={`/coursesList/manage/${row.ID}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        Manage
                      </button>
                    </Link>
                    <Link href={`/coursesList/${row.ID}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        Edit
                      </button>
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AddCourses />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </>
  );
}

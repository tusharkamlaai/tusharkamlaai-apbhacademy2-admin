"use client";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Select, useMediaQuery, MenuItem, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddNewCity from "./AddNewCity/page";
import UploadCities from "./UploadCities/page";

const rowsData = [
  {
    City_ID: 101,
    City_Name: "Springfield",
    State: "Illinois",
    District: "Sangamon",
    Region: "Central",
    Division: "Midwest",
  },
  {
    City_ID: 102,
    City_Name: "Riverside",
    State: "California",
    District: "Riverside County",
    Region: "Southern",
    Division: "Pacific",
  },
  {
    City_ID: 103,
    City_Name: "Maplewood",
    State: "Minnesota",
    District: "Ramsey",
    Region: "Twin Cities",
    Division: "Midwest",
  },
  {
    City_ID: 104,
    City_Name: "Fairview",
    State: "Oregon",
    District: "Multnomah",
    Region: "Northwest",
    Division: "Pacific",
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
  const headings = [
    "Manage Cities",
    "Manage Cities",
    " Download Cities",
    "Upload Cities",
  ];

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
              <MenuItem value={0}> Cities List</MenuItem>
              <MenuItem value={1}> Add New City</MenuItem>
              <MenuItem value={2}>Download Cities</MenuItem>
              <MenuItem value={3}>Upload Cities</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Cities List" />
              <Tab label="Add New City" />
              <Tab label="Download Cities" />
              <Tab label="Upload Cities" />
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
          </div>

          {!isMobile ? (
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block bg-white">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {[
                      "City ID",
                      "City Name",
                      "State",
                      "District",
                      "Region",
                      "Division",
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
                      <td className="px-6 py-4">{row.City_ID}</td>
                      <td className="px-6 py-4">{row.City_Name}</td>
                      <td className="px-6 py-4">{row.State}</td>
                      <td className="px-6 py-4">{row.District}</td>
                      <td className="px-6 py-4">{row.Region}</td>
                      <td className="px-6 py-4">{row.Division}</td>

                      <td className="px-6 py-4">
                        <Link href={`/coursesList/manage/${row.ID}`}>
                          <button className="text-blue-500 hover:text-blue-700">
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/coursesList/${row.ID}`}>
                          <button className="text-blue-500 hover:text-blue-700">
                            Delete
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
                    <strong>City ID:</strong> {row.City_ID}
                  </p>
                  <p>
                    <strong> City Name:</strong> {row.City_Name}
                  </p>
                  <p>
                    <strong> State:</strong> {row.State}
                  </p>
                  <p>
                    <strong>District:</strong> {row.District}
                  </p>
                  <p>
                    <strong>Region:</strong> {row.Region}
                  </p>
                  <p>
                    <strong>Division:</strong> {row.Division}
                  </p>

                  <div className="flex justify-between mt-3">
                    <Link href={`/coursesList/manage/${row.ID}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        Edit
                      </button>
                    </Link>
                    <Link href={`/coursesList/${row.ID}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        Delete
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
          <AddNewCity />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div>
            <a href="/example.pdf" download>
              <Button variant="contained">Download PDF</Button>
            </a>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <UploadCities />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}></CustomTabPanel>
      </Box>
    </>
  );
}

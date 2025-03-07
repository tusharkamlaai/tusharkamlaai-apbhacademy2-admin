"use client";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Select, useMediaQuery, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddNewAdminUser from "./AddNewAdminUser/page";

const rowsData = [
  {
    ID: 1,
    Role: "Project Manager",
    Name: "Alice Johnson",
    Email_Id: "alice.johnson@example.com",
    Mobile: "123-456-7890",
    Division: "Marketing",
    Status: "Active",
  },
  {
    ID: 2,
    Role: "Software Developer",
    Name: "Bob Smith",
    Email_Id: "bob.smith@example.com",
    Mobile: "123-456-7891",
    Division: "Technology",
    Status: "Active",
  },
  {
    ID: 3,
    Role: "Quality Assurance",
    Name: "Carol Taylor",
    Email_Id: "carol.taylor@example.com",
    Mobile: "123-456-7892",
    Division: "Quality Control",
    Status: "Inactive",
  },
  {
    ID: 4,
    Role: "Human Resources",
    Name: "Dave Wilson",
    Email_Id: "dave.wilson@example.com",
    Mobile: "123-456-7893",
    Division: "HR",
    Status: "Active",
  },
  {
    ID: 5,
    Role: "Accountant",
    Name: "Eva Green",
    Email_Id: "eva.green@example.com",
    Mobile: "123-456-7894",
    Division: "Finance",
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
  const headings = ["Manage Admin Users", "Manage Admin Users"];

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
              <MenuItem value={0}>Admin User List</MenuItem>
              <MenuItem value={1}>Add New Admin User</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Admin User List" />
              <Tab label="Add New Admin User" />
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
                      "ID",
                      "Role",
                      " Name",
                      "Email Id",
                      "Mobile",
                      "Division",
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
                      <td className="px-6 py-4">{row.Role}</td>
                      <td className="px-6 py-4">{row.Name}</td>
                      <td className="px-6 py-4">{row.Email_Id}</td>
                      <td className="px-6 py-4">{row.Mobile}</td>
                      <td className="px-6 py-4">{row.Division}</td>
                      <td className="px-6 py-4">{row.Status}</td>
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
                    <strong>ID:</strong> {row.ID}
                  </p>
                  <p>
                    <strong>Role:</strong> {row.Role}
                  </p>
                  <p>
                    <strong> Name:</strong> {row.Name}
                  </p>
                  <p>
                    <strong>Email Id:</strong> {row.Email_Id}
                  </p>
                  <p>
                    <strong>Mobile:</strong> {row.Mobile}
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
          <AddNewAdminUser />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}></CustomTabPanel>
      </Box>
    </>
  );
}

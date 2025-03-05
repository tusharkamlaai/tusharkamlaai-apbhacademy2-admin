"use client";

import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { Select, useMediaQuery, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Link from "next/link";
import AddNewTrainer from "../AddNewTrainer/page";

const rowsData = [
  {
    TrainerID: "T001",
    Name: "Alex Johnson",
    EmailID: "alex.johnson@email.com",
    Mobile: "123-456-7890",
    Division: "North",
    Region: "Northeast",
    Status: "Active",
  },
  {
    TrainerID: "T002",
    Name: "Casey Lee",
    EmailID: "casey.lee@email.com",
    Mobile: "098-765-4321",
    Division: "East",
    Region: "Southeast",
    Status: "Inactive",
  },
  {
    TrainerID: "T003",
    Name: "Jordan Smith",
    EmailID: "jordan.smith@email.com",
    Mobile: "234-567-8901",
    Division: "South",
    Region: "Southwest",
    Status: "Active",
  },
  {
    TrainerID: "T004",
    Name: "Taylor Brown",
    EmailID: "taylor.brown@email.com",
    Mobile: "345-678-9012",
    Division: "West",
    Region: "Northwest",
    Status: "Active",
  },
  {
    TrainerID: "T005",
    Name: "Morgan Davis",
    EmailID: "morgan.davis@email.com",
    Mobile: "456-789-0123",
    Division: "Central",
    Region: "Midwest",
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

console.log(rowsData, "PPP");

const Page = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false); // Detect Mobile View
  const [hasMounted, setHasMounted] = useState(false);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const isMobileTab = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const headings = ["Manage Trainers", "Add New Trainers"];

  const router = useRouter();
  const rowsPerPage = 5;

  useEffect(() => {
    setHasMounted(true);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
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

  if (!hasMounted) {
    return null;
  }

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
              <MenuItem value={0}> Trainers List</MenuItem>
              <MenuItem value={1}> Add New Trainer</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Trainers List" />
              <Tab label="Add New Trainer" />
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
                className="w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <strong>Total Courses:</strong> {sortedData.length}
          </div>
          {!isMobile ? (
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 bg-white">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {[
                      "Trainer ID",
                      "Name",
                      "Email ID",
                      "Mobile",
                      "Division",
                      "Region",
                      "Status",
                      "Edit",
                      "Delete",
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
                      <td className="px-6 py-4">{row.TrainerID}</td>
                      <td className="px-6 py-4">{row.Name}</td>
                      <td className="px-6 py-4">{row.EmailID}</td>
                      <td className="px-6 py-4">{row.Mobile}</td>
                      <td className="px-6 py-4">{row.Division}</td>
                      <td className="px-6 py-4">{row.Region}</td>
                      <td className="px-6 py-4">{row.Status}</td>

                      <td className="px-6 py-4">
                        <Link href={`/faqs/EditFaq/${row.id}`}>
                          <button className="text-blue-500 hover:text-blue-700">
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/faqs/EditFaq/${row.id}`}>
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
                    <strong>Trainer ID</strong> {row.TrainerID}
                  </p>
                  <p>
                    <strong>Name:</strong> {row.Name}
                  </p>
                  <p>
                    <strong>Email ID:</strong> {row.EmailID}
                  </p>
                  <p>
                    <strong>Mobile:</strong> {row.Mobile}
                  </p>{" "}
                  <p>
                    <strong>Division :</strong> {row.Division}
                  </p>{" "}
                  <p>
                    <strong>Region:</strong> {row.Region}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`px-2 py-1 rounded ${
                        row.Status === "Active"
                          ? "bg-green-200 text-green-800"
                          : row.Status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {row.Status}
                    </span>
                  </p>
                  <div className="flex justify-between mt-3">
                    <Link href={``}>
                      <button className="text-blue-500 hover:text-blue-700">
                        Edit
                      </button>
                    </Link>

                    <Link href={``}>
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
          <AddNewTrainer />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Page;

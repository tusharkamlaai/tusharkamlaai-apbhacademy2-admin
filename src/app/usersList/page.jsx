"use client";

import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { Select, useMediaQuery, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import AddUser from "./addUsers/page";
import Link from "next/link";
import BulkUpdateBPNumbers from "./BulkUpdateBPNumbers/page";
import BulkUpdateUsers from "./BulkUpdateUsers/page";
import FilterListIcon from "@mui/icons-material/FilterList";

const rowsData = [
  {
    id: 1,
    name: "Tushar",
    mobile: "7888010088",
    bpNumber: "12345",
    state: "Maharashtra",
    city: "Mumbai",
    district: "Mumbai",
    status: "Active",
  },
  {
    id: 2,
    name: "user",
    mobile: "7770080488",
    bpNumber: "12345",
    state: "Maharashtra",
    city: "Mumbai",
    district: "Mumbai",
    status: "Active",
  },
  {
    id: 2,
    name: "user",
    mobile: "7770080488",
    bpNumber: "12345",
    state: "Goa",
    city: "Hydrabad",
    district: "Mumbai",
    status: "Active",
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
  const [value, setValue] = React.useState(0);
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const theme = useTheme();

  const isMobileTab = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const headings = [
    "Manage User",
    "Add New User",
    "Download",
    "User Upload BP Numbers",
    "Bulk Update Users",
  ];

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
    return sortableItems;
  }, [sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((item) => {
      return (
        (!searchTerm ||
          Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
          )) &&
        (!statusFilter || item.status === statusFilter) &&
        (!districtFilter || item.district === districtFilter) &&
        (!cityFilter || item.city === cityFilter) &&
        (!stateFilter || item.state === stateFilter)
      );
    });
  }, [
    searchTerm,
    statusFilter,
    districtFilter,
    cityFilter,
    stateFilter,
    sortedData,
  ]);

  const displayedRows = useMemo(() => {
    const start = currentPage * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage]);

  // const displayedRows = useMemo(() => {
  //   const start = currentPage * rowsPerPage;
  //   return filteredData.slice(start, start + rowsPerPage);
  // }, [statusFilter, districtFilter, cityFilter, stateFilter]);

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
              <MenuItem value={0}>Manage User</MenuItem>
              <MenuItem value={1}>Add New User</MenuItem>
              <MenuItem value={2}>Download users</MenuItem>
              <MenuItem value={3}>Bulk Update BP number</MenuItem>
              <MenuItem value={4}>Bulk Update User</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Manage User" />
              <Tab label="Add New User" />
              <Tab label="Download users" />
              <Tab label="Bulk Update BP number" />
              <Tab label="Bulk Update User" />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
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
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              displayEmpty
              fullWidth
              className="lg:mt-0 mt-5"
            >
              <MenuItem value="">All States</MenuItem>
              {[...new Set(rowsData.map((row) => row.state))].map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>

            <Select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              displayEmpty
              fullWidth
              className="lg:mt-0 mt-5"
            >
              <MenuItem value="">All City</MenuItem>
              {[...new Set(rowsData.map((row) => row.city))].map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>

            <Select
              value={districtFilter}
              onChange={(e) => setDistrictFilter(e.target.value)}
              displayEmpty
              fullWidth
              className="lg:mt-0 mt-5"
            >
              <MenuItem value="">All District</MenuItem>
              {[...new Set(rowsData.map((row) => row.district))].map(
                (district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                )
              )}
            </Select>

            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              displayEmpty
              fullWidth
              className="lg:mt-0 mt-5"
            >
              <MenuItem value=""> Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </div>
          <div className="mb-4">
            <strong>Total Courses:</strong> {sortedData.length}
          </div>
          {/* Conditionally Render Table (Large Screens) or Cards (Mobile View) */}
          {!isMobile ? (
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block  bg-white">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {[
                      "ID",
                      "Name",
                      "Mobile",
                      "BP Number",
                      "State",
                      "City",
                      "District",
                      "Status",
                      "Details",
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
                      <td className="px-6 py-4">{row.id}</td>
                      <td className="px-6 py-4">{row.name}</td>
                      <td className="px-6 py-4">{row.mobile}</td>
                      <td className="px-6 py-4">{row.bpNumber}</td>
                      <td className="px-6 py-4">{row.state}</td>
                      <td className="px-6 py-4">{row.city}</td>
                      <td className="px-6 py-4">{row.district}</td>
                      <td
                        className={`px-6 py-4 ${
                          row.status == "Active" ? "text-green-600" : ""
                        } ${row.status == "Inactive" ? "text-red-600" : ""} ${
                          row.status == "Pending" ? "text-yellow-600" : ""
                        }`}
                      >
                        <button> {row.status}</button>
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/usersList/ViewUser/${row.id}`}>
                          <button className="text-blue-500 hover:text-blue-700">
                            Details
                          </button>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-blue-500">
                        {" "}
                        <button>Edit</button>{" "}
                      </td>
                      <td className="px-6 py-4 text-red-500">
                        {" "}
                        <button>Delete</button>{" "}
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
                    <strong>ID:</strong> {row.id}
                  </p>
                  <p>
                    <strong>Name:</strong> {row.name}
                  </p>
                  <p>
                    <strong>Mobile Number:</strong> {row.mobile}
                  </p>
                  <p>
                    <strong>BP Number:</strong> {row.bpNumber}
                  </p>
                  <p>
                    <strong>State:</strong> {row.state}
                  </p>
                  <p>
                    <strong>City:</strong> {row.city}
                  </p>
                  <p>
                    <strong>District:</strong> {row.district}
                  </p>
                  <p>
                    <strong>Status:</strong> {row.status}
                  </p>
                  <div className="flex justify-between mt-3">
                    <Link href={`/usersList/ViewUser/${row.id}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        Details
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
          <AddUser />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div>
            <a href="/example.pdf" download>
              <Button variant="contained">Download PDF</Button>
            </a>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <BulkUpdateBPNumbers />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <BulkUpdateUsers />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Page;

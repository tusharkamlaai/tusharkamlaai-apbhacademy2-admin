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
import AddFaqs from "./addFaqs/page";
import Link from "next/link";

const rowsData = [
  { id: "1", title: "FAQ", orderDis: "1", Status: "Active", translate: "1" },
  { id: "2", title: "FAQ2", orderDis: "1", Status: "Active", translate: "1" },
  { id: "3", title: "FAQ3", orderDis: "2", Status: "Active", translate: "1" },
  { id: "4", title: "FAQ4", orderDis: "2", Status: "Active", translate: "1" },
  { id: "5", title: "FAQ5", orderDis: "3", Status: "Active", translate: "1" },
  { id: "6", title: "FAQ6", orderDis: "3", Status: "Active", translate: "1" },
  { id: "7", title: "FAQ7", orderDis: "4", Status: "Active", translate: "1" },
  { id: "8", title: "FAQ8", orderDis: "4", Status: "Active", translate: "1" },
  { id: "9", title: "FAQ9", orderDis: "5", Status: "Active", translate: "1" },
  { id: "10", title: "FAQ10", orderDis: "5", Status: "Active", translate: "1" },
  { id: "11", title: "FAQ11", orderDis: "6", Status: "Active", translate: "1" },
  { id: "12", title: "FAQ12", orderDis: "6", Status: "Active", translate: "1" },
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
  const theme = useTheme();

  const isMobileTab = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const headings = ["Manage FAQs", "Add FAQs"];

  const router = useRouter();
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
              <MenuItem value={0}>List</MenuItem>
              <MenuItem value={1}>Add Course</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="List" />
              <Tab label="Add Faq" />
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
            fullWidth
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
                  "FAQ",
                  "Display Order",
                  "Status",
                  "Translate Lang.",
                  "Actions",
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
                  <td className="px-6 py-4">{row.id}</td>
                  <td className="px-6 py-4">{row.title}</td>
                  <td className="px-6 py-4">{row.orderDis}</td>
                  <td className="px-6 py-4">{row.Status}</td>
                  <td className="px-6 py-4">{row.translate}</td>
                  <td className="px-6 py-4">
                    <Link href={`/faqs/EditFaq/${row.id}`} >
                    <button className="text-blue-500 hover:text-blue-700">
                      Edit
                    </button></Link>
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
            <div key={index} className="bg-white p-4 shadow rounded-lg border">
              <p>
                <strong>FAQ</strong> {row.title}
              </p>
              <p>
                <strong>ID:</strong> {row.id}
              </p>
              <p>
                <strong>Display Order:</strong> {row.orderDis}
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
              <p>
                <strong>Translate Lang.:</strong> {row.translate}
              </p>
              <div className="flex justify-between mt-3">
              <Link href={`/faqs/EditFaq/${row.id}`} >
                    <button className="text-blue-500 hover:text-blue-700">
                      Edit
                    </button></Link>
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
          <AddFaqs/>
        </CustomTabPanel>
      </Box>

     
    </>
  );
};

export default Page;

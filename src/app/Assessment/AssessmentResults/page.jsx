"use client";

import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Select, useMediaQuery, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import SendAssessmentLink from "@/app/meet/SendAssessmentLink/page";

const rowsData = [{}];

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

  if (!hasMounted) {
    return null;
  }

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">
          Assessment Results
        </h2>
      </div>

      <CustomTabPanel value={value} index={0}>
        <div className="lg:flex justAdd Categorify-end justify-end">
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
                    "ID",
                    "User ",
                    "Course",
                    "Language",
                    "Mode of Training",
                    "Trainer",
                    "Result",
                    "Date",
                  ].map((header, index) => (
                    <th key={index} className="px-6 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedRows.length == 0 ? (
                  displayedRows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{row.ID}</td>
                      <td className="px-6 py-4">{row.Course}</td>
                      <td className="px-6 py-4">{row.Language}</td>
                      <td className="px-6 py-4">{row.Trainer}</td>
                      <td className="px-6 py-4">{row.TrainingDate}</td>
                      <td className="px-6 py-4">{row.Mobile}</td>
                      <td className="px-6 py-4">{row.LinkID}</td>
                      <td className="px-6 py-4">{row.LinkStatus}</td>
                    </tr>
                  ))
                ) : (
                  <p className="text-center">No Data</p>
                )}
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
                <h3 className="font-semibold text-lg">{row.title}</h3>
                <p>
                  <strong>ID:</strong> {row.ID}
                </p>
                <p>
                  <strong>User:</strong> {row.Trainer}
                </p>
                <p>
                  <strong>Course:</strong> {row.Course}
                </p>
                <p>
                  <strong>Language:</strong> {row.Language}
                </p>
                <p>
                  <strong>Mode of Training:</strong> {row.MeetingDate}
                </p>
                <p>
                  <strong>Trainer:</strong> {row.Duration}
                </p>
                <p>
                  <strong>Result:</strong> {row.MeetingPassword}
                </p>
                <p>
                  <strong>Date:</strong> {row.MeetingPassword}
                </p>
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
    </>
  );
};

export default Page;

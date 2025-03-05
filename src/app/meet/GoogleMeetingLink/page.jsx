"use client";

import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import {
  Select,
  useMediaQuery,
  MenuItem,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const rowsData = [
  {
    ID: "001",
    Trainer: "John Doe",
    Course: "Advanced Python",
    Language: "English",
    MeetingDate: "2025-03-15",
    Duration: "2 hours",
    MeetingPassword: "py2025",
    GoogleMeetingLink: "https://meet.google.com/example",
    GoogleMeetingHost: "John Doe",
    SendLink: true,
    Details:
      "Advanced Python course covering APIs, Web Scraping, and Automation.",
  },
  {
    ID: "002",
    Trainer: "Jane Smith",
    Course: "Web Development",
    Language: "Spanish",
    MeetingDate: "2025-03-16",
    Duration: "3 hours",
    MeetingPassword: "webdev25",
    GoogleMeetingLink: "https://meet.google.com/example",
    GoogleMeetingHost: "Jane Smith",
    SendLink: true,
    Details:
      "Full stack web development, including HTML, CSS, JavaScript, and backend technologies.",
  },
  {
    ID: "003",
    Trainer: "Alice Johnson",
    Course: "Machine Learning",
    Language: "French",
    MeetingDate: "2025-03-17",
    Duration: "4 hours",
    MeetingPassword: "ML2025",
    GoogleMeetingLink: "https://meet.google.com/example",
    GoogleMeetingHost: "Alice Johnson",
    SendLink: true,
    Details:
      "Introduction to machine learning, data preprocessing, and building predictive models.",
  },
  {
    ID: "004",
    Trainer: "Bob Lee",
    Course: "Digital Marketing",
    Language: "German",
    MeetingDate: "2025-03-18",
    Duration: "1.5 hours",
    MeetingPassword: "DigiMark25",
    GoogleMeetingLink: "https://meet.google.com/example",
    GoogleMeetingHost: "Bob Lee",
    SendLink: true,
    Details: "Covers SEO, SEM, content marketing, and social media strategies.",
  },
  {
    ID: "005",
    Trainer: "Carol White",
    Course: "Data Science",
    Language: "Italian",
    MeetingDate: "2025-03-19",
    Duration: "3 hours",
    MeetingPassword: "DS2025",
    GoogleMeetingLink: "https://meet.google.com/example",
    GoogleMeetingHost: "Carol White",
    SendLink: false,
    Details:
      "Data analysis, visualization, and introductory predictive analytics.",
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
  const headings = [
    "Manage Google Meeting Links",
    "Create & Send Google Meeting Link",
  ];

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
              <MenuItem value={0}> Google Meeting List List</MenuItem>
              <MenuItem value={1}> Create New Google Meeting</MenuItem>
            </Select>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Google Meeting List List" />
              <Tab label=" Create New Google Meeting" />
            </Tabs>
          )}
        </Box>
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
                      "Trainer ",
                      "Course",
                      "Language",
                      "Meeting Date",
                      "Duration",
                      "Meeting Password",
                      "Google Meeting Link",
                      "Google Meeting Host",
                      "Send Link",
                      "Details",
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
                      <td className="px-6 py-4">{row.Trainer}</td>
                      <td className="px-6 py-4">{row.Course}</td>
                      <td className="px-6 py-4">{row.Language}</td>
                      <td className="px-6 py-4">{row.MeetingDate}</td>
                      <td className="px-6 py-4">{row.Duration}</td>
                      <td className="px-6 py-4">{row.MeetingPassword}</td>
                      <td className="px-6 py-4">
                        <button>
                          {" "}
                          <a href={row.SendLink} className="text-blue-500">
                            Link
                          </a>
                        </button>
                      </td>
                      <td className="px-6 py-4">{row.GoogleMeetingHost}</td>
                      <td className="px-6 py-4">
                        {row.SendLink == true ? "Yes" : "No"}
                      </td>
                      <td className="px-6 py-4">
                        <button>
                          {" "}
                          <a href={row.Details} className="text-blue-500">
                            Details
                          </a>
                        </button>
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
                  <h3 className="font-semibold text-lg">{row.title}</h3>
                  <p>
                    <strong>ID:</strong> {row.ID}
                  </p>
                  <p>
                    <strong>Trainer:</strong> {row.Trainer}
                  </p>
                  <p>
                    <strong>Course:</strong> {row.Course}
                  </p>
                  <p>
                    <strong>Language:</strong> {row.Language}
                  </p>
                  <p>
                    <strong>Meeting Date:</strong> {row.MeetingDate}
                  </p>
                  <p>
                    <strong>Duration:</strong> {row.Duration}
                  </p>
                  <p>
                    <strong>Meeting Password:</strong> {row.MeetingPassword}
                  </p>
                  <p>
                    <strong>Google Meeting Link:</strong>{" "}
                    <a
                      href={row.SendLink}
                      className="text-blue-500 cursor-pointer"
                    >
                      Link
                    </a>
                  </p>
                  <p>
                    <strong>Google Meeting Host:</strong>{" "}
                    {row.GoogleMeetingHost}
                  </p>
                  <p>
                    <strong>Send Link:</strong>{" "}
                    {row.SendLink == true ? "Yes" : "No"}
                  </p>
                  <p>
                    <button>
                      <strong>Details:</strong>{" "}
                      <a href={row.Details} className="text-blue-500">
                        Details
                      </a>
                    </button>
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
          <div className="items-center justify-center flex">
            <Card className="lg:w-[70%]">
              <CardContent>
                <h2 className="font-semibold text-[20px] mb-3">
                  Authorize Meet
                </h2>

                <hr />
                <Container component="main" className="mt-8">
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <p>Trainer is not Mapped with Google Account User!</p>
                  </Box>
                </Container>
              </CardContent>
            </Card>
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Page;

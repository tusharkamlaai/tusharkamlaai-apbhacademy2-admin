"use client";

import { useState, useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField, Container } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";
import Link from "next/link";
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

const page = () => {
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false); // Detect Mobile
  const rowsPerPage = 5;

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

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

  return (
    <>
      {/* <h2 className="font-semibold lg:text-[25px] mb-5">Add FAQs</h2> */}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[100%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">Course Videos</h2>
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
                  <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 sm:block hidden bg-white">
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
              </Container>
            </div>
          </CardContent>
        </Card>
      </div>
      <VideoCourse />
    </>
  );
};

export default page;

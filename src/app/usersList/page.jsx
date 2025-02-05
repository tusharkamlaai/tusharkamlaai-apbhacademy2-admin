"use client";

import React, { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

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
];

console.log(rowsData, "PPP");

const Page = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false); // Detect Mobile View

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

  return (
    <>
      <div className="justify-between lg:flex mb-5">
        <h2 className="font-semibold lg:text-[25px] mb-5">Manage Users</h2>
      </div>

      <div className="lg:flex justify-between">
      <div className="mb-5 lg:mb-0">
        <TextField
          id="Search"
          label="Search..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-3 mt-5 lg:mt-0">
        <Button
          onClick={() => router.push("/usersList/addUsers")}
          variant="contained"
          className="flex gap-2 justify-center items-center w-full lg:w-auto"
        >
          <span>Add User</span>
          <AddIcon />
        </Button>

        <Button variant="contained" className="w-full lg:w-auto">
          <span>Download Users</span>
        </Button>
        <Button variant="contained" className="w-full lg:w-auto">
          <span>Bulk Update BP Numbers</span>
        </Button>
        <Button variant="contained" className="w-full lg:w-auto">
          <span>Bulk Update Users</span>
        </Button>
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
                  "Name",
                  "Mobile",
                  "BP Number",
                  "State",
                  "City",
                  "District",
                  "Status",
                  "Details",
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
                  <td className="px-6 py-4">{row.status}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-500 hover:text-blue-700">
                      Details
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
                <button className="text-blue-500 hover:text-blue-700">
                  Details
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
                currentPage >= Math.ceil(sortedData.length / rowsPerPage) - 1
              }
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;

'use client'


import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

const rowsData = [
    { id: "1", title: "Web Dev", quantity: "1", required: "No", status: "Active", description: "Courses(1)" },
    { id: "2", title: "Graphic Design", quantity: "1", required: "Yes", status: "Active", description: "Courses(2)" },
    { id: "3", title: "Data Science", quantity: "2", required: "No", status: "Pending", description: "Courses(3)" },
    { id: "4", title: "Cybersecurity", quantity: "3", required: "Yes", status: "Inactive", description: "Courses(4)" },
    { id: "5", title: "Digital Marketing", quantity: "2", required: "No", status: "Active", description: "Courses(5)" },
    { id: "6", title: "Software Testing", quantity: "1", required: "Yes", status: "Pending", description: "Courses(6)" },
    { id: "7", title: "AI and ML", quantity: "3", required: "No", status: "Active", description: "Courses(7)" },
    { id: "8", title: "Cloud Computing", quantity: "1", required: "Yes", status: "Inactive", description: "Courses(8)" },
    { id: "9", title: "Blockchain", quantity: "2", required: "No", status: "Active", description: "Courses(9)" }
];

const page = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const router = useRouter();

    const rowsPerPage = 5;

    const sortedData = useMemo(() => {
        let sortableItems = [...rowsData]; // Update the reference here to new data structure
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            });
        }
        if (searchTerm) {
            sortableItems = sortableItems.filter(item =>
                Object.values(item).some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        return sortableItems;
    }, [rowsData, sortConfig, searchTerm]);

    const displayedRows = useMemo(() => {
        const start = currentPage * rowsPerPage;
        const end = start + rowsPerPage;
        return sortedData.slice(start, end);
    }, [sortedData, currentPage]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleEdit = (id) => {
        console.log("Edit clicked for ID:", id);
    };

    return (
        <>
            <div className='justify-between flex mb-5'>
                <div><h2 className='font-semibold lg:text-[25px] mb-5'>Manage Categories</h2></div>
                <div className='flex gap-5 '>
                    <Button onClick={() => router.push('/addCourse')} variant="contained" startIcon={<AddIcon />}>
                        Add New Category
                    </Button>
                    <TextField
                        id="Search"
                        label="Search..."
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="hidden md:block">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {["ID", "Category Name", "Display Order", "Featured", "Status", "Category Courses", "Actions"].map((header, index) => (
                                    <th key={index} className="px-6 py-3">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {displayedRows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{row.id}</td>
                                    <td className="px-6 py-4">{row.title}</td>
                                    <td className="px-6 py-4">{row.quantity}</td>
                                    <td className="px-6 py-4">{row.required}</td>
                                    <td className="px-6 py-4">{row.status}</td>
                                    <td className="px-6 py-4">{row.description}</td>
                                    <td className="px-6 py-4 flex justify-around">
                                        <button  className="text-blue-500 hover:text-blue-700">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="md:hidden">
                    {displayedRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="bg-white p-4 rounded-lg shadow mb-4">
                            {["ID", "Category Name", "Display Order", "Featured", "Status", "Category Courses", "Actions"].map((header, index) => (
                                <div key={index} className="pb-2">
                                    <strong>{header}:</strong> {row[header.toLowerCase().replace(/ /g, '')]}
                                </div>
                            ))}
                            <div className="pt-4 flex justify-between">
                                <button onClick={() => handleEdit(row.id)} className="text-blue-500 hover:text-blue-700">Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between p-4">
                    <button
                        onClick={() => setCurrentPage(current => current - 1)}
                        disabled={currentPage === 0}
                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(current => current + 1)}
                        disabled={currentPage >= Math.ceil(sortedData.length / rowsPerPage) - 1}
                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default page;

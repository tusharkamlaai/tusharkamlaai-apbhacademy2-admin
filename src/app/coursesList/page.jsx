'use client'


import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation'


const data = {
    headers: ["ID", "Category", "Course Name", "Course Code", "Module", "Featured", "In Portal", "In Training", "Languages", "Actions"],
    rows: [
        ["1", "Coding", "HTML", "12345", "HTML_course", "No", "Active", "Active", "1"],
        ["2", "Coding", "HTML", "12345", "HTML_course", "No", "Inactive", "Inactive", "0"],
        ["3", "Course", "Javascript", "123", "Module", "No", "Active", "Active", "1"],
        ["4", "Machine Learning", "Python", "123", "Learning_Module", "No", "Active", "Active", "1"],
        ["5", "demo_Category", "demo1", "123", "demo_module", "No", "Active", "Active", "1"],
        ["6", "Category 2", "Course 2", "563", "Module 2", "No", "Inactive", "Inactive", "0"],
        ["7", "Category 4", "Course 4", "456", "Module 4", "No", "Active", "Active", "1"]
    ]
};



const page = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const router = useRouter()

    const rowsPerPage = 5;

    const sortedData = useMemo(() => {
        let sortableItems = [...data.rows];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            });
        }
        if (searchTerm) {
            sortableItems = sortableItems.filter(row =>
                row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        return sortableItems;
    }, [data.rows, sortConfig, searchTerm]);

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
    return (
        <>
            <div className='justify-between flex mb-5'>
                <div><h2 className='font-semibold text-[25px] mb-5'>Courses List</h2></div>
                <div className='flex gap-5 '>
                    <div>
                        <Button onClick={() => router.push('/addCourse')} variant="contained" className='flex gap-5'>
                            <span>Add Course</span>
                            <span><AddIcon /></span>
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" className='flex gap-5'>
                            <span>Download Course</span>
                        </Button>
                    </div>
                </div>

                <div> <TextField
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
                                {data.headers.map((header, index) => (
                                    <th key={index} className="px-6 py-3">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {displayedRows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="px-6 py-4">
                                            {cell}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 flex justify-around">
                                        <button onClick={() => handleEdit(row[0])} className="text-blue-500 hover:text-blue-700 mr-4">Edit</button>
                                        <button onClick={() => handleManage(row[0])} className="text-green-500 hover:text-green-700">Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="md:hidden">
                    {displayedRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="bg-white p-4 rounded-lg shadow mb-4">
                            {data.headers.map((header, index) => (
                                <div key={index} className="pb-2">
                                    <strong>{header}:</strong> {row[index]}
                                </div>
                            ))}
                            <div className="pt-4 flex justify-between">
                                <button  className="text-blue-500 hover:text-blue-700">Edit</button>
                                <button  className="text-green-500 hover:text-green-700">Manage</button>
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
                        disabled={currentPage >= Math.ceil(data.rows.length / rowsPerPage) - 1}
                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default page
'use client';

import React, { useState, useMemo, useEffect } from 'react';
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

console.log(rowsData,"PPP")

const Page = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobile, setIsMobile] = useState(false); // Detect Mobile View

    const router = useRouter();
    const rowsPerPage = 5;

    useEffect(() => {
        // Check screen size to switch between table & card view
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1000); // Change view if width is below 768px
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const sortedData = useMemo(() => {
        let sortableItems = [...rowsData];
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
    }, [sortConfig, searchTerm]);

    const displayedRows = useMemo(() => {
        const start = currentPage * rowsPerPage;
        const end = start + rowsPerPage;
        return sortedData.slice(start, end);
    }, [sortedData, currentPage]);

    return (
        <>
            <div className='justify-between lg:flex mb-5'>
                <h2 className='font-semibold lg:text-[25px] mb-5'>Manage Categories</h2>
            </div>

            <div className='lg:flex justify-between'>
                <div className='mb-5 lg:mb-0'>
                    <TextField
                        id="Search"
                        label="Search..."
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <Button className='mb-5' onClick={() => router.push('/addCourse')} variant="contained" startIcon={<AddIcon />}>
                    Add New Category
                </Button>
            </div>

            {/* Conditionally Render Table (Large Screens) or Cards (Mobile View) */}
            {!isMobile ? (
                <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {["ID", "Category Name", "Display Order", "Featured", "Status", "Category Courses", "Actions"].map((header, index) => (
                                    <th key={index} className="px-6 py-3">{header}</th>
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
                                    <td className="px-6 py-4">
                                        <button className="text-blue-500 hover:text-blue-700">{row.description}</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-blue-500 hover:text-blue-700">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
            ) : (
                <div className="grid gap-4 mt-5">
                    {displayedRows.map((row, index) => (
                        
                        <div key={index} className="bg-white p-4 shadow rounded-lg border">
                            <h3 className="font-semibold text-lg">{row.title}</h3>
                            <p><strong>ID:</strong> {row.id}</p>
                            <p><strong>Display Order:</strong> {row.quantity}</p>
                            <p><strong>Featured:</strong> {row.required}</p>
                            <p><strong>Status:</strong> <span className={`px-2 py-1 rounded ${row.status === "Active" ? "bg-green-200 text-green-800" : row.status === "Pending" ? "bg-yellow-200 text-yellow-800" : "bg-red-200 text-red-800"}`}>{row.status}</span></p>
                            <p><button><strong>Category Cour:</strong> {row.description}</button></p>
                            <div className="flex justify-between mt-3">
                                <button className="text-blue-500 hover:text-blue-700">View Courses</button>
                                <button className="text-blue-500 hover:text-blue-700">Edit</button>
                            </div>
                        </div>
                    ))}

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
            )}
        </>
    );
};

export default Page;






// 'use client'

// import React, { useState, useMemo } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import { useRouter } from 'next/navigation';

// const rowsData = [
//     { id: "1", title: "Web Dev", quantity: "1", required: "No", status: "Active", description: "Courses(1)" },
//     { id: "2", title: "Graphic Design", quantity: "1", required: "Yes", status: "Active", description: "Courses(2)" },
//     { id: "3", title: "Data Science", quantity: "2", required: "No", status: "Pending", description: "Courses(3)" },
//     { id: "4", title: "Cybersecurity", quantity: "3", required: "Yes", status: "Inactive", description: "Courses(4)" },
//     { id: "5", title: "Digital Marketing", quantity: "2", required: "No", status: "Active", description: "Courses(5)" },
//     { id: "6", title: "Software Testing", quantity: "1", required: "Yes", status: "Pending", description: "Courses(6)" },
//     { id: "7", title: "AI and ML", quantity: "3", required: "No", status: "Active", description: "Courses(7)" },
//     { id: "8", title: "Cloud Computing", quantity: "1", required: "Yes", status: "Inactive", description: "Courses(8)" },
//     { id: "9", title: "Blockchain", quantity: "2", required: "No", status: "Active", description: "Courses(9)" }
// ];

// const page = () => {
//     const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
//     const [currentPage, setCurrentPage] = useState(0);
//     const [searchTerm, setSearchTerm] = useState('');

//     const router = useRouter();

//     const rowsPerPage = 5;

//     const sortedData = useMemo(() => {
//         let sortableItems = [...rowsData];
//         if (sortConfig.key !== null) {
//             sortableItems.sort((a, b) => {
//                 if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
//                 if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
//                 return 0;
//             });
//         }
//         if (searchTerm) {
//             sortableItems = sortableItems.filter(item =>
//                 Object.values(item).some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
//             );
//         }
//         return sortableItems;
//     }, [rowsData, sortConfig, searchTerm]);

//     const displayedRows = useMemo(() => {
//         const start = currentPage * rowsPerPage;
//         const end = start + rowsPerPage;
//         return sortedData.slice(start, end);
//     }, [sortedData, currentPage]);

//     const requestSort = (key) => {
//         let direction = 'ascending';
//         if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//             direction = 'descending';
//         }
//         setSortConfig({ key, direction });
//     };

//     const handleEdit = (id) => {
//         console.log("Edit clicked for ID:", id);
//     };

//     return (
//         <>
//             <div className='justify-between lg:flex mb-5'>
//                 <div><h2 className='font-semibold lg:text-[25px] mb-5'>Manage Categories</h2></div>
//             </div>
//             <div className='lg:flex justify-between'>
//                 <div className='mb-5 lg:mb-0'>
//                     <TextField
//                         id="Search"
//                         label="Search..."
//                         variant="outlined"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>

//                 <Button className='mb-5' onClick={() => router.push('/addCourse')} variant="contained" startIcon={<AddIcon />}>
//                     Add New Category
//                 </Button>
//             </div>

//             {/* Table for larger screens */}
//             <div className="hidden md:block overflow-x-auto shadow-md sm:rounded-lg mt-5">
//                 <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             {["ID", "Category Name", "Display Order", "Featured", "Status", "Category Courses", "Actions"].map((header, index) => (
//                                 <th key={index} className="px-6 py-3">
//                                     {header}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {displayedRows.map((row, rowIndex) => (
//                             <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                                 <td className="px-6 py-4">{row.id}</td>
//                                 <td className="px-6 py-4">{row.title}</td>
//                                 <td className="px-6 py-4">{row.quantity}</td>
//                                 <td className="px-6 py-4">{row.required}</td>
//                                 <td className="px-6 py-4">{row.status}</td>
//                                 <td className="px-6 py-4 ">
//                                     <button className="text-blue-500 hover:text-blue-700">{row.description}</button>
//                                 </td>
//                                 <td className="px-6 py-4 ">
//                                     <button className="text-blue-500 hover:text-blue-700">Edit</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Cards for mobile screens */}
//             <div className="md:hidden mt-5">
//                 {displayedRows.map((row, rowIndex) => (
//                     <div key={rowIndex} className="bg-white shadow-md rounded-lg p-4 mb-4 dark:bg-gray-800">
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">ID:</span>
//                             <span>{row.id}</span>
//                         </div>
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">Category Name:</span>
//                             <span>{row.title}</span>
//                         </div>
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">Display Order:</span>
//                             <span>{row.quantity}</span>
//                         </div>
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">Featured:</span>
//                             <span>{row.required}</span>
//                         </div>
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">Status:</span>
//                             <span>{row.status}</span>
//                         </div>
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">Category Courses:</span>
//                             <button className="text-blue-500 hover:text-blue-700">{row.description}</button>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <span className="font-semibold">Actions:</span>
//                             <button className="text-blue-500 hover:text-blue-700">Edit</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-between p-4">
//                 <button
//                     onClick={() => setCurrentPage(current => current - 1)}
//                     disabled={currentPage === 0}
//                     className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                     Previous
//                 </button>
//                 <button
//                     onClick={() => setCurrentPage(current => current + 1)}
//                     disabled={currentPage >= Math.ceil(sortedData.length / rowsPerPage) - 1}
//                     className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                     Next
//                 </button>
//             </div>
//         </>
//     );
// };

// export default page;
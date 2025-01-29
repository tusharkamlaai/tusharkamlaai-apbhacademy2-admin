'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const userData = [
    {
        id: 1,
        title: "2",
        subtitle: "Users/Participants"
    },
    {
        id: 2,
        title: "3",
        subtitle: "Active Trainers"
    },
    {
        id: 3,
        title: "0",
        subtitle: "Links Shared"
    },
    {
        id: 4,
        title: "0",
        subtitle: "Assessments Taken (Trainer)"
    },
    {
        id: 5,
        title: "0",
        subtitle: "Assessments Taken (Self)"
    },
    {
        id: 6,
        title: "0",
        subtitle: "Assessments Taken (Total)"
    },
    {
        id: 7,
        title: "2",
        subtitle: "Cities"
    },
    {
        id: 8,
        title: "7",
        subtitle: "Courses"
    },
    {
        id: 9,
        title: "11",
        subtitle: "Active Languages"
    }
];

const Dashboard = () => {
    return (
        <>
            <h2 className='font-semibold text-[25px] mb-5'>Dashboard</h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
                {userData.map((data) => (
                    <Card key={data.id} className='lg:w-[18rem]'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {data.title}
                            </Typography>
                            <Typography sx={{ mt: 1.5 }} variant="h6">
                                {data.subtitle}
                            </Typography>
                        </CardContent>
                        <CardActions className='text-center items-center justify-center'>
                            <Button size="small">More</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Dashboard
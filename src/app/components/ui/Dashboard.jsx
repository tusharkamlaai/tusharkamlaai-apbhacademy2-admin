"use client";
import * as React from "react";
import { Card, CardContent, Typography, Button, Tooltip } from "@mui/material";
import {
  People as PeopleIcon,
  School as SchoolIcon,
  Link as LinkIcon,
  Assessment as AssessmentIcon,
  LocationCity as LocationCityIcon,
  MenuBook as MenuBookIcon,
  Language as LanguageIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const userData = [
  {
    id: 1,
    title: "2",
    subtitle: "View Users & Participants",
    icon: <PeopleIcon fontSize="large" />,
    color: "#4CAF50",
    href: "/usersList",
    info: "Manage and view all users and participants in the system.",
  },
  {
    id: 2,
    title: "3",
    subtitle: "View Active Trainers",
    icon: <SchoolIcon fontSize="large" />,
    color: "#2196F3",
    href: "/Trainer/Trainers",
    info: "Check the list of active trainers available.",
  },
  {
    id: 3,
    title: "0",
    subtitle: "View Shared Links",
    icon: <LinkIcon fontSize="large" />,
    color: "#FF9800",
    href: "/Assessment/ManageAssessmentLinks",
    info: "Manage and monitor shared assessment links.",
  },
  {
    id: 4,
    title: "0",
    subtitle: "View Assessments Taken (Trainer)",
    icon: <AssessmentIcon fontSize="large" />,
    color: "#9C27B0",
    href: "/Assessment/AssessmentResults",
    info: "View assessments completed by trainers.",
  },
  {
    id: 5,
    title: "0",
    subtitle: "View Assessments Taken (Self)",
    icon: <AssessmentIcon fontSize="large" />,
    color: "#E91E63",
    href: "/Assessment/AssessmentResults",
    info: "Track self-assessments taken by users.",
  },
  {
    id: 6,
    title: "0",
    subtitle: "View Assessments Taken (Total)",
    icon: <AssessmentIcon fontSize="large" />,
    color: "#FF5722",
    href: "/Assessment/AssessmentResults",
    info: "Overview of total assessments taken.",
  },
  {
    id: 7,
    title: "2",
    subtitle: "View Cities",
    icon: <LocationCityIcon fontSize="large" />,
    color: "#00BCD4",
    href: "/Settings&Masters/ManageCities",
    info: "Manage and view available cities.",
  },
  {
    id: 8,
    title: "7",
    subtitle: "View Courses",
    icon: <MenuBookIcon fontSize="large" />,
    color: "#673AB7",
    href: "/coursesList",
    info: "Browse and manage available courses.",
  },
  {
    id: 9,
    title: "11",
    subtitle: "View Active Languages",
    icon: <LanguageIcon fontSize="large" />,
    color: "#3F51B5",
    href: "/Settings&Masters/ManageLanguages",
    info: "View and manage the active languages supported.",
  },
];


const Dashboard = () => {
  const handleMoreInfo = (id) => {
    console.log(`More info clicked for card ${id}`);
  };

  return (
    <>
      <div className="justify-between flex">
        <h2 className="font-semibold text-[25px] mb-5">Dashboard</h2>
        <Button variant="contained" style={{ height: "40px", width: "80px" }}>
          All
        </Button>
      </div>

      <Grid container spacing={4}>
        {userData.map((data) => (
          <Grid item key={data.id} xs={12} sm={6} md={6} lg={4}>
            <Link href={data.href} passHref>
              <Card
                sx={{
                  minWidth: 275,
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                  backgroundColor: data.color,
                  color: "#fff", // White text for better contrast
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  <div
                    sx={{
                      marginBottom: "1rem",
                      color: "inherit",
                    }}
                  >
                    {data.icon}
                  </div>
                  <Typography variant="h4" component="div" gutterBottom>
                    {data.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginBottom: "1rem",
                      cursor: "pointer",
                     
                    }}
                  >
                    {data.subtitle}
                  </Typography>

                  <Tooltip
                    title={
                      <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                       {data.info}
                      </Typography>
                    }
                    placement="top" // Tooltip appears above the button
                    arrow
                    sx={{
                      ".MuiTooltip-tooltip": {
                        backgroundColor: "#fff", // White background
                        color: "#000", // Black text
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow
                        borderRadius: "4px", // Optional: Rounded corners
                        padding: "12px", // Optional: Add padding
                      },
                      ".MuiTooltip-arrow": {
                        color: "#fff", // Arrow color matches the tooltip background
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#fff",
                        color: data.color,
                        "&:hover": { backgroundColor: "#f5f5f5" },
                      }}
                      startIcon={<InfoIcon />}
                      onClick={() => handleMoreInfo(data.id)}
                    >
                      More Info
                    </Button>
                  </Tooltip>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;

// https://demo.thinkinggrey.com/test_vca/login.php

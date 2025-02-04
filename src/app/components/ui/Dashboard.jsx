"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
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

const userData = [
  {
    id: 1,
    title: "2",
    subtitle: "Users/Participants",
    icon: <PeopleIcon fontSize="large" />,
    color: "#4CAF50",
  },
  {
    id: 2,
    title: "3",
    subtitle: "Active Trainers",
    icon: <SchoolIcon fontSize="large" />,
    color: "#2196F3",
  },
  {
    id: 3,
    title: "0",
    subtitle: "Links Shared",
    icon: <LinkIcon fontSize="large" />,
    color: "#FF9800",
  },
  {
    id: 4,
    title: "0",
    subtitle: "Assessments Taken (Trainer)",
    icon: <AssessmentIcon fontSize="large" />,
    color: "#9C27B0",
  },
  {
    id: 5,
    title: "0",
    subtitle: "Assessments Taken (Self)",
    icon: <AssessmentIcon fontSize="large" />,
    color: "#E91E63",
  },
  {
    id: 6,
    title: "0",
    subtitle: "Assessments Taken (Total)",
    icon: <AssessmentIcon fontSize="large" />,
    color: "#FF5722",
  },
  {
    id: 7,
    title: "2",
    subtitle: "Cities",
    icon: <LocationCityIcon fontSize="large" />,
    color: "#00BCD4",
  },
  {
    id: 8,
    title: "7",
    subtitle: "Courses",
    icon: <MenuBookIcon fontSize="large" />,
    color: "#673AB7",
  },
  {
    id: 9,
    title: "11",
    subtitle: "Active Languages",
    icon: <LanguageIcon fontSize="large" />,
    color: "#3F51B5",
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
          <Grid item key={data.id} xs={12} sm={6} md={3} lg={3}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
                  {data.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: data.color,
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                  startIcon={<InfoIcon />}
                  onClick={() => handleMoreInfo(data.id)}
                >
                  More Info
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;

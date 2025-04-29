"use client";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import CategoryIcon from "@mui/icons-material/Category";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import profile from "../../src/assets/profile.png";
import logo from "../../src/assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import AddIcon from "@mui/icons-material/Add";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname } from "next/navigation";
import DashboardMain from "./components/ui/Dashboard";
const drawerWidth = 240;
import Cookies from 'js-cookie';

const menuItems = [
  { href: "/coursesList", icon: <ListIcon />, text: "Courses List" },
  { href: "/categoriesList", icon: <CategoryIcon />, text: "Categories List" },
  { href: "/faqs", icon: <LiveHelpIcon />, text: "FAQs List" },
  { href: "/usersList", icon: <GroupAddIcon />, text: "Users List" },
];

const meetLinks = [
  {
    href: "/meet/NewGoogleMeetLink",
    icon: <InsertLinkIcon />,
    text: "New Google meet Lks",
  },
  {
    href: "/meet/GoogleMeetingLink",
    icon: <InsertLinkIcon />,
    text: "Google meet Links",
  },
  {
    href: "/meet/SendAssessmentLink",
    icon: <InsertLinkIcon />,
    text: "Send Assessment Lks",
  },
  {
    href: "/Assessment/ManageAssessmentLinks",
    icon: <AssessmentIcon />,
    text: "Assessment Links",
  },
  {
    href: "/Assessment/AssessmentResults",
    icon: <CheckCircleOutlineIcon />,
    text: "Assessment Results",
  },
];

const trainers = [
  {
    href: "/Trainer/Trainers",
    icon: <PsychologyAltIcon />,
    text: "Trainers",
  },
  {
    href: "/Trainer/AddNewTrainer",
    icon: <AddIcon />,
    text: "Add New Trainer",
  },
];

const ReportsLogs = [
  {
    href: "/Reports&Logs/PartcipantsResults",
    icon: <EqualizerIcon />,
    text: "Partcipants Results",
  },
  {
    href: "/Reports&Logs/OnDemnPendVideos",
    icon: <EqualizerIcon />,
    text: "On-Demand Videos Pending Assessments",
  },
  {
    href: "/Reports&Logs/VirtualTrain",
    icon: <EqualizerIcon />,
    text: "Virtual Train. (Division)",
  },
  {
    href: "/Reports&Logs/VirtualTrainRegion",
    icon: <EqualizerIcon />,
    text: "Virtual Train. (Region)",
  },
  {
    href: "/Reports&Logs/AssessmentSummray",
    icon: <EqualizerIcon />,
    text: "Assessment Summray",
  },
  {
    href: "/Reports&Logs/TrainerWiseSummary",
    icon: <EqualizerIcon />,
    text: " Trainer-wise Summary",
  },
  {
    href: "/Reports&Logs/TrainerIPReport",
    icon: <EqualizerIcon />,
    text: " Trainer IP Report",
  },
  {
    href: "/Reports&Logs/TrainerAccessLogs",
    icon: <EqualizerIcon />,
    text: " Trainer Access Log",
  },
];

const Campaign = [
  {
    href: "/Campaign/NewCampaignURL",
    icon: <EqualizerIcon />,
    text: "New Campaign URL",
  },
  {
    href: "/Campaign/CampaignURLs",
    icon: <EqualizerIcon />,
    text: "Campaign URLs",
  },
  {
    href: "/Campaign/CampaignsReport",
    icon: <EqualizerIcon />,
    text: "Campaign Report",
  },
];

const SettingsMasters = [
  {
    href: "/Settings&Masters/Configuration",
    icon: <ArrowForwardIcon />,
    text: " Configuration",
  },
  {
    href: "/Settings&Masters/AdminUsers",
    icon: <ArrowForwardIcon />,
    text: "AdminUsers",
  },
  {
    href: "/Settings&Masters/Roles&Permissions",
    icon: <ArrowForwardIcon />,
    text: " Roles & Permissions",
  },
  {
    href: "/Settings&Masters/Sliders",
    icon: <ArrowForwardIcon />,
    text: "Sliders",
  },
  {
    href: "/Settings&Masters/ManageCities",
    icon: <ArrowForwardIcon />,
    text: "Manage Cities",
  },
  {
    href: "/Settings&Masters/ManageLanguages",
    icon: <ArrowForwardIcon />,
    text: "Manage Languages",
  },
  {
    href: "/Settings&Masters/ReportScheduler",
    icon: <ArrowForwardIcon />,
    text: "Report Scheduler",
  },
  {
    href: "/Settings&Masters/Translations",
    icon: <ArrowForwardIcon />,
    text: "Translations",
  },
];

const Logout = [
  {
    href: "/",
    icon: <LogoutIcon />,
    text: "Logout",
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": {
          ...openedMixin(theme),
          boxShadow: "3px 0 8px rgba(0, 0, 0, 0.1)",
          overflowY: "auto", // Enable vertical scrolling
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#888 #f1f1f1", // For Firefox
          "&::-webkit-scrollbar": {
            width: "6px", // Thinner scrollbar for modern look
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1", // Light gray track
            borderRadius: "4px", // Rounded corners
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888", // Dark gray scrollbar
            borderRadius: "4px", // Rounded corners
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555", // Darker gray on hover
          },
        },
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm") && theme.breakpoints.down("md")
  );
  const isMobile2 = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();

  const [open, setOpen] = React.useState(!isMobile);

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleContentClick = () => {
    if (isMobile2) {
      handleDrawerClose();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const isLoginPage = pathname === "/";

  if (isLoginPage) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }

const adminLogout = () => {
  Cookies.remove('adminToken', { path: '/' });
  router.push('/auth/login');
  localStorage.removeItem("adminToken");
};

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              open={open}
              style={{ background: "white", color: "black" }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      marginRight: 5,
                    },
                    open && { display: "none" },
                  ]}
                >
                  <MenuIcon />
                </IconButton>
                <div style={{ flexGrow: 1 }} />
                <div className="flex items-center gap-3">
                  <span>
                    <AccountCircleIcon />
                  </span>
                  <span>
                    {" "}
                    <button>Wellcome ABC -Admin Login</button>{" "}
                  </span>
                  <button onClick={adminLogout} className="bg-red-400 text-white px-3 py-2 ">
                    Logout
                  </button>
                </div>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader>
                <Typography component="div">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={logo}
                      alt="Description"
                      width={20}
                      height={22}
                    />
                    <button className="relative right- text-[15px]">
                      AP Color Academy
                    </button>
                  </div>
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <MenuOpenIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <Divider />
              <List>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <Link href="/profile">
                    <ListItemButton
                      sx={[
                        {
                          minHeight: 60,
                          px: 1.5,
                          backgroundColor:
                            pathname === "/profile" ? "#e0e0e0" : "inherit",
                        },
                        open
                          ? {
                              justifyContent: "initial",
                            }
                          : {
                              justifyContent: "center",
                            },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            justifyContent: "center",
                          },
                          open
                            ? {
                                mr: 3,
                              }
                            : {
                                mr: "auto",
                              },
                        ]}
                      >
                        <Image
                          src={profile}
                          alt="Description"
                          width={30}
                          height={30}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">
                            {" "}
                            ABC -Admin Login
                          </Typography>
                        }
                        sx={[
                          open
                            ? {
                                opacity: 1,
                              }
                            : {
                                opacity: 0,
                              },
                        ]}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <Divider />

                <ListItem disablePadding sx={{ display: "block" }}>
                  <Link href="/DashboardContent" onClick={handleContentClick}>
                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          px: 1.5,
                          backgroundColor:
                            pathname === "/DashboardContent"
                              ? "#e0e0e0"
                              : "inherit",
                        },
                        open
                          ? {
                              justifyContent: "initial",
                            }
                          : {
                              justifyContent: "center",
                            },
                      ]}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            justifyContent: "center",
                          },
                          open
                            ? {
                                mr: 3,
                              }
                            : {
                                mr: "auto",
                              },
                        ]}
                      >
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2"> Dashboard</Typography>
                        }
                        sx={[
                          open
                            ? {
                                opacity: 1,
                              }
                            : {
                                opacity: 0,
                              },
                        ]}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <Divider />
                <div className="mt-5">
                  {menuItems.map((items, index) => {
                    return (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <Link href={items.href} onClick={handleContentClick}>
                          <ListItemButton
                            sx={[
                              {
                                minHeight: 48,
                                px: 1.5,
                                backgroundColor:
                                  pathname === items.href
                                    ? "#e0e0e0"
                                    : "inherit",
                              },
                              open
                                ? {
                                    justifyContent: "initial",
                                  }
                                : {
                                    justifyContent: "center",
                                  },
                            ]}
                          >
                            <ListItemIcon
                              sx={[
                                {
                                  minWidth: 0,
                                  justifyContent: "center",
                                },
                                open
                                  ? {
                                      mr: 3,
                                    }
                                  : {
                                      mr: "auto",
                                    },
                              ]}
                            >
                              {items.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {" "}
                                  {items.text}
                                </Typography>
                              }
                              sx={[
                                open
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0,
                                    },
                              ]}
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    );
                  })}
                </div>

                <Divider />
                <div className="mt-5">
                  {meetLinks.map((items, index) => {
                    return (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <Link href={items.href} onClick={handleContentClick}>
                          <ListItemButton
                            sx={[
                              {
                                minHeight: 48,
                                px: 1,
                                backgroundColor:
                                  pathname === items.href
                                    ? "#e0e0e0"
                                    : "inherit",
                              },
                              open
                                ? {
                                    justifyContent: "initial",
                                  }
                                : {
                                    justifyContent: "center",
                                  },
                            ]}
                          >
                            <ListItemIcon
                              sx={[
                                {
                                  minWidth: 0,
                                  justifyContent: "center",
                                },
                                open
                                  ? {
                                      mr: 3,
                                    }
                                  : {
                                      mr: "auto",
                                    },
                              ]}
                            >
                              {items.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {" "}
                                  {items.text}
                                </Typography>
                              }
                              sx={[
                                open
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0,
                                    },
                              ]}
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    );
                  })}
                </div>

                <Divider />
                <div className="mt-5">
                  {trainers.map((items, index) => {
                    return (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <Link href={items.href} onClick={handleContentClick}>
                          <ListItemButton
                            sx={[
                              {
                                minHeight: 48,
                                px: 1,
                                backgroundColor:
                                  pathname === items.href
                                    ? "#e0e0e0"
                                    : "inherit",
                              },
                              open
                                ? {
                                    justifyContent: "initial",
                                  }
                                : {
                                    justifyContent: "center",
                                  },
                            ]}
                          >
                            <ListItemIcon
                              sx={[
                                {
                                  minWidth: 0,
                                  justifyContent: "center",
                                },
                                open
                                  ? {
                                      mr: 3,
                                    }
                                  : {
                                      mr: "auto",
                                    },
                              ]}
                            >
                              {items.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {" "}
                                  {items.text}
                                </Typography>
                              }
                              sx={[
                                open
                                  ? {
                                      opacity: 1,
                                    }
                                  : {
                                      opacity: 0,
                                    },
                              ]}
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    );
                  })}
                </div>

                <Divider />
                <div className="text-center mt-3 lg:visible invisible ">
                  Reports & Logs
                </div>
                <div className="mt-5">
                  {ReportsLogs.map((items, index) => {
                    return (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <Link href={items.href} onClick={handleContentClick}>
                          <ListItemButton
                            sx={[
                              {
                                minHeight: 48,
                                px: 1,
                                backgroundColor:
                                  pathname === items.href
                                    ? "#e0e0e0"
                                    : "inherit",
                              },
                              open
                                ? {
                                    justifyContent: "initial",
                                  }
                                : {
                                    justifyContent: "center",
                                  },
                            ]}
                          >
                            <ListItemIcon
                              sx={[
                                {
                                  minWidth: 0,
                                  justifyContent: "center",
                                },
                                open
                                  ? {
                                      mr: 3,
                                    }
                                  : {
                                      mr: "auto",
                                    },
                              ]}
                            >
                              {items.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {items.text}
                                </Typography>
                              }
                              sx={[
                                open ? { opacity: 1 } : { opacity: 0 },
                                {
                                  whiteSpace: "normal",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  maxWidth: "160px",
                                },
                              ]}
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    );
                  })}
                </div>

                <Divider />
                <div className="text-center mt-3 lg:visible invisible">
                  Reports & Logs
                </div>
                <div className="mt-5">
                  {Campaign.map((items, index) => {
                    return (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <Link href={items.href} onClick={handleContentClick}>
                          <ListItemButton
                            sx={[
                              {
                                minHeight: 48,
                                px: 1,
                                backgroundColor:
                                  pathname === items.href
                                    ? "#e0e0e0"
                                    : "inherit",
                              },
                              open
                                ? {
                                    justifyContent: "initial",
                                  }
                                : {
                                    justifyContent: "center",
                                  },
                            ]}
                          >
                            <ListItemIcon
                              sx={[
                                {
                                  minWidth: 0,
                                  justifyContent: "center",
                                },
                                open
                                  ? {
                                      mr: 3,
                                    }
                                  : {
                                      mr: "auto",
                                    },
                              ]}
                            >
                              {items.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {items.text}
                                </Typography>
                              }
                              sx={[
                                open ? { opacity: 1 } : { opacity: 0 },
                                {
                                  whiteSpace: "normal",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  maxWidth: "160px",
                                },
                              ]}
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    );
                  })}
                </div>

                <Divider />
                <div className="text-center mt-3"> </div>

                <div className="m-1 hs-dropdown relative">
                  <button
                    id="hs-dropdown-hover-event"
                    type="button"
                    className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-label="Dropdown"
                    onClick={toggleDropdown}
                  >
                    <div className="flex gap-3 items-center">
                      <span>
                        {" "}
                        <SettingsIcon />
                      </span>
                      <span className="none">Settings & Masters </span>
                    </div>

                    <svg
                      className={`hs-dropdown-open:rotate-180 size-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    className={`hs-dropdown-menu transition-[opacity,margin] duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    } ${isOpen ? "block" : "hidden"} min-w-60 bg-white mt-2`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-dropdown-hover-event"
                  >
                    <div className="mt-5">
                      {SettingsMasters.map((items, index) => {
                        return (
                          <ListItem
                            key={index}
                            disablePadding
                            sx={{ display: "block" }}
                          >
                            <Link
                              href={items.href}
                              onClick={handleContentClick}
                            >
                              <ListItemButton
                                sx={[
                                  {
                                    minHeight: 48,
                                    px: 1,
                                    backgroundColor:
                                      pathname === items.href
                                        ? "#e0e0e0"
                                        : "inherit",
                                  },
                                  open
                                    ? { justifyContent: "initial" }
                                    : { justifyContent: "center" },
                                ]}
                              >
                                <ListItemIcon
                                  sx={[
                                    { minWidth: 0, justifyContent: "center" },
                                    open ? { mr: 3 } : { mr: "auto" },
                                  ]}
                                >
                                  {items.icon}
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body2">
                                      {items.text}
                                    </Typography>
                                  }
                                  sx={[
                                    open ? { opacity: 1 } : { opacity: 0 },
                                    {
                                      whiteSpace: "normal",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      maxWidth: "160px",
                                    },
                                  ]}
                                />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <Divider />
                {/* <div className="text-center mt-3">logout</div> */}
                <div className="mt-5">
                  {Logout.map((items, index) => {
                    return (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <Link href={items.href} onClick={handleContentClick}>
                          <ListItemButton
                            sx={[
                              {
                                minHeight: 48,
                                px: 1,
                                backgroundColor:
                                  pathname === items.href
                                    ? "#e0e0e0"
                                    : "inherit",
                              },
                              open
                                ? {
                                    justifyContent: "initial",
                                  }
                                : {
                                    justifyContent: "center",
                                  },
                            ]}
                          >
                            <ListItemIcon
                              sx={[
                                {
                                  minWidth: 0,
                                  justifyContent: "center",
                                },
                                open
                                  ? {
                                      mr: 3,
                                    }
                                  : {
                                      mr: "auto",
                                    },
                              ]}
                            >
                              {items.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  {items.text}
                                </Typography>
                              }
                              sx={[
                                open ? { opacity: 1 } : { opacity: 0 },
                                {
                                  whiteSpace: "normal",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  maxWidth: "160px",
                                },
                              ]}
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    );
                  })}
                </div>
              </List>
              <Divider />
              <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              {children}
            </Box>
          </Box>
        </div>
      </body>
    </html>
  );
}

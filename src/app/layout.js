"use client";

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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import ListIcon from "@mui/icons-material/List";
import CategoryIcon from "@mui/icons-material/Category";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "@mui/material/Button";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Person3Icon from "@mui/icons-material/Person3";
import profile from "../../src/assets/profile.png";
import logo from "../../src/assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { useRouter } from "next/navigation";
import AddIcon from '@mui/icons-material/Add';
const drawerWidth = 240;

const menuItems = [
  {
    href: "/coursesList/addCourse",
    icon: <AddToPhotosIcon />,
    text: "Add Course",
  },
  { href: "/coursesList", icon: <ListIcon />, text: "Courses List" },
  { href: "/categoriesList", icon: <CategoryIcon />, text: "Categories List" },
  { href: "/faqs", icon: <LiveHelpIcon />, text: "FAQs List" },
  // { href: "/usersList", icon: <PeopleOutlineIcon />, text: "Users List" },
];

const meetLinks = [
  {
    href: "/meet/NewGoogleMeetLink",
    icon: <InsertLinkIcon />,
    text: "New Google meet Link",
  },
  {
    href: "/meet/GoogleMeetingLink",
    icon: <InsertLinkIcon />,
    text: "Google meet Links",
  },
  {
    href: "/meet/SendAssessmentLink",
    icon: <InsertLinkIcon />,
    text: "Send Assessment Links",
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
  }
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
        "& .MuiDrawer-paper": openedMixin(theme),
        boxShadow: "3px 0 8px rgba(0, 0, 0, 0.1)",
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

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm") && theme.breakpoints.down("md")
  );
  const isMobile2 = useMediaQuery(theme.breakpoints.down("sm"));

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <Typography component="div">
                <div className="flex gap-2 items-center">
                  <Image src={logo} alt="Description" width={20} height={22} />
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
                <Link href="/" onClick={handleContentClick}>
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        px: 1.5,
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
                        <Typography variant="body2">
                          {" "}
                          {/* Reduce the text size */}
                          Dashboard
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
                                {/* Reduce text size */}
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
                            primary={items.text}
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
                            primary={items.text}
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

              
            </List>
            <Divider />
            <Divider />
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField, Container, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const AddCategories = () => {
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const states = [
    {
      name: "California",
      districts: ["Los Angeles", "San Francisco", "San Diego"],
    },
    { name: "Texas", districts: ["Houston", "Dallas", "Austin"] },
    { name: "New York", districts: ["New York City", "Buffalo", "Rochester"] },
  ];

  const districts = state
    ? states.find((s) => s.name === state)?.districts
    : [];

    const router = useRouter();

  return (
    <>
      {/* <h2 className="font-semibold lg:text-[25px] mb-5">Add New Category</h2> */}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[90%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">Update Category</h2>
            <hr />
            <div>
              <Container component="main">
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in English:
                  </label>
                  <TextField
                    id="english-question"
                    label="In English"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Hindi */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in हिन्दी (Hindi):
                  </label>
                  <TextField
                    id="hindi-question"
                    label="In हिन्दी (Hindi)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Gujarati */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in गुजराती (Gujarati):
                  </label>
                  <TextField
                    id="gujarati-question"
                    label="In गुजराती (Gujarati)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Marathi */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in मराठी (Marathi):
                  </label>
                  <TextField
                    id="marathi-question"
                    label="In मराठी (Marathi)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Malayalam */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in മലയാളം (Malayalam):
                  </label>
                  <TextField
                    id="malayalam-question"
                    label="In മലയാളം (Malayalam)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Kannada */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in ಕನ್ನಡ (Kannada):
                  </label>
                  <TextField
                    id="kannada-question"
                    label="In ಕನ್ನಡ (Kannada)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Bangla */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in বাংলা (Bangla):
                  </label>
                  <TextField
                    id="bangla-question"
                    label="In বাংলা (Bangla)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Odia */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in ଓଡିଆ (Odia):
                  </label>
                  <TextField
                    id="odia-question"
                    label="In ଓଡିଆ (Odia)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Tamil */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in தமிழ் (Tamil):
                  </label>
                  <TextField
                    id="tamil-question"
                    label="In தமிழ் (Tamil)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Telugu */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in తెలుగు (Telugu):
                  </label>
                  <TextField
                    id="telugu-question"
                    label="In తెలుగు (Telugu)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Assamese */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    Category Name in অসমীয়া (Assamese):
                  </label>
                  <TextField
                    id="assamese-question"
                    label="In অসমীয়া (Assamese)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>
                <div className="mt-5 flex flex-col lg:flex-row justify-center items-center px-5">
                  <Typography variant="body1" className="mb-1 lg:mb-0 lg:mr-3">
                    Category Image:
                  </Typography>
                  <input
                    type="file"
                    accept="image/*"
                    name="photo"
                    style={{ width: "100%", maxWidth: "500px" }} // Ensures input does not stretch too far in larger screens
                  />
                </div>

                <div className="text-center">
                  <label className="font-semibold" htmlFor="">
                    Tag
                  </label>
                  <Checkbox />
                  <label className="font-semibold" htmlFor="">
                    Featured
                  </label>
                </div>

                <div className="text-center">
                  <label className="font-semibold" htmlFor="">
                    Status
                  </label>
                  <Checkbox />
                  <label className="font-semibold" htmlFor="">
                    Active
                  </label>
                </div>

                <div className="mt-5 lg:flex flex-col items-center">
                  <div className="flex gap-3">
                    <span>
                      <Button variant="contained">Update</Button>
                    </span>
                    <span>
                    <Button
                            variant="outlined"
                            onClick={() => router.back()}
                          >
                            Cancel
                          </Button>
                    </span>
                  </div>
                </div>
              </Container>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddCategories;

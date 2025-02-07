"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField, Container } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const AddFaqs = () => {
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
      {/* <h2 className="font-semibold lg:text-[25px] mb-5">Add FAQs</h2> */}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[90%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">Update FAQs</h2>
            <hr />
            <div>
              <Container component="main">
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - English:
                  </label>
                  <TextField
                    id="english-question"
                    label="Question English"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="english-answer"
                    label="Answer English"
                    multiline
                    rows={2}
                    variant="outlined"
                    //
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Hindi */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - हिन्दी (Hindi):
                  </label>
                  <TextField
                    id="hindi-question"
                    label="Question हिन्दी (Hindi)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="hindi-answer"
                    label="Answer हिन्दी (Hindi)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Gujarati */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - गुजराती (Gujarati):
                  </label>
                  <TextField
                    id="gujarati-question"
                    label="Question गुजराती (Gujarati)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="gujarati-answer"
                    label="Answer गुजराती (Gujarati)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Marathi */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - मराठी (Marathi):
                  </label>
                  <TextField
                    id="marathi-question"
                    label="Question मराठी (Marathi)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="marathi-answer"
                    label="Answer मराठी (Marathi)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Malayalam */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - മലയാളം (Malayalam):
                  </label>
                  <TextField
                    id="malayalam-question"
                    label="Question മലയാളം (Malayalam)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="malayalam-answer"
                    label="Answer മലയാളം (Malayalam)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Kannada */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - ಕನ್ನಡ (Kannada):
                  </label>
                  <TextField
                    id="kannada-question"
                    label="Question ಕನ್ನಡ (Kannada)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="kannada-answer"
                    label="Answer ಕನ್ನಡ (Kannada)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Bangla */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - বাংলা (Bangla):
                  </label>
                  <TextField
                    id="bangla-question"
                    label="Question বাংলা (Bangla)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="bangla-answer"
                    label="Answer বাংলা (Bangla)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Odia */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - ଓଡିଆ (Odia):
                  </label>
                  <TextField
                    id="odia-question"
                    label="Question ଓଡିଆ (Odia)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="odia-answer"
                    label="Answer ଓଡିଆ (Odia)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Tamil */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - தமிழ் (Tamil):
                  </label>
                  <TextField
                    id="tamil-question"
                    label="Question தமிழ் (Tamil)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="tamil-answer"
                    label="Answer தமிழ் (Tamil)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Telugu */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - తెలుగు (Telugu):
                  </label>
                  <TextField
                    id="telugu-question"
                    label="Question తెలుగు (Telugu)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="telugu-answer"
                    label="Answer తెలుగు (Telugu)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                </div>

                {/* Assamese */}
                <div className="mt-5 lg:flex flex-col items-center">
                  <label htmlFor="" className="font-semibold mb-3">
                    FAQ - অসমীয়া (Assamese):
                  </label>
                  <TextField
                    id="assamese-question"
                    label="Question অসমীয়া (Assamese)"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="assamese-answer"
                    label="Answer অসমীয়া (Assamese)"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
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
                  <TextField
                    label="Display order"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                    type="number"
                  />

                  <div className="flex gap-3">
                    <span>
                      <Button variant="contained">Save</Button>
                    </span>
                    <span>
                      <Button variant="outlined" onClick={() => router.back()}>Cancel</Button>
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

export default AddFaqs;

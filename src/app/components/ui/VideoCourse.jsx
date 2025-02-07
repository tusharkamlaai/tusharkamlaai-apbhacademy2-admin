"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField, Container } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

let languages = [
  {
    language: "English",
    transliteration: "",
  },
  {
    language: "Hindi",
    transliteration: "<4",
  },
  {
    language: "Gujarati",
    transliteration: "Tyīxīʤ",
  },
  {
    language: "Marathi",
    transliteration: "Tīxīʤ",
  },
  {
    language: "Malayalam",
    transliteration: "@P1000go",
  },
  {
    language: "Kannada",
    transliteration: "rāʣʣ",
  },
  {
    language: "Bangla",
    transliteration: "xīsīʤ",
  },
  {
    language: "Odia",
    transliteration: "@?l",
  },
  {
    language: "Tamil",
    transliteration: "gūbīʤ",
  },
  {
    language: "Telugu",
    transliteration: "œcōǒ",
  },
  {
    language: "Assamese",
    transliteration: "vīxīʤ",
  },
];

const VideoCourse = () => {
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      {/* <h2 className="font-semibold lg:text-[25px] mb-5">Add FAQs</h2> */}
      <div className="items-center justify-center flex mt-5">
        <Card className="lg:w-[90%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Add video
            </h2>
            <hr />
            <div>
              <Container component="main" className="mt-5">
               
               
                <div className="mt-5 lg:flex flex-col items-center">
                  <TextField
                    id="assamese-question"
                    label="Title"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                    <TextField
                    id="assamese-question"
                    label="YouTube ID"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                   
                  />
                  <TextField
                    id="assamese-answer"
                    label="Description"
                    multiline
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                  />
                  <TextField
                    id="assamese-question"
                    label="Display Order"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    className="lg:w-[70%] w-[100%] "
                    type="number"
                  />

                  <div className="flex items-center py-5">
                    <span>Staus</span>
                    <span><Checkbox {...label} /></span>
                    <span>Active</span>
                  </div>


                  <div className="flex gap-3">
                    <span>
                      <Button variant="contained">Save</Button>
                    </span>
                    <span>
                      <Button variant="outlined" onClick={() => router.back()}>
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

export default VideoCourse;

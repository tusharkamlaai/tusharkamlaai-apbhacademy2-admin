"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/navigation";

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

const page = () => {
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      {/* <h2 className="font-semibold lg:text-[25px] mb-5">Add FAQs</h2> */}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[90%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Course Translation
            </h2>
            <hr />
            <div>
              <Container component="main" className="mt-5">
                <Box className="lg:w-[50%]">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Language
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Language"
                      onChange={handleChange}
                      value={selectedLanguage}
                    >
                      {languages.map((lang, index) => (
                        <MenuItem key={index} value={lang.language}>
                          {lang.language}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <div className="text-center font-semibold mt-5 text-xl">
                  Translations for हिन्दी (Hindi)
                </div>
                <div className="mt-5 lg:flex flex-col items-center">
                  <TextField
                    id="assamese-question"
                    label="Course Name"
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
                    label="Course Duration"
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

export default page;

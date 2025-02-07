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

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const router = useRouter();
  return (
    <>
      {""}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[90%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Courses Belonging to category: Web dev
            </h2>
            <hr />
            <div>
              <Container component="main">
                <div class="flex items-center justify-center">
                  <div class="mx-auto w-1/2  p-4 text-center">
                    <div className="flex items-center gap-3">
                      <span>
                        <Checkbox {...label} />
                      </span>
                      <span>Course: Module</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>
                        <Checkbox {...label} />
                      </span>
                      <span>Course: Module</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>
                        <Checkbox {...label} />
                      </span>
                      <span>Course: Module</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>
                        <Checkbox {...label} />
                      </span>
                      <span>Course: Module</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>
                        <Checkbox {...label} />
                      </span>
                      <span>Course: Module</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>
                        <Checkbox {...label} />
                      </span>
                      <span>Course: Module</span>
                    </div>

                    <div className="mt-5 lg:flex flex-col items-center">
                      <div className="flex gap-3">
                        <span>
                          <Button variant="contained">Save</Button>
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

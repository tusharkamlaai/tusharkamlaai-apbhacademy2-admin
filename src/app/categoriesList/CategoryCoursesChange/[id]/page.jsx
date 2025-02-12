"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";


const AddCategories = () => {


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
                <div className="flex items-center justify-center">
                  <div className="mx-auto text-center">
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

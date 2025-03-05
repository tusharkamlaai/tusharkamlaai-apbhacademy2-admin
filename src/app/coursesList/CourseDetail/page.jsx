import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function CourseDetail() {
  return (
    <>
      <div className="items-center flex gap-3 mb-5">
        <div>
          <h2 className="font-semibold lg:text-[22px]">Course Name:</h2>
        </div>
        <div>
          <span className="lg:text-[22px]">Coding</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Parent Grid - 30% Left Panel, 70% Right Panel */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
          {/* Left Panel - 30% (On Medium Screens & Above) */}
          <div className="md:col-span-3">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: 200 }}
                  image="https://e7.pngegg.com/pngimages/185/866/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle.png"
                  alt="Profile Image"
                />
                <CardContent>
                  <div className="flex items-center gap-3">
                    <p className="text-[18px] font-semibold">Module:</p>
                    <Typography className="text-2xl">HTML_course</Typography>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-[18px] font-semibold">Category:</p>
                    <Typography className="text-[18px]">Coding</Typography>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-[18px] font-semibold">Admin Entry:</p>
                    <Typography className="text-[18px]"></Typography>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-[18px] font-semibold">Course Code:</p>
                    <Typography className="text-[18px]">123</Typography>
                  </div>

                  <div className="py-3 mt-3 mx-auto w-full">
                    <div>
                      <Button
                        variant="outlined"
                        className="w-full"
                        sx={{
                          height: 50, // Adjusted height
                          marginBottom: 2, // Added margin bottom
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div>
                            {" "}
                            <StarBorderIcon />
                          </div>
                          <div> Not Featured</div>
                        </div>
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        className="w-full"
                        sx={{
                          backgroundColor: "red",
                          "&:hover": { backgroundColor: "darkred" },
                          height: 50, // Adjusted height
                          marginBottom: 2, // Added margin bottom
                        }}
                      >
                        Inactive on Portal
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        className="w-full"
                        sx={{
                          backgroundColor: "green",
                          "&:hover": { backgroundColor: "darkgreen" },
                          height: 50, // Adjusted height
                          marginBottom: 2, // Added margin bottom
                        }}
                      >
                        Active in Training
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="outlined"
                        className="w-full"
                        sx={{
                          height: 50, // Adjusted height
                          marginBottom: 2, // Added margin bottom
                        }}
                      >
                        Edit
                      </Button>
                    </div>

                    <div>
                      <Button
                        variant="outlined"
                        className="w-full"
                        sx={{
                          height: 50, // Adjusted height
                          marginBottom: 2, // Added margin bottom
                          border:'2px solid red',
                          color:'red'
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="outlined"
                        className="w-full"
                        sx={{
                          height: 50, // Adjusted height
                          marginBottom: 2, // Added margin bottom
                        }}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          {/* Right Panel - 70% (On Medium Screens & Above) */}
          <div className="md:col-span-7">
            {/* Add content for the right panel here */}
          </div>
        </div>
      </div>
    </>
  );
}

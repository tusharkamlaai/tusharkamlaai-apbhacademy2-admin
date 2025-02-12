import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <div className="container mx-auto px-4">
      {/* Parent Grid - 30% Left Panel, 70% Right Panel */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        {/* Left Panel - 30% (On Medium Screens & Above) */}
        <div className="md:col-span-3 ">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ width: 300, height: 200 }}
                image="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                alt="Profile Image"
                className="w-25"
              />
              <CardContent>
                <div className="flex items-center gap-3">
                  <p className="text-[18px] font-semibold">Name:</p>
                  <Typography className="text-2xl">Tushar</Typography>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[18px] font-semibold">OTP:</p>
                  <Typography className="text-[18px]">12345</Typography>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[18px] font-semibold">BP Number:</p>
                  <Typography className="text-[18px]">123</Typography>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[18px] font-semibold">State:</p>
                  <Typography className="text-[18px]">Maharashtra</Typography>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[18px] font-semibold">District:</p>
                  <Typography className="text-[18px]">Mumbai</Typography>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[18px] font-semibold">City:</p>
                  <Typography className="text-[18px]">Mumbai</Typography>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[18px] font-semibold">Signup Date:</p>
                  <Typography className="text-[18px]">10-10-2024</Typography>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[18px] font-semibold">Signup IP:</p>
                  <Typography className="text-[18px]">152.58.1.186</Typography>
                </div>

                <div className="py-3 mt-3 mx-auto w-1/2">
                  <div>
                    <Button variant="contained" className="w-full">
                      Edit
                    </Button>
                  </div>
                  <div className="mt-2">
                    <Button variant="outlined" className="w-full">
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
          <div className="flex items-center justify-center">
            <Card className="w-full  shadow-lg">
              <CardContent>
                <h2 className="font-semibold text-[20px] mb-3">
                  Assessment Results
                </h2>
                <hr />
                <div>
                  <Container component="main"></Container>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

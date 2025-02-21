"use client";
import React from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const NewCampaignURL = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <>
      {""}
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">Campaign Report</h2>
      </div>

      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    label="Start Date"
                    defaultValue={dayjs("2022-04-17")}
                  />
                  <DatePicker
                    label="End Date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <div className="mt-3">
                <a href="/example.pdf" download>
                  <Button variant="contained">Download Report</Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NewCampaignURL;

import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
const UploadCities = () => {
  return (
    <>
      {""}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <div>
              <p>
                You can download the sample excel file here. The order of
                columns should be exactly as in download cities file.
              </p>
              <div className="flex mt-3">
                <span className="font-semibold">Columns in Excel File:</span>
                <span>City ID, City, District, State, Region, Division.</span>
              </div>
              <p className="mt-3">
                For new cities keep City ID (ID) value blank.
              </p>

              <div className="flex gap-5 items-center mt-5">
                <p className="font-semibold">Upload XLSX File:</p>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    name="photo"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <p className="text-[13px] mt-3">Maximum file size: 200 KB.</p>

              <div className="mt-5 flex items-center gap-4">
                <p className="font-semibold w-[200px]">Old Records:</p>
                <div>
                  <span>
                    {" "}
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Update If City ID value is present, else add new. City ID (ID) is available when you download cities from this portal."
                    />
                  </span>
                  <span>
                    {" "}
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Remove All Old Records and Add New from Excel"
                    />
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-5 justify-center">
                <Button type="submit" variant="contained">
                  Upload
                </Button>
                <Button type="submit" variant="outlined">
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UploadCities;

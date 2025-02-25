import { Box, Button, Card, CardContent, Container } from "@mui/material";
import React from "react";

const BulkUpdateUsers = () => {
  return (
    <>
      {""}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%]">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
            Bulk Update Users
            </h2>
            <hr />
            <div>
              <Container component="main">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <div>
                    <span>
                      You can download the sample excel file here. The order of
                      columns should be exactly as in
                    </span>
                    <span className="text-blue-400 ml-2">
                      {" "}
                      <a href="">sample file.</a>{" "}
                    </span>
                    <div>
                      <span className="font-semibold">
                        Columns in Excel File:{" "}
                      </span>
                      <span className="ml-2">Mobile, State, District, City</span>
                    </div>
                  </div>

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
                      <p className="text-[13px] mt-3">
                        Maximum file size: 200 KB.
                      </p>
                  

                  <div className="flex gap-3 mt-5 justify-center">
                    <Button type="submit" variant="contained">
                      Upload
                    </Button>
                    <Button type="submit" variant="outlined">
                      Cancel
                    </Button>
                  </div>
                </Box>
              </Container>
            </div>
          </CardContent>
        </Card>
      </div>

     
    </>
  );
};

export default BulkUpdateUsers;

"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  Grid,
  Box,
  Container,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const AddNewLanguage = () => {
  return (
    <>
      {""}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%]  w-[100%]">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3"> Add New Language</h2>
            <hr />
            <div>
              <Container component="main" className="mt-8">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="outlined-basic"
                        label="Language Name"
                        variant="outlined"
                        className="w-[100%]"
                      />
                    </Grid>
                  </Grid>
                  <div className="flex gap-3 mt-5 justify-center">
                    <Button type="submit" variant="contained">
                      Save
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

export default AddNewLanguage;

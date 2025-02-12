"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  TextField,
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import Link from "next/link";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CourseEdit = () => {
  const router = useRouter();

  return (
    <>
      <h2 className="font-semibold lg:text-[25px] mb-5"> Course Edit</h2>
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3"> Course Update</h2>
            <hr />
            <div>
              <Container component="main" className="">
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Category"
                        name="Category"
                        autoComplete="given-name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Course Name"
                        name="Course Name"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Course Code"
                        name="Course Code"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Module Name"
                        name="Module Name"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <div className="">
                        <span>
                          Tag <Checkbox {...label} /> Featured
                        </span>
                        <span className="block">
                          Portal Status <Checkbox {...label} /> Active on Portal
                        </span>
                        <span className="block">
                          Training Status <Checkbox {...label} /> Active in
                          Training
                        </span>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                        Course Display Image
                      </Typography>
                      <input
                        type="file"
                        accept="image/*"
                        name="photo"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>

                  <div className="flex gap-3 mt-10">
                    <Button type="submit" variant="contained">
                      Update
                    </Button>
                    <Link href="/coursesList">
                      <Button
                        type="submit"
                        variant="outlined"
                        onClick={() => router.back()}
                      >
                        Cancel
                      </Button>
                    </Link>
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

export default CourseEdit;

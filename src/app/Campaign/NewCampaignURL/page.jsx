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
import Link from "next/link";
import { useState } from "react";

const NewCampaignURL = () => {
  const [fileSize, setFileSize] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileSize(file.size);
    } else {
      setFileSize(null);
    }
  };
  return (
    <>
      {""}
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">New Campaign URL</h2>
      </div>

      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">New Campaign URL</h2>
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
                        label="Campaign Name"
                        name="Campaign Name"
                        autoComplete="given-name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Campaign Medium"
                        name="Campaign Medium"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Camaign Source"
                        name="Camaign Source"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Landing Page"
                        name="Landing Page"
                        autoComplete="family-name"
                      />
                    </Grid>
                  </Grid>

                  <div className="flex gap-3 mt-5">
                    <Button type="submit" variant="contained">
                      Generate Url
                    </Button>

                    <Link href="/">
                      <Button type="submit" variant="outlined">
                        Cancel
                      </Button>
                    </Link>
                  </div>

                  <Typography
                    className="text-[15px] text-gray-600"
                    variant="body1"
                    sx={{ mt: 5, mb: 2 }}
                  >
                    <div>
                      <b>Campaign Name</b>:{" "}
                      <span>
                        The individual campaign name. Ex: December Dealer
                        Training
                      </span>
                    </div>

                    <div className="mt-2">
                      <b>Campaign Medium</b>:{" "}
                      <span>
                        The advertising or marketing medium, for example: cpc,
                        banner, email, print, etc
                      </span>
                    </div>

                    <div className="mt-2">
                      <b>Campaign Source:</b>{" "}
                      <p>
                        Identify the advertiser, site, publication, etc. that is
                        sending traffic to your portal. For example Training
                        Registration Emailer, TimesofIndia 31st Dec Ad, XYZ Blog
                        Post, etc.
                      </p>
                    </div>
                  </Typography>
                </Box>
              </Container>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NewCampaignURL;

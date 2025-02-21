"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <>
      {""}
      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%]">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Upload Translations for English
            </h2>
            <hr />
            <Container component="main" className="mt-8">
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <p>
                  You can download the sample excel file here. The order of
                  columns should be exactly as in downloaded file. Existing
                  translations for this language will be deleted.
                </p>
                <div className="flex items-center gap-8 mt-5">
                  <span>
                    {" "}
                    <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                      Upload XLSX File:
                    </Typography>
                  </span>
                  <span>
                    <input
                      type="file"
                      accept="image/*"
                      name="photo"
                      style={{ width: "100%" }}
                    />
                  </span>
                </div>
                Maximum file size: 200 KB.
                <div className="flex gap-3 mt-5">
                  <Button type="submit" variant="contained">
                    Save
                  </Button>

                  <Button onClick={() => router.push("/")} variant="outlined">
                    Cancel
                  </Button>
                </div>
              </Box>
            </Container>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;

"use client";

import { Box, Card, CardContent, Container,Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const page = () => {
  return (
    <>
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">Translation</h2>
      </div>

      <div className="items-center justify-center flex">
        <Card className="lg:w-[70%]">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">
              Translation - English
            </h2>
            <hr />
            <Container component="main" className="mt-8">
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {/* Generating Sections Dynamically */}
                {Object.entries({
                  "Language Selection Page": [
                    "Welcome to www.apcolouracademy.in",
                    "Please select your preferred language",
                  ],
                  "Login / OTP Section": [
                    "Please enter your mobile number so that we can login to your profile",
                    "Mobile Number Verification",
                    "Enter your mobile number here to receive an OTP",
                    "Enter Mobile Number",
                    "Please enter your mobile number and click on NEXT to continue",
                    "Next",
                    "Hi",
                    "Help us verify your mobile number",
                    "We've sent a 4 digit OTP to your mobile number",
                    "Enter OTP",
                    "Please enter the OTP you have received to verify your account",
                    "Login",
                  ],
                  "Registration Section": [
                    "Hello there! Seems like you’re visiting us for the first time",
                    "Let’s create your account",
                    "Please enter the following details to make your profile and start your leaning journey",
                    "Name",
                    "Full name",
                    "State",
                    "City",
                    "I agree to the terms & conditions",
                    "Submit",
                  ],
                  "Category / Courses Section": [
                    "Easy Access",
                    "Anytime, anywhere – your courses are just a click away",
                    "Asian Paints Certification",
                    "Get certified for every completed course",
                    "Welcome",
                    "Click on any course to start your journey",
                    "Videos",
                    "Peers have successfully certified in this course",
                  ],
                  "Course Details / Assessment Section": [
                    "Course Completion Status",
                    "Assessment Pending",
                    "Start Assessment",
                    "Done",
                    "Now watching",
                    "Please Complete the previous video to watch the next video",
                    "Assessment",
                    "Submit",
                    "Congratulations",
                    "You have completed 100% of the course",
                    'Click "Start Assessment" to proceed further',
                    "You have scored",
                    "You can revisit the course to come back stronger and get certified",
                    "Revisit Course",
                    "Retake Assessment",
                  ],
                  Certification: [
                    "Certification",
                    "Congratulations!",
                    "You are now certified in",
                    "Download Certificate",
                    "Go back to courses",
                  ],
                  "Trainer & FAQs": [
                    "Call the Trainer",
                    "Call Now",
                    "All FAQs",
                  ],
                  "Profile Section": [
                    "Update Profile",
                    "Logout",
                    "Completed Certificates",
                    "Pending Assessment",
                    "Ongoing Courses",
                    "Number of videos watch or pending",
                    "Email",
                    "BP Number",
                  ],
                  "Feedback Section": [
                    "Q",
                    "FEEDBACK",
                    "YOUR FEEDBACK IS IMP",
                    "WAS THE COURSE CONTENT EASY TO UNDERSTAND?",
                    "Very Easy",
                    "Easy",
                    "Difficult",
                    "Not Understood",
                    "HOW DOES THE PROGRAM PACE SUIT YOU?",
                    "Very Comfortable",
                    "Comfortable",
                    "Not Comfortable",
                    "INTERESTED IN PHYSICAL TRAINING & NSDC CERTIFICATION?",
                    "Yes",
                    "No",
                  ],
                  Slider: [
                    "NAAM HOGA TOH KAAM HOGA",
                    "Paint your own success story with AP Colour Academy",
                  ],
                }).map(([section, items]) => (
                  <div key={section}>
                    <div className="text-xl text-blue-600 mt-8">{section}</div>
                    {items.map((item, idx) => (
                      <div className="py-3" key={idx}>
                        <div className="py-2">{item}:</div>
                        <TextField
                          placeholder="Enter English Translation"
                          fullWidth
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </Box>

              <div className="flex gap-3 mt-5">
                    <Button type="submit" variant="contained">
                      Save
                    </Button>
                  </div>
            </Container>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;

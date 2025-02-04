'use client'

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, TextField, Grid, Box, Container, Typography } from '@mui/material';


const page = () => {

  return (
    <>
      <h2 className='font-semibold lg:text-[25px] mb-5'>Update Profile</h2>
      <div className='items-center justify-center flex'>
        <Card className='lg:w-[70%] '>
          <CardContent>
            <h2 className='font-semibold text-[20px] mb-3'>My Profile</h2>
            <hr />
            <div >
              <Container component="main" className=''>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Full Name"
                        name="Full Name"
                        autoComplete="given-name"
                        autoFocus
                        value="Tushar Patle"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Email ID (Login ID)"
                        name="Email"
                        autoComplete="family-name"
                        value="test@gmail.com"

                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Mobile Number"
                        name=""
                        autoComplete="family-name"
                        value="7888010097"

                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        label="Address"
                        name="Address"
                        autoComplete="family-name"
                        value="Nagpur"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
                       Profile Picture
                      </Typography>
                      <input
                        type="file"
                        accept="image/*"
                        name="photo"
                        style={{ width: '100%' }}
                      />
                    </Grid>
                  </Grid>

                  <div className="flex gap-3 mt-5">
                    <Button
                      type="submit"
                      variant="contained"

                    >
                      Save
                    </Button>

                    <Button
                      type="submit"
                      variant="outlined"
                    >
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
  )
}

export default page
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Grid, Card, CardContent, Typography, Avatar, Grow, Zoom, Fade } from '@mui/material';
import PhoneLogo from './Assest/Static/PhoneLogo.gif';
import EmailLogo from './Assest/Static/EmailLogo.gif';
import LinkedinLogo from './Assest/Static/LinkedinLogo.png';
import GitLogo from './Assest/Static/GitLogo.gif';

const ContactCard = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      console.log('Email:', email);
      console.log('Message:', message);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <Fade in={true} timeout={1000}>
        <Card
          sx={{
            borderRadius: 4,
            position: 'relative',
            padding: 4,
            backgroundColor: '#fff',
            boxShadow: 3,
            overflow: 'visible',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-5px',
              left: '-5px',
              right: '-5px',
              bottom: '-5px',
              background: 'linear-gradient(45deg, #3FFF00, #7A1CAC)',
              zIndex: -1,
              borderRadius: 4,
            }
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Grow in={true} timeout={1500}>
                <CardContent sx={{ color: '#000', textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
                    Get in Touch
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: 4 }}>
                    I'm always open to discuss about the project and to talk about new ideas. Let’s connect!
                  </Typography>

                  <Zoom in={true} timeout={2000}>
                    <Box sx={{ marginBottom: 3 }}>
                      <Avatar
                        src={PhoneLogo}
                        alt="Phone Icon"
                        sx={{ width: 50, height: 50, margin: '0 auto', backgroundColor: '#fff' }}
                      />
                      <Typography variant="h6" sx={{ marginTop: 1, color: '#7A1CAC' }}>
                        +91 75581 80587
                      </Typography>
                    </Box>
                  </Zoom>

                  <Zoom in={true} timeout={2200}>
                    <Box sx={{ marginBottom: 3 }}>
                      <Avatar
                        src={EmailLogo}
                        alt="Email Icon"
                        sx={{ width: 50, height: 50, margin: '0 auto', backgroundColor: '#fff' }}
                      />
                      <Typography variant="h6" sx={{ marginTop: 1, color: '#7A1CAC' }}>
                        ramyagowsi2015@gmail.com
                      </Typography>
                    </Box>
                  </Zoom>

                  <Zoom in={true} timeout={2400}>
                    <Box sx={{ marginBottom: 3 }}>
                      <Avatar
                        src={LinkedinLogo}
                        alt="LinkedIn Icon"
                        sx={{ width: 50, height: 50, margin: '0 auto', backgroundColor: '#fff' }}
                      />
                      <Typography variant="h6" sx={{ marginTop: 1, color: '#3FFF00' }}>
                        <a
                          href="https://www.linkedin.com/in/ramya-s-30936b245/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#7A1CAC', textDecoration: 'none' }}
                        >
                          LinkedIn Profile
                        </a>
                      </Typography>
                    </Box>
                  </Zoom>

                  <Zoom in={true} timeout={2600}>
                    <Box>
                      <Avatar
                        src={GitLogo}
                        alt="GitHub Icon"
                        sx={{ width: 50, height: 50, margin: '0 auto', backgroundColor: '#fff' }}
                      />
                      <Typography variant="h6" sx={{ marginTop: 1, color: '#3FFF00' }}>
                        <a
                          href="https://github.com/Ramya200312"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#7A1CAC', textDecoration: 'none' }}
                        >
                          GitHub Profile
                        </a>
                      </Typography>
                    </Box>
                  </Zoom>
                </CardContent>
              </Grow>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grow in={true} timeout={1800}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 3, color: '#000' }}>
                    Send me a message
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3,
                      backgroundColor: '#fff',
                      padding: 4,
                      borderRadius: 4,
                      boxShadow: 2,
                    }}
                  >
                    <TextField
                      label="Your Email"
                      variant="outlined"
                      value={email}
                      onChange={handleEmailChange}
                      error={!!emailError}
                      helperText={emailError}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      fullWidth
                    />
                    <Button
                      type="submit"
                      sx={{
                        backgroundColor: '#3FFF00',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#4A0072',
                        },
                        padding: '10px 20px',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                      }}
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Grow>
            </Grid>
          </Grid>
        </Card>
      </Fade>
    </Container>
  );
};

export default ContactCard;

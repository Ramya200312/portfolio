import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import Pic1 from './Assest/Static/Abimg.png';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa6"; 
import { TiTick } from "react-icons/ti";
import Demo from './Demo';
import { useNavigate } from 'react-router-dom';

function AbTop() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/projects');
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideLeft {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideRight {
            0% {
              opacity: 0;
              transform: translateX(30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            60% {
              opacity: 1;
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      <Box
        sx={{
          background: 'linear-gradient(105deg, #c77dff 50%, #e0aaff 50%)',
          padding: 5,
          borderRadius: 2,
          boxShadow: 3,
          color: 'white',
          maxWidth: 1100,
          margin: 'auto',
          marginTop: 10,
          marginBottom: 12,
          animation: 'fadeIn 1.5s ease-in-out',
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 3, textAlign: 'justify', animation: 'slideLeft 2s ease-out' }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: "#000" }}>
                -About Me
              </Typography>

              <Typography variant="h3" component="h1" sx={{ marginBottom: 2, color: "#000" }}>
                Who Is <span style={{ color: '#3FFF00' }}>Ramya?</span>
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Hello, everyone! I'm <span style={{ color: '#3FFF00' }}>Ramya</span>, hailing from the culturally rich city of <span style={{ color: '#7A1CAC' }}>Tirunelveli, India</span>.
                My journey into the world of technology began with a passion for <span style={{ color: '#7A1CAC' }}>creativity</span> and <span style={{ color: '#7A1CAC' }}>innovation</span>, which naturally led me to pursue a career as a <span style={{ color: '#3FFF00' }}>Frontend Developer</span>.
              </Typography>

              <Typography variant="h5" component="h1" sx={{ marginBottom: 2, color: "#000" }}>
                My Aspirations
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                While frontend development is my primary focus, I have a deep curiosity for the entire spectrum of web development.
                Recently, I embarked on a new journey to expand my skills in backend development by learning <span style={{ color: '#7A1CAC' }}>Node.js</span>.
              </Typography>

              <Typography variant="h5" component="h1" sx={{ marginBottom: 2, color: "#000" }}>
                Beyond Coding            
              </Typography>
              <Typography variant='body1' sx={{ color: "#fff" }}>
                Coding is not just a profession for me; it's a <span style={{ color: '#7A1CAC' }}>passion</span>. But there's more to me than just lines of code.
                I have a variety of interests that keep my creativity and analytical thinking sharp.
              </Typography><br />

              <Box component="" sx={{ paddingLeft: 3, marginBottom: 2 }}>
                <MdOutlineStarPurple500 style={{ color: '#3FFF00' }} /> Playing <span style={{ color: '#7A1CAC' }}>Chess</span> and <span style={{ color: '#7A1CAC' }}>Shuttle</span> <br />
                <MdOutlineStarPurple500 style={{ color: '#3FFF00' }} /> Writing <span style={{ color: '#7A1CAC' }}>Poem's (Tamil)</span><br />
                <MdOutlineStarPurple500 style={{ color: '#3FFF00' }} /> Writing <span style={{ color: '#7A1CAC' }}>Code's</span> in <span style={{ color: '#3FFF00' }}>Html and Css</span>
              </Box>

              <Typography variant="h5" sx={{ marginBottom: 2, color: "#000" }}>
                Projects Completed
              </Typography>
              <Typography variant='body1' sx={{ color: "#fff" }}>
                I believe that practical experience is the best teacher, 
                and I have completed several projects that have significantly contributed to my learning and growth.
              </Typography>

              <Box component="" sx={{ paddingLeft: 3, marginBottom: 2 }}>
                <TiTick style={{ color: '#7A1CAC' }} /> 3 Projects Using <span style={{ color: '#3FFF00' }}>Html, Css, Js</span><br />
                <TiTick style={{ color: '#7A1CAC' }} /> 1 Project Using <span style={{ color: '#3FFF00' }}>React.Js (MUI)</span>
              </Box><br />

              <Button 
                variant='contained' 
                onClick={handleClick1}  
                sx={{ 
                  backgroundColor: '#3FFF00', 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#4A0072', 
                  },
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  animation: 'bounceIn 2s',
                }}
              >
                Projects &nbsp;<FaHandPointRight />
              </Button>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component="img"
              sx={{
                width: '90%',
                height: '60%',
                objectFit: 'cover',
                boxShadow: 'none',
                marginLeft: 6,
                border: "none", 
                animation: 'slideRight 2s ease-out',
              }}
              alt="Your Image"
              src={Pic1} 
            />
          </Grid>
        </Grid>
      </Box>
      <h2 style={{textAlign:"center"}}>Skills</h2>
      <Demo />
    </>
  );
}

export default AbTop;

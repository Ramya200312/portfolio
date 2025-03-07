import './Middle.css';
import HomeLogo from './Assest/Static/HomeLogo.png';
import { Button, Box, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Middle() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)'); // Detect if screen is mobile

  const handleClick = () => {
    navigate('/resume');
  };

  return (
    <Box sx={{ paddingTop: isMobile ? '40px' : '64px' }}>
      <div id="head1" className={isMobile ? 'mobile' : ''}>
        <div className="content">
          <p className="greeting">-Hello</p>
          <h1 className="headline">
            I'M <span className="highlight">RAMYA</span><br />
            FRONTEND <span className="highlight">DEVELOPER /</span><br />
            REACTJS <span className="highlight">DEVELOPER</span>
          </h1>
          <Button 
            variant='contained'
            className="resume-btn"
            onClick={handleClick}
            sx={{ 
              backgroundColor: '#3FFF00', 
              color: 'white',
              '&:hover': {
                backgroundColor: '#4A0072', 
              },
              padding: isMobile ? '8px 16px' : '10px 20px',
              fontSize: isMobile ? '1rem' : '1.2rem',
            }}
          >
            Resume
          </Button>
        </div>
        <img src={HomeLogo} className="profile-img" alt="Profile" id="flip"/>
      </div>
    </Box>
  );
}

export default Middle;

import './Middle.css';
import HomeLogo from './Assest/Static/HomeLogo.png';
import { Button ,Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Middle() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resume');
  };
  return (
    <Box sx={{ paddingTop: '64px' }}>
    <div id="head1">
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
          padding: '10px 20px',
          borderRadius: '25px',
          fontWeight: 'bold',
        }}
        >Resume</Button>
      </div>
      <img src={HomeLogo} className="profile-img" alt="Profile" id="flip"/>
    </div>
    </Box>
  );
}

export default Middle;

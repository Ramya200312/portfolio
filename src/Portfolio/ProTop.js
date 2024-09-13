import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import './ProTop.css';

const ProTop = ({ image, heading1, content, Link, endimg }) => {
  return (
    <Box className="custom-card" style={{ borderRadius: 40, marginBottom: 10, marginTop: 130 }}>
      <Card>
        <CardMedia
          className="custom-card-media"
          component="img"
          image={image}
          alt={heading1}
        />
        <CardContent className="custom-card-content">
          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: "center" }}>
            {heading1}
          </Typography>
        </CardContent>
        <Box className="hover-content" sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            {content}
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <img src={endimg} alt="Button Icon" style={{ width: 50, height: 50 }} /> 
          </Box>
          <Button 
            href={Link} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ backgroundColor: '#3FFF00', color: 'white',
              '&:hover': {
                backgroundColor: '#008000', 
              }, 

            }}
          >
            Show
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ProTop;

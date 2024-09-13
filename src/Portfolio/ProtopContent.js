import ProTop from "./ProTop";
import Grid from '@mui/material/Grid';
import img1 from './Assest/Static/SS4.png';
import buttonImage from './Assest/Static/buttonImage.gif'; 
import img2 from './Assest/Static/SS1.png';
import img3 from './Assest/Static/SS2.png';
import img4 from './Assest/Static/SS3.png';



function ProtopContent() {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <ProTop
            image={img1}
            heading1="Text To Speech Convertor"
            content="The 'Text to Speech Converter' project is a web-based application developed using HTML, CSS, and JavaScript. This tool allows users to input text and convert it into spoken words. The user interface is designed to be simple and intuitive, with an input field where the user can type or paste the text they want to convert. Once the text is entered, the user can click a button to hear the text read aloud."
            Link="https://text-to-speech-covertor.vercel.app"
            endimg={buttonImage} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProTop
            image={img2}
            heading1="Image Search Engine"
            content="The 'Image Search Engine' project is a web application developed using HTML, CSS, and JavaScript that allows users to search for images based on specific keywords or queries. The user interface includes a search bar where users can input their search terms. Upon submitting the query, the application fetches and displays relevant images, typically using an API to retrieve images from an online source."
            Link="https://imagrify1.vercel.app/"
            endimg={buttonImage} 

          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProTop
            image={img3}
            heading1="Notes"
            content="The 'Notes' project is a web-based application developed using HTML, CSS, and JavaScript that allows users to create, manage, and store notes directly in their browser. The user can input text into a note-taking area on the webpage, and these notes are saved using the browser's local storage feature. This ensures that the notes persist even after the page is refreshed or the browser is closed and reopened."
            Link="https://notes-webpage.vercel.app"
            endimg={buttonImage} 

          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProTop
            image={img4}
            heading1="Thozhil"
            content="The 'Thozhil' project is a website clone developed using React.js, leveraging Material-UI (MUI) for the component library and CSS for styling. This project replicates the functionality and design of an existing website, showcasing the ability to recreate complex user interfaces and interactions using modern front-end technologies."
            Link="https://thozhilclone.vercel.app/"
            endimg={buttonImage} 
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ProtopContent;
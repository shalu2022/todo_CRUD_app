import { createTheme } from "@mui/material/styles";

const StyledFormTheme = createTheme({
    palette: {
        primary: {
          main: '#AC7088',
        },
        secondary :{
            main: '#EAE3D2',
        }
      },
    shape: {
        borderRadius: "10px"
    }
    });

export { StyledFormTheme };

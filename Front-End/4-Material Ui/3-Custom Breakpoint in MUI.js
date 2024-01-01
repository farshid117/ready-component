
//todo Custom Breakpoint:
// fix you can also specify your own custom breakpoints 
//? and use theme as key when defining the breakpoint object

import {createTheme, ThemeProvider} from "@mui/material"
const customTheme = () =>{

  const theme = createTheme({
    breakpoints:{
      value:{
        mobile: 0 ,
        tablet: 576 ,
        labtop: 768 ,
        desktop: 992 ,
        wideDesktop: 1200,
        widerDesktop: 1400
      }
    }
  })
return (

  <ThemeProvider theme={theme} >
    <Box
      sx={{
        width: {
          mobile: 100,
          tablet: 300
        }
      }}
    ></Box>
  </ThemeProvider>

)
}

export default customTheme
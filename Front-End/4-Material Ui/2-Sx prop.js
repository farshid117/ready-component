import { Box } from "@mui/material"
//todo Array Value
// TODO:  Array types are usful when you want to partially override some styles in the former indexof 

<Box
  sx={[
    {
      '&:hover': {
        color: 'red',
        bgColor: 'white',
      }
    },
    foo & {
      '&:hover': { bgColor: 'grey' }
    },
    bar & {
      '&:hover': { bgColor: 'yellow' }

    }
  ]}
>
...

</Box>


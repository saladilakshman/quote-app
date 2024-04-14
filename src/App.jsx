import { useEffect, useState } from 'react';
import './App.css';
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import { useQuote } from './Apihook';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function App() {
  const [quoteurl, setQuoteurl] = useState(`https://dummyjson.com/quotes/${Math.floor(Math.random() * 1000)}`)
  const { quote, bgColor } = useQuote(quoteurl);
  const getRandomQuote = () => {
    setQuoteurl(`https://dummyjson.com/quotes/random?_=${Math.random()}`);
  }
  return (
    <Box sx={{ backgroundColor: bgColor, height: '100lvh', width: '100%' }}>
      <Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: '100svh', paddingInline: { xs: 2, lg: '' } }}>
        <Paper sx={{ width: { lg: 600, sm: 400, xs: '100%' }, paddingInline: 1, paddingBlock: 1 }} elevation={4}>
          <Typography variant="h5" sx={{
            color: '#252525',
            textAlign: 'baseline',
            fontSize: {
              xs: 18,
              lg: 28
            }
          }}>{quote.quote}</Typography><br />
          <Typography variant="h6" sx={{ color: '#252525', textAlign: 'end', fontSize: { xs: 16, lg: 25 } }}>- {quote.author}</Typography>
        </Paper>
        <Button variant="contained" color="inherit" size="small" sx={{ justifySelf: 'end', marginBlockStart: 5, fontFamily: 'helvetica' }} onClick={getRandomQuote}>Generate new quote</Button>
      </Stack>
    </Box>

  )
}


export default App;

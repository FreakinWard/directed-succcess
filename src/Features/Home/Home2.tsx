import { Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'components/Main';

import Container from '@/components/Container';

import Hero from './components/Hero';
import Services from './components/Services';

export default function Home2() {
  const theme = useTheme();

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Hero />
        <Container>
          <Services />
        </Container>
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >
          <Container maxWidth={600}>{/*<QuickStart />*/}</Container>
          <Container>{/*<Features />*/}</Container>
          <Container>{/*<Benefits />*/}</Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            sx={{
              width: '100%',
              marginBottom: theme.spacing(-1),
            }}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
        <Container>{/*<GetStarted />*/}</Container>
      </Main>
    </Box>
  );
}

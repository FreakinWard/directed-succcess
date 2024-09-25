import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import useTeamArea from '../../hooks/useTeamArea';

export default function Team() {
  const { data: teamArea } = useTeamArea();
  const theme = useTheme();

  if (!teamArea) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          height: '50%',
          zIndex: 1,
          top: 0,
          right: 0,
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box zIndex={2} position={'relative'}>
        <Box marginBottom={4}>
          <Typography variant={'h4'} gutterBottom align={'center'} sx={{ fontWeight: 700 }}>
            {teamArea.title}
          </Typography>
          <Typography
            variant={'h6'}
            component={'p'}
            color={'text.secondary'}
            align={'center'}
            data-aos="fade-up"
          >
            {teamArea?.paragraph}
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {teamArea.teamMembers.map((teamMember, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={i}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box component={Card} boxShadow={0} bgcolor={'transparent'}>
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={teamMember.image.url}
                />
                <CardContent>
                  <ListItemText
                    primary={teamMember.name}
                    secondary={teamMember.role}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                  <Box marginTop={1}>
                    <IconButton aria-label="facebook" size={'small'} color={'primary'}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="twitter" size={'small'} color={'primary'}>
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

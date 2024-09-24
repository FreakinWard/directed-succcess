import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import useServiceArea from '../../hooks/useServiceArea';

export default function Services() {
  const { data: serviceArea } = useServiceArea();
  const theme = useTheme();

  if (!serviceArea) return null;

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            {serviceArea?.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align="center"
          >
            {serviceArea?.paragraph}
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: 'center',
        }}
      >
        {serviceArea?.services.map((service, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  <Image
                    src={service.image.url}
                    width={service.image.width}
                    height={service.image.height}
                    alt={service.image.alternateText}
                  />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }} align="center">
                  {service.name}
                </Typography>
                <Typography align="center" color="text.secondary">
                  {service.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

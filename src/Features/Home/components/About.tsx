import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import useAbout from '../../hooks/useAbout';

const ParagraphSection = ({ children, ...rest }) => (
  <Grid item xs={6} {...rest} data-aos={'fade-up'} data-aos-offset={100} data-aos-duration={600}>
    {children}
  </Grid>
);

export default function About() {
  const { data: about } = useAbout();

  if (!about) return null;

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid
        xs={12}
        spacing={0}
        justifyContent="center"
        direction="column"
        alignItems="center"
        container
      >
        <Grid item>
          <Typography variant="h2" textAlign="center">
            About Title
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          src={about?.image.url}
          width={about?.image.width}
          height={about?.image.height}
          alt={about?.image.alternateText}
        />
      </Grid>
      <Grid
        container
        spacing={2}
        xs={12}
        md={6}
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Grid item xs={12}>
          {about.secondaryTitle ? <h3>{about.secondaryTitle}</h3> : null}
        </Grid>

        <ParagraphSection data-aos-delay={100}>{about?.paragraph}</ParagraphSection>
        <ParagraphSection data-aos-delay={200}>{about?.secondaryParagraph}</ParagraphSection>
        {/*</Box>*/}
      </Grid>
    </Grid>
  );
}

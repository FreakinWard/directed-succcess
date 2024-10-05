import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import useAbout from '../../hooks/useAbout';

const ParagraphSection = ({ children }) => (
  <Grid item xs={6}>
    {children}
  </Grid>
);

export default function About() {
  const { data: about } = useAbout();

  if (!about) return null;

  const debug = true;
  // const debug = false;

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        justifyContent: 'center',
        border: debug ? '1px solid red' : undefined,
      }}
      alignItems="center"
    >
      <Grid
        xs={12}
        spacing={0}
        justifyContent="center"
        direction="column"
        alignItems="center"
        container
        sx={{
          border: debug ? '1px solid red' : undefined,
        }}
      >
        <Grid item>
          <Typography variant="h2" textAlign="center">
            About Title
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          border: debug ? '1px solid red' : undefined,
        }}
      >
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
        // direction="row"
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          border: debug ? '1px solid red' : undefined,
        }}
      >
        <Grid item xs={12}>
          {about.secondaryTitle ? <h3>{about.secondaryTitle}</h3> : null}
        </Grid>
        <ParagraphSection>{about?.paragraph}</ParagraphSection>
        <ParagraphSection>{about?.secondaryParagraph}</ParagraphSection>
      </Grid>
    </Grid>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BackupIcon from '@mui/icons-material/Backup';
import GroupsIcon from '@mui/icons-material/Groups';


const word = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Choose suitable time for sessions',
    description:
      'Unlock the full potential of your business with our custom software solutions. Whether you need a bespoke application, enterprise software, or a specialized tool, our team will work closely with you to deliver a product that exceeds your expectations.',
    imageLight: 'url("/hero.jpg")',
    imageDark: 'url("/hero.jpg")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Get the best instructor',
    description:
      'Stay ahead in the mobile-first world with our comprehensive mobile app development services. From concept to deployment, we create seamless and engaging mobile experiences for iOS and Android platforms.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Learn at your pace',
    description:
      'Build a strong online presence with our expert web development services. We design and develop responsive, user-friendly websites and web applications that drive traffic and conversions.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <BackupIcon />,
    title: 'Make good progress',
    description:
      'Embrace the power of the cloud with our scalable and secure cloud solutions. We help you migrate, manage, and optimize your cloud infrastructure to enhance performance and reduce costs.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <DesignServicesIcon />,
    title: 'Learn at your own convenience',
    description:
      'Enhance user satisfaction with our intuitive UI/UX design services. Our designers create visually stunning and easy-to-navigate interfaces that improve user engagement and loyalty.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: < GroupsIcon />,
    title: 'Consulting and Strategy',
    description:
      'Leverage our expertise to develop a robust digital strategy. Our consulting services provide you with insights and recommendations to streamline your processes, improve efficiency, and achieve your business goals.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
          At Eazy-Learn, We do not just teach.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          We are dynamic team of creative design and development.We have years of experience for helping consulting services
and business solutions and best protect.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {word.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  {/* <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography> */}
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
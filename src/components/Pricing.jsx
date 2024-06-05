import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  {
    title: 'Dedication',
    price: 'Dedication',
    description: [
      'Our course, subject and skill.',
    ],
    buttonText: 'Learn More',
    buttonVariant: 'outlined',
  },
  {
    title: 'Experience',
    price: 'Experience',
    description: [
      'We offer the best teaching experience',
    ],
    buttonText: 'Learn More',
    buttonVariant: 'outlined',
  },
  {
    title: 'Passion',
    price: 'Passion',
    description: [
      'Our passion is to teach and assist',
    ],
    buttonText: 'Learn More',
    buttonVariant: 'outlined',
  },
  // {
  //   title: 'Ecommerce',
  //   price: 'Inventory',
  //   description: [
  //     'Inventory',
  //     'Retail',
  //   ],
  //   buttonText: 'Learn More',
  //   buttonVariant: 'outlined',
  // },
  // {
  //   title: 'Real Estate',
  //   price: 'Investments',
  //   description: [
  //     'Blockchain',
  //     'Investments',
  //   ],
  //   buttonText: 'Learn More',
  //   buttonVariant: 'outlined',
  // },
  // {
  //   title: 'Professional',
  //   subheader: 'Recommended',
  //   price: '15',
  //   description: [
  //     '20 users included',
  //     '10 GB of storage',
  //     'Help center access',
  //     'Priority email support',
  //     'Dedicated team',
  //     'Best deals',
  //   ],
  //   buttonText: 'Start now',
  //   buttonVariant: 'contained',
  // },
  // {
  //   title: 'Education',
  //   price: 'E-learning',
  //   description: [
  //     'Languages',
  //     'E-learning',
  //   ],
  //   buttonText: 'Learn More',
  //   buttonVariant: 'outlined',
  // },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Our Goal
        </Typography>
        <Typography variant="body1" color="text.secondary">
        At Eazy-Learn, we do not just know the importance of learning; we know the importance of how you learn. Our goal is to help you learn with ease, at your own pace. We want you to always look forward to your sessions.
        </Typography>
      </Box>
      <Grid container spacing={1} alignItems="space-between" justifyContent="space-between">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Professional' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Professional' ? 'primary.main' : undefined,
                background:
                  tier.title === 'Professional'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: tier.title === 'Professional' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="caption">
                    #{tier.price}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: tier.title === 'Professional' ? 'grey.50' : undefined,
                  }}
                >
                  <Typography component="h5" variant="h5">
                   {tier.title}
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'Professional'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Professional' ? 'grey.200' : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
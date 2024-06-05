import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
    marginRight: 2
};



function AppAppBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <img
                                src="https://eazy-learn.com/eazylogo.png"
                                style={logoStyle}
                                alt="logo of sitemark"
                            />
                            {/* <Typography variant="h5" color="text.primary" sx={{ mr: 5, ml: 2 }}>
                                Bazenga Digital
                            </Typography> */}
                            <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: "center" } }}>
                                {/* <MenuItem
                                    onClick={() => scrollToSection('features')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        About Us
                                    </Typography>
                                </MenuItem> */}
                                <MenuItem
                                    onClick={() => scrollToSection('highlights')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                       About Us
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('pricing')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Offers
                                    </Typography>
                                </MenuItem>
                                {/* <MenuItem
                                    onClick={() => scrollToSection('testimonials')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Testimonials
                                    </Typography>
                                </MenuItem> */}
                                <MenuItem
                                    onClick={() => scrollToSection('faq')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Courses
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                            {/* <Button
                                color="primary"
                                variant="text"
                                size="small"
                                component="a"
                                href="/login"
                            target="_blank"
                            >
                                Contact Us
                            </Button> */}
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                component="a"
                                href="/contact"
                            // target="_blank"
                            >
                                Book A Class
                            </Button>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                        {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection('features')}>
                                        Features
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('testimonials')}>
                                        Testimonials
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('highlights')}>
                                        Highlights
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('pricing')}>
                                        Pricing
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="a"
                                            href="/register"
                                            target="_blank"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            component="a"
                                            href="/login/"
                                            target="_blank"
                                            sx={{ width: '100%' }}
                                        >
                                            Sign in
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppAppBar;
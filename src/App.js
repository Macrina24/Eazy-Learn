import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}

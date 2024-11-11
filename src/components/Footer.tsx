import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" className="bg-slate-800 mt-6 text-white py-6">
      <Container maxWidth="lg">
        <Box className="flex justify-between items-center flex-wrap">
          <Box className="text-center sm:text-left">
            <Typography variant="h6">Sabores del Caribe</Typography>
            <Typography variant="body2" className="mt-1">
              Descubre los auténticos sabores del Caribe.
            </Typography>
          </Box>
          <Box className="text-center sm:text-right">
            <Typography variant="body2" className="mt-1">
              © {new Date().getFullYear()} Sabores del Caribe. Todos los
              derechos reservados.
            </Typography>
            <Box className="flex justify-center sm:justify-end mt-2">
              <Link href="#" color="inherit" className="ml-2">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" color="inherit" className="ml-2">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" color="inherit" className="ml-2">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" color="inherit" className="ml-2">
                <i className="fab fa-tripadvisor"></i>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

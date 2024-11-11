import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  Star,
} from "@mui/icons-material";

const Informacion = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        Sabores del Caribe
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        ¡Descubre los auténticos sabores del Caribe!
      </Typography>

      <Grid container spacing={4} style={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={6}>
          <Card className="p-6 bg-verde-menta">
            <Typography variant="h4" gutterBottom>
              Contacto
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Phone style={{ marginRight: "8px" }} />
              <Typography variant="body1">+53 123 456 789</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Email style={{ marginRight: "8px" }} />
              <Typography variant="body1">
                contacto@saboresdelcaribe.com
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOn style={{ marginRight: "8px" }} />
              <Typography variant="body1">
                Calle 123, La Habana, Cuba
              </Typography>
            </Box>
            <Typography variant="h4" gutterBottom style={{ marginTop: "2rem" }}>
              Redes Sociales
            </Typography>
            <Box display="flex" alignItems="center">
              <Facebook style={{ fontSize: "40px", marginRight: "8px" }} />
              <Twitter style={{ fontSize: "40px", marginRight: "8px" }} />
              <Instagram style={{ fontSize: "40px", marginRight: "8px" }} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="p-6 bg-verde-menta">
            <Typography variant="h4" gutterBottom>
              Valoraciones
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Star style={{ color: "gold", marginRight: "8px" }} />
              <Star style={{ color: "gold", marginRight: "8px" }} />
              <Star style={{ color: "gold", marginRight: "8px" }} />
              <Star style={{ color: "gold", marginRight: "8px" }} />
              <Star style={{ color: "gold", marginRight: "8px" }} />
              <Typography variant="body1" style={{ marginLeft: "8px" }}>
                5.0 basado en 200 opiniones
              </Typography>
            </Box>
            <Typography variant="body1">
              "Un lugar espectacular con sabores auténticos y un ambiente
              acogedor. ¡Definitivamente recomendado!"
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
              "La mejor experiencia culinaria en La Habana. Servicio de primera
              y comidas deliciosas."
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
              "Un viaje gastronómico al Caribe sin salir de la ciudad.
              ¡Imperdible!"
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Contáctanos
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField required fullWidth label="Nombre" margin="normal" />
            <TextField
              required
              fullWidth
              label="Correo Electrónico"
              type="email"
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Mensaje"
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Informacion;

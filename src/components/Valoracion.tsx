import { Box } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface valor {
  valoracion: number;
}

const Valoracion = ({ valoracion }: valor) => {
  return (
    <Box>
      {valoracion === 5 && (
        <Box>
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
        </Box>
      )}
      {valoracion === 4 && (
        <Box>
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
        </Box>
      )}
      {valoracion === 3 && (
        <Box>
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
        </Box>
      )}
      {valoracion === 2 && (
        <Box>
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
        </Box>
      )}

      {valoracion === 1 && (
        <Box>
          <StarIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
          <StarBorderIcon style={{ color: "gold", marginRight: "8px" }} />
        </Box>
      )}
    </Box>
  );
};

export default Valoracion;

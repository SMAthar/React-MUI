import React from "react";
import { Typography } from "@mui/material";

const MUITypograhy = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        h1 Heading
      </Typography>
      {/* gutterBottom will give bottom margin; margin size will depend on varient*/}
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3" component="h1">
        h3 Heading
      </Typography>
      {/* component will change the semantic element of typography*/}
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6" gutterBottom>
        h6 Heading
      </Typography>
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        perspiciatis vero consequuntur ab perferendis consequatur, voluptatem
        cum, explicabo reprehenderit nulla fugiat, eaque velit labore sint nam
        dicta adipisci delectus et?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus,
        magnam dignissimos ab reprehenderit illo, repellat aut provident velit
        architecto accusantium recusandae distinctio atque ad dolor dolore
        corporis aperiam voluptatem.
      </Typography>
    </div>
  );
};

export default MUITypograhy;

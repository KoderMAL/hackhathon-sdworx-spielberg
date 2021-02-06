import React from "react";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia
} from "@material-ui/core";
import { Star as StarIcon } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors/index";
import useStyles from "./styles";

//components
import { Typography, Chip } from "../../components/Wrappers";

//products array
import { rows } from "./mock";

const Product = () => {

  const classes = useStyles();


  return (
    <>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Box display={"flex"} flexWrap={"wrap"}>
            <Grid container item spacing={3}>
              {rows.map(c => (
                <Grid item xs={12} md={3} key={c.id}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={c.img}
                        title={c.title}
                      >
                        {c.id % 2 ? (
                          <Chip label={"New"} color={"success"} />
                        ) : ""}
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {c.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text"
                          colorBrightness={"secondary"}
                          component="p"
                        >
                          {c.subtitle}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{ padding: 16 }}>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems="center"
                        width={"100%"}
                      >
                        <Typography weight={"bold"}>{c.price} cheers</Typography>
                  
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;

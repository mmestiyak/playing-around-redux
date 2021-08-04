import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions/shoppingActions';
import { IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    marginBottom: '3rem',
  },
  media: {
    width: '12rem',
    height: 'auto',
  },
});

export default function SingleProduct(props) {
  const { id, title, description, price, image, quantity } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div style={{ display: 'flex' }}>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions style={{ justifyContent: 'flex-end' }}>
        <label htmlFor="quantity">Quantity</label>
        <input
          onChange={(e) => {
            actions.adjustQuantity(id, e.target.value)(dispatch);
          }}
          min="0"
          type="number"
          value={quantity}
          name="quantity"
          id=""
        />
        <IconButton
          onClick={() => {
            actions.removeItem(id)(dispatch);
          }}
          variant="contained"
          color="secondary"
        >
          <HighlightOffIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

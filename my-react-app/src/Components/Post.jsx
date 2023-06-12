import { CheckBox, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react' 

const Post = () => {      
  return (
    <div>
      <Card sx={{margin:5}}> 
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"> 
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"> 
            <MoreVert /> 
          </IconButton>
        }
        title="John Doe" 
        subheader="September 14, 2023" 
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://img.freepik.com/free-photo/vacation-wonder-fresh-trees-waterfall-outdoor_1417-1104.jpg?w=2000" 
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <CheckBox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} /> 

        </IconButton>
        <IconButton aria-label="share">
          <Share /> 
        </IconButton>
      </CardActions>
    </Card>   
    </div>
  )
}

export default Post 
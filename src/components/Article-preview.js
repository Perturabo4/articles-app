import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ArticlePreview({ id, title, imageUrl, summary }) {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }} style={{ height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt="Article preview"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/api/${id}`}>View</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

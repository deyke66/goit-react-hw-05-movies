import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';

const TrendingList = ({ films, location }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {films.map(i => (
            <Grid key={i.id} lg={3} md={4} sm={6} xs={12}>
              <Link state={{ from: location }} to={`/movies/${i.id}`}>
                <Card sx={{ maxWidth: 365 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="450"
                      image={`https://image.tmdb.org/t/p/w200/${i.poster_path}`}
                      alt={i.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {i.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {i.overview}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TrendingList;

TrendingList.propTypes = {
  films: PropTypes.array,
  location: PropTypes.object,
};

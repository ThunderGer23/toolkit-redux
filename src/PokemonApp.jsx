import { CatchingPokemon, ExpandMoreOutlined} from '@mui/icons-material'
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Collapse, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PokemonApp = () => {

  const dispatch = useDispatch()
  const {isLoading, pokemon, page, abilities, tipo, stats} = useSelector(state => state.pokemons)
  const toCamelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  useEffect(() => {
    dispatch( getPokemons())
  }, [])
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
        <h1>PokemonApp</h1>
        <span>Loading: {isLoading ? 'Tue':'False'}</span>
        <hr />
        {
          <Card sx={{ maxWidth: 320 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="public\img\logopokemon.webp"
                alt={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Chip label={toCamelCase('_'+pokemon.name)} variant="outlined" color="info" />
                  {tipo.map(({type: especie}) => (
                    <Chip label={especie.name} key={especie.name}/>
                  ))}
                </Typography>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CatchingPokemon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Abilities' />
                </ListItem>
                {abilities.map(({ability}) => (
                  <Grid container spacing={2} key={ability.name}>
                    <Grid item xs={3}/>
                    <Grid item xs={7}>
                    <Typography variant="body2" sx={{rb:3}} color="text.secondary">
                      {ability.name}
                    </Typography>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
              <CardActions disableSpacing>
                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more">
                      <ExpandMoreOutlined />
                    </ExpandMore>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      disabled= {isLoading}
                      onClick={ () => dispatch(getPokemons(page-2))}>
                      Back
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      disabled= {isLoading}
                      onClick={ () => dispatch(getPokemons(page))}>
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Stats:</Typography>
                  {stats.map(({stat, base_stat}) => (
                    <Chip label={stat.name+ ': '+ base_stat} key={stat.name}/>
                  ))}
                </CardContent>
              </Collapse>
            </CardActionArea>
          </Card>
        }
    </>
  )
}

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ProdutosListagem() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AppsIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Editar Produto
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Editar Produto
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Salvar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Card className={classes.card} style={{marginTop: "30px", marginBottom: "10px"}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
            </Card>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Nome"
                    fullWidth
                    autoComplete="nome"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField type="number"
                    required
                    id="quantidade"
                    name="quantidade"
                    label="Quantidade"
                    fullWidth
                    autoComplete="quantidade"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField type="number"
                    required
                    id="preco"
                    name="preco"
                    label="Preço"
                    fullWidth
                    autoComplete="preco"
                />
                <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Descrição*"  style={{width: "100%", marginTop: "30px", borderRadius: "0px", padding: "5px", fontSize: "15px"}}
                    required
                    id="descricao"
                    name="descricao"
                />
                </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
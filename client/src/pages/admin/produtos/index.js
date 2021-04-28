import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import api from '../../../services/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        jwmffreitas
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

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    async function loadProdutos() {
      const response = await api.get('/api/produtos')
      console.log(response)
      setProdutos(response.data)
    }
    loadProdutos()
  }, []);

  async function handleDelete(id) {
    var apagar = await api.delete('/api/produtos/'+id)
    console.log(apagar)
    if(apagar.status == 200) {
      window.location.href = '/admin/produtos'
    }else {
      alert('Error')
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AppsIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Listagem de produtos
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Lista de produtos
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {/*Descrição da página pode por aqui, ou n tbm*/}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/admin/produtos/cadastrar">
                    Cadastrar Novo Produto
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Deletar Estoque
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {produtos.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/*<CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />*/}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.nome}
                    </Typography>
                    <Typography>
                      {card.descricao}
                    </Typography>
                    <Grid style={{textAlign: "right", marginTop: "5px"}}>
                      <Typography variant="p">
                          Quantidade: {card.quantidade}
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => handleDelete(card.id)}>
                      Deletar
                    </Button>
                    <Button size="small" color="primary" href={'/admin/produtos/editar/'+card.id}>
                      Editar
                    </Button>
                    <Grid style={{width: "100%", textAlign: "center"}}>
                      <Typography variant="h6">
                        R$ {card.preco}
                      </Typography>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Controle de estoque
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Isso foi difícil pra caramba kkkkk
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
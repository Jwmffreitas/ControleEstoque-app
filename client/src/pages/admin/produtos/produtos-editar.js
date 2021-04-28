import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import api from '../../../services/api'
import { useParams } from 'react-router-dom';

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

export default function ProdutosCadastrar() {
  const classes = useStyles();

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const {idProduto} = useParams()

  useEffect(() => {
    async function getProduto() {
      var response = await api.get('/api/produtos.details/'+idProduto)
      console.log(response)
      setNome(response.data.nome)
      setDescricao(response.data.descricao)
      setPreco(response.data.preco)
      setQuantidade(response.data.quantidade)
    }
    getProduto()
  }, [])

  async function handleSubmit() {
    const data = {nome, descricao, preco, quantidade,
    id:idProduto
    }

    console.log(data)
    if(nome != '' && descricao != '' && preco != '' && quantidade != '') {
      const response = await api.put('/api/produtos', data)
      console.log(response.status)
      if(response.status == 200) {
        window.location.href = "/admin/produtos"
      }else {
        alert('Não foi possível atualizar')
      }
    }
  }

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
              Editar produto
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Salvar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="/admin/produtos">
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Nome"
                    fullWidth
                    autoComplete="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
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
                    value= {quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField type="number"
                    required
                    id="preco"
                    name="preco"
                    label="Preço"
                    fullWidth
                    autoComplete="preco"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                />
                </Grid>
                <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Descrição*"  style={{width: "100%", marginTop: "30px", borderRadius: "0px", padding: "5px", fontSize: "15px"}}
                    required
                    id="descricao"
                    name="descricao"
                    fullWidth
                    autoComplete="descricao"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                />
            </Grid>
          </Container>
        </div>
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
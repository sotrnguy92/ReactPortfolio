import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
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
import DineOutside from "../images/DineOutside.png"
import TodoApp from "../images/TodoApp.png";
import JavaQuiz from "../images/JavaQuiz.png";



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

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Portfolio
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={DineOutside}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Dine Outside
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <a href="https://github.com/baytamo/Project1">git repo</a>
                                        </Button>
                                        <Button size="small" color="primary">
                                            <a href="https://baytamo.github.io/Project1/">app</a>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={TodoApp}
                                    title="Dine Outside Landing"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Todo App
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="https://github.com/sotrnguy92/project2">git repo</a>
                                    </Button>
                                    <Button size="small" color="primary">
                                        <a href="https://son-todo-app2020.herokuapp.com/#/">app</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={JavaQuiz}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Javascript Quiz
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="https://github.com/sotrnguy92/homework4Quiz">git repo</a>
                                    </Button>
                                    <Button size="small" color="primary">
                                        <a href="https://sotrnguy92.github.io/homework4Quiz/">app</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
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










// import React from 'react';
//
// export default function Portfolio() {
//     return(
//         <div>
//
//             <main>
//                 <div className="container">
//                     <section className="starter-template justify-content-center">
//                         <h1>Portfolio</h1>
//                         <section className="container">
//                             <div className="row">
//                                 <div className="col-xs-4 ">
//                                     <div className="array-item mb-5 box">
//                                         <a href="https://github.com/sotrnguy92?tab=repositories">
//                                             <img className="img-fluid" src="./Assets/Images/filler2.jpg"
//                                                  alt="filler2_touchCalendar"/>
//                                             <div className="bottom-text">Github Repo</div>
//                                         </a>
//                                     </div>
//                                     <div className="array-item mb-5 box">
//                                         <a href="https://baytamo.github.io/Project1/">
//                                             <img className="img-fluid" src="./Assets/Images/project1.png"
//                                                  alt="project 1 landing page"/>
//                                             <div className="bottom-text">Project One</div>
//                                         </a>
//                                     </div>
//                                     <div className="array-item mb-5 box">
//                                         <img className="img-fluid" src="./Assets/Images/filler4.jpg"
//                                              alt="filler4_alarmClock"/>
//                                         <div className="bottom-text">Project: TBD</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     </section>
//                 </div>
//             </main>
//
//             <footer className="pb-1 pt-1 text-muted text-center text-small navbar-dark bg-dark footer">
//                 <span>© Copyright</span>
//             </footer>
//
//         </div>
//     )
// }

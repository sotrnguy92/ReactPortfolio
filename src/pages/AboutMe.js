import React from 'react';
import MainFeaturedPost from "../components/MainFeaturedPost";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}))

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/sotrnguy92">
                Son Nguyen
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const mainFeaturedPost = {
    title: 'About Me',
    description:
        "My name is Son Nguyen, and I'm in training to become a full stack developer. I was born in Vietnam, but I grew up in the San Jose, CA." +
        "I graduate from UC Santa Cruz with a Bachelors of Science in Physics. I love playing around with math and I get a kick out of learning anything new." +
        " Look forward to my future works! ",
    image: 'https://i.postimg.cc/mDMv8Y23/musselrock.jpg',
    imgText: 'main image description',
};

export default function AboutMe() {
    const classes = useStyles();


    return(
        <div>

            <main>
                <MainFeaturedPost post={mainFeaturedPost} />
            </main>

            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Created by Son Nguyen
                </Typography>
                <Copyright />
            </footer>
        </div>
    )
}

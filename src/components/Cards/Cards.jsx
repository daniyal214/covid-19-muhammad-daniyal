import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia, CardActions, CardActionArea, makeStyles} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


import styles from './Cards.module.css';





const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    // console.log(confirmed)
    if (!confirmed) {
        return 'Loading....';
    }
     
    // console.log(props);

return (
        <div className={styles.container}> 
           
            <Grid container spacing={3} justify="center">
                <Grid item component = {Card}  xs={12} md={3} className={cx(styles.card, styles.infected)}>
                     <CardMedia style = {{ height: 10, paddingTop: '56%', opacity: 0.8,}}
                        className={styles.media}
                        image={require("./pic1.jpg")}
                        title="COVID-19 Infected"
                    />
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom> Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start ={0} end = {confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component = {Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardMedia style = {{ height: 10, paddingTop: '56%', opacity: 0.8,}}
                        className={styles.media}
                        image={require("./pic2.jpg")}
                        title="COVID-19 Recovered"
                    />  
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom> Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start ={0} end = {recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardMedia style = {{ height: 10, paddingTop: '56%', opacity: 0.8}}
                        className={styles.media}
                        image={require("./pic3.jpg")}
                        title="COVID-19 Deaths"
                    />
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom> Deaths</Typography>
                        <Typography variant='h5'>
                        <CountUp start ={0} end = {deaths.value} duration={2.5} separator=","/>
                        </Typography>                        <Typography coor='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths casued by  COVID-19</Typography>
                    </CardContent>

                </Grid>
            

            </Grid>

        </div>
    )
}

export default Cards;
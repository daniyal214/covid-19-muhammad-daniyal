import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();

    }, []);


    const doughnutChart = (
        dailyData.length
            ? (<Doughnut

                data={{

                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        data: [confirmed.value, recovered.value, deaths.value],
                        backgroundColor: [
                            'rgb(0, 0, 255, 0.5)',
                            'rgb(0, 255, 0, 0.5)',
                            'rgb(255, 0, 0, 0.5)'],

                    }],
                }}
                height={100}
            />) : null
    )





    const lineChart = (
        dailyData.length
            ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {


                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        borderColor: 'red',
                        fill: true,
                    }],
                }}
            />) : null
    );

    console.log(confirmed, recovered, deaths)

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgb(0, 0, 255, 0.5)',
                                'rgb(0, 255, 0, 0.5)',
                                'rgb(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legends: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }}
                />
            ) : null
    )

    return (
        <div className={styles.container}>
            {!country ? doughnutChart : null} <br />
            {country ? barChart : lineChart}

        </div>
    )
}

export default Charts;


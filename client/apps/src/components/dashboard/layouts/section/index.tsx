import React, { LegacyRef, useEffect, useRef } from 'react'
import RecentOrderCard from '@@/dashboard/cards/RecentOrderCard/index'
import TrendyMealsCard from '@@/dashboard/cards/TrendyMealsCard/index'
import SalesCard from '@@/dashboard/cards/SalesCard'
import { Section } from './Section'
import MoneyBag from '@@/commons/icons/MoneyBag/index'
import Expenses from '@@/commons/icons/ExpensesIcon/index'
import Revenue from '@@/commons/icons/RevenueIcon/index'
import "chart.js/auto";

import {
    Chart, CategoryScale, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip, ChartItem,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'

Chart.register(CategoryScale, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

const index = () => {
    const dataset = [{
        label: 'beverages',
        borderWidth : 2,
        barPercentage: 5,
        categoryPercentage: 0.66,
        barThickness: 60,
        data: ['5', '3', '7', '6', '9'],
        backgroundColor: ['#B2D2A4', '#B2D2A4', '#B2D2A4', '#B2D2A4', '#B2D2A4 ']
    }, {
        label: 'foods',
        barPercentage: 0.66,
        categoryPercentage: 0.66,
        barThickness: 60,
        data: ['2', '4', '3', '6.2', '8.3'],
        backgroundColor: ['#32CD30', '#32CD30', '#32CD30', '#32CD30', '#32CD30']
    }] 
    /*  options: {
         responsive: true,
         maintainAspectRatio: true,
         scales: {
             x: {
                 grid: {
                     drawBorder: false,
                   },
                   beginAtZero: true,
             },
             y: {
                 grid: {
                     drawBorder: false,
                   },
                   beginAtZero: true,
             }
           },
         animation: {
             duration: 5000,
             xAxis: true,
             yAxis: true,
             maintainAspectRatio: false,

         }
     }, */

    const canva = useRef(null)


    useEffect(() => {
        const ctx = canva?.current
        let barChart = new Chart(ctx as any, {
            type: 'bar',
            data: {
                labels: ["Mon", "Tues", "Wed", "Thurs", "Fri"],
                datasets: dataset,
            },
            options: {
                layout: {
                    padding: {
                        top: 19,
                        bottom: 16,
                        left: 20,
                        right: 20,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            drawBorder: true,
                            display: false
                        },
                        beginAtZero: true,
                    },
                    y: {

                        grid: {
                            drawBorder: true,
                            display: false

                        },
                        beginAtZero: true,
                        ticks: {
                            autoSkipPadding: 80,
                            callback: function(value, index, ticks) {
                                return '$' + value +'.00';
                          },
                        },
                    }
                },
                plugins: {
                    legend: {
                      display: true,
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => formatValue(context.parsed.y),
                        },
                      },

                  },
                  responsive: true,
                  maintainAspectRatio:false
            },


        });
        return () => barChart.destroy();

    }, [])
    return (
        <>
            <Section>
                <div style={{ gridColumn: "1", gridRow: "1/ span 4" }}>
                    <SalesCard {...{ value: "$123.34", description: "Today's Total Sales", span: "1/ span 2", Icon: <MoneyBag color="lime" /> }} />
                </div>
                <div style={{ gridColumn: "2", gridRow: "1/ span 4" }}>
                    <SalesCard {...{ icon: "word", value: " $123.34", description: "Today's Total Expenses", span: "2/span 3", Icon: <Expenses color="#7EC8E3" />, }} />
                </div>
                <div style={{ gridColumn: "3", gridRow: "1/ span 4" }}>
                    <SalesCard {...{ value: " $13.23", description: "Tody's Total Revenue", span: "3/span 4", Icon: <Revenue color="#C55FFC" /> }} />
                </div>
                <div style={{ gridColumn: "4/ span 5", gridRow: "1/ span 10" }}>
                    <TrendyMealsCard />
                </div>
                <div style={{marginBottom:'-26px', gridRow: "5/ span 6", maxHeight: '100%', height:'350px', width:'900px', boxShadow:"2px 2px 2px gray", borderRadius:'5px', gridColumn: "1/ span 3", position:"relative", background:"white"}}>
                    <canvas ref={canva} /* style={{  borderRadius:"4px", width: "80%", height: "30%" }} */></canvas>
                </div>
            </Section>

        </>
    )
}

export default index

function formatValue(y: number): string | string[] {
    throw new Error('Function not implemented.')
}

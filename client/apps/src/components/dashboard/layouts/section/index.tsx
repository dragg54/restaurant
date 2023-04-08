import React from 'react'
import RecentOrderCard from '@@/dashboard/cards/RecentOrderCard/index'
import TrendyMealsCard from '@@/dashboard/cards/TrendyMealsCard/index'
import SalesCard from '@@/dashboard/cards/SalesCard'
import { Section } from './Section'
import  MoneyBag  from '@@/commons/icons/MoneyBag/index'
import  Expenses  from '@@/commons/icons/ExpensesIcon/index'
import  Revenue  from '@@/commons/icons/RevenueIcon/index'



const index = () => {
    return (
        <>
            <Section>
                <div style={{ gridColumn: "1" , gridRow: "1/ span 4"}}>
                    <SalesCard {...{ value: "$123.34", description: "Today's Total Sales", span: "1/ span 2", Icon: <MoneyBag color = "lime"/> }} />
                </div>
                <div style={{ gridColumn: "2" , gridRow: "1/ span 4"}}>
                    <SalesCard {...{ icon: "word", value: " $123.34", description: "Today's Total Expenses", span: "2/span 3", Icon: <Expenses color = "#7EC8E3"/>, }} />
                </div>
                <div style={{ gridColumn: "3" , gridRow: "1/ span 4"}}>
                    <SalesCard {...{ value: " $13.23", description: "Tody's Total Revenue", span: "3/span 4", Icon: <Revenue color = "#C55FFC"/>}} />
                </div>
                <div style={{  gridColumn:"4/ span 5", gridRow: "1/ span 10"}}>
                    <TrendyMealsCard />
                </div>
                <div style={{ gridRow: "5/ span 6", gridColumn:"1/ span 3"}}>
                    <RecentOrderCard />
                </div>
               
            </Section>

        </>
    )
}

export default index
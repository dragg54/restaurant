import React from 'react'
import {GiExpense} from 'react-icons/gi'
import { ExpensesIconContainer } from './ExpensesIcon'

type ExpenseProps = {
    color: string
}
const index = ({color}: ExpenseProps) => {
    
    return (
        <ExpensesIconContainer style={{backgroundColor: color}}>
            <GiExpense />
        </ExpensesIconContainer>
    )
}

export default index
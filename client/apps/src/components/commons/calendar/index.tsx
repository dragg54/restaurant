import React, { useEffect, useRef, useState } from 'react'
import { CalendarContainer, CalendarWrapper } from './CalendarComponent'
import { BiCalendar } from 'react-icons/bi'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const index = () => {
    const [toggleCalendar, setToggleCalendar] = useState(false)
    const [value, onChange] = useState(new Date());

    const showCalendar = () => {
        setToggleCalendar(true)
    }
    const calendar = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        const checkIfClickedOutside = (e:any) =>{
            if(e.target.id == "calendar"){
               setToggleCalendar(true)
            }
        if(calendar.current && !calendar.current.contains(e.target) && e.target.id != 'calendar'){
                setToggleCalendar(false)
            }
        }
        document.addEventListener("click", checkIfClickedOutside)
    })
    return (
        <CalendarWrapper>
            <BiCalendar id='calendar' style={{ alignSelf: 'flex-end', width: '50px', height: '50px', color: '#FFCD58', cursor: "pointer" }} onClick={() => {
                showCalendar()
            }} />
            <CalendarContainer style={{display: toggleCalendar? "block": "none"}} ref={calendar}>
                <Calendar onChange={() => {
                    onChange
                }} value={value} />
            </CalendarContainer>
        </CalendarWrapper>
    )
}

export default index
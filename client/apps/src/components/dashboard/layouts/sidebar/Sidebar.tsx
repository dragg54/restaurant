import style from 'styled-components'

export const SideBar = style.div`
    grid-column: 1;
    grid-row: 2/ span 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100vh;
    margin-top: 80px;
    background: white
`

export const SideBarMenuContainer = style.div`
    width: 100;
    margin-top: 40px;
    height: 100vh;
`

export const MenuContainer = style.div`
    height: 45px;
    width: 100%;
    padding-left: 20px;
    padding-right: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: gray;
    &:hover{
    background-color: #B9B7BD;
    color: white;
    &:hover{
        cursor: pointer
    }
    }
`

export const MenuList = style.li`
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;`


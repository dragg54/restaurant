import style from 'styled-components'

export const SideBar = style.div`
    grid-column: 1;
    background-color: #fff;
    grid-row: 2/ span 9;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SideBarMenuContainer = style.div`
    height: 400px;
    width: 100%;
    margin-top: 40px;
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
    background-color: gray;
    color: white;
    &:hover{
        cursor: pointer
    }
    }
`

export const MenuList = style.li`
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;`


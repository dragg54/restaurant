import styled from 'styled-components'

export interface User {
    user: string
}
export const Wrapper = styled.div<{user: string}>`
    width: 100%;
    padding:${(props) => props.user == "customer"? "0px 0px": "30px 100px"};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #F6F4F0;
`
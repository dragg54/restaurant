import style from 'styled-components'

export const SearchIcon = style.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top:50%;
  transform: translate(0%, -50%);
  right: 13px;
  color: gray;
  &:hover{
    cursor: pointer
  }
`
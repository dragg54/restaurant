import { GiTwoCoins } from "react-icons/gi"
import { RevenueIconContainer } from "./RevenueIcon"

type RevenueProps = {
    color: string
}
const index = ({color}: RevenueProps) => {
    return (
      <RevenueIconContainer style={{background: color}}>
          <GiTwoCoins />
      </RevenueIconContainer>
    )
  }

  export default index;
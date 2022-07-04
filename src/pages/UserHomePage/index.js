import { MenuStyled } from "../../components/Menu/MenuStyled"
import { HighLightStyled } from "../../components/HighLight/HighLightStyled";
import { PopularSeriesStyled } from "../../components/PopularSeries/PopularSeriesStyled";
import { FooterStyled } from "../../components/Footer/FooterStyled";

const UserHomePageComponent = (props) => {
    return(
        <main className={props.className}>
            <MenuStyled />
            <HighLightStyled />
            <PopularSeriesStyled />
            <FooterStyled />
        </main>
    )
}

export default UserHomePageComponent;
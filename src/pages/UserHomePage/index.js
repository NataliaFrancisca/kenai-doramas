import { Menu } from "../../components/Menu/style";
import { HighLight } from "../../components/HighLight/style";
import { PopularSeries } from "../../components/PopularSeries/style";
import { Footer } from "../../components/Footer/style";

const UserHomePageComponent = (props) => {
    return(
        <main className={props.className}>
            <Menu />
            <HighLight />
            <PopularSeries />
            <Footer />
        </main>
    )
}

export default UserHomePageComponent;
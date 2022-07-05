import { Profile } from "./style";

import {useNavigate} from "react-router-dom"

const UsersHomePageComponent = (props) => {

    const currentTime =  new Date();
    const minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
    const hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : currentTime.getHours();
    const resultTime = `${hours}:${minutes} ${currentTime.getHours() >= 12 ? "PM" : "AM"}`;
    
    const navigate = useNavigate();

    const onNavigateProfile = () => {
        navigate("/browse")
    }

    return(
        <main className={props.className}>
            <menu>
                <h2>Kenai</h2>
                <span>{resultTime}</span>
            </menu>

            <section className="container-texts">
                <h1>Bem-vindo de volta ao Kenai</h1>
                <h2>Quem está usando?</h2>

                <section className="container-profiles">
                    <Profile onClick={onNavigateProfile}>
                        <span className="bg-img" />
                        <span className="name-user">Natalia Francisca</span>
                    </Profile>

                    <Profile onClick={onNavigateProfile}>
                        <span className="bg-img" />
                        <span className="name-user">Luiz Henrique</span>
                    </Profile>

                    <Profile onClick={onNavigateProfile}>
                        <span className="bg-img" />
                        <span className="name-user">Luiza Clara</span>
                    </Profile>
                </section>
            </section>

            <a href="/">Adicionar perfil</a>
        </main>
    )
}

export default UsersHomePageComponent;
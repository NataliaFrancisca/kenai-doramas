import styled from "styled-components";
import UsersProfileComponent from ".";

export const UsersHomePage= styled(UsersProfileComponent)`
    min-height: 100vh;
    background-color: #0C0C0C;
    padding: 20px;
    color: white;
    font-family: 'Open Sans';

    display: flex;
    flex-direction: column;
    position: relative;

    menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h2{
            background: linear-gradient(264.26deg, #FF267A 0%, #FFA634 101.03%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Mukta', sans-serif;
            font-size: 2.4em;
        }

        span{
            color: #F9F9F9;
            font-family: 'Open Sans';
            font-weight: 300;
            font-size: 26px;
        }
    }

    .container-texts{
        text-align: center;
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            font-size: 44px;
            font-weight: 300;
        }

        h2{
            font-size: 32px;
            font-weight: 300;
            margin: 5px 0;
        }
    }

    .container-profiles{
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    a{
        display: flex;
        text-align: center;
        justify-content: center;
        align-self: center;

        text-decoration: none;
        color: #F9F9F9;
        font-size: 20px;
        font-family: 'Open Sans';
        font-weight: 600;

        background-color: #181818;
        padding: 16px 40px;
        width: max-content;
        margin-top: 40px;
    }

    @media only screen and (max-width: 550px) {
        .container-profiles{
            flex-direction: column;
            margin-top: 20px;
        }

        .container-texts{
            height: auto;
            margin: 50px 0;

            h1{
                font-size: 20px;
            }

            h2{
                font-size: 18px;
            }
        }
    }

`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    cursor: pointer;

    @media only screen and (max-width: 550px) {
        margin: 10px 0px;
    }

    .bg-img{
        margin: 16px 0;
        height: 120px;
        width: 120px;
        border-radius: 50%;
        transition: filter .6s ease;
    }

    .name-user{
        font-weight: 400;
        font-family: 'Open Sans';
        font-size: 18px;
        color: #A8A8A8;
    }

    &:nth-child(1) .bg-img{
        background: linear-gradient(225deg, #781FD1 0%, #570EAB 100%);
    }

    &:nth-child(2) .bg-img{
        background: linear-gradient(180deg, #64FA9B 0%, #5FE36A 100%);
    }

    &:nth-child(3) .bg-img{
        background: linear-gradient(180deg, #4DF0F3 0%, #4D7BFD 100%);
    }

    &:hover .bg-img{
        filter: brightness(50%);
    }
`
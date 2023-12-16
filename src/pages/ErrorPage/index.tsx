import React from "react";
import { useRouteError } from "react-router-dom";
import './index.less'

const Home: React.FC = () => {
    const error = useRouteError();
    console.log(error, 'error');

    return <>
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div></>
}

export default Home;

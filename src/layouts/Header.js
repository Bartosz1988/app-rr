import React from 'react'
import { Route, Switch } from 'react-router-dom'
import img1 from "../images/header1.jpg"
import img2 from "../images/header2.jpg"
import img3 from "../images/header3.jpg"
import "../styles/Header.css"

//komponent render służy do wyrenderowania nam tego co chcemy po wywołaniu funkcji którą napisaliśmy

const Header = () => {

    // images potrzebne do losowania
    const images = [img1, img2, img3]
    const index = Math.floor(Math.random() * 3)

    const img = images[index]

    return (
        <>
            <Switch>
                <Route
                    path="/" exact render={() => (
                        <img src={img1} alt="ulica"></img>
                    )}>
                </Route>
                <Route
                    path="/products" render={() => (
                        <img src={img2} alt="most"></img>
                    )}>
                </Route>
                <Route
                    path="/contacts" render={() => (
                        <img src={img3} alt="miasto"></img>
                    )}>
                </Route>
                <Route
                    path="/admin" render={() => (
                        <img src={img1} alt="ulica"></img>
                    )}>
                </Route>
                {/* poniższy komponent to obsługa błędów - "w każdej innej sytuacji, gdy url będzie inny wyświetl img1" */}
                <Route
                    render={() => (
                        <img src={img1} alt="ulica"></img>
                    )}>
                </Route>
            </Switch>
        </>

        // LUB ALTERNATYWNIE - LOSOWO WYBRANY OBRAZEK DLA DANEGO PUNKTU MENU

        // <>
        //     <img src={img} alt="header"></img>
        // </>
    );
}

export default Header; 
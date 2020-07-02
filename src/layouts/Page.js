import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from "../pages/Home"
import ProductsPage from "../pages/Products"
import ContactsPage from "../pages/Contacts"
import AdminPage from "../pages/Admin"
import LoginPage from "../pages/Login"
import ErrorPage from "../pages/Error"
import ProductsList from '../pages/ProductsListPage'

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/products" component={ProductsList}></Route>

                {/* wykorzystanie w ścieżce dwukropka, jak poniżej oznacza "dowolny element" */}
                <Route path="/product/:id" component={ProductsPage}></Route>
                <Route path="/contacts" component={ContactsPage}></Route>
                <Route path="/admin" component={AdminPage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route component={ErrorPage}></Route>
            </Switch>
        </>
    );
}

export default Page;
// Les imports importants
import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import CustomersPageWithPagination from "./pages/CustomersPageWithPagination";
import InvoicesPage from './pages/InvoicesPage';


// On importe le css personnalisé
require("../css/app.css");


// Javascript

console.log("Hello Webpack Encore! Edit me in assets/js/app.js");

const App = () => {
    return (
        <HashRouter>
            <Navbar />

            <main className="container pt-5">
                <Switch>
                    <Route path="/invoices" component={InvoicesPage} />
                    <Route path="/customers" component={CustomersPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </main>
        </HashRouter>
    );
};

const rootElement = document.querySelector("#app");
ReactDom.render(<App />, rootElement);
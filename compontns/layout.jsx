import React from 'react';
import Header from './header';
import Head from 'next/head';
import Footer from './footer';
const Layout = ({children}) => {
    return (
        <div className="container">
            <Head>
                <title>JGY_portfolio_site</title>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
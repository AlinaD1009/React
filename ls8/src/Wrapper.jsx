
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Footer from "./components/Footer";

const Wrapper = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showContent1, setShowContent1] = useState(true);
    const [showContent2, setShowContent2] = useState(true);
    const [showFooter, setShowFooter] = useState(true);

    return (
        <div>
            <h2>Умовний рендеринг компонент</h2>

            <label>
                <input
                    type="checkbox"
                    checked={showNavbar}
                    onChange={() => setShowNavbar(!showNavbar)}
                />
                Показати Navbar
            </label>
            <br />

            <label>
                <input
                    type="checkbox"
                    checked={showContent1}
                    onChange={() => setShowContent1(!showContent1)}
                />
                Показати Content1
            </label>
            <br />

            <label>
                <input
                    type="checkbox"
                    checked={showContent2}
                    onChange={() => setShowContent2(!showContent2)}
                />
                Показати Content2
            </label>
         
            <br />

            <label>
                <input
                    type="checkbox"
                    checked={showFooter}
                    onChange={() => setShowFooter(!showFooter)}
                />
                Показати Footer
            </label>

            <hr />

            {showNavbar && <Navbar title="Головне меню" />}
            {showContent1 && <Content1 someProp={Math.floor(Math.random() * 100)} />}
            {showContent2 && <Content2 />}
            {showFooter && <Footer />}
        </div>
    );
};

export default Wrapper;

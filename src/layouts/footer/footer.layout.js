import React from 'react';
import "../../assets/styles/layouts/footer.layout.scss";
import FooterDetail from "../../components/Footer/FooterDetail";
import FooterImage from "../../components/Footer/FooterImage";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-children">
                <FooterImage />
                <FooterDetail />
            </div>
        </footer>
    )
}; 
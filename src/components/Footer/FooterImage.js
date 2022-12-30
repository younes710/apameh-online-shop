import React from 'react';
import enamad from "../../assets/images/85.png";
import kasbokar from "../../assets/images/kasbokar.png";
import rezi from "../../assets/images/rezi.png";
import "../../assets/styles/components/footer/footerImage.scss";

const FooterImage = () => {
    return (
        <div className="footer-image">
            <div className="enamad">
                <img src={enamad} alt="enamad" />
            </div>
            <div className="kasbokar">
                <img src={kasbokar} alt="kasbokar" />
            </div>
            <div className="rezi">
                <img src={rezi} alt="rezi" />
            </div>
        </div>
    )
}

export default FooterImage;
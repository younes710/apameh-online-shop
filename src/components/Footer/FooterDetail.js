import React from 'react';
import "../../assets/styles/components/footer/footerDetail.scss";
import telegram from "../../assets/images/telegram-svgrepo-com.svg";
import facebook from "../../assets/images/facebook-logo-meta-2-svgrepo-com.svg";
import twitter from "../../assets/images/twitter-svgrepo-com.svg";
import instagram from "../../assets/images/instagram-logo-facebook-2-svgrepo-com.svg";

const FooterDetail = () => {
    return (
        <div dir="rtl" className="footer-deteil-div">
            <p className="footer-page-name">فروشگاه اینترنتی آپامه</p>
            <p className="footer-page-text">یک خرید اینترنتی مطمئن ، نیازمند فروشگاهی است که بتواند کالاهای متنوع، <br /> با کیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند <br /> و ضمانت بازگشت کالا هم داشته باشد; با آپامه همه چیز در دسترس توست !!!</p> <br />
            <div className="footer-social-media">
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} /></a>
                <a href="https://twitter.com" target="_blank"><img src={twitter} /></a>
                <a href="https://facebook.com" target="_blank"><img src={facebook} /></a>
                <a href="https://t.me/Apameh_online_shop" target="_blank"><img src={telegram} /></a>
            </div>
        </div>
    )
};

export default FooterDetail;
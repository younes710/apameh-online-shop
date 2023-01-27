import { Link } from "react-router-dom";
import "../../assets/styles/layouts/header.layout.scss";

const PanelHeader = () => {

    return (
        <header className="header" dir="rtl">
            <div className='panel-name-div'>
                <p className="panel-name font-bold">پنل مدیریت فروشگاه آپامه</p>
            </div>
            <div>
                <div className='home-div'>
                    <Link to={"/"} className="home-link font-bold">بازگشت به سایت</Link>
                </div>
            </div>
        </header>
    );
};

export default PanelHeader;
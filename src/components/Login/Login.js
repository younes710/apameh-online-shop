import person from "../../assets/images/person-svgrepo-com.svg";
import kewPass from "../../assets/images/key-password-svgrepo-com.svg";
import { Link } from "react-router-dom";
import "../../assets/styles/pages/panelLogin.page.scss";

const Login = () => {
    return (
        <div dir="rtl" className="login-parent">
            <p className="text-center text-xl font-bold">ورود به پنل مدیریت فروشگاه آپامه</p>
            <div className="mt-12">
                <div className="flex items-center gap-3">
                    <img src={person} alt={"user icon"} />
                    <label className="font-semibold">نام کاربری :</label>
                </div>
                <input
                    type="text"
                    className="mt-5"
                    required
                />
            </div>
            <div className="mt-8">
                <div className="flex items-center gap-3">
                    <img src={kewPass} alt={"password icon"} />
                    <label className="font-semibold">رمز عبور :</label>
                </div>
                <input
                    type="text"
                    className="mt-5"
                    required
                />
            </div>
            <div className="mt-10 text-center font-semibold page-color login-btn">
                <Link to={"/panel/products"}>ورود</Link>
            </div>
            <div className="mt-7 text-center font-semibold">
                <Link to={"/"} className="pr-64">بازگشت به سایت</Link>
            </div>
        </div>
    );
};

export default Login;
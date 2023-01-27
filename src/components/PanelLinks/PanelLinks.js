import { Link } from "react-router-dom";
import "../../assets/styles/pages/panel.links.scss";

const PanelLinks = () => {

    return (
        <div dir="rtl" className="links flex justify-center">
            <button className="prod-btn">
                <Link to={"/panel/products"}>محصولات</Link>
            </button>
            <button className="inventory-btn">
                <Link to={"/panel/inventory"}>موجودی و قیمت ها</Link>
            </button>
            <button className="order-btn">
                <Link to={"/panel/order"}>سفارش ها</Link>
            </button>
        </div>
    );
};

export default PanelLinks;
import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/checkout.page.scss";

const Checkout = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle} | ثبت اطلاعات</title>
                <meta name="description" content={webDesc} />
            </Helmet>
        </>
    )
}

export default Checkout;
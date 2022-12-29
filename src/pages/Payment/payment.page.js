import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/payment.page.scss";

const Payment = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle} | درگاه پرداخت</title>
                <meta name="description" content={webDesc} />
            </Helmet>
        </>
    )
}

export default Payment;
import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/checkout.page.scss";
import { PageContainer } from "../../layouts/pageContainer/pageContainer.layout";

const Checkout = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle} | ثبت اطلاعات</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <PageContainer>
                <div className="page-container">Checkout Page</div>
            </PageContainer>
        </>
    )
}

export default Checkout;
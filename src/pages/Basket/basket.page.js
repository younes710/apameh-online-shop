import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/basket.page.scss";
import { PageContainer } from "../../layouts/pageContainer/pageContainer.layout";

const Basket = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle} | سبد خرید</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <PageContainer>
                <div>Basket Page</div>
            </PageContainer>
        </>
    )
}

export default Basket;
import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/product.page.scss";
import { PageContainer } from "../../layouts/pageContainer/pageContainer.layout";

const Product = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle}</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <PageContainer>
                <div>Product Page</div>
            </PageContainer>
        </>
    )
}

export default Product;
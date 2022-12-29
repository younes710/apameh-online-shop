import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/products.page.scss";
import { PageContainer } from "../../layouts/pageContainer/pageContainer.layout";

const Products = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle}</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <PageContainer>
                <div>Products Page</div>
            </PageContainer>
        </>
    )
}

export default Products;
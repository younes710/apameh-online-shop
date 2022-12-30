import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/home.page.scss";
import { PageContainer } from "../../layouts/pageContainer/pageContainer.layout";

const Home = () => {

    console.log('first')
    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle}</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <PageContainer>
                <div className="page-container">Home Page</div>
            </PageContainer>
        </>
    )
}

export default Home;
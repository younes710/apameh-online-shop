import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/not-found.page.scss";

const NotFound = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle}</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <p>404 <br />page not found</p>
        </>
    )
}

export default NotFound;
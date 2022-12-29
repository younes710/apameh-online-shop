import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/panel.page.scss";

const Panel = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle} | مدیریت</title>
                <meta name="description" content={webDesc} />
            </Helmet>
        </>
    )
}

export default Panel;
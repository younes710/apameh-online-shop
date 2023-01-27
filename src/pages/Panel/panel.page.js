import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";
import "../../assets/styles/pages/panel.page.scss";
import Login from "../../components/Login/Login";

const Panel = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle} | مدیریت</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <Login />
        </>
    )
}

export default Panel;
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import PanelLinks from "../../components/PanelLinks/PanelLinks";
import { Helmet } from "react-helmet";
import { getAppName, getAppDesc } from "../../utils";

const PanelInventory = () => {

    const webTitle = getAppName();
    const webDesc = getAppDesc();

    return (
        <>
            <Helmet>
                <title>{webTitle} | مدیریت</title>
                <meta name="description" content={webDesc} />
            </Helmet>
            <PanelHeader />
            <PanelLinks />
        </>
    );
};

export default PanelInventory;
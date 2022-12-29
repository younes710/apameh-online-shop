import "../../assets/styles/layouts/pageContainer.layout.scss";
import { Fragment } from "react";
import { Header } from "../header/header.layout";
import { Footer } from "../footer/footer.layout";

export const PageContainer = ({ children, ...props }) => {
    return (
        <Fragment {...props}>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./public.routes";
import { INTERNAL_PATHS } from "../configs/routes.config";

const LazyHomePage = React.lazy(() => import("../pages/Home/home_page"));
const LazyBasketPage = React.lazy(() => import("../pages/Basket/basket.page"));
const LazyCheckoutPage = React.lazy(() => import("../pages/Checkout/checkout.page"));
const LazyNotFoundPage = React.lazy(() => import("../pages/NotFound/not-found.page"));
const LazyPanelPage = React.lazy(() => import("../pages/Panel/panel.page"));
const LazyPaymentPage = React.lazy(() => import("../pages/Payment/payment.page"));
const LazyProductPage = React.lazy(() => import("../pages/Product/product.page"));
const LazyProductsPage = React.lazy(() => import("../pages/Products/products.page"));

export const WebAppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path={INTERNAL_PATHS.HOME} element={<LazyHomePage />} />
                    <Route path={INTERNAL_PATHS.BASKET} element={<LazyBasketPage />} />
                    <Route path={INTERNAL_PATHS.CHECKOUT} element={<LazyCheckoutPage />} />
                    <Route path={INTERNAL_PATHS.PAGE404} element={<LazyNotFoundPage />} />
                    <Route path={INTERNAL_PATHS.PANEL} element={<LazyPanelPage />} />
                    <Route path={INTERNAL_PATHS.PAYMENT} element={<LazyPaymentPage />} />
                    <Route path={INTERNAL_PATHS.PRODUCT} element={<LazyProductPage />} />
                    <Route path={INTERNAL_PATHS.PRODUCTS} element={<LazyProductsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 
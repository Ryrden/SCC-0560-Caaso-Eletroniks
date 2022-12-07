import React, { useEffect } from "react";
import { useLocation } from "react-router";

interface scrollToTopType {
    children?: React.ReactNode
}

const ScrollToTop = (props: scrollToTopType) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollToTop;
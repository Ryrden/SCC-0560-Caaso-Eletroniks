import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";

const Home = () => {
    return (
        <div>
            <NavBar />
            <ProductCard 
                productId={"1"} 
                productImgSource={""} title={"sadasdas"} 
                pricing={{
                    fullPrice: "R$ 1.000,00",
                    hasPromotion: true,
                    promotionalPrice: "R$ 1.000,00",
                    promotionWithPaymentMethod: "via pix"
                }} 
                freeShipping={true} />
            <Footer />
        </div>
    );
};

export default Home;
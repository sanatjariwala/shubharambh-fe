import Layout from "@/components/layout/Layout"
import Category from "@/components/sections/Category"
import DealProduct1 from "@/components/sections/DealProduct1"
import Product1 from "@/components/sections/Product1"
import Shop from "@/components/sections/Shop"
import Slider1 from "@/components/sections/Slider1"
export const metadata = {
  title: 'Shubharambh | Premium Saree Collection Online',
  description:
    'Shop elegant sarees online at Shubharambh. Explore bridal sarees, silk sarees, designer sarees, festive wear, and traditional collections at the best prices.',
}
export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider1 />

                {/* <Product1 />
                <DealProduct1 />
                <Shop /> */}
            </Layout>
        </>
    )
}
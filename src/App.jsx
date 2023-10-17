import Header from "./Components/Header";
import NavItems from "./Components/NavItems";
import OverviewSection from "./Components/OverviewSection";
import PlaceHolder from "./Components/PlaceHolder";
import Products from "./Components/Products";
import Revenue from "./Components/Revenue";

export default function App() {
    return (
        <div className="flex">
            <div className="hidden md:block md:sticky md:top-0 md:w-1/6 md:p-4 md:bg-[#040440] md:h-screen">
                <Header />
                <NavItems />
            </div>

            <div className="bg-gray-100 w-full md:w-5/6">
                <PlaceHolder />
                <Revenue />
                <OverviewSection />
                <Products />
            </div>
        </div>
    )
}

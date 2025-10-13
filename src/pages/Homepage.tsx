
import Abuja from "../components/Abuja/Abuja";
import AvailableSection from "../components/AvailableHomeSection/availablehome";
import AyawasoWest from "../components/AyawasoWest/Ayawaso";
import Kotopon from "../components/DadeKotopon/Kotopon";
import HomesToronto from "../components/HomeInToronto/HomesInToronto";
import Ikeja from "../components/Ikeja/Ikeja";
import InspirationSection from "../components/InspirationSection/Inspiration";
import NairobiSection from "../components/Nairobi/NairobiSection";
import Paris from "../components/Paris/Paris";
import PopularSection from "../components/PopularSection/HomePopularsection";
import StaySection from "../components/staySection/staySection";



const Homepages = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="">
                <PopularSection />
            </div>
            <div className="">
                <AvailableSection />
            </div>
            <div className="">
                <StaySection />
            </div>
            <div className="">
                <NairobiSection />
            </div>
            <div>
                <HomesToronto />
            </div>
            <div className="">
                <Ikeja />
            </div>
            <div className="">
                <Paris />
            </div>
            <div className="">
                <Abuja />
            </div>
            <div className="">
                <AyawasoWest />
            </div>
            <div className="">
                <Kotopon />
            </div>
            <div className="">
                <InspirationSection />
            </div>
        </div>
    );
}
 
export default Homepages;
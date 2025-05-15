import Gallery from '../components/PageComponents/home/Gallery';
import EightContent from '../components/PageComponents/home/EightContent';
import NinthContent from '../components/PageComponents/home/NinthContent';

const Renderings = () => {

    return (
        <div>
            <div className="bg-[url('/carru-4.jpg')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center">
                <div className="z-40 text-white bg-[#000000ac] w-full h-full flex flex-col items-center justify-center text-center px-6">
                    <h2 className="uppercase font-neue-plak-black text-8xl">renderings</h2>
                </div>
            </div>
            <Gallery />
            <EightContent />
            <NinthContent />
        </div>
    );
};

export default Renderings;


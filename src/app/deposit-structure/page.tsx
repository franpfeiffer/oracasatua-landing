import EightContent from "../components/PageComponents/home/EightContent";
import NinthContent from "../components/PageComponents/home/NinthContent";

const DepositStructure = () => {
    return (
    <div>
        <div className="bg-[url('/faena-1.jpeg')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center ">
            <div className="z-40 text-white bg-[#000000ac] w-full h-full flex items-center justify-center">
                <h2 className="uppercase font-neue-plak-black text-4xl lg:text-8xl">DEPOSIT STRUCTURE</h2>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-16 bg-white">
            <div className="max-w-3xl w-full space-y-16 text-center">
                <div className="space-y-8">
                    <div className="space-y-4 text-5xl ">
                        <p className="font-neue-plak-black">10% reservation </p>
                        <p className="font-neue-plak-black">10% contract in 6 months </p>
                        <p className="font-neue-plak-black">20 % ground breaking 1 year after</p>
                        <p className="font-neue-plak-black">10 % Top off middle of 2027</p>
                        <p className="font-neue-plak-black">50% Closing end of 2027</p>
                    </div>
                </div>
            </div>
        </div>
        <EightContent />
        <NinthContent />
    </div>
    )
};

export default DepositStructure;

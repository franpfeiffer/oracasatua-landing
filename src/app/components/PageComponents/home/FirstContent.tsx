const FirstContent = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="bg-cover bg-center h-[60vh] w-full lg:w-5/12" style={{ backgroundImage: `url(/towerx2.jpg)` }}>
                <div className="opacity-0 font-neue-plak-black"><p>Villa Miami</p> </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-9/12 px-6 lg:px-24 py-10">
                <h3 className="text-2xl lg:text-4xl font-neue-plak-black text-center uppercase mb-4 lg:mb-6">
                    A WORLD OF EXPERIENCES
                </h3>
                <p className="text-center text-[#b4b6bb] mb-4 lg:mb-6 text-4xl">
                For those who visit, and those who stay, ORA by Casa Tuaoffers incredible restaurants, advanced fitness & wellness,a stunning pool, lounge, and spa, exclusive events, live music,and endless more—surrouded by natural beauty in the heartof Miami. Most important, ORA offers a new way to value howwe spend our time, with shared experiences held above all.
                </p>
            </div>
            <div className="bg-cover bg-center h-[60vh] w-full lg:w-5/12" style={{ backgroundImage: `url(/towerx2.jpg)` }}>
                <div className="opacity-0"><p>Faena Residences</p> </div>
            </div>
        </div>
    )
}

export default FirstContent;


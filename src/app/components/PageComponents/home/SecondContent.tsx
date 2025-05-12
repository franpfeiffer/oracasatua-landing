import React from 'react';

const arrayContent = [
    {
        description: "76 stories rising nearly 1,000 feet above the center of Brickell",
    },
    {
        description: "Curated residences, impeccably designed by m 2 atelie",
    },
    {
        description: "An oasis in the middle of Brickell, Miami's financial district, immersed in lush tropical landscaping",
    },
    {
        description: "Fluid architecture envisioned to blend with the natural setting",
    },
    {
        description: "Fully wired creative workspace memberships available for creators, founders, and doers",
    },
    {
        description: "Dedicated high-speed smart elevators with separate access for owners",
    },
]

const SecondContent = () => {
    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/design.png" 
                    alt="Background" 
                    className="w-auto h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-20 lg:px-32 xl:px-56 py-10 w-full">
                {arrayContent.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center bg-white bg-opacity-90 p-12 rounded-lg shadow-lg h-full">
                        <div className="flex flex-col justify-center items-center text-center h-full">
                            <p className="text-2xl md:text-5xl text-black">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecondContent;

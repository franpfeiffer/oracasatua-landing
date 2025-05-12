import React from 'react'

type Props = {
    title: string;
    description: string;
    video: string;
    home: boolean;
}

const Header = (props: Props) => {
    return (
        <div className="relative h-96 lg:h-[800px] overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={props.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='absolute inset-0 text-white text-center h-full flex flex-col justify-center items-center bg-black bg-opacity-50'>
                <div className='lg:w-2/5'>
                    <h1 className='text-5xl lg:text-9xl pb-4'>{props.title}</h1>
                    <p className='text-4xl'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Header

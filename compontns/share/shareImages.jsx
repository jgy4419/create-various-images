import React from 'react';
import Image from 'next/image';

const ShareImages = ({shareData}) => {
    return (
        <div className="mt-10 flex flex-wrap w-full h-96 overflow-y-auto">
            {
                shareData.map((image, index) => {
                    return (
                        <div key={index} className="share-image">
                            <Image
                                src={image.img}
                                width={300}
                                height={200}
                            />
                        </div>
                        
                    )
                })
            }
            <style jsx>{`
                .share-image{
                    margin-left: 30px;
                }
            `}
            </style>
        </div>
    );
};

export default ShareImages;
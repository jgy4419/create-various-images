import React from 'react';
import Image from 'next/image';

const ShareImages = ({shareData}) => {
    console.log('!', shareData);
    return (
        <div>
            {
                shareData.map((image, index) => {
                    return (
                        <Image key={index}
                            src={image.img}
                            width={200}
                            height={150}
                        />
                    )
                })
            }
        </div>
    );
};

export default ShareImages;
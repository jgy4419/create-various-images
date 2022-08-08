import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer-contain">
                <p className="footer-text">footer</p>
            </div>
            <style jsx>{`
                .footer-contain{
                    position: relative;
                    width: 100vw;
                    height: 150px;
                    // background-color: #333;
                }
                .footer-text{
                    font-size: 30px;
                    font-weight: 700;
                    padding-top: 50px;
                    text-align: center;
                }
            `}
            </style>
        </>
    );
};

export default Footer;
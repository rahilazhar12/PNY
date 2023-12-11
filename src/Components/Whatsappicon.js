import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppIcon = () => {
    const navigateToWhatsApp = () => {
        // Replace with your WhatsApp link
        const whatsappUrl = 'https://wa.me/+923101111774';
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            onClick={navigateToWhatsApp}
            className="fixed bottom-0 right-0 m-4 cursor-pointer z-50"
        >
            < IoLogoWhatsapp size={60} color="green" />
        </div>
    );
};

export default WhatsAppIcon;

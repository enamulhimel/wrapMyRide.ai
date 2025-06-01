import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import backgroundImage from '../../assets/cardImg.png';


import imgWhiteLabel from '../../assets/forWrapShops/according1.png';
import imgBranding from '../../assets/forWrapShops/according2.png';
import imgLeads from '../../assets/forWrapShops/according3.png';
import imgDashboard from '../../assets/forWrapShops/according4.png';
import imgCSV from '../../assets/forWrapShops/according5.png';
import imgCRM from '../../assets/forWrapShops/according6.png';

const items = [
    {
        label: 'White-Label Embeddable Widget  ',
        value: 'White-label',
        content: 'Seamlessly integrate the tool under your brand.',
        description: 'Offer a personalized experience with your logo and color scheme.',
        img: imgWhiteLabel,
    },
    {
        label: 'Full Branding Customization', value: 'Branding', content: 'Full Branding Customization',
        description: ' Control logo, colors, and background images. Icon: Paint roller/image icon..',
        img: imgBranding
    },
    {
        label: 'Leads', value: 'Leads', content: 'Integrated Lead Capture & Routing.',
        description: 'Configurable form and lead delivery options.',
        img: imgLeads
    },
    {
        label: 'Dashboard', value: 'Dashboard', content: 'Partner Dashboard (Leads, Stats)',
        description: 'Central hub to view leads and track widget performance. Icon: Dashboard/chart icon.',
        img: imgDashboard
    },
    {
        label: 'CSV', value: 'CSV', content: 'Partner Dashboard (Leads, Stats)',
        description: 'Central hub to view leads and track widget performance. Icon: Dashboard/chart icon.',
        img: imgCSV
    },
    {
        label: 'CRM', value: 'CRM', content: 'Partner Dashboard (Leads, Stats)',
        description: 'Central hub to view leads and track widget performance. Icon: Dashboard/chart icon.',
        img: imgCRM
    },
];

export default function HorizontalAccordion() {
    const [active, setActive] = useState('White-label');

    return (
        <div className="w-full overflow-hidden bg-black text-white">
            <div className="flex flex-col sm:flex-row">
                {items.map((item, index) => {
                    const isActive = active === item.value;

                    return (
                        <div
                            key={item.value}
                            className={cn(
                                'relative h-[300px] sm:h-[500px] flex-1 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden',
                                isActive ? 'flex-[4]' : 'flex-[1]',
                                !isActive && 'border border-white' // White border for non-active
                            )}
                            onClick={() => setActive(item.value)}
                            style={{
                                backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
          url(${backgroundImage})
        `,
                                backgroundRepeat: 'repeat, no-repeat',
                                backgroundPosition: 'top left, center',
                                backgroundSize: 'auto, cover',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/70 z-0" />

                            <div
                                className={cn(
                                    'relative z-20 p-4 h-full flex flex-col items-center justify-center text-center',
                                    isActive && 'custom-card'
                                )}
                            >
                                {/* Number Label - Always at top */}
                                <div
                                    className={cn(
                                        "absolute z-30 transition-all duration-300",
                                        isActive ? "top-4 left-4 text-left" : "top-4 w-full text-center"
                                    )}
                                >
                                    <span className="text-xs tracking-widest text-white uppercase">
                                        {index < 10 ? `0${index + 1}` : index + 1}
                                    </span>
                                </div>


                                {/* Rotated Label - Always at bottom */}
                                <div
                                    className={cn(
                                        "absolute z-30 transition-all duration-300 rotate-[-90deg]",
                                        isActive ? "left-0 bottom-10 text-left" : "bottom-10 w-full text-center"
                                    )}
                                >
                                    <div className="text-white font-semibold text-sm">{item.value}</div>
                                </div>


                                <div className="relative z-20 p-4 h-full flex flex-col items-center justify-center text-center">
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-sm flex flex-col items-center justify-center gap-3 max-w-[90%]"
                                        >
                                            <p className="text-lg font-semibold text-white font-secondary">{item.content}</p>
                                            <p className="text-sm text-white/80">{item.description}</p>
                                            <img
                                                src={item.img}
                                                alt={item.label}
                                                className="w-full h-full object-contain rounded"
                                            />
                                        </motion.div>
                                    )}
                                </div>


                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

type sidebarOptionType = {
    key: string;
    label: string;
    children?: {
        key: string;
        label: string;
        children?: {
            key: string;
            label: string;
        }[]
    }[]
}[]

export const SidebarOptions: sidebarOptionType = [
    
        {
            key: 'new-arrivals',
            label: 'New Arrivals',
            children: [{ key: 'new', label: 'New Arrivals' }],
        },
        {
            key: 'shop-by-room',
            label: 'Shop By Room',
            children: [
                { key: 'bedroom', label: 'Bedroom' },
                { key: 'duvet', label: 'Duvet Cover Sets' },
                { key: 'sheets', label: 'Sheets' },
                { key: 'blankets', label: 'Blankets & Blankets' },
                { key: 'curtains', label: 'Curtains' },
                { key: 'pillows', label: 'Pillowcases' },
                { key: 'rugs', label: 'Rugs' },
                { key: 'living-room', label: 'Living Room' },
                { key: 'child-room', label: 'Child Room' },
                { key: 'bathroom', label: 'Bathroom' },
                { key: 'outdoor', label: 'Outdoor' },
            ],
        },
        {
            key: 'shop-by-concept',
            label: 'Shop By Concept',
            children: [
                { key: 'conscious', label: 'Conscious' },
                { key: 'premium', label: 'Premium Quality' },
                { key: 'classic', label: 'Classic Collection' },
            ],
        },
    
]
export interface Branch {
    id: number;
    location: string;
    address: string;
    phones: string[];
    mapsUrl: string;
    mapsEmbed?: string;
}

export const branches: Branch[] = [
    {
        id: 1,
        location: 'Kanipakam, Patnam',
        address: 'Chittoor Irala Road, Kanipakam Arch Cross Road, Kanipakam, Andhra Pradesh 517131',
        phones: ['+91 9440193396', '+91 94909 02557'],
        mapsUrl: 'https://maps.google.com/?q=Kanipakam+Patnam+AP+517131',
        mapsEmbed: 'https://maps.google.com/maps?q=Kanipakam%2C%20Patnam%2C%20AP%20517131&t=&z=13&ie=UTF8&iwloc=&output=embed',
    },
    {
        id: 2,
        location: 'Location 2',
        address: 'Address to be updated',
        phones: ['+91 XXXXXXXXXX'],
        mapsUrl: '#',
    },
    {
        id: 3,
        location: 'Location 3',
        address: 'Address to be updated',
        phones: ['+91 XXXXXXXXXX'],
        mapsUrl: '#',
    },
    {
        id: 4,
        location: 'Location 4',
        address: 'Address to be updated',
        phones: ['+91 XXXXXXXXXX'],
        mapsUrl: '#',
    },
    {
        id: 5,
        location: 'Location 5',
        address: 'Address to be updated',
        phones: ['+91 XXXXXXXXXX'],
        mapsUrl: '#',
    },
    {
        id: 6,
        location: 'Location 6',
        address: 'Address to be updated',
        phones: ['+91 XXXXXXXXXX'],
        mapsUrl: '#',
    },
    {
        id: 7,
        location: 'Location 7',
        address: 'Address to be updated',
        phones: ['+91 XXXXXXXXXX'],
        mapsUrl: '#',
    },
];

export type APIData = {
    count: number;
    next: number | null;
    previous: number | null;
    results: Lead[];
};

export type Lead = {
    id: number;
    name: string;
    email: string;
    message: string;
};

export type Area = {
    id: number;
    name: string;
};

export type Player = {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    age: number;
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
};

export type Team = {
    id: number;
    area: Area;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: string;
    clubColors: string;
    venue: string;
    squad: Player[];
};

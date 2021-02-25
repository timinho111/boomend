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

export interface FilmType {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface CharType {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: any[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface Results {
    count: number;
    next?: any;
    previous?: any;
    results: CharType[];
}

export type Dataset = {
    id: string;
    name: string;
    version: string;
    tags: string[];
    owner: string;
    description: string;
    date: string;
    ingestionTimestamp?: string;
    lastUpdated?: string;
    fileSize?: number;
    fileType?: string;
    path?: string;
    data: Record<string, string | number | boolean>[];
};

const mockDatasets: Dataset[] = [
    {
        id: 'ds_kaggle1',
        name: 'Netflix Movies and TV Shows',
        version: 'v1.0',
        tags: ['Entertainment', 'Streaming', 'TV'],
        owner: 'kg01492',
        description: 'Comprehensive list of movies and TV shows available on Netflix.',
        date: '2024-01-15',
        ingestionTimestamp: '2024-01-16T10:00:00Z',
        lastUpdated: '2024-01-20T08:45:00Z',
        fileType: 'csv',
        fileSize: 204800,
        path: '/downloads/netflix_titles.csv',
        data: [{ title: 'Breaking Bad', type: 'TV Show', release_year: 2008 }]
    },
    {
        id: 'ds_kaggle2',
        name: 'Global Suicide Rates',
        version: 'v1.1',
        tags: ['Health', 'Statistics', 'World'],
        owner: 'kg04771',
        description: 'Suicide rates across various countries segmented by age and gender.',
        date: '2023-12-10',
        fileType: 'csv',
        fileSize: 128000,
        path: '/downloads/suicide_rates.csv',
        data: [{ country: 'Japan', year: 2015, suicides_no: 19500 }]
    },
    {
        id: 'ds_kaggle3',
        name: 'Airbnb NYC Listings 2023',
        version: 'v2.0',
        tags: ['Real Estate', 'NYC', 'Tourism'],
        owner: 'kg09120',
        description: 'Detailed listing information for Airbnb properties in NYC.',
        date: '2024-02-02',
        fileType: 'csv',
        fileSize: 410000,
        path: '/downloads/airbnb_nyc.csv',
        data: [{ id: 2539, neighbourhood: 'Brooklyn', price: 150 }]
    },
    {
        id: 'ds_kaggle4',
        name: 'IMDB Movie Dataset',
        version: 'v3.2',
        tags: ['Movies', 'Reviews', 'Sentiment'],
        owner: 'kg09834',
        description: 'Large dataset of IMDB movie reviews used for NLP sentiment classification.',
        date: '2024-01-05',
        fileType: 'csv',
        fileSize: 630000,
        path: '/downloads/imdb_reviews.csv',
        data: [{ review: 'Great film!', sentiment: 'positive' }]
    },
    {
        id: 'ds_kaggle5',
        name: 'Spotify Tracks Dataset',
        version: 'v1.3',
        tags: ['Music', 'Audio', 'Streaming'],
        owner: 'kg07352',
        description: 'Millions of Spotify tracks with audio features and metadata.',
        date: '2023-11-22',
        fileType: 'csv',
        fileSize: 720000,
        path: '/downloads/spotify_tracks.csv',
        data: [{ name: 'Shape of You', danceability: 0.82 }]
    },
    {
        id: 'ds_kaggle6',
        name: 'World Happiness Report',
        version: 'v1.0',
        tags: ['Sociology', 'Surveys', 'World'],
        owner: 'kg01122',
        description: 'Annual happiness scores and related metrics by country.',
        date: '2024-03-01',
        fileType: 'csv',
        fileSize: 86000,
        path: '/downloads/world_happiness.csv',
        data: [{ country: 'Finland', score: 7.8 }]
    },
    {
        id: 'ds_kaggle7',
        name: 'Credit Card Fraud Detection',
        version: 'v1.0',
        tags: ['Finance', 'Fraud', 'ML'],
        owner: 'kg08111',
        description: 'Anonymized transactions labeled for fraud classification.',
        date: '2023-12-15',
        fileType: 'csv',
        fileSize: 300000,
        path: '/downloads/credit_fraud.csv',
        data: [{ amount: 150.25, fraud: false }]
    },
    {
        id: 'ds_kaggle8',
        name: 'Pokemon with Stats',
        version: 'v2.1',
        tags: ['Games', 'Fiction', 'Analytics'],
        owner: 'kg06666',
        description: 'Pokemon data with stats like HP, attack, defense, type.',
        date: '2024-01-29',
        fileType: 'csv',
        fileSize: 90000,
        path: '/downloads/pokemon.csv',
        data: [{ name: 'Pikachu', type: 'Electric', attack: 55 }]
    },
    {
        id: 'ds_kaggle9',
        name: 'World University Rankings',
        version: 'v3.0',
        tags: ['Education', 'World', 'Institutions'],
        owner: 'kg09988',
        description: 'Global ranking data of universities by THE, QS, ARWU.',
        date: '2024-02-15',
        fileType: 'csv',
        fileSize: 150000,
        path: '/downloads/university_rankings.csv',
        data: [{ university: 'MIT', rank: 1 }]
    },
    {
        id: 'ds_kaggle10',
        name: 'Zomato Restaurants India',
        version: 'v1.4',
        tags: ['Food', 'India', 'Local'],
        owner: 'kg05202',
        description: 'Restaurant metadata from Zomato including ratings and cuisine type.',
        date: '2023-12-05',
        fileType: 'csv',
        fileSize: 250000,
        path: '/downloads/zomato.csv',
        data: [{ name: 'Spice Kitchen', rating: 4.2, cuisine: 'North Indian' }]
    }
];

export default mockDatasets;

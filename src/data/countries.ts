/**
 * Country interface defining the structure of country data
 * as per assignment requirements
 */
export interface Country {
  countryId: string;
  countryName: string;
  capital: string;
  population: number;
  continent: string;
  countryCode: string;
}

/**
 * Static array of 15 countries with complete information
 * This simulates API data as required by the assignment
 */
export const countries: Country[] = [
  {
    countryId: '1',
    countryName: 'Canada',
    capital: 'Ottawa',
    population: 38000000,
    continent: 'North America',
    countryCode: 'CA',
  },
  {
    countryId: '2',
    countryName: 'Brazil',
    capital: 'Brasília',
    population: 215000000,
    continent: 'South America',
    countryCode: 'BR',
  },
  {
    countryId: '3',
    countryName: 'United Kingdom',
    capital: 'London',
    population: 67000000,
    continent: 'Europe',
    countryCode: 'GB',
  },
  {
    countryId: '4',
    countryName: 'Japan',
    capital: 'Tokyo',
    population: 125000000,
    continent: 'Asia',
    countryCode: 'JP',
  },
  {
    countryId: '5',
    countryName: 'Australia',
    capital: 'Canberra',
    population: 26000000,
    continent: 'Oceania',
    countryCode: 'AU',
  },
  {
    countryId: '6',
    countryName: 'South Africa',
    capital: 'Cape Town',
    population: 60000000,
    continent: 'Africa',
    countryCode: 'ZA',
  },
  {
    countryId: '7',
    countryName: 'Germany',
    capital: 'Berlin',
    population: 84000000,
    continent: 'Europe',
    countryCode: 'DE',
  },
  {
    countryId: '8',
    countryName: 'India',
    capital: 'New Delhi',
    population: 1400000000,
    continent: 'Asia',
    countryCode: 'IN',
  },
  {
    countryId: '9',
    countryName: 'France',
    capital: 'Paris',
    population: 68000000,
    continent: 'Europe',
    countryCode: 'FR',
  },
  {
    countryId: '10',
    countryName: 'Mexico',
    capital: 'Mexico City',
    population: 130000000,
    continent: 'North America',
    countryCode: 'MX',
  },
  {
    countryId: '11',
    countryName: 'Egypt',
    capital: 'Cairo',
    population: 104000000,
    continent: 'Africa',
    countryCode: 'EG',
  },
  {
    countryId: '12',
    countryName: 'China',
    capital: 'Beijing',
    population: 1450000000,
    continent: 'Asia',
    countryCode: 'CN',
  },
  {
    countryId: '13',
    countryName: 'Italy',
    capital: 'Rome',
    population: 60000000,
    continent: 'Europe',
    countryCode: 'IT',
  },
  {
    countryId: '14',
    countryName: 'Argentina',
    capital: 'Buenos Aires',
    population: 46000000,
    continent: 'South America',
    countryCode: 'AR',
  },
  {
    countryId: '15',
    countryName: 'Russia',
    capital: 'Moscow',
    population: 1440000000,
    continent: 'Asia',
    countryCode: 'RU',
  },
];

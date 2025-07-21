import { create } from 'zustand';
import { Country } from '../data/countries';

/**
 * Defines the shape of the global state and the actions to modify it.
 */
interface AppState {
  favorites: Country[];
  visitedCountries: Country[];
  addFavorite: (country: Country) => void;
  removeFavorite: (countryId: string) => void;
  isFavorite: (countryId: string) => boolean;
  markAsVisited: (country: Country) => void;
  getVisitedCount: () => number;
}

/**
 * Creates the Zustand store for managing application state.
 */
export const useAppStore = create<AppState>((set, get) => ({
  // Initial state
  favorites: [],
  visitedCountries: [],

  /**
   * Adds a country to the favorites list, preventing duplicates.
   */
  addFavorite: country =>
    set(state => {
      const exists = state.favorites.some(
        fav => fav.countryId === country.countryId,
      );
      if (!exists) {
        return { favorites: [...state.favorites, country] };
      }
      return state; // Return current state if already a favorite
    }),

  /**
   * Removes a country from the favorites list using its ID.
   */
  removeFavorite: countryId =>
    set(state => ({
      favorites: state.favorites.filter(
        country => country.countryId !== countryId,
      ),
    })),

  /**
   * Checks if a country is in the favorites list.
   * This is a derived value from the state.
   */
  isFavorite: countryId => {
    return get().favorites.some(country => country.countryId === countryId);
  },

  /**
   * Adds a country to the visited list, preventing duplicates.
   */
  markAsVisited: country =>
    set(state => {
      const exists = state.visitedCountries.some(
        v => v.countryId === country.countryId,
      );
      if (!exists) {
        return { visitedCountries: [...state.visitedCountries, country] };
      }
      return state;
    }),

  /**
   * Returns the total count of unique visited countries.
   */
  getVisitedCount: () => get().visitedCountries.length,
}));

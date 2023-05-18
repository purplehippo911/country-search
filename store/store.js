import { create } from 'zustand';

const useStore = create((set) => ({
  searchedCountries: [],
  setSearchedCountries: (countries) => set(() => ({ searchedCountries: countries })),
}));

export default useStore;

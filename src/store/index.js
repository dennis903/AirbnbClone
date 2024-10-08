import { create } from 'zustand';

export const useSearchBarStore = create((set) => ({
	// state
	guestCount: {
		adult: 0,
		kids: 0,
		child: 0,
		animal: 0
	},

	// action
	setGuestCount: (newGuestCount) => set({ guestCount: newGuestCount }),
}));

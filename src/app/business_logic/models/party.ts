import { User } from './user';
import { Theme } from './theme';

export interface Party {
    id: string;
    ownerId: User; // Use the User interface
    themeId: Theme; // Use the Theme interface
    mode: string;
    startTime: number; // Adjust if necessary, use Date if working with timestamps
    endTime: number; // Adjust if necessary, use Date if working with timestamps
    isPublic: boolean;
    iconURL: string;
}
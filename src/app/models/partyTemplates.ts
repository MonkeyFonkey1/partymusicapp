import { User } from './user';

export interface PartyTemplates{
    id: string;
    uid: User;
    mode: string;
    maxUsers: number;
    isPublic: boolean;
}
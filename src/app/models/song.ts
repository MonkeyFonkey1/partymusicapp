import { Party } from './party';
import { User } from './user';


export interface Song{

    id:string;
    partyId: Party;
    suggesterId: User;
    title: string;
    author: string;
    source: string;
    votes: number;

}
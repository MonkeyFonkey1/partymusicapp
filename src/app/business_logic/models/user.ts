export interface User{
    
   id: string;
   username: string;
   email: string;
   birthDate: string;
   rating: number;

   noOfSuggestedSongs: number;
   noOfPlayedSongs: number;
   noOfJoinedParties: number;
   noOfHostedParties: number;
}
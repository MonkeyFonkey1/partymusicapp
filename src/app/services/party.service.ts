import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Party } from '../models/party';


@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiServerUrl= '';

    constructor(private http: HttpClient) {}

    public getParty(): Observable<Party[]>{
        return this.http.get<Party[]>('${this.apiServerUrl}/user/all');
    }

    public updateParty(party: Party): Observable<Party>{
        return this.http.put<Party>('${this.apiServerUrl}/user/update', party);
    }

    public removeParty(party: Party): Observable<void>{
        return this.http.delete<void>('${this.apiServerUrl}/user/update');
    }


}
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiServerUrl= '';

    constructor(private http: HttpClient) {}

    public getUsersDTO(): Observable<User[]>{
        return this.http.get<User[]>('${this.apiServerUrl}/user/all');
    }

    
    public registerUser(user: User): Observable<User>{
        return this.http.post<User>('${this.apiServerUrl}/user/register', user);
    }


    public updateUser(user: User): Observable<User>{
        return this.http.put<User>('${this.apiServerUrl}/user/update', user);
    }


    public unregisterUser(userId: number): Observable<void>{
        return this.http.delete<void>('${this.apiServerUrl}/user/delete/${userId}');
    }
    

    // public grantRoleToUser(): Observable<User>{
    //     return this.http.get<User>('${this.apiServerUrl}/user/all');
    // }


    public updateRating(userId: number): Observable<void>{
        return this.http.put<void>('${this.apiServerUrl}/user/updateRating/', userId);
    }

}
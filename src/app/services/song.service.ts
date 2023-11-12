import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Party } from '../models/party';
import { Song} from '../models/song';


@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiServerUrl= '';

    constructor(private http: HttpClient) {}

    public getSongs(): Observable<Song[]>{
        return this.http.get<Song[]>('${this.apiServerUrl}/user/all');
    }

    public removeSong(song: Song): Observable<void>{
        return this.http.delete<void>('${this.apiServerUrl}/user/update');
    }

    public addSong(song: Song): Observable<Song>{
        return this.http.post<Song>('${this.apiServerUrl}/user/register', song);
    }


    //TO BE IMPLEMENTED
    // public voteSong(song: Song): Observable<Song>{
    //     return this.http.post<Song>('${this.apiServerUrl}/user/register', song);
    // }

}
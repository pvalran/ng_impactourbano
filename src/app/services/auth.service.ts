import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined} from "util";
import {environment} from "../../environments/environment";
import {AuthUser} from "../interfaces/auth";




@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public UserAuth:AuthUser = {
        idUser:"",
        name: "",
        paternalLastName: "",
        motherLastName:  "",
        email: "",
        profileId: 0,
    };

    private  headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json"
    })

    constructor(private  http: HttpClient) { }

    registerUser(username: string, email:string, password: string, profile: string): Observable<any> {
        const url_api = "http://localhost:3000/api/users";
        return this.http.post (url_api,{
            username: username, email: email, profile: profile
        },{
            headers: this.headers
        })
        .pipe(map(data => data));
    }

    loginUser (username:string , password: string): Observable<any> {
        const url_api = environment.apiUrl;
        return this.http.post(url_api+"/user/user/login",{ username: username, password: password},{
            headers: this.headers
        }).pipe(
            map(data => data)
        );
    }

    setUser(user):void{
        let user_string = JSON.stringify(user);
        localStorage.setItem("currentUser",user_string);
    }

    setToken(token):void{
        localStorage.setItem("accessToken",token);
    }

    getToken(){
        return localStorage.getItem("accessToken");
    }

    getCurrentUser(){
        let user_string = localStorage.getItem("currentUser");
        if (!isNullOrUndefined(user_string)){
            let user = JSON.stringify(user_string);
            return user
        } else {
            return null
        }
    }

    logoutUser() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("currentUser");
    }
}

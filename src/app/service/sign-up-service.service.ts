import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  constructor(private http:HttpClient) {
    
   }
  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  // trendingMovieApiData(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  // }

fetchAllProduct(): Observable<any>{
  return this.http.get("http://localhost:8000/api/test/GetAllProducts");
}
 
registerUser(data:any):Observable<any>{
  console.log("Start Proccessing .. ");
  console.log("Form Data IS ::"+JSON.stringify(data));
  return this.http.post("http://localhost:8000/api/auth/signup",JSON.stringify(data));

}







}

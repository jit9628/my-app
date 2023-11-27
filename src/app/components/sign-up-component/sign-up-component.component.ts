import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { SignUpServiceService } from '../../service/sign-up-service.service';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrl: './sign-up-component.component.css'
})
export class SignUpComponentComponent implements OnInit {
  ngOnInit(){
  
  }
  constructor(private service: SignUpServiceService) {
   
  
   }

   trendingMovieResult: any = [];


  searchResult:any;
  searchForm = new FormGroup({
    'firstname':new FormControl(null),
    'lastname':new FormControl(null),
    'email':new FormControl(null),
    'mobile':new FormControl(null),
    'password':new FormControl(null)
  });

  submitForm()
  {

    // this.service.trendingMovieApiData().subscribe((result) => {
    //   console.log(result, 'trendingresult#');
    //   this.trendingMovieResult = result.results;
    //   // this.trendingMovieResult
    // });
//     this.service.fetchAllProduct().subscribe((result)=>{
// console.log(result,"getchDate#");
//     });


this.service.registerUser(this.searchForm).subscribe((result)=>{
  console.log(result);

})

  }















}

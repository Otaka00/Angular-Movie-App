import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/Services/movie-api.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private service: MovieApiServiceService,private title:Title,private meta:Meta) {
    this.title.setTitle('Home - IMDB');
    this.meta.updateTag({name:'description',content:'watch online movies'});
   }

  //bannerResult: any = [];
  trendingMovieResult: any = [];
  comedyMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
//     this.bannerData();
    this.trendingData();
    this.comedyMovie();
    this.thrillerMovie();
  }
//
//   // bannerdata
//   bannerData() {
//     this.service.bannerApiData().subscribe((result) => {
//       console.log(result, 'bannerresult#');
//       this.bannerResult = result.results;
//     });
//   }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  // comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }


  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

}

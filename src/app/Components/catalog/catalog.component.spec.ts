import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

// Added API service
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // Add spy obj service
  let movieApiService: jasmine.SpyObj<MovieApiServiceService>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HomeComponent ]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


  beforeEach(() => {
      // Create a spy object for MovieApiServiceService
    movieApiService = jasmine.createSpyObj('MovieApiServiceService', [
      'trendingMovieApiData',
      'fetchComedyMovies',
      'fetchThrillerMovies',
    ]);

    // Configure the testing module with necessary declarations and providers
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: MovieApiServiceService, useValue: movieApiService },
        Title,
        Meta,
      ],
      imports: [HttpClientModule],
    }).compileComponents();
  });

    // Create a component fixture and obtain the component instance
    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
  });
  it('should create', () => {
     // Assert that the component is created successfully
      expect(component).toBeTruthy();
  });

  it('should initialize movies on ngOnInit', () => {
        // Define sample movie data
    const trendingMovies = [{ title: 'Movie 1' }, { title: 'Movie 2' }];
    const comedyMovies = [{ title: 'Comedy Movie 1' }, { title: 'Comedy Movie 2' }];
    const thrillerMovies = [{ title: 'Thriller Movie 1' }, { title: 'Thriller Movie 2' }];

    // Set up spy object return values for service methods
    movieApiService.trendingMovieApiData.and.returnValue(of({ results: trendingMovies }));
    movieApiService.fetchComedyMovies.and.returnValue(of({ results: comedyMovies }));
    movieApiService.fetchThrillerMovies.and.returnValue(of({ results: thrillerMovies }));

     // Trigger ngOnInit
    fixture.detectChanges();

    // Assert that movies are correctly initialized
    expect(component.trendingMovieResult).toEqual(trendingMovies);
    expect(component.comedyMovieResult).toEqual(comedyMovies);
    expect(component.thrillerMovieResult).toEqual(thrillerMovies);
  });

  it('should render movies in the DOM', () => {

    // Define sample movie data
    const trendingMovies = [{ title: 'Movie 1' }];
    const comedyMovies = [{ title: 'Comedy Movie 1' }];
    const thrillerMovies = [{ title: 'Thriller Movie 1' }];

    // Set up spy object return values for service methods
    movieApiService.trendingMovieApiData.and.returnValue(of({ results: trendingMovies }));
    movieApiService.fetchComedyMovies.and.returnValue(of({ results: comedyMovies }));
    movieApiService.fetchThrillerMovies.and.returnValue(of({ results: thrillerMovies }));

    fixture.detectChanges(); // Trigger ngOnInit

    // Get the compiled DOM element
    const compiled = fixture.nativeElement;

    // Assert that movies are rendered in the DOM
    expect(compiled.querySelectorAll('.trending-movie').length).toEqual(trendingMovies.length);
    expect(compiled.querySelectorAll('.comedy-movie').length).toEqual(comedyMovies.length);
    expect(compiled.querySelectorAll('.thriller-movie').length).toEqual(thrillerMovies.length);
  });
 });



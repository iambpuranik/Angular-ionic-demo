import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum SearchType{
	all = '',
	movie = 'movie',
	series = 'series',
	episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
	url = 'http://www.omdbapi.com/';
	apiKey = 'df13fd2a';

  constructor(private http: HttpClient) { 

  	// searcData(title: string, type:SearchType) : Observable<any> {
		 //  return this.http.get('${this.url}?s={encodeURI(title)}&type=${type}&apikey=${this.apiKey}')
		 //  .pipe(
		 //  		map(results => {
		 //  			console.log('RAW: ' results);
		 //  			return results['Search'];
		 //  		})
		 //  	);
  	// }

  	// getDetails(id){
  	// 	return this.http.get('${this.url}?i=${id}&plot=full&apikey=${this.apikey}');

  	// }

  }





}

 

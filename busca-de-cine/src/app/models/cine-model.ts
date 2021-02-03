export class CineModel{
	Title:string
	Year:string
	Rated:string
	Released:string
	Runtime:string
	Genre:string
	Director:string
	Writer:string
	Actors:string
	Plot:string
	Language:string
	Country:string
	Awards:string
	Poster:string
	Ratings:any
	Metascore:string
	imdbRating:string
	imdbVotes:string
	imdbID:string
	Type:string
	BoxOffice:string
	Production:string

	constructor(Title: string, Year: string, Rated: string, Released: string, Runtime: string, 
	Genre: string, Director: string, Writer: string, Actors: string, Plot: string, Language: string, 
	Country: string, Awards: string, Poster: string, Ratings: any, Metascore: string, imdbRating: string, 
	imdbVotes: string, imdbID: string, Type: string, BoxOffice: string, Production: string){
		this.Title = Title;
		this.Year = Year;
		this.Rated = Rated;
		this.Released = Released;
		this.Runtime = Runtime;
		this.Genre = Genre;
		this.Director = Director;
		this.Writer = Writer;
		this.Actors = Actors;
		this.Plot = Plot;
		this.Language = Language;
		this.Country = Country;
		this.Awards = Awards;
		this.Poster = Poster;
		this.Ratings = Ratings;
		this.Metascore = Metascore;
		this.imdbRating = imdbRating;
		this.imdbVotes = imdbVotes;
		this.imdbID = imdbID;
		this.Type = Type;
		this.BoxOffice = BoxOffice;
		this.Production = Production;
	}

	public credits():object{
		return {
			Director: this.Director,
			Cast: this.Actors,
			"Writer(s)": this.Writer,
			Production: this.Production,
			"Award(s)": this.Awards,
			"Genre(s)": this.Genre,
			Rated: this.Rated,
			Country: this.Country,
			"Language(s)": this.Language,
			"Box Office": this.BoxOffice
		};
	}

}

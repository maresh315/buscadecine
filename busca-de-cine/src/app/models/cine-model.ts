export class CineModel{
	private Title:string
	private Year:string
	private Rated:string
	private Released:string
	private Runtime:string
	private Genre:Array<string>
	private Director:string
	private Writer:string
	private Actors:Array<string>
	private Plot:string
	private Language:string
	private Country:string
	private Awards:string
	private Poster:string
	private Ratings:Array<object>
	private Metascore:string
	private imdbRating:string
	private imdbVotes:string
	private imdbID:string
	private Type:string
	private BoxOffice:string
	private Production:Array<string>

	constructor(Title:string, Year:string, Rated:string,
	Released:string, Runtime:string, Genre:Array<string>,
	Director:string, Writer:string, Actors:Array<string>,
	Plot:string, Language:string, Country:string, 
	Awards:string, Poster:string, Ratings:Array<object>,
	Metascore:string, imdbRating:string, imdbVotes:string,
	imdbID:string, Type:string, BoxOffice:string,
	Production:Array<string>){
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

	
	public getTitle():string {
		return this.Title;
	}
	
	public getYear():string {
		return this.Year;
	}

	public getImdbID():string {
		return this.imdbID;
	}

	public getType():string {
		return this.Type;
	}

	public getPoster():string {
		return this.Poster;
	}

	
	public fullDescription():CineModel {
		return new CineModel(
			this.Title,
			this.Year,
			this.Rated,
			this.Released,
			this.Runtime,
			this.Genre,
			this.Director,
			this.Writer,
			this.Actors,
			this.Plot,
			this.Language,
			this.Country,
			this.Awards,
			this.Poster,
			this.Ratings,
			this.Metascore,
			this.imdbRating,
			this.imdbVotes,
			this.imdbID,
			this.Type,
			this.BoxOffice,
			this.Production
		)
	}
	

}

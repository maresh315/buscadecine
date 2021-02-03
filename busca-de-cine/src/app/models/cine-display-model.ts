export class CineDisplayModel{
	Title:string
	Year:string
	Poster:string
	imdbID:string

	constructor(Title: string, Year: string, Poster: string, imdbID: string){
		this.Title = Title;
		this.Year = Year;
		this.Poster = Poster;
		this.imdbID = imdbID;
	}

	
}

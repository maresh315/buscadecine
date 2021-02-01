export class CineDisplayModel{
	private Title:string
	private Year:string
	private Poster:string

	constructor({Title, Year, Poster}){
		this.Title = Title;
		this.Year = Year;
		this.Poster = Poster;
	}

	
	public getTitle():string {
		return this.Title;
	}
	
	public getYear():string {
		return this.Year;
	}

	public getPoster():string {
		return this.Poster;
	}

	
}

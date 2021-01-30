export class UderModel{
	private email:string
	private password:string
	private fname:string
	private lname:string
	private cineList:Set<any>

	constructor(email:string, password:string, fname?:string, 
	lname?:string, cineList?:Set<any>){
		this.email = email;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.cineList = cineList;
	}

	
	public get name():string {
		return `${this.fname} ${this.lname}`.trim();
	}
	
	public get getEmail():string {
		return this.email;
	}
	
	public get getPassword():string {
		return this.password;
	}
	
	public set updateCineList(item:any) {
		this.cineList.add(item);
	}

	public get getCineList():Set<any> {
		return this.cineList;
	}
	
	public set updateFname(fname:string) {
		this.fname = fname;
	}

	public set updateLname(lname:string) {
		this.lname = lname;
	}

	
}


export class Member {
	cin: number;
	nom: string;
	prenom: string;
	email: string;
	address: string;
	sexe: string;
	profession: string;
	birthDate: string;
	bloodType: string;
	password: string;
	isDonor: boolean;




	constructor(cin: number, Nom: string, Prenom: string, EMAIL: string, Address: string, Sexe: string, Profession: string, BirthDate: string, BloodType: string, password: string, isDonor: boolean) {
		this.cin = cin;
		this.nom = Nom;
		this.prenom = Prenom;
		this.email = EMAIL;
		this.address = Address;
		this.sexe = Sexe;
		this.profession = Profession;
		this.birthDate = BirthDate;
		this.bloodType = BloodType;
		this.password = password;
		this.isDonor = isDonor;
	}

}
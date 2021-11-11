export class authenticationRequest {
    private cin: number;
    private password: string;

    constructor(cin: number, password: string) {
        this.cin = cin;
        this.password = password;
    }

}
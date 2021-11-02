export class authenticationResponse {
    public jwt: string;

    constructor(totken: string) {
        this.jwt = totken;
    }

     get gtoken(): string{
        return this.jwt;
    }
    
}
import { Member } from "./member";
import { Operation } from "./operation";

export interface BloodBag {
    bid: number;
    bloodType: string;
    donationDate: string;
    expirationDate: string;
    availability: boolean;
    memberBloodBag: Member;
    oprBlood: Operation;
}
import { Member } from "./member";

export interface Operation {
    OID: number;
    OprType: string;
    Hospital: string;
    ScheduledDate: string;
    performed: boolean;
    member: Member;
}
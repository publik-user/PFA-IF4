import { BloodBag } from "../bloodBag";
import { Member } from "../member";
import { Operation } from "../operation";

export interface bloodBagCore {
    bloodBag: BloodBag;
    OprBlood: Operation;
    memberBloodBag: Member;
}
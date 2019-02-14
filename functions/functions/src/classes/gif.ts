import { Timestamp } from '@google-cloud/firestore';

export class Gif {
    
    id: string;
    link: string;
    lastUsed: Date;
    isActive: boolean;

    constructor(id: string, link: string, lastUsed: Timestamp, isActive: boolean) {
        
        this.id = id;
        this.link = link;
        this.lastUsed = lastUsed.toDate();
        this.isActive = isActive;
    }
}

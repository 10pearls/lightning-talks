import { Timestamp } from "@google-cloud/firestore";

export class Talk {
    
    id: string;
    talkTitle: string;
    speakerNameList: string[];
    speakerEmailList: string[];
    talkExcerpt: string;
    dateSubmission: Date;
    dateTentative: Date;
    dateSchedule: Date;
    dateModified: Date;
    urlPresentation: string;
    urlVideo: string;
    dislikeCount: number;
    dislikeList: string[];
    likeCount: number;
    likeList: string[];
    isSpecialTalk: boolean;
    isActive: boolean;

    constructor(id: string, talkTitle: string, speakerNameList: string[], speakerEmailList: string[],
        talkExcerpt: string, dateSubmission: Timestamp, dateTentative: Timestamp, dateSchedule: Timestamp, dateModified: Timestamp,
        urlPresentation: string, urlVideo: string, dislikeCount: number, dislikeList: string[], likeCount: number,
        likeList: string[], isSpecialTalk: boolean, isActive: boolean) {

        this.id = id;
        this.talkTitle = talkTitle;
        this.speakerNameList = speakerNameList;
        this.speakerEmailList = speakerEmailList;
        this.talkExcerpt = talkExcerpt;
        this.dateSubmission = dateSubmission.toDate();
        this.dateTentative = dateTentative.toDate();
        this.dateSchedule = dateSchedule.toDate();
        this.dateModified = dateModified.toDate();
        this.urlPresentation = urlPresentation;
        this.urlVideo = urlVideo;
        this.dislikeCount = dislikeCount;
        this.dislikeList = dislikeList;
        this.likeCount = likeCount;
        this.likeList = likeList;
        this.isSpecialTalk = isSpecialTalk;
        this.isActive = isActive;
    }
}

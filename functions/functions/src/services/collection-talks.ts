import * as firestore from './firestore';
import * as datetime from './datetime';
import { Talk } from '../classes/talk';
import { Timestamp } from '@google-cloud/firestore';
import * as constants from '../constants';
import * as firconstants from '../constants/firestore';

/** Get a Ligthing Talks that is upcoming in 1 working day */
export const getNextDayTalk = async (): Promise<Talk> => {

    try {
        const currentWorkingTimeStamp: Timestamp = Timestamp.fromDate(new Date());
        const twoDaysLaterWorkingTimestamp: Timestamp = Timestamp.fromDate(datetime.getNextWork(new Date()));
        const collectionRef = await firestore.getCollectionReference(firconstants.collectionTalks);
        const snapshot = await collectionRef.where(firconstants.filterDateSchedule, firconstants.queryGreater, currentWorkingTimeStamp)
            .where(firconstants.filterDateSchedule, firconstants.queryGreater, twoDaysLaterWorkingTimestamp)
            .limit(1)
            .get();

        if (snapshot.empty) {
            throw new Error(constants.messageNoRecords);
        }

        const document = snapshot.docs[0];
        const talk: Talk = new Talk(document.get('id'), document.get('talkTitle'), document.get('speakerNameList'), document.get('speakerEmailList'),
            document.get('talkExcerpt'), document.get('dateSubmission'), document.get('dateTentative'), document.get('dateSchedule'), document.get('dateModified'),
            document.get('urlPresentation'), document.get('urlVideo'), document.get('dislikeCount'), document.get('dislikeList'), document.get('likeCount'),
            document.get('likeList'), document.get('isSpecialTalk'), document.get('isActive'));

        return talk;
    }
    catch (err) {
        return err;
    }
}

/** Get all active Ligthing Talks */
export const getAllActiveTalks = async (): Promise<Talk[] | string> => {

    try {
        const collectionRef = await firestore.getCollectionReference(firconstants.collectionTalks);
        const snapshot = await collectionRef.where(firconstants.filterIsActive, firconstants.queryEquals, true).get();

        if (snapshot.empty) {
            throw new Error(constants.messageNoRecords);
        }

        const talks: Talk[] = [];

        snapshot.forEach((doc) => {
            const talk: Talk = new Talk(doc.get('id'), doc.get('talkTitle'), doc.get('speakerNameList'), doc.get('speakerEmailList'),
                doc.get('talkExcerpt'), doc.get('dateSubmission'), doc.get('dateTentative'), doc.get('dateSchedule'), doc.get('dateModified'),
                doc.get('urlPresentation'), doc.get('urlVideo'), doc.get('dislikeCount'), doc.get('dislikeList'), doc.get('likeCount'),
                doc.get('likeList'), doc.get('isSpecialTalk'), doc.get('isActive'));
            talks.push(talk);
        });

        return talks;
    }
    catch (err) {
        return err;
    }
}

import * as firestore from './firestore';
import { Gif } from '../classes/gif';
import * as constants from '../constants';
import * as firconstants from '../constants/firestore';

/** Obtain a gif link that hasn't been used recently (bygone: in the past). */
export const getBygoneGif = async (): Promise<string> => {

    try {
        const collectionRef = await firestore.getCollectionReference(firconstants.collectionTalksGifstore);
        const snapshot = await collectionRef.where(firconstants.filterIsActive, firconstants.queryEquals, true)
            .orderBy(firconstants.filterLastUsed)
            .limit(1)
            .get();

        if (snapshot.empty) {
            throw new Error(constants.messageNoRecords);
        }

        const doc = snapshot.docs[0];
        const gif: Gif = new Gif(doc.id, doc.get('link'), doc.get('lastUsed'), doc.get('isActive'));
        return gif.link;
    }
    catch (err) {
        return err;
    }
}

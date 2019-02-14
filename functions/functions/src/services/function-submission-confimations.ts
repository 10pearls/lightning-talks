import * as functions from 'firebase-functions';

/** 
 * Sends emails to speakers when their Talk is submitted by them or by us on their behalf.
 * The speakers will be informed of when they might get scheduled approximately.
 * A slack message will be sent us to notify that a Talk has been proposed.
 */
export const send = async (snap: FirebaseFirestore.DocumentSnapshot, context: functions.EventContext) => {
    //TODO: implementation
}

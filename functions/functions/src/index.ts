import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as submissionConfirmations from './services/function-submission-confimations'
import * as speakerReminders from './services/function-speaker-reminders'
import * as talkAnnoucements from './services/function-talk-annoucements'
import * as slockbot from './services/function-slackbot'
import * as firconstants from './constants/firestore';

admin.initializeApp({ credential: admin.credential.applicationDefault() });

export const postSubmissionConfirmation = functions.firestore.document(firconstants.docReferenceTalks).onCreate(submissionConfirmations.send);

export const postSpeakerReminder = functions.https.onRequest(speakerReminders.send);

export const postTalkAnnoucement = functions.https.onRequest(talkAnnoucements.send);

export const slackBot = functions.https.onRequest(slockbot.eventListener);

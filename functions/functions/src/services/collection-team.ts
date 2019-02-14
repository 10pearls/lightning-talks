import * as firestore from './firestore';
import { TeamMember } from '../classes/teamMember';
import * as constants from '../constants';
import * as firconstants from '../constants/firestore';

/** Get all Ligthing Talk current team members. */
export const getAllTeamMembers = async (): Promise<TeamMember[] | string> => {

    try {
        const collectionRef = await firestore.getCollectionReference(firconstants.collectionTeam);
        const snapshot = await collectionRef.where(firconstants.filterIsActive, firconstants.queryEquals, true).get();

        if (snapshot.empty) {
            throw new Error(constants.messageNoRecords);
        }
        
        const teamMembers: TeamMember[] = [];
        
        snapshot.forEach((doc) => {
            const teamMember: TeamMember = new TeamMember(doc.id, doc.get('name'), doc.get('emailPrimary'), doc.get('emailSecondary'), doc.get('isActive'));
            teamMembers.push(teamMember);
        });

        return teamMembers;
    }
    catch (err) {
        return err;
    }
}

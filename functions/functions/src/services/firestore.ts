import * as admin from 'firebase-admin';

export const getCollectionReference = async (collectionName: string): Promise<FirebaseFirestore.CollectionReference> => {
    const db = admin.firestore();
    return db.collection(collectionName);
}

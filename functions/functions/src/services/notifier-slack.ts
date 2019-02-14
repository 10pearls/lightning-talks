import * as functions from 'firebase-functions';
import { IncomingWebhook } from '@slack/client';

/** Post to a slack channel. */
export const postAnnoucement = async (channelToken: string, message: string): Promise<string> => {

    try {
        const webhookUrl = functions.config().slack.webhookurl + channelToken;
        const webhook = new IncomingWebhook(webhookUrl);
        const result = await webhook.send(message);
        return result.text;
    }
    catch (err) {
        return err;
    }
}

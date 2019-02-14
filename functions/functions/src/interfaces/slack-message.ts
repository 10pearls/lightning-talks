export interface slackMessage {
    
    text: string;
    attachments: attachment[];
}

export interface attachment {
    
    // Constants for all attachments
    fallback: string;
    color: string;

    // Only in main part and action buttons part
    fields: field[];

    // Only in action buttons part
    actions: action[];

    // Only in gif part
    image_url: string;
}

export interface field {
    
    title: string;
    value: string;
    short: boolean;
}

export interface action {
    
    type: string;
    style: string;
    text: string;
    url: string;
}

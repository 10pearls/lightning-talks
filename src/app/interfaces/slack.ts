export interface SlackPayload {
  attachments: BaseAttachment[];
}

export interface BaseAttachment {
  fallback: string;
  color: string;
}

export interface AttachmentField extends BaseAttachment {
  fields: SlackField[];
}

export interface AttachmentImage extends BaseAttachment {
  imageUrl: string;
}

export interface AttachmentAction extends AttachmentField {
  actions: SlackAction[];
}

export interface SlackAction {
  type: string;
  style: string;
  text: string;
  url: string;
}

export interface SlackField {
  title: string;
  value: string;
  short: boolean;
}

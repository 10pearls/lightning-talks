import { SlackPayload, AttachmentField, SlackField, AttachmentImage, AttachmentAction, SlackAction } from '../../interfaces/slack';
import { Talk } from '../../interfaces/talk';


export class SlackPayloadBuilder {
  private slackPayload: SlackPayload;
  private talk: Talk;
  private announcement: AttachmentField;
  private footer: AttachmentAction;
  private footerText: string;

  constructor(talk: Talk) {
    this.talk = talk;
    this.footerText = `You can sign up for your very own Lightning Talk,
    follow the Talks schedule, or give feedback at http://lightningtalks.10pearls.com`,
      this.slackPayload = {
        attachments: [],
      };
    return this;
  }

  getSlackPayload(): SlackPayload {
    return this.slackPayload;
  }

  setTalk(talk: Talk): SlackPayloadBuilder {
    this.talk = talk;
    return this;
  }

  addAnnouncement(): SlackPayloadBuilder {
    this.announcement = this._getAnnouncement();
    this.slackPayload.attachments.push(this.announcement);
    return this;
  }

  addFooter(): SlackPayloadBuilder {
    this.footer = this._getFooter();
    this.slackPayload.attachments.push(this.footer);
    return this;
  }

  setFooterText(text: string): SlackPayloadBuilder {
    this.footerText = text;
    return this;
  }

  addFooterField(footerField: SlackField): SlackPayloadBuilder {
    this.footer.fields.push(footerField);
    return this;
  }

  addFooterActions(action: SlackAction): SlackPayloadBuilder {
    this.footer.actions.push(action);
    return this;
  }

  addFooterButton(text, url, style): SlackPayloadBuilder {
    this.addFooterActions(this._getFooterButton(text, url, style));
    return this;
  }

  addGIF(imageUrl: string): SlackPayloadBuilder {
    const lightningGIF: AttachmentImage = {
      fallback: '',
      color: 'warning',
      imageUrl,
    }
    this.slackPayload.attachments.push(lightningGIF);
    return this;
  }

  addAnnouncementTitle(title?: string): SlackPayloadBuilder {
    const announcementTitle: SlackField = {
      title: '',
      value: `@channel, and :zap: *\'Lightning Talks\'* :zap: ${title || 'fans, we have an upcoming talk tomorrow'}:`,
      short: false,
    };
    this.announcement.fields.push(announcementTitle);
    return this;
  }

  addAnnoucmentField(announcementField: SlackField): SlackPayloadBuilder {
    this.announcement.fields.push(announcementField);
    return this;
  }

  addTalkTitle(): SlackPayloadBuilder {
    this.addAnnoucmentField(this._getTalkTitle());
    return this;
  }

  addTalkDescription(): SlackPayloadBuilder {
    this.addAnnoucmentField(this._getTalkDescription());
    return this;
  }

  addSpeakers(): SlackPayloadBuilder {
    this.addAnnoucmentField(this._getTalkSpeaker());
    return this;
  }

  addDate(): SlackPayloadBuilder {
    this.addAnnoucmentField(this._getTalkDate());
    return this;
  }

  addVenue(): SlackPayloadBuilder {
    this.addAnnoucmentField(this._getTalkVenue());
    return this;
  }

  addTime(): SlackPayloadBuilder {
    this.addAnnoucmentField(this._getTalkTime());
    return this;
  }


  // ---------------------- Private Methods --------------------- //

  private _getFooterButton(text, url, style): SlackAction {
    return {
      type: 'button',
      style,
      text,
      url,
    };
  }

  private _getTalkTitle(): SlackField {
    const talkTitle: SlackField = {
      title: 'Title',
      value: this.talk.title,
      short: false,
    };
    return talkTitle;
  }

  private _getTalkDescription(): SlackField {
    const talkTitle: SlackField = {
      title: 'Description',
      value: this.talk.description,
      short: false,
    };
    return talkTitle;
  }

  private _getTalkSpeaker(): SlackField {
    const talkTitle: SlackField = {
      title: 'Speaker(s)',
      value: this.talk.speakers.join(', '),
      short: true,
    };
    return talkTitle;
  }

  private _getTalkDate(): SlackField {
    const talkTitle: SlackField = {
      title: 'Date',
      value: this.talk.date,
      short: true,
    };
    return talkTitle;
  }

  private _getTalkVenue(): SlackField {
    const talkTitle: SlackField = {
      title: 'Venue',
      value: this.talk.venue || '10Pearls University Auditorium',
      short: true,
    };
    return talkTitle;
  }

  private _getTalkTime(): SlackField {
    const talkTitle: SlackField = {
      title: 'Time',
      value: this.talk.time || '12:40 sharp (literally)',
      short: true,
    };
    return talkTitle;
  }

  private _getAnnouncement(): AttachmentField {
    const talkDetails: AttachmentField = {
      fallback: this._getAnnouncementTitle(),
      color: 'warning',
      fields: [],
    }
    return talkDetails;
  }

  private _getAnnouncementTitle(): string {
    return `{{announcement}}\n*Title: * ${this.talk.title}\n
    *Description: * ${this.talk.description} \n
    *Speaker(s): *${this.talk.speakers.join(' ')}\n
    *Date: *${this.talk.date}\n
    *Time: *${this.talk.time || '12:40 sharp (literally)'} \n
    *Venue: *${this.talk.venue || '10Pearls University Auditorium'}`;
  }

  private _getFooter(): AttachmentAction {
    const footer: AttachmentAction = {
      fallback: this.footerText,
      color: 'warning',
      fields: [],
      actions: [],
    }
    return footer;
  }

}

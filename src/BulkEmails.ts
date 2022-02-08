import { EmailObject } from './EmailObject';

export class BulkEmails {
  constructor() {
    this.emails = [];
  }

  addEmail(emailParams) {
    const emailObject = new EmailObject(emailParams);
    this.emails.push(emailObject.data);
  }

  addEmails(emailsParamsArray) {
    const _self = this;

    emailsParamsArray.forEach(function (emailParams) {
      _self.addEmail(emailParams);
    });
  }

  flush() {
    this.emails = [];
  }
}
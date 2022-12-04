export class PullRequest {

    daysOld: number = 0;
    url: string = '';
    serviceName: string = '';
    author: string = '';
    reviewers: string = '';
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.daysOld) this.daysOld = initializer.daysOld;
      if (initializer.url) this.url = initializer.url;
      if (initializer.serviceName) this.serviceName = initializer.serviceName;
      if (initializer.author) this.author = initializer.author;
      if (initializer.reviewers) this.reviewers = initializer.reviewers;
    }
  }
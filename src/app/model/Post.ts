export class Post {
  title: string;
  constructor(pTitle: string, pContent: string) {
    this.create_at = new Date();
    this.title = pTitle;
    this.content = pContent;
    this.loveIt = 0;
  }
  content: string;
  loveIt: number;
  create_at: Date;
}

//定义类
export default class Tip {
  constructor(title, content, date, tipId) {
    this.title = title;
    this.content = content;
    this.date = date;
    this.tipId = tipId;
    //
    console.log(this.a);
  }

  toString() {
    return '(' + this.title + ', ' + this.content + ',' + this.date + ')';
  }
  a=100;
}
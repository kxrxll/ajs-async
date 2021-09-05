export default class GameSaving {
  constructor(dataRaw) {
    const data = JSON.parse(dataRaw);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}

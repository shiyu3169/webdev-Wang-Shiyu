export class Website {
  _id: String;
  name: String;
  developerId: String;
  description: String;

  constructor(_id, name, developerID) {
    this._id = _id;
    this.name = name;
    this.developerId = developerID;
  }
}

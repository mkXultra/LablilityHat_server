module.exports = class ServiceAction {
  constructor(name, type, serviceName, params) {
    this.name = name;
    this.type = type;
    this.serviceName = serviceName;
    this.params = params;
  }
  equal(){
    //todo: implement

    return false;
  }
  async execute(){
    //todo: implement
    return 'execute';
  }
}
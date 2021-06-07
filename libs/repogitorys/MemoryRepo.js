const fs = require('fs').promises;
const ServiceActions = require('../valueObjects/ServiceAction')

class MemoryRepo {
  constructor(fileName) {
    this.fileName = fileName;    
  }
  async init(){
    const confStr = await fs.readFile(this.fileName, 'utf-8');
    const conf = JSON.parse(confStr);
    this.info = conf.info;
    this.uuidConfLists = conf.uuidConfLists;
  }
  getAction(uuid,serviceName,triggerType,triggerParams){
    const uuidConf = this.uuidConfLists[uuidConfLists];
    if(!uuidConf){
      return null;
    }
    const targetService = uuidConf[serviceName]
    if(!targetService){
      return null;
    }
    const actionsList = targetService.actions
    if(!actionsList){
      return null
    }

    let targetAction = null;
    for (const [actionName, value] of Object.entries(actionsList)) {
      if(value.triggerType === triggerType){
        if(value.triggerParams === triggerParams ){
          targetAction = value;
          targetAction.name = actionName;
        }
      }
    }

    if(!targetAction){
      return null
    }
    
    return new ServiceActions(targetAction.name, targetAction.action.type, serviceName, triggerParams);
  }
  equal(){
    //todo: implement
    return false;
  }
}
const fs = require('fs').promises;
const ServiceActions = require('../valueObjects/ServiceAction')

class RelationService {
  constructor(repo) {
    this.repo = repo;    
  }
  async executeRelationServiceAction(params){
    const action = this.repo.getAction();
    const result = await action.execute();
  }
}
Departments = new Mongo.Collection('departments');

// Deny all client-side updates to user documents
Departments.deny({
  update() { return true; }
});
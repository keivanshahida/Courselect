Courses = new Mongo.Collection('courses');

// Deny all client-side updates to user documents
Courses.deny({
  update() { return true; }
});
var app = app || {};

// Users
app.BehanceUser = new Behance.UserModel({id: 339011});
app.BehanceUser.fetch();
app.BehanceUser.getProjects();

setTimeout(function () {
  app.BehanceUser.getNextProjectsPage();
}, 1000);

setTimeout(function () {
  app.BehanceUser.getPreviousProjectsPage();
}, 2000);


// Projects
app.BehanceProject = new Behance.ProjectModel({id: 729292});
app.BehanceProject.fetch();
app.BehanceProject.getComments();

setTimeout(function () {
  app.BehanceProject.getNextCommentsPage();
}, 1000);

setTimeout(function () {
  app.BehanceProject.getPreviousCommentsPage();
}, 2000);


// Wips
app.BehanceWip = new Behance.WipModel({id: 12001});
app.BehanceWip.fetch();
// app.BehanceWip.getRevision();


// Search
app.SearchResults = new Behance.SearchCollection();
app.SearchResults.sortBy('appreciations');
console.log( 'search results', app.SearchResults );


console.log( 'Be', Behance );
console.log( 'app', app );
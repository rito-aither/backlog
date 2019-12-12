
function get_projects() {
  
  var projects = UrlFetchApp.fetch(space+"/api/v2/notifications?apiKey="+backlog_tokon);
  var projectslist = JSON.parse(projects.getContentText());
  
  return projectslist ;
}

function get_issuetype(project_id) {
  
  var issuetype = UrlFetchApp.fetch(space+"/api/v2/projects/"+project_id+"/issueTypes?apiKey="+backlog_tokon);
  var issuetypelist = JSON.parse(issuetype.getContentText());

  return issuetypelist ;
}

function get_categories(project_id) {
  
  var categories = UrlFetchApp.fetch(space+"/api/v2/projects/"+project_id+"/categories?apiKey="+backlog_tokon);
  var categorieslist = JSON.parse(categories.getContentText());
  
  return categorieslist ;
 }

function get_users() {
  
  var user = UrlFetchApp.fetch(space+"/api/v2/users?apiKey="+backlog_tokon);
  var userlist = JSON.parse(user.getContentText());

  return userlist ;
}

function get_issue() {
  
  var issue = UrlFetchApp.fetch(space+"/api/v2/issues?apiKey="+backlog_tokon+"&count=100&");
  var issuelist = JSON.parse(issue.getContentText());
   
  return issuelist;
}

function get_notification (){
  
  var notifications=UrlFetchApp.fetch(space+"/api/v2/notifications?apiKey="+backlog_tokon);
  var notificationslist=JSON.parse(notifications.getContentText());
  
  return notificationslist;
}




function get_projects() {
  
  var projects = UrlFetchApp.fetch(space+"/api/v2/notifications?apiKey="+backlog_token);
  var projectslist = JSON.parse(projects.getContentText());
  
  return projectslist ;
}

function get_issuetype(project_id) {
  
  var issuetype = UrlFetchApp.fetch(space+"/api/v2/projects/"+project_id+"/issueTypes?apiKey="+backlog_token);
  var issuetypelist = JSON.parse(issuetype.getContentText());
  
  return issuetypelist ;
}

function get_categories(project_id) {
  
  var categories = UrlFetchApp.fetch(space+"/api/v2/projects/"+project_id+"/categories?apiKey="+backlog_token);
  var categorieslist = JSON.parse(categories.getContentText());
  
  return categorieslist ;
}

function get_users() {
  
  var user = UrlFetchApp.fetch(space+"/api/v2/users?apiKey="+backlog_token);
  var userlist = JSON.parse(user.getContentText());
  
  return userlist ;
}

function get_issue() {
  
  var issue = UrlFetchApp.fetch(space+"/api/v2/issues?apiKey="+backlog_token+"&count=100&");
  var issuelist = JSON.parse(issue.getContentText());
  
  return issuelist;
}

function get_notification (){
  
  var notifications=UrlFetchApp.fetch(space+"/api/v2/notifications?apiKey="+backlog_token+"&count=5");
  var notificationslist=JSON.parse(notifications.getContentText());
  
  return notificationslist;
}

function get_notification_array(get_notification){
  
  var notification_array =[]
  
  for( var i =0; i <get_notification.length;i++){
    
    notification_array.push(
      
      [
        get_notification[i]["id"],
        get_notification[i]["alreadyRead"],
        get_notification[i]["reason"],
        get_notification[i]["resourceAlreadyRead"],
        get_notification[i]["project"],
        get_notification[i]["issue"],
        get_notification[i]["comment"],
        get_notification[i]["pullRequest"],
        get_notification[i]["pullRequestComment"],
        get_notification[i]["sender"],
        get_notification[i]["created"],
        
        
      ]
        
        )
        
        
        }
      
        return notification_array
        
        }
        
        
        

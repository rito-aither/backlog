function post_slack(message) {
  var jsonData =
  {
//     "username" : username,
//     "icon_emoji": icon,
     "attachments" : message
  };
  var payload = JSON.stringify(jsonData);

  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };

  UrlFetchApp.fetch(postUrl, options);
} 
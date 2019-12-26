var spreadsheet= SpreadsheetApp.getActiveSpreadsheet();
// var sheet= spreadsheet.getSheetByName(spreadsheet.getActiveSheet());
var sheet_config=spreadsheet.getSheetByName("config");
var sheet_information=spreadsheet.getSheetByName("お知らせ");
var sheet_def=spreadsheet.getSheetByName("def");
// バックログの情報
var backlog_token = PropertiesService.getScriptProperties().getProperty('backlog_token');
var space=PropertiesService.getScriptProperties().getProperty("space");

//slack
var postUrl = PropertiesService.getScriptProperties().getProperty("slack_webhook_url");
//var username = 'backlog';  // 通知時に表示されるユーザー名
//var icon = ':hatching_chick:';  // 通知時に表示されるアイコン


function test(){
  
  
//  var get_information = get_notification();

Logger.log(get_infomation["issue"])  
//  
//  set_cells(sheet_information,information,1,1) 
//  Logger.log(get_information)
//  
  

}
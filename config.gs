var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName(ss.getActiveSheet());
var sheet_config=ss.getSheetByName("config");
var sheet_information=ss.getSheetByName("お知らせ");
var backlog_token = PropertiesService.getScriptProperties().getProperty('backlog_token');
var space=PropertiesService.getScriptProperties().getProperty("space");





function test_config (){
  
 Logger.log(ss.getActiveSheet());
 
  Logger.log(get_notification());
}
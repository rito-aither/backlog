function set_cells(sheet,array,start_row,start_column){
  
  sheet.getRange(start_row,start_column,array.length,array[0].length).setValues(array);

  return 
}

function get_all_cells (sheet) {
  
  var sheet_lsatRow= sheet.getLastRow();
  var sheet_lastColumn = sheet.getLastColumn();
  
  var get_cells = sheet.getRange(1,1,sheet_lsatRow,sheet_lastColumn).getValues();
  
  return get_cells

}

function get_cell (sheet,start_row,start_column,end_row,end_column){


var get_cells = sheet.getRange(start_row,start_column,end_row,end_column).getValues();

   return get_cells
  
}

function onOpen(){
 
  //メニュー配列
  var myMenu=[
    
    {name: "プロパティセット", functionName: "set_config"}
    
   ];
 
  SpreadsheetApp.getActiveSpreadsheet().addMenu("プロパティ",myMenu); //メニューを追加
 
}


function set_config() {
  //入力するメッセージボックス
  var backlog_token_result = Browser.inputBox("backlog_token:", Browser.Buttons.OK_CANCEL);
  if (backlog_token_result != "cancel"){
    
    PropertiesService.getScriptProperties().setProperty("backlog_token", backlog_token_result)
  }
  
  var space_result = Browser.inputBox("space:", Browser.Buttons.OK_CANCEL);
  if (space_result != "cancel"){
    
    PropertiesService.getScriptProperties().setProperty("space",space_result)
    
  }
  
  var slack_webhook_url_result = Browser.inputBox("slack_webhook_url :", Browser.Buttons.OK_CANCEL);
  if (slack_webhook_url_result != "cancel"){
    
    PropertiesService.getScriptProperties().setProperty("slack_webhook_url", slack_webhook_url_result)
    
  }
  
  Browser.msgBox("プロパティセットされました。");
  
}

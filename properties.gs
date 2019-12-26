function deleteTrigger(triggerKey) {
  var triggerId = PropertiesService.getScriptProperties().getProperty(triggerKey);
  if(!triggerId) return;
  
  ScriptApp.getProjectTriggers().filter(function(trigger){
    return trigger.getUniqueId() == triggerId;
  })
  .forEach(function(trigger) {
    ScriptApp.deleteTrigger(trigger);
  });
  PropertiesService.getScriptProperties().deleteProperty(triggerKey);
}

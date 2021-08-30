(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e){e.exports=JSON.parse('{"operationId":"Credential.set","summary":"Update a Credential for a Researcher, Study, Participant, Activity, or Sensor.","description":"","tags":["Credential"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"access_key","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object"}}}},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object"}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"}],"postman":{"name":"Update a Credential for a Researcher, Study, Participant, Activity, or Sensor.","description":{"content":"","type":"text/plain"},"url":{"path":["type",":id","credential",":access_key"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"},{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"access_key"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PUT","body":{"mode":"raw","raw":"\\"<object>\\""},"auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"put","path":"/type/{id}/credential/{access_key}","hashId":"update-a-credential-for-a-researcher-study-participant-activity-or-sensor","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/update-a-credential-for-a-researcher-study-participant-activity-or-sensor","previous":{"title":"Add a Credential for a Researcher, Study, Participant, Activity, or Sensor.","permalink":"/api/add-a-credential-for-a-researcher-study-participant-activity-or-sensor"},"next":{"title":"Delete a Credential for a Researcher, Study, Participant, Activity, or Sensor.","permalink":"/api/delete-a-credential-for-a-researcher-study-participant-activity-or-sensor"},"jsonRequestBodyExample":{}}')}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{284:function(e){e.exports=JSON.parse('{"operationId":"Participant.list_credentials","summary":"List all Credentials for a Participant.","description":"List all Credentials for a Participant.","tags":["Participant"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"transform","in":"query","schema":{"type":"string"}}],"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"object","description":"Every object can have one or more credential(s) associated with it. (i.e. `my_researcher.credentials = [\'person A\', \'person B\', \'api A\'\', \'person C\', \'api B\']`)","properties":{"origin":{"type":"string","description":"The root object this credential is attached to. The scope of this credential is limited to the object itself and any children.","example":"U1234567890"},"access_key":{"type":"string","description":"Username or machine-readable public key (access).","example":"my_email@address.com"},"secret_key":{"type":"string","nullable":true,"writeOnly":true,"description":"SALTED HASH OF Password or machine-readable private key (secret)."},"description":{"type":"string","description":"The user-visible description of the credential.","example":"Firstname Lastname"}},"required":["origin","access_key","secret_key","description"]}}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"postman":{"name":"List all Credentials for a Participant.","description":{"content":"","type":"text/plain"},"url":{"path":["participant",":id","credential"],"host":["{{baseUrl}}"],"query":[{"description":{"content":"","type":"text/plain"},"key":"transform","value":"<string>"}],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"method":"GET","auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"get","path":"/participant/{id}/credential","hashId":"list-all-credentials-for-a-participant","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/LAMP-platform/api/list-all-credentials-for-a-participant","previous":{"title":"Set a Tag for the Participant or its childen.","permalink":"/LAMP-platform/api/set-a-tag-for-the-participant-or-its-childen"},"next":{"title":"Create a Credential for a Participant.","permalink":"/LAMP-platform/api/create-a-credential-for-a-participant"}}')}}]);
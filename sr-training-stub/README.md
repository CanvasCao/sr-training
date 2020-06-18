start mountebank
``` shell script
mb start --configfile ./imposters.ejs
```

try to cal mountebank stub
``` shell script
curl -i -X GET http://localhost:4545/items --data '{"optionalField": true}'
```

- prepare mountebank stubs
- write act tests (several api tests)
- write e2e tests (bff api test)
- impl coding
- switch stubs to upstrgit commit -m "first commit"eam run act tests
# qbei_json_table
An indexed query-by-example Web page for a JSON data source


# External referncing 

https://jfseb.github.io/qbei_json_table/app/public/index.html

# examples pulling in data via url : 


[https://jfseb.github.io/qbei_json_table/app/public/index.html?data=xdata.json](https://jfseb.github.io/qbei_json_table/app/public/index.html?data=xdata.json)

# Configuration: 

# hardcode path: 
```
 data="<url>"
```

```
mdldata="<url>"
```

# precompute index: 

Loads data as plain json array
```
[ { c1 : v1, c2 : v2, ...},
  { c1 : v1,          c3 : xx, ...}]
``` 

a member "uri" will never be displayed but used as link for record.

## model config file

An optional model file 
`<data>.model.json` 
allows specifying displayed columns (and order) (.columns), indexed columns ( .columnsIndexed), 
column Default Width ( .columnsDefaultWidth )

```
 
```
see 
[example with model][https://jfseb.github.io/qbei_json_table/app/public/index.html?data=ydata.json]
[config file][https://jfseb.github.io/qbei_json_table/app/public/ydata.json.model.json]



## index file
An optional index File 
`<dataurl>.serIndex.json` 
replaces the index computation within the data. 






# Development 

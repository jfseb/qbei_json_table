
//import * as Promise from 'es6-shim';

import { Component} from 'react';
import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as Thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import * as rere from 'react-redux';
import * as AdaptElastic from './adaptElastic.ts';

const MAXWIDTH= 570;
const MINWIDTH= 30;
const NRRECS = 180;

// fire off XMLHttpRequest early
function reqListener () {
  console.log(this.responseText);
}

function getJSONOrNullPromise(url) {
  return new (window as any).Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      try {
        var r = JSON.parse(this.responseText);
        console.log(' loaded ' + url + ' ' + this.responseText.length);
        resolve(r);
      } catch(e) {
        console.log(' error loading ' + url);
        resolve(null);
      }
    });
    oReq.addEventListener("error", function(err) {
      console.log('error loading ' + url + ' ' + err);
      resolve(null);
    })
    console.log("dataurl" + url);
      oReq.open("GET", url);
      oReq.send();
    });
}

function augmentColumns(data: any[], columns : string[]) {
  var seenColumns = { "uri" : 1}; // skip
  if (columns) {
    return columns;
  }
  columns =[];
  data.forEach( rec => {
    Object.getOwnPropertyNames(rec).forEach( pn => {
      if ( !seenColumns[pn] ) {
        seenColumns[pn] = 1;
        columns.push(pn);
      }
    });
  });
  return columns;
}


function augmentColumnsIndexed(columns : string[], columnsIndexed) : any {
  if (columnsIndexed) {
    return columnsIndexed;
  }
  return columns.map(cn => cn);
}

function augmentColumnsDescription(columns : string[], columnsDescription) : any {
  if (columnsDescription) {
    return columnsDescription;
  }
  var result = {}; 
  columns.forEach( cn => result[cn] = cn);
  return result;
}

function augmentColumnsDefaultWidth(columns : string[], columnsDefaultWidth) : any {
  if (columnsDefaultWidth) {
    return columnsDefaultWidth;
  }
  var result = {}; 
  columns.forEach( cn => { result[cn] = 100; });
  return result;
}

function augmentData(data : any[], columns : string[]) {
  var seenColumns = { "uri" : 1}; 
  columns.forEach(cn => seenColumns[cn] = 1);
  data.forEach(rec => {
    var presentColumns = {};
    Object.getOwnPropertyNames(rec).forEach( pn => {
      presentColumns[pn] = 1;
      // TODO flatten array 
      if (!seenColumns[pn]) {
        delete rec[pn];
      }
    });
    columns.forEach(cn => {
      if (!presentColumns[cn]) {
        rec[cn] = "";
      }
    });
   });
}

function augmentSerIndex(result) {
  if ( result.serIndex) {
    return;
  }
  var elasticlunr = (window as any).elasticlunr;
  result.serIndex = AdaptElastic.makeLunrIndex(elasticlunr, result.data, result.columnsIndexed);
}

function augmentResult(result, jsonUrl: string) {
  result.columns = augmentColumns(result.data,result.columns);
  result.columnsIndexed = augmentColumnsIndexed(result.data,result.columns);
  result.columnsDescription = augmentColumnsDescription(result.columns, result.columnsDescription);
  result.columnsDefaultWidth = augmentColumnsDefaultWidth(result.columns, result.columnsDefaultWidth);
  augmentData(result.data, result.columns);
  augmentSerIndex(result);
}

function loadPlainJSONEtc(resolve, reject , jsonUrl) {
  var result = { data: null, 
                  modelDescription : null,
                  columnsDescription : null,
                  columns : null,
                  columnsDefaultWidth : null,
                  serIndex : null,
                  columnsIndexed : null
                  };
  getJSONOrNullPromise(jsonUrl).then(data  => {
      result.data = data;
      return getJSONOrNullPromise(jsonUrl+ ".serIndex.json");
    }).then( serIndex =>  {
      result.serIndex = serIndex;
      return getJSONOrNullPromise(jsonUrl+ ".model.json");
    }).then( model => {
      if ( model ) {
        result.modelDescription = model.modelDescription || jsonUrl;
        result.columnsDescription = model.columnsDescription;
        result.columnsDefaultWidth = model.columnsDefaultWidth;
        result.columns = model.columns;
        result.columnsIndexed = model.columnsIndexed;
        setTitleEtc(jsonUrl, result.modelDescription);
      }
      augmentResult(result,jsonUrl);
      var r = result;
      (window as any).mdldata = r;
      records = r.data;
      console.log("here data #" + r.data.length);
      var elasticlunr = (window as any).elasticlunr;
      AdaptElastic.makeElasticIndex(elasticlunr, r.serIndex);
      console.log("parsed ok!");
      resolve(r);
    })
}


function hideColumnsDialog() {
  var columnsDialog = document.getElementById("columnsDialog");
  var columnsTableBody = document.getElementById("columnsTableBody");
  while(columnsTableBody.firstChild) {
    columnsTableBody.removeChild(columnsTableBody.firstChild);
  }
  (columnsDialog as any).data = undefined;
  columnsDialog.style.zIndex = "0";
  columnsDialog.style.visibility = "hidden";
  (columnsDialog.style as any).contentVisibility = "hidden";
}


function parseSetIndices(s : string) {
  return s.split(',').map(a => parseInt(a));
}

function stringifySetIndices(s : number[]) {
  return s.join(",");
}

function setColumnIndices(setIndices : number[]) {
  reStart(setIndices);
}


function onColumnsDialogCancel(ev) {
  console.log('onChangeSelect' +ev);
  hideColumnsDialog();
}
document.getElementById('btnColumnsDialogCancel').onclick = onColumnsDialogCancel;

function onColumnsDialogReset(ev) {
  var setIndices = [];
  (window as any).mdldata.columns.forEach( (c,index) => setIndices.push(index));
  setColumnIndices(setIndices);
  hideColumnsDialog();
}
document.getElementById('btnColumnsDialogReset').onclick = onColumnsDialogReset;

function onColumnsDialogUpdate(ev) {
  var columnsDialog = document.getElementById("columnsDialog");
  var newSetIndices = (columnsDialog as any).data;
  if(newSetIndices ) {
    hideColumnsDialog();
    setColumnIndices(newSetIndices);
  }
}
document.getElementById('btnColumnsDialogUpdate').onclick = onColumnsDialogUpdate;

function onChangeSelect(ev) {
  console.log('onChangeCol' +ev);
  debugger;
}

function onChangeClick(ev) {
  debugger;
  console.log('onChangeCLick' +ev);
}

function removeIndex(idx : number) {
  var columnsDialog = document.getElementById("columnsDialog");
  var data = (columnsDialog as any).data as number[];
  if ( !data) {
    (columnsDialog as any).data  = getSetIndices();
  }
  data = (columnsDialog as any).data as number[];
  (columnsDialog as any).data = data.filter( i => i != idx);
  console.log( (columnsDialog as any).data);
}

function addIndex(idx : number) {
  var columnsDialog = document.getElementById("columnsDialog");
  var data = (columnsDialog as any).data as number[];
  if ( !data) {
    (columnsDialog as any).data  = getSetIndices();
  }
  data = (columnsDialog as any).data as number[];
  data.push(idx);
  console.log(data);
}

function onChangeColumn(ev) {
  if ( ev.target.checked) {
    addIndex(ev.target.data);
  } else {
    removeIndex(ev.target.data);
  }
  console.log('onChangeSelect' + ev.data);
}

function addColumnRow(table: any, col: string, index : number, setIndices: number[]) {
  var tr = document.createElement("tr");
  table.appendChild(tr);
  var td = document.createElement("td");
  var cb = document.createElement("input");
  td.appendChild(cb);
  cb.type = "checkbox";
  (cb as any).data = index;
  cb.onchange = onChangeColumn;
  cb.onselect = onChangeSelect;
  cb.onclick = onChangeClick;
  if( setIndices.indexOf(index) >= 0 ) {
    cb.checked = true;
  }
  tr.appendChild(td);
  var td = document.createElement("td");
  td.innerText = '' + (index);
  tr.appendChild(td);
  var td = document.createElement("td");
  td.innerText =  col ;
  tr.appendChild(td);
  var td = document.createElement("td");
  td.innerText =  (window as any).mdldata.columnsDescription[col];
  tr.appendChild(td);
}

function getSetIndices() : number[] {
  var columns = (window as any).mdldata.columns;
  var setIndices = [] as number[];
  var m = window.location.hash.match(/\/col(\d+(,\d+)*)\//);
  if (m) {
    setIndices = parseSetIndices(m[1]);
  }
  if (setIndices.length == 0) {
    columns.forEach( (cn,index) => setIndices.push(index));
  }
  return setIndices;
}

function showColumns() {
  //alert((window as any).mdldata.columns);
  var columnsDialog =  document.getElementById("columnsDialog");
  if ( columnsDialog.style.visibility == "") {
    hideColumnsDialog();
    return;
  }
  columnsDialog.style.visibility = "";
  columnsDialog.style.zIndex = "100";
  (columnsDialog.style as any).contentVisibility = "";
  var tableBody = document.getElementById("columnsTableBody");
  var columns = (window as any).mdldata.columns;
  var setIndices = getSetIndices();
  columns.forEach( (col,index) => {
    addColumnRow(tableBody, col, index,setIndices);
  });
}

var btn = document.getElementById("btnColumns");
if ( btn ) {
  btn.onclick = showColumns; 
}

function setTitleEtc(url, description) {
  var title = document.getElementById("Title"); 
  if ( title ) {
    description = description || url;
    document.title = description;    
    var a = document.createElement("a");
    a.href = url;
    a.innerText = "data";
    document.getElementById("Title").innerText = description + "&nbsp;"
    document.getElementById("Title").appendChild(a);
  }
}

try {

  var mdlsrc = "";
var loadPromise = new (window as any).Promise(function (resolve, reject) {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function() {
    var r = JSON.parse(this.responseText);
    (window as any).mdldata = r;
    records = r.data;
    console.log("here data" + r.data.length);
    setTitleEtc(mdlsrc, r.modelDescription);
    (window as any).makeElasticIndex(r.serIndex);
    console.log("parsed ok!");
    resolve(r);
  });
  var us = new URLSearchParams(window.location.search);
  if(us.has("data")) {
    var dataurl = us.get("data");
    loadPlainJSONEtc(resolve,reject,dataurl);
    return;
  }
  // plain json
  var jsonUrl = document.getElementById('container').getAttribute('data');
  // TODO get from search paramter ? 
  if ( jsonUrl ) {
    loadPlainJSONEtc(resolve,reject,jsonUrl);
    return;
  }
  var mdlsrc = document.getElementById('container').getAttribute('mdlsrc');
  if ( mdlsrc ) {
    oReq.open("GET", mdlsrc);
    oReq.send();
    return;
  }
  console.log("Unable to obtain model data");
});
} catch(e) {
  alert('this page requires a recent version of Microsoft Edge, Chrome, Safari or similar');
}

//var elastic = (window as any).elasticlunr.Index.load(
//  (window as any).serIndex);

interface IRecord {
  "fiori intent": string,
  "appId": string,
  "AppName": string,
  "ApplicationComponent": string
};

//types u = keyof IRecord;
let u = "appId" as keyof IRecord;
/*
"appId",
            "AppKey",
            "AppName",
                "ApplicationComponent",
                "RoleName",
                "ApplicationType",
                "BSPName",
                "BSPApplicationURL",
                "releaseName",
                "BusinessCatalog",
*/

 const XdefaultCols = ( [
  'appId',
  "fiori intent",
  'AppName',
  'ApplicationComponent',
                "BSPName",
                "releaseName",
                "BusinessCatalog",
/*
"PrimaryODataServiceName",
"SemanticAction",
"SemanticObject",
"ArtifactId",
"BusinessRoleName",
"BusinessGroupName",
"BSPPackage",
"RoleName", */
] ) as typeof u[];

const XallColumns = ( ((window as any).mdldata && (window as any).mdldata.columns) || XdefaultCols);

function getURLColsFromURL(allColumns : string[]) {
  var m = /col(\d+(,\d+)*)/.exec((window as any).location.hash || "");
  var urlcols = ((m && m[1] ) || "").split(",").map(s => { try { return parseInt(s); } catch(e) { return -1; }}).map(i => allColumns[i]).filter(c =>  !!c);
  urlcols = urlcols.slice(0,15);
  return urlcols;
}

var Xurlcols = getURLColsFromURL(XallColumns);

const Xcolumns =(  Xurlcols.length && Xurlcols || XdefaultCols );

const XcolumnsDescription = ((window as any).mdldata && (window as any).mdldata.columnsDescription)
 || { "appId" : "The name of the app"};

const XcolumnsDefaultWidth = ((window as any).mdldata && (window as any).mdldata.columnsDefaultWidth)
 || { "fiori intent" : 180 };


function mergeDataRespose(state : IState, mdlData : any) : IState {
  var aState = (Object as any).assign({},state) ;
    aState.allColumns = mdlData.columns || XdefaultCols;
    var urlcols = getURLColsFromURL(aState.allColumns);
    aState.columns = (  urlcols.length && urlcols || mdlData.defaultCols || mdlData.columns );
    aState.columnsDescription = mdlData.columnsDescription  || { "appId" : "The name of the app"};
    aState.columnsDefaultWidth = mdlData.columnsDefaultWidth  || { "fiori intent" : 180 };
    return aState;
}




/*
const columnsWidth = [
  { id : 'appId',
    width : 50} ,
  "fiori intent",
  'AppName',
  'ApplicationComponent',
                "BSPName",
                "releaseName",
                "BusinessCatalog"
] as typeof u[];
*/

/*
var columnLabels = {} as { [key: string]: string };
columns.forEach(function (col : string) {
  columnLabels[col] = col;
});
*/

var records =  [{
  "fiori intent": "n/a",
  "appId": "F1766",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dddd66777",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dddd6ddddddddddddddddd6",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dd444444444dd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dddd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17d99966424353999dfasfasfdd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17d12342aaaa14413dddddd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17d999999dddbbbbb66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dd55rwr5555dd6aerwerewr6",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17d999911111222dd222299ddd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dddd3ssss4123424266",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17d999999ddadfffffffffffd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dddd624124126",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17d999999314234312ddd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dddqweqwerqwerqwqwd66",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17drrrrwetwertd777dd66yyy",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
},
{
  "fiori intent": "n/a",
  "appId": "F17dd888qrwrrwer8d6ewerwer6",
  "AppName": "Special G/L Posting",
  "ApplicationComponent": "FI-FIO-AR",
}
] as IRecord[];
/*
      ts timestamp primary key,
          recordno int not null,
          generations int not null,
          botid varchar(10) not null,
          userid varchar(40) not null,
          message varchar(1024) not null,
          response varchar(1024) not null,
          action varchar(512) not null,
          intent varchar(20) not null,
          conversationid varchar(40) not null,
          delta int not null,
          status varchar(10) not null,
          meta json
*/
//records = (window as any).data || records;

records = [
{
  "fiori intent": "loading...",
  "appId": "loading...",
} as IRecord
];

function produceSearchResult(state: string): number[] {

  var u = (window as any).elastic;
  if(state) {
    if(u) {
      var r = u.search(state);
      return r.map(function(o :any) {
        return parseInt(o.ref);
      });
    }
  }
  return records.map( (r,index) => index );
}

/*
select a bunch of requested indices,
*/
function fetch(input: string): any {
  return new (window as any).Promise(function (resolve, reject) {

    setTimeout(function () {


      //console.log("search for: " + input);
      var indices = produceSearchResult(input);
      var recMap = [] as IRecord[];
      var result = [] as { i: number, data: IRecord }[];
      indices.forEach(i => {
        if (i >= 0) {
          result.push({ i: i, data: records[i] });
        }
      })
      var res = {
        json: result,
        indexList: indices
      };
      resolve(res);
    }, 300);
  })
}



//================================================



class FakeObjectDataListStore {
  size: number;
  _cache: IRecord[];

  constructor(/*number*/ size: number, records?: IRecord[]) {
    this.size = size || 0;
    this._cache = records || [];
    // this._cache = [];
  }

  createFakeRowObjectData(/*number*/ index: number): IRecord {
    var u = JSON.parse(JSON.stringify(records[index % 2])) as IRecord;
    u.appId = "aaa" + index;
    return u;
  }

  getObjectAt(/*number*/ index: number): IRecord {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this._cache[index] === undefined) {
      this._cache[index] = this.createFakeRowObjectData(index);
    }
    return this._cache[index];
  }

  /**
  * Populates the entire cache with data.
  * Use with Caution! Behaves slowly for large sizes
  * ex. 100,000 rows
  */
  getAll(): IRecord[] {
    if (this._cache.length < this.size) {
      for (var i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this._cache.slice();
  }

  getSize(): number {
    return this.size;
  }
}

var FixedDataTable = require('fixed-data-table-2');

const { Table, Column, Cell } = FixedDataTable;

var SortTypes = {
  ASC: 'ASC',
  DESC: 'DESC',
};

function reverseSortDirection(sortDir: string) {
  if(sortDir === SortTypes.ASC) {
    return SortTypes.DESC;
  }
  if(sortDir === SortTypes.DESC) {
    return "";
  }
  return SortTypes.ASC;
}

interface OSC {
  onSortChange: any,
  qbe : string,
  title: string,
  onQBEChange(columnKey : TY_recordKey, newQBE : string) : void,
  sortDir?: any,
  columnKey?: any
}

class SortHeaderCell extends React.Component<OSC, any> {
  //onSortChange? : any;
  //sortDir : any;
  //columnKey : any;

  constructor(props: OSC) {
    super(props);
    this._onSortChange = this._onSortChange.bind(this);
    this._onQBEChange = this._onQBEChange.bind(this);
  }



  render() {
    var { sortDir, children, qbe,  ...props } = this.props;
    // {...props}>
    return (
      <Cell title={this.props.title}>
        <a title={this.props.title} className="qbeHeaderLink" onClick={this._onSortChange}>
          {children} {sortDir ? (sortDir === SortTypes.DESC ? '\u25BC' : '\u25B2') : ''}
        </a>
        <br/>
        <input className="qbeHeaderInput" type="text" placeholder="query" style={{width:"100%"}}  value={qbe}   onChange={e => this._onQBEChange(e.target.value)}></input>
      </Cell>
    );
  }

  _onQBEChange(newQBE: string) {
    if(this.props.onQBEChange) {
     this.props.onQBEChange(
      this.props.columnKey,
       newQBE
     );
    }
  }

  _onSortChange(e: any) {
    e.preventDefault();

    if (this.props.onSortChange) {
      this.props.onSortChange(
        this.props.columnKey,
        this.props.sortDir ?
          reverseSortDirection(this.props.sortDir) :
          SortTypes.ASC
      );
    }
  }
}

const TextCell = ({ rowIndex, data, columnKey, ...props }: any) => (
  <Cell title={data.getObjectAt(rowIndex)[columnKey]}  {...props}>
  <div className="qbeCellDiv" title={data.getObjectAt(rowIndex)[columnKey]}>
   {data.getObjectAt(rowIndex)[columnKey]} </div>
  </Cell>
);

class DataListWrapper {
  _indexMap: number[];
  _data: any;
  constructor(indexMap: number[], data: any) {
    this._indexMap = indexMap || [];
    this._data = data;
  }

  getSize() {
    return this._indexMap.length;
  }

  getObjectAt(index: number): IRecord {
    return this._data.getObjectAt(
      this._indexMap[index],
    );
  }
}


class MyLinkCell extends React.Component<any,any> {
  render() {
    const {rowIndex, field, data, label, ...props} = this.props;
    const record = data.getObjectAt(  rowIndex);
    const cellurl = record[field];
    const celllabel = record[label];
    return (
      <Cell {...props}>
        <a className="qbeLinkLink" href={cellurl} target="_blank">&#9788; {celllabel}</a>
      </Cell>
    );
  }
}

function getClientRect() {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return { height : y, width: x}
}

interface IPropsSortExample {
  dispatch: any,
  records: IRecord[],
  columns : string[],
  columnsDefaultWidth : IColumnsWidth,
  columnsDescription : {[key: string] : string},
  columnsWidth : IColumnsWidth,
  colSortDirs: IColSortDirs,
  columnsQBEs : IColumnsQBE,
  sortIndexes: number[]
}

interface ISortState {

};

class SortExample extends React.Component<IPropsSortExample, ISortState> {
//  _dataList: any;
//  state: any;
  constructor(props: IPropsSortExample) {
    super(props);
    //console.log(' here props' + JSON.stringify(props.records))
  //  this._dataList = new FakeObjectDataListStore(20, props.records);
    ;//new FakeObjectDataListStore(2000);

    var size = 10; //this._dataList.getSize();
/*    this.state = {
      sortedDataXList: this._dataList,
      colSortDirs: {}
    };
*/
    this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this);
    this._onSortChange = this._onSortChange.bind(this);
    this._onColumnQBEChange = this._onColumnQBEChange.bind(this);
  };

  _onColumnResizeEndCallback(newColumnWidth : number, columnKey : TY_recordKey) {
    this.props.dispatch(fireSetColumnWidth(columnKey, newColumnWidth));
  }

  _onColumnQBEChange(columnKey: TY_recordKey, newQBE: string) {
    this.props.dispatch(fireSetQBE(columnKey, newQBE));
  }
  _onClearAllQBEs() {
    this.props.dispatch(fireClearAllQBEs());
  }

  _onSortChange(columnKey: TY_recordKey, sortDir: string) {
    this.props.dispatch(fireSetSort(columnKey, sortDir));
  }

  render() {
    // var { /*sortedDataList, sortIndexes,  colSortDirs*/} = this.state;

    var _dataList = new FakeObjectDataListStore(this.props.records && this.props.records.length, this.props.records)
    var colSortDirs = this.props.colSortDirs;
    var size = _dataList.getSize();
    var sortIndexes = this.props.sortIndexes || [];
    var sortIndexes = sortIndexes.slice(0,NRRECS);
    var columnsDefaultWidth = this.props.columnsDefaultWidth;
    var columnsDescription = this.props.columnsDescription;
    var columns = this.props.columns;
    var columnsWidth = this.props.columnsWidth;
    this._onClearAllQBEs = this._onClearAllQBEs.bind(this);
    var sortedDataList = new DataListWrapper(sortIndexes, _dataList); //this._dataList),
    //console.log(' here props' + JSON.stringify(this.props))
    //console.log("here is the size " + sortedDataList.getSize());
    return (
      <Table
        className="qbeTable"
        rowHeight={40}
        rowsCount={sortedDataList.getSize()}
        headerHeight={60}
        onColumnResizeEndCallback={this._onColumnResizeEndCallback}
        isColumnResizing={false}
        width={getClientRect().width - 20}
        height={getClientRect().height - 130}
        {...this.props}>
        <Column
          header={<Cell>link<br/><button value="avalue"  title="clear all Query fields " className="btnclearall btn btn-default btnclearall" onClick={this._onClearAllQBEs}> clear all &#9655;</button> </Cell>}
          cell={
            <MyLinkCell
              data={sortedDataList}
              field="uri"
              label="AppKey"
            />
          }
          width={120}
        />
        {columns.map((col) =>
          <Column key={col}
            columnKey={col}

          width={columnsWidth[col] || columnsDefaultWidth[col] || 150}
          isResizable={true}
          minWidth={MINWIDTH}
          maxWidth={MAXWIDTH}

            header={
              <SortHeaderCell
                title={columnsDescription[col] || col}
                onSortChange={this._onSortChange}
                qbe={this.props.columnsQBEs[col] || ""}
                onQBEChange={this._onColumnQBEChange}
                sortDir={colSortDirs[col]}>
                {col}
              </SortHeaderCell>
            }
            cell={<TextCell data={sortedDataList} />}
          />
        )}

      </Table>
    );
  }
}

function keyToIndex(key : string, columns: string[]) {
  return (columns as any).indexOf(key);
}

function updateHash(a : IState) {
  var hsh = "";
  if ( a.columns ) {
    hsh += "/col" + a.columns.map(key =>{
      var i = keyToIndex(key, a.allColumns);
      return  `${i}`;
    }).join(",");
  }
  hsh += "/w";
  var width = getClientRect().width;
  hsh += Object.keys(a.columnsWidth).map(key =>{
    var i = keyToIndex(key, a.allColumns);
    return  `${i}=${(100*a.columnsWidth[key]/width).toFixed(1)}`;
  }).join("&");
  hsh += "/q";
  hsh += Object.keys(a.columnsQBE).map(key =>{
    var i = keyToIndex(key, a.allColumns);
    return  `${i}=${encodeURIComponent(a.columnsQBE[key])}`;
  }).join("&");
  hsh += `/s${encodeURIComponent(a.searchStr)}/`;
  hsh += "/o";
  hsh += Object.keys(a.colSortDirs).map(key =>{
    var i = keyToIndex(key, a.allColumns);
    return  `${i}=${encodeURIComponent(a.colSortDirs[key])}`;
  }).join("&");
  
  window.location.hash = hsh;
  return a;
}


//==============================================




//https://gist.github.com/gaearon/074b0905337a6a835d82

import thunk from 'redux-thunk';


interface IAction {
  type: string
};


interface IActionSetSearch extends IAction {
  //posts?: { i: number, data: IRecord }[],
  searchStr?: any
}

interface IActionReceivePosts extends IAction {
  posts: { i: number, data: IRecord }[],
  searchStr: string,
  indexListSearchFiltered?: number[] //indexlist relevant for search
}

interface IActionSetColumnSort extends IAction {
  type: string,
  columnKey: TY_recordKey,
  sortDir: string
};


interface IActionGotData extends IAction {
  type: string,
  mdlData : any,
 };

interface IActionSetColumnWidth extends IAction {
  type: string,
  columnKey: TY_recordKey,
  newColumnWidth : number
};

interface IActionSetColumnQBE extends IAction {
  type: string,
  columnKey: TY_recordKey,
  newQBE : string
};
interface IActionClearAllQBEs extends IAction {
  type: string
};


function getInitialState() : IState {

  var aState = {
    clientRect: getClientRect(),
    allLoadedRecs: [], indexList: [],
    allColumns: [],
    columnsDefaultWidth :{},
    columnsDescription : {},
    columns : [],
    colSortDirs: {},
    columnsQBE :{},
    sortIndexes: [],
    init : false,
    indexListQBEFiltered : [],
    indexListSearchFiltered: [],
    columnsWidth: {},
    searchStr: ""
  } as IState;
  /*
  aState = mergeDataRespose(aState,(window as any).mdldata);
  parseAndApplyHash(aState);*/
  return aState;
}

function parseSearch() {
var hash = window.location.hash;
var res = {search : ""};
var args = hash.split('/');
var newColumnIdxs = [];
args.forEach(function(o) {
  if(o.charAt(0) === 's') {
    res.search = decodeURIComponent(o.substring(1));
  }
});
return res.search;
}


function parseAndApplyHash(aState: IState) : IState {

  var hash = window.location.hash;
  var args = hash.split('/');
  var newColumnIdxs = [];
  args.forEach(function(o) {
    if(o.startsWith("col")) {
      var cols = o.substring(3).split(',');
      try {
        newColumnIdxs = cols.map( k => parseInt(k));
        newColumnIdxs = newColumnIdxs.filter( i => (i >= 0) && (i < aState.allColumns.length));
      } catch(e) {
        console.log('error parsing col hash, expect col1,3,2,1' + o);
      }
    }
    if(o.charAt(0) === 'w') {
      var cols = o.substring(1).split('&');
      cols.forEach(col => {
        var res = col.split("=");
        try {
          var c = aState.allColumns[parseInt(res[0])];
          if(c) {
            var val = Math.min(MAXWIDTH, Math.max(MINWIDTH, Math.round(aState.clientRect.width * parseFloat(res[1]) / 100)));
            if(typeof val === "number" && val !== NaN) {
              aState.columnsWidth[c] = val
            }
          }
        } catch( e) {
          console.log(" error parsing /w " + o + " (" + e +")");
        }
      });
    }
    if(o.charAt(0) === 's') {
      aState.searchStr = decodeURIComponent(o.substring(1));
    }
    if(o.charAt(0) === 'q') {
      var cols = o.substring(1).split('&');
      cols.forEach(col => {
        var res = col.split("=");
        try {
          var column = parseInt(res[0]);
          if(typeof column === "number" && aState.allColumns[column] && res[1]) {
            aState.columnsQBE[aState.columns[column]] = decodeURIComponent(res[1]);
          }
        } catch( e) {
          console.log(" error parsing /q " + o + " (" + e +")");
        }
      });
    }
    if(o.charAt(0) === 'o') {
      var cols = o.substring(1).split('&');
      cols.forEach(col => {
        var res = col.split("=");
        try {
          var column = parseInt(res[0]);
          if(typeof column === "number" && aState.allColumns[column] && ((res[1] === "ASC" || res[1] === "DESC"))) {
            aState.colSortDirs[aState.columns[column]] = decodeURIComponent(res[1]);
          }
        } catch( e) {
          console.log(" error parsing /o " + o + " (" + e +")");
        }
      });
    }
  }
  );
  newColumnIdxs = newColumnIdxs.filter( i => (i >= 0) && (i < aState.allColumns.length));
  if ( newColumnIdxs.length == 0) {
    newColumnIdxs = getSetIndices();
    newColumnIdxs = newColumnIdxs.filter( i => (i >= 0) && (i < aState.allColumns.length));
  } 
  aState.columns = newColumnIdxs.map( i => aState.allColumns[i]);
  return aState;
}

function navigateReloading(url) {
  window.document.location.assign(url);
  window.location.reload(url);
  window.location.href = url;
  setTimeout(function() { window.location.href = url; }, 0);
  setTimeout(function() { window.location.href = url; window.location.reload(); }, 0);
}

// this puts columns exclusivly in the hash, not the search
// as /col1,2,3/
function reStart(newColumns: number[]) {
  var s = window.location.toString();
  var indexStr = newColumns.join(',');
  var sprior = s;
  /*
  s = s.replace(/\?c\d+(,\d+)*#/,"?c" + indexStr + "#").replace(/\/s[^\/]+/,"");
  s = s.replace(/\?c\d+(,\d+)*#/,"?c" + indexStr + "#").replace(/\/s[^\/]+/,"");
  */
  s = s.replace(/\/col\d+(,\d+)*\//,"/col" + indexStr + "/");
  if (s == sprior ) {
    window.location.hash = window.location.hash + "/col" + indexStr + "/";
    navigateReloading(window.location.toString());
    return;
  }
  window.location.href = s;
  navigateReloading(window.location.toString());
}

/**
 * Function creating a vector of n dimensions and filling it with a single
 * value if required.
 *
 * @param  {number} n    - Dimensions of the vector to create.
 * @param  {mixed}  fill - Value to be used to fill the vector.
 * @return {array}       - The resulting vector.
 */
function vec(n : number, fill : any) {
  const vector = new Array(n);

  if (arguments.length > 1) {
    for (let i = 0; i < n; i++)
      vector[i] = fill;
  }
  return vector;
}

/**
 * Function returning the Jaro score between two sequences.
 *
 * @param  {mixed}  a     - The first sequence.
 * @param  {mixed}  b     - The second sequence.
 * @return {number}       - The Jaro score between a & b.
 */
function jaro(a : string, b : string) {
  // Fast break
  if (a === b)
    return 1;

  let max, min;

  if (a.length > b.length) {
    max = a;
    min = b;
  }
  else {
    max = b;
    min = a;
  }

  // Finding matches
  const range = Math.max(((max.length / 2) | 0) - 1, 0),
        indexes = vec(min.length, -1),
        flags = vec(max.length, false);

  let matches = 0;

  for (let i = 0, l = min.length; i < l; i++) {
    const character = min[i],
          xi = Math.max(i - range, 0),
          xn = Math.min(i + range + 1, max.length);

    for (let j = xi, m = xn; j < m; j++) {
      if (!flags[j] && character === max[j]) {
        indexes[i] = j;
        flags[j] = true;
        matches++;
        break;
      }
    }
  }

  const ms1 = new Array(matches),
        ms2 = new Array(matches);

  let si;

  si = 0;
  for (let i = 0, l = min.length; i < l; i++) {
    if (indexes[i] !== -1) {
      ms1[si] = min[i];
      si++;
    }
  }

  si = 0;
  for (let i = 0, l = max.length; i < l; i++) {
    if (flags[i]) {
      ms2[si] = max[i];
      si++;
    }
  }

  let transpositions = 0;
  for (let i = 0, l = ms1.length; i < l; i++) {
    if (ms1[i] !== ms2[i])
      transpositions++;
  }

  // Computing the distance
  if (!matches)
    return 0;

  const t = (transpositions / 2) | 0,
        m = matches;

  return ((m / a.length) + (m / b.length) + ((m - t) / m)) / 3;
}


function findCol(str: string, columns: string[])  : string {
  var bestCol = undefined;
  var bestRank = 0.0;
  columns.forEach(col => {
    var rank = jaro(str,col.toLowerCase())
    if(rank > 0.88 && rank > bestRank) {
      bestCol = col;
      bestRank = rank;
    }
  });
  return bestCol;
}

function processColumnOp(a : string, state : IState) {
  a = a.toLowerCase();
  var regex = /^((add)|(delete)|(del)) (column )?(.*)/;
  var m = regex.exec(a);
  if(!m) {
    return false;
  }
  var op = m[1];
  var colstr = m[6];
  console.log("col : " + col);
  var col = findCol(colstr, state.allColumns);
  var newColumns = [] as string[];
  if(col) {
    if ((op === "delete" || op === "del") && state.columns.indexOf(col) >= 0) {
      newColumns = state.columns.filter(co => co !== col);
    } else if(op === "add" && state.columns.indexOf(col) < 0) {
      newColumns = state.columns;
      newColumns.push(col);
    } else {
      return false;
    }
    reStart(newColumns.map(co => state.allColumns.indexOf(co)));
    return true;
  }
  return false;
}

function touchSearch() {
  var src = parseSearch();
  setTimeout( function() { 
    (document.getElementsByClassName("searchInput")[0] as any).value = "a"; 
  }, 10);
  setTimeout( function() { 
    (document.getElementsByClassName("searchInput")[0] as any).value = src; 
  }, 20);
}

// ------------
// reducers
// ------------

function state(state = getInitialState()
  , action: IAction) {
  switch (action.type) {
    case 'Setstate':
      //state.searchStr = action.searchStr;
      var a = (Object as any).assign({}, state) as IState;
      var actionSetstate = action as IActionSetSearch;
      if(processColumnOp(a.searchStr, state) ) {
        return a;
      }
      a.searchStr = actionSetstate.searchStr;


      //console.log("Here select sarch state " + JSON.stringify(state));
      updateHash(a);
      return a; // action.searchStr;
  case 'ReceivePosts':
      var a = (Object as any).assign({}, state) as IState; // copy of state!
      a.init = true;
      var actionReceivePosts = action as IActionReceivePosts;
      a.indexListSearchFiltered = [];
      actionReceivePosts.posts.forEach(p => {
        a.allLoadedRecs[p.i] = p.data;
        a.indexListSearchFiltered.push(p.i);
      });
      a.indexListSearchFiltered = actionReceivePosts.indexListSearchFiltered;
      a = applyQBE(a);
      return reSortAgain(a);
      //a[action.searchStr] = action.posts.map(p => p.data);
      // {
      //  ...state,
      //  [action.searchStr]: action.posts
      //}
      //console.log("procudes state on RECEIVE_POSTS " + JSON.stringify(a));
    case 'Resized': {
      var a = (Object as any).assign({}, state) as IState;
      a.clientRect = getClientRect();
      return a;
    }
    case 'SetColumnSort': {
      var a = (Object as any).assign({}, state) as IState;
      var actionSort = action as IActionSetColumnSort;
      var a = applySort(a, actionSort.columnKey, actionSort.sortDir);
      updateHash(a);
      return a;
    }
    case 'SetColumnWidth': {
      var a = (Object as any).assign({}, state) as IState;
      var actionSetWidth = action as IActionSetColumnWidth;
      a.columnsWidth = (Object as any).assign({}, state.columnsWidth);
      a.columnsWidth[actionSetWidth.columnKey] = actionSetWidth.newColumnWidth;
      updateHash(a)
      return a;
    }
    case 'ClearAllQBEs' : {
      var a = (Object as any).assign({}, state) as IState;
      a.columnsQBE = {};
      updateHash(a);
      return applyQBE(a);
    }
    case 'GotData': {
      var a = (Object as any).assign({},state) as IState;
      a.init = true;
      var actionGotData = action as IActionGotData;
      a = mergeDataRespose(a, actionGotData.mdlData);
      a = parseAndApplyHash(a);
      console.log(' Got Data ' + JSON.stringify(a.columnsQBE) + JSON.stringify(a,undefined,2));
      setTimeout( function(){ fetchPosts(a);}, 0);
      setTimeout( touchSearch, 100);
      return applyQBE(a);
    }
    case 'SetColumnQBE': {
      var a = (Object as any).assign({}, state) as IState;
      var actionSetColumnQBE = action as IActionSetColumnQBE;
      a.columnsQBE = (Object as any).assign({}, state.columnsQBE);
      a.columnsQBE[actionSetColumnQBE.columnKey] = actionSetColumnQBE.newQBE;
      updateHash(a);
      return applyQBE(a);
    }
    default:
      //console.log("return default state " + JSON.stringify(a));
      return state;
  }
}

type IColSortDirs = { [key: string]: string }

type IColumnsWidth = { [key: string]: number }

type IColumnsQBE = { [key: string]: string }
// TODU LUNR.js

interface IState {
  clientRect :  { width: number, height: number},
  searchStr: string,
  allLoadedRecs: IRecord[], // a sparse array of records index stable!
  indexListSearchFiltered: number[] // a list of Search filtered indices
  init: boolean,


  allColumns: string[],
  columns : string[],

  columnsDescription : { [key: string] : string},
  columnsDefaultWidth : IColumnsWidth,

  //columnWidths
  columnsWidth : IColumnsWidth,

   //columnWidths
  columnsQBE : IColumnsQBE,
  indexListQBEFiltered : number[],

  // sort state
  sortIndexes: number[]
  colSortDirs: IColSortDirs
  //      [columnKey]: string,
  //    },
}

type TY_recordKey = keyof IRecord;

function applySort(a: IState, columnKey: TY_recordKey, sortDir: string): IState {
  a.colSortDirs = { [columnKey]: sortDir };
  reSortAgain(a);
  //console.log("return default state on  " + JSON.stringify(a));
  return a;
}

function reSortAgain(a: IState) {
  var sortIndexes = a.indexListQBEFiltered.slice(); // relevant indexes
  Object.keys(a.colSortDirs).forEach(function (columnKey: TY_recordKey) {
    var sortDir = a.colSortDirs[columnKey];
    if(sortDir === "") {
      sortIndexes.sort();
    } else {
      sortIndexes.sort((indexA, indexB) => {
        var recA = a.allLoadedRecs[indexA] as any;
        var recB = a.allLoadedRecs[indexA]
        var valueA = a.allLoadedRecs[indexA][columnKey];
        var valueB = a.allLoadedRecs[indexB][columnKey];
        var sortVal = 0;
        if (valueA > valueB) {
          sortVal = 1;
        }
        if (valueA < valueB) {
          sortVal = -1;
        }
        if (sortVal !== 0 && sortDir === SortTypes.DESC) {
          sortVal = sortVal * -1;
        }
        return sortVal;
      });
    }
  })
  a.sortIndexes = sortIndexes;
  return a;
}


function applyQBE(a: IState) {

  a.indexListQBEFiltered = Object.keys(a.columnsQBE).reduce( (prev, qbecol : TY_recordKey) =>
    {
      var val = a.columnsQBE[qbecol];
      if(!val) {
        return prev;
      }
      val = val.toLowerCase();
      return prev.filter( index => {
        return a.allLoadedRecs[index][qbecol] && (a.allLoadedRecs[index][qbecol].toLowerCase().indexOf(val) >= 0);
      })
    }
   ,a.indexListSearchFiltered);
    return reSortAgain(a);
  }

type IReadRecords = { i: number, data: IRecord }[];

type IsearchStr = string;
// --------------
// action creators
// --------------

function fireSetstate(searchStr: IsearchStr) : IActionSetSearch {
  return {
    type: 'Setstate',
    searchStr
  };
}


function fireOnResize() : IAction {
  return {
    type: 'Resized'
  };
}


function fireSetSort(columnKey: TY_recordKey, sortDir: string): IActionSetColumnSort {
  return {
    type: 'SetColumnSort',
    columnKey,
    sortDir
  };
}

function fireSetColumnWidth(columnKey: TY_recordKey, newColumnWidth: number) : IActionSetColumnWidth {
  return {
    type: 'SetColumnWidth',
    columnKey,
    newColumnWidth
  };
}


function fireSetQBE(columnKey: TY_recordKey, newQBE: string) : IActionSetColumnQBE {
  return {
    type: 'SetColumnQBE',
    columnKey,
    newQBE
  };
}

function fireClearAllQBEs() : IActionClearAllQBEs {
  return {
    type: 'ClearAllQBEs'
  };
}

function fireGotData(mdlData : any) : IActionGotData {
  return {
    type: 'GotData',
    mdlData : mdlData
  };
}

function onGotData(dispatch: any, mdlData: any) {
   dispatch(fireGotData(mdlData));
}


function fireReceivePosts(searchStr: IsearchStr, dataread: IReadRecords, indexList: number[]) : IActionReceivePosts {
  return {
    type: 'ReceivePosts',
    searchStr: searchStr,
    posts: dataread,
    indexListSearchFiltered : indexList
  };
}

function fetchPosts(state: IState) {
  return function (dispatch: any) {
    var toIndices =
      fetch(`${state.searchStr}`)
        .then(function (req: any) { return { json: req.json, indexList: req.indexList }; })
        .then(function (res: any) {
          console.log("fetch posts ...");
           return dispatch(fireReceivePosts(state.searchStr, res.json, res.indexList)) });
    return { thehandle: 1 };
  };
}

function fetchPostsIfNeeded(searchStr: IState, force? :boolean) {
  return function (dispatch: any, getState: any) {
    {
      if (force || !getState().state.init) {
        return dispatch(fetchPosts(searchStr));
      }
    }
  };
}

// ------------
// app
// ------------

function logger(a: any /*{ getState }*/) {
  // next => action =>
  //
  //
  var getState = a.getState;
  return function (next: any) {
    return function (action: any) {
      //console.info('dispatching', action);
      const result = next(action);
      //console.log('state after', getState());
      return result;
    };
  }
}

//const createStoreWithMiddleware = createStore);

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers({ state }); //, postsBysearchStr });
const store = createStoreWithMiddleware(reducer);
//ithMiddleware(reducer);

function fetchDataForMyApp(props: any, force ? :boolean ) {
  const { state } = props;
  return fetchPostsIfNeeded(state, force);
}

function registerCallback(dispatch: any) {
  loadPromise.then(function(r) {
    dispatch(fireGotData(r));
  });
}


export interface AppProps { value?: string, dispatch?: any, state?: IState }

//@provide(store)
//@connect(state => state)
class MyApp extends  Component<AppProps, undefined> {
 //  Component<AppProps, undefined> {

  componentDidMount() {
    const { dispatch } = this.props;
    console.log("componentDisMount");
    registerCallback(dispatch);
    dispatch(fetchDataForMyApp(this.props));
  }

  componentWillReceiveProps(nextProps: AppProps) {
    const { dispatch } = this.props;
    if (nextProps.state.searchStr !== this.props.state.searchStr) {
      dispatch(fetchDataForMyApp(nextProps, true));
    }
  }

  handleChange(nextsearchStr: string) {
    this.props.dispatch(fireSetstate(nextsearchStr));
  }

  render() {
    var that = this;
    const { state, dispatch } = this.props;
    const posts = state.allLoadedRecs || []; //searchStr[state];
    const sortIndexes = state.sortIndexes || [];
    const colSortDirs = state.colSortDirs || {};
    const searchStr = state.searchStr || "";
    //console.log(" render main component" + JSON.stringify(this.props));
    var fn = function()  : any {
        dispatch(fireOnResize());
    };
    (window as any).onresize = fn;

    return (
      <div>
        <Picker value={searchStr}
          onChange={this.handleChange.bind(that)} />
        <SortExample records={posts}
        columns={this.props.state.columns}
        columnsDefaultWidth={this.props.state.columnsDefaultWidth}
        columnsDescription={this.props.state.columnsDescription}
        columnsQBEs={this.props.state.columnsQBE}
        columnsWidth={this.props.state.columnsWidth}
        colSortDirs={colSortDirs}
        sortIndexes={sortIndexes} dispatch={dispatch} />
      </div>
    );
  }
}

//        <Posts posts={posts} dispatch={dispatch} />
export interface PickerProps { value: string, onChange: any }


class Picker extends Component<PickerProps, undefined> {
  render() {
    const { value, onChange} = this.props;
    return (
      <header className="qbeHeaderFuzzy">
        search:
        <input className="searchInput" type="text" placeholder="search indexed word or &quot;add/delete column &lt;columnname&gt;&quot;" style={{  width : "80%", textAlign:"left"}} onChange={e => onChange(e.target.value)} value={value} />
      </header>
    );
  }
}

interface IPost {
  data: {
    title: string
  }
};

interface IPosts {
  posts: IRecord[],
  dispatch: any
}

interface IPostRecord {
  columns : string[],
  record: IRecord
}

function pluck<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}


class Line extends Component<IPostRecord, undefined> {
  render() {
    return (
      <tr key={this.props.record.appId}>
        {this.props.columns.map((col) =>
          <td key={this.props.record.appId + ' ' + col} >
            {pluck(this.props.record, col as keyof IRecord)}
          </td>
        )}
      </tr>
    );
  }
}

import * as ReactDOM from "react-dom";

var Post = connect(mapState)(MyApp);

var MYApp = connect(
  mapState
)(MyApp);

ReactDOM.render(
  <Provider store={store}>
    <MYApp />
  </Provider>,
  document.getElementById('container')
);

function mapState(state: any) {
  return state;
}

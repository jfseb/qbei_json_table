

//var elasticlunr = (window as any).elasticlunr;

export function makeLunrIndex(elasticlunr : any, data, lunrcolumns : string[]) {
  var elastic = elasticlunr(function () {
    var that = this;
    lunrcolumns.forEach(function(field) {
      that.addField(field);
    });
    this.setRef('id');
    this.saveDocument(false);
  });
  data.forEach(function(record,index) {
    record.id = index;
    elastic.addDoc(record);
  });
  return elastic.toJSON();
}

export function makeElasticIndex(elasticlunr: any, serIndex) {
    (window as any).elastic = elasticlunr.Index.load(serIndex /*str*/);
}
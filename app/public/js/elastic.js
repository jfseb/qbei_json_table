function makeLunrIndex(data, lunrcolumns) {
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

function makeElasticIndex(serIndex) {
    elastic = elasticlunr.Index.load(serIndex /*str*/);
  }
  
  console.log('did it');
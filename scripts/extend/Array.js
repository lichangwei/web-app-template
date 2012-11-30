
(function(){

if($.browser.msie || $.browser.safari){

  var sort = function( compare ){
    var len = this.length;
    if(len <= 1) return this;
    compare = compare || function(a, b){ return a > b; }
    for(var i = 0; i < len - 1; i++){
      for(var j = i+1; j < len; j++){
        if( compare(this[i], this[j]) > 0 ){
          var temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
    return this;
  };

  /*
   * IE doesn't support sorting by a attribute of element.
   * Safari doesn't support sorting by a compare function.
   *
   * If we use Array.prototype.sort = sort, then in safari, sort will be enumerable.
   * Such as for(var k in []){ console.info(k); } // sort will be printed.
   */
  Object.defineProperty(Array.prototype, 'sort', {
    value: sort,
    enumerable: false
  });

}

})();
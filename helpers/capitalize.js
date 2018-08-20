module.exports = 
  String.prototype.Capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  // https://stackoverflow.com/questions/2332811/capitalize-words-in-string
  };

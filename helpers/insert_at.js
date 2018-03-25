module.exports = {
  InsertAt: String.prototype.InsertAt = function(CharToInsert,Position){
    return this.slice(0,Position) + CharToInsert + this.slice(Position);
  },
  // https://stackoverflow.com/questions/39790102/insert-character-in-string-using-javascript
};

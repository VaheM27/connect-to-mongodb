const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving records', function(){

  it('Saves a record to the database', function(done){

    const char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });

  });

});

function Letter(value) {
    this.value = value;
    this.dispVal = '_';
    this.show = false;
    this.checkVal = function(testVal) {
    	if (testVal == this.value) {
    		this.dispVal = this.value;
    		return true;
    	} else {
    		return false;
    	}
    };
}

module.exports = Letter;
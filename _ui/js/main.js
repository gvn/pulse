var PULSE = {
	init:function() {
		var self = this;
		
		PULSE.visualizer.init();
		PULSE.clock.init();
		PULSE.visualizer.updateBackground();
		
		delete self.init;
	},
	events:{
		__secondsChanged:function(seconds) {
			var self = this;
			
			PULSE.visualizer.updateSeconds(seconds);
			PULSE.visualizer.updateBackground();
		},
		__minutesChanged:function(minutes) {
			var self = this;
			
			PULSE.visualizer.updateMinutes(minutes);
		},
		__hoursChanged:function(hours) {
			var self = this;
			
			PULSE.visualizer.updateHours(hours);
		}
	}
};
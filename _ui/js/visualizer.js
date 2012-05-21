PULSE.visualizer = {
	init:function() {
		var self = this;
		
		// ELEMENT CACHE
		
		self.elWrapper = $('div#clock');
		self.elSecondsBar = self.elWrapper.find('div#seconds');
		self.elSeconds = self.elSecondsBar.find('p');
		self.elMinutesBar = self.elWrapper.find('div#minutes');
		self.elMinutes = self.elMinutesBar.find('p');
		self.elHoursBar = self.elWrapper.find('div#hours');
		self.elHours = self.elHoursBar.find('p');
		
		var now = new Date();
		
		self.seconds = now.getSeconds();
		self.minutes = now.getMinutes();
		self.hours = now.getHours();
		
		self.updateSeconds(self.seconds);
		self.updateMinutes(self.minutes);
		self.updateHours(self.hours);
		
		delete self.init;
	},
	formatTime:function(time) {
		var self = this;

		if(time < 10) {
			return '0' + time;
		} else {
			return time;
		}
	},
	updateBackground:function() {
		var self = this;

		self.elWrapper.css('background', 'rgba(' + Math.floor(self.seconds / 60 * 256) + ',' + Math.floor(self.minutes / 60 * 256) + ',' + Math.floor(self.hours / 24 * 256) + ',0.5)');
	},
	updateSeconds:function(seconds) {
		var self = this,
			brightness;
		
		self.seconds = seconds;
		
		self.elSeconds.text(self.formatTime(seconds));

		self.elSecondsBar.css('width', Math.floor((seconds/60)*299) + 25);
				
		brightness = Math.floor(((60-seconds)/60) * 255);
		self.elSecondsBar.css('background', 'rgba('+brightness+','+brightness+','+brightness+',1)');
	},
	updateMinutes:function(minutes) {
		var self = this,
			brightness;
		
		self.elMinutes.text(self.formatTime(minutes));
		
		self.elMinutes.text(self.formatTime(minutes));

		self.elMinutesBar.css('width', Math.floor((minutes/60)*299) + 25);
		
		brightness = Math.floor(((60-minutes)/60) * 255);
		self.elMinutesBar.css('background', 'rgba('+brightness+','+brightness+','+brightness+',1)');
	},
	updateHours:function(hours) {
		var self = this,
			brightness;
		
		self.hours = hours;
		
		self.elHours.text(self.formatTime(hours));

		self.elHoursBar.css('width', Math.floor((hours/24)*299) + 25);
		
		brightness = Math.floor(((24-hours)/24) * 255);
		self.elHoursBar.css('background', 'rgba('+brightness+','+brightness+','+brightness+',1)');
	}	
};
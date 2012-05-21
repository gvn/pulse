PULSE.clock = {
	init:function() {
		var self = this;

		self.date = new Date();
		
		self.seconds = self.date.getSeconds();
		self.minutes = self.date.getMinutes();
		self.hours = self.date.getHours();

		self.checkTime();

		setInterval(function(){ 
			self.checkTime(); 
		},100); // TODO: Check CPU at different interval speeds
		
		delete self.init;
	},
	checkTime:function() {
		var self = this;
		
		self.date = new Date();
		
		if(self.seconds !== self.date.getSeconds()) {
			self.seconds = self.date.getSeconds();
			self.__secondsChanged(self.seconds);
		}

		if(self.minutes !== self.date.getMinutes()) {
			self.minutes = self.date.getMinutes();
			self.__minutesChanged(self.minutes);
		}
		
		if(self.hours !== self.date.getHours()) {
			self.hours = self.date.getHours();
			self.__hoursChanged(self.hours);
		}
		
		// var secondsElapsed = self.date.getSeconds() + (self.date.getMinutes() * 60) + (self.date.getHours() * 3600);
		// var percentOfDayElapsed = secondsElapsed / 86400;
		
		//console.log(percentOfDayElapsed);
	},
	__secondsChanged:function() {
		var self = this;
		
		PULSE.events.__secondsChanged(self.seconds);
	},
	__minutesChanged:function() {
		var self = this;
		
		PULSE.events.__minutesChanged(self.minutes);
	},
	__hoursChanged:function() {
		var self = this;
		
		PULSE.events.__hoursChanged(self.hours);
	}
};
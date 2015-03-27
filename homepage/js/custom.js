;(function(j,d){
	var app = {
		events : [],
		calendarID : 'codegenesys.com_lb6h35i09i7674u548ag0klrrk@group.calendar.google.com',
		timeMin : '2015-03-15T18:00:00-05:00',
		APIKEY : 'AIzaSyDcucUIKiYn9X6X0AzARmAcRhKz_SpChto',
		maxResult : 5,
		getCalendarEvents: function(){
			j.ajax({
				url : 'https://www.googleapis.com/calendar/v3/calendars/'+app.calendarID+'/events?key='+app.APIKEY+'&maxResults='+app.maxResult+'&timeMin='+app.timeMin,
				type:'GET',
				async:false,
				dataType:'json',
				success:function(data){
					var e = data.items;
					for(var i=0;i<e.length;i++){
						var event={};
						event.title = e[i].organizer.displayName;
						event.summary = e[i].summary;
						event.date = e[i].start.dateTime;
						event.location = e[i].location;
						event.link = e[i].htmlLink;
						app.events.push(event);
					}
				}
			});
		}
	}
	
	j(d).ready(function(){
		if(j('#google-events-list').length>0){
			app.getCalendarEvents();
			var html='';
			for(var i =0;i<app.events.length;i++){
				var e_month = moment(app.events[i].date).format('MMMM');
				var e_date = moment(app.events[i].date).format('MMMM D, YYYY');
				var e_time = moment(app.events[i].date).format('h a');
				html += '<li><a href=""><h4>'+app.events[i].summary+'</h4></a><span class="time-stamp">'+e_date+'</span></li>';
				
				//html += '<div class="event-details"><div class="event-left"><p>'+e_month+'</p><h3>'+e_date+'</h3></div><div class="event-right"><h2>'+app.events[i].summary+'</h2><span class="event-time">'+e_time+'</span><span class="event-location">'+app.events[i].location+'</span></div><div class="event-reg-link"><a href="'+app.events[i].link+'">Register here</a></div></div>';
			}
			html += '';
			j('#google-events-list').html(html);
		}
	});
})(jQuery,document);
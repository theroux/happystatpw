'use strict';
var happystat = {
	init : function() {
      var sentimentDataRef = new Firebase('https://happystat.firebaseio.com/'),
      	$passwordForm = $('.content-module form');

     $passwordForm.bind('submit', function(e) {
        e.preventDefault();
        var sentiment = $('input[name=mood]:checked').val(),
          cdid = $('#cdid').val(),
          question = $('.hs-question').text(),
          referrer = $('#referrer').val();
        sentimentDataRef.push({sentiment: sentiment, cdid: cdid, question : question, referrer : referrer, timestamp : Firebase.ServerValue.TIMESTAMP });
        console.log('submitted sentiment');
        $passwordForm.trigger('submit');

      });
    },
};
$(function() {
	if ($('.sentiment-form').length) {
		happystat.init();
	}
});
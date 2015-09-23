var happy = {
  form : '.content-module form',
  referrer : 'pwreset',
  question : '.hs-question',
  cdid : 'form input#username',
  sentiment : 'form input[name=mood]:checked',
  unbind : function() {
    $(happy.form).unbind();
  },
  init : function() {
                        var myDataRef = new Firebase('https://happystat.firebaseio.com/');
      $(happy.form).bind('submit', function(e) {
        e.preventDefault();
        
        console.log('clicked');
        var $sentiment = $(happy.sentiment).val(),
                                $cdid = $(happy.cdid).val(),
        $question = $(happy.question).text();
        referrer = happy.referrer;
        if (!$sentiment) {
          $sentiment = "noparticipation";
        }
        myDataRef.push({sentiment: $sentiment, cdid: $cdid, referrer : referrer, question : $question, timestamp : Firebase.ServerValue.TIMESTAMP });
        console.log('submitted');
        $(happy.form).unbind();
                          $(happy.form).trigger('submit');
      });   
  }
}
$(function() {
    console.log( "ready!" );
    if ($('.hs-wrapper').length) {
  happy.init();
    }
});
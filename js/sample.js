(function(){
    var cnt =0;
    var pow = $('#golpe');
	// consider using a debounce utility if you get too many consecutive events
	$(window).on('motion', function(ev, data){
        cnt++;


        playSound(data);
        //console.log(data);


        //console.log('detected motion at', new Date(), 'with data:', data);
		var spot = $(data.spot.el);
		spot.addClass('active');
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	});

	// example using a class
	$('.link').on('motion', function(ev, data){
		console.log('motion detected on a link to', data.spot.el.href);
	});

	// examples for id usage
	$('#one').on('motion', function(){
		//console.log('touched one');
    });

	$('#another').on('motion', function(){





        //console.log('another');

    });


    function playSound(obj) {
        if (!obj.ready) return;

        obj.ready = false;
        // throttle the note
        setTimeout(setNoteReady, 400, obj);
        if(cnt>1)
            if(pow.attr('display','none'))
                pow.css('display','block');
        cnt=1;
    }

    function setNoteReady(obj) {
        obj.ready = true;

        pow.css('display','none');

    }


})();
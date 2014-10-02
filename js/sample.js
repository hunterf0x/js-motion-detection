
(function(){

    var pow = $('#golpe');
    var sonido = $('#golpe_sonido');
    var perfect = $('#perfect');
    var $cnt = 0;
    var $cnt2 = 0;
    var cierre = true;
    var enmovimiento = false;
    // consider using a debounce utility if you get too many consecutive events

    $(window).on('motion', function(ev, data){
        $cnt+=1;
        golpe(data);



        // console.log('detected motion at', new Date(), 'with data:', data);
        var spot = $(data.spot.el);
        spot.addClass('active');
        setTimeout(function(){
            spot.removeClass('active');
        }, 230);
    });



    $('#punto').on('motion', function(){
        //console.log('another');
    });

    $('#golpe_sonido').on("ended", readysonido);
    function readysonido(){
        cierre = true;
        console.log('activa');
    }

    function golpe(obj) {
        if (!obj.ready) return false;
        obj.ready = false;
        // throttle the note

        if($cnt>1){
            if(cierre){
                //.on("ended", yourFunction);
                pow.show();
                sonido[0].play();
                cierre = false;
                $cnt2 += 1;
            }

            if(enmovimiento == false){
                $('#pinata').hide();
                $('#pinata_mov').show();
                enmovimiento = true;
            }

            if($cnt2 >=8 ){
                perfect[0].play();
                $('#pinata_mov').hide();
                $('#pinata_fin').show();
            }
        }

        setTimeout(setGolpeListo, 500, obj);
        console.log($cnt2);
    }

    function setGolpeListo(obj) {

        obj.ready = true;
        //cierre =  false;
        pow.hide();

    }



})();
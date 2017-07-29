/**
 * @name    script.js
 * @desc    script that handles the 'Read More' button
 *
 */

(function(){
    var


    $myAccountBtn      =   $("#myAccountBtn"),
    $userBtn           =   $("#userBtn"),
    $examInfoBtn       =   $("#examInfoBtn"),
    $burgerSpan         =   $("#burgerSpan"),
    $readMoreBtn       =   $("#readMoreBtn"),
    $infoMore          =   $("#infoMore"),



    burgerMenu       =  function () {

            $burgerSpan.click(function(){
                $(this).toggleClass('open');
            });
    },//burgerMenu


    changeGlyf      =   function(){

        var
            acctGlyf    = $(this).find('b:first')
        ;

        if (acctGlyf.hasClass('glyphicon glyphicon-chevron-down')) {
            acctGlyf.removeClass('glyphicon glyphicon-chevron-down'),
                acctGlyf.addClass('glyphicon glyphicon-chevron-up')

        } else if (acctGlyf.hasClass('glyphicon glyphicon-chevron-up')) {
                acctGlyf.removeClass('glyphicon glyphicon-chevron-up'),
                acctGlyf.addClass('glyphicon glyphicon-chevron-down')
        }

    },//changeGlyf



    readMoreFoo        =   function () {

            $infoMore
                .slideToggle("slow")
                .toggleClass("visible");
            if ( $infoMore.hasClass("visible") ){
                $readMoreBtn.html("Read Less... ");
            } else {
                $readMoreBtn.html("Read More... ");
            }
        //slideToggle for the blog section

    },//readMoreFoo

    countdownTimer  =   function(){

        $('#countdownDiv').countdown('2017/08/22')
            .on('update.countdown', function(event) {
                var format = '%D';
                if(event.offset.totalDays < 100) {
                    format = '0' + format;
                }

                $(this).html(event.strftime(format));

            })
            .on('finish.countdown', function(event) {
                $(this).html('Date for next exam coming soon!')
                    .parent().addClass('disabled');

            });



    },//countdownTimer


     bindBtns   =   function () {

         $readMoreBtn.click(readMoreFoo);
         $userBtn.click(changeGlyf);
         $myAccountBtn.click(changeGlyf);
         $examInfoBtn.click(changeGlyf);



     },//bindBtns


    init        =   function(){

        burgerMenu();
        countdownTimer();
        bindBtns();

        }//init
    ;
    window.addEventListener("load", init);
})();
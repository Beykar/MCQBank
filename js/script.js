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
    $toggleBtn         =   $("#toggleBtn"),
    menuSpan           =   $("#menuSpan"),
    burgerSpan         =   $("#burgerSpan"),
    $readMoreBtn       =   $("#readMoreBtn"),
    $infoMore          =   $("#infoMore"),





    changeSpan       =   function(){

            var
                menuSpan    = $(this).find('span:first'),
                iconSpan    = $(this).find('span:last');

            if (iconSpan.hasClass('glyphicon glyphicon-menu-hamburger')) {
                menuSpan.html('');
                iconSpan.removeClass('glyphicon glyphicon-menu-hamburger'),
                iconSpan.addClass('glyphicon glyphicon-remove')

            } else if (iconSpan.hasClass('glyphicon glyphicon-remove')) {
                menuSpan.html('MENU '),
                iconSpan.removeClass('glyphicon glyphicon-remove'),
                iconSpan.addClass('glyphicon glyphicon-menu-hamburger')
            }

    },//changeSpan

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
            console.log($infoMore.hasClass("visible"));
        //slideToggle for the blog section

    },//bindBtns

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
         $toggleBtn.click(changeSpan);
         $userBtn.click(changeGlyf);
         $myAccountBtn.click(changeGlyf);
         $examInfoBtn.click(changeGlyf);



     },//bindBtns


    init        =   function(){

        countdownTimer();
        bindBtns();


        }//init
    ;
    window.addEventListener("load", init);
})();
$(function () {

    $("a").click(function () {

        var numeral = this.hash



        $("html,body").animate({

            scrollTop: $(numeral).offset().top - 20

        }, 1000)



        $(".navbar").css({

            "background-color": "#0dcaf0"

        })



    });



    $(window).scroll(function () {

        if ($(window).scrollTop() <= 50) {

            $(".navbar").css({

                "background-color": "transparent"

            })



        } else {

            $(".navbar").css({

                "background-color": "#0dcaf0"

            })



        }

    });



});
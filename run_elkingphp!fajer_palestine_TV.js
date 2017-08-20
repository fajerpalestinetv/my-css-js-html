$(function ($) {


    function getServer(id) {
        $.ajax({
            type: "post",
            url: "./../structure/server.php?id=" + id,
            data: {id: +id},
            success: function (data) {
                $(".online").html(data);
            },
            beforeSend: function () {
                $(".online").html("<div style='padding: 5px; margin: 5px; font-size: 18px; color: #FFFFFF;'><span class='demo-icon icon-spin3 animate-spin'></span> ط¬ط§ط±ظٹ ط§ظ„طھط­ظ…ظٹظ„ ....</div>");
            }
        });
    }

    $(".add_viwe").click(function () {
        $(".bg-ads-video").fadeIn(500);
        $(".ads-view").delay(500).slideDown(500).show(500);
        $(".ads-view").html('<iframe width="100%" height="460" src="' + $(".add_viwe").attr('data-link') + '" SCROLLING="OFF" frameborder="0" allowfullscreen></iframe>');
        return false;
    });
    $(".bg-ads-video").click(function () {
        $(".ads-view").html('');
        $(".ads-view").slideUp(500).hide(500);
        $(".bg-ads-video").delay(500).fadeOut(500);
    });
    $.ajax({
        type: "post",
        url: "./../structure/server.php?id=" + $(".sever_link").attr('data-link'),
        data: {id: $(".sever_link").attr('data-link')},
        success: function (data) {
            $(".online").html(data);
        },
        beforeSend: function () {
            $(".online").html("<div style='padding: 5px; margin: 5px; font-size: 18px; color: #FFFFFF;'><span class='demo-icon icon-spin3 animate-spin'></span> ط¬ط§ط±ظٹ ط§ظ„طھط­ظ…ظٹظ„ ....</div>");
        }
    });
    $(".sever_link").click(function () {
        $(".sever_link").removeClass('actev_sever_link');
        $(this).addClass('actev_sever_link');
        getServer($(this).attr('data-link'));
        return false;
    });

    $(".get-embed").click(function () {
        $(".getShowEmbed").slideToggle(500);
        $(".getShowEmbed").slideToggle(500).html('<textarea style="direction: ltr; width:95%; margin: 5px auto;" class="form-control" onclick="$(this).select();" readonly><iframe width=\"640\" height=\"460\" src=\"' + $(this).attr('data-link') + '\" SCROLLING=\"OFF\" frameborder=\"0\" allowfullscreen></iframe></textarea>');
    });

    function getEmbed(url) {
        $(".getShowEmbed").slideToggle(500).html('<textarea style="direction: ltr; width:95%; margin: 5px auto;" class="form-control" onclick="$(this).select();" readonly><iframe width=\"640\" height=\"460\" src=\"' + url + '\" SCROLLING=\"OFF\" frameborder=\"0\" allowfullscreen></iframe></textarea>');
    }

    $.fn.elkingPHP = function (option) {
        var settingPlugin = {
            "classAction": "thumb-info-title"
        };
        $.extend(settingPlugin, option);
        $("." + settingPlugin['classAction']).slideDawn(1000);
    }


$("li.mine_elkingphp").hover(
    function(){
        $(this).children('ul').hide();
        $(this).children('ul').slideDown('fast');
    },
    function () {
        $('ul', this).slideUp('fast');            
    }).stop();





    ///////////////////
//    $("#jMenu").jMenu({
//        openClick: false,
//        ulWidth: 'auto',
//        TimeBeforeOpening: 100,
//        TimeBeforeClosing: 11,
//        animatedText: false,
//        paddingLeft: 1,
//        effects: {
//            effectSpeedOpen: 150,
//            effectSpeedClose: 150,
//            effectTypeOpen: 'slide',
//            effectTypeClose: 'slide',
//            effectOpen: 'swing',
//            effectClose: 'swing'
//        }
//
//    });


}(jQuery));



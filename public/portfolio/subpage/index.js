function PopUp() {
    if ($(".mobile-pop-up").hasClass("active")) {
        $(".mobile-pop-up").css("right", "");
        $(".mobile-pop-up").removeClass("active");
    } else {
        $(".mobile-pop-up").css("right", "0");
        $(".mobile-pop-up").addClass("active");
    }
};

function ContentPopUp() {
    if ($(".content-question-name").hasClass("active")) {
        $(".content-question-name").removeClass("active");
    } else {
        $(".content-question-name").addClass("active");
    }
};

$(function () {
    $('.content-question-name').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $('.content-question-name').removeClass("active")
            $(this).addClass("active");
        }
    });
});

function Active() {
    if ($(".mobile-top-bar-menu").hasClass("active")) {
        $(".mobile-top-bar-menu").removeClass("active");
    } else {
        $(".mobile-top-bar-menu").addClass("active");
    }
};

// 모두 => 동기화
function allCheckFunc(obj) {
    $("[name=checkOne]").prop("checked", $(obj).prop("checked"));
}

// 체크박스 체크시 전체선택 체크 여부 
function oneCheckFunc(obj) {
    var allObj = $("[name=checkAll]");
    var objName = $(obj).attr("name");

    if ($(obj).prop("checked")) {
        checkBoxLength = $("[name=" + objName + "]").length;
        checkedLength = $("[name=" + objName + "]:checked").length;

        // console.log("checkBoxLength : " + checkBoxLength + ", checkedLength : " + checkedLength);
        // 확인용

        if (checkBoxLength == checkedLength) {
            allObj.prop("checked", true);
        } else {
            allObj.prop("checked", false);
        }
    } else {
        allObj.prop("checked", false);
    }
}

function SideMenu2__Toggle() {
    $('.customer-service>.customer-service-in .content-questions>li>.content-question-content').hide();
    $('.customer-service>.customer-service-in .content-questions>li>.content-question-name').click(function () {
        $(this).next().slideToggle(800);
        $('.customer-service>.customer-service-in .content-questions>li>.content-question-name').not(this).next().slideUp(800);
    });
}
$(function () {
    $("[name=checkAll]").change(function () {
        allCheckFunc(this);
    });

    $("[name=checkOne]").change(function () {
        oneCheckFunc($(this));
    });
});
$(function () {
    SideMenu2__Toggle();
})
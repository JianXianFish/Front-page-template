console.log("%c                           ", "background-image: url(https://raw.githubusercontent.com/ZHAO-Shaofeng/Related-considerations-for-HTML-CSS-JS/master/github-img/xchl-logo.png);background-repeat: no-repeat;padding-top: 110px;");
console.log("%c技术支持：深圳市小草互联网科技有限公司，专注前端外包、美工外包。\n联系电话：13823771028\n淘宝店：https://shop269081662.taobao.com\n欢迎联系QQ/微信：364243821；并对我们的产品提出宝贵的意见和建议。\n为您服务，我们不胜荣幸！\n\n1.  根目录文件说明：\n    css | fonts | images | js | 页面（最终存放设计界面图片）；\n\n2.  所有icon图标一律引用阿里iconfont的线上图标。\nps：客户如需转交iconfont项目所有权，请与项目交付3天内联系我司。\nediter：MrFish", "color: #0465c2;font-family: '微软雅黑';");

// back to top
function goTop() {
    $('html,body').animate({'scrollTop': 0}, 1000);
}

$(window).scroll(function () {
    if ($(document).scrollTop() >= 200) {
        $('#backtop').addClass("show");
    } else {
        $('#backtop').removeClass("show");
    }
});
// mobile header nav dropdown-menu
$(document).on("click", ".mobile-navbtn", function (e) {
    $(this).toggleClass("open");
    $(this).parents("a").next(".dropdown-menu").toggleClass("open");
    e.preventDefault();
});
$(function () {
    $('.tab_item').click(function (e) {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $('.tab_item').removeClass('active');
            $this.addClass('active');
            var index = $this.attr('data-index');
            $('.tab_box').removeClass('active');
            console.log(parseInt(index) - 1);
            $('.tab_box').eq(parseInt(index) - 1).addClass('active');
        }
    });
    $('.tab_flex').click(function (e) {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $('.tab_flex').removeClass('active');
            $this.addClass('active');
            var index = $this.attr('data-index');
            $('.news_box').removeClass('active');
            $('.news_box').eq(parseInt(index) - 1).addClass('active');
        }
    })
});
var mySwiper1 = new Swiper('#section_one_banner', {
    pagination: {el: '.swiper-pagination'},
});
var mySwiper2 = new Swiper('#case_swiper', {
    slidesPerView: 3,
    observer: true,		            //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
    navigation: {
        prevEl: '#case-button-prev',
        nextEl: '#case-button-next',
    },
    breakpoints: {		            //响应式设置
        1200: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        }
    }
});
var mySwiper3 = new Swiper('#partner_swiper', {
    slidesPerView: 5,
    observer: true,		            //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
    navigation: {
        prevEl: '#partner-button-prev',
        nextEl: '#partner-button-next',
    },
    breakpoints: {		            //响应式设置
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        665: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 1,
        }
    }
});
//swiper API move to -> http://www.swiper.com.cn/
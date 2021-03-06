<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>포폴 리디자인</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/index.css">
    <link rel="stylesheet" href="/resource/font/font.css">
    <!-- 제이쿼리 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- 슬릭슬라이더 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js"
        integrity="sha512-6kvhZ/39gRVLmoM/6JxbbJVTYzL/gnbDVsHACLx/31IREU4l3sI7yeO0d4gw8xU5Mpmm/17LMaDHOCf+TvuC2Q=="
        crossorigin="anonymous"></script>
    <script src="/index.js"></script>
</head>

<body>
    <div class="top img-box" id="top">
        <img src="http://sehee3527.github.io/img1/pf/pf/top.png?" alt="" onclick="window.scrollTo(0,0);">
    </div>
    <section class="page-1">
        <div class="popup"></div>
        <div class="page-1-con con">
            <div>PORTFOLIO</div>
            <div>c.point</div>
            <div>
                <div class="img-box"><img src="http://sehee3527.github.io/img1/pf/pf/main-rotate.png" alt=""></div>
            </div>
            <div>main-page</div>
            <div>home</div>
        </div>
    </section>
    <section class="page-2">
        <div class="page-2-con con">
            <div class="bg-line flex flex-jc-sb">
                <div></div>
                <div>
                    <div class="active-on-visible">02</div>
                </div>
                <div></div>
                <div></div>
                <div>
                    <div class="active-on-visible">page-02</div>
                </div>
                <div></div>
            </div>
            <div>
                <div class="page-2-content">
                    <div class="active-on-visible">반갑습니다</div>
                    <div class="active-on-visible">함께 발전해나가고 싶은 웹 퍼블리셔 양세희 입니다.</div>
                </div>
            </div>

        </div>
    </section>
    <section class="page-3">
        <div class="page-3-con con">
            <div class="page-3-line flex flex-jc-sb">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="pad img-box"><img src="http://sehee3527.github.io/img1/pf/pf/pad_1.png" alt="">
            <div class="pad-content">
                <div class="pad-top-bar flex flex-jc-sa">
                    <div></div>
                    <div class="flex-grow-1">profile</div>
                </div>
                <div class="pad-in flex">
                    <div class="information">
                        <div>INFORMATION</div>
                        <div><img src="" alt=""></div>
                        <div class="info-text flex">
                            <div>
                                NAME<br>
                                BIRTH<br>
                                FHONE<br>
                                EMAIL<br>
                                ADDRESS<br>
                                <div>
                                    BLOG<br>
                                    WIKI<br>
                                    EDUCATION<br>
                                </div>
                            </div>
                            <div>
                                양세희<br>
                                1997.03.08<br>
                                010-6630-9627<br>
                                sehee3527@gmail.com<br>
                                대전광역시 서구<br>
                                <div>
                                    https://sehee35271.tistory.com/<br>
                                    https://to2/kr/bfB<br>
                                    대전 SBS아카데미 컴퓨터 아트 학원<br>웹과정 수료
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="skill flex-grow-1 active-on-visible" data-active-on-visible-callback-func-name="Circle__run">
                        <div>SKILL</div>
                        <div class="skills flex flex-row-wrap">
                            <div class="flex">
                                <div>
                                    <div>
                                        <div class="img-box active-on-visible"><img
                                                src="http://sehee3527.github.io/img1/pf/pf/skill-01.png" alt="">
                                            <div>HTML</div>
                                            <div class='second circle' circleProgress='70'></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>기본기 탄탄한 의미있는 구조 마크업,
                                        웹 표준·웹 접근성에 대한 전반적인 이해</div>
                                    <div class='circle-percent'></div>
                                </div>
                            </div>
                            <div class="flex">
                                <div>
                                    <div>
                                        <div class="img-box"><img
                                                src="http://sehee3527.github.io/img1/pf/pf/skill-01.png" alt="">
                                            <div>CSS</div>
                                            <div class='second circle' circleProgress='50'></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>이해도 높은 사용으로 보다 실용적인 코드 작성, 반응형 사이트 이해 및 구현</div>
                                    <div class='circle-percent'></div>
                                </div>
                            </div>
                            <div class="flex">
                                <div>
                                    <div>
                                        <div class="img-box"><img
                                                src="http://sehee3527.github.io/img1/pf/pf/skill-01.png" alt="">
                                            <div>JQ</div>
                                            <div class='second circle' circleProgress='60'></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>제이쿼리 라이브러리를 사용하여 필요한 기능 구현, 유용한 플러그인 사용</div>
                                    <div class='circle-percent'></div>
                                </div>
                            </div>
                            <div class="flex">
                                <div>
                                    <div>
                                        <div class="img-box"><img
                                                src="http://sehee3527.github.io/img1/pf/pf/skill-01.png" alt="">
                                            <div>JS</div>
                                            <div class='second circle' circleProgress='50'></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>자바스크립트의 기본 문법 이해, 기본적인 알고리즘 문제 해결</div>
                                    <div class='circle-percent'></div>
                                </div>
                            </div>
                            <div class="flex">
                                <div>
                                    <div>
                                        <div class="img-box"><img
                                                src="http://sehee3527.github.io/img1/pf/pf/skill-01.png" alt="">
                                            <div>PS</div>
                                            <div class='second circle' circleProgress='70'></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>필요한 툴과 다양한 편집기능을 유용하게 사용 가능</div>
                                    <div class='circle-percent'></div>
                                </div>
                            </div>
                            <div class="flex">
                                <div>
                                    <div>
                                        <div class="img-box"><img
                                                src="http://sehee3527.github.io/img1/pf/pf/skill-01.png" alt="">
                                            <div>AI</div>
                                            <div class='second circle' circleProgress='80'></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>필요한 툴과 기본적인 아이콘 제작 및 수정 가능</div>
                                    <div class='circle-percent'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="page-4">
        <div class="page-4-con con flex">
            <div class="page-4-line flex flex-jc-sb">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="phone">
                <div class="flex flex-jc-sb flex-ai-e">
                    <div>PORTFOLIO</div>
                    <div>CODING</div>
                </div>
                <div class="phone-img img-box"><img src="http://sehee3527.github.io/img1/pf/pf/phone_1.png" alt="">
                    <div class="phone-img-in">
                    </div>
                </div>
            </div>
            <div class="watch">
                <div class="watches">
                    <div class="row">
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Responesive</div>
                                    <div onclick="Popup();">
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>copy</div>
                                            <div>모작</div>
                                            <div>아트파이브</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" id="watch-first"
                                    data-link-url="/portfolio/artfive"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/artfive.png"
                                    data-content-name="아트파이브" data-content-subtitle="(HTML/CSS/JQuery)"
                                    data-content-content="기존 사이트와 동일하게 제작" onclick="Slider1__itemClick(this);">Artfive
                                </div>
                                <div class="watch-circle"></div>
                            </div>
                        </div>
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Web</div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>copy</div>
                                            <div>모작</div>
                                            <div>베스툴</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" data-link-url="/portfolio/bestuhl"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/bestuhl.png"
                                    data-content-name="베스툴" data-content-subtitle="(HTML/CSS/JQuery)"
                                    data-content-content="기존 사이트와 동일하게 제작" onclick="Slider1__itemClick(this);">Bestuhl
                                </div>
                                <div class="watch-circle"></div>
                            </div>
                        </div>
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Responesive</div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>re-design</div>
                                            <div>리디자인</div>
                                            <div>샤롯데씨어터</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" data-link-url="http:///portfolio/sharlottetheate"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/sharlottetheater.png"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/artfive.png"
                                    data-content-name="샤롯데씨어터" data-content-subtitle="(HTML/CSS/JQuery)"
                                    data-content-content="기존 사이트를 새롭게 리뉴얼" onclick="Slider1__itemClick(this);">
                                    Carotte<br>theate</div>
                                <div class="watch-circle"></div>
                            </div>
                        </div>
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Web</div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>copy</div>
                                            <div>모작</div>
                                            <div>바바빌리지</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" data-link-url="/portfolio/vavavillage"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/vavavillage.png"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/artfive.png"
                                    data-content-name="바바빌리지" data-content-subtitle="(HTML/CSS/JQuery)"
                                    data-content-content="기존 사이트와 동일하게 제작" onclick="Slider1__itemClick(this);">
                                    VAVA<br>Villabe</div>
                                <div class="watch-circle"></div>
                            </div>

                        </div>
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Responesive</div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>copy</div>
                                            <div>모작</div>
                                            <div>파나소닉</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" data-link-url="/portfolio/panasonic"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/panasonic.png"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/artfive.png"
                                    data-content-name="파나소닉"" data-content-subtitle=" (HTML/CSS/JQuery)"
                                    data-content-content="기존 사이트와 동일하게 제작" onclick="Slider1__itemClick(this);">Panasonic
                                </div>
                                <div class="watch-circle"></div>
                            </div>
                        </div>
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Web</div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>copy</div>
                                            <div>모작</div>
                                            <div>베스툴</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" data-link-url="/portfolio/bestuhl"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/bestuhl.png"
                                    onclick="Slider1__itemClick(this);">Bestuhl</div>
                                <div class="watch-circle"></div>
                            </div>
                        </div>
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Web</div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>copy</div>
                                            <div>모작</div>
                                            <div>베스툴</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" data-link-url="/portfolio/bestuhl"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/bestuhl.png"
                                    onclick="Slider1__itemClick(this);">Bestuhl</div>
                                <div class="watch-circle"></div>
                            </div>
                        </div>
                        <div class="cell">
                            <div>
                                <div class="watch-in
                                flex flex-jc-sb">
                                    <div>Web</div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div>
                                            <div>copy</div>
                                            <div>모작</div>
                                            <div>베스툴</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="watch-name" data-link-url="/portfolio/bestuhl"
                                    data-img-url="http://sehee3527.github.io/img1/pf/pf/bestuhl.png"
                                    onclick="Slider1__itemClick(this);">Bestuhl</div>
                                <div class="watch-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="page-5">
        <div class="page-5-con con">
            <div class="bg-line flex flex-jc-sb">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <!-- 페이지5내부 -->
            <div class="page-5-in">
                <div class="page-5-name flex">
                    <div class="flex-grow-1">GRAPHIC DESIGN</div>
                </div>
                <div class="page-5-content flex">
                    <div class="page-5-pad img-box"><img src="http://sehee3527.github.io/img1/pf/pf/tv.png" alt="">
                        <div class="page-5-pad-in">
                            <div class="slider">
                                <div class="slider-in img-box">
                                    <img src="https://placekitten.com/100/107" alt="">
                                </div>
                                <div class="slider-in img-box">
                                    <img src="https://placekitten.com/300/207" alt="">
                                </div>
                                <div class="slider-in img-box">
                                    <img src="https://placekitten.com/200/207" alt="">
                                </div>
                                <div class="slider-in img-box">
                                    <img src="https://placekitten.com/800/507" alt="">
                                </div>
                                <div class="slider-in img-box">
                                    <img src="https://placekitten.com/600/200" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page-5-pad-right">
                        <div>디자인 작업물 예시</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="footer con"
        style="background-image:url(http://sehee3527.github.io/img1/pf/pf/footer-bg-img.png?dummy)">
        <div>CONTACT</div>
        <div>sehee3527@gmil.com</div>
        <div>항상 새로운것을 배우고 응용할줄아는 능동적인 디자이너가 되겟습니다.<br>#성실함 #꼼꼼함 #섬세함</div>
    </section>
</body>

</html>
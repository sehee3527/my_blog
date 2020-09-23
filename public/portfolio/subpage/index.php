<?php
    include "part/head.php";
?>
<section class="sign-in-page con-2">
    <div class="page-name">
        Sign in
    </div>
    <div class="form-container con-3">
        <div class="email-address">
            <div>이메일 주소</div>
            <input type="email" placeholder="이메일을 입력하세요" value="">
        </div>
        <div class="password">
            <div>비밀번호</div>
            <input type="password" placeholder="비밀번호를 입력하세요" value="">
        </div>
    </div>
    <div class="form-bottom flex con-3">
        <div class="flex-grow-1">새로운 사용자이신가요? <a href="">회원가입</a></div>
        <div>
            <a href="">아이디 찾기</a>
            <a href="">비밀번호 찾기</a>
        </div>
    </div>
    <div class="continue con-3 row">
        <a href="">continue</a>
    </div>
</section>

<?php
    include "part/footer.php";
?>
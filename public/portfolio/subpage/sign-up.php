<?php
    include "part/head.php";
?>

<div class="sign-up con-2">
    <div class="sign-up-name page-name con-3">Do-N 회원가입</div>
    <div class="subtitle con-3">Do-N의 다양한 서비스와 만나보세요</div>

    <div class="name con-3">
        <div class="form-name">이름</div>
        <div class="flex flex-jc-sb">
            <input type="type" placeholder="성을 입력하세요" value="">
            <input type="type" placeholder="이름을 입력하세요" value="">
        </div>
    </div>
    <div class="email con-3">
        <div class="form-name">이메일</div>
        <div>
            <input class="form-in" type="email" placeholder="이메일을 입력해주세요" value="">
        </div>
    </div>

    <div class="password con-3">
        <div class="form-name">비밀번호</div>
        <div>
            <input class="form-in" type="password" placeholder="비밀번호를 입력해주세요
            " value="">
        </div>
    </div>

    <div class="password check con-3">
        <div class="form-name">비밀번호 확인</div>
        <div>
            <input class="form-in" type="password" placeholder="비밀번호를 확인해주세요
            " value="">
        </div>
    </div>

    <div class="check-menu-box con-3">
        <div class="checkbox-container">
            <input type="checkbox" id="checkbox1" name="checkAll" />
            <label for="checkbox1">약관에 모두 동의</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="checkbox2" name="checkOne" />
            <label for="checkbox2">(필수) 만 14세 이상입니다</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="checkbox3" name="checkOne" />
            <label for="checkbox3">(필수) 서비스 이용약관에 동의</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="checkbox4" name="checkOne" />
            <label for="checkbox4">(필수) 개인정보 수집이용에 동의</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="checkbox5" name="checkOne" />
            <label for="checkbox5">(선택) 광고 수신 및 마케팅 이용에 동의</label>
        </div>
    </div>
    <div class="sign-up-btn btn con-3">
        <a href="/portfolio/subpage/sign-up-success.php">Do-N과 함께하기</a>
        </div>
    <div class="login-connection con-3">이미 가입하셨다면? <a  href="/portfolio/subpage/login.php">로그인</a></div>
</div>

<?php
    include "part/footer.php";
?>
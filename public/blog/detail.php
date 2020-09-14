<?php
    include "../part/head.php";
?>
<?php
$conn = mysqli_connect("site15.blog.oa.gg", "site15", "sbs123414", "site15", 3306);
mysqli_query($conn, "SET NAMES utf8mb4");
$id = $_GET['id'];
$sql = "
SELECT *
FROM article
WHERE ID = {$id}
";
$rs = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($rs);
?>


<!-- 하이라이트 라이브러리 추가, 토스트 UI 에디터에서 사용됨 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/default.min.css">

<!-- 하이라이트 라이브러리, 언어 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/css.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/xml.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/php.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/php-template.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/languages/sql.min.js"></script>

<!-- 코드 미러 라이브러리 추가, 토스트 UI 에디터에서 사용됨 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css" />

<!-- 토스트 UI 에디터, 자바스크립트 코어 -->
<script src="https://uicdn.toast.com/editor/latest/toastui-editor-viewer.min.js"></script>

<!-- 토스트 UI 에디터, 신택스 하이라이트 플러그인 추가 -->
<script src="https://uicdn.toast.com/editor-plugin-code-syntax-highlight/latest/toastui-editor-plugin-code-syntax-highlight-all.min.js"></script>

<!-- 토스트 UI 에디터, CSS 코어 -->
<link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />

<!-- # 유튜브 기본
```youtube
aA-s0KoeM68
```

# 유튜브 최대너비 800으로 변환  
```youtube
aA-s0KoeM68?max-width=800
```
  
# 유튜브 최대너비 800으로 변환 + 좌측정렬
```youtube
aA-s0KoeM68?max-width=800&margin-left=0
```
  
# 유튜브 최대너비 800으로 변환 + 우측정렬 + 비율변환
```youtube
aA-s0KoeM68?max-width=800&margin-right=0&ratio=1-1
```

# repl.it 기본
```repl
https://repl.it/@chasaem/VoluminousWholeArrays#Main.java
```

# repl.it 기본 + 높이 600으로 조절
```repl
https://repl.it/@chasaem/VoluminousWholeArrays?height=600#Main.java
```
 
# codepen 일반모드 삽입
```codepen
https://codepen.io/jangka44/pen/qBbxLWe?editors=0012
```
  
# codepen 일반모드 삽입 + 높이 500으로 수정
```codepen
https://codepen.io/jangka44/pen/qBbxLWe?editors=0012&height=500
```
  
# codepen embed 삽입 + 높이 500으로 수정
```codepen
https://codepen.io/jangka44/pen/qBbxLWe?editors=0012&height=500
```
  
# codepen embed 모드 삽입 + 높이 500으로 수정 + 즉시수정 가능 + 다크테마
```codepen
https://codepen.io/jangka44/embed/qBbxLWe?height=500&theme-id=dark&default-tab=js,result&editable=true
```
  
# codepen embed 모드 삽입 + 높이 500으로 수정 + 즉시수정 가능 + 다크테마 + 프리뷰(클릭해야 로드)
```codepen
https://codepen.io/jangka44/embed/preview/qBbxLWe?height=500&theme-id=dark&default-tab=js,result&editable=true
``` -->
<h1 class="con">제목 : <?=$row['title']?></h1>
<div class="con">
    날짜 : <?=$row['regDate']?>
</div>
<div class="con">
    등록날짜 : <?=$row['updateDate']?>
</div>
<div class="con">
    작성자 : 양세희
</div>

<div id="origin1" class="con" style="display:none;">
<?=$row['body']?>
</div>
<div id="viewer1" class="con">

</div>
<script>


// 유튜브 플러그인 시작
function youtubePlugin() {
    toastui.Editor.codeBlockManager.setReplacer("youtube", function (youtubeId) {
      // Indentify multiple code blocks
      const wrapperId = "yt" + Math.random().toString(36).substr(2, 10);
  
      // Avoid sanitizing iframe tag
      setTimeout(renderYoutube.bind(null, wrapperId, youtubeId), 0);
  
      return '<div id="' + wrapperId + '"></div>';
    });
  }
  
  function renderYoutube(wrapperId, youtubeId) {
    const el = document.querySelector('#' + wrapperId);
    
    var urlParams = getUrlParams(youtubeId);
  
    var width = '100%';
    var height = '100%';
    
    if ( urlParams.width ) {
      width = urlParams.width;
    }
  
    if ( urlParams.height ) {
      height = urlParams.height;
    }
    
    var maxWidth = 500;
    
    if ( urlParams['max-width'] ) {
      maxWidth = urlParams['max-width'];
    }
    
    var ratio = '16-9';
    
    if ( urlParams['ratio'] ) {
      ratio = urlParams['ratio'];
    }
    
    var marginLeft = 'auto';
    
    if ( urlParams['margin-left'] ) {
      marginLeft = urlParams['margin-left'];
    }
    
    var marginRight = 'auto';
    
    if ( urlParams['margin-right'] ) {
      marginRight = urlParams['margin-right'];
    }
    
    if ( youtubeId.indexOf('?') !== -1 ) {
      var pos = youtubeId.indexOf('?');
      youtubeId = youtubeId.substr(0, pos);
    }
    
    el.innerHTML = '<div style="max-width:' + maxWidth + 'px; margin-left:' + marginLeft + '; margin-right:' + marginRight + ';" class="ratio-' + ratio + ' relative"><iframe class="abs-full" width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + youtubeId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
  }
  // 유튜브 플러그인 끝
  
  // repl 플러그인 시작
  function replPlugin() {
    toastui.Editor.codeBlockManager.setReplacer("repl", function (replUrl) {
      var postSharp = "";
      if ( replUrl.indexOf('#') !== -1 ) {
        var pos = replUrl.indexOf('#');
        postSharp = replUrl.substr(pos);
        replUrl = replUrl.substr(0, pos);
      }
  
      if ( replUrl.indexOf('?') === -1 ) {
        replUrl += "?dummy=1";
      }
  
      replUrl += "&lite=true";
      replUrl += postSharp;
  
      // Indentify multiple code blocks
      const wrapperId = `yt${Math.random().toString(36).substr(2, 10)}`;
  
      // Avoid sanitizing iframe tag
      setTimeout(renderRepl.bind(null, wrapperId, replUrl), 0);
  
      return "<div id=\"" + wrapperId + "\"></div>";
    });
  }
  
  function renderRepl(wrapperId, replUrl) {
    const el = document.querySelector(`#${wrapperId}`);
  
    var urlParams = getUrlParams(replUrl);
  
    var height = 400;
  
    if ( urlParams.height ) {
      height = urlParams.height;
    }
  
    el.innerHTML = '<iframe height="' + height + 'px" width="100%" src="' + replUrl + '" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>';
  }
  // repl 플러그인 끝
  
  // codepen 플러그인 시작
  function codepenPlugin() {
    toastui.Editor.codeBlockManager.setReplacer("codepen", function (codepenUrl) {
      // Indentify multiple code blocks
      const wrapperId = `yt${Math.random().toString(36).substr(2, 10)}`;
  
      // Avoid sanitizing iframe tag
      setTimeout(renderCodepen.bind(null, wrapperId, codepenUrl), 0);
  
      return '<div id="' + wrapperId + '"></div>';
    });
  }
  
  function renderCodepen(wrapperId, codepenUrl) {
    const el = document.querySelector(`#${wrapperId}`);
  
    var urlParams = getUrlParams(codepenUrl);
  
    var height = 400;
  
    if ( urlParams.height ) {
      height = urlParams.height;
    }
    
    var width = '100%';
  
    if ( urlParams.width ) {
      width = urlParams.width;
    }
    
    if ( !isNaN(width) ) {
      width += 'px';
    }
    
    if ( codepenUrl.indexOf('#') !== -1 ) {
      var pos = codepenUrl.indexOf('#');
      codepenUrl = codepenUrl.substr(0, pos);
    }
  
    el.innerHTML = '<iframe height="' + height + '" style="width: ' + width + ';" scrolling="no" title="" src="' + codepenUrl + '" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>';
  }
  // repl 플러그인 끝
  
  // lib 시작
  String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
  }
  
  function getUrlParams(url) {
    url = url.trim();
    url = url.replaceAll('&amp;', '&');
    if ( url.indexOf('#') !== -1 ) {
      var pos = url.indexOf('#');
      url = url.substr(0, pos);
    }
    
    var params = {};
    
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
  }
  // lib 끝
  
  var editor1__initialValue = $('#origin1').html();
  var editor1 = new toastui.Editor({
    el: document.querySelector("#viewer1"),
    height: "600px",
    viewer:true,
    initialValue: editor1__initialValue,
    plugins: [toastui.Editor.plugin.codeSyntaxHighlight, youtubePlugin, replPlugin, codepenPlugin]
  });
</script>


<?php
    include "../part/foot.php";
?>
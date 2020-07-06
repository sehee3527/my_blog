<?php
    include "../part/head.php";

    $dbConn = mysqli_connect("site15.blog.oa.gg", "site15", "sbs123414", "site15", 3306) or die ("DB CONNECTION ERROR");
    $cateItemId = $_GET['cateItemId'];
    $sql = "
    SELECT `name`
    FROM cateItem
    WHERE id = {$cateItemId}
    ";
    $rs = mysqli_query($dbConn, $sql);
    $row = mysqli_fetch_assoc($rs);
    $cateItemName = $row['name'];

    $sql = "
    SELECT *
    FROM article
    WHERE cateItemId = {$cateItemId}
    ORDER BY id DESC
    ";
    
    $rs = mysqli_query($dbConn, $sql);
    $rows = [];
    while ( true ) {
        $row = mysqli_fetch_assoc($rs);
        if ( $row == null ) {
            break;
        }
        $rows[] = $row;
    }
    
?>


<div class="blog_main">
    <div class="blog-main-black">
        <img src="/resource/img/logo_side.png" alt="">
        <div class="blog-name">blog_main</div>
    </div>
</div>



<div class="blog-list con flex">
    <?php if ( empty($rows) ) { ?>
    <div class="blog-none">
        게시물이 존재하지 않습니다.
    </div>
    <?php } else { ?>
    <nav class="blog-list-list">
        <ul class="list-list flex flex-row-wrap">
            <?php foreach ( $rows as $row ) { ?>
            <li>
                <a href="/detail.php?id=<?=$row['id']?>" style="background-image:url(<?=$row['thumbImgUrl']?>)">
                    <div class="list-list-top-black"></div>
                    <div class="line-1 line-1-1"></div>
                    <div class="line-1 line-1-2"></div>
                    <div class="line-2 line-2-1"></div>
                    <div class="line-2 line-2-2"></div>
                    <div class="list-in">
                        <div class="list-date"><?=$row['updateDate']?></div>
                        <div class="list-name"><?=$row['title']?></div>
                        <div class="list-content"><?=$row['summary']?></div>
                    </div>
                </a>
            </li>
            <?php } ?>
        </ul>
    </nav>
    <?php } ?>
    <div class="list-profile">
        <div class="list-profile-box">
            <img src="/resource/img/avatar.png" alt="">
            <div class="list-profile-name">
                Yang Sehee
            </div>
            <div class="list-profile-content">C_point 블로그에 오신것을 환영합니다</div>
            <div>Welcome to the blog.</div>
        </div>
        <section class="part">
            <div class="part-name">목록</div>
            <div></div>
        </section>
    </div>
</div>

<?php
    include "../part/foot.php";
?>
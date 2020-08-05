$('#tab-contents .tab[id != "tab1"]').hide();
    $()関数では特定の属性を持つ要素や属性値を絞り込むことができます
        特定の属性を持つ要素のみを取得したいときには
            $('要素[属性]')
        値が等しい場合のみならば
            $('要素[属性 = "値"]')

$('#tab-menu a').on('click', function(event){
    $('#tab-contents .tab').hide();
        id=tab-contents内のいずれかのタブがクリックされるとそのタブ内のコンテンツを一旦非表示

    $('#tab-menu .active').removeClass("active");
        .remoneClassはクラスを削除するメソッド
        activeのcss設定は背景色白色・文字色黒色
        ここではaciveが削除対象なのでタブを切り替えるときはこのcss設定も一旦削除するため

        hideとremoveはもともとのactiveな場所を解除するため

    $(this).addClass("active");
        thisでタブがクリックされたところにクラスを追加している

    $($(this).attr("href")).show();
        .attr()はhtml要素の属性を取得したり認定したり設定できるメソッド
        ここでhref属性を取得しshowで取得したhref属性のなかみが表示

    event.preventDefault();
        eventを使用したらここでデフォルトに？
});
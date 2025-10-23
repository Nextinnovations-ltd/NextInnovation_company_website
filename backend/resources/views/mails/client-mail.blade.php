<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Next Innovations お問い合わせ</title>
    <style>
        @media only screen and (max-width: 767px) {
            .desktop-link { display: none !important; }
            .mobile-link { display: inline !important; }
        }

        @media only screen and (min-width: 768px) {
            .desktop-link { display: inline !important; }
            .mobile-link { display: none !important; }
        }
    </style>
</head>
<body style="font-size:16px;line-height: 24px">
    <h3 style="font-size: 18px; font-weight: bold; color: black;">{{$contact['name']}} 様</h3>
    <p style="color: black;">
        この度は Next Innovations へお問い合わせいただき、誠にありがとうございます。<br>
        以下の内容で受け付けました。担当者より <span style="font-weight: bold">2営業日以内</span>にご連絡差し上げます。<br>
    </p>
    <p style="color: black;">お客様情報</p>
    <table style="width:800px; padding-left: 20px;">
        <tr>
            <td style="width: 150px; font-weight:bold">会社名</td>
            <td>:</td>
            <td>{{$contact['company_name']}}</td>
        </tr>
        <tr>
            <td style="width: 150px; font-weight:bold">お名前</td>
            <td>:</td>
            <td>{{$contact['name']}}</td>
        </tr>
        <tr>
            <td style="width: 150px; font-weight:bold">メールアドレス</td>
            <td>:</td>
            <td style="
                max-width:300px;
                word-break:break-word;
                overflow-wrap:anywhere;
                white-space:normal;
            ">
                {{$contact['email']}}
            </td>
        </tr>
        <tr>
            <td style="width: 150px; font-weight:bold">電話番号</td>
            <td>:</td>
            <td>{{$contact['phone']}}</td>
        </tr>
    </table>
    <p style="color: black;">お問い合わせ内容</p>
    <table style="width:800px; padding-left: 20px;">
        <tr>
            @php
                $services = [
                    '5' => 'EORのみ',
                    '6' => '安心ラボ型EOR',
                    '7' => 'プロジェクト伴走型EOR',
                    '8' => 'UI/UXデザイン',
                    '9' => 'サイト制作・リニューアル',
                    '10' => 'システム開発・DX支援',
                    '11' => 'EOR代理店制度について',
                    '12' => 'その他',
                ];
            @endphp
            <td style="width: 150px; font-weight:bold">ご相談サービス</td>
            <td>:</td>
            <td
                style="
                max-width:300px;
                word-break:break-word;
                overflow-wrap:anywhere;
                white-space:normal;
            ">
                {{$services[$contact['interest']]}}
            </td>
        </tr>
        <tr>
            @php
                $hope = [
                    '1' => '資料送付',
                    '2' => '見積依頼',
                    '3' => '打ち合せ希望',
                    '4' => 'その他',
                ];
            @endphp
            <td style="width: 150px; font-weight:bold">希望方式</td>
            <td>:</td>
            <td>{{$contact['hope'] ? $hope[$contact['hope']] : ''}}</td>
        </tr>
        <tr>
            @php
                $budget = [
                    '1' => '50万未満',
                    '2' => '100万未満',
                    '3' => '100万円',
                    '4' => '200万円',
                    '5' => '300万円',
                    '6' => '400万円',
                    '7' => '500万円',
                    '8' => '600万円',
                    '9' => '700万円',
                    '10' => '800万円',
                    '11' => '900万円',
                    '12' => '1000万円以上',
                    '13' => '未定',
                    '14' => '応相談',
                ];
            @endphp
            <td style="width: 150px; font-weight:bold">ご予算</td>
            <td>:</td>
            <td>{{$contact['budget_jp'] ? $budget[$contact['budget_jp']] : ''}}</td>
        </tr>
        <tr>
            @php
                $known = [
                    '1' => 'ご紹介',
                    '2' => 'SNS',
                    '3' => 'その他媒体',
                    '4' => '営業',
                ];
            @endphp
            <td style="width: 150px; font-weight:bold">知ったきっかけ</td>
            <td>:</td>
            <td>{{$known[$contact['known']]}}</td>
        </tr>
        <tr>
            <td style="width: 150px; font-weight:bold">詳細内容</td>
            <td>:</td>
            <td>{{$contact['message']}}</td>
        </tr>
    </table>
    <p style="color: black;">ご案内</p>
    <div style="padding-left: 20px;">
        <p>
            2営業日以内に返信がない場合は、恐れ入りますが
            <span class="desktop-link">
                <a href="https://mail.google.com/mail/?view=cm&to=info@next-innovations.ltd" target="_blank" style="color:#1a73e8; text-decoration:none;">info@next-innovations.ltd</a>
            </span>
            <span class="mobile-link">
                <a href="mailto:info@next-innovations.ltd" target="_blank" style="color:#1a73e8; text-decoration:none;">info@next-innovations.ltd</a>
            </span>
            まで直接ご連絡ください。
        </p>
        <p>サービスの詳細はこちらからもご覧いただけます：</p>
        <p>
            ・
            <a href="https://jp.next-innovations.ltd/eor" target="_blank" style="color:#1a73e8; text-decoration:none;">EORサービスページ</a>
        </p>
        <p>
            ・
            <a href="https://jp.next-innovations.ltd/dx-support" target="_blank" style="color:#1a73e8; text-decoration:none;">DX支援サービスページ</a>
        </p>
    </div>
    <p style="color: black;">Next Innovations</p>
    <a href="https://jp.next-innovations.ltd" target="_blank" style="color:#1a73e8; text-decoration:none;">https://jp.next-innovations.ltd</a>
    <div style="padding-left: 20px;">
        <p>さらに弊社を知っていただけるコンテンツもぜひご覧ください：</p>
        <p><a href="https://demo-site.next-innovations.ltd/ni-blog" target="_blank" style="color:#1a73e8; text-decoration:none;">会社公式ブログはこちら</a></p>
        <a href="https://note.com/yuta_myanmar_eor" target="_blank" style="color:#1a73e8; text-decoration:none;">代表ブログはこちら</a>
    </div>

</body>
</html>

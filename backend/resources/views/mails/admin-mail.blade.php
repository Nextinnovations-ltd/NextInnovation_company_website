<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Next Innovations お問い合わせ</title>
</head>
<body style="font-size:16px;line-height: 24px">
    <p style="font-weight: bold;">送信日時 <span style="font-weight: 400;">: {{$contact['date']}}</span></p>
    <p style="font-weight: bold;">送信元IP <span style="font-weight: 400;">: {{$contact['ip']}}</span></p>
    <p style="color: black;">お客様情報</p>
    <table style="width:800px; padding-left: 20px;">
        <tr>
            <td style="width: 35%; font-weight:bold">会社名</td>
            <td>:</td>
            <td>{{$contact['company_name']}}</td>
        </tr>
        <tr>
            <td style="width: 35%; font-weight:bold">お名前</td>
            <td>:</td>
            <td>{{$contact['name']}}</td>
        </tr>
        <tr>
            <td style="width: 35%; font-weight:bold">メールアドレス</td>
            <td>:</td>
            <td>{{$contact['email']}}</td>
        </tr>
        <tr>
            <td style="width: 35%; font-weight:bold">電話番号</td>
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
            <td style="width: 35%; font-weight:bold">ご相談サービス</td>
            <td>:</td>
            <td>{{$services[$contact['interest']]}}</td>
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
            <td style="width: 35%; font-weight:bold">希望方式</td>
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
            <td style="width: 35%; font-weight:bold">ご予算</td>
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
            <td style="width: 35%; font-weight:bold">知ったきっかけ</td>
            <td>:</td>
            <td>{{$known[$contact['known']]}}</td>
        </tr>
        <tr>
            <td style="width: 35%; font-weight:bold">詳細内容</td>
            <td>:</td>
            <td>{{$contact['message']}}</td>
        </tr>
    </table>
    <p style="color: black;">備考</p>
    <div style="padding-left: 20px;">
        <p>
            本メールはフォームから自動送信されています。<br>
            ご対応担当者は速やかにご連絡をお願いします。
        </p>
    </div>
</body>
</html>

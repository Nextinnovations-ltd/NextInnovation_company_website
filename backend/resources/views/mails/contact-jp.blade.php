
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Next Innovations お問い合わせ</title>
</head>
<body style="font-size:16px;line-height: 24px">

    <h3 style="font-size: 18px; font-weight: bold; color: black;">{{ $contact['name'] }} 様</h3>
    <p style="color: black;">
        お世話になります。<br>
        株式会社Next Innovationsの担当です。<br><br><br>
        この度は弊社のサービスへお問い合わせいただきありがとうございます。<br><br><br>
        案件の詳細について担当者から折り返し連絡いたします。<br><br>
    </p>
    <p style="color: black;">案件詳細：</p>

    <table style="width:800px; padding: 20px;">
        <tr>
            <td style="width: 30%; font-weight:bold">お名前</td>
            <td style="width: 10%">:</td>
            <td>{{ $contact['name'] }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">メールアドレス</td>
            <td>:</td>
            <td>{{ $contact['email'] }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">電話番号</td>
            <td>:</td>
            <td>{{ $contact['phone'] }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">お国</td>
            <td>:</td>
            <td>{{ ucwords($contact['country']) }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">ご予算</td>
            <td>:</td>
            <td>{{ $contact['budget'] }}</td>
        </tr>
        <tr>
            @php
                $services = [
                    '5' => 'EOR',
                    '6' => '安心ラボ型EOR',
                    '7' => 'プロジェクト伴走型EOR',
                    '8' => 'EOR代理店制度',
                    '9' => 'DX支援',
                    '10' => '受託開発',
                    '11' => 'UI/UXデザイン',
                ];
            @endphp
            <td style="width: 30%; font-weight:bold">ご興味のあるサービス</td>
            <td>:</td>
            <td>{{ $services[$contact['interest']] ?? 'Unknown Service' }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">メッセージ</td>
            <td>:</td>
            <td>{{ $contact['message'] }}</td>
        </tr>
    </table>

</body>
</html>

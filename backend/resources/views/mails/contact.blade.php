
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NI Contact Mail</title>
</head>
<body style="font-size:16px;line-height: 24px">

    <h2></h2>
    <div class="card p-4">Hi <span style="font-weight:bold; font-size:18px">{{ $contact['name'] }}</span>, your contact form data is below.</div>

    <table style="background:#dcd7d7; width:800px; padding: 20px; margin-top:20px">
        <tr>
            <td style="width: 30%; font-weight:bold">Name</td>
            <td style="width: 10%">:</td>
            <td>{{ $contact['name'] }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">Email</td>
            <td>:</td>
            <td>{{ $contact['email'] }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">Phone</td>
            <td>:</td>
            <td>{{ $contact['phone'] }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">Country</td>
            <td>:</td>
            <td>{{ ucwords($contact['country']) }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">Budget</td>
            <td>:</td>
            <td>{{ $contact['budget'] }}</td>
        </tr>
        <tr>
            @php
                $services = [
                    '1' => 'EOR',
                    '2' => 'Development',
                    '3' => 'UI/UX',
                    '4' => 'Testing',
                ];
            @endphp
            <td style="width: 30%; font-weight:bold">Interest Service</td>
            <td>:</td>
            <td>{{ $services[$contact['interest']] ?? 'Unknown Service' }}</td>
        </tr>
        <tr>
            <td style="width: 30%; font-weight:bold">Message</td>
            <td>:</td>
            <td>{{ $contact['message'] }}</td>
        </tr>
    </table>

</body>
</html>

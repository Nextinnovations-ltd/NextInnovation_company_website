<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Password Reset</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); padding: 40px;">
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <h2 style="font-size: 24px; color: #1f2937; margin: 0;">Reset Your Password</h2>
            </td>
          </tr>
          <tr>
            <td style="font-size: 16px; color: #374151; line-height: 1.5; padding-bottom: 30px;">
              <p>Hello,</p>
              <p>We received a request to reset your password. Click the button below to set a new one:</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <a href="{{ route('verifyMail', $data['token']) }}" style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;">Reset Password</a>
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #6b7280;">
              <p>If you didn’t request this, just ignore this email.</p>
              <p>— {{ config('app.name') }} Team</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top: 40px; font-size: 12px; color: #9ca3af;">
              &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>

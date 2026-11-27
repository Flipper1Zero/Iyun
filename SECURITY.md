# Security

If you find a security problem, for example in accounts, sessions, source-sheet moderation, or the Worker, please tell us privately. Use the "Report a vulnerability" button on the Security tab of https://github.com/Flipper1Zero/Iyun. Please do not open a public issue. Include the steps to reproduce the problem. Do not test against other people's accounts or data.

Two things look odd, but they are on purpose. The `/api/admin/*` routes stay closed until the `ADMIN_KEY` secret is set. The `/__upload` route stays closed until `UPLOAD_KEY` is set. We open it only while a deploy is running.

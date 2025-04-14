# Local Storage of JWT
* execute `npm run start-localstorage` in `backend`
* execute `npm run dev` for frontend in `frontend-css`
* to test XSS, note `<script>alert("hi");</script>` does not work because browser blocks this
* run `<img src="invalid" onerror="alert(JSON.stringify(localStorage))">` to get results
* login creds are `test@example.com` and `password`

# Cookie Storage of JWT
* execute `npm run start-cookie` in `backend`
* execute `npm run dev` for frontend in `frontend`
* to test XSS, note `<script>alert("hi");</script>` does not work because browser blocks this
* run `<img src="invalid" onerror="alert(document.cookie)">` to get results
* login creds are `test@example.com` and `password`
* IMPORTANT: note settings in `res.cookie('refreshToken', ...)`



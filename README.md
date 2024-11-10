# API-SpeechEase

The following APIs are designed for use within the SpeechEase app project. These APIs serve the following functions:
1. Managing user registration and login processes
2. Handling user profile data within the app
3. ...

## 1. List API
### Register API
This API used to create users account

Method: POST
URL: /register
Body Request:
{
  username,
  email,
  password
}

Result:
1. Status Code: 201 (Created)
   Response Body:
   {
     "status": "success",
     "message": "User successfully created",
     "error": false
   }
   
2. Status Code: 400 (Bad Request)
   Response Body:
      {
     "status": "success",
     "message": "Failed to create new user",
     "error": true
   }

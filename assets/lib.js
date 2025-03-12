import { ToastAndroid } from "react-native";

export const API_URL = 'https://pokerapi.jumatechs.xyz/telegram'; //rest api url base

export const toasts = (message)=>{
    return ToastAndroid.show(message, ToastAndroid.SHORT);
}

export const emailtem = (score)=>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IQtester Welcome Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: white;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .logo {
            display: flex;
            align-items: center;
            justify-content: between ;
            margin-bottom: 30px;
        }
        .logo img {
            width: 130px;
            height: 30px;
            margin-right: 10px;
        }
        h1, h2 {
            color: white;
        }
        p {
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ffcc00;
            color: black;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .score-circle {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: #ffcc00;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            color: black;
            margin: 20px auto;
            box-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
            font-weight:800;
        }
        .footer {
            margin-top: 40px;
            border-top: 1px solid #333;
            padding-top: 20px;
            font-size: 12px;
        }
        .footer a {
            color: #ffcc00;
        }
        @media (max-width: 600px) {
            .container {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://i.ibb.co.com/s9wzgTW2/splashlogo1.png" alt="Logo">
            <p>IQtester</p>
        </div>
        

        <!-- Score Circle -->
        <div class="score-circle">
            {score}
        </div>

        <p>Congratulations on completing your IQ test! Your score is shown above.</p>
        <p>We built IQtester to help individuals (from managers to students) improve their skills, and we hope it helps you too.</p>
        <p>We would love to hear why you signed up for IQtester! Let us know your thoughts.</p>
        <a href="#" class="button">Sign in to your account</a>

        <img src="https://via.placeholder.com/300x200" alt="Illustration" style="max-width: 100%; height: auto; margin-top: 40px;">
        
        <div class="footer">
            <p>If you did not sign up for this account, you can ignore this email.</p>
            <p>&copy; 2024 Company. All rights reserved. To update your email preferences <a href="#">click here</a>.</p>
            <p style="text-align: center; margin-top: 20px;"><a href="#" style="color: #ffcc00;">View this email in the browser</a></p>
        </div>
    </div>
</body>
</html>
`
}
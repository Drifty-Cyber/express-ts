import { Request, Response, Router } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Page</title>
      <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    
    .login-container {
        background-color: #3498db;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        color: #fff;
    }
    
    .login-box {
        max-width: 300px;
        margin: 0 auto;
        padding-right: 30px;
    }
    
    h2 {
        margin-top: 0;
    }
    
    .form-group {
        margin-bottom: 15px;
        text-align: left;
    }
    
    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }
    
    button {
        background-color: #2979b5;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #1e5380;
    }
    
      </style>
  </head>
  <body>
      <div class="login-container">
          <div class="login-box">
              <h2>Login</h2>
              <form action="/login" method="post">
                  <div class="form-group">
                      <label for="username">Username</label>
                      <input type="text" id="username" name="username" required>
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" id="password" name="password" required>
                  </div>
                  <button type="submit">Log In</button>
              </form>
          </div>
      </div>
  </body>
  </html>
  
  `);
});

router.post('/login', (req: Request, res: Response, next) => {
  const { username, password } = req.body;

  res.status(200).json({
    username,
    password,
  });

  next();
});

export { router };

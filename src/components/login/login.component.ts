import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="logo-container">
        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHM-eaCjTgmvg/company-logo_200_200/0/1642081212390?e=2147483647&v=beta&t=0wF9xgUNpUworjcrpGJ4ynPZSkGmpV2BGJBiI1DPcQo" alt="Smart.WI Logo" class="logo">

        </div>
        
        <h2>Welcome back</h2>
        <p class="subtitle">Please enter your login details.</p>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email" 
              class="form-control"
              [ngClass]="{'invalid': loginForm.get('email')?.invalid && loginForm.get('email')?.touched}"
            >
            <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" class="error-message">
              Please enter a valid email
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              formControlName="password" 
              class="form-control"
              [ngClass]="{'invalid': loginForm.get('password')?.invalid && loginForm.get('password')?.touched}"
            >
            <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" class="error-message">
              Password is required
            </div>
          </div>

          <div class="remember-forgot">
            <div class="remember-me">
              <input type="checkbox" id="rememberMe" formControlName="rememberMe">
              <label for="rememberMe">Remember me</label>
            </div>
            <a href="javascript:void(0)" (click)="forgotPassword()" class="forgot-password">Forgot password</a>
          </div>

          <button type="submit" class="login-button" [disabled]="loginForm.invalid">Login</button>

          <div class="signup-link">
            Don't have an account? 
            <a href="javascript:void(0)" (click)="signUp()">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    /* ... previous styles remain the same ... */
    /* Login Page Styles */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.login-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.login-card h2 {
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.subtitle {
  text-align: center;
  color: #6c757d;
  margin-bottom: 25px;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #495057;
  font-weight: 500;
  font-size: 14px;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 0 0.2rem rgba(0, 86, 179, 0.25);
}

.form-control.invalid {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
  animation: fadeInError 0.3s ease-out;
}

@keyframes fadeInError {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 10px;
  accent-color: #0056b3;
}

.remember-me label {
  margin-bottom: 0;
  font-size: 14px;
  color: #6c757d;
}

.forgot-password {
  color: #0056b3;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #003580;
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 14px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.login-button:hover {
  background-color: #003580;
}

.login-button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
  opacity: 0.7;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
  color: #6c757d;
  font-size: 14px;
}

.signup-link a {
  color: #0056b3;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.signup-link a:hover {
  color: #003580;
  text-decoration: underline;
}

/* Responsive Adjustments */
@media (max-width: 480px) {
  .login-card {
    width: 90%;
    padding: 25px;
  }

  .logo {
    width: 80px;
    height: 80px;
  }

  .form-control {
    padding: 10px;
    font-size: 14px;
  }

  .login-button {
    padding: 12px;
    font-size: 14px;
  }
}
  `]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    // Any initialization logic can go here
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Here you would typically call an authentication service
      // For now, we'll just simulate a successful login
      this.login();
    }
  }

  login() {
    // Simulate login logic
    // In a real app, this would involve calling an auth service
    // For now, we'll just navigate to the assets page
    this.router.navigate(['/assets']);
  }

  forgotPassword() {
    // Implement forgot password logic
    console.log('Forgot password clicked');
  }

  signUp() {
    // Implement sign up navigation
    console.log('Sign up clicked');
  }
}
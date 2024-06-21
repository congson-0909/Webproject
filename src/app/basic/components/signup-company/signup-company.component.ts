import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrl: './signup-company.component.scss'
})
export class SignupCompanyComponent {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}
  ngOnInit(){
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone:[null],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]]
    });
  }
  submitForm(): void {
      this.authService.registerCompany(this.validateForm.value).subscribe(res => {
          this.notification
          .success(
            'THÀNH CÔNG',
            'Đăng ký thành công',
             { nzDuration: 5000 }
            );
          this.router.navigateByUrl('/login');
        },
        error => {
          console.error('Lỗi khi đăng ký:', error); 
          this.notification.error('LỖI', 'Đăng ký thất bại', { nzDuration: 5000 });
        }
      );
     
  }
}

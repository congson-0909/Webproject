import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.scss'
})
export class SignupClientComponent {
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
      lastname: [null, [Validators.required]],
      phone:[null],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]]
    });
  }
  submitForm() {
      this.authService.registerClient(this.validateForm.value).subscribe(res => {
          this.notification
          .success(
            'THÀNH CÔNG',
            'Đăng ký thành công',
             { nzDuration: 5000 }
            );
          this.router.navigateByUrl('/login');
        },
        error => {
          console.error('Lỗi khi đăng ký:', error); // Log lỗi để debug
          this.notification.error('LỖI', 'Đăng ký thất bại', { nzDuration: 5000 });
        }
      );
     
  }
}

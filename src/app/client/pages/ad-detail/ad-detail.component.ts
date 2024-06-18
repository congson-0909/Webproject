import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss']
})
export class AdDetailComponent {
  adId = this.activatedRoute.snapshot.params['adId'];
  avatarUrl:any;
  ad:any;
  validateForm!: FormGroup;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private fb : FormBuilder
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      bookDate: [null, [Validators.required]]
    });
    this.getAdDetailsByAdId();
  }

  
  getAdDetailsByAdId() {
    this.clientService.getAdDetailsByAdId(this.adId).subscribe(res => {
      console.log(res);
      this.avatarUrl = 'data:image/jpeg;base64,' + res.adDTO.returnedImg;
      this.ad = res.adDTO;
    });
  }

  
  
}

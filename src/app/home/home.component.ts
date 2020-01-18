import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "reactJs" },
    { "id": 3, "name": "VueJs" },
    { "id": 4, "name": "ExpressJs" }
  ]

  constructor(private router:Router,private toast:ToastrService) { }

  ngOnInit() {
  }

  onSelect(dept) {
    this.router.navigate(['/home',dept.id])

  }
  onSuccess(){
   this.toast.success("hey fun")
  }
  onWarning(){
    this.toast.warning("iam toast warning")
  }
  onError(){
    this.toast.error("iam toast Error")
  }

}

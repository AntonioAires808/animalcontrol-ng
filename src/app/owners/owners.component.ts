import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Owner } from '../models/Owner';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public title = 'Owner';
  public ownerForm!: FormGroup;
  public selectedOwner!: Owner;
  public text_!: string;

  public owners = [
    { id: 1, name: 'Antonio', address: 'Rua Dr', schedule: '9h-18h'},   
    { id: 2, name: 'Susana', address: 'Praceta Iv', schedule: '9h-18h'}
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  ownerSelected(owner: Owner) {
    this.selectedOwner = owner;
    this.ownerForm.patchValue(owner);
  }

  back() {
    this.selectedOwner = null as any;
  }

  createForm() {
    this.ownerForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      schedule: ['', Validators.required]
    });
    
  }

  ownerSubmit() {
          
  }

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Animal } from '../models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  public animalForm!: FormGroup;
  public title = 'Animals'
  public selectedAnimal!: Animal;
  public text_!: string;
  modalRef!: BsModalRef;

  public animals = [
    { id: 1, name: 'Ciri', nickname: 'CiriGatas', chipNumber: 5151513, age: 3, owner: 'Antonio'},
    { id: 2, name: 'Bali', nickname: 'BaliWally', chipNumber: 3161361, age: 0.9, owner: 'Antonio' },
    { id: 3, name: 'Diesel', nickname: 'N/A', chipNumber: 4421742, age: 5, owner: 'Susana' },
    { id: 4, name: 'Flake', nickname: 'Flakezinho', chipNumber: 3773731, age: 5, owner: 'Susana'}
  ];
  
  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.createForm();

   }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  animalSelected(animal: Animal) {
    this.selectedAnimal = animal;
    this.animalForm.patchValue(animal);
  }

  back() {
    this.selectedAnimal = null as any;
  }

  createForm() {
    this.animalForm = this.fb.group({
      name: ['', Validators.required],
      nickname: [''],
      chipNumber: ['', Validators.required],
      age: ['']
    });
    
  }

  animalSubmit() {
          
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from '../models/animal';

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

  public animals = [
    { id: 1, name: 'Ciri', nickname: 'CiriGatas', chipNumber: 5151513, age: 3},
    { id: 2, name: 'Bali', nickname: 'BaliWally', chipNumber: 3161361, age: 0.9 },
    { id: 3, name: 'Diesel', nickname: 'N/A', chipNumber: 4421742, age: 5 },
    { id: 4, name: 'Flake', nickname: 'Flakezinho', chipNumber: 3773731, age: 5}
  ];
  
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
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

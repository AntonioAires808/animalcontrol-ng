import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Animal } from '../models/Animal';
import { AnimalService } from './animal.service';

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
  public mode!: 'post';
  public animals!: Animal[];

  // public animals = [
  //   { id: 1, name: 'Ciri', nickname: 'CiriGatas', chipNumber: 5151513, age: 3, owner: 'Antonio'},
  //   { id: 2, name: 'Bali', nickname: 'BaliWally', chipNumber: 3161361, age: 0.9, owner: 'Antonio' },
  //   { id: 3, name: 'Diesel', nickname: 'N/A', chipNumber: 4421742, age: 5, owner: 'Susana' },
  //   { id: 4, name: 'Flake', nickname: 'Flakezinho', chipNumber: 3773731, age: 5, owner: 'Susana'}
  // ];

  public animal = {}; 
  
  constructor(private fb: FormBuilder, private modalService: BsModalService, private animalService: AnimalService) {
    this.createForm();

   }

  ngOnInit() {
    this.loadAnimals();
  }

  loadAnimals() {
    this.animalService.getAll()
      .subscribe(
        (animals: Animal[]) => {
          this.animals = animals;
        },
        (error: any) => {
          console.log(error);          
        }
      );
  }

  openModal(template: TemplateRef<any>, animal: Animal) {
    this.modalRef = this.modalService.show(template);
    // TODO Pass animal owner to display on modal
    // this.animal = animal.owner;
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
      id: [''],
      name: ['', Validators.required],
      nickname: [''],
      chipNumber: ['', Validators.required],
      age: ['']
    });
    
  }

  saveAnimal(animal: Animal) {
    if (animal.id != 0) {
      this.animalService.put(animal).subscribe(
        (model: any) => {
          console.log(model);
          this.loadAnimals();        
        },
        (error: any) => {
          console.log(error);        
        },
      );
    }
    else if (animal.id == 0) {
      this.animalService.post(animal).subscribe(
        (model: any) => {
          console.log(model);
          this.loadAnimals();        
        },
        (error: any) => {
          console.log(error);        
        },
      );
    }    
  }

  animalSubmit() {
    this.saveAnimal(this.animalForm.value);
  }  

  registerAnimal() {
    this.selectedAnimal = new Animal();
    this.animalForm.patchValue(this.selectedAnimal);
  }

  // Refresh "Back to list" after delete TODO
  deleteAnimal(id: Number) {
    this.animalService.delete(id).subscribe(
      (model: any) => {

      },
      (error: any) => {
        console.log(error);        
      },
    );  
  }
}

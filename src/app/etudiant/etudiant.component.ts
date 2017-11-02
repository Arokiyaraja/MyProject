import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

etudiants: Array<any>

  constructor() { 
this.etudiants = [
{
	nom : 'Robert',
	prenom : 'Jean',
	age : 25,
	admis : 'oui'
},
{
	nom : 'Louis',
	prenom : 'Smith',
	age : 15,
	admis : 'non'
},
{
	nom : 'Robin',
	prenom : 'Jack',
	age : 10,
	admis : 'non'
},
{
	nom : 'Francois',
	prenom : 'Gerard',
	age : 28,
	admis : 'oui'
}
];

  }

  ngOnInit() {
  }

}

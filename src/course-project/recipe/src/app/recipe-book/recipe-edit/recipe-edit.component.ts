import { OnInit,Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  name: string;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.name = params['name'];
      this.editMode = params['name'] != null;
      console.log(this.editMode);
    })
    
  }

}

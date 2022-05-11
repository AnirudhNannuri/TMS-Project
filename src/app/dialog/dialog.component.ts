import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VehicleList } from '../shared/interface';
import { HomeComponent } from '../home/home.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiclesService } from '../shared/vehicles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public vehicleForm: FormGroup

  vehicle: VehicleList = new VehicleList();
  Model: any[] = [
    { id: 1, name: "TypeOne"},
    { id: 2, name: "TypeTwo"},
  ];

  Type: any[] = [
    { id: 1, name: "Tipper", model: 1},
    { id: 2, name: "Flatbed", model: 1},
    { id: 3, name: "LiftGate", model: 1},
    { id: 4, name: "Semi-Trailer", model: 2},
    { id: 5, name: "Jumbo-Trailer", model: 2}
  ]

  selectedModel: any = "";
  selectedType: any = "";

  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VehicleList,
    private vehicleService: VehiclesService,
    public fb: FormBuilder,
    public toastr:ToastrService
  ) {
    this.vehicleForm = new FormGroup({
      vehicleNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
      chassisNumber: new FormControl('', [Validators.required, Validators.minLength(4)]),
      modelNumber: new FormControl('', Validators.required),
      vehicleType: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
      this.vehicleService.getAll();
      this.vehicleForm;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // vehiclesForm() {
  //
  // }

  get vehicleNo() {
    return this.vehicleForm.get('vehicleNumber');
  }

  get chassisNo() {
    return this.vehicleForm.get('chassisNumber');
  }

  get modelNo() {
    return this.vehicleForm.get('modelNumber');
  }

  get vehicleTp() {
    return this.vehicleForm.get('vehicleType');
  }

  saveVehicle() {
    this.vehicleService.create(this.vehicleForm.value);
    this.toastr.success(
      this.vehicleForm.controls['vehicleNumber'].value + ' successfully added!'
    );
    this.resetForm();
  }
  resetForm() {
    this.vehicleForm.reset();
  }

  typeDropdown: any =[];

  typeOptions(value: any) {
    this.typeDropdown = this.Type.filter((i: any) => i.model == value);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { StatesModel } from '../../models/states.model';
import { ReactiveFormService } from '../../services/reactive-form.service';

@Component({
  selector: 'lcu-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  /**
   * Local property for selecting terms
   */
  protected _termsChecked: boolean;

  /**
   * Input property for checking terms
   */
  @Input('terms-checked')
  public get TermsChecked(): boolean {
    return this._termsChecked;
  }

  public set TermsChecked(val: boolean) {
    console.log('TermsChecked ', val);
    this._termsChecked = val;
  }

  /**
   * Access address field
   */
  public get AddressControl(): AbstractControl {
    return this.Form.get('addressControl');
  }

  /**
   * Access city field
   */
  public get CityControl(): AbstractControl {
    return this.Form.get('cityControl');
  }

  /**
   * Access confirm password field
   */
  public get ConfirmPasswordControl(): AbstractControl {
    return this.Form.get('confirmPasswordControl');
  }

  /**
   * Access email field
   */
  public get EmailControl(): AbstractControl {
    return this.Form.get('emailControl');
  }

  /**
   * Access first name field
   */
  public get FirstNameControl(): AbstractControl {
    return this.Form.get('firstNameControl');
  }

  /**
   * Access last name field
   */
  public get LastNameControl(): AbstractControl {
    return this.Form.get('lastNameControl');
  }

  /**
   * Access state field
   */
  public get StateControl(): AbstractControl {
    return this.Form.get('stateControl');
  }

  /**
   * Access terms field
   */
  public get TermsControl(): AbstractControl {
    return this.Form.get('termsControl');
  }

  /**
   * Access password field
   */
  public get PasswordControl(): AbstractControl {
    return this.Form.get('passwordControl');
  }

  /**
   * Access username field
   */
  public get UsernameControl(): AbstractControl {
    return this.Form.get('userNameControl');
  }

  /**
   * Access zipcode field
   */
  public get ZipcodeControl(): AbstractControl {
    return this.Form.get('zipcodeControl');
  }

  /**
   * Toggle to show / hide password value
   */
  public HidePassword: boolean = true;

  /**
   * Toggle to show / hide password value
   */
  public HideConfirmPassword: boolean = true;

/**
 * property for reactive form
 */
  public Form: FormGroup;

  /**
   * property to states list
   */
  public States: Array<StatesModel>;

  /**
   * propery for form title
   */
  public Title: string;

  /**
   * propery for form title icon
   */
  public TitleIcon: string;

  /**
   * propery for form subtitle
   */
  public SubTitle: string;

  constructor(protected activatedRoute: ActivatedRoute, protected reactiveFormService: ReactiveFormService) {
    this.Title = 'Angular Reactive Form';
    this.TitleIcon = 'vertical_split';
    this.SubTitle = 'Responsive Form';
  }

  ngOnInit() {

    this.setupForm();

    this.getStates();

    this.activatedRoute.paramMap.subscribe(params => {
      console.log('reactive form param', params.get('id'));
    });
  }

  /**
   * Register
   */
  public Register(): void {
    console.log('register');
  }

  /**
   * Clear form
   */
  public ClearForm(): void {
    this.Form.reset();
  }

  public ShowTermsAndConditions(): void {
    console.log('show terms & conditions');
  }

  /**
   * Setup the reactive form
   */
  protected setupForm(): void {
    this.Form = new FormGroup({
      firstNameControl: new FormControl('', Validators.compose([Validators.required])),
      lastNameControl: new FormControl('', Validators.compose([Validators.required])),
      usernameControl: new FormControl('', Validators.compose([Validators.required])),
      emailControl: new FormControl('', Validators.compose([Validators.required])),
      passwordControl: new FormControl('', Validators.compose([Validators.required])),
      confirmPasswordControl: new FormControl('', Validators.compose([Validators.required])),
      addressControl: new FormControl('', Validators.compose([Validators.required])),
      cityControl: new FormControl('', Validators.compose([Validators.required])),
      stateControl: new FormControl('', Validators.compose([Validators.required])),
      zipcodeControl: new FormControl('', Validators.compose([Validators.required])),
      termsControl: new FormControl('')
    });
  }

  /**
   * Return list of states
   */
  protected getStates(): void {
    this.reactiveFormService.GetStates().subscribe((data: Array<StatesModel>) => {
      this.States = data;
    });
  }

}

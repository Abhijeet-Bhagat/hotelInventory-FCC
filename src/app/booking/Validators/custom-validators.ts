import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {
    static checkName(control: AbstractControl){
        const name = control.value as string;
        if(name.includes('test')){
            return {
                invalidName: true
            }
        }
        return null;
    }


    static dateValidator(control: FormGroup){
        const checkinDate = new Date(control.get('checkinDate')?.value);
        const checkoutDate = new Date(control.get('checkoutDate')?.value);
        
        if(checkinDate > checkoutDate){
            control.get('checkoutDate')?.setErrors({
                dateError: true
            })
            return {
                dateError: true
            }
        }
        return null;
    }
}

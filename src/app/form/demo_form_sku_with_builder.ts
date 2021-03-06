import { Component  } from '@angular/core';
import { FORM_DIRECTIVES,REACTIVE_FORM_DIRECTIVES,FormBuilder,FormGroup } from '@angular/forms';


@Component({
    selector:'demo-form-sku-builder',
    directives:[FORM_DIRECTIVES,REACTIVE_FORM_DIRECTIVES],
    template:`
        <div class="ui container raised segment">
            <h2 class="ui header">Demo Form: Sku with Builder</h2>
            <form [formGroup] = 'myForm' (ngSubmit) = 'onSubmit(myForm.value)'
            class='ui form'>

                <div class='field'>
                    <label for='skuInput'>SKU</label>
                    <input type='text' id='skuInput' placeholder='SKU'
                    [formControl]="myForm.controls['sku']" />
                </div>
                <button type='submit' class='ui button' >Submit</button>
            </form>

        </div>
    `
})
export /**
 * DemoFormSkuBuilder
 */
class DemoFormSkuBuilder {
    myForm:FormGroup;
    constructor(fb:FormBuilder) {
        this.myForm = fb.group({
            'sku':["ABC123"]
        });
    }

    onSubmit(value:string):void{
        console.log('you submitted value:',value);
        
    }
}
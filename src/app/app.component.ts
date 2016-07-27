import { Component } from '@angular/core';

import { DemoFormSku } from './form/demo_form_sku';
import { DemoFormSkuBuilder } from './form/demo_form_sku_with_builder';
import { DemoFormWithValidationsExplicit } from './form/demo_form_with_validations_explicit';
import { DemoFormWithValidationsShorthand } from './form/demo_form_with_validations_shorthand';
import { DemoFormWithCustomValidations } from './form/demo_form_with_custom_validations.ts';
import { DemoFormWithEvents } from './form/demo_form_with_events';
import { DemoFormNgModel } from './form/demo_form_ng_model.ts';


@Component({
  selector: 'my-app',
  template: `
        <demo-form-sku></demo-form-sku>
        <demo-form-sku-builder></demo-form-sku-builder>
        <demo-form-with-validation-explicit></demo-form-with-validation-explicit>
        <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
        <demo-form-with-custom-validations></demo-form-with-custom-validations>
        <demo-form-with-events></demo-form-with-events>
        <demo-form-ng-model></demo-form-ng-model>
    `,
  directives: [DemoFormSku, DemoFormSkuBuilder,
    DemoFormWithValidationsExplicit,
    DemoFormWithValidationsShorthand,
    DemoFormWithCustomValidations,
    DemoFormWithEvents,
    DemoFormNgModel]
})
export class AppComponent {

}
import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['type', 'name', 'id', 'placeholder', 'required',
       'autofocus', 'disabled', 'min', 'max', 'maxlength', 'label'],
  label: false,
  type: 'text',
  classNames: ['form-group'],
  classNameBindings: ['hasError'],
  hasError: Ember.computed.notEmpty('errors'),
});

# bs-input

Just a simple addon to style inputs with bootstrap.

## Example

![bs-input-example](https://cloud.githubusercontent.com/assets/230476/5911548/d7d46014-a57b-11e4-8d66-97acba01328b.png)


## Installation

* `npm install ember-cli-bs-input --save-dev`
* `npm install`

## Usage

```handlebars
{{bs-input value=name label='Your Full Name' placeholder='name on account' errors=errors.name}}

```

Properties:

- `type` - Default value is `text`
- `name`
- `label` - Default value is `false`
- `id`
- `placeholder`
- `required`
- `autofocus`
- `disabled`
- `min`
- `max`
- `maxlength`


## Running Tests

* `ember test`
* `ember test --server`

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


# License

Copyright (c) 2015 Josemar Luedke

Licensed under the [MIT license](LICENSE.md).
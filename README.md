<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ehmicky/design/main/modern-errors/modern-errors_dark.svg"/>
  <img alt="modern-errors logo" src="https://raw.githubusercontent.com/ehmicky/design/main/modern-errors/modern-errors.svg" width="600"/>
</picture>

[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/modern-errors-bugs.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/modern-errors-bugs)
[![TypeScript](https://img.shields.io/badge/-typed-brightgreen?logo=typescript&colorA=gray&logoColor=0096ff)](/types/main.d.ts)
[![Node](https://img.shields.io/node/v/modern-errors-bugs.svg?logo=node.js&logoColor=66cc33)](https://www.npmjs.com/package/modern-errors-bugs)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-brightgreen.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-brightgreen.svg?logo=medium)](https://medium.com/@ehmicky)

[`modern-errors`](https://github.com/ehmicky/modern-errors)
[plugin](https://github.com/ehmicky/modern-errors#plugins-1) to print where to
report bugs.

This appends a bug reports URL to error messages.

# Example

[Adding the plugin](https://github.com/ehmicky/modern-errors#adding-plugins) to
[`modern-errors`](https://github.com/ehmicky/modern-errors).

```js
import modernErrors from 'modern-errors'
import modernErrorsBugs from 'modern-errors-bugs'

export const AnyError = modernErrors([modernErrorsBugs])
```

[Configuring](#configuration) the bugs report URL.

```js
export const UnknownError = AnyError.subclass('UnknownError', {
  bugs: 'https://github.com/my-name/my-project/issues',
})
```

Errors now include the following message.

```
Please report this bug at: https://github.com/my-name/my-project/issues
```

# Install

```bash
npm install modern-errors-bugs
```

This package is an ES module and must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`.

# API

## modernErrorsBugs

_Type_: `Plugin`

Plugin object to
[pass to `modernErrors()`](https://github.com/ehmicky/modern-errors#adding-plugins).

## Configuration

The bug reports URL must be a `string` or
[`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL). This plugin is
especially useful with
[_unknown_ errors](https://github.com/ehmicky/modern-errors/README.md#unknown-errors).
However, it can also apply to (in priority order):

- Any error: second argument to
  [`modernErrors()`](https://github.com/ehmicky/modern-errors#modernerrorsplugins-options)

```js
export const AnyError = modernErrors(plugins, {
  bugs: 'https://github.com/my-name/my-project/issues',
})
```

- Any error of multiple classes: using
  [`ErrorClass.subclass()`](https://github.com/ehmicky/modern-errors#anyerrorsubclassname-options)

```js
export const SharedError = AnyError.subclass('SharedError', {
  bugs: 'https://github.com/my-name/my-project/issues',
})

export const UnknownError = SharedError.subclass('UnknownError')
export const SystemError = SharedError.subclass('SystemError')
```

- Any error of a specific class: second argument to
  [`AnyError.subclass()`](https://github.com/ehmicky/modern-errors#anyerrorsubclassname-options)

```js
export const UnknownError = AnyError.subclass('UnknownError', {
  bugs: 'https://github.com/my-name/my-project/issues',
})
```

- A specific error: second argument to the error's constructor

```js
throw new SystemError('...', {
  bugs: 'https://github.com/my-name/my-project/issues',
})
```

# Related projects

- [`modern-errors`](https://github.com/ehmicky/modern-errors): Handle errors
  like it's 2022 🔮
- [`modern-errors-cli`](https://github.com/ehmicky/modern-errors-cli): Handle
  errors in CLI modules
- [`modern-errors-process`](https://github.com/ehmicky/modern-errors-process):
  Handle process errors
- [`modern-errors-serialize`](https://github.com/ehmicky/modern-errors-serialize):
  Serialize/parse errors
- [`modern-errors-stack`](https://github.com/ehmicky/modern-errors-stack): Clean
  stack traces
- [`modern-errors-http`](https://github.com/ehmicky/modern-errors-http): Create
  HTTP error responses
- [`modern-errors-winston`](https://github.com/ehmicky/modern-errors-winston):
  Log errors with Winston

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<!--
<table><tr><td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/modern-errors-bugs/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/modern-errors-bugs/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>
 -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

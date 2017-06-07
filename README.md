# Fronto Localize

Basic Localization utility

``` js
// /path/to/component_name/locale.js
import localize from 'fronto-localize';

const en = {
  blah: "Blah"
};

const th = {
  blah: "บลา"
}

export default localize({ en, th });

```

Then in your component file.

``` js
// /path/to/component_name/index.js
import t from './locale'

class ComponentName extends React.PureComponent { 
  // ...
  render() {
    <div>{t('blah')}</div>
  }
}
```

By default it will look for the `localStorage.getItem('locale')` if that doesn't exist it defaults to `en`, however you can specify one like so `t('blah', 'th')`

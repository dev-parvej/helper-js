# helper-js
sum simple helper method for js
# installation 
```
npm i aj-helper-js
```

# usage

```
  import { helperName } from 'aj-helper-js'
  
  const result = helperName(...parameter);
```
#### Usages of formDataAssigner
This function will help you to make formData object to any level of data you want. Sometimes it suckes to append data menually.
```
impost { formDataAssigner } from 'aj-helper-js'

let formData = formDataAssigner({name: "Akash"});

//You can also asiign extra data if you want

forData.append('file', 'Your file');

```

# Example

```
import { addDate } from 'aj-helper-js'
addDate(new Date(), 2);

```

# Testing
Run
```
npm install
npm run build
npm run test
```

# shoutrrrd-js
A javascript/typescript library for sending messages with [shoutrrrd](https://github.com/AdriDevelopsThings/shoutrrrd).

# Install
```
npm install shoutrrrd-js
```

# How to use
Set up a shoutrrrd server and configure it.
```javascript
import { Shoutrrr } from 'shoutrrrd-js'

const shoutrrr = new Shoutrrr('http://localhost:8000')
shoutrrr.send('discord', 'This is a notification message that will be displayed on discord.')
    .then(() => console.log('Message sent'))
    .catch((error) => console.log(`Error ${error} happend while sending message.`))

// or with async

async function main () {
    await shoutrrr.send('service', 'message')
}
main()
```

### Error handling
Following errors can be happen while sending a message:
```javascript
import {
    ServiceDoesNotExists, // when the service on the service doesn't exist this exception will be thrown.
    InternalServerError 
} from 'shoutrrr-js'
```
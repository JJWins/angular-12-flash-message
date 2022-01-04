## Requirement
- NPM - node package manager

---

## Installation
- npm install jjwins-angular-12-flash-message

---

## Importing
Import _FlashMessageModule_ from _jjwins-angular-12-flash-message_ in your app.module.ts file and add _FlashMessageModule_ to the imports array

``` 
import { FlashMessageModule } from 'jjwins-angular-12-flash-message';
 


imports: [ 
... 
FlashMessageModule,
...
],
```
---

## Usage

To use the _FlashMessageModule_ in your app, only required step is to add ```<jjwins-flash-message></jjwins-flash-message>``` tag to your component html file

>app.component.html
>```<jjwins-flash-message></jjwins-flash-message>```

**To add flash message and styling use property binding**
- jjwins-angular-12-flash-message has a message property which can be attached to the html tag ```<jjwins-flash-message></jjwins-flash-message>``` 
    - add [message] property to the ```<jjwins-flash-message></jjwins-flash-message>``` html tag and the property takes any property value from your component.ts file
        - eg: 
        >app.component.ts
        ``` 
        export class AppComponent { 
        flashMessage = "Message you want to add"
        }
        ```

        >app.component.html
        >``` <jjwins-flash-message [message]="flashMessage" ><?jjwins-flash-message> ```
    
    - To add styles you only have to make alert flags true, there are alert flags corresponding to the bootstrap alert classes.
        
        - eg: the flag corresponding to bootstrap class _alert-warning_ is [alertWarning] providing true to [alertWarning] will apply _alert-warning_ bootstrap style
    
    - Available flags are [alertPrimary], [alertSecondry], [alertSuccess], [alertDanger], [alertWarning], [alertInfo], [alertLight], [alertDark]

    - Usage of flag 
    >app.component.html
    ``` <jjwins-flash-message [message]="flashMessage" [alertWarning]="true ><?jjwins-flash-message> ```

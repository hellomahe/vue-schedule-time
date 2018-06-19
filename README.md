# Vue-Schedule-Time
![](http://res.cloudinary.com/mahe/image/upload/v1529399512/2018-06-19_13.40.24_ypykzy.gif)

### Props
* config(Object)
    - Object with following keys
        - selectedDays(This key holds value of selected days)
        - selectedTime(Curently selected time will be in this object                         with keys start and end)
        - generator (This is the generated response with selected time  and days)
                    
* max(Number)
      - Maximum number of slots in a day. Default is 3

## Example
 ```
 <schedule-time :max="5" v-model="config" />
```
 config:{
      selectedDays:['Sunday'],
      selectedTime:{
        start:'',
        end:''
      },
      generator:[
        {
          label: 'Monday',
          value: '',
        },
        {
          label: 'Tuesday',
          value: '',
        },
        {
          label: 'Wednesday',
          value: '',
        },
        {
          label: 'Thursday',
          value: '',
        },
        {
          label: 'Friday',
          value: '',
        },
        {
          label: 'Saturday',
          value: '',
        },
        {
          label: 'Sunday',
          value: '',
        }
      ]
    }


## Modal response 
```
"[
{"label":"Monday","value":"07:45-18:15;22:15-23:45"},
{"label":"Tuesday","value":"07:45-18:15"},
{"label":"Wednesday","value":"07:45-18:15"},
{"label":"Thursday","value":"07:45-18:15"},
{"label":"Friday","value":"07:45-18:15"},
{"label":"Saturday","value":"Closed"},
{"label":"Sunday","value":"Closed"}
]"
```


# Todo 
- Remove element.io from dependancy
- Add events for on change and and select 

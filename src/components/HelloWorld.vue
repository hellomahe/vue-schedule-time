<template>
  <div class="time-schedlue-wrapper">
    <div class="schedule-time">
      <h1>Schedule Time Vue js component</h1>
    <schedule-time
    :max="5"
    v-model="config"
    />
  </div>
  </div>
</template>

<script>
import ScheduleTime from './Schedule'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      check:'',
      config:{
      selectedDays:[],
      selectedTime:{
        start:'',
        end:''
      },
      note:'',
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
    }
  },
  components:{
    ScheduleTime
  },
  methods:{
    validateCheck(val = 'welcome'){
      console.log(val)
      return val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.schedule-time{
    text-align: center;
    text-align: left;
    width: fit-content;
    margin: auto;
}
</style>

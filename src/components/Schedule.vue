<template>
<div class="schedule-time">
<h5>Select day(s)</h5>
<el-checkbox-group v-model="config.selectedDays" size="medium">
<el-checkbox v-for="day in days"
:label="day" :key="day"
>
</el-checkbox>
</el-checkbox-group>

<div class="select-time mt">
<el-time-select
:disabled="disableSelect"
class="start-time mr"
popper-class="popper-time"
placeholder="Start time"
v-model="config.selectedTime.start"
:picker-options="{
start: '00:00',
step: '00:15',
end: '23:45'
}">
</el-time-select>

<span class="mr">-</span>

<el-time-select
class="end-time mr"
popper-class="popper-time"
:disabled="disableSelect"
placeholder="End time"
v-model="config.selectedTime.end"
:picker-options="{
start: '00:00',
step: '00:15',
end: '23:45',
}">

</el-time-select>

<el-button class="add-time--btn mr"
border="#4E8AFF"
type="default"
plain
@click="addTime"
:disabled="disableSelect"
>
Add time
</el-button>

<span class="mr">OR</span>
<el-button type="danger"
plain
@click="markAsClosed"
:disabled="disableSelect"
>
Mark as Closed
</el-button>
</div>

<div class="generate-schedule pa mt">
<div class="day-time mb"
v-if="day.value"
v-for="(day,index) in config.generator"
:key="index"
>

<span class="day">{{day.label}}</span>

<div class="time">
{{day.value | splitTimes}}
</div>
<span @click="markAsEmpty(index)"
class="cursor">
<svg width="20" height="20" viewBox="0 0 20 20"
fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="9.5" stroke="#EB5757"/>
<line x1="0.5" y1="-0.5" x2="9.5" y2="-0.5"
transform="translate(5 11)" stroke="#EB5757"
stroke-linecap="round"/>
</svg>
</span>
</div>
</div>
</div>
</template>

<script>

import { splitTimes } from '../util';

export default{
  name: 'ScheduleTime',
  filters: {
    splitTimes,
  },
  model:{
    prop: 'config',
    event: 'change'
  },
  props:{
    max:{
      type:Number,
      default: 3
    },
    config:{
      type:Object,
      default: function (){
        return {
          selectedTime:{
            start:'',
            end:''
          },
        selectedDays:[''],
        generator: [
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
      },
    }
  },
  data() {
    return {
      days:[
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
        ],
    };
  },
  computed: {
    disableSelect() {
      /* Disable buttons if user doesn't select any day */
      if (this.config.selectedDays.length) {
        return false;
      }
      return true;
    },
  },
  methods: {
    addTime() {
      if (!this.config.selectedTime.start || !this.config.selectedTime.end) {
        return;
      }
      this.config.selectedDays.forEach((day) => {
        this.config.generator.forEach((item) => {
          if (item.label === day) {
            if (item.value) {
              /* Check if time already exist */
              if (item.value === 'Closed') {
                item.value = `${this.config.selectedTime.start}-${this.config.selectedTime.end}`;
                return;
              }
              if (item.value.split(';').length > this.max-1) {
                return;
              }
              item.value = `${item.value};${this.config.selectedTime.start}-${this.config.selectedTime.end}`;
            } else {
              item.value = `${this.config.selectedTime.start}-${this.config.selectedTime.end}`;
            }
          }
        });
      });
      this.clear();
    },
    markAsClosed() {
      this.config.selectedDays.forEach((day) => {
        this.config.generator.forEach((item) => {
          if (item.label === day) {
            item.value = 'Closed';
          }
        });
      });
      this.clear();
    },
    markAsEmpty(index) {
      this.config.generator[index].value = '';
    },
    clear() {
      this.config.selectedTime = {
        start: '',
        end: '',
      };
      this.config.selectedDays = [];
    },
  },
}
</script>

<style>
.mb{
margin-bottom: 20px;
}
.mt{
margin-top: 20px;
}
.mr-0{
  margin-right: 0;
}
.pa{
padding: 20px;
}
.pa-s{
  padding: 10px;
}
.b-0{
border:none;
}
.time-select .time-select-item {
  padding: 10px 30px;
}
.schedule-time {
  font-family: 'Ubuntu';
  text-align: left;
  color: #333333;
}
.schedule-time .mr {
  margin-right: 15px;
}
.schedule-time .note {
  margin-bottom: 10px;
}
.schedule-time .select-time .start-time, .schedule-time .select-time .end-time, .schedule-time .select-time span {
  color: #68717A;
}
.schedule-time .select-time .el-date-editor.el-input, .schedule-time .select-time .el-date-editor.el-input__inner {
  width: 150px;
}
.schedule-time .select-time .add-time--btn {
  border-color: #4E8AFF;
}
.schedule-time .select-time .add-time--btn span {
  color: #4E8AFF;
}
.schedule-time .el-checkbox-group .el-checkbox__label {
  color: #333333;
}
.schedule-time .el-checkbox-group .el-checkbox__inner {
  width: 18px;
  height: 18px;
}
.schedule-time .el-checkbox-group .el-checkbox__inner:after {
  left: 6px;
  top: 3px;
}
.schedule-time .generate-schedule {
  border: 1px solid #4F4F4F;
  border-radius: 3px;
}
.schedule-time .generate-schedule:empty {
  display: none;
}
.schedule-time .generate-schedule .day-time {
  display: flex;
  justify-content: space-between;
}
.schedule-time .generate-schedule .day-time .day {
  width: 100px;
}
.schedule-time .generate-schedule .day-time .time {
  width: 500px;
}
.schedule-time .generate-schedule .day-time:last-child {
  margin-bottom: 0;
}

.popper-time {
  font-family: 'Ubuntu';
}

</style>

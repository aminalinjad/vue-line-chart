# Vue3 Chart Line

Custom Vue.js line chart is a customizable and interactive chart component built using Vue.js.
It allows users to display data in a visually appealing way using lines to connect data points.

[![npm version](https://img.shields.io/npm/v/@alireza-ab/vue-persian-datepicker)](https://www.npmjs.com/package/@alireza-ab/vue-persian-datepicker)

## Features
- **Easy to use**
- **svg** support
- **Vue3** support
- **Animation**
- **Lightweight**

## Documentation

![vue3 line chart](https://mail.google.com/mail/u/0/?ui=2&ik=e5a8c460d1&attid=0.1&permmsgid=msg-a:r9148528583803477043&th=19002a308ff98b56&view=fimg&realattid=f_lx93jzr00&disp=thd&attbid=ANGjdJ8Z2HZHq_dXVZjsgJ8ckc0_RM1G-sD3G66iivgcxHmJxR-tTgOtKUMniDzN5kQxBMgt749PvmuCobUY0vCPoBUsvVJEFUDqkLen7tSrncT840h2bd8R3_MDDTo&ats=2524608000000&sz=w180-h120-df-p-nu)

### Install

```shell
npm i vue-line-chart
yarn i vue-line-chart
```

### Usage

```js
<script setup>
  import {chart} from "vue-line-chart"
</script>
```

```html
<chart/>
```

### props
| Prop Name    | Description                      | Default     | Type      |
|--------------|----------------------------------|-------------|-----------|
| points | List of dots that draw the chart | [...]       | [Number]  |
| bgColor | Background color                 | "#e71f1f66" | String    |
| lineColor |  color of the line            | "#e71f1f"          | String |
| strokeWidth |  stroke size of the line      | 2           | Number |

## License

Vue Line Chart is available under the [MIT](https://opensource.org/licenses/MIT) license.

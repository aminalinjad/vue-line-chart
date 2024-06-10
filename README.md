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

![vue3 line chart](https://i.postimg.cc/SnhDxCHp/Screenshot-from-2024-06-10-18-01-51.png)

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

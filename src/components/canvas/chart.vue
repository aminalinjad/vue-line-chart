<template>
<canvas ref="canvasChart" :width="props.width" :height="props.height"></canvas>
</template>

<script setup>
import {ref, onMounted, reactive} from 'vue';
// start define props
const props = defineProps({
  points: {
    default:
      [
        589705,
        590955,
        590805,
        591744,
        591611,
        590722,
        589726,
        589533,
        589575,
        590743,
        590743,
        590749,
        590750,
        591140,
        590320,
        590313,
        589578,
        591051,
        589628,
        590031,
        589817,
        588326,
        589979,
        588842,
        589307,
        589379,
        589501,
        589489,
        589501,
        589489,
        589489,
        589489,
        589489,
        589686,
        590367,
        590534,
        590983,
        590982,
        591132,
        591094,
        590396,
        590596,
        589850,
        590689,
        590855,
        590755,
        591480,
        592277
      ],
    type: Array
  },
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 50
  },
  bgColor: {
    default: "#e71f1f66",
    type: String
  },
  lineColor: {
    default: "#e71f1f",
    type: String
  },
  strokeWidth: {
    default: 2
  },
  hasBg: {
    default: true,
    type: Boolean
  }
})
// end define props

const state = reactive({
  normalizedPoints: [],
})


const canvasChart = ref(null);



const minMaxNormalize = () => {
  const min = Math.min(...props.points)
  const max = Math.max(...props.points)
  const x = max - min === 0 ? 1 : max - min
  props.points.map((item) => {
    state.normalizedPoints.push((((item - min) / (x)) * props.height).toFixed(2))
  })
}

//this function get a color in any mode(hex , rgba , rgb) and returns that color with opacity 0
function getColorWithOpacityZero(color) {
  // Create a dummy element to apply the color and get the RGBA values
  const dummyElement = document.createElement('div');
  dummyElement.style.color = color;
  document.body.appendChild(dummyElement);

  const computedColor = window.getComputedStyle(dummyElement).color;
  const rgbaValues = computedColor.match(/\d+/g);

  // Set the alpha value to 0
  const colorWithOpacityZero = `rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, 0)`;
  // Remove the dummy element
  document.body.removeChild(dummyElement);
  return colorWithOpacityZero;
}

minMaxNormalize()

onMounted(() => {

  const ctx = canvasChart.value.getContext("2d");

  const gap = props.width / (state.normalizedPoints.length - 1);

  const gradient = ctx.createLinearGradient(0, 0, 0, props.height);

// Add three color stops
  gradient.addColorStop(0, props.bgColor);
  gradient.addColorStop(1, getColorWithOpacityZero(props.bgColor));

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(0, props.height);
  for (let index = 0; index < state.normalizedPoints.length; index++) {
    ctx.lineTo(gap * index, props.height - state.normalizedPoints[index]);
  }
  ctx.lineTo(props.width, props.height);
  ctx.fill();

  ctx.lineWidth = props.strokeWidth;
  ctx.strokeStyle = props.lineColor

  ctx.stroke();


  // delete the vertical first and last line
  ctx.clearRect(0, 0, props.strokeWidth, props.height);
  ctx.clearRect(props.width - props.strokeWidth, 0, props.strokeWidth, props.height);
})




</script>

<style scoped>

</style>

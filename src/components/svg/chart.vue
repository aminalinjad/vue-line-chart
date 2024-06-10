<template>
  <svg :height="height" :width="width" xmlns="http://www.w3.org/2000/svg">
    <polyline stroke-linecap="square" :points="`${generatedPoints}`"
              :style="{fill:'none',stroke: props.lineColor,'stroke-width':props.strokeWidth}"/>

    <polygon :fill="props.bgColor" :points="`0,${height} ${generatedPoints} ${width},${height}`"/>
  </svg>
</template>

<script setup>
import {computed, reactive, ref} from 'vue'

const firstPoint = ref(null)
const lastPoint = ref(null)


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
  }
})

const state = reactive({
  normalizedPoints: [],
})

const width = 200
const height = 30


const generatedPoints = computed(() => {
  let gap = width / (state.normalizedPoints.length - 1)
  console.log( state.normalizedPoints.length , gap)
  let str = ``
  firstPoint.value = state.normalizedPoints[0]
  lastPoint.value = state.normalizedPoints[state.normalizedPoints.length - 1]
  for (let index = 0; index < state.normalizedPoints.length; index++) {
    str += ` ${index * gap},${height-state.normalizedPoints[index]}`
  }
  return str
})
const minMaxNormalize = () => {
  const min = Math.min(...props.points)
  const max = Math.max(...props.points)
  const x = max - min === 0 ? 1 : max - min
  props.points.map((item) => {
    state.normalizedPoints.push((((item - min) / (x)) * height).toFixed(2))
  })
}

minMaxNormalize()

</script>

<style scoped>

</style>

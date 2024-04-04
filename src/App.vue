
<template>
    <canvas id='canvas' class='canvas' ref='canvas'
            @mousedown='paintStart'
            @mouseup='paintEnd'
            @mouseleave='paintEnd'
            @mousemove='paint'
            width='700'
            height='700'
    />
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
onMounted(() => {
  prepare()
})
const canvas = ref()
const ctx = computed(() => canvas.value.getContext('2d'))
const isPaint = ref(false)

const prepare = () => {
  console.log(ctx.value)
}
const paintStart = (event) => {
  ctx.value.strokeStyle ='black'
  const {x, y} = point(event)
  ctx.value.beginPath()
  ctx.value.moveTo(x, y)
  isPaint.value = true
}
const paintEnd = () => {
  ctx.value.closePath()
  isPaint.value = false
}
const paint = event => {

  const {x, y} = point(event)
  if(!isPaint.value) return
  else {
    ctx.value.lineTo(x, y)
    ctx.value.stroke()
  }
}
const point = ({offsetX, offsetY}) => {
  const {left, top} = canvas.value.getBoundingClientRect()
  return ({x: offsetX , y: offsetY})
}

</script>

<style lang='scss'>
.canvas {
  //width: 700px;
  //height: 700px;
  background-color: white;
  border: 1px black solid;
}
</style>

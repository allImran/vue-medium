<script setup>
import { onMounted } from 'vue';
import Worker from '../worker/worker?worker'

const replyHi = (e) => {
  return new Promise(resolve => setTimeout(() => resolve(e), 3000))
}
const replyHello = (e) => {
  return new Promise(resolve => setTimeout(() => resolve(e), 3000))
}


const count = 0
const myWorker = new Worker()

myWorker.postMessage({
  registerMethod: true,
  methodName: 'replayHi',
  methodFunction: `${replyHi.toString()}`,
});
myWorker.postMessage({
  registerMethod: true,
  methodName: 'replyHello',
  methodFunction: `${replyHello.toString()}`,
});

myWorker.onmessage = (e) => {
  console.log(e.data)
}

const sayHi = () => {
  myWorker.postMessage({
    data: 'hi',
    methodName: 'replayHi',
  })
}
const sayHello = () => {
  myWorker.postMessage({
    data: 'hello',
    methodName: 'replyHello',
  })
}

onMounted(() => {
  //myWorker.postMessage('hi')

})
</script>

<template>
  <div>home</div>
  <div>
    <button @click="sayHi">Say Hi</button>
  </div>
  <div>
    <button @click="sayHello">Say Hello</button>
  </div>
</template>
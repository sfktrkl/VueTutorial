<template>
  <div id="players">
    <ul>
      <li v-for="player in players" :key="player.name" @click="player.show = !player.show">
        <h2>{{player.name}}</h2>
        <h3 v-show="player.show">{{player.skill}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          players: [
            { name: 'A', skill: '1', show: false },
            { name: 'B', skill: '2', show: false },
            { name: 'C', skill: '3', show: false },
            { name: 'D', skill: '4', show: false },
            { name: 'E', skill: '5', show: false },
            { name: 'F', skill: '6', show: false },
          ]
        }
      }
  }
</script>

<style scoped>
#players {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 2px solid #222;
  margin: 10px;
}
</style>

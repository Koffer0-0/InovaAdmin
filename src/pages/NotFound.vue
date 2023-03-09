<template>
  <div class="error row">
    <div>
      <xmp>
        <<span class="slash">/</span>404>
      </xmp>
    <section class="row">
      <small class="not-found col-12"><span class="slash">"</span>Not Found<span class="slash">"</span></small>
      <small class="return col-12 my-4">
        <b-icon icon="arrow-return-left" class="back-icon"></b-icon>
        <router-link to="/">
          Return Home
        </router-link>
      </small>
    </section>
    </div>
  </div>
</template>

<script>


export default {
  name: "LabBuilder",
  components: {},
}
</script>

<style scoped>
.error {
  height: 500px;
  display: flex;
  font-family: Lato, sans-serif;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.error div xmp {
  font-size: 100px;
}

small {
  text-align: right;
}

.slash {
  color: #FA9B0C;
}
.back-icon {
  color: #FA9B0C;
}
.not-found {
  font-size: 20px;
  font-weight: bold;
}
.return a {
  color: black;
}
  /** {*/
  /*  border: 1px solid black;*/
  /*}*/
</style>
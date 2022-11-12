<template>
  <div class="relative px-4 lg:px-8 banner">
    <div class="mx-auto max-w-3xl pt-10 pb-32 sm:pt-18 sm:pb-40">
      <div>
        <div class="mt-20">
          <h1
            class="
              text-4xl text-primary-400 text-shadow
              font-bold
              tracking-tight
              sm:text-center sm:text-6xl
            "
          >
            SafExchange<i class="text-5xl text-yellow-800">.</i>
          </h1>
        </div>
      </div>
    </div>
  </div>

  <div class="relative px-4 lg:px-4">
    <div class="mx-auto max-w-3xl pt-20 pb-32">
      <div>
        <h1 class="text-bold text-4xl text-center font-thin text-black">Nouveautés</h1>
        <p class="mt-6 text-md text-gray-800 sm:text-center">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
      <div class="mt-20 w-100">
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
          <div class="ml-5">
            <n-card>
              <div class="text-center">
                <h3 class="mt-2 text-2xl font-thin mt-10">Perfect monnaie</h3>
              </div>
              <template #cover class="cover">
                <img
                  src="https://img.freepik.com/premium-photo/falling-gold-coins-money-dark-background_26018-1483.jpg?w=360"
                />
              </template>
              <div class="grid grid-flow-row grid-cols-2 grid-rows-2 mt-10">
                <n-button class="col-span-6" type="primary" size="large" @click="showModal = true"
                  >Saisir l'opportunité
                </n-button>
                <n-button
                  class="col-span-6 mt-1"
                  type="default"
                  size="large"
                  @click="showModal = true"
                  >Ajouter au souhait <currency
                /></n-button>
              </div>
            </n-card>
          </div>
          <div class="ml-10">
            <n-card>
              <div class="text-center">
                <h3 class="mt-2 text-2xl font-thin mt-10">Perfect monnaie</h3>
              </div>
              <template #cover class="cover">
                <img
                  src="https://img.freepik.com/premium-photo/falling-gold-coins-money-dark-background_26018-1483.jpg?w=360"
                />
              </template>
              <div class="grid grid-flow-row-dense grid-cols-2 grid-rows-2 mt-10">
                <n-button class="col-span-6" type="primary" size="large" @click="showModal = true"
                  >Saisir l'opportunité</n-button
                >
                <n-button
                  class="col-span-6 mt-1"
                  type="default"
                  size="large"
                  @click="showModal = true"
                  >Ajouter au souhait</n-button
                >
              </div>
            </n-card>
          </div>
          <div class="ml-5">
            <n-card>
              <div class="text-center">
                <h3 class="mt-2 text-2xl font-thin mt-10">Perfect monnaie</h3>
              </div>
              <template #cover class="cover">
                <img
                  src="https://img.freepik.com/premium-photo/falling-gold-coins-money-dark-background_26018-1483.jpg?w=360"
                />
              </template>
              <div class="grid grid-flow-row grid-cols-2 grid-rows-2 mt-10">
                <n-button class="col-span-2" type="primary" size="large" @click="showModal = true"
                  >Saisir l'opportunité</n-button
                >
                <n-button
                  class="col-span-2 mt-1"
                  type="default"
                  size="large"
                  @click="showModal = true"
                  >Ajouter au souhait</n-button
                >
              </div>
            </n-card>
          </div>
        </div>
        ksksk
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  background-image: url('https://img.freepik.com/premium-vector/bitcoin-coins-flying-white-background-gold-coin-money-isolated_36059-268.jpg?w=2000');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.n-card {
  height: auto;
  border: 1px solid black !important;
  border-radius: 10px;
  width: 39vh;
  margin-left: 10px;
  margin : 0px 10px
}

</style>

<script>
import { defineComponent } from 'vue'
import { NCard, NButton } from 'naive-ui'
import Currency from '@vicons/carbon'
export default defineComponent({
  name: 'MarketPlace',
  components: {
    NCard,
    NButton,
    Currency,
  },
  setup() {
    return {}
  },
})
</script>
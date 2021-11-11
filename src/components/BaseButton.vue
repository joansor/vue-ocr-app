<script>
export default {
  name: 'BaseButton',
  props: ['text']
}
</script>

<template>
  <!-- This v-on="$listeners" is a way
  to assign events to an element in a component.
  Without it, Vue does not know where to listen
  for the events. -->
  <slot name="btnPanier">Ajouter au panier</slot>

</template>

<style></style>
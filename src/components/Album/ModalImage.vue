<template>
	<div class="carousel-item">
		<img :src="imgUrl" class="d-block w-100" alt="..."  />
	</div>
</template>

<script>
export default {
	name: "ModalImage",
	props: {
		imgUrl: String,
	},
};
</script>

<style>
</style>
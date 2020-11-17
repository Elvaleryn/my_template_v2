<template>
	<div class="carousel-item" :class="index === 0 ? 'active' : ''" >
		<img :src="imgUrl" class="d-block w-100" alt="..."  />
	</div>
</template>

<script>
export default {
	name: "ModalImage",
	props: {
        imgUrl: String,
        index: Number
	},
};
</script>
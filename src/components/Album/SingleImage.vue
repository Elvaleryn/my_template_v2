<template>
	<a :href="src" target="_blank" rel="noopener noreferrer">
		<img
			:src="src"
			class="m-3 album-image"
			alt=""
		/>
	</a>
</template>

<script>
export default {
	name: "SingleImage",
	props: {
		src: String,
	},
};
</script>
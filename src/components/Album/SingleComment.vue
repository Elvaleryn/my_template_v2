<template>
	<div class="comment pb-3">
		<p>
			{{ name }} <span class="text-muted">{{ email }}</span>
		</p>
		<p>{{ body }}</p>
	</div>
</template>

<script>
export default {
    name: "SingleComment",
    props: {
        name: String,
        email: String,
        body: String
    }
};
</script>

<style>
</style>
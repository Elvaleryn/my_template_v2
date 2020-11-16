<template>
	<nav class="navbar navbar-expand-lg align-items-center">
		<a class="navbar-brand" href="https://pngimage.net/dummy-logo-png-1/">
			<img src="../assets/logo.png" alt="" />
		</a>
		<div class="my-2 my-lg-0 ml-auto">
			<span class="welcome-text">John Doe</span>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Header",
	props: {
		msg: String,
	},
};
</script>


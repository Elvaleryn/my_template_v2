<template>
	<div id="app">
		<Header />
		<div class="container album mt-5">
			<div class="row">
				<SingleAlbum
					v-for="album in albums"
					:key="album.id"
					:title="album.title"
					:id="album.id"
				/>
			</div>
		</div>
		<scroll-loader :loader-method="getAlbums" :loader-disable="disable">
		</scroll-loader>
		<Footer />
	</div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SingleAlbum from "./components/Album/SingleAlbum";

export default {
	name: "App",
	components: {
		Header,
		Footer,
		SingleAlbum,
	},
	data() {
		return {
			albums: [],
			page: 1,
			perPage: 12,
			disable: false,
		};
	},
	watch: {
		albums: function () {},
	},
	methods: {
		/*       getImagesInfo() {
        axios.get('https://api.example.com/', {
            params: {
              page: this.page++,
              per_page: this.pageSize,
            }
          })
          .then(res => {
            this.images.concat(res.data)
            
            // Stop scroll-loader
            res.data.length < this.pageSize && (this.loadMore = false)
          })
          .catch(error => {
            console.log(error);
          })
      } */
		getAlbums() {
			axios
				.get("https://jsonplaceholder.typicode.com/albums", {
					params: {
						_page: this.page++,
						_limit: this.perPage,
					},
				})
				.then((res) => {
					this.albums = [...this.albums, ...res.data];
					this.disable =
						res.data.length < this.pageSize ||
						res.data.length === 0;
				});
		},
	},
	mounted() {
		this.getAlbums();
	},
};
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

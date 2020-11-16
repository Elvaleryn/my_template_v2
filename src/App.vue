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
		<scroll-loader
			:loader-method="getAlbums"
			:loader-enable="loadMore">
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
			starts: 0,
			ends: 10,
			finishLine: 100,
			loadMore: true,
		};
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
						_start: 0,
						_limit:
							this.ends !== 100
								? (this.ends = this.ends + 10)
								: (this.ends = 100),
					},
				})
				.then((res) => {
					this.albums = res.data;
					if (res.data.length === this.finishLine) {
						this.loadMore = false;
					}
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

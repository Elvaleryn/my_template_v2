<template>
	<div class="col-md-3 col-sm-12 mt-3 d-flex">
		<div
			class="card mb-3 flex-fill"
			data-toggle="modal"
			data-target=".bd-example-modal-lg"
		>
			<img class="card-img-top" :src="mainPhoto" alt="Card image cap" />
			<div class="card-body">
				<p class="card-text">
					{{ title }}
				</p>
			</div>
			<div class="card-footer text-muted bg-white">
				<p class="card-text">
					<small class="text-muted">
						142 comments
						<svg class="icon">
							<use
								xlink:href="../../assets/sprite.svg#icon-chat-bubble-dots"
							/>
						</svg>
					</small>
				</p>
			</div>
		</div>
		<AlbumModal :photos="photos" :id="id" :mainPhoto="mainPhoto" />
	</div>
</template>

<script>
import axios from "axios";
import AlbumModal from "./AlbumModal";
export default {
	name: "SingleAlbum",
	props: {
		title: String,
		id: Number,
	},
	components: {
		AlbumModal,
	},
	data() {
		return {
			photos: [],
			mainPhoto: "",
		};
	},
	methods: {
		/*  axios.get('https://api.example.com/', {
            params: {
              page: this.page++,
              per_page: this.pageSize,
            }
          })
          .then(res => {
            this.images.concat(res.data)
            
            // Stop scroll-loader
            res.data.length <script this.pageSize && (this.loadMore = false)
          })
          .catch(error => {
            console.log(error);
          }) */
		getPhotos() {
			axios
				.get("https://jsonplaceholder.typicode.com/photos", {
					params: {
						_limit: 5,
					},
				})
				.then((res) => {
					this.photos = res.data.filter(
						(photo) => photo.albumId === this.id
					);
					this.mainPhoto = res.data[0].thumbnailUrl;
				});
		},
	},
	mounted() {
		this.getPhotos();
	},
};
</script>

<style>
</style>
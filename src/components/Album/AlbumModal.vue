<template>
	<div
		:class="`modal fade bd-example-modal-lg`"
		tabindex="-1"
		:id="id"
		role="dialog"
	>
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div
					id="carouselExampleFade"
					class="carousel slide carousel-fade"
                    data-ride="carousel"
				>
					<div class="carousel-inner">
						<!-- 	<div class="carousel-item active">
							<img
								:src="firstPhoto"
								class="d-block w-100"
								alt="..."
							/>
						</div> -->
						<div
							class="carousel-item"
							v-for="(photo, idx) in photos"
							:class="{ active: idx == 0 }"
                            :key="photo.id"
						>
							<img :src="photo.url" alt="" class="d-block w-100"/>
						</div>
				<!-- 		<ModalImage
							v-for="(photo, index) in photos"
							:imgUrl="photo.url"
							:key="photo.id"
							:index="index"
						/> -->
					</div>
					<a
						class="carousel-control-prev"
						href="#carouselExampleFade"
						role="button"
						data-slide="prev"
					>
						<span
							class="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="carousel-control-next"
						href="#carouselExampleFade"
						role="button"
						data-slide="next"
					>
						<span
							class="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
				<div class="modal-body">
					<SingleComment
						v-for="comment in comments"
						:key="comment.id"
						:name="comment.name"
						:body="comment.body"
						:email="comment.email"
					/>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-dismiss="modal"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//import ModalImage from "./ModalImage";
import SingleComment from "./SingleComment";

export default {
	name: "AlbumModal",
	props: {
		comments: Array,
		photos: Array,
		id: Number,
		firstPhoto: String,
	},
	components: {

		SingleComment,
	},

	/* 	data() {
		return {
			photos: [],
			comments: [],
		};
	},
	methods: {
		getAllComments() {
			axios
				.get(
					`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`
				)
				.then((res) => {
					this.comments = res.data;
				});
		},
		getAllPhotos() {
			axios
				.get(
					`https://jsonplaceholder.typicode.com/photos?albumId=${this.id}`
				)
				.then((res) => {
					this.photos = res.data;
				});
		},
	},
	mounted() {
        this.getAllPhotos();
        this.getAllComments();
	}, */
};
</script>
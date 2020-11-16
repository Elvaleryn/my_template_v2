<template>
	<div
		class="modal fade bd-example-modal-lg"
		tabindex="-1"
		role="dialog"
		aria-labelledby="myLargeModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div
					id="carouselExampleFade"
					class="carousel slide carousel-fade"
					data-ride="carousel"
				>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								:src="mainPhoto"
								class="d-block w-100"
								alt="..."
							/>
						</div>
						<ModalImage
							v-for="photo in photos"
							:imgUrl="photo.url"
							:key="photo.id"
						/>
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
import ModalImage from "./ModalImage";
import SingleComment from "./SingleComment";
import axios from "axios";
export default {
	name: "AlbumModal",
	props: {
		photos: Array,
        id: Number,
        mainPhoto: String
	},
	components: {
		ModalImage,
		SingleComment,
	},
	data() {
		return {
			comments: [],
		};
	},
	methods: {
		getComments() {
			console.log("getting comments");
			axios
				.get("https://jsonplaceholder.typicode.com/comments", {
					params: {
						_limit: 5,
					},
				})
				.then((res) => {
					this.comments = res.data.filter(
						(comment) => comment.postId === this.id
					);
				});
		},
	},
	mounted() {
		this.getComments();
	},
};
</script>
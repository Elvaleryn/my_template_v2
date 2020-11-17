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
					:id="`carousel${id}`"
					class="carousel slide carousel-fade"
					:class="`carousel${id}`"
				>
					<div class="carousel-inner">
						<div
							class="carousel-item"
							v-for="(photo, idx) in photos"
							:class="{ active: idx == 0 }"
							:key="photo.id"
						>
							<img
								:src="photo.url"
								alt=""
								class="d-block w-100"
							/>
						</div>
					</div>

					<a
						class="carousel-control-prev"
						:href="`#carousel${id}`"
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
						:href="`#carousel${id}`"
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
				<div
					class="modal-body px-0 d-flex flex-wrap align-items-center justify-content-center"
					v-if="imagesAreVisible"
				>
					<SingleImage
						v-for="photo in photos"
						:key="photo.id"
						:src="photo.thumbnailUrl"
					/>
				</div>
				<div class="modal-body px-0" v-else>
					<SingleComment
						v-for="comment in comments"
						:key="comment.id"
						:name="comment.name"
						:body="comment.body"
						:email="comment.email"
					/>
				</div>
				<div class="modal-footer d-flex justify-content-between">
					<button
						class="btn btn-primary"
						@click="imagesAreVisible = !imagesAreVisible"
					>
						<span v-if="!imagesAreVisible">See all photos</span
						><span v-else>See all comments</span>
					</button>
					<button
						type="button"
						class="btn btn-secondary px-5"
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
import SingleImage from "./SingleImage";

export default {
	name: "AlbumModal",
	props: {
		comments: Array,
		photos: Array,
		id: Number,
	},
	components: {
		SingleComment,
		SingleImage,
	},
	data() {
		return {
			imagesAreVisible: false,
		};
	},
};
</script>
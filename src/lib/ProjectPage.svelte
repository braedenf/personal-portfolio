<script>
	export let projectLink = '/';
	export let linkText = 'Visit Website';
	export let headerImageUrl = '';
</script>

<section class="text-white font-body">
	<div class="container px-5 py-24 mx-auto flex flex-col">
		<div class="lg:w-5/6 mx-auto">
			<div class="rounded-lg h-auto overflow-hidden">
				<img
					alt="screenshot of maletino movement website"
					class="mx-auto shadow-xl sm:w-[80%]"
					src={headerImageUrl}
				/>
			</div>

			<div class="flex flex-col sm:flex-row mt-10">
				<div
					class="sm:w-20 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 pr-6 text-left"
				/>
				<div>
					<div>
						<a class="inline-flex items-center text-lg group my-6" href="/#projects"
							><svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-7 h-7 rotate-180 group-hover:-translate-x-2 transition"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg> Back</a
						>
					</div>
					<slot />
					<a
						class="group text-secondary inline-flex items-center pt-12"
						href={projectLink}
						target="_blank"
						rel="noopener noreferrer"
						>{linkText}
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-1 group-hover:translate-x-2 transition duration-300"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

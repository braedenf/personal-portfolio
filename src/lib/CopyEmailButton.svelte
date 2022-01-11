<script>
	import { browser } from '$app/env';

	let emailCopyText = 'copy';

	function copyEmail() {
		emailCopyText = 'copied';
		if (browser) {
			navigator.clipboard.writeText(email);
		}
	}

	export let email = '';
</script>

<div
	class={$$props.class + ' ' + 'contact group w-[80%] max-w-lg'}
	on:pointerleave={() => (emailCopyText = 'copy')}
	on:click={copyEmail}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-4 w-4 sm:h-6 sm:w-6 ml-4"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
		/>
	</svg>
	<div class="group-hover:opacity-80 transition text-sm sm:text-base">
		{email}
	</div>
	<div
		class="group-hover:flex absolute bottom-2 right-2 sm:bottom-[35%] sm:right-1 gap-2 pr-2 hidden duration-500 transition text-xs sm:text-base"
	>
		{emailCopyText}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4 sm:h-6 sm:w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
			/>
		</svg>
	</div>
</div>

<style lang="postcss">
	.contact {
		@apply border-background-light border-2 text-white font-bold flex gap-4;
		@apply relative items-center overflow-hidden cursor-pointer py-8;
	}

	.contact:before {
		content: '';
		@apply bg-primary absolute top-0 left-0 w-full h-full;
		@apply transform skew-y-12 rotate-12 translate-y-64;
		@apply transition duration-500;
		z-index: -10;
	}

	.contact:hover:before {
		@apply skew-y-0 rotate-0 translate-y-0;
	}
</style>

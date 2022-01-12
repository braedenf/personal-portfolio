<script>
	import ProjectPage from '$lib/ProjectPage.svelte';
</script>

<svelte:head>
	<title>Braeden Developer Portfolio - Maletino Movement</title>
</svelte:head>

<ProjectPage headerImageUrl="/MMBannerDesktop-01.png" projectLink="https://www.maletinomovement.nz">
	<h1
		class="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl lg:mt-8 font-bold text-background-secondary mb-6 lg:mb-12"
	>
		Creating a digital presence for Maletino Movement
	</h1>
	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		Towards the end of 2021, I collaborated with fitness startup Maletino Movement to create a
		personalised website and booking system.
	</p>
	<h2 class="text-primary font-bold text-2xl lg:text-3xl py-4 sm:py-8">The Website</h2>
	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		I designed the website in collaboration with the company founder Yolanda Maletino. We went
		through the process of creating the brand and vision for the company, then I brought the ideas
		and the key messaging to the website.
	</p>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
		<img class="col-span-2" src="/MM/milanote.png" alt="screenshot of milanote application" />
		<div>
			<p class="leading-relaxed text-lg mb-4 lg:mb-8">
				To establish the necessary branding components such as the logo, colours and key messages,
				we used the project planning tool called <a
					target="_blank"
					rel="noopener noreferrer"
					class="text-background-secondary hover:text-background-secondary-active"
					href="https://www.milanote.com">Milanote</a
				> to rapidly develop ideas and mockup website layouts.
			</p>
		</div>
	</div>
	<h2 class="text-primary font-bold text-2xl lg:text-3xl py-4 sm:py-8 mt-6">The Tech Stack</h2>

	<p class="leading-relaxed text-lg mb-4 lg:mb-8">
		With the front-end web framework Sveltekit I developed each feature on the website iteratively
		using CI. I deployed the site using the version control system called Git. I then used Vercel to
		build the website whenever a change was made on the main branch of the project.
		<br />
		<br />
		To style the website I used the increasingly popular css utility framework
		<a
			target="_blank"
			rel="noopener noreferrer"
			class="text-background-secondary hover:text-background-secondary-active"
			href="https://www.tailwindcss.com">TailwindCSS</a
		>. I was able to change styles very quickly and efficiently using Tailwind's utility classes,
		furthermore, I found it was easier to keep the layout, typography and colours clean and
		consistent using the TailwindCSS Design system.
	</p>
	<img
		class="w-full py-6"
		src="/MM/tech-stack.png"
		alt="logos for Svelte, Tailwind and Bookwhen lined up"
	/>
</ProjectPage>

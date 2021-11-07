<script>
  import Nav from '$lib/Nav.svelte';
</script>

<header>
  <section id="header">
    <div class="flex flex-col gap-2 items-center text-center mt-4">
      <h1 class="font-display text-4xl text-white">Braeden Foster</h1>
      <h2 class="font-display text-accent">Fullstack Web Developer <br /> Creative Technologist</h2>
    </div>
  </section>
  <div class="absolute top-0 left-0 w-full overflow-hidden z-[-10]">
    <svg class="relative block w-full h-[10em]" viewBox="0 0 1440 417" fill="none" preserveAspectRatio="none">
      <path d="M582 393.5C225 393.5 0 320 0 320V0H1440V417C1228 284.5 939 393.5 582 393.5Z" fill="#4C546F"/>
    </svg>
  </div>
  <Nav />
</header>
<main class="mt-28 mx-6">
  <section id="hero">
    <div class="flex flex-col items-center gap-8">
      <h3 class="font-display text-white text-3xl text-center">Welcome to my portfolio.</h3>
      <img class="inline object-cover w-4/6 max-w-xs rounded-full shadow-lg" src="portfolio_picture.png" alt="Candid portfolio"/>
      <p class="font-body text-white mx-6">I’m a frontend developer and creative technologist. I experiment and play with web technologies to create rich user experiences.</p>
    </div>
  </section>
</main>

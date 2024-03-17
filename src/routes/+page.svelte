<script>
	import About from '$lib/components/content/About.svelte';
	import WorkExperience from '$lib/components/content/WorkExperience.svelte';
	import Education from '$lib/components/content/Education.svelte';
	import Skills from '$lib/components/content/Skills.svelte';
</script>

<!-- ======= Mobile nav toggle button ======= -->
<i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

<!-- ======= Header ======= -->

<!-- End Header -->

<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
	<div class="hero-container">
		<h1>Hoàng Luân</h1>
		<p>
			I'm <span class="fw-bold">Backend Developer</span>
			<br />
			Technical Architect
			<br />
			Photographer
		</p>
	</div>
</section>
<!-- End Hero -->

<main id="main">
	<About />

	<WorkExperience />
	<Education />
	<Skills />
</main>
<!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer">
	<div class="container">
		<div class="copyright">
			&copy; Copyright <strong><span>iPortfolio</span></strong>
		</div>
		<div class="credits">
			<!-- All the links in the footer should remain intact. -->
			<!-- You can delete the links only if you purchased the pro version. -->
			<!-- Licensing information: https://bootstrapmade.com/license/ -->
			<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ -->
			Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
		</div>
	</div>
</footer>
<!-- End  Footer -->

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

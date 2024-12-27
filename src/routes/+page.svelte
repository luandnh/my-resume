<script>
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Certificates from '$lib/components/Certificates.svelte';
	import Education from '$lib/components/Education.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import ToggleMode from '$lib/components/ToggleMode.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		try {
			const jq = window.$;
			function activeStickyKit() {
				jq('.sticky-column').stick_in_parent({
					parent: '.sticky-parent'
				});

				// bootstrap col position
				jq('.sticky-column')
					.on('sticky_kit:bottom', function (e) {
						jq(this).parent().css('position', 'static');
					})
					.on('sticky_kit:unbottom', function (e) {
						jq(this).parent().css('position', 'relative');
					});
			}
			activeStickyKit();
		} catch (error) {
			console.log('onMount ~ error:', error);
		}
	});
</script>

<main class="main">
	<div class="container gutter-top gutter-bottom">
		<div class="row sticky-parent">
			<!-- Sidebar -->
			<aside class="col-12 col-md-12 col-xl-3">
				<Sidebar />
			</aside>
			<!-- Content -->
			<div class="col-12 col-md-12 col-xl-9">
				<div class="box-outer">
					<div class="nav-container">
						<ToggleMode />
					</div>
					<!-- About -->
					<div class="pb-0 pb-sm-2">
						<h1 class="title title--h1 title__separate">About Me</h1>
						<AboutMe />
					</div>
					<!-- Education -->
					<h2 class="title title--h2">
						<span class="box icon-box">
							<i class="font-icon feathericon-book-open"></i>
						</span>
						Education
					</h2>
					<Education />

					<!-- Experience -->
					<h2 class="title title--h2">
						<span class="box icon-box">
							<i class="font-icon feathericon-briefcase"></i>
						</span>
						Experience
					</h2>
					<WorkExperience />

					<h2 class="title title--h2 mt-3">
						<span class="box icon-box">
							<i class="font-icon feathericon-file"></i>
						</span>
						Certificates
					</h2>
					<Certificates />

					<h2 class="title title--h2 mt-3">
						<span class="box icon-box">
							<i class="font-icon feathericon-code"></i>
						</span>
						My Skills
					</h2>
					<Skills />
				</div>
			</div>
		</div>
	</div>
</main>

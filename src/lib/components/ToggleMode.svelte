<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const jq = window.$;

		// check in localstorage
		if (localStorage.getItem('lightMode') === 'true') {
			jq('body').addClass('light-mode');
			jq('#toggle-mode i').toggleClass('feathericon-moon feathericon-sun');
		} else {
			jq('body').removeClass('light-mode');
		}

		jq('#toggle-mode').on('click', function () {
			jq('body').toggleClass('light-mode');
			jq('#toggle-mode i').toggleClass('feathericon-moon feathericon-sun');
			// save to localstorage
			localStorage.setItem('lightMode', jq('body').hasClass('light-mode'));
		});
	});
</script>

<div class="justify-content-center">
	<!-- svelte-ignore a11y_invalid_attribute -->
	<a href="javascript:void(0)" class="h4" aria-label="Toggle Mode" id="toggle-mode">
		<i class="feathericon-moon"></i>
	</a>
</div>

const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/bootstrap.min.css","css/default-skin.css","css/feather.css","css/magnific-popup.css","css/photoswipe.css","css/simplebar.min.css","css/style-custome-icons.css","css/style.css","css/swiper.min.css","fonts/default-skin.svg","fonts/emoji-angry.svg","fonts/emoji-bad.svg","fonts/emoji-crazy.svg","fonts/emoji-happy-2.svg","fonts/emoji-happy-3.svg","fonts/emoji-happy.svg","fonts/emoji-in-love.svg","fonts/emoji-laughing.svg","fonts/emoji-nerd.svg","fonts/emoji-pressure.svg","fonts/emoji-sad-2.svg","fonts/emoji-sad.svg","fonts/emoji-shocked-2.svg","fonts/emoji-shocked-3.svg","fonts/emoji-shocked.svg","fonts/emoji-sweating.svg","fonts/emoji-thinking.svg","fonts/emoji-wink.svg","fonts/feather.woff","fonts/feather.woff2","fonts/icomoon.svg","fonts/icomoon.ttf","fonts/icomoon.woff","fonts/icon-app.svg","fonts/icon-design.svg","fonts/icon-dev.svg","fonts/icon-map-pic.svg","fonts/icon-photo.svg","fonts/icon-quote.svg","images/Moonboard-1.jpg","images/Moonboard-2.jpg","images/Moonboard-3.jpg","images/Moonboard-4.jpg","images/android-chrome-192x192.png","images/android-chrome-512x512.png","images/apple-touch-icon.png","images/avatar-1.png","images/avatar-2.png","images/avatar-3.png","images/avatar-4.png","images/favicon-16x16.png","images/favicon-32x32.png","images/favicon.ico","images/favicon.png","images/image_02.jpg","images/logo-1-color.png","images/logo-2-color.png","images/logo-3-color.png","images/logo-4-color.png","images/logo-5-color.png","images/logo-6-color.png","images/my-avatar.png","images/news-1.jpg","images/news-2.jpg","images/news-3.jpg","images/news-4.jpg","images/news-5.jpg","images/news-6.jpg","images/news-add-1.jpg","images/news-add-2.jpg","images/preloader.gif","images/project-1.jpg","images/project-2.jpg","images/project-3.jpg","images/project-4.jpg","images/project-5.jpg","images/project-6.jpg","images/project-7.jpg","images/project-8.jpg","images/project-9.jpg","images/project.png","images/social.jpg","js/common.js","js/jquery-3.4.1.min.js","js/mapbox.init.js","js/plugins.min.js"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".jpg":"image/jpeg",".png":"image/png",".gif":"image/gif",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.3J_TO3xE.js","app":"_app/immutable/entry/app.Dfkx1yH5.js","imports":["_app/immutable/entry/start.3J_TO3xE.js","_app/immutable/chunks/entry.LHC7fhzG.js","_app/immutable/chunks/runtime.Bg3Wmd6t.js","_app/immutable/chunks/index-client.dfgA8XWG.js","_app/immutable/entry/app.Dfkx1yH5.js","_app/immutable/chunks/runtime.Bg3Wmd6t.js","_app/immutable/chunks/render.B5is7CRY.js","_app/immutable/chunks/disclose-version.A4e4cGjJ.js","_app/immutable/chunks/index-client.dfgA8XWG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CNNfSXTh.js')),
			__memo(() => import('./chunks/1-Xp7eWFmS.js')),
			__memo(() => import('./chunks/2-1E50nFxt.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

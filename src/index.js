/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/*
 * client wont get here unless origin is down and all
 * non-slash (/) pages are handled in _redirects so this is
 * redundant/placeholder for further development
 *
 */

import notFoundPage from '../public/index.html';
//import claimAccountPage from '../public/claimaccount.html';

export default {
	async fetch(request, env, ctx) {
		//return new Response("Not found", { status: 404 });
    return new Response(notFoundPage, {
      status: 404,
      headers: {
        'Content-Type': 'text/html'
      }
    });
    /* return new Response(claimAccountPage, {
      status: 200,
      headers: {
        'Content-Type': 'text/html'
      }
    }); */
	},
};


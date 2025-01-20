import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
	baseURL: process.env.BASE_APP_URL // the base url of your auth server
});

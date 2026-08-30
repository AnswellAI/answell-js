import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'https://app.answell.app/api/v1/openapi.json',
    output: 'src/generated',
    plugins: [
        '@hey-api/client-fetch'
    ]
});
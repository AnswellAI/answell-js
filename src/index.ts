import { client } from './generated/client.gen';

export * from './generated';

export class AnswellClient {
    constructor(apiKey: string) {
        if (!apiKey) {
            throw new Error("API key is required to initialize AnswellClient.");
        }

        client.setConfig({
            baseUrl: 'https://app.answell.app/api/v1',
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
    }
}
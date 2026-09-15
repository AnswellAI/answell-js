import { createClient, createConfig, type Client } from './generated/client/index';
import {
    listTickets, createTicket, deleteTicket, getTicket, updateTicket,
    listMessages, createMessage,
    listContacts, createContact, getContact, updateContact,
    listKbArticles, createKbArticle, deleteKbArticle, getKbArticle, updateKbArticle
} from './generated/sdk.gen';
import type {
    ListTicketsData, CreateTicketData, DeleteTicketData, GetTicketData, UpdateTicketData,
    ListMessagesData, CreateMessageData,
    ListContactsData, CreateContactData, GetContactData, UpdateContactData,
    ListKbArticlesData, CreateKbArticleData, DeleteKbArticleData, GetKbArticleData, UpdateKbArticleData
} from './generated/types.gen';

export * from './generated';

export class AnswellClient {
    private client: Client;
    private organizationId: string;

    constructor(apiKey: string, organizationId: string) {
        if (!apiKey) {
            throw new Error("API key is required to initialize AnswellClient.");
        }
        if (!organizationId) {
            throw new Error("organizationId is required to initialize AnswellClient.");
        }

        this.organizationId = organizationId;
        this.client = createClient(createConfig({
            baseUrl: 'https://app.answell.app/api/v1',
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }));
    }

    tickets = {
        list: (options?: Omit<ListTicketsData, 'path' | 'client'>) => listTickets({ ...options, client: this.client, path: { orgId: this.organizationId } }),
        create: (options: Omit<CreateTicketData, 'path' | 'client'>) => createTicket({ ...options, client: this.client, path: { orgId: this.organizationId } }),
        delete: (options: Omit<DeleteTicketData, 'path' | 'client'> & { path: Omit<DeleteTicketData['path'], 'orgId'> }) => deleteTicket({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
        get: (options: Omit<GetTicketData, 'path' | 'client'> & { path: Omit<GetTicketData['path'], 'orgId'> }) => getTicket({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
        update: (options: Omit<UpdateTicketData, 'path' | 'client'> & { path: Omit<UpdateTicketData['path'], 'orgId'> }) => updateTicket({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
    };

    messages = {
        list: (options: Omit<ListMessagesData, 'path' | 'client'> & { path: Omit<ListMessagesData['path'], 'orgId'> }) => listMessages({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
        create: (options: Omit<CreateMessageData, 'path' | 'client'> & { path: Omit<CreateMessageData['path'], 'orgId'> }) => createMessage({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
    };

    contacts = {
        list: (options?: Omit<ListContactsData, 'path' | 'client'>) => listContacts({ ...options, client: this.client, path: { orgId: this.organizationId } }),
        create: (options: Omit<CreateContactData, 'path' | 'client'>) => createContact({ ...options, client: this.client, path: { orgId: this.organizationId } }),
        get: (options: Omit<GetContactData, 'path' | 'client'> & { path: Omit<GetContactData['path'], 'orgId'> }) => getContact({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
        update: (options: Omit<UpdateContactData, 'path' | 'client'> & { path: Omit<UpdateContactData['path'], 'orgId'> }) => updateContact({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
    };

    kb = {
        listArticles: (options?: Omit<ListKbArticlesData, 'path' | 'client'>) => listKbArticles({ ...options, client: this.client, path: { orgId: this.organizationId } }),
        createArticle: (options: Omit<CreateKbArticleData, 'path' | 'client'>) => createKbArticle({ ...options, client: this.client, path: { orgId: this.organizationId } }),
        deleteArticle: (options: Omit<DeleteKbArticleData, 'path' | 'client'> & { path: Omit<DeleteKbArticleData['path'], 'orgId'> }) => deleteKbArticle({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
        getArticle: (options: Omit<GetKbArticleData, 'path' | 'client'> & { path: Omit<GetKbArticleData['path'], 'orgId'> }) => getKbArticle({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
        updateArticle: (options: Omit<UpdateKbArticleData, 'path' | 'client'> & { path: Omit<UpdateKbArticleData['path'], 'orgId'> }) => updateKbArticle({ ...options, client: this.client, path: { orgId: this.organizationId, ...options.path } }),
    };
}

import {
	NodeConnectionTypes,
	type IExecuteFunctions,
	type IDataObject,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

export class MattermostWebhookMessage implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Mattermost Webhook Message',
		name: 'mattermostWebhookMessage',
		icon: { light: 'file:mattermostWebhookMessage.svg', dark: 'file:mattermostWebhookMessage.dark.svg' },
		group: ['output'],
		version: 1,
		description: 'Post messages to Mattermost via incoming webhook',
		defaults: {
			name: 'Mattermost Webhook Message',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [],
		properties: [
			{
				displayName: 'Incoming Webhook URL',
				name: 'webhookUrl',
				type: 'string',
				default: '',
				required: true,
				description: 'Mattermost incoming webhook URL',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				typeOptions: {
					rows: 4,
				},
				description: 'Message body',
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				description: 'Optional override for the display username',
			},
			{
				displayName: 'Icon Emoji',
				name: 'icon_emoji',
				type: 'string',
				default: '',
				description: 'Optional emoji icon, for example :robot_face:',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;
			const text = this.getNodeParameter('text', i) as string;
			const username = this.getNodeParameter('username', i) as string;
			const iconEmoji = this.getNodeParameter('icon_emoji', i) as string;

			const body: IDataObject = { text };

			if (username !== '') {
				body.username = username;
			}

			if (iconEmoji !== '') {
				body.icon_emoji = iconEmoji;
			}

			const response = await this.helpers.httpRequest({
				method: 'POST',
				url: webhookUrl,
				body,
				headers: {
					'Content-Type': 'application/json',
				},
				json: true,
			});

			returnData.push({
				json: {
					response,
				},
			});
		}

		return [returnData];
	}
}

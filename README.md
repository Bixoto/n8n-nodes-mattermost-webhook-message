# n8n-nodes-mattermost-webhook-message

This is an n8n community node. It lets you post messages on Mattermost using an incoming webhook.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

* [Installation](#installation)
* [Operations](#operations)
* [Compatibility](#compatibility)
* [Usage](#usage)
* [FAQ](#faq)
* [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node only supports posting a message in Mattermost.

## Compatibility

The node was only tested on n8n 1.123.18. However, its implementation is very simple so it should work with almost any
version of n8n.

## Usage

1. In the Mattermost menu, click on "Integrations"
2. Click on "Incoming Webhooks"
3. Click on "Add Incoming Webhook"
4. Give it a title and a description; fill the rest as you want
5. Once it’s created, you get an incoming webhook URL to copy in your node

Configure your node with:

- Incoming Webhook URL (mandatory): the URL you got at the previous step
- Text (mandatory): text of the message. Can contain newlines and Markdown markup
- Username (optional): username to display on the message. Defaults on the one you gave when you created the incoming
  webhook in Mattermost.
- Icon emoji (optional): icon emoji to use for the avatar on the message. For example, `robot_face`.

## FAQ

### But there is already a Mattermost node!

[Yes](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mattermost/), but it uses the Mattermost API.
It requires an API key and doesn’t support the simple flow of posting to an incoming webhook URL.

* If you want to use an incoming webhook URL, use this node
* If you want to use the API, use the Mattermost node

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Mattermost documentation > Incoming webhooks](https://developers.mattermost.com/integrate/webhooks/incoming/)

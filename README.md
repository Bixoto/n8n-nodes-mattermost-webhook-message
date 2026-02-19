# n8n-nodes-mattermost-webhook-message

This is an n8n community node. It lets you post messages on Mattermost using an incoming webhook.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node only supports posting a message in Mattermost.

## Credentials

There are no credentials for this node.

## Compatibility

_State the minimum n8n version, as well as which versions you test against. You can also include any known version incompatibility issues._

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


## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Mattermost documentation > Incoming webhooks](https://developers.mattermost.com/integrate/webhooks/incoming/)

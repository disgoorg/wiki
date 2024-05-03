# Webhook

```go
import "github.com/disgoorg/disgo/webhook"
```

Package webhook provides a high level client interface for interacting with Discord webhooks.

## Variables

<a name="ErrInvalidWebhookURL"></a>

```go
var ErrInvalidWebhookURL = errors.New("invalid webhook URL")
```

<a name="Client"></a>
## type [Client](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_client.go#L16-L57>)

Client is a high level interface for interacting with Discord's Webhooks API.

```go
type Client interface {
    // ID returns the configured Webhook id
    ID() snowflake.ID
    // Token returns the configured Webhook token
    Token() string
    // URL returns the full Webhook URL
    URL() string
    // Close closes all connections the Webhook Client has open
    Close(ctx context.Context)
    // Rest returns the underlying rest.Webhooks
    Rest() rest.Webhooks

    // GetWebhook fetches the current Webhook from discord
    GetWebhook(opts ...rest.RequestOpt) (*discord.IncomingWebhook, error)
    // UpdateWebhook updates the current Webhook
    UpdateWebhook(webhookUpdate discord.WebhookUpdateWithToken, opts ...rest.RequestOpt) (*discord.IncomingWebhook, error)
    // DeleteWebhook deletes the current Webhook
    DeleteWebhook(opts ...rest.RequestOpt) error

    // CreateMessage creates a new Message from the discord.WebhookMessageCreate
    CreateMessage(messageCreate discord.WebhookMessageCreate, opts ...rest.RequestOpt) (*discord.Message, error)
    // CreateMessageInThread creates a new Message from the discord.WebhookMessageCreate in the provided thread
    CreateMessageInThread(messageCreate discord.WebhookMessageCreate, threadID snowflake.ID, opts ...rest.RequestOpt) (*discord.Message, error)
    // CreateContent creates a new Message from the provided content
    CreateContent(content string, opts ...rest.RequestOpt) (*discord.Message, error)
    // CreateEmbeds creates a new Message from the provided discord.Embed(s)
    CreateEmbeds(embeds []discord.Embed, opts ...rest.RequestOpt) (*discord.Message, error)

    // UpdateMessage updates an already sent Webhook Message with the discord.WebhookMessageUpdate
    UpdateMessage(messageID snowflake.ID, messageUpdate discord.WebhookMessageUpdate, opts ...rest.RequestOpt) (*discord.Message, error)
    // UpdateMessageInThread updates an already sent Webhook Message with the discord.WebhookMessageUpdate in the provided thread
    UpdateMessageInThread(messageID snowflake.ID, messageUpdate discord.WebhookMessageUpdate, threadID snowflake.ID, opts ...rest.RequestOpt) (*discord.Message, error)
    // UpdateContent updates an already sent Webhook Message with the content
    UpdateContent(messageID snowflake.ID, content string, opts ...rest.RequestOpt) (*discord.Message, error)
    // UpdateEmbeds updates an already sent Webhook Message with the discord.Embed(s)
    UpdateEmbeds(messageID snowflake.ID, embeds []discord.Embed, opts ...rest.RequestOpt) (*discord.Message, error)

    // DeleteMessage deletes an already sent Webhook Message
    DeleteMessage(messageID snowflake.ID, opts ...rest.RequestOpt) error
    // DeleteMessageInThread deletes an already sent Webhook Message in the provided thread
    DeleteMessageInThread(messageID snowflake.ID, threadID snowflake.ID, opts ...rest.RequestOpt) error
}
```

<a name="New"></a>
### func [New](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_client_impl.go#L37>)

```go
func New(id snowflake.ID, token string, opts ...ConfigOpt) Client
```

New creates a new Client with the given ID, token and ConfigOpt\(s\).

<a name="NewWithURL"></a>
### func [NewWithURL](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_client_impl.go#L16>)

```go
func NewWithURL(webhookURL string, opts ...ConfigOpt) (Client, error)
```

NewWithURL creates a new Client by parsing the given webhookURL for the ID and token.

<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L19-L25>)

Config is the configuration for the webhook client

```go
type Config struct {
    Logger                 *slog.Logger
    RestClient             rest.Client
    RestClientConfigOpts   []rest.ConfigOpt
    Webhooks               rest.Webhooks
    DefaultAllowedMentions *discord.AllowedMentions
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L11>)

```go
func DefaultConfig() *Config
```

DefaultConfig is the default configuration for the webhook client

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L31>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies all options to the config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L28>)

ConfigOpt is used to provide optional parameters to the webhook client

```go
type ConfigOpt func(config *Config)
```

<a name="WithDefaultAllowedMentions"></a>
### func [WithDefaultAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L72>)

```go
func WithDefaultAllowedMentions(allowedMentions discord.AllowedMentions) ConfigOpt
```

WithDefaultAllowedMentions sets the default allowed mentions for the webhook client

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L44>)

```go
func WithLogger(logger *slog.Logger) ConfigOpt
```

WithLogger sets the logger for the webhook client

<a name="WithRestClient"></a>
### func [WithRestClient](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L51>)

```go
func WithRestClient(restClient rest.Client) ConfigOpt
```

WithRestClient sets the rest client for the webhook client

<a name="WithRestClientConfigOpts"></a>
### func [WithRestClientConfigOpts](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L58>)

```go
func WithRestClientConfigOpts(opts ...rest.ConfigOpt) ConfigOpt
```

WithRestClientConfigOpts sets the rest client configuration for the webhook client

<a name="WithWebhooks"></a>
### func [WithWebhooks](<https://github.com/disgoorg/disgo/blob/master/webhook/webhook_config.go#L65>)

```go
func WithWebhooks(webhooks rest.Webhooks) ConfigOpt
```

WithWebhooks sets the webhook service for the webhook client

Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)

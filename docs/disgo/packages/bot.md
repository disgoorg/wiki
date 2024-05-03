
```go
import "github.com/disgoorg/disgo/bot"
```

## Variables

<a name="ErrNoUserIDs"></a>

```go
var ErrNoUserIDs = errors.New("no user ids to request")
```

<a name="MemberChunkingFilterAll"></a>
## func [MemberChunkingFilterAll](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L10>)

```go
func MemberChunkingFilterAll(_ snowflake.ID) bool
```

MemberChunkingFilterAll is a MemberChunkingFilter which includes all guilds.

<a name="MemberChunkingFilterDefault"></a>
## func [MemberChunkingFilterDefault](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L16>)

```go
func MemberChunkingFilterDefault(guildID snowflake.ID) bool
```

MemberChunkingFilterDefault is the default MemberChunkingFilter.

<a name="MemberChunkingFilterNone"></a>
## func [MemberChunkingFilterNone](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L13>)

```go
func MemberChunkingFilterNone(_ snowflake.ID) bool
```

MemberChunkingFilterNone is a MemberChunkingFilter which excludes all guilds.

<a name="NewEventCollector"></a>
## func [NewEventCollector](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_collector.go#L28>)

```go
func NewEventCollector[E Event](client Client, filterFunc func(e E) bool) (<-chan E, func())
```

NewEventCollector returns a channel in which the events of type T gets sent which pass the passed filter and a function which can be used to stop the event collector. The close function needs to be called to stop the event collector.

<a name="WaitForEvent"></a>
## func [WaitForEvent](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_collector.go#L9>)

```go
func WaitForEvent[E Event](client Client, ctx context.Context, filterFunc func(e E) bool, actionFunc func(e E), cancelFunc func())
```

WaitForEvent waits for an event passing the filterFunc and then calls the actionFunc. You can cancel this function with the passed context.Context and the cancelFunc gets called then.

<a name="Client"></a>
## type [Client](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/client.go#L22-L112>)

Client is a high level interface for interacting with Discord's API. It combines the functionality of the rest, gateway/sharding, httpserver and cache into one easy to use interface. Create a new client with disgo.New.

```go
type Client interface {
    // Logger returns the logger for the client.
    Logger() *slog.Logger

    // Close will clean up all disgo internals and close the discord gracefully.
    Close(ctx context.Context)

    // Token returns the configured bot token.
    Token() string

    // ApplicationID returns the application id.
    ApplicationID() snowflake.ID

    // ID returns the bot id.
    ID() snowflake.ID

    // Caches returns the cache.Caches used by the Client.
    Caches() cache.Caches

    // Rest returns the rest.Rest used by the Client.
    Rest() rest.Rest

    // AddEventListeners adds one or more EventListener(s) to the EventManager.
    AddEventListeners(listeners ...EventListener)

    // RemoveEventListeners removes one or more EventListener(s) from the EventManager
    RemoveEventListeners(listeners ...EventListener)

    // EventManager returns the EventManager used by the Client.
    EventManager() EventManager

    // VoiceManager returns the voice.Manager used by the Client.
    VoiceManager() voice.Manager

    // OpenGateway connects to the configured gateway.Gateway.
    OpenGateway(ctx context.Context) error

    // Gateway returns the gateway.Gateway used by the Client.
    Gateway() gateway.Gateway

    // HasGateway returns whether the Client has a configured gateway.Gateway.
    HasGateway() bool

    // OpenShardManager connects to the configured sharding.ShardManager.
    OpenShardManager(ctx context.Context) error

    // ShardManager returns the sharding.ShardManager used by the Client.
    ShardManager() sharding.ShardManager

    // HasShardManager returns whether the Client has a configured sharding.ShardManager.
    HasShardManager() bool

    // Shard returns the gateway.Gateway the specific guildID runs on.
    Shard(guildID snowflake.ID) (gateway.Gateway, error)

    // UpdateVoiceState sends a gateway.MessageDataVoiceStateUpdate to the specific gateway.Gateway.
    UpdateVoiceState(ctx context.Context, guildID snowflake.ID, channelID *snowflake.ID, selfMute bool, selfDeaf bool) error

    // RequestMembers sends a gateway.MessageDataRequestGuildMembers to the specific gateway.Gateway and requests the Member(s) of the specified guild.
    //  guildID  : is the snowflake of the guild to request the members of.
    //  presence : Whether to include discord.Presence data.
    //  nonce	 : The nonce to return to the discord.EventGuildMembersChunk.
    //  userIDs  : The snowflakes of the users to request the members of.
    RequestMembers(ctx context.Context, guildID snowflake.ID, presence bool, nonce string, userIDs ...snowflake.ID) error

    // RequestMembersWithQuery sends a gateway.MessageDataRequestGuildMembers to the specific gateway.Gateway and requests the Member(s) of the specified guild.
    //  guildID  : is the snowflake of the guild to request the members of.
    //  presence : Whether to include discord.Presence data.
    //  nonce    : The nonce to return to the discord.EventGuildMembersChunk.
    //  query    : The query to use for the request.
    //  limit    : The number of discord.Member(s) to return.
    RequestMembersWithQuery(ctx context.Context, guildID snowflake.ID, presence bool, nonce string, query string, limit int) error

    // SetPresence sends new presence data to the gateway.Gateway.
    SetPresence(ctx context.Context, opts ...gateway.PresenceOpt) error

    // SetPresenceForShard sends new presence data to the specific gateway.Gateway.
    SetPresenceForShard(ctx context.Context, shardId int, opts ...gateway.PresenceOpt) error

    // MemberChunkingManager returns the MemberChunkingManager used by the Client.
    MemberChunkingManager() MemberChunkingManager

    // OpenHTTPServer starts the configured HTTPServer used for interactions over webhooks.
    OpenHTTPServer() error

    // HTTPServer returns the configured HTTPServer used for interactions over webhooks.
    HTTPServer() httpserver.Server

    // HasHTTPServer returns whether the Client has a configured HTTPServer.
    HasHTTPServer() bool
}
```

<a name="BuildClient"></a>
### func [BuildClient](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L212>)

```go
func BuildClient(token string, cfg *Config, gatewayEventHandlerFunc func(client Client) gateway.EventHandlerFunc, httpServerEventHandlerFunc func(client Client) httpserver.EventHandlerFunc, os string, name string, github string, version string) (Client, error)
```

BuildClient creates a new Client instance with the given token, Config, gateway handlers, http handlers os, name, github & version.

<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L27-L55>)

Config lets you configure your Client instance.

```go
type Config struct {
    Logger *slog.Logger

    RestClient           rest.Client
    RestClientConfigOpts []rest.ConfigOpt
    Rest                 rest.Rest

    EventManager           EventManager
    EventManagerConfigOpts []EventManagerConfigOpt

    VoiceManager           voice.Manager
    VoiceManagerConfigOpts []voice.ManagerConfigOpt

    Gateway           gateway.Gateway
    GatewayConfigOpts []gateway.ConfigOpt

    ShardManager           sharding.ShardManager
    ShardManagerConfigOpts []sharding.ConfigOpt

    HTTPServer           httpserver.Server
    PublicKey            string
    HTTPServerConfigOpts []httpserver.ConfigOpt

    Caches          cache.Caches
    CacheConfigOpts []cache.ConfigOpt

    MemberChunkingManager MemberChunkingManager
    MemberChunkingFilter  MemberChunkingFilter
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L18>)

```go
func DefaultConfig(gatewayHandlers map[gateway.EventType]GatewayEventHandler, httpHandler HTTPServerEventHandler) *Config
```

DefaultConfig returns a Config with sensible defaults.

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L61>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L58>)

ConfigOpt is a type alias for a function that takes a Config and is used to configure your Client.

```go
type ConfigOpt func(config *Config)
```

<a name="WithCacheConfigOpts"></a>
### func [WithCacheConfigOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L191>)

```go
func WithCacheConfigOpts(opts ...cache.ConfigOpt) ConfigOpt
```

WithCacheConfigOpts lets you configure the default cache.Caches.

<a name="WithCaches"></a>
### func [WithCaches](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L184>)

```go
func WithCaches(caches cache.Caches) ConfigOpt
```

WithCaches lets you inject your own cache.Caches.

<a name="WithDefaultGateway"></a>
### func [WithDefaultGateway](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L134>)

```go
func WithDefaultGateway() ConfigOpt
```

WithDefaultGateway creates a gateway.Gateway with sensible defaults.

<a name="WithDefaultShardManager"></a>
### func [WithDefaultShardManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L155>)

```go
func WithDefaultShardManager() ConfigOpt
```

WithDefaultShardManager creates a sharding.ShardManager with sensible defaults.

<a name="WithEventListenerChan"></a>
### func [WithEventListenerChan](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L122>)

```go
func WithEventListenerChan[E Event](c chan<- E) ConfigOpt
```

WithEventListenerChan adds the given chan\<\- E to the default EventManager.

<a name="WithEventListenerFunc"></a>
### func [WithEventListenerFunc](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L117>)

```go
func WithEventListenerFunc[E Event](f func(e E)) ConfigOpt
```

WithEventListenerFunc adds the given func\(e E\) to the default EventManager.

<a name="WithEventListeners"></a>
### func [WithEventListeners](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L110>)

```go
func WithEventListeners(eventListeners ...EventListener) ConfigOpt
```

WithEventListeners adds the given EventListener\(s\) to the default EventManager.

<a name="WithEventManager"></a>
### func [WithEventManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L96>)

```go
func WithEventManager(eventManager EventManager) ConfigOpt
```

WithEventManager lets you inject your own EventManager.

<a name="WithEventManagerConfigOpts"></a>
### func [WithEventManagerConfigOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L103>)

```go
func WithEventManagerConfigOpts(opts ...EventManagerConfigOpt) ConfigOpt
```

WithEventManagerConfigOpts lets you configure the default EventManager.

<a name="WithGateway"></a>
### func [WithGateway](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L127>)

```go
func WithGateway(gateway gateway.Gateway) ConfigOpt
```

WithGateway lets you inject your own gateway.Gateway.

<a name="WithGatewayConfigOpts"></a>
### func [WithGatewayConfigOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L141>)

```go
func WithGatewayConfigOpts(opts ...gateway.ConfigOpt) ConfigOpt
```

WithGatewayConfigOpts lets you configure the default gateway.Gateway.

<a name="WithHTTPServer"></a>
### func [WithHTTPServer](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L169>)

```go
func WithHTTPServer(httpServer httpserver.Server) ConfigOpt
```

WithHTTPServer lets you inject your own httpserver.Server.

<a name="WithHTTPServerConfigOpts"></a>
### func [WithHTTPServerConfigOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L176>)

```go
func WithHTTPServerConfigOpts(publicKey string, opts ...httpserver.ConfigOpt) ConfigOpt
```

WithHTTPServerConfigOpts lets you configure the default httpserver.Server.

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L68>)

```go
func WithLogger(logger *slog.Logger) ConfigOpt
```

WithLogger lets you inject your own logger implementing \*slog.Logger.

<a name="WithMemberChunkingFilter"></a>
### func [WithMemberChunkingFilter](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L205>)

```go
func WithMemberChunkingFilter(memberChunkingFilter MemberChunkingFilter) ConfigOpt
```

WithMemberChunkingFilter lets you configure the default MemberChunkingFilter.

<a name="WithMemberChunkingManager"></a>
### func [WithMemberChunkingManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L198>)

```go
func WithMemberChunkingManager(memberChunkingManager MemberChunkingManager) ConfigOpt
```

WithMemberChunkingManager lets you inject your own MemberChunkingManager.

<a name="WithRest"></a>
### func [WithRest](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L89>)

```go
func WithRest(rest rest.Rest) ConfigOpt
```

WithRest lets you inject your own rest.Rest.

<a name="WithRestClient"></a>
### func [WithRestClient](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L75>)

```go
func WithRestClient(restClient rest.Client) ConfigOpt
```

WithRestClient lets you inject your own rest.Client.

<a name="WithRestClientConfigOpts"></a>
### func [WithRestClientConfigOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L82>)

```go
func WithRestClientConfigOpts(opts ...rest.ConfigOpt) ConfigOpt
```

WithRestClientConfigOpts let's you configure the default rest.Client.

<a name="WithShardManager"></a>
### func [WithShardManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L148>)

```go
func WithShardManager(shardManager sharding.ShardManager) ConfigOpt
```

WithShardManager lets you inject your own sharding.ShardManager.

<a name="WithShardManagerConfigOpts"></a>
### func [WithShardManagerConfigOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/config.go#L162>)

```go
func WithShardManagerConfigOpts(opts ...sharding.ConfigOpt) ConfigOpt
```

WithShardManagerConfigOpts lets you configure the default sharding.ShardManager.

<a name="Event"></a>
## type [Event](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L84-L87>)

Event the basic interface each event implement

```go
type Event interface {
    Client() Client
    SequenceNumber() int
}
```

<a name="EventListener"></a>
## type [EventListener](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L49-L51>)

EventListener is used to create new EventListener to listen to events

```go
type EventListener interface {
    OnEvent(event Event)
}
```

<a name="NewListenerChan"></a>
### func [NewListenerChan](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L69>)

```go
func NewListenerChan[E Event](c chan<- E) EventListener
```

NewListenerChan returns a new EventListener for the given chan\<\- Event

<a name="NewListenerFunc"></a>
### func [NewListenerFunc](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L54>)

```go
func NewListenerFunc[E Event](f func(e E)) EventListener
```

NewListenerFunc returns a new EventListener for the given func\(e E\)

<a name="EventManager"></a>
## type [EventManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L31-L46>)

EventManager lets you listen for specific events triggered by raw gateway events

```go
type EventManager interface {
    // AddEventListeners adds one or more EventListener(s) to the EventManager
    AddEventListeners(eventListeners ...EventListener)

    // RemoveEventListeners removes one or more EventListener(s) from the EventManager
    RemoveEventListeners(eventListeners ...EventListener)

    // HandleGatewayEvent calls the correct GatewayEventHandler for the payload
    HandleGatewayEvent(gatewayEventType gateway.EventType, sequenceNumber int, shardID int, event gateway.EventData)

    // HandleHTTPEvent calls the HTTPServerEventHandler for the payload
    HandleHTTPEvent(respondFunc httpserver.RespondFunc, event httpserver.EventInteractionCreate)

    // DispatchEvent dispatches a new Event to the Client's EventListener(s)
    DispatchEvent(event Event)
}
```

<a name="NewEventManager"></a>
### func [NewEventManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L15>)

```go
func NewEventManager(client Client, opts ...EventManagerConfigOpt) EventManager
```

NewEventManager returns a new EventManager with the EventManagerConfigOpt\(s\) applied.

<a name="EventManagerConfig"></a>
## type [EventManagerConfig](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L17-L24>)

EventManagerConfig can be used to configure the EventManager.

```go
type EventManagerConfig struct {
    Logger             *slog.Logger
    EventListeners     []EventListener
    AsyncEventsEnabled bool

    GatewayHandlers   map[gateway.EventType]GatewayEventHandler
    HTTPServerHandler HTTPServerEventHandler
}
```

<a name="DefaultEventManagerConfig"></a>
### func [DefaultEventManagerConfig](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L10>)

```go
func DefaultEventManagerConfig() *EventManagerConfig
```

DefaultEventManagerConfig returns a new EventManagerConfig with all default values.

<a name="EventManagerConfig.Apply"></a>
### func \(\*EventManagerConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L30>)

```go
func (c *EventManagerConfig) Apply(opts []EventManagerConfigOpt)
```

Apply applies the given EventManagerConfigOpt\(s\) to the EventManagerConfig.

<a name="EventManagerConfigOpt"></a>
## type [EventManagerConfigOpt](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L27>)

EventManagerConfigOpt is a functional option for configuring an EventManager.

```go
type EventManagerConfigOpt func(config *EventManagerConfig)
```

<a name="WithAsyncEventsEnabled"></a>
### func [WithAsyncEventsEnabled](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L61>)

```go
func WithAsyncEventsEnabled() EventManagerConfigOpt
```

WithAsyncEventsEnabled enables/disables the async events.

<a name="WithEventManagerLogger"></a>
### func [WithEventManagerLogger](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L37>)

```go
func WithEventManagerLogger(logger *slog.Logger) EventManagerConfigOpt
```

WithEventManagerLogger overrides the default logger in the EventManagerConfig.

<a name="WithGatewayHandlers"></a>
### func [WithGatewayHandlers](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L68>)

```go
func WithGatewayHandlers(handlers map[gateway.EventType]GatewayEventHandler) EventManagerConfigOpt
```

WithGatewayHandlers overrides the default GatewayEventHandler\(s\) in the EventManagerConfig.

<a name="WithHTTPServerHandler"></a>
### func [WithHTTPServerHandler](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L75>)

```go
func WithHTTPServerHandler(handler HTTPServerEventHandler) EventManagerConfigOpt
```

WithHTTPServerHandler overrides the given HTTPServerEventHandler in the EventManagerConfig.

<a name="WithListenerChan"></a>
### func [WithListenerChan](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L56>)

```go
func WithListenerChan[E Event](c chan<- E) EventManagerConfigOpt
```

WithListenerChan adds the given chan\<\- E to the EventManagerConfig.

<a name="WithListenerFunc"></a>
### func [WithListenerFunc](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L51>)

```go
func WithListenerFunc[E Event](f func(e E)) EventManagerConfigOpt
```

WithListenerFunc adds the given func\(e E\) to the EventManagerConfig.

<a name="WithListeners"></a>
### func [WithListeners](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager_config.go#L44>)

```go
func WithListeners(listeners ...EventListener) EventManagerConfigOpt
```

WithListeners adds the given EventListener\(s\) to the EventManagerConfig.

<a name="GatewayEventHandler"></a>
## type [GatewayEventHandler](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L90-L93>)

GatewayEventHandler is used to handle Gateway Event\(s\)

```go
type GatewayEventHandler interface {
    EventType() gateway.EventType
    HandleGatewayEvent(client Client, sequenceNumber int, shardID int, event gateway.EventData)
}
```

<a name="NewGatewayEventHandler"></a>
### func [NewGatewayEventHandler](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L96>)

```go
func NewGatewayEventHandler[T gateway.EventData](eventType gateway.EventType, handleFunc func(client Client, sequenceNumber int, shardID int, event T)) GatewayEventHandler
```

NewGatewayEventHandler returns a new GatewayEventHandler for the given GatewayEventType and handler func

<a name="HTTPServerEventHandler"></a>
## type [HTTPServerEventHandler](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/event_manager.go#L116-L118>)

HTTPServerEventHandler is used to handle HTTP Event\(s\)

```go
type HTTPServerEventHandler interface {
    HandleHTTPEvent(client Client, respondFunc httpserver.RespondFunc, event httpserver.EventInteractionCreate)
}
```

<a name="MemberChunkingFilter"></a>
## type [MemberChunkingFilter](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L35>)

MemberChunkingFilter is a filter that can be used to filter from which guilds to request members from.

```go
type MemberChunkingFilter func(guildID snowflake.ID) bool
```

<a name="AllMemberChunkingFilters"></a>
### func [AllMemberChunkingFilters](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L65>)

```go
func AllMemberChunkingFilters(filters ...MemberChunkingFilter) MemberChunkingFilter
```

AllMemberChunkingFilters is a shorthand for MemberChunkingFilter.And\(MemberChunkingFilter\).And\(MemberChunkingFilter\) etc.

<a name="AnyMemberChunkingFilter"></a>
### func [AnyMemberChunkingFilter](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L52>)

```go
func AnyMemberChunkingFilter(filters ...MemberChunkingFilter) MemberChunkingFilter
```

AnyMemberChunkingFilter is a shorthand for MemberChunkingFilter.Or\(MemberChunkingFilter\).Or\(MemberChunkingFilter\) etc.

<a name="MemberChunkingFilterExcludeGuildIDs"></a>
### func [MemberChunkingFilterExcludeGuildIDs](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L28>)

```go
func MemberChunkingFilterExcludeGuildIDs(guildIDs ...snowflake.ID) MemberChunkingFilter
```

MemberChunkingFilterExcludeGuildIDs returns a MemberChunkingFilter which excludes the given guildIDs.

<a name="MemberChunkingFilterIncludeGuildIDs"></a>
### func [MemberChunkingFilterIncludeGuildIDs](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L21>)

```go
func MemberChunkingFilterIncludeGuildIDs(guildIDs ...snowflake.ID) MemberChunkingFilter
```

MemberChunkingFilterIncludeGuildIDs returns a MemberChunkingFilter which includes the given guildIDs.

<a name="MemberChunkingFilter.And"></a>
### func \(MemberChunkingFilter\) [And](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L45>)

```go
func (f MemberChunkingFilter) And(filter MemberChunkingFilter) MemberChunkingFilter
```

And allows you to require both MemberChunkingFilter\(s\) to be true for the guild to be chunked

<a name="MemberChunkingFilter.Or"></a>
### func \(MemberChunkingFilter\) [Or](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_filter.go#L38>)

```go
func (f MemberChunkingFilter) Or(filter MemberChunkingFilter) MemberChunkingFilter
```

Or allows you to combine the MemberChunkingFilter with another, meaning either of them needs to be true for the guild to be chunked.

<a name="MemberChunkingManager"></a>
## type [MemberChunkingManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_manager.go#L39-L93>)

MemberChunkingManager is used to request members for guilds from the discord gateway.

```go
type MemberChunkingManager interface {
    // MemberChunkingFilter returns the configured MemberChunkingFilter used by this MemberChunkingManager.
    MemberChunkingFilter() MemberChunkingFilter

    // HandleChunk handles the discord.EventGuildMembersChunk event payloads from the discord gateway.
    HandleChunk(payload gateway.EventGuildMembersChunk)

    // RequestMembers requests members from the given guildID and userIDs.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembers(guildID snowflake.ID, userIDs ...snowflake.ID) ([]discord.Member, error)
    // RequestAllMembers requests all members from the given guildID.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestAllMembers(guildID snowflake.ID) ([]discord.Member, error)
    // RequestMembersWithQuery requests members from the given guildID and query.
    // query : string the username starts with
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersWithQuery(guildID snowflake.ID, query string, limit int) ([]discord.Member, error)
    // RequestMembersWithFilter requests members from the given guildID and userIDs. memberFilterFunc is used to filter all returned members.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersWithFilter(guildID snowflake.ID, memberFilterFunc func(member discord.Member) bool) ([]discord.Member, error)

    // RequestMembersCtx requests members from the given guildID and userIDs.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersCtx(ctx context.Context, guildID snowflake.ID, userIDs ...snowflake.ID) ([]discord.Member, error)
    // RequestAllMembersCtx requests all members from the given guildID.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestAllMembersCtx(ctx context.Context, guildID snowflake.ID) ([]discord.Member, error)
    // RequestMembersWithQueryCtx requests members from the given guildID and query.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersWithQueryCtx(ctx context.Context, guildID snowflake.ID, query string, limit int) ([]discord.Member, error)
    // RequestMembersWithFilterCtx requests members from the given guildID and userIDs. memberFilterFunc is used to filter all returned members.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersWithFilterCtx(ctx context.Context, guildID snowflake.ID, memberFilterFunc func(member discord.Member) bool) ([]discord.Member, error)

    // RequestMembersChan requests members from the given guildID and userIDs.
    // Returns a channel which will receive the members.
    // Returns a function which can be used to cancel the request and close the channel.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersChan(guildID snowflake.ID, userIDs ...snowflake.ID) (<-chan discord.Member, func(), error)
    // RequestAllMembersChan requests all members from the given guildID.
    // Returns a channel which will receive the members.
    // Returns a function which can be used to cancel the request and close the channel.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestAllMembersChan(guildID snowflake.ID) (<-chan discord.Member, func(), error)
    // RequestMembersWithQueryChan requests members from the given guildID and query.
    // Returns a channel which will receive the members.
    // Returns a function which can be used to cancel the request and close the channel.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersWithQueryChan(guildID snowflake.ID, query string, limit int) (<-chan discord.Member, func(), error)
    // RequestMembersWithFilterChan requests members from the given guildID and userIDs. memberFilterFunc is used to filter all returned members.
    // Returns a channel which will receive the members.
    // Returns a function which can be used to cancel the request and close the channel.
    // Notice: This action requires the gateway.IntentGuildMembers.
    RequestMembersWithFilterChan(guildID snowflake.ID, memberFilterFunc func(member discord.Member) bool) (<-chan discord.Member, func(), error)
}
```

<a name="NewMemberChunkingManager"></a>
### func [NewMemberChunkingManager](<https://github.com/disgoorg/disgo/blob/master/disgo/bot/member_chunking_manager.go#L21>)

```go
func NewMemberChunkingManager(client Client, logger *slog.Logger, memberChunkingFilter MemberChunkingFilter) MemberChunkingManager
```

NewMemberChunkingManager returns a new MemberChunkingManager with the given MemberChunkingFilter.

Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)

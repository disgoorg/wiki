# Gateway

```go
import "github.com/disgoorg/disgo/gateway"
```

Package gateway is used to connect and interact with the Discord Gateway.

## Constants

<a name="CommandsPerMinute"></a>CommandsPerMinute is the default number of commands per minute that the Gateway will allow.

```go
const CommandsPerMinute = 120
```

<a name="Version"></a>Version defines which discord API version disgo should use to connect to discord.

```go
const Version = 10
```

## Variables

<a name="CloseEventCodeUnknownError"></a>

```go
var (
    CloseEventCodeUnknownError = CloseEventCode{
        Code:        4000,
        Description: "Unknown error",
        Explanation: "We're not sure what went wrong. Try reconnecting?",
        Reconnect:   true,
    }

    CloseEventCodeUnknownOpcode = CloseEventCode{
        Code:        4001,
        Description: "Unknown opcode",
        Explanation: "You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!",
        Reconnect:   true,
    }

    CloseEventCodeDecodeError = CloseEventCode{
        Code:        4002,
        Description: "Decode error",
        Explanation: "You sent an invalid payload to Discord. Don't do that!",
        Reconnect:   true,
    }

    CloseEventCodeNotAuthenticated = CloseEventCode{
        Code:        4003,
        Description: "Not authenticated",
        Explanation: "You sent us a payload prior to identifying.",
        Reconnect:   true,
    }

    CloseEventCodeAuthenticationFailed = CloseEventCode{
        Code:        4004,
        Description: "Authentication failed",
        Explanation: "The account token sent with your identify payload is incorrect.",
        Reconnect:   false,
    }

    CloseEventCodeAlreadyAuthenticated = CloseEventCode{
        Code:        4005,
        Description: "Already authenticated",
        Explanation: "You sent more than one identify payload. Don't do that!",
        Reconnect:   true,
    }

    CloseEventCodeInvalidSeq = CloseEventCode{
        Code:        4007,
        Description: "Invalid seq",
        Explanation: "The sequence sent when resuming the session was invalid. Reconnect and start a new session.",
        Reconnect:   true,
    }

    CloseEventCodeRateLimited = CloseEventCode{
        Code:        4008,
        Description: "Rate limited.",
        Explanation: "You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.",
        Reconnect:   true,
    }

    CloseEventCodeSessionTimed = CloseEventCode{
        Code:        4009,
        Description: "Session timed out",
        Explanation: "Your session timed out. Reconnect and start a new one.",
        Reconnect:   true,
    }

    CloseEventCodeInvalidShard = CloseEventCode{
        Code:        4010,
        Description: "Invalid shard",
        Explanation: "You sent us an invalid shard when identifying.",
        Reconnect:   false,
    }

    CloseEventCodeShardingRequired = CloseEventCode{
        Code:        4011,
        Description: "Sharding required",
        Explanation: "The session would have handled too many guilds - you are required to shard your connection in order to connect.",
        Reconnect:   false,
    }

    CloseEventCodeInvalidAPIVersion = CloseEventCode{
        Code:        4012,
        Description: "Invalid API version",
        Explanation: "You sent an invalid version for the gateway.",
        Reconnect:   false,
    }

    CloseEventCodeInvalidIntent = CloseEventCode{
        Code:        4013,
        Description: "Invalid intent(s)",
        Explanation: "You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value.",
        Reconnect:   false,
    }

    CloseEventCodeDisallowedIntent = CloseEventCode{
        Code:        4014,
        Description: "Disallowed intent(s)",
        Explanation: "You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.",
        Reconnect:   false,
    }

    CloseEventCodeUnknown = CloseEventCode{
        Code:        0,
        Description: "Unknown",
        Explanation: "Unknown Gateway Close Event Code",
        Reconnect:   true,
    }

    CloseEventCodes = map[int]CloseEventCode{
        CloseEventCodeUnknownError.Code:         CloseEventCodeUnknownError,
        CloseEventCodeUnknownOpcode.Code:        CloseEventCodeUnknownOpcode,
        CloseEventCodeDecodeError.Code:          CloseEventCodeDecodeError,
        CloseEventCodeNotAuthenticated.Code:     CloseEventCodeNotAuthenticated,
        CloseEventCodeAuthenticationFailed.Code: CloseEventCodeAuthenticationFailed,
        CloseEventCodeAlreadyAuthenticated.Code: CloseEventCodeAlreadyAuthenticated,
        CloseEventCodeInvalidSeq.Code:           CloseEventCodeInvalidSeq,
        CloseEventCodeRateLimited.Code:          CloseEventCodeRateLimited,
        CloseEventCodeSessionTimed.Code:         CloseEventCodeSessionTimed,
        CloseEventCodeInvalidShard.Code:         CloseEventCodeInvalidShard,
        CloseEventCodeInvalidAPIVersion.Code:    CloseEventCodeInvalidAPIVersion,
        CloseEventCodeInvalidIntent.Code:        CloseEventCodeInvalidIntent,
        CloseEventCodeDisallowedIntent.Code:     CloseEventCodeDisallowedIntent,
    }
)
```

<a name="ActivityOpt"></a>
## type [ActivityOpt](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L568>)

ActivityOpt is a type alias for a function that sets optional data for an Activity

```go
type ActivityOpt func(activity discord.Activity)
```

<a name="WithActivityState"></a>
### func [WithActivityState](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L571>)

```go
func WithActivityState(state string) ActivityOpt
```

WithActivityState sets the Activity.State

<a name="AddedThreadMember"></a>
## type [AddedThreadMember](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L143-L147>)



```go
type AddedThreadMember struct {
    discord.ThreadMember
    Member   discord.Member    `json:"member"`
    Presence *discord.Presence `json:"presence"`
}
```

<a name="CloseEventCode"></a>
## type [CloseEventCode](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_opcodes.go#L22-L27>)



```go
type CloseEventCode struct {
    Code        int
    Description string
    Explanation string
    Reconnect   bool
}
```

<a name="CloseEventCodeByCode"></a>
### func [CloseEventCodeByCode](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_opcodes.go#L152>)

```go
func CloseEventCodeByCode(code int) CloseEventCode
```



<a name="CloseHandlerFunc"></a>
## type [CloseHandlerFunc](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway.go#L60>)

CloseHandlerFunc is a function that is called when the Gateway is closed.

```go
type CloseHandlerFunc func(gateway Gateway, err error)
```

<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L26-L68>)

Config lets you configure your Gateway instance.

```go
type Config struct {
    // Logger is the Logger of the Gateway. Defaults to slog.Default().
    Logger *slog.Logger
    // Dialer is the websocket.Dialer of the Gateway. Defaults to websocket.DefaultDialer.
    Dialer *websocket.Dialer
    // LargeThreshold is the threshold for the Gateway. Defaults to 50
    // See here for more information: https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure.
    LargeThreshold int
    // Intents is the Intents for the Gateway. Defaults to IntentsNone.
    Intents Intents
    // Compress is whether the Gateway should compress payloads. Defaults to true.
    Compress bool
    // URL is the URL of the Gateway. Defaults to fetch from Discord.
    URL string
    // ShardID is the shardID of the Gateway. Defaults to 0.
    ShardID int
    // ShardCount is the shardCount of the Gateway. Defaults to 1.
    ShardCount int
    // SessionID is the last sessionID of the Gateway. Defaults to nil (no resume).
    SessionID *string
    // ResumeURL is the last resumeURL of the Gateway. Defaults to nil (no resume).
    ResumeURL *string
    // LastSequenceReceived is the last sequence received by the Gateway. Defaults to nil (no resume).
    LastSequenceReceived *int
    // AutoReconnect is whether the Gateway should automatically reconnect or call the CloseHandlerFunc. Defaults to true.
    AutoReconnect bool
    // EnableRawEvents is whether the Gateway should emit EventRaw. Defaults to false.
    EnableRawEvents bool
    // EnableResumeURL is whether the Gateway should enable the resumeURL. Defaults to true.
    EnableResumeURL bool
    // RateLimiter is the RateLimiter of the Gateway. Defaults to NewRateLimiter().
    RateLimiter RateLimiter
    // RateLimiterConfigOpts is the RateLimiterConfigOpts of the Gateway. Defaults to nil.
    RateLimiterConfigOpts []RateLimiterConfigOpt
    // Presence is the presence it should send on login. Defaults to nil.
    Presence *MessageDataPresenceUpdate
    // OS is the OS it should send on login. Defaults to runtime.GOOS.
    OS  string
    // Browser is the Browser it should send on login. Defaults to "disgo".
    Browser string
    // Device is the Device it should send on login. Defaults to "disgo".
    Device string
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L10>)

```go
func DefaultConfig() *Config
```

DefaultConfig returns a Config with sensible defaults.

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L74>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L71>)

ConfigOpt is a type alias for a function that takes a Config and is used to configure your Server.

```go
type ConfigOpt func(config *Config)
```

<a name="WithAutoReconnect"></a>
### func [WithAutoReconnect](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L161>)

```go
func WithAutoReconnect(autoReconnect bool) ConfigOpt
```

WithAutoReconnect sets whether the Gateway should automatically reconnect to Discord.

<a name="WithBrowser"></a>
### func [WithBrowser](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L216>)

```go
func WithBrowser(browser string) ConfigOpt
```

WithBrowser sets the browser the bot is running on. See here for more information: https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties

<a name="WithCompress"></a>
### func [WithCompress](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L115>)

```go
func WithCompress(compress bool) ConfigOpt
```

WithCompress sets whether this Gateway supports compression. See here for more information: https://discord.com/developers/docs/topics/gateway#encoding-and-compression

<a name="WithDevice"></a>
### func [WithDevice](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L224>)

```go
func WithDevice(device string) ConfigOpt
```

WithDevice sets the device the bot is running on. See here for more information: https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties

<a name="WithDialer"></a>
### func [WithDialer](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L91>)

```go
func WithDialer(dialer *websocket.Dialer) ConfigOpt
```

WithDialer sets the websocket.Dialer for the Gateway.

<a name="WithEnableRawEvents"></a>
### func [WithEnableRawEvents](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L168>)

```go
func WithEnableRawEvents(enableRawEventEvents bool) ConfigOpt
```

WithEnableRawEvents enables/disables the EventTypeRaw.

<a name="WithEnableResumeURL"></a>
### func [WithEnableResumeURL](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L175>)

```go
func WithEnableResumeURL(enableResumeURL bool) ConfigOpt
```

WithEnableResumeURL enables/disables usage of resume URLs sent by Discord.

<a name="WithIntents"></a>
### func [WithIntents](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L107>)

```go
func WithIntents(intents ...Intents) ConfigOpt
```

WithIntents sets the Intents for the Gateway. See here for more information: https://discord.com/developers/docs/topics/gateway#gateway-intents

<a name="WithLargeThreshold"></a>
### func [WithLargeThreshold](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L99>)

```go
func WithLargeThreshold(largeThreshold int) ConfigOpt
```

WithLargeThreshold sets the threshold for the Gateway. See here for more information: https://discord.com/developers/docs/topics/gateway#identify-identify-structure

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L84>)

```go
func WithLogger(logger *slog.Logger) ConfigOpt
```

WithLogger sets the Logger for the Gateway.

<a name="WithOS"></a>
### func [WithOS](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L208>)

```go
func WithOS(os string) ConfigOpt
```

WithOS sets the operating system the bot is running on. See here for more information: https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties

<a name="WithPresenceOpts"></a>
### func [WithPresenceOpts](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L196>)

```go
func WithPresenceOpts(opts ...PresenceOpt) ConfigOpt
```

WithPresenceOpts allows to pass initial presence data the bot should display.

<a name="WithRateLimiter"></a>
### func [WithRateLimiter](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L182>)

```go
func WithRateLimiter(rateLimiter RateLimiter) ConfigOpt
```

WithRateLimiter sets the grate.RateLimiter for the Gateway.

<a name="WithRateLimiterConfigOpts"></a>
### func [WithRateLimiterConfigOpts](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L189>)

```go
func WithRateLimiterConfigOpts(opts ...RateLimiterConfigOpt) ConfigOpt
```

WithRateLimiterConfigOpts lets you configure the default RateLimiter.

<a name="WithSequence"></a>
### func [WithSequence](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L154>)

```go
func WithSequence(sequence int) ConfigOpt
```

WithSequence sets the last sequence received for the Gateway. If sessionID and lastSequence is present while connecting, the Gateway will try to resume the session.

<a name="WithSessionID"></a>
### func [WithSessionID](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L146>)

```go
func WithSessionID(sessionID string) ConfigOpt
```

WithSessionID sets the Session ID for the Gateway. If sessionID and lastSequence is present while connecting, the Gateway will try to resume the session.

<a name="WithShardCount"></a>
### func [WithShardCount](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L138>)

```go
func WithShardCount(shardCount int) ConfigOpt
```

WithShardCount sets the shard count for the Gateway. See here for more information on sharding: https://discord.com/developers/docs/topics/gateway#sharding

<a name="WithShardID"></a>
### func [WithShardID](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L130>)

```go
func WithShardID(shardID int) ConfigOpt
```

WithShardID sets the shard ID for the Gateway. See here for more information on sharding: https://discord.com/developers/docs/topics/gateway#sharding

<a name="WithURL"></a>
### func [WithURL](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_config.go#L122>)

```go
func WithURL(url string) ConfigOpt
```

WithURL sets the Gateway URL for the Gateway.

<a name="CreateFunc"></a>
## type [CreateFunc](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway.go#L57>)

CreateFunc is a type that is used to create a new Gateway\(s\).

```go
type CreateFunc func(token string, eventHandlerFunc EventHandlerFunc, closeHandlerFUnc CloseHandlerFunc, opts ...ConfigOpt) Gateway
```

<a name="EventApplicationCommandPermissionsUpdate"></a>
## type [EventApplicationCommandPermissionsUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L46-L48>)



```go
type EventApplicationCommandPermissionsUpdate struct {
    discord.ApplicationCommandPermissions
}
```

<a name="EventAutoModerationActionExecution"></a>
## type [EventAutoModerationActionExecution](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L698-L710>)



```go
type EventAutoModerationActionExecution struct {
    GuildID              snowflake.ID                      `json:"guild_id"`
    Action               discord.AutoModerationAction      `json:"action"`
    RuleID               snowflake.ID                      `json:"rule_id"`
    RuleTriggerType      discord.AutoModerationTriggerType `json:"rule_trigger_type"`
    UserID               snowflake.ID                      `json:"user_id"`
    ChannelID            *snowflake.ID                     `json:"channel_id,omitempty"`
    MessageID            *snowflake.ID                     `json:"message_id,omitempty"`
    AlertSystemMessageID snowflake.ID                      `json:"alert_system_message_id"`
    Content              string                            `json:"content"`
    MatchedKeywords      *string                           `json:"matched_keywords"`
    MatchedContent       *string                           `json:"matched_content"`
}
```

<a name="EventAutoModerationRuleCreate"></a>
## type [EventAutoModerationRuleCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L677-L679>)



```go
type EventAutoModerationRuleCreate struct {
    discord.AutoModerationRule
}
```

<a name="EventAutoModerationRuleDelete"></a>
## type [EventAutoModerationRuleDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L691-L693>)



```go
type EventAutoModerationRuleDelete struct {
    discord.AutoModerationRule
}
```

<a name="EventAutoModerationRuleUpdate"></a>
## type [EventAutoModerationRuleUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L684-L686>)



```go
type EventAutoModerationRuleUpdate struct {
    discord.AutoModerationRule
}
```

<a name="EventChannelCreate"></a>
## type [EventChannelCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L53-L55>)



```go
type EventChannelCreate struct {
    discord.GuildChannel
}
```

<a name="EventChannelCreate.UnmarshalJSON"></a>
### func \(\*EventChannelCreate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L57>)

```go
func (e *EventChannelCreate) UnmarshalJSON(data []byte) error
```



<a name="EventChannelDelete"></a>
## type [EventChannelDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L85-L87>)



```go
type EventChannelDelete struct {
    discord.GuildChannel
}
```

<a name="EventChannelDelete.UnmarshalJSON"></a>
### func \(\*EventChannelDelete\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L89>)

```go
func (e *EventChannelDelete) UnmarshalJSON(data []byte) error
```



<a name="EventChannelPinsUpdate"></a>
## type [EventChannelPinsUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L249-L253>)



```go
type EventChannelPinsUpdate struct {
    GuildID          *snowflake.ID `json:"guild_id"`
    ChannelID        snowflake.ID  `json:"channel_id"`
    LastPinTimestamp *time.Time    `json:"last_pin_timestamp"`
}
```

<a name="EventChannelUpdate"></a>
## type [EventChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L69-L71>)



```go
type EventChannelUpdate struct {
    discord.GuildChannel
}
```

<a name="EventChannelUpdate.UnmarshalJSON"></a>
### func \(\*EventChannelUpdate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L73>)

```go
func (e *EventChannelUpdate) UnmarshalJSON(data []byte) error
```



<a name="EventData"></a>
## type [EventData](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L13-L16>)



```go
type EventData interface {
    MessageData
    // contains filtered or unexported methods
}
```

<a name="UnmarshalEventData"></a>
### func [UnmarshalEventData](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L105>)

```go
func UnmarshalEventData(data []byte, eventType EventType) (EventData, error)
```



<a name="EventEntitlementCreate"></a>
## type [EventEntitlementCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L731-L733>)



```go
type EventEntitlementCreate struct {
    discord.Entitlement
}
```

<a name="EventEntitlementDelete"></a>
## type [EventEntitlementDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L745-L747>)



```go
type EventEntitlementDelete struct {
    discord.Entitlement
}
```

<a name="EventEntitlementUpdate"></a>
## type [EventEntitlementUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L738-L740>)



```go
type EventEntitlementUpdate struct {
    discord.Entitlement
}
```

<a name="EventGuildAuditLogEntryCreate"></a>
## type [EventGuildAuditLogEntryCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L181-L184>)



```go
type EventGuildAuditLogEntryCreate struct {
    discord.AuditLogEntry
    GuildID snowflake.ID `json:"guild_id"`
}
```

<a name="EventGuildBanAdd"></a>
## type [EventGuildBanAdd](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L271-L274>)



```go
type EventGuildBanAdd struct {
    GuildID snowflake.ID `json:"guild_id"`
    User    discord.User `json:"user"`
}
```

<a name="EventGuildBanRemove"></a>
## type [EventGuildBanRemove](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L279-L282>)



```go
type EventGuildBanRemove struct {
    GuildID snowflake.ID `json:"guild_id"`
    User    discord.User `json:"user"`
}
```

<a name="EventGuildCreate"></a>
## type [EventGuildCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L160-L162>)



```go
type EventGuildCreate struct {
    discord.GatewayGuild
}
```

<a name="EventGuildDelete"></a>
## type [EventGuildDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L174-L176>)



```go
type EventGuildDelete struct {
    discord.GatewayGuild
}
```

<a name="EventGuildEmojisUpdate"></a>
## type [EventGuildEmojisUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L287-L290>)



```go
type EventGuildEmojisUpdate struct {
    GuildID snowflake.ID    `json:"guild_id"`
    Emojis  []discord.Emoji `json:"emojis"`
}
```

<a name="EventGuildEmojisUpdate.UnmarshalJSON"></a>
### func \(\*EventGuildEmojisUpdate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L292>)

```go
func (e *EventGuildEmojisUpdate) UnmarshalJSON(data []byte) error
```



<a name="EventGuildIntegrationsUpdate"></a>
## type [EventGuildIntegrationsUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L316-L318>)



```go
type EventGuildIntegrationsUpdate struct {
    GuildID snowflake.ID `json:"guild_id"`
}
```

<a name="EventGuildMemberAdd"></a>
## type [EventGuildMemberAdd](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L323-L325>)



```go
type EventGuildMemberAdd struct {
    discord.Member
}
```

<a name="EventGuildMemberRemove"></a>
## type [EventGuildMemberRemove](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L337-L340>)



```go
type EventGuildMemberRemove struct {
    GuildID snowflake.ID `json:"guild_id"`
    User    discord.User `json:"user"`
}
```

<a name="EventGuildMemberUpdate"></a>
## type [EventGuildMemberUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L330-L332>)



```go
type EventGuildMemberUpdate struct {
    discord.Member
}
```

<a name="EventGuildMembersChunk"></a>
## type [EventGuildMembersChunk](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L258-L266>)



```go
type EventGuildMembersChunk struct {
    GuildID    snowflake.ID       `json:"guild_id"`
    Members    []discord.Member   `json:"members"`
    ChunkIndex int                `json:"chunk_index"`
    ChunkCount int                `json:"chunk_count"`
    NotFound   []snowflake.ID     `json:"not_found"`
    Presences  []discord.Presence `json:"presences"`
    Nonce      string             `json:"nonce"`
}
```

<a name="EventGuildRoleCreate"></a>
## type [EventGuildRoleCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L345-L348>)



```go
type EventGuildRoleCreate struct {
    GuildID snowflake.ID `json:"guild_id"`
    Role    discord.Role `json:"role"`
}
```

<a name="EventGuildRoleCreate.MarshalJSON"></a>
### func \(\*EventGuildRoleCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L361>)

```go
func (e *EventGuildRoleCreate) MarshalJSON() ([]byte, error)
```



<a name="EventGuildRoleCreate.UnmarshalJSON"></a>
### func \(\*EventGuildRoleCreate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L350>)

```go
func (e *EventGuildRoleCreate) UnmarshalJSON(data []byte) error
```



<a name="EventGuildRoleDelete"></a>
## type [EventGuildRoleDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L370-L373>)



```go
type EventGuildRoleDelete struct {
    GuildID snowflake.ID `json:"guild_id"`
    RoleID  snowflake.ID `json:"role_id"`
}
```

<a name="EventGuildRoleUpdate"></a>
## type [EventGuildRoleUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L378-L381>)



```go
type EventGuildRoleUpdate struct {
    GuildID snowflake.ID `json:"guild_id"`
    Role    discord.Role `json:"role"`
}
```

<a name="EventGuildRoleUpdate.MarshalJSON"></a>
### func \(\*EventGuildRoleUpdate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L394>)

```go
func (e *EventGuildRoleUpdate) MarshalJSON() ([]byte, error)
```



<a name="EventGuildRoleUpdate.UnmarshalJSON"></a>
### func \(\*EventGuildRoleUpdate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L383>)

```go
func (e *EventGuildRoleUpdate) UnmarshalJSON(data []byte) error
```



<a name="EventGuildScheduledEventCreate"></a>
## type [EventGuildScheduledEventCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L403-L405>)



```go
type EventGuildScheduledEventCreate struct {
    discord.GuildScheduledEvent
}
```

<a name="EventGuildScheduledEventDelete"></a>
## type [EventGuildScheduledEventDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L417-L419>)



```go
type EventGuildScheduledEventDelete struct {
    discord.GuildScheduledEvent
}
```

<a name="EventGuildScheduledEventUpdate"></a>
## type [EventGuildScheduledEventUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L410-L412>)



```go
type EventGuildScheduledEventUpdate struct {
    discord.GuildScheduledEvent
}
```

<a name="EventGuildScheduledEventUserAdd"></a>
## type [EventGuildScheduledEventUserAdd](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L424-L428>)



```go
type EventGuildScheduledEventUserAdd struct {
    GuildScheduledEventID snowflake.ID `json:"guild_scheduled_event_id"`
    UserID                snowflake.ID `json:"user_id"`
    GuildID               snowflake.ID `json:"guild_id"`
}
```

<a name="EventGuildScheduledEventUserRemove"></a>
## type [EventGuildScheduledEventUserRemove](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L433-L437>)



```go
type EventGuildScheduledEventUserRemove struct {
    GuildScheduledEventID snowflake.ID `json:"guild_scheduled_event_id"`
    UserID                snowflake.ID `json:"user_id"`
    GuildID               snowflake.ID `json:"guild_id"`
}
```

<a name="EventGuildStickersUpdate"></a>
## type [EventGuildStickersUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L308-L311>)



```go
type EventGuildStickersUpdate struct {
    GuildID  snowflake.ID      `json:"guild_id"`
    Stickers []discord.Sticker `json:"stickers"`
}
```

<a name="EventGuildUpdate"></a>
## type [EventGuildUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L167-L169>)



```go
type EventGuildUpdate struct {
    discord.GatewayGuild
}
```

<a name="EventHandlerFunc"></a>
## type [EventHandlerFunc](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway.go#L54>)

EventHandlerFunc is a function that is called when an event is received.

```go
type EventHandlerFunc func(gatewayEventType EventType, sequenceNumber int, shardID int, event EventData)
```

<a name="EventHeartbeatAck"></a>
## type [EventHeartbeatAck](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L723-L726>)



```go
type EventHeartbeatAck struct {
    LastHeartbeat time.Time
    NewHeartbeat  time.Time
}
```

<a name="EventIntegrationCreate"></a>
## type [EventIntegrationCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L618-L621>)



```go
type EventIntegrationCreate struct {
    discord.Integration
    GuildID snowflake.ID `json:"guild_id"`
}
```

<a name="EventIntegrationCreate.UnmarshalJSON"></a>
### func \(\*EventIntegrationCreate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L623>)

```go
func (e *EventIntegrationCreate) UnmarshalJSON(data []byte) error
```



<a name="EventIntegrationDelete"></a>
## type [EventIntegrationDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L668-L672>)



```go
type EventIntegrationDelete struct {
    ID            snowflake.ID  `json:"id"`
    GuildID       snowflake.ID  `json:"guild_id"`
    ApplicationID *snowflake.ID `json:"application_id"`
}
```

<a name="EventIntegrationUpdate"></a>
## type [EventIntegrationUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L643-L646>)



```go
type EventIntegrationUpdate struct {
    discord.Integration
    GuildID snowflake.ID `json:"guild_id"`
}
```

<a name="EventIntegrationUpdate.UnmarshalJSON"></a>
### func \(\*EventIntegrationUpdate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L648>)

```go
func (e *EventIntegrationUpdate) UnmarshalJSON(data []byte) error
```



<a name="EventInteractionCreate"></a>
## type [EventInteractionCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L442-L444>)



```go
type EventInteractionCreate struct {
    discord.Interaction
}
```

<a name="EventInteractionCreate.MarshalJSON"></a>
### func \(EventInteractionCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L455>)

```go
func (e EventInteractionCreate) MarshalJSON() ([]byte, error)
```



<a name="EventInteractionCreate.UnmarshalJSON"></a>
### func \(\*EventInteractionCreate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L446>)

```go
func (e *EventInteractionCreate) UnmarshalJSON(data []byte) error
```



<a name="EventInviteCreate"></a>
## type [EventInviteCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L462-L464>)



```go
type EventInviteCreate struct {
    discord.Invite
}
```

<a name="EventInviteDelete"></a>
## type [EventInviteDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L469-L473>)



```go
type EventInviteDelete struct {
    ChannelID snowflake.ID  `json:"channel_id"`
    GuildID   *snowflake.ID `json:"guild_id"`
    Code      string        `json:"code"`
}
```

<a name="EventMessageCreate"></a>
## type [EventMessageCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L478-L480>)



```go
type EventMessageCreate struct {
    discord.Message
}
```

<a name="EventMessageDelete"></a>
## type [EventMessageDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L492-L496>)



```go
type EventMessageDelete struct {
    ID        snowflake.ID  `json:"id"`
    ChannelID snowflake.ID  `json:"channel_id"`
    GuildID   *snowflake.ID `json:"guild_id,omitempty"`
}
```

<a name="EventMessageDeleteBulk"></a>
## type [EventMessageDeleteBulk](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L501-L505>)



```go
type EventMessageDeleteBulk struct {
    IDs       []snowflake.ID `json:"id"`
    ChannelID snowflake.ID   `json:"channel_id"`
    GuildID   *snowflake.ID  `json:"guild_id,omitempty"`
}
```

<a name="EventMessagePollVoteAdd"></a>
## type [EventMessagePollVoteAdd](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L510-L516>)



```go
type EventMessagePollVoteAdd struct {
    UserID    snowflake.ID  `json:"user_id"`
    ChannelID snowflake.ID  `json:"channel_id"`
    MessageID snowflake.ID  `json:"message_id"`
    GuildID   *snowflake.ID `json:"guild_id"`
    AnswerID  int           `json:"answer_id"`
}
```

<a name="EventMessagePollVoteRemove"></a>
## type [EventMessagePollVoteRemove](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L521-L527>)



```go
type EventMessagePollVoteRemove struct {
    UserID    snowflake.ID  `json:"user_id"`
    ChannelID snowflake.ID  `json:"channel_id"`
    MessageID snowflake.ID  `json:"message_id"`
    GuildID   *snowflake.ID `json:"guild_id"`
    AnswerID  int           `json:"answer_id"`
}
```

<a name="EventMessageReactionAdd"></a>
## type [EventMessageReactionAdd](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L189-L199>)



```go
type EventMessageReactionAdd struct {
    UserID          snowflake.ID         `json:"user_id"`
    ChannelID       snowflake.ID         `json:"channel_id"`
    MessageID       snowflake.ID         `json:"message_id"`
    GuildID         *snowflake.ID        `json:"guild_id"`
    Member          *discord.Member      `json:"member"`
    Emoji           discord.PartialEmoji `json:"emoji"`
    MessageAuthorID *snowflake.ID        `json:"message_author_id"`
    BurstColors     []string             `json:"burst_colors"`
    Burst           bool                 `json:"burst"`
}
```

<a name="EventMessageReactionAdd.UnmarshalJSON"></a>
### func \(\*EventMessageReactionAdd\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L201>)

```go
func (e *EventMessageReactionAdd) UnmarshalJSON(data []byte) error
```



<a name="EventMessageReactionRemove"></a>
## type [EventMessageReactionRemove](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L217-L225>)



```go
type EventMessageReactionRemove struct {
    UserID      snowflake.ID         `json:"user_id"`
    ChannelID   snowflake.ID         `json:"channel_id"`
    MessageID   snowflake.ID         `json:"message_id"`
    GuildID     *snowflake.ID        `json:"guild_id"`
    Emoji       discord.PartialEmoji `json:"emoji"`
    BurstColors []string             `json:"burst_colors"`
    Burst       bool                 `json:"burst"`
}
```

<a name="EventMessageReactionRemoveAll"></a>
## type [EventMessageReactionRemoveAll](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L240-L244>)



```go
type EventMessageReactionRemoveAll struct {
    ChannelID snowflake.ID  `json:"channel_id"`
    MessageID snowflake.ID  `json:"message_id"`
    GuildID   *snowflake.ID `json:"guild_id"`
}
```

<a name="EventMessageReactionRemoveEmoji"></a>
## type [EventMessageReactionRemoveEmoji](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L230-L235>)



```go
type EventMessageReactionRemoveEmoji struct {
    ChannelID snowflake.ID         `json:"channel_id"`
    MessageID snowflake.ID         `json:"message_id"`
    GuildID   *snowflake.ID        `json:"guild_id"`
    Emoji     discord.PartialEmoji `json:"emoji"`
}
```

<a name="EventMessageUpdate"></a>
## type [EventMessageUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L485-L487>)



```go
type EventMessageUpdate struct {
    discord.Message
}
```

<a name="EventPresenceUpdate"></a>
## type [EventPresenceUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L532-L534>)



```go
type EventPresenceUpdate struct {
    discord.Presence
}
```

<a name="EventRaw"></a>
## type [EventRaw](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L715-L718>)



```go
type EventRaw struct {
    EventType EventType
    Payload   io.Reader
}
```

<a name="EventReady"></a>
## type [EventReady](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L33-L41>)

EventReady is the event sent by discord when you successfully Identify

```go
type EventReady struct {
    Version          int                        `json:"v"`
    User             discord.OAuth2User         `json:"user"`
    Guilds           []discord.UnavailableGuild `json:"guilds"`
    SessionID        string                     `json:"session_id"`
    ResumeGatewayURL string                     `json:"resume_gateway_url"`
    Shard            [2]int                     `json:"shard,omitempty"`
    Application      discord.PartialApplication `json:"application"`
}
```

<a name="EventStageInstanceCreate"></a>
## type [EventStageInstanceCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L539-L541>)



```go
type EventStageInstanceCreate struct {
    discord.StageInstance
}
```

<a name="EventStageInstanceDelete"></a>
## type [EventStageInstanceDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L553-L555>)



```go
type EventStageInstanceDelete struct {
    discord.StageInstance
}
```

<a name="EventStageInstanceUpdate"></a>
## type [EventStageInstanceUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L546-L548>)



```go
type EventStageInstanceUpdate struct {
    discord.StageInstance
}
```

<a name="EventThreadCreate"></a>
## type [EventThreadCreate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L101-L104>)



```go
type EventThreadCreate struct {
    discord.GuildThread
    ThreadMember discord.ThreadMember `json:"thread_member"`
}
```

<a name="EventThreadDelete"></a>
## type [EventThreadDelete](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L116-L121>)



```go
type EventThreadDelete struct {
    ID       snowflake.ID        `json:"id"`
    GuildID  snowflake.ID        `json:"guild_id"`
    ParentID snowflake.ID        `json:"parent_id"`
    Type     discord.ChannelType `json:"type"`
}
```

<a name="EventThreadListSync"></a>
## type [EventThreadListSync](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L126-L131>)



```go
type EventThreadListSync struct {
    GuildID    snowflake.ID           `json:"guild_id"`
    ChannelIDs []snowflake.ID         `json:"channel_ids"`
    Threads    []discord.GuildThread  `json:"threads"`
    Members    []discord.ThreadMember `json:"members"`
}
```

<a name="EventThreadMemberUpdate"></a>
## type [EventThreadMemberUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L136-L138>)



```go
type EventThreadMemberUpdate struct {
    discord.ThreadMember
}
```

<a name="EventThreadMembersUpdate"></a>
## type [EventThreadMembersUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L149-L155>)



```go
type EventThreadMembersUpdate struct {
    ID               snowflake.ID        `json:"id"`
    GuildID          snowflake.ID        `json:"guild_id"`
    MemberCount      int                 `json:"member_count"`
    AddedMembers     []AddedThreadMember `json:"added_members"`
    RemovedMemberIDs []snowflake.ID      `json:"removed_member_ids"`
}
```

<a name="EventThreadUpdate"></a>
## type [EventThreadUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L109-L111>)



```go
type EventThreadUpdate struct {
    discord.GuildThread
}
```

<a name="EventType"></a>
## type [EventType](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_event_type.go#L4>)

EventType wraps all EventType types

```go
type EventType string
```

<a name="EventTypeRaw"></a>Constants for the gateway events

```go
const (
    // EventTypeRaw is not a real event type, but is used to pass raw payloads to the bot.EventManager
    EventTypeRaw                                 EventType = "__RAW__"
    EventTypeHeartbeatAck                        EventType = "__HEARTBEAT_ACK__"
    EventTypeReady                               EventType = "READY"
    EventTypeResumed                             EventType = "RESUMED"
    EventTypeApplicationCommandPermissionsUpdate EventType = "APPLICATION_COMMAND_PERMISSIONS_UPDATE"
    EventTypeAutoModerationRuleCreate            EventType = "AUTO_MODERATION_RULE_CREATE"
    EventTypeAutoModerationRuleUpdate            EventType = "AUTO_MODERATION_RULE_UPDATE"
    EventTypeAutoModerationRuleDelete            EventType = "AUTO_MODERATION_RULE_DELETE"
    EventTypeAutoModerationActionExecution       EventType = "AUTO_MODERATION_ACTION_EXECUTION"
    EventTypeChannelCreate                       EventType = "CHANNEL_CREATE"
    EventTypeChannelUpdate                       EventType = "CHANNEL_UPDATE"
    EventTypeChannelDelete                       EventType = "CHANNEL_DELETE"
    EventTypeChannelPinsUpdate                   EventType = "CHANNEL_PINS_UPDATE"
    EventTypeEntitlementCreate                   EventType = "ENTITLEMENT_CREATE"
    EventTypeEntitlementUpdate                   EventType = "ENTITLEMENT_UPDATE"
    EventTypeEntitlementDelete                   EventType = "ENTITLEMENT_DELETE"
    EventTypeThreadCreate                        EventType = "THREAD_CREATE"
    EventTypeThreadUpdate                        EventType = "THREAD_UPDATE"
    EventTypeThreadDelete                        EventType = "THREAD_DELETE"
    EventTypeThreadListSync                      EventType = "THREAD_LIST_SYNC"
    EventTypeThreadMemberUpdate                  EventType = "THREAD_MEMBER_UPDATE"
    EventTypeThreadMembersUpdate                 EventType = "THREAD_MEMBERS_UPDATE"
    EventTypeGuildCreate                         EventType = "GUILD_CREATE"
    EventTypeGuildUpdate                         EventType = "GUILD_UPDATE"
    EventTypeGuildDelete                         EventType = "GUILD_DELETE"
    EventTypeGuildAuditLogEntryCreate            EventType = "GUILD_AUDIT_LOG_ENTRY_CREATE"
    EventTypeGuildBanAdd                         EventType = "GUILD_BAN_ADD"
    EventTypeGuildBanRemove                      EventType = "GUILD_BAN_REMOVE"
    EventTypeGuildEmojisUpdate                   EventType = "GUILD_EMOJIS_UPDATE"
    EventTypeGuildStickersUpdate                 EventType = "GUILD_STICKERS_UPDATE"
    EventTypeGuildIntegrationsUpdate             EventType = "GUILD_INTEGRATIONS_UPDATE"
    EventTypeGuildMemberAdd                      EventType = "GUILD_MEMBER_ADD"
    EventTypeGuildMemberRemove                   EventType = "GUILD_MEMBER_REMOVE"
    EventTypeGuildMemberUpdate                   EventType = "GUILD_MEMBER_UPDATE"
    EventTypeGuildMembersChunk                   EventType = "GUILD_MEMBERS_CHUNK"
    EventTypeGuildRoleCreate                     EventType = "GUILD_ROLE_CREATE"
    EventTypeGuildRoleUpdate                     EventType = "GUILD_ROLE_UPDATE"
    EventTypeGuildRoleDelete                     EventType = "GUILD_ROLE_DELETE"
    EventTypeGuildScheduledEventCreate           EventType = "GUILD_SCHEDULED_EVENT_CREATE"
    EventTypeGuildScheduledEventUpdate           EventType = "GUILD_SCHEDULED_EVENT_UPDATE"
    EventTypeGuildScheduledEventDelete           EventType = "GUILD_SCHEDULED_EVENT_DELETE"
    EventTypeGuildScheduledEventUserAdd          EventType = "GUILD_SCHEDULED_EVENT_USER_ADD"
    EventTypeGuildScheduledEventUserRemove       EventType = "GUILD_SCHEDULED_EVENT_USER_REMOVE"
    EventTypeIntegrationCreate                   EventType = "INTEGRATION_CREATE"
    EventTypeIntegrationUpdate                   EventType = "INTEGRATION_UPDATE"
    EventTypeIntegrationDelete                   EventType = "INTEGRATION_DELETE"
    EventTypeInteractionCreate                   EventType = "INTERACTION_CREATE"
    EventTypeInviteCreate                        EventType = "INVITE_CREATE"
    EventTypeInviteDelete                        EventType = "INVITE_DELETE"
    EventTypeMessageCreate                       EventType = "MESSAGE_CREATE"
    EventTypeMessageUpdate                       EventType = "MESSAGE_UPDATE"
    EventTypeMessageDelete                       EventType = "MESSAGE_DELETE"
    EventTypeMessageDeleteBulk                   EventType = "MESSAGE_DELETE_BULK"
    EventTypeMessagePollVoteAdd                  EventType = "MESSAGE_POLL_VOTE_ADD"
    EventTypeMessagePollVoteRemove               EventType = "MESSAGE_POLL_VOTE_REMOVE"
    EventTypeMessageReactionAdd                  EventType = "MESSAGE_REACTION_ADD"
    EventTypeMessageReactionRemove               EventType = "MESSAGE_REACTION_REMOVE"
    EventTypeMessageReactionRemoveAll            EventType = "MESSAGE_REACTION_REMOVE_ALL"
    EventTypeMessageReactionRemoveEmoji          EventType = "MESSAGE_REACTION_REMOVE_EMOJI"
    EventTypePresenceUpdate                      EventType = "PRESENCE_UPDATE"
    EventTypeStageInstanceCreate                 EventType = "STAGE_INSTANCE_CREATE"
    EventTypeStageInstanceDelete                 EventType = "STAGE_INSTANCE_DELETE"
    EventTypeStageInstanceUpdate                 EventType = "STAGE_INSTANCE_UPDATE"
    EventTypeTypingStart                         EventType = "TYPING_START"
    EventTypeUserUpdate                          EventType = "USER_UPDATE"
    EventTypeVoiceStateUpdate                    EventType = "VOICE_STATE_UPDATE"
    EventTypeVoiceServerUpdate                   EventType = "VOICE_SERVER_UPDATE"
    EventTypeWebhooksUpdate                      EventType = "WEBHOOKS_UPDATE"
)
```

<a name="EventTypingStart"></a>
## type [EventTypingStart](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L560-L567>)



```go
type EventTypingStart struct {
    ChannelID snowflake.ID    `json:"channel_id"`
    GuildID   *snowflake.ID   `json:"guild_id,omitempty"`
    UserID    snowflake.ID    `json:"user_id"`
    Timestamp time.Time       `json:"timestamp"`
    Member    *discord.Member `json:"member,omitempty"`
    User      discord.User    `json:"user"`
}
```

<a name="EventTypingStart.UnmarshalJSON"></a>
### func \(\*EventTypingStart\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L569>)

```go
func (e *EventTypingStart) UnmarshalJSON(data []byte) error
```



<a name="EventUnknown"></a>
## type [EventUnknown](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L19>)

EventUnknown is an event that is not known to disgo

```go
type EventUnknown json.RawMessage
```

<a name="EventUnknown.MarshalJSON"></a>
### func \(EventUnknown\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L21>)

```go
func (e EventUnknown) MarshalJSON() ([]byte, error)
```



<a name="EventUnknown.UnmarshalJSON"></a>
### func \(\*EventUnknown\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L25>)

```go
func (e *EventUnknown) UnmarshalJSON(data []byte) error
```



<a name="EventUserUpdate"></a>
## type [EventUserUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L586-L588>)



```go
type EventUserUpdate struct {
    discord.OAuth2User
}
```

<a name="EventVoiceServerUpdate"></a>
## type [EventVoiceServerUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L601-L605>)



```go
type EventVoiceServerUpdate struct {
    Token    string       `json:"token"`
    GuildID  snowflake.ID `json:"guild_id"`
    Endpoint *string      `json:"endpoint"`
}
```

<a name="EventVoiceStateUpdate"></a>
## type [EventVoiceStateUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L593-L596>)



```go
type EventVoiceStateUpdate struct {
    discord.VoiceState
    Member discord.Member `json:"member"`
}
```

<a name="EventWebhooksUpdate"></a>
## type [EventWebhooksUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_events.go#L610-L613>)



```go
type EventWebhooksUpdate struct {
    GuildID   snowflake.ID `json:"guild_id"`
    ChannelID snowflake.ID `json:"channel_id"`
}
```

<a name="Gateway"></a>
## type [Gateway](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway.go#L64-L106>)

Gateway is what is used to connect to discord.

```go
type Gateway interface {
    // ShardID returns the shard ID that this Gateway is configured to use.
    ShardID() int

    // ShardCount returns the total number of shards that this Gateway is configured to use.
    ShardCount() int

    // SessionID returns the session ID that is used by this Gateway.
    // This may be nil if the Gateway was never connected to Discord, was gracefully closed with websocket.CloseNormalClosure or websocket.CloseGoingAway.
    SessionID() *string

    // LastSequenceReceived returns the last sequence number that was received by the Gateway.
    // This may be nil if the Gateway was never connected to Discord, was gracefully closed with websocket.CloseNormalClosure or websocket.CloseGoingAway.
    LastSequenceReceived() *int

    // Intents returns the Intents that are used by this Gateway.
    Intents() Intents

    // Open connects this Gateway to the Discord API.
    Open(ctx context.Context) error

    // Close gracefully closes the Gateway with the websocket.CloseNormalClosure code.
    // If the context is done, the Gateway connection will be killed.
    Close(ctx context.Context)

    // CloseWithCode closes the Gateway with the given code & message.
    // If the context is done, the Gateway connection will be killed.
    CloseWithCode(ctx context.Context, code int, message string)

    // Status returns the Status of the Gateway.
    Status() Status

    // Send sends a message to the Discord gateway with the opCode and data.
    // If context is deadline exceeds, the message sending will be aborted.
    Send(ctx context.Context, op Opcode, data MessageData) error

    // Latency returns the latency of the Gateway.
    // This is calculated by the time it takes to send a heartbeat and receive a heartbeat ack by discord.
    Latency() time.Duration

    // Presence returns the current presence of the Gateway.
    Presence() *MessageDataPresenceUpdate
}
```

<a name="New"></a>
### func [New](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_impl.go#L25>)

```go
func New(token string, eventHandlerFunc EventHandlerFunc, closeHandlerFunc CloseHandlerFunc, opts ...ConfigOpt) Gateway
```

New creates a new Gateway instance with the provided token, eventHandlerFunc, closeHandlerFunc and ConfigOpt\(s\).

<a name="IdentifyCommandDataProperties"></a>
## type [IdentifyCommandDataProperties](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L466-L470>)

IdentifyCommandDataProperties is used for specifying to discord which library and OS the bot is using, is automatically handled by the library and should rarely be used.

```go
type IdentifyCommandDataProperties struct {
    OS      string `json:"os"`      // user OS
    Browser string `json:"browser"` // library name
    Device  string `json:"device"`  // library name
}
```

<a name="Intents"></a>
## type [Intents](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_intents.go#L6>)

Intents is an extension of the Bit structure used when identifying with discord

```go
type Intents int64
```

<a name="IntentGuilds"></a>Constants for the different bit offsets of Intents

```go
const (
    IntentGuilds Intents = 1 << iota
    IntentGuildMembers
    IntentGuildModeration
    IntentGuildEmojisAndStickers
    IntentGuildIntegrations
    IntentGuildWebhooks
    IntentGuildInvites
    IntentGuildVoiceStates
    IntentGuildPresences
    IntentGuildMessages
    IntentGuildMessageReactions
    IntentGuildMessageTyping
    IntentDirectMessages
    IntentDirectMessageReactions
    IntentDirectMessageTyping
    IntentMessageContent
    IntentGuildScheduledEvents

    IntentAutoModerationConfiguration
    IntentAutoModerationExecution

    IntentGuildMessagePolls
    IntentDirectMessagePolls

    IntentsGuild = IntentGuilds |
        IntentGuildMembers |
        IntentGuildModeration |
        IntentGuildEmojisAndStickers |
        IntentGuildIntegrations |
        IntentGuildWebhooks |
        IntentGuildInvites |
        IntentGuildVoiceStates |
        IntentGuildPresences |
        IntentGuildMessages |
        IntentGuildMessageReactions |
        IntentGuildMessageTyping |
        IntentGuildScheduledEvents |
        IntentGuildMessagePolls

    IntentsDirectMessage = IntentDirectMessages |
        IntentDirectMessageReactions |
        IntentDirectMessageTyping |
        IntentDirectMessagePolls

    IntentsMessagePolls = IntentGuildMessagePolls |
        IntentDirectMessagePolls

    IntentsNonPrivileged = IntentGuilds |
        IntentGuildModeration |
        IntentGuildEmojisAndStickers |
        IntentGuildIntegrations |
        IntentGuildWebhooks |
        IntentGuildInvites |
        IntentGuildVoiceStates |
        IntentGuildMessages |
        IntentGuildMessageReactions |
        IntentGuildMessageTyping |
        IntentDirectMessages |
        IntentDirectMessageReactions |
        IntentDirectMessageTyping |
        IntentGuildScheduledEvents |
        IntentAutoModerationConfiguration |
        IntentAutoModerationExecution |
        IntentGuildMessagePolls |
        IntentDirectMessagePolls

    IntentsPrivileged = IntentGuildMembers |
        IntentGuildPresences | IntentMessageContent

    IntentsAll = IntentsNonPrivileged |
        IntentsPrivileged

    IntentsDefault = IntentsNone

    IntentsNone Intents = 0
)
```

<a name="Intents.Add"></a>
### func \(Intents\) [Add](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_intents.go#L91>)

```go
func (i Intents) Add(bits ...Intents) Intents
```

Add allows you to add multiple bits together, producing a new bit

<a name="Intents.Has"></a>
### func \(Intents\) [Has](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_intents.go#L101>)

```go
func (i Intents) Has(bits ...Intents) bool
```

Has will ensure that the bit includes all the bits entered

<a name="Intents.Missing"></a>
### func \(Intents\) [Missing](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_intents.go#L106>)

```go
func (i Intents) Missing(bits ...Intents) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="Intents.Remove"></a>
### func \(Intents\) [Remove](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_intents.go#L96>)

```go
func (i Intents) Remove(bits ...Intents) Intents
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="Message"></a>
## type [Message](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L13-L19>)

Message raw Message type

```go
type Message struct {
    Op   Opcode          `json:"op"`
    S    int             `json:"s,omitempty"`
    T    EventType       `json:"t,omitempty"`
    D    MessageData     `json:"d,omitempty"`
    RawD json.RawMessage `json:"-"`
}
```

<a name="Message.UnmarshalJSON"></a>
### func \(\*Message\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L21>)

```go
func (e *Message) UnmarshalJSON(data []byte) error
```



<a name="MessageData"></a>
## type [MessageData](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L101-L103>)



```go
type MessageData interface {
    // contains filtered or unexported methods
}
```

<a name="MessageDataHeartbeat"></a>
## type [MessageDataHeartbeat](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L447>)

MessageDataHeartbeat is used to ensure the websocket connection remains open, and disconnect if not.

```go
type MessageDataHeartbeat int
```

<a name="MessageDataHello"></a>
## type [MessageDataHello](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L614-L616>)



```go
type MessageDataHello struct {
    HeartbeatInterval int `json:"heartbeat_interval"`
}
```

<a name="MessageDataIdentify"></a>
## type [MessageDataIdentify](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L452-L460>)

MessageDataIdentify is the data used in IdentifyCommandData

```go
type MessageDataIdentify struct {
    Token          string                        `json:"token"`
    Properties     IdentifyCommandDataProperties `json:"properties"`
    Compress       bool                          `json:"compress,omitempty"`
    LargeThreshold int                           `json:"large_threshold,omitempty"`
    Shard          *[2]int                       `json:"shard,omitempty"`
    Intents        Intents                       `json:"intents"`
    Presence       *MessageDataPresenceUpdate    `json:"presence,omitempty"`
}
```

<a name="MessageDataInvalidSession"></a>
## type [MessageDataInvalidSession](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L610>)



```go
type MessageDataInvalidSession bool
```

<a name="MessageDataPresenceUpdate"></a>
## type [MessageDataPresenceUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L473-L478>)

MessageDataPresenceUpdate is used for updating Client's presence

```go
type MessageDataPresenceUpdate struct {
    Since      *int64               `json:"since"`
    Activities []discord.Activity   `json:"activities"`
    Status     discord.OnlineStatus `json:"status"`
    AFK        bool                 `json:"afk"`
}
```

<a name="MessageDataRequestGuildMembers"></a>
## type [MessageDataRequestGuildMembers](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L599-L606>)

MessageDataRequestGuildMembers is used for fetching all the members of a guild\_events. It is recommended you have a strict member caching policy when using this.

```go
type MessageDataRequestGuildMembers struct {
    GuildID   snowflake.ID   `json:"guild_id"`
    Query     *string        `json:"query,omitempty"` //If specified, user_ids must not be entered
    Limit     *int           `json:"limit,omitempty"` //Must be >=1 if query/user_ids is used, otherwise 0
    Presences bool           `json:"presences,omitempty"`
    UserIDs   []snowflake.ID `json:"user_ids,omitempty"` //If specified, query must not be entered
    Nonce     string         `json:"nonce,omitempty"`    //All responses are hashed with this nonce, optional
}
```

<a name="MessageDataResume"></a>
## type [MessageDataResume](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L589-L593>)

MessageDataResume is used to resume a connection to discord in the case that you are disconnected. Is automatically handled by the library and should rarely be used.

```go
type MessageDataResume struct {
    Token     string `json:"token"`
    SessionID string `json:"session_id"`
    Seq       int    `json:"seq"`
}
```

<a name="MessageDataUnknown"></a>
## type [MessageDataUnknown](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L442>)



```go
type MessageDataUnknown json.RawMessage
```

<a name="MessageDataVoiceStateUpdate"></a>
## type [MessageDataVoiceStateUpdate](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L578-L583>)

MessageDataVoiceStateUpdate is used for updating the bots voice state in a guild

```go
type MessageDataVoiceStateUpdate struct {
    GuildID   snowflake.ID  `json:"guild_id"`
    ChannelID *snowflake.ID `json:"channel_id"`
    SelfMute  bool          `json:"self_mute"`
    SelfDeaf  bool          `json:"self_deaf"`
}
```

<a name="Opcode"></a>
## type [Opcode](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_opcodes.go#L4>)

Opcode are opcodes used by discord

```go
type Opcode int
```

<a name="OpcodeDispatch"></a>https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes

```go
const (
    OpcodeDispatch Opcode = iota
    OpcodeHeartbeat
    OpcodeIdentify
    OpcodePresenceUpdate
    OpcodeVoiceStateUpdate

    OpcodeResume
    OpcodeReconnect
    OpcodeRequestGuildMembers
    OpcodeInvalidSession
    OpcodeHello
    OpcodeHeartbeatACK
)
```

<a name="PresenceOpt"></a>
## type [PresenceOpt](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L482>)



```go
type PresenceOpt func(presenceUpdate *MessageDataPresenceUpdate)
```

<a name="WithAfk"></a>
### func [WithAfk](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L554>)

```go
func WithAfk(afk bool) PresenceOpt
```

WithAfk sets whether the session is afk

<a name="WithCompetingActivity"></a>
### func [WithCompetingActivity](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L530>)

```go
func WithCompetingActivity(name string, opts ...ActivityOpt) PresenceOpt
```

WithCompetingActivity creates a new "Competing in ..." activity of type discord.ActivityTypeCompeting

<a name="WithCustomActivity"></a>
### func [WithCustomActivity](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L521>)

```go
func WithCustomActivity(status string, opts ...ActivityOpt) PresenceOpt
```

WithCustomActivity creates a new activity of type discord.ActivityTypeCustom

<a name="WithListeningActivity"></a>
### func [WithListeningActivity](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L505>)

```go
func WithListeningActivity(name string, opts ...ActivityOpt) PresenceOpt
```

WithListeningActivity creates a new "Listening to ..." activity of type discord.ActivityTypeListening

<a name="WithOnlineStatus"></a>
### func [WithOnlineStatus](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L547>)

```go
func WithOnlineStatus(status discord.OnlineStatus) PresenceOpt
```

WithOnlineStatus sets the online status to the provided discord.OnlineStatus

<a name="WithPlayingActivity"></a>
### func [WithPlayingActivity](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L485>)

```go
func WithPlayingActivity(name string, opts ...ActivityOpt) PresenceOpt
```

WithPlayingActivity creates a new "Playing ..." activity of type discord.ActivityTypeGame

<a name="WithSince"></a>
### func [WithSince](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L561>)

```go
func WithSince(since *int64) PresenceOpt
```

WithSince sets when the session has gone afk

<a name="WithStreamingActivity"></a>
### func [WithStreamingActivity](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L493>)

```go
func WithStreamingActivity(name string, url string, opts ...ActivityOpt) PresenceOpt
```

WithStreamingActivity creates a new "Streaming ..." activity of type discord.ActivityTypeStreaming

<a name="WithWatchingActivity"></a>
### func [WithWatchingActivity](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_messages.go#L513>)

```go
func WithWatchingActivity(name string, opts ...ActivityOpt) PresenceOpt
```

WithWatchingActivity creates a new "Watching ..." activity of type discord.ActivityTypeWatching

<a name="RateLimiter"></a>
## type [RateLimiter](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter.go#L11-L25>)

RateLimiter provides handles the rate limiting logic for connecting to Discord's Gateway.

```go
type RateLimiter interface {
    // Close gracefully closes the RateLimiter.
    // If the context deadline is exceeded, the RateLimiter will be closed immediately.
    Close(ctx context.Context)

    // Reset resets the RateLimiter to its initial state.
    Reset()

    // Wait waits for the RateLimiter to be ready to send a new message.
    // If the context deadline is exceeded, Wait will return immediately and no message will be sent.
    Wait(ctx context.Context) error

    // Unlock unlocks the RateLimiter and allows the next message to be sent.
    Unlock()
}
```

<a name="NewRateLimiter"></a>
### func [NewRateLimiter](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter_impl.go#L12>)

```go
func NewRateLimiter(opts ...RateLimiterConfigOpt) RateLimiter
```

NewRateLimiter creates a new default RateLimiter with the given RateLimiterConfigOpt\(s\).

<a name="RateLimiterConfig"></a>
## type [RateLimiterConfig](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter_config.go#L16-L19>)

RateLimiterConfig lets you configure your Gateway instance.

```go
type RateLimiterConfig struct {
    Logger            *slog.Logger
    CommandsPerMinute int
}
```

<a name="DefaultRateLimiterConfig"></a>
### func [DefaultRateLimiterConfig](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter_config.go#L8>)

```go
func DefaultRateLimiterConfig() *RateLimiterConfig
```

DefaultRateLimiterConfig returns a RateLimiterConfig with sensible defaults.

<a name="RateLimiterConfig.Apply"></a>
### func \(\*RateLimiterConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter_config.go#L25>)

```go
func (c *RateLimiterConfig) Apply(opts []RateLimiterConfigOpt)
```

Apply applies the given RateLimiterConfigOpt\(s\) to the RateLimiterConfig

<a name="RateLimiterConfigOpt"></a>
## type [RateLimiterConfigOpt](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter_config.go#L22>)

RateLimiterConfigOpt is a type alias for a function that takes a RateLimiterConfig and is used to configure your Server.

```go
type RateLimiterConfigOpt func(config *RateLimiterConfig)
```

<a name="WithCommandsPerMinute"></a>
### func [WithCommandsPerMinute](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter_config.go#L39>)

```go
func WithCommandsPerMinute(commandsPerMinute int) RateLimiterConfigOpt
```

WithCommandsPerMinute sets the number of commands per minute that the Gateway will allow.

<a name="WithRateLimiterLogger"></a>
### func [WithRateLimiterLogger](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway_rate_limiter_config.go#L32>)

```go
func WithRateLimiterLogger(logger *slog.Logger) RateLimiterConfigOpt
```

WithRateLimiterLogger sets the Logger for the Gateway.

<a name="Status"></a>
## type [Status](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway.go#L12>)

Status is the state that the client is currently in.

```go
type Status int
```

<a name="StatusUnconnected"></a>Indicates how far along the client is too connecting.

```go
const (
    // StatusUnconnected is the initial state when a new Gateway is created.
    StatusUnconnected Status = iota

    // StatusConnecting is the state when the client is connecting to the Discord gateway.
    StatusConnecting

    // StatusWaitingForHello is the state when the Gateway is waiting for the first OpcodeHello packet.
    StatusWaitingForHello

    // StatusIdentifying is the state when the Gateway received its first OpcodeHello packet and now sends a OpcodeIdentify packet.
    StatusIdentifying

    // StatusResuming is the state when the Gateway received its first OpcodeHello packet and now sends a OpcodeResume packet.
    StatusResuming

    // StatusWaitingForReady is the state when the Gateway received sent a OpcodeIdentify or OpcodeResume packet and now waits for a OpcodeDispatch with EventTypeReady packet.
    StatusWaitingForReady

    // StatusReady is the state when the Gateway received a OpcodeDispatch with EventTypeReady packet.
    StatusReady

    // StatusDisconnected is the state when the Gateway is disconnected.
    // Either due to an error or because the Gateway was closed gracefully.
    StatusDisconnected
)
```

<a name="Status.IsConnected"></a>
### func \(Status\) [IsConnected](<https://github.com/disgoorg/disgo/blob/master/gateway/gateway.go#L15>)

```go
func (s Status) IsConnected() bool
```

IsConnected returns whether the Gateway is connected.



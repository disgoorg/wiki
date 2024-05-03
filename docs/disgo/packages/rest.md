# Rest

```go
import "github.com/disgoorg/disgo/rest"
```

Package rest is used to interact with the Discord REST API.

## Constants

<a name="MaxRetries"></a>

```go
const (
    // MaxRetries is the maximum number of retries the client should do
    MaxRetries = 10
    // CleanupInterval is the interval at which the rate limiter cleans up old buckets
    CleanupInterval = time.Second * 10
)
```

<a name="MajorParameters"></a>MajorParameters is a list of url parameters which decide in which bucket a route belongs \(https://discord.com/developers/docs/topics/rate-limits#rate-limits\)

```go
const MajorParameters = "guild.id:channel.id:webhook.id:interaction.token"
```

## Variables

<a name="Version"></a>

```go
var (
    // Version is the Discord API version DisGo should use
    Version = 10

    // API is the base path of the Discord API
    API = "https://discord.com/api/"
)
```

<a name="GetGateway"></a>Misc

```go
var (
    GetGateway      = NewNoBotAuthEndpoint(http.MethodGet, "/gateway")
    GetGatewayBot   = NewEndpoint(http.MethodGet, "/gateway/bot")
    GetVoiceRegions = NewNoBotAuthEndpoint(http.MethodGet, "/voice/regions")
)
```

<a name="GetBotApplicationInfo"></a>OAuth2

```go
var (
    GetBotApplicationInfo = NewEndpoint(http.MethodGet, "/oauth2/applications/@me")
    GetAuthorizationInfo  = NewNoBotAuthEndpoint(http.MethodGet, "/oauth2/@me")
    Token                 = NewEndpoint(http.MethodPost, "/oauth2/token")
)
```

<a name="GetUser"></a>Users

```go
var (
    GetUser                                    = NewEndpoint(http.MethodGet, "/users/{user.id}")
    GetCurrentUser                             = NewEndpoint(http.MethodGet, "/users/@me")
    UpdateCurrentUser                          = NewEndpoint(http.MethodPatch, "/users/@me")
    GetCurrentUserGuilds                       = NewEndpoint(http.MethodGet, "/users/@me/guilds")
    GetCurrentMember                           = NewNoBotAuthEndpoint(http.MethodGet, "/users/@me/guilds/{guild.id}/member")
    GetCurrentUserConnections                  = NewNoBotAuthEndpoint(http.MethodGet, "/users/@me/connections")
    GetCurrentUserApplicationRoleConnection    = NewNoBotAuthEndpoint(http.MethodGet, "/users/@me/applications/{application.id}/role-connection")
    UpdateCurrentUserApplicationRoleConnection = NewNoBotAuthEndpoint(http.MethodPut, "/users/@me/applications/{application.id}/role-connection")
    LeaveGuild                                 = NewEndpoint(http.MethodDelete, "/users/@me/guilds/{guild.id}")
    GetDMChannels                              = NewEndpoint(http.MethodGet, "/users/@me/channels")
    CreateDMChannel                            = NewEndpoint(http.MethodPost, "/users/@me/channels")
)
```

<a name="GetGuild"></a>Guilds

```go
var (
    GetGuild          = NewEndpoint(http.MethodGet, "/guilds/{guild.id}")
    GetGuildPreview   = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/preview")
    CreateGuild       = NewEndpoint(http.MethodPost, "/guilds")
    UpdateGuild       = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}")
    DeleteGuild       = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}")
    GetGuildVanityURL = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/vanity-url")

    CreateGuildChannel     = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/channels")
    GetGuildChannels       = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/channels")
    UpdateChannelPositions = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/channels")

    GetBans   = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/bans")
    GetBan    = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/bans/{user.id}")
    AddBan    = NewEndpoint(http.MethodPut, "/guilds/{guild.id}/bans/{user.id}")
    DeleteBan = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/bans/{user.id}")
    BulkBan   = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/bulk-ban")

    GetMember        = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/members/{user.id}")
    GetMembers       = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/members")
    SearchMembers    = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/members/search")
    AddMember        = NewEndpoint(http.MethodPut, "/guilds/{guild.id}/members/{user.id}")
    UpdateMember     = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/members/{user.id}")
    RemoveMember     = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/members/{user.id}")
    AddMemberRole    = NewEndpoint(http.MethodPut, "/guilds/{guild.id}/members/{user.id}/roles/{role.id}")
    RemoveMemberRole = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/members/{user.id}/roles/{role.id}")

    UpdateCurrentMember = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/members/@me")

    GetGuildPruneCount = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/prune")
    BeginGuildPrune    = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/prune")

    GetGuildWebhooks = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/webhooks")

    GetAuditLogs = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/audit-logs")

    GetGuildVoiceRegions = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/regions")

    GetGuildWelcomeScreen    = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/welcome-screen")
    UpdateGuildWelcomeScreen = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/welcome-screen")

    GetGuildOnboarding    = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/onboarding")
    UpdateGuildOnboarding = NewEndpoint(http.MethodPut, "/guilds/{guild.id}/onboarding")

    UpdateCurrentUserVoiceState = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/voice-states/@me")
    UpdateUserVoiceState        = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/voice-states/{user.id}")
)
```

<a name="GetAutoModerationRules"></a>AutoModeration

```go
var (
    GetAutoModerationRules   = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/auto-moderation/rules")
    GetAutoModerationRule    = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}")
    CreateAutoModerationRule = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/auto-moderation/rules")
    UpdateAutoModerationRule = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}")
    DeleteAutoModerationRule = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}")
)
```

<a name="GetIntegrations"></a>GuildIntegrations

```go
var (
    GetIntegrations   = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/integrations")
    CreateIntegration = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/integrations")
    UpdateIntegration = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/integrations/{integration.id}")
    DeleteIntegration = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/integrations/{integration.id}")
    SyncIntegration   = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/integrations/{integration.id}/sync")
)
```

<a name="GetGuildTemplate"></a>GuildTemplates

```go
var (
    GetGuildTemplate        = NewEndpoint(http.MethodGet, "/guilds/templates/{template.code}")
    GetGuildTemplates       = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/templates")
    CreateGuildTemplate     = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/templates")
    SyncGuildTemplate       = NewEndpoint(http.MethodPut, "/guilds/{guild.id}/templates/{template.code}")
    UpdateGuildTemplate     = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/templates/{template.code}")
    DeleteGuildTemplate     = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/templates/{template.code}")
    CreateGuildFromTemplate = NewEndpoint(http.MethodPost, "/guilds/templates/{template.code}")
)
```

<a name="GetGuildScheduledEvents"></a>GuildScheduledEvents

```go
var (
    GetGuildScheduledEvents   = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/scheduled-events")
    GetGuildScheduledEvent    = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}")
    CreateGuildScheduledEvent = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/scheduled-events")
    UpdateGuildScheduledEvent = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}")
    DeleteGuildScheduledEvent = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}")

    GetGuildScheduledEventUsers = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}/users")
)
```

<a name="GetStageInstance"></a>StageInstance

```go
var (
    GetStageInstance    = NewEndpoint(http.MethodGet, "/stage-instances/{channel.id}")
    CreateStageInstance = NewEndpoint(http.MethodPost, "/stage-instances")
    UpdateStageInstance = NewEndpoint(http.MethodPatch, "/stage-instances/{channel.id}")
    DeleteStageInstance = NewEndpoint(http.MethodDelete, "/stage-instances/{channel.id}")
)
```

<a name="GetRoles"></a>Roles

```go
var (
    GetRoles            = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/roles")
    GetRole             = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/roles/{role.id}")
    CreateRole          = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/roles")
    UpdateRole          = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/roles/{role.id}")
    UpdateRolePositions = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/roles")
    DeleteRole          = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/roles/{role.id}")
)
```

<a name="GetChannel"></a>Channels

```go
var (
    GetChannel    = NewEndpoint(http.MethodGet, "/channels/{channel.id}")
    UpdateChannel = NewEndpoint(http.MethodPatch, "/channels/{channel.id}")
    DeleteChannel = NewEndpoint(http.MethodDelete, "/channels/{channel.id}")

    GetChannelWebhooks = NewEndpoint(http.MethodGet, "/channels/{channel.id}/webhooks")
    CreateWebhook      = NewEndpoint(http.MethodPost, "/channels/{channel.id}/webhooks")

    GetPermissionOverwrites   = NewEndpoint(http.MethodGet, "/channels/{channel.id}/permissions")
    GetPermissionOverwrite    = NewEndpoint(http.MethodGet, "/channels/{channel.id}/permissions/{overwrite.id}")
    UpdatePermissionOverwrite = NewEndpoint(http.MethodPut, "/channels/{channel.id}/permissions/{overwrite.id}")
    DeletePermissionOverwrite = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/permissions/{overwrite.id}")

    SendTyping    = NewEndpoint(http.MethodPost, "/channels/{channel.id}/typing")
    FollowChannel = NewEndpoint(http.MethodPost, "/channels/{channel.id}/followers")

    GetPollAnswerVotes = NewEndpoint(http.MethodGet, "/channels/{channel.id}/polls/{message.id}/answers/{answer.id}")
    ExpirePoll         = NewEndpoint(http.MethodPost, "/channels/{channel.id}/polls/{message.id}/expire")
)
```

<a name="CreateThreadWithMessage"></a>Threads

```go
var (
    CreateThreadWithMessage = NewEndpoint(http.MethodPost, "/channels/{channel.id}/messages/{message.id}/threads")
    CreateThread            = NewEndpoint(http.MethodPost, "/channels/{channel.id}/threads")
    JoinThread              = NewEndpoint(http.MethodPut, "/channels/{channel.id}/thread-members/@me")
    LeaveThread             = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/thread-members/@me")
    AddThreadMember         = NewEndpoint(http.MethodPut, "/channels/{channel.id}/thread-members/{user.id}")
    RemoveThreadMember      = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/thread-members/{user.id}")
    GetThreadMember         = NewEndpoint(http.MethodGet, "/channels/{channel.id}/thread-members/{user.id}")
    GetThreadMembers        = NewEndpoint(http.MethodGet, "/channels/{channel.id}/thread-members")

    GetPublicArchivedThreads        = NewEndpoint(http.MethodGet, "/channels/{channel.id}/threads/archived/public")
    GetPrivateArchivedThreads       = NewEndpoint(http.MethodGet, "/channels/{channel.id}/threads/archived/private")
    GetJoinedPrivateArchivedThreads = NewEndpoint(http.MethodGet, "/channels/{channel.id}/users/@me/threads/archived/private")
)
```

<a name="GetMessages"></a>Messages

```go
var (
    GetMessages        = NewEndpoint(http.MethodGet, "/channels/{channel.id}/messages")
    GetMessage         = NewEndpoint(http.MethodGet, "/channels/{channel.id}/messages/{message.id}")
    CreateMessage      = NewEndpoint(http.MethodPost, "/channels/{channel.id}/messages")
    UpdateMessage      = NewEndpoint(http.MethodPatch, "/channels/{channel.id}/messages/{message.id}")
    DeleteMessage      = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/messages/{message.id}")
    BulkDeleteMessages = NewEndpoint(http.MethodPost, "/channels/{channel.id}/messages/bulk-delete")

    GetPinnedMessages = NewEndpoint(http.MethodGet, "/channels/{channel.id}/pins")
    PinMessage        = NewEndpoint(http.MethodPut, "/channels/{channel.id}/pins/{message.id}")
    UnpinMessage      = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/pins/{message.id}")

    CrosspostMessage = NewEndpoint(http.MethodPost, "/channels/{channel.id}/messages/{message.id}/crosspost")

    GetReactions               = NewEndpoint(http.MethodGet, "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}")
    AddReaction                = NewEndpoint(http.MethodPut, "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me")
    RemoveOwnReaction          = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me")
    RemoveUserReaction         = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}")
    RemoveAllReactions         = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/messages/{message.id}/reactions")
    RemoveAllReactionsForEmoji = NewEndpoint(http.MethodDelete, "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}")
)
```

<a name="GetEmojis"></a>Emojis

```go
var (
    GetEmojis   = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/emojis")
    GetEmoji    = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/emojis/{emoji.id}")
    CreateEmoji = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/emojis")
    UpdateEmoji = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/emojis/{emote.id}")
    DeleteEmoji = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/emojis/{emote.id}")
)
```

<a name="GetNitroStickerPacks"></a>Stickers

```go
var (
    GetNitroStickerPacks = NewEndpoint(http.MethodGet, "/sticker-packs")
    GetSticker           = NewEndpoint(http.MethodGet, "/stickers/{sticker.id}")
    GetGuildStickers     = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/stickers")
    CreateGuildSticker   = NewEndpoint(http.MethodPost, "/guilds/{guild.id}/stickers")
    UpdateGuildSticker   = NewEndpoint(http.MethodPatch, "/guilds/{guild.id}/stickers/{sticker.id}")
    DeleteGuildSticker   = NewEndpoint(http.MethodDelete, "/guilds/{guild.id}/stickers/{sticker.id}")
)
```

<a name="GetWebhook"></a>Webhooks

```go
var (
    GetWebhook    = NewEndpoint(http.MethodGet, "/webhooks/{webhook.id}")
    UpdateWebhook = NewEndpoint(http.MethodPatch, "/webhooks/{webhook.id}")
    DeleteWebhook = NewEndpoint(http.MethodDelete, "/webhooks/{webhook.id}")

    GetWebhookWithToken    = NewNoBotAuthEndpoint(http.MethodGet, "/webhooks/{webhook.id}/{webhook.token}")
    UpdateWebhookWithToken = NewNoBotAuthEndpoint(http.MethodPatch, "/webhooks/{webhook.id}/{webhook.token}")
    DeleteWebhookWithToken = NewNoBotAuthEndpoint(http.MethodDelete, "/webhooks/{webhook.id}/{webhook.token}")

    CreateWebhookMessage       = NewNoBotAuthEndpoint(http.MethodPost, "/webhooks/{webhook.id}/{webhook.token}")
    CreateWebhookMessageSlack  = NewNoBotAuthEndpoint(http.MethodPost, "/webhooks/{webhook.id}/{webhook.token}/slack")
    CreateWebhookMessageGitHub = NewNoBotAuthEndpoint(http.MethodPost, "/webhooks/{webhook.id}/{webhook.token}/github")
    UpdateWebhookMessage       = NewNoBotAuthEndpoint(http.MethodPatch, "/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}")
    DeleteWebhookMessage       = NewNoBotAuthEndpoint(http.MethodDelete, "/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}")
)
```

<a name="GetInvite"></a>Invites

```go
var (
    GetInvite    = NewEndpoint(http.MethodGet, "/invites/{code}")
    CreateInvite = NewEndpoint(http.MethodPost, "/channels/{channel.id}/invites")
    DeleteInvite = NewEndpoint(http.MethodDelete, "/invites/{code}")

    GetGuildInvites   = NewEndpoint(http.MethodGet, "/guilds/{guild.id}/invites")
    GetChannelInvites = NewEndpoint(http.MethodGet, "/channels/{channel.id}/invites")
)
```

<a name="GetCurrentApplication"></a>Applications

```go
var (
    GetCurrentApplication    = NewEndpoint(http.MethodGet, "/applications/@me")
    UpdateCurrentApplication = NewEndpoint(http.MethodPatch, "/applications/@me")

    GetGlobalCommands   = NewEndpoint(http.MethodGet, "/applications/{application.id}/commands")
    GetGlobalCommand    = NewEndpoint(http.MethodGet, "/applications/{application.id}/command/{command.id}")
    CreateGlobalCommand = NewEndpoint(http.MethodPost, "/applications/{application.id}/commands")
    SetGlobalCommands   = NewEndpoint(http.MethodPut, "/applications/{application.id}/commands")
    UpdateGlobalCommand = NewEndpoint(http.MethodPatch, "/applications/{application.id}/commands/{command.id}")
    DeleteGlobalCommand = NewEndpoint(http.MethodDelete, "/applications/{application.id}/commands/{command.id}")

    GetGuildCommands   = NewEndpoint(http.MethodGet, "/applications/{application.id}/guilds/{guild.id}/commands")
    GetGuildCommand    = NewEndpoint(http.MethodGet, "/applications/{application.id}/guilds/{guild.id}/command/{command.id}")
    CreateGuildCommand = NewEndpoint(http.MethodPost, "/applications/{application.id}/guilds/{guild.id}/commands")
    SetGuildCommands   = NewEndpoint(http.MethodPut, "/applications/{application.id}/guilds/{guild.id}/commands")
    UpdateGuildCommand = NewEndpoint(http.MethodPatch, "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}")
    DeleteGuildCommand = NewEndpoint(http.MethodDelete, "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}")

    GetGuildCommandsPermissions = NewEndpoint(http.MethodGet, "/applications/{application.id}/guilds/{guild.id}/commands/permissions")
    GetGuildCommandPermissions  = NewEndpoint(http.MethodGet, "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions")
    SetGuildCommandPermissions  = NewNoBotAuthEndpoint(http.MethodPut, "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions")

    GetInteractionResponse    = NewNoBotAuthEndpoint(http.MethodGet, "/webhooks/{application.id}/{interaction.token}/messages/@original")
    CreateInteractionResponse = NewNoBotAuthEndpoint(http.MethodPost, "/interactions/{interaction.id}/{interaction.token}/callback")
    UpdateInteractionResponse = NewNoBotAuthEndpoint(http.MethodPatch, "/webhooks/{application.id}/{interaction.token}/messages/@original")
    DeleteInteractionResponse = NewNoBotAuthEndpoint(http.MethodDelete, "/webhooks/{application.id}/{interaction.token}/messages/@original")

    GetFollowupMessage    = NewNoBotAuthEndpoint(http.MethodGet, "/webhooks/{application.id}/{interaction.token}")
    CreateFollowupMessage = NewNoBotAuthEndpoint(http.MethodPost, "/webhooks/{application.id}/{interaction.token}")
    UpdateFollowupMessage = NewNoBotAuthEndpoint(http.MethodPatch, "/webhooks/{application.id}/{interaction.token}/messages/{message.id}")
    DeleteFollowupMessage = NewNoBotAuthEndpoint(http.MethodDelete, "/webhooks/{application.id}/{interaction.token}/messages/{message.id}")

    GetApplicationRoleConnectionMetadata    = NewEndpoint(http.MethodGet, "/applications/{application.id}/role-connections/metadata")
    UpdateApplicationRoleConnectionMetadata = NewEndpoint(http.MethodPut, "/applications/{application.id}/role-connections/metadata")

    GetEntitlements       = NewEndpoint(http.MethodGet, "/applications/{application.id}/entitlements")
    CreateTestEntitlement = NewEndpoint(http.MethodPost, "/applications/{application.id}/entitlements")
    DeleteTestEntitlement = NewEndpoint(http.MethodDelete, "/applications/{application.id}/entitlements/{entitlement.id}")
    ConsumeEntitlement    = NewEndpoint(http.MethodPost, "/applications/{application.id}/entitlements/{entitlement.id}/consume")

    GetSKUs = NewEndpoint(http.MethodGet, "/applications/{application.id}/skus")
)
```

<a name="ErrMissingBearerToken"></a>ErrMissingBearerToken is returned when a bearer token is missing for a request which requires it.

```go
var ErrMissingBearerToken = errors.New("missing bearer token")
```

<a name="ErrNoMorePages"></a>

```go
var ErrNoMorePages = errors.New("no more pages")
```

<a name="NewError"></a>
## func [NewError](<https://github.com/disgoorg/disgo/blob/master/rest/rest_error.go#L30>)

```go
func NewError(rq *http.Request, rqBody []byte, rs *http.Response, rsBody []byte) error
```

NewError returns a new Error with the given http.Request, http.Response

<a name="Applications"></a>
## type [Applications](<https://github.com/disgoorg/disgo/blob/master/rest/applications.go#L16-L46>)



```go
type Applications interface {
    GetCurrentApplication(opts ...RequestOpt) (*discord.Application, error)
    UpdateCurrentApplication(applicationUpdate discord.ApplicationUpdate, opts ...RequestOpt) (*discord.Application, error)

    GetGlobalCommands(applicationID snowflake.ID, withLocalizations bool, opts ...RequestOpt) ([]discord.ApplicationCommand, error)
    GetGlobalCommand(applicationID snowflake.ID, commandID snowflake.ID, opts ...RequestOpt) (discord.ApplicationCommand, error)
    CreateGlobalCommand(applicationID snowflake.ID, commandCreate discord.ApplicationCommandCreate, opts ...RequestOpt) (discord.ApplicationCommand, error)
    SetGlobalCommands(applicationID snowflake.ID, commandCreates []discord.ApplicationCommandCreate, opts ...RequestOpt) ([]discord.ApplicationCommand, error)
    UpdateGlobalCommand(applicationID snowflake.ID, commandID snowflake.ID, commandUpdate discord.ApplicationCommandUpdate, opts ...RequestOpt) (discord.ApplicationCommand, error)
    DeleteGlobalCommand(applicationID snowflake.ID, commandID snowflake.ID, opts ...RequestOpt) error

    GetGuildCommands(applicationID snowflake.ID, guildID snowflake.ID, withLocalizations bool, opts ...RequestOpt) ([]discord.ApplicationCommand, error)
    GetGuildCommand(applicationID snowflake.ID, guildID snowflake.ID, commandID snowflake.ID, opts ...RequestOpt) (discord.ApplicationCommand, error)
    CreateGuildCommand(applicationID snowflake.ID, guildID snowflake.ID, command discord.ApplicationCommandCreate, opts ...RequestOpt) (discord.ApplicationCommand, error)
    SetGuildCommands(applicationID snowflake.ID, guildID snowflake.ID, commands []discord.ApplicationCommandCreate, opts ...RequestOpt) ([]discord.ApplicationCommand, error)
    UpdateGuildCommand(applicationID snowflake.ID, guildID snowflake.ID, commandID snowflake.ID, command discord.ApplicationCommandUpdate, opts ...RequestOpt) (discord.ApplicationCommand, error)
    DeleteGuildCommand(applicationID snowflake.ID, guildID snowflake.ID, commandID snowflake.ID, opts ...RequestOpt) error

    GetGuildCommandsPermissions(applicationID snowflake.ID, guildID snowflake.ID, opts ...RequestOpt) ([]discord.ApplicationCommandPermissions, error)
    GetGuildCommandPermissions(applicationID snowflake.ID, guildID snowflake.ID, commandID snowflake.ID, opts ...RequestOpt) (*discord.ApplicationCommandPermissions, error)

    GetApplicationRoleConnectionMetadata(applicationID snowflake.ID, opts ...RequestOpt) ([]discord.ApplicationRoleConnectionMetadata, error)
    UpdateApplicationRoleConnectionMetadata(applicationID snowflake.ID, newRecords []discord.ApplicationRoleConnectionMetadata, opts ...RequestOpt) ([]discord.ApplicationRoleConnectionMetadata, error)

    GetEntitlements(applicationID snowflake.ID, userID snowflake.ID, guildID snowflake.ID, before snowflake.ID, after snowflake.ID, limit int, excludeEnded bool, skuIDs []snowflake.ID, opts ...RequestOpt) ([]discord.Entitlement, error)
    CreateTestEntitlement(applicationID snowflake.ID, entitlementCreate discord.TestEntitlementCreate, opts ...RequestOpt) (*discord.Entitlement, error)
    DeleteTestEntitlement(applicationID snowflake.ID, entitlementID snowflake.ID, opts ...RequestOpt) error
    ConsumeEntitlement(applicationID snowflake.ID, entitlementID snowflake.ID, opts ...RequestOpt) error

    GetSKUs(applicationID snowflake.ID, opts ...RequestOpt) ([]discord.SKU, error)
}
```

<a name="NewApplications"></a>
### func [NewApplications](<https://github.com/disgoorg/disgo/blob/master/rest/applications.go#L12>)

```go
func NewApplications(client Client) Applications
```



<a name="AuditLogPage"></a>
## type [AuditLogPage](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L55-L62>)



```go
type AuditLogPage struct {
    discord.AuditLog
    Err error

    ID  snowflake.ID
    // contains filtered or unexported fields
}
```

<a name="AuditLogPage.Next"></a>
### func \(\*AuditLogPage\) [Next](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L64>)

```go
func (p *AuditLogPage) Next() bool
```



<a name="AuditLogPage.Previous"></a>
### func \(\*AuditLogPage\) [Previous](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L80>)

```go
func (p *AuditLogPage) Previous() bool
```



<a name="AutoModeration"></a>
## type [AutoModeration](<https://github.com/disgoorg/disgo/blob/master/rest/auto_moderation.go#L15-L21>)



```go
type AutoModeration interface {
    GetAutoModerationRules(guildID snowflake.ID, opts ...RequestOpt) ([]discord.AutoModerationRule, error)
    GetAutoModerationRule(guildID snowflake.ID, ruleID snowflake.ID, opts ...RequestOpt) (*discord.AutoModerationRule, error)
    CreateAutoModerationRule(guildID snowflake.ID, ruleCreate discord.AutoModerationRuleCreate, opts ...RequestOpt) (*discord.AutoModerationRule, error)
    UpdateAutoModerationRule(guildID snowflake.ID, ruleID snowflake.ID, ruleUpdate discord.AutoModerationRuleUpdate, opts ...RequestOpt) (*discord.AutoModerationRule, error)
    DeleteAutoModerationRule(guildID snowflake.ID, ruleID snowflake.ID, opts ...RequestOpt) error
}
```

<a name="NewAutoModeration"></a>
### func [NewAutoModeration](<https://github.com/disgoorg/disgo/blob/master/rest/auto_moderation.go#L11>)

```go
func NewAutoModeration(client Client) AutoModeration
```



<a name="Channels"></a>
## type [Channels](<https://github.com/disgoorg/disgo/blob/master/rest/channels.go#L15-L54>)



```go
type Channels interface {
    GetChannel(channelID snowflake.ID, opts ...RequestOpt) (discord.Channel, error)
    UpdateChannel(channelID snowflake.ID, channelUpdate discord.ChannelUpdate, opts ...RequestOpt) (discord.Channel, error)
    DeleteChannel(channelID snowflake.ID, opts ...RequestOpt) error

    GetWebhooks(channelID snowflake.ID, opts ...RequestOpt) ([]discord.Webhook, error)
    CreateWebhook(channelID snowflake.ID, webhookCreate discord.WebhookCreate, opts ...RequestOpt) (*discord.IncomingWebhook, error)

    GetPermissionOverwrites(channelID snowflake.ID, opts ...RequestOpt) ([]discord.PermissionOverwrite, error)
    GetPermissionOverwrite(channelID snowflake.ID, overwriteID snowflake.ID, opts ...RequestOpt) (*discord.PermissionOverwrite, error)
    UpdatePermissionOverwrite(channelID snowflake.ID, overwriteID snowflake.ID, permissionOverwrite discord.PermissionOverwriteUpdate, opts ...RequestOpt) error
    DeletePermissionOverwrite(channelID snowflake.ID, overwriteID snowflake.ID, opts ...RequestOpt) error

    SendTyping(channelID snowflake.ID, opts ...RequestOpt) error

    GetMessage(channelID snowflake.ID, messageID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)
    GetMessages(channelID snowflake.ID, around snowflake.ID, before snowflake.ID, after snowflake.ID, limit int, opts ...RequestOpt) ([]discord.Message, error)
    GetMessagesPage(channelID snowflake.ID, startID snowflake.ID, limit int, opts ...RequestOpt) Page[discord.Message]
    CreateMessage(channelID snowflake.ID, messageCreate discord.MessageCreate, opts ...RequestOpt) (*discord.Message, error)
    UpdateMessage(channelID snowflake.ID, messageID snowflake.ID, messageUpdate discord.MessageUpdate, opts ...RequestOpt) (*discord.Message, error)
    DeleteMessage(channelID snowflake.ID, messageID snowflake.ID, opts ...RequestOpt) error
    BulkDeleteMessages(channelID snowflake.ID, messageIDs []snowflake.ID, opts ...RequestOpt) error
    CrosspostMessage(channelID snowflake.ID, messageID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)

    GetReactions(channelID snowflake.ID, messageID snowflake.ID, emoji string, opts ...RequestOpt) ([]discord.User, error)
    AddReaction(channelID snowflake.ID, messageID snowflake.ID, emoji string, opts ...RequestOpt) error
    RemoveOwnReaction(channelID snowflake.ID, messageID snowflake.ID, emoji string, opts ...RequestOpt) error
    RemoveUserReaction(channelID snowflake.ID, messageID snowflake.ID, emoji string, userID snowflake.ID, opts ...RequestOpt) error
    RemoveAllReactions(channelID snowflake.ID, messageID snowflake.ID, opts ...RequestOpt) error
    RemoveAllReactionsForEmoji(channelID snowflake.ID, messageID snowflake.ID, emoji string, opts ...RequestOpt) error

    GetPinnedMessages(channelID snowflake.ID, opts ...RequestOpt) ([]discord.Message, error)
    PinMessage(channelID snowflake.ID, messageID snowflake.ID, opts ...RequestOpt) error
    UnpinMessage(channelID snowflake.ID, messageID snowflake.ID, opts ...RequestOpt) error
    Follow(channelID snowflake.ID, targetChannelID snowflake.ID, opts ...RequestOpt) (*discord.FollowedChannel, error)

    GetPollAnswerVotes(channelID snowflake.ID, messageID snowflake.ID, answerID int, after snowflake.ID, limit int, opts ...RequestOpt) ([]discord.User, error)
    GetPollAnswerVotesPage(channelID snowflake.ID, messageID snowflake.ID, answerID int, startID snowflake.ID, limit int, opts ...RequestOpt) PollAnswerVotesPage
    ExpirePoll(channelID snowflake.ID, messageID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)
}
```

<a name="NewChannels"></a>
### func [NewChannels](<https://github.com/disgoorg/disgo/blob/master/rest/channels.go#L11>)

```go
func NewChannels(client Client) Channels
```



<a name="Check"></a>
## type [Check](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L30>)

Check is a function which gets executed right before a request is made

```go
type Check func() bool
```

<a name="Client"></a>
## type [Client](<https://github.com/disgoorg/disgo/blob/master/rest/rest_client.go#L33-L45>)

Client allows doing requests to different endpoints

```go
type Client interface {
    // HTTPClient returns the http.Client the rest client uses
    HTTPClient() *http.Client

    // RateLimiter returns the RateLimiter the rest client uses
    RateLimiter() RateLimiter

    // Close closes the rest client and awaits all pending requests to finish. You can use a cancelling context to abort the waiting
    Close(ctx context.Context)

    // Do makes a request to the given CompiledAPIRoute and marshals the given any as json and unmarshalls the response into the given interface
    Do(endpoint *CompiledEndpoint, rqBody any, rsBody any, opts ...RequestOpt) error
}
```

<a name="NewClient"></a>
### func [NewClient](<https://github.com/disgoorg/disgo/blob/master/rest/rest_client.go#L19>)

```go
func NewClient(botToken string, opts ...ConfigOpt) Client
```

NewClient constructs a new Client with the given Config struct

<a name="CompiledEndpoint"></a>
## type [CompiledEndpoint](<https://github.com/disgoorg/disgo/blob/master/rest/rest_endpoints.go#L334-L339>)

CompiledEndpoint represents a Discord Rest API endpoint with applied url params & query values.

```go
type CompiledEndpoint struct {
    Endpoint *Endpoint

    URL         string
    MajorParams string
}
```

<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L20-L27>)

Config is the configuration for the rest client

```go
type Config struct {
    Logger                *slog.Logger
    HTTPClient            *http.Client
    RateLimiter           RateLimiter
    RateLimiterConfigOpts []RateLimiterConfigOpt
    URL                   string
    UserAgent             string
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L11>)

```go
func DefaultConfig() *Config
```

DefaultConfig is the configuration which is used by default

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L33>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L30>)

ConfigOpt can be used to supply optional parameters to NewClient

```go
type ConfigOpt func(config *Config)
```

<a name="WithHTTPClient"></a>
### func [WithHTTPClient](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L50>)

```go
func WithHTTPClient(httpClient *http.Client) ConfigOpt
```

WithHTTPClient applies a custom http.Client to the rest rate limiter

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L43>)

```go
func WithLogger(logger *slog.Logger) ConfigOpt
```

WithLogger applies a custom logger to the rest rate limiter

<a name="WithRateLimiter"></a>
### func [WithRateLimiter](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L57>)

```go
func WithRateLimiter(rateLimiter RateLimiter) ConfigOpt
```

WithRateLimiter applies a custom RateLimiter to the rest client

<a name="WithRateLimiterConfigOpts"></a>
### func [WithRateLimiterConfigOpts](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L64>)

```go
func WithRateLimiterConfigOpts(opts ...RateLimiterConfigOpt) ConfigOpt
```

WithRateLimiterConfigOpts applies RateLimiterConfigOpt to the RateLimiter

<a name="WithURL"></a>
### func [WithURL](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L71>)

```go
func WithURL(url string) ConfigOpt
```

WithURL sets the api url for all requests

<a name="WithUserAgent"></a>
### func [WithUserAgent](<https://github.com/disgoorg/disgo/blob/master/rest/rest_config.go#L78>)

```go
func WithUserAgent(userAgent string) ConfigOpt
```

WithUserAgent sets the user agent for all requests

<a name="Emojis"></a>
## type [Emojis](<https://github.com/disgoorg/disgo/blob/master/rest/emojis.go#L15-L21>)



```go
type Emojis interface {
    GetEmojis(guildID snowflake.ID, opts ...RequestOpt) ([]discord.Emoji, error)
    GetEmoji(guildID snowflake.ID, emojiID snowflake.ID, opts ...RequestOpt) (*discord.Emoji, error)
    CreateEmoji(guildID snowflake.ID, emojiCreate discord.EmojiCreate, opts ...RequestOpt) (*discord.Emoji, error)
    UpdateEmoji(guildID snowflake.ID, emojiID snowflake.ID, emojiUpdate discord.EmojiUpdate, opts ...RequestOpt) (*discord.Emoji, error)
    DeleteEmoji(guildID snowflake.ID, emojiID snowflake.ID, opts ...RequestOpt) error
}
```

<a name="NewEmojis"></a>
### func [NewEmojis](<https://github.com/disgoorg/disgo/blob/master/rest/emojis.go#L11>)

```go
func NewEmojis(client Client) Emojis
```



<a name="Endpoint"></a>
## type [Endpoint](<https://github.com/disgoorg/disgo/blob/master/rest/rest_endpoints.go#L327-L331>)

Endpoint represents a Discord Rest API endpoint.

```go
type Endpoint struct {
    Method  string
    Route   string
    BotAuth bool
}
```

<a name="NewEndpoint"></a>
### func [NewEndpoint](<https://github.com/disgoorg/disgo/blob/master/rest/rest_endpoints.go#L309>)

```go
func NewEndpoint(method string, route string) *Endpoint
```

NewEndpoint returns a new Endpoint which requires bot auth with the given http method & route.

<a name="NewNoBotAuthEndpoint"></a>
### func [NewNoBotAuthEndpoint](<https://github.com/disgoorg/disgo/blob/master/rest/rest_endpoints.go#L318>)

```go
func NewNoBotAuthEndpoint(method string, route string) *Endpoint
```

NewNoBotAuthEndpoint returns a new Endpoint which does not require bot auth with the given http method & route.

<a name="Endpoint.Compile"></a>
### func \(\*Endpoint\) [Compile](<https://github.com/disgoorg/disgo/blob/master/rest/rest_endpoints.go#L342>)

```go
func (e *Endpoint) Compile(values discord.QueryValues, params ...any) *CompiledEndpoint
```

Compile compiles an Endpoint to a CompiledEndpoint with the given url params & query values

<a name="Error"></a>
## type [Error](<https://github.com/disgoorg/disgo/blob/master/rest/rest_error.go#L18-L27>)

Error holds the http.Response & an error related to a REST request

```go
type Error struct {
    Request  *http.Request  `json:"-"`
    RqBody   []byte         `json:"-"`
    Response *http.Response `json:"-"`
    RsBody   []byte         `json:"-"`

    Code    JSONErrorCode   `json:"code"`
    Errors  json.RawMessage `json:"errors"`
    Message string          `json:"message"`
}
```

<a name="Error.Error"></a>
### func \(Error\) [Error](<https://github.com/disgoorg/disgo/blob/master/rest/rest_error.go#L55>)

```go
func (e Error) Error() string
```

Error returns the error formatted as string

<a name="Error.Is"></a>
### func \(Error\) [Is](<https://github.com/disgoorg/disgo/blob/master/rest/rest_error.go#L43>)

```go
func (e Error) Is(target error) bool
```

Is returns true if the error is a \*Error with the same status code as the target error

<a name="Error.String"></a>
### func \(Error\) [String](<https://github.com/disgoorg/disgo/blob/master/rest/rest_error.go#L63>)

```go
func (e Error) String() string
```

Error returns the error formatted as string

<a name="Gateway"></a>
## type [Gateway](<https://github.com/disgoorg/disgo/blob/master/rest/gateway.go#L13-L16>)



```go
type Gateway interface {
    GetGateway(opts ...RequestOpt) (*discord.Gateway, error)
    GetGatewayBot(opts ...RequestOpt) (*discord.GatewayBot, error)
}
```

<a name="NewGateway"></a>
### func [NewGateway](<https://github.com/disgoorg/disgo/blob/master/rest/gateway.go#L9>)

```go
func NewGateway(client Client) Gateway
```



<a name="GuildScheduledEvents"></a>
## type [GuildScheduledEvents](<https://github.com/disgoorg/disgo/blob/master/rest/guild_scheduled_events.go#L15-L24>)



```go
type GuildScheduledEvents interface {
    GetGuildScheduledEvents(guildID snowflake.ID, withUserCounts bool, opts ...RequestOpt) ([]discord.GuildScheduledEvent, error)
    GetGuildScheduledEvent(guildID snowflake.ID, guildScheduledEventID snowflake.ID, withUserCounts bool, opts ...RequestOpt) (*discord.GuildScheduledEvent, error)
    CreateGuildScheduledEvent(guildID snowflake.ID, guildScheduledEventCreate discord.GuildScheduledEventCreate, opts ...RequestOpt) (*discord.GuildScheduledEvent, error)
    UpdateGuildScheduledEvent(guildID snowflake.ID, guildScheduledEventID snowflake.ID, guildScheduledEventUpdate discord.GuildScheduledEventUpdate, opts ...RequestOpt) (*discord.GuildScheduledEvent, error)
    DeleteGuildScheduledEvent(guildID snowflake.ID, guildScheduledEventID snowflake.ID, opts ...RequestOpt) error

    GetGuildScheduledEventUsers(guildID snowflake.ID, guildScheduledEventID snowflake.ID, withMember bool, before snowflake.ID, after snowflake.ID, limit int, opts ...RequestOpt) ([]discord.GuildScheduledEventUser, error)
    GetGuildScheduledEventUsersPage(guildID snowflake.ID, guildScheduledEventID snowflake.ID, withMember bool, startID snowflake.ID, limit int, opts ...RequestOpt) Page[discord.GuildScheduledEventUser]
}
```

<a name="NewGuildScheduledEvents"></a>
### func [NewGuildScheduledEvents](<https://github.com/disgoorg/disgo/blob/master/rest/guild_scheduled_events.go#L11>)

```go
func NewGuildScheduledEvents(client Client) GuildScheduledEvents
```



<a name="GuildTemplates"></a>
## type [GuildTemplates](<https://github.com/disgoorg/disgo/blob/master/rest/guild_templates.go#L15-L23>)



```go
type GuildTemplates interface {
    GetGuildTemplate(templateCode string, opts ...RequestOpt) (*discord.GuildTemplate, error)
    GetGuildTemplates(guildID snowflake.ID, opts ...RequestOpt) ([]discord.GuildTemplate, error)
    CreateGuildTemplate(guildID snowflake.ID, guildTemplateCreate discord.GuildTemplateCreate, opts ...RequestOpt) (*discord.GuildTemplate, error)
    CreateGuildFromTemplate(templateCode string, createGuildFromTemplate discord.GuildFromTemplateCreate, opts ...RequestOpt) (*discord.Guild, error)
    SyncGuildTemplate(guildID snowflake.ID, templateCode string, opts ...RequestOpt) (*discord.GuildTemplate, error)
    UpdateGuildTemplate(guildID snowflake.ID, templateCode string, guildTemplateUpdate discord.GuildTemplateUpdate, opts ...RequestOpt) (*discord.GuildTemplate, error)
    DeleteGuildTemplate(guildID snowflake.ID, templateCode string, opts ...RequestOpt) (*discord.GuildTemplate, error)
}
```

<a name="NewGuildTemplates"></a>
### func [NewGuildTemplates](<https://github.com/disgoorg/disgo/blob/master/rest/guild_templates.go#L11>)

```go
func NewGuildTemplates(client Client) GuildTemplates
```



<a name="Guilds"></a>
## type [Guilds](<https://github.com/disgoorg/disgo/blob/master/rest/guilds.go#L18-L63>)



```go
type Guilds interface {
    GetGuild(guildID snowflake.ID, withCounts bool, opts ...RequestOpt) (*discord.RestGuild, error)
    GetGuildPreview(guildID snowflake.ID, opts ...RequestOpt) (*discord.GuildPreview, error)
    CreateGuild(guildCreate discord.GuildCreate, opts ...RequestOpt) (*discord.RestGuild, error)
    UpdateGuild(guildID snowflake.ID, guildUpdate discord.GuildUpdate, opts ...RequestOpt) (*discord.RestGuild, error)
    DeleteGuild(guildID snowflake.ID, opts ...RequestOpt) error

    GetGuildVanityURL(guildID snowflake.ID, opts ...RequestOpt) (*discord.PartialInvite, error)

    CreateGuildChannel(guildID snowflake.ID, guildChannelCreate discord.GuildChannelCreate, opts ...RequestOpt) (discord.GuildChannel, error)
    GetGuildChannels(guildID snowflake.ID, opts ...RequestOpt) ([]discord.GuildChannel, error)
    UpdateChannelPositions(guildID snowflake.ID, guildChannelPositionUpdates []discord.GuildChannelPositionUpdate, opts ...RequestOpt) error

    GetRoles(guildID snowflake.ID, opts ...RequestOpt) ([]discord.Role, error)
    GetRole(guildID snowflake.ID, roleID snowflake.ID, opts ...RequestOpt) (*discord.Role, error)
    CreateRole(guildID snowflake.ID, createRole discord.RoleCreate, opts ...RequestOpt) (*discord.Role, error)
    UpdateRole(guildID snowflake.ID, roleID snowflake.ID, roleUpdate discord.RoleUpdate, opts ...RequestOpt) (*discord.Role, error)
    UpdateRolePositions(guildID snowflake.ID, rolePositionUpdates []discord.RolePositionUpdate, opts ...RequestOpt) ([]discord.Role, error)
    DeleteRole(guildID snowflake.ID, roleID snowflake.ID, opts ...RequestOpt) error

    GetBans(guildID snowflake.ID, before snowflake.ID, after snowflake.ID, limit int, opts ...RequestOpt) ([]discord.Ban, error)
    GetBansPage(guildID snowflake.ID, startID snowflake.ID, limit int, opts ...RequestOpt) Page[discord.Ban]
    GetBan(guildID snowflake.ID, userID snowflake.ID, opts ...RequestOpt) (*discord.Ban, error)
    AddBan(guildID snowflake.ID, userID snowflake.ID, deleteMessageDuration time.Duration, opts ...RequestOpt) error
    DeleteBan(guildID snowflake.ID, userID snowflake.ID, opts ...RequestOpt) error
    BulkBan(guildID snowflake.ID, ban discord.BulkBan, opts ...RequestOpt) (*discord.BulkBanResult, error)

    GetIntegrations(guildID snowflake.ID, opts ...RequestOpt) ([]discord.Integration, error)
    DeleteIntegration(guildID snowflake.ID, integrationID snowflake.ID, opts ...RequestOpt) error

    GetGuildPruneCount(guildID snowflake.ID, days int, includeRoles []snowflake.ID, opts ...RequestOpt) (*discord.GuildPruneResult, error)
    BeginGuildPrune(guildID snowflake.ID, guildPrune discord.GuildPrune, opts ...RequestOpt) (*discord.GuildPruneResult, error)

    GetAllWebhooks(guildID snowflake.ID, opts ...RequestOpt) ([]discord.Webhook, error)

    GetGuildVoiceRegions(guildID snowflake.ID, opts ...RequestOpt) ([]discord.VoiceRegion, error)

    GetAuditLog(guildID snowflake.ID, userID snowflake.ID, actionType discord.AuditLogEvent, before snowflake.ID, after snowflake.ID, limit int, opts ...RequestOpt) (*discord.AuditLog, error)
    GetAuditLogPage(guildID snowflake.ID, userID snowflake.ID, actionType discord.AuditLogEvent, startID snowflake.ID, limit int, opts ...RequestOpt) AuditLogPage

    GetGuildWelcomeScreen(guildID snowflake.ID, opts ...RequestOpt) (*discord.GuildWelcomeScreen, error)
    UpdateGuildWelcomeScreen(guildID snowflake.ID, screenUpdate discord.GuildWelcomeScreenUpdate, opts ...RequestOpt) (*discord.GuildWelcomeScreen, error)

    GetGuildOnboarding(guildID snowflake.ID, opts ...RequestOpt) (*discord.GuildOnboarding, error)
    UpdateGuildOnboarding(guildID snowflake.ID, onboardingUpdate discord.GuildOnboardingUpdate, opts ...RequestOpt) (*discord.GuildOnboarding, error)
}
```

<a name="NewGuilds"></a>
### func [NewGuilds](<https://github.com/disgoorg/disgo/blob/master/rest/guilds.go#L14>)

```go
func NewGuilds(client Client) Guilds
```



<a name="Interactions"></a>
## type [Interactions](<https://github.com/disgoorg/disgo/blob/master/rest/interactions.go#L15-L25>)



```go
type Interactions interface {
    GetInteractionResponse(applicationID snowflake.ID, interactionToken string, opts ...RequestOpt) (*discord.Message, error)
    CreateInteractionResponse(interactionID snowflake.ID, interactionToken string, interactionResponse discord.InteractionResponse, opts ...RequestOpt) error
    UpdateInteractionResponse(applicationID snowflake.ID, interactionToken string, messageUpdate discord.MessageUpdate, opts ...RequestOpt) (*discord.Message, error)
    DeleteInteractionResponse(applicationID snowflake.ID, interactionToken string, opts ...RequestOpt) error

    GetFollowupMessage(applicationID snowflake.ID, interactionToken string, messageID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)
    CreateFollowupMessage(applicationID snowflake.ID, interactionToken string, messageCreate discord.MessageCreate, opts ...RequestOpt) (*discord.Message, error)
    UpdateFollowupMessage(applicationID snowflake.ID, interactionToken string, messageID snowflake.ID, messageUpdate discord.MessageUpdate, opts ...RequestOpt) (*discord.Message, error)
    DeleteFollowupMessage(applicationID snowflake.ID, interactionToken string, messageID snowflake.ID, opts ...RequestOpt) error
}
```

<a name="NewInteractions"></a>
### func [NewInteractions](<https://github.com/disgoorg/disgo/blob/master/rest/interactions.go#L11>)

```go
func NewInteractions(client Client) Interactions
```



<a name="Invites"></a>
## type [Invites](<https://github.com/disgoorg/disgo/blob/master/rest/invites.go#L15-L21>)



```go
type Invites interface {
    GetInvite(code string, opts ...RequestOpt) (*discord.Invite, error)
    CreateInvite(channelID snowflake.ID, inviteCreate discord.InviteCreate, opts ...RequestOpt) (*discord.Invite, error)
    DeleteInvite(code string, opts ...RequestOpt) (*discord.Invite, error)
    GetGuildInvites(guildID snowflake.ID, opts ...RequestOpt) ([]discord.Invite, error)
    GetChannelInvites(channelID snowflake.ID, opts ...RequestOpt) ([]discord.Invite, error)
}
```

<a name="NewInvites"></a>
### func [NewInvites](<https://github.com/disgoorg/disgo/blob/master/rest/invites.go#L11>)

```go
func NewInvites(client Client) Invites
```



<a name="JSONErrorCode"></a>
## type [JSONErrorCode](<https://github.com/disgoorg/disgo/blob/master/rest/rest_error.go#L13>)

JSONErrorCode is the error code returned by the Discord API. See https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes

```go
type JSONErrorCode int
```

<a name="Members"></a>
## type [Members](<https://github.com/disgoorg/disgo/blob/master/rest/members.go#L15-L30>)



```go
type Members interface {
    GetMember(guildID snowflake.ID, userID snowflake.ID, opts ...RequestOpt) (*discord.Member, error)
    GetMembers(guildID snowflake.ID, limit int, after snowflake.ID, opts ...RequestOpt) ([]discord.Member, error)
    SearchMembers(guildID snowflake.ID, query string, limit int, opts ...RequestOpt) ([]discord.Member, error)
    AddMember(guildID snowflake.ID, userID snowflake.ID, memberAdd discord.MemberAdd, opts ...RequestOpt) (*discord.Member, error)
    RemoveMember(guildID snowflake.ID, userID snowflake.ID, opts ...RequestOpt) error
    UpdateMember(guildID snowflake.ID, userID snowflake.ID, memberUpdate discord.MemberUpdate, opts ...RequestOpt) (*discord.Member, error)

    AddMemberRole(guildID snowflake.ID, userID snowflake.ID, roleID snowflake.ID, opts ...RequestOpt) error
    RemoveMemberRole(guildID snowflake.ID, userID snowflake.ID, roleID snowflake.ID, opts ...RequestOpt) error

    UpdateCurrentMember(guildID snowflake.ID, nick string, opts ...RequestOpt) (*string, error)

    UpdateCurrentUserVoiceState(guildID snowflake.ID, currentUserVoiceStateUpdate discord.CurrentUserVoiceStateUpdate, opts ...RequestOpt) error
    UpdateUserVoiceState(guildID snowflake.ID, userID snowflake.ID, userVoiceStateUpdate discord.UserVoiceStateUpdate, opts ...RequestOpt) error
}
```

<a name="NewMembers"></a>
### func [NewMembers](<https://github.com/disgoorg/disgo/blob/master/rest/members.go#L11>)

```go
func NewMembers(client Client) Members
```



<a name="OAuth2"></a>
## type [OAuth2](<https://github.com/disgoorg/disgo/blob/master/rest/oauth2.go#L21-L44>)



```go
type OAuth2 interface {
    GetBotApplicationInfo(opts ...RequestOpt) (*discord.Application, error)

    GetCurrentAuthorizationInfo(bearerToken string, opts ...RequestOpt) (*discord.AuthorizationInformation, error)
    // GetCurrentUser returns the current user
    // Leave bearerToken empty to use the bot token.
    GetCurrentUser(bearerToken string, opts ...RequestOpt) (*discord.OAuth2User, error)
    GetCurrentMember(bearerToken string, guildID snowflake.ID, opts ...RequestOpt) (*discord.Member, error)
    // GetCurrentUserGuilds returns a list of guilds the current user is a member of. Requires the discord.OAuth2ScopeGuilds scope.
    // Leave bearerToken empty to use the bot token.
    GetCurrentUserGuilds(bearerToken string, before snowflake.ID, after snowflake.ID, limit int, withCounts bool, opts ...RequestOpt) ([]discord.OAuth2Guild, error)
    // GetCurrentUserGuildsPage returns a Page of guilds the current user is a member of. Requires the discord.OAuth2ScopeGuilds scope.
    // Leave bearerToken empty to use the bot token.
    GetCurrentUserGuildsPage(bearerToken string, startID snowflake.ID, limit int, withCounts bool, opts ...RequestOpt) Page[discord.OAuth2Guild]
    GetCurrentUserConnections(bearerToken string, opts ...RequestOpt) ([]discord.Connection, error)

    SetGuildCommandPermissions(bearerToken string, applicationID snowflake.ID, guildID snowflake.ID, commandID snowflake.ID, commandPermissions []discord.ApplicationCommandPermission, opts ...RequestOpt) (*discord.ApplicationCommandPermissions, error)

    GetCurrentUserApplicationRoleConnection(bearerToken string, applicationID snowflake.ID, opts ...RequestOpt) (*discord.ApplicationRoleConnection, error)
    UpdateCurrentUserApplicationRoleConnection(bearerToken string, applicationID snowflake.ID, connectionUpdate discord.ApplicationRoleConnectionUpdate, opts ...RequestOpt) (*discord.ApplicationRoleConnection, error)

    GetAccessToken(clientID snowflake.ID, clientSecret string, code string, redirectURI string, opts ...RequestOpt) (*discord.AccessTokenResponse, error)
    RefreshAccessToken(clientID snowflake.ID, clientSecret string, refreshToken string, opts ...RequestOpt) (*discord.AccessTokenResponse, error)
}
```

<a name="NewOAuth2"></a>
### func [NewOAuth2](<https://github.com/disgoorg/disgo/blob/master/rest/oauth2.go#L17>)

```go
func NewOAuth2(client Client) OAuth2
```



<a name="Page"></a>
## type [Page](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L13-L21>)



```go
type Page[T any] struct {
    Items []T
    Err   error

    ID  snowflake.ID
    // contains filtered or unexported fields
}
```

<a name="Page[T].Next"></a>
### func \(\*Page\[T\]\) [Next](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L23>)

```go
func (p *Page[T]) Next() bool
```



<a name="Page[T].Previous"></a>
### func \(\*Page\[T\]\) [Previous](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L39>)

```go
func (p *Page[T]) Previous() bool
```



<a name="PollAnswerVotesPage"></a>
## type [PollAnswerVotesPage](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L121-L128>)



```go
type PollAnswerVotesPage struct {
    Items []discord.User
    Err   error

    ID  snowflake.ID
    // contains filtered or unexported fields
}
```

<a name="PollAnswerVotesPage.Next"></a>
### func \(\*PollAnswerVotesPage\) [Next](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L130>)

```go
func (p *PollAnswerVotesPage) Next() bool
```



<a name="RateLimiter"></a>
## type [RateLimiter](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter.go#L23-L39>)

RateLimiter can be used to supply your own rate limit implementation

```go
type RateLimiter interface {
    // MaxRetries returns the maximum number of retries the client should do
    MaxRetries() int

    // Close gracefully closes the RateLimiter.
    // If the context deadline is exceeded, the RateLimiter will be closed immediately.
    Close(ctx context.Context)

    // Reset resets the rate limiter to its initial state
    Reset()

    // WaitBucket waits for the given bucket to be available for new requests & locks it
    WaitBucket(ctx context.Context, endpoint *CompiledEndpoint) error

    // UnlockBucket unlocks the given bucket and calculates the rate limit for the next request
    UnlockBucket(endpoint *CompiledEndpoint, rs *http.Response) error
}
```

<a name="NewNoopRateLimiter"></a>
### func [NewNoopRateLimiter](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_noop.go#L9>)

```go
func NewNoopRateLimiter() RateLimiter
```

NewNoopRateLimiter return a new noop RateLimiter.

<a name="NewRateLimiter"></a>
### func [NewRateLimiter](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter.go#L42>)

```go
func NewRateLimiter(opts ...RateLimiterConfigOpt) RateLimiter
```

NewRateLimiter return a new default RateLimiter with the given RateLimiterConfigOpt\(s\).

<a name="RateLimiterConfig"></a>
## type [RateLimiterConfig](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_config.go#L18-L22>)

RateLimiterConfig is the configuration for the rate limiter.

```go
type RateLimiterConfig struct {
    Logger          *slog.Logger
    MaxRetries      int
    CleanupInterval time.Duration
}
```

<a name="DefaultRateLimiterConfig"></a>
### func [DefaultRateLimiterConfig](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_config.go#L9>)

```go
func DefaultRateLimiterConfig() *RateLimiterConfig
```

DefaultRateLimiterConfig is the configuration which is used by default.

<a name="RateLimiterConfig.Apply"></a>
### func \(\*RateLimiterConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_config.go#L28>)

```go
func (c *RateLimiterConfig) Apply(opts []RateLimiterConfigOpt)
```

Apply applies the given RateLimiterConfigOpt\(s\) to the RateLimiterConfig.

<a name="RateLimiterConfigOpt"></a>
## type [RateLimiterConfigOpt](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_config.go#L25>)

RateLimiterConfigOpt can be used to supply optional parameters to NewRateLimiter.

```go
type RateLimiterConfigOpt func(config *RateLimiterConfig)
```

<a name="WithCleanupInterval"></a>
### func [WithCleanupInterval](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_config.go#L49>)

```go
func WithCleanupInterval(cleanupInterval time.Duration) RateLimiterConfigOpt
```

WithCleanupInterval tells the rest rate limiter how often to clean up the rate limiter buckets.

<a name="WithMaxRetries"></a>
### func [WithMaxRetries](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_config.go#L42>)

```go
func WithMaxRetries(maxRetries int) RateLimiterConfigOpt
```

WithMaxRetries tells the rest rate limiter to retry the request up to the specified number of times if it encounters a 429 response.

<a name="WithRateLimiterLogger"></a>
### func [WithRateLimiterLogger](<https://github.com/disgoorg/disgo/blob/master/rest/rest_rate_limiter_config.go#L35>)

```go
func WithRateLimiterLogger(logger *slog.Logger) RateLimiterConfigOpt
```

WithRateLimiterLogger applies a custom logger to the rest rate limiter.

<a name="RequestConfig"></a>
## type [RequestConfig](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L22-L27>)

RequestConfig are additional options for the request

```go
type RequestConfig struct {
    Request *http.Request
    Ctx     context.Context
    Checks  []Check
    Delay   time.Duration
}
```

<a name="DefaultRequestConfig"></a>
### func [DefaultRequestConfig](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L14>)

```go
func DefaultRequestConfig(rq *http.Request) *RequestConfig
```



<a name="RequestConfig.Apply"></a>
### func \(\*RequestConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L36>)

```go
func (c *RequestConfig) Apply(opts []RequestOpt)
```

Apply applies the given RequestOpt\(s\) to the RequestConfig & sets the context if none is set

<a name="RequestOpt"></a>
## type [RequestOpt](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L33>)

RequestOpt can be used to supply optional parameters to Client.Do

```go
type RequestOpt func(config *RequestConfig)
```

<a name="WithCheck"></a>
### func [WithCheck](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L53>)

```go
func WithCheck(check Check) RequestOpt
```

WithCheck adds a new check to the request

<a name="WithCtx"></a>
### func [WithCtx](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L46>)

```go
func WithCtx(ctx context.Context) RequestOpt
```

WithCtx applies a custom context to the request

<a name="WithDelay"></a>
### func [WithDelay](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L60>)

```go
func WithDelay(delay time.Duration) RequestOpt
```

WithDelay applies a delay to the request

<a name="WithDiscordLocale"></a>
### func [WithDiscordLocale](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L80>)

```go
func WithDiscordLocale(locale discord.Locale) RequestOpt
```

WithDiscordLocale adds the X\-Discord\-Locale header with the passed locale to the request

<a name="WithHeader"></a>
### func [WithHeader](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L67>)

```go
func WithHeader(key string, value string) RequestOpt
```

WithHeader adds a custom header to the request

<a name="WithQueryParam"></a>
### func [WithQueryParam](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L90>)

```go
func WithQueryParam(param string, value any) RequestOpt
```

WithQueryParam applies a custom query parameter to the request

<a name="WithReason"></a>
### func [WithReason](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L74>)

```go
func WithReason(reason string) RequestOpt
```

WithReason adds a reason header to the request. Not all discord endpoints support this

<a name="WithToken"></a>
### func [WithToken](<https://github.com/disgoorg/disgo/blob/master/rest/request_config.go#L85>)

```go
func WithToken(tokenType discord.TokenType, token string) RequestOpt
```

WithToken adds the Authorization header with the passed token to the request

<a name="Rest"></a>
## type [Rest](<https://github.com/disgoorg/disgo/blob/master/rest/rest.go#L4-L25>)

Rest is a manager for all of disgo's HTTP requests

```go
type Rest interface {
    Client

    Applications
    OAuth2
    Gateway
    Guilds
    AutoModeration
    Members
    Channels
    Threads
    Interactions
    Invites
    GuildTemplates
    Users
    Voice
    Webhooks
    StageInstances
    Emojis
    Stickers
    GuildScheduledEvents
}
```

<a name="New"></a>
### func [New](<https://github.com/disgoorg/disgo/blob/master/rest/rest.go#L30>)

```go
func New(client Client) Rest
```

New returns a new default Rest

<a name="StageInstances"></a>
## type [StageInstances](<https://github.com/disgoorg/disgo/blob/master/rest/stage_instances.go#L15-L20>)



```go
type StageInstances interface {
    GetStageInstance(channelID snowflake.ID, opts ...RequestOpt) (*discord.StageInstance, error)
    CreateStageInstance(stageInstanceCreate discord.StageInstanceCreate, opts ...RequestOpt) (*discord.StageInstance, error)
    UpdateStageInstance(channelID snowflake.ID, stageInstanceUpdate discord.StageInstanceUpdate, opts ...RequestOpt) (*discord.StageInstance, error)
    DeleteStageInstance(channelID snowflake.ID, opts ...RequestOpt) error
}
```

<a name="NewStageInstances"></a>
### func [NewStageInstances](<https://github.com/disgoorg/disgo/blob/master/rest/stage_instances.go#L11>)

```go
func NewStageInstances(client Client) StageInstances
```



<a name="Stickers"></a>
## type [Stickers](<https://github.com/disgoorg/disgo/blob/master/rest/stickers.go#L15-L22>)



```go
type Stickers interface {
    GetNitroStickerPacks(opts ...RequestOpt) ([]discord.StickerPack, error)
    GetSticker(stickerID snowflake.ID, opts ...RequestOpt) (*discord.Sticker, error)
    GetStickers(guildID snowflake.ID, opts ...RequestOpt) ([]discord.Sticker, error)
    CreateSticker(guildID snowflake.ID, createSticker discord.StickerCreate, opts ...RequestOpt) (*discord.Sticker, error)
    UpdateSticker(guildID snowflake.ID, stickerID snowflake.ID, stickerUpdate discord.StickerUpdate, opts ...RequestOpt) (*discord.Sticker, error)
    DeleteSticker(guildID snowflake.ID, stickerID snowflake.ID, opts ...RequestOpt) error
}
```

<a name="NewStickers"></a>
### func [NewStickers](<https://github.com/disgoorg/disgo/blob/master/rest/stickers.go#L11>)

```go
func NewStickers(client Client) Stickers
```



<a name="ThreadMemberPage"></a>
## type [ThreadMemberPage](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L96-L103>)



```go
type ThreadMemberPage struct {
    Items []discord.ThreadMember
    Err   error

    ID  snowflake.ID
    // contains filtered or unexported fields
}
```

<a name="ThreadMemberPage.Next"></a>
### func \(\*ThreadMemberPage\) [Next](<https://github.com/disgoorg/disgo/blob/master/rest/page.go#L105>)

```go
func (p *ThreadMemberPage) Next() bool
```



<a name="Threads"></a>
## type [Threads](<https://github.com/disgoorg/disgo/blob/master/rest/threads.go#L17-L33>)



```go
type Threads interface {
    // CreateThreadFromMessage does not work for discord.ChannelTypeGuildForum or discord.ChannelTypeGuildMedia channels.
    CreateThreadFromMessage(channelID snowflake.ID, messageID snowflake.ID, threadCreateFromMessage discord.ThreadCreateFromMessage, opts ...RequestOpt) (thread *discord.GuildThread, err error)
    CreatePostInThreadChannel(channelID snowflake.ID, postCreateInChannel discord.ThreadChannelPostCreate, opts ...RequestOpt) (post *discord.ThreadChannelPost, err error)
    CreateThread(channelID snowflake.ID, threadCreate discord.ThreadCreate, opts ...RequestOpt) (thread *discord.GuildThread, err error)
    JoinThread(threadID snowflake.ID, opts ...RequestOpt) error
    LeaveThread(threadID snowflake.ID, opts ...RequestOpt) error
    AddThreadMember(threadID snowflake.ID, userID snowflake.ID, opts ...RequestOpt) error
    RemoveThreadMember(threadID snowflake.ID, userID snowflake.ID, opts ...RequestOpt) error
    GetThreadMember(threadID snowflake.ID, userID snowflake.ID, withMember bool, opts ...RequestOpt) (threadMember *discord.ThreadMember, err error)
    GetThreadMembers(threadID snowflake.ID, opts ...RequestOpt) (threadMembers []discord.ThreadMember, err error)
    GetThreadMembersPage(threadID snowflake.ID, startID snowflake.ID, limit int, opts ...RequestOpt) ThreadMemberPage

    GetPublicArchivedThreads(channelID snowflake.ID, before time.Time, limit int, opts ...RequestOpt) (threads *discord.GetThreads, err error)
    GetPrivateArchivedThreads(channelID snowflake.ID, before time.Time, limit int, opts ...RequestOpt) (threads *discord.GetThreads, err error)
    GetJoinedPrivateArchivedThreads(channelID snowflake.ID, before time.Time, limit int, opts ...RequestOpt) (threads *discord.GetThreads, err error)
}
```

<a name="NewThreads"></a>
### func [NewThreads](<https://github.com/disgoorg/disgo/blob/master/rest/threads.go#L13>)

```go
func NewThreads(client Client) Threads
```



<a name="Users"></a>
## type [Users](<https://github.com/disgoorg/disgo/blob/master/rest/users.go#L15-L21>)



```go
type Users interface {
    GetUser(userID snowflake.ID, opts ...RequestOpt) (*discord.User, error)
    UpdateCurrentUser(userUpdate discord.UserUpdate, opts ...RequestOpt) (*discord.OAuth2User, error)
    LeaveGuild(guildID snowflake.ID, opts ...RequestOpt) error
    GetDMChannels(opts ...RequestOpt) ([]discord.Channel, error)
    CreateDMChannel(userID snowflake.ID, opts ...RequestOpt) (*discord.DMChannel, error)
}
```

<a name="NewUsers"></a>
### func [NewUsers](<https://github.com/disgoorg/disgo/blob/master/rest/users.go#L11>)

```go
func NewUsers(client Client) Users
```



<a name="Voice"></a>
## type [Voice](<https://github.com/disgoorg/disgo/blob/master/rest/voice.go#L13-L15>)



```go
type Voice interface {
    GetVoiceRegions(opts ...RequestOpt) ([]discord.VoiceRegion, error)
}
```

<a name="NewVoice"></a>
### func [NewVoice](<https://github.com/disgoorg/disgo/blob/master/rest/voice.go#L9>)

```go
func NewVoice(client Client) Voice
```



<a name="Webhooks"></a>
## type [Webhooks](<https://github.com/disgoorg/disgo/blob/master/rest/webhooks.go#L15-L29>)



```go
type Webhooks interface {
    GetWebhook(webhookID snowflake.ID, opts ...RequestOpt) (discord.Webhook, error)
    UpdateWebhook(webhookID snowflake.ID, webhookUpdate discord.WebhookUpdate, opts ...RequestOpt) (discord.Webhook, error)
    DeleteWebhook(webhookID snowflake.ID, opts ...RequestOpt) error

    GetWebhookWithToken(webhookID snowflake.ID, webhookToken string, opts ...RequestOpt) (discord.Webhook, error)
    UpdateWebhookWithToken(webhookID snowflake.ID, webhookToken string, webhookUpdate discord.WebhookUpdateWithToken, opts ...RequestOpt) (discord.Webhook, error)
    DeleteWebhookWithToken(webhookID snowflake.ID, webhookToken string, opts ...RequestOpt) error

    CreateWebhookMessage(webhookID snowflake.ID, webhookToken string, messageCreate discord.WebhookMessageCreate, wait bool, threadID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)
    CreateWebhookMessageSlack(webhookID snowflake.ID, webhookToken string, messageCreate discord.Payload, wait bool, threadID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)
    CreateWebhookMessageGitHub(webhookID snowflake.ID, webhookToken string, messageCreate discord.Payload, wait bool, threadID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)
    UpdateWebhookMessage(webhookID snowflake.ID, webhookToken string, messageID snowflake.ID, messageUpdate discord.WebhookMessageUpdate, threadID snowflake.ID, opts ...RequestOpt) (*discord.Message, error)
    DeleteWebhookMessage(webhookID snowflake.ID, webhookToken string, messageID snowflake.ID, threadID snowflake.ID, opts ...RequestOpt) error
}
```

<a name="NewWebhooks"></a>
### func [NewWebhooks](<https://github.com/disgoorg/disgo/blob/master/rest/webhooks.go#L11>)

```go
func NewWebhooks(client Client) Webhooks
```





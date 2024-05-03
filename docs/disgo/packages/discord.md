# Discord

```go
import "github.com/disgoorg/disgo/discord"
```

Package discord is a collection of structs and types of the Discord API.

## Constants

<a name="ApplicationFlagAutoModerationRuleCreateBadge"></a>

```go
const (
    ApplicationFlagAutoModerationRuleCreateBadge = 1 << (iota + 6)

    ApplicationFlagGatewayPresence
    ApplicationFlagGatewayPresenceLimited
    ApplicationFlagGatewayGuildMembers
    ApplicationFlagGatewayGuildMemberLimited
    ApplicationFlagVerificationPendingGuildLimit
    ApplicationFlagEmbedded
    ApplicationFlagGatewayMessageContent
    ApplicationFlagGatewayMessageContentLimited

    ApplicationFlagApplicationCommandBadge
)
```

<a name="CDN"></a>

```go
const (
    CDN      = "https://cdn.discordapp.com"
    CDNMedia = "https://media.discordapp.net"
)
```

<a name="MessageURLFmt"></a>

```go
const MessageURLFmt = "https://discord.com/channels/%s/%d/%d"
```

<a name="ScheduledEventPrivacyLevelGuildOnly"></a>

```go
const (
    ScheduledEventPrivacyLevelGuildOnly
)
```

<a name="ScopeSeparator"></a>

```go
const ScopeSeparator = " "
```

## Variables

<a name="CustomEmoji"></a>

```go
var (
    CustomEmoji = NewCDN("/emojis/{emote.id}", FileFormatPNG, FileFormatGIF)

    GuildIcon            = NewCDN("/icons/{guild.id}/{guild.icon.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP, FileFormatGIF)
    GuildSplash          = NewCDN("/splashes/{guild.id}/{guild.splash.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)
    GuildDiscoverySplash = NewCDN("/discovery-splashes/{guild.id}/{guild.discovery.splash.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)
    GuildBanner          = NewCDN("/banners/{guild.id}/{guild.banner.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP, FileFormatGIF)

    GuildScheduledEventCover = NewCDN("/guild-events/{event.id}/{event.cover.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)

    RoleIcon = NewCDN("/role-icons/{role.id}/{role.icon.hash}", FileFormatPNG, FileFormatJPEG)

    UserBanner        = NewCDN("/banners/{user.id}/{user.banner.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP, FileFormatGIF)
    UserAvatar        = NewCDN("/avatars/{user.id}/{user.avatar.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP, FileFormatGIF)
    DefaultUserAvatar = NewCDN("/embed/avatars/{index}", FileFormatPNG)

    ChannelIcon = NewCDN("/channel-icons/{channel.id}/{channel.icon.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)

    MemberAvatar = NewCDN("/guilds/{guild.id}/users/{user.id}/avatars/{member.avatar.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP, FileFormatGIF)

    AvatarDecoration = NewCDN("/avatar-decoration-presets/{user.avatar.decoration.hash}", FileFormatPNG)

    ApplicationIcon  = NewCDN("/app-icons/{application.id}/{icon.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)
    ApplicationCover = NewCDN("/app-assets/{application.id}/{cover.image.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)
    ApplicationAsset = NewCDN("/app-assets/{application.id}/{asset.id}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)

    AchievementIcon = NewCDN("/app-assets/{application.id}/achievements/{achievement.id}/icons/{icon.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)

    StorePageAsset = NewCDN("/app-assets/{application.id}/store/{asset.id}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)

    TeamIcon = NewCDN("/team-icons/{team.id}/{team.icon.hash}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)

    StickerPackBanner = NewCDN("/app-assets/710982414301790216/store/{banner.asset.id}", FileFormatPNG, FileFormatJPEG, FileFormatWebP)
    CustomSticker     = NewCDN("/stickers/{sticker.id}", FileFormatPNG, FileFormatLottie, FileFormatGIF)

    AttachmentFile = NewCDN("/attachments/{channel.id}/{attachment.id}/{file.name}", FileFormatNone)
)
```

<a name="ErrNoGatewayOrShardManager"></a>

```go
var (
    ErrNoGatewayOrShardManager = errors.New("no gateway or shard manager configured")
    ErrNoGuildMembersIntent    = errors.New("this operation requires the GUILD_MEMBERS intent")
    ErrNoShardManager          = errors.New("no shard manager configured")
    ErrNoGateway               = errors.New("no gateway configured")
    ErrGatewayAlreadyConnected = errors.New("gateway is already connected")
    ErrShardNotConnected       = errors.New("shard is not connected")
    ErrShardNotFound           = errors.New("shard not found in shard manager")
    ErrGatewayCompressedData   = errors.New("disgo does not currently support compressed gateway data")
    ErrNoHTTPServer            = errors.New("no http server configured")

    ErrNoDisgoInstance = errors.New("no disgo instance injected")

    ErrInvalidBotToken = errors.New("token is not in a valid format")
    ErrNoBotToken      = errors.New("please specify the token")

    ErrSelfDM = errors.New("can't open a dm channel to yourself")

    ErrInteractionAlreadyReplied = errors.New("you already replied to this interaction")
    ErrInteractionExpired        = errors.New("this interaction has expired")

    ErrChannelNotTypeNews = errors.New("channel type is not 'NEWS'")

    ErrCheckFailed = errors.New("check failed")

    ErrMemberMustBeConnectedToChannel = errors.New("the member must be connected to the channel")

    ErrStickerTypeGuild = errors.New("sticker type must be of type StickerTypeGuild")
)
```

<a name="MentionTypeUser"></a>

```go
var (
    MentionTypeUser            = MentionType{regexp.MustCompile(`<@!?(\d+)>`)}
    MentionTypeRole            = MentionType{regexp.MustCompile(`<@&(\d+)>`)}
    MentionTypeChannel         = MentionType{regexp.MustCompile(`<#(\d+)>`)}
    MentionTypeEmoji           = MentionType{regexp.MustCompile(`<a?:(\w+):(\d+)>`)}
    MentionTypeTimestamp       = MentionType{regexp.MustCompile(`<t:(?P<time>-?\d{1,17})(?::(?P<format>[tTdDfFR]))?>`)}
    MentionTypeSlashCommand    = MentionType{regexp.MustCompile(`</(\w+) ?((\w+)|(\w+ \w+)):(\d+)>`)}
    MentionTypeHere            = MentionType{regexp.MustCompile(`@here`)}
    MentionTypeEveryone        = MentionType{regexp.MustCompile(`@everyone`)}
    MentionTypeGuildNavigation = MentionType{regexp.MustCompile("<id:(browse|customize|guide)>")}
)
```

<a name="DefaultAllowedMentions"></a>DefaultAllowedMentions gives you the default AllowedMentions for a Message

```go
var DefaultAllowedMentions = AllowedMentions{
    Parse:       []AllowedMentionType{AllowedMentionTypeUsers, AllowedMentionTypeRoles, AllowedMentionTypeEveryone},
    Roles:       []snowflake.ID{},
    Users:       []snowflake.ID{},
    RepliedUser: true,
}
```

<a name="EmptyStringBytes"></a>

```go
var EmptyStringBytes = []byte(`""`)
```

<a name="ErrNoTimestampMatch"></a>ErrNoTimestampMatch is returned when no valid Timestamp is found in the Message

```go
var ErrNoTimestampMatch = errors.New("no matching timestamp found in string")
```

<a name="Locales"></a>

```go
var Locales = map[Locale]string{
    LocaleEnglishUS:    "English (United States)",
    LocaleEnglishGB:    "English (Great Britain)",
    LocaleBulgarian:    "Bulgarian",
    LocaleChineseCN:    "Chinese (China)",
    LocaleChineseTW:    "Chinese (Taiwan)",
    LocaleCroatian:     "Croatian",
    LocaleCzech:        "Czech",
    LocaleDanish:       "Danish",
    LocaleDutch:        "Dutch",
    LocaleFinnish:      "Finnish",
    LocaleFrench:       "French",
    LocaleGerman:       "German",
    LocaleGreek:        "Greek",
    LocaleHindi:        "Hindi",
    LocaleHungarian:    "Hungarian",
    LocaleIndonesian:   "Indonesian",
    LocaleItalian:      "Italian",
    LocaleJapanese:     "Japanese",
    LocaleKorean:       "Korean",
    LocaleLithuanian:   "Lithuanian",
    LocaleNorwegian:    "Norwegian",
    LocalePolish:       "Polish",
    LocalePortugueseBR: "Portuguese (Brazil)",
    LocaleRomanian:     "Romanian",
    LocaleRussian:      "Russian",
    LocaleSpanishES:    "Spanish (Spain)",
    LocaleSwedish:      "Swedish",
    LocaleThai:         "Thai",
    LocaleTurkish:      "Turkish",
    LocaleUkrainian:    "Ukrainian",
    LocaleVietnamese:   "Vietnamese",
    LocaleUnknown:      "unknown",
}
```

<a name="AllGuildChannels"></a>
## func [AllGuildChannels](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L153>)

```go
func AllGuildChannels(guildID snowflake.ID) snowflake.ID
```



<a name="AnimatedEmojiMention"></a>
## func [AnimatedEmojiMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L55>)

```go
func AnimatedEmojiMention(id snowflake.ID, name string) string
```



<a name="AuthorizeURL"></a>
## func [AuthorizeURL](<https://github.com/disgoorg/disgo/blob/master/discord/url.go#L46>)

```go
func AuthorizeURL(values QueryValues) string
```

AuthorizeURL returns the OAuth2 authorize url with the given query params

<a name="ChannelMention"></a>
## func [ChannelMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L31>)

```go
func ChannelMention(id snowflake.ID) string
```



<a name="EmojiMention"></a>
## func [EmojiMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L51>)

```go
func EmojiMention(id snowflake.ID, name string) string
```



<a name="FormattedTimestampMention"></a>
## func [FormattedTimestampMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L63>)

```go
func FormattedTimestampMention(timestamp int64, style TimestampStyle) string
```



<a name="HasScope"></a>
## func [HasScope](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L158>)

```go
func HasScope(scope OAuth2Scope, scopes ...OAuth2Scope) bool
```



<a name="InviteURL"></a>
## func [InviteURL](<https://github.com/disgoorg/disgo/blob/master/discord/url.go#L36>)

```go
func InviteURL(code string) string
```

InviteURL formats the invite code as an url

<a name="JoinScopes"></a>
## func [JoinScopes](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L142>)

```go
func JoinScopes(scopes []OAuth2Scope) string
```



<a name="MessageURL"></a>
## func [MessageURL](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L78>)

```go
func MessageURL(guildID snowflake.ID, channelID snowflake.ID, messageID snowflake.ID) string
```



<a name="NavigationBrowseMention"></a>
## func [NavigationBrowseMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L75>)

```go
func NavigationBrowseMention() string
```



<a name="NavigationCustomizeMention"></a>
## func [NavigationCustomizeMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L79>)

```go
func NavigationCustomizeMention() string
```



<a name="NavigationGuideMention"></a>
## func [NavigationGuideMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L83>)

```go
func NavigationGuideMention() string
```



<a name="RoleMention"></a>
## func [RoleMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L47>)

```go
func RoleMention(id snowflake.ID) string
```



<a name="SlashCommandMention"></a>
## func [SlashCommandMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L71>)

```go
func SlashCommandMention(id snowflake.ID, path string) string
```

SlashCommandMention creates a slash command mention. You can also pass a subcommand \(and/or a subcommand group respectively\) to the path.

```
mention := SlashCommandMention(id, "command group subcommand")
```

<a name="TimestampMention"></a>
## func [TimestampMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L59>)

```go
func TimestampMention(timestamp int64) string
```



<a name="UserMention"></a>
## func [UserMention](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L43>)

```go
func UserMention(id snowflake.ID) string
```



<a name="UserTag"></a>
## func [UserTag](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L36>)

```go
func UserTag(username string, discriminator string) string
```

UserTag returns a formatted string of "Username\#Discriminator", falling back to the username if discriminator is "0"

<a name="WebhookURL"></a>
## func [WebhookURL](<https://github.com/disgoorg/disgo/blob/master/discord/url.go#L41>)

```go
func WebhookURL(webhookID snowflake.ID, webhookToken string) string
```

WebhookURL returns the url over which the webhook can be called

<a name="AccessTokenResponse"></a>
## type [AccessTokenResponse](<https://github.com/disgoorg/disgo/blob/master/discord/access_token.go#L11-L20>)

AccessTokenResponse is the response from the OAuth2 exchange endpoint. See https://discord.com/developers/docs/topics/oauth2#authorization-code-grant for more information.

```go
type AccessTokenResponse struct {
    AccessToken  string        `json:"access_token"`
    TokenType    TokenType     `json:"token_type"`
    ExpiresIn    time.Duration `json:"expires_in"`
    RefreshToken string        `json:"refresh_token"`
    Scope        []OAuth2Scope `json:"scope"`

    // Webhook is only present if scopes include the OAuth2ScopeWebhookIncoming
    Webhook *IncomingWebhook `json:"webhook"`
}
```

<a name="AccessTokenResponse.MarshalJSON"></a>
### func \(AccessTokenResponse\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/access_token.go#L40>)

```go
func (e AccessTokenResponse) MarshalJSON() ([]byte, error)
```



<a name="AccessTokenResponse.UnmarshalJSON"></a>
### func \(\*AccessTokenResponse\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/access_token.go#L23>)

```go
func (e *AccessTokenResponse) UnmarshalJSON(data []byte) error
```

UnmarshalJSON implements json.Unmarshaler.

<a name="ActionRowComponent"></a>
## type [ActionRowComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L128>)



```go
type ActionRowComponent []InteractiveComponent
```

<a name="NewActionRow"></a>
### func [NewActionRow](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L124>)

```go
func NewActionRow(components ...InteractiveComponent) ActionRowComponent
```



<a name="ActionRowComponent.AddComponents"></a>
### func \(ActionRowComponent\) [AddComponents](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L215>)

```go
func (c ActionRowComponent) AddComponents(components ...InteractiveComponent) ActionRowComponent
```

AddComponents returns a new ActionRowComponent with the provided Component\(s\) added

<a name="ActionRowComponent.Buttons"></a>
### func \(ActionRowComponent\) [Buttons](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L171>)

```go
func (c ActionRowComponent) Buttons() []ButtonComponent
```

Buttons returns all ButtonComponent\(s\) in the ActionRowComponent

<a name="ActionRowComponent.Components"></a>
### func \(ActionRowComponent\) [Components](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L166>)

```go
func (c ActionRowComponent) Components() []InteractiveComponent
```



<a name="ActionRowComponent.MarshalJSON"></a>
### func \(ActionRowComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L130>)

```go
func (c ActionRowComponent) MarshalJSON() ([]byte, error)
```



<a name="ActionRowComponent.RemoveComponent"></a>
### func \(ActionRowComponent\) [RemoveComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L220>)

```go
func (c ActionRowComponent) RemoveComponent(index int) ActionRowComponent
```

RemoveComponent returns a new ActionRowComponent with the provided Component at the index removed

<a name="ActionRowComponent.SelectMenus"></a>
### func \(ActionRowComponent\) [SelectMenus](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L182>)

```go
func (c ActionRowComponent) SelectMenus() []SelectMenuComponent
```

SelectMenus returns all SelectMenuComponent\(s\) in the ActionRowComponent

<a name="ActionRowComponent.TextInputs"></a>
### func \(ActionRowComponent\) [TextInputs](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L193>)

```go
func (c ActionRowComponent) TextInputs() []TextInputComponent
```

TextInputs returns all TextInputComponent\(s\) in the ActionRowComponent

<a name="ActionRowComponent.Type"></a>
### func \(ActionRowComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L159>)

```go
func (ActionRowComponent) Type() ComponentType
```



<a name="ActionRowComponent.UnmarshalJSON"></a>
### func \(\*ActionRowComponent\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L140>)

```go
func (c *ActionRowComponent) UnmarshalJSON(data []byte) error
```



<a name="ActionRowComponent.UpdateComponent"></a>
### func \(ActionRowComponent\) [UpdateComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L204>)

```go
func (c ActionRowComponent) UpdateComponent(customID string, component InteractiveComponent) ActionRowComponent
```

UpdateComponent returns a new ActionRowComponent with the Component which has the customID replaced

<a name="Activity"></a>
## type [Activity](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L26-L44>)

Activity represents the fields of a user's presence

```go
type Activity struct {
    ID            string              `json:"id"`
    Name          string              `json:"name"`
    Type          ActivityType        `json:"type"`
    URL           *string             `json:"url,omitempty"`
    CreatedAt     time.Time           `json:"created_at"`
    Timestamps    *ActivityTimestamps `json:"timestamps,omitempty"`
    SyncID        *string             `json:"sync_id,omitempty"`
    ApplicationID snowflake.ID        `json:"application_id,omitempty"`
    Details       *string             `json:"details,omitempty"`
    State         *string             `json:"state,omitempty"`
    Emoji         *PartialEmoji       `json:"emoji,omitempty"`
    Party         *ActivityParty      `json:"party,omitempty"`
    Assets        *ActivityAssets     `json:"assets,omitempty"`
    Secrets       *ActivitySecrets    `json:"secrets,omitempty"`
    Instance      *bool               `json:"instance,omitempty"`
    Flags         ActivityFlags       `json:"flags,omitempty"`
    Buttons       []string            `json:"buttons,omitempty"`
}
```

<a name="Activity.MarshalJSON"></a>
### func \(Activity\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L60>)

```go
func (a Activity) MarshalJSON() ([]byte, error)
```



<a name="Activity.UnmarshalJSON"></a>
### func \(\*Activity\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L46>)

```go
func (a *Activity) UnmarshalJSON(data []byte) error
```



<a name="ActivityAssets"></a>
## type [ActivityAssets](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L149-L154>)

ActivityAssets are the images for the presence and hover texts

```go
type ActivityAssets struct {
    LargeImage string `json:"large_image,omitempty"`
    LargeText  string `json:"large_text,omitempty"`
    SmallImage string `json:"small_image,omitempty"`
    SmallText  string `json:"small_text,omitempty"`
}
```

<a name="ActivityButton"></a>
## type [ActivityButton](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L108-L111>)

ActivityButton is a button in an activity

```go
type ActivityButton struct {
    Label string `json:"label"`
    URL   string `json:"url"`
}
```

<a name="ActivityFlags"></a>
## type [ActivityFlags](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L72>)

ActivityFlags add additional information to an activity

```go
type ActivityFlags int
```

<a name="ActivityFlagInstance"></a>Discord's supported ActivityFlags

```go
const (
    ActivityFlagInstance ActivityFlags = 1 << iota
    ActivityFlagJoin
    ActivityFlagSpectate
    ActivityFlagJoinRequest
    ActivityFlagSync
    ActivityFlagPlay
    ActivityFlagPartyPrivacyFriends
    ActivityFlagPartyPrivacyVoiceChannel
    ActivityFlagEmbedded
)
```

<a name="ActivityFlags.Add"></a>
### func \(ActivityFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L88>)

```go
func (f ActivityFlags) Add(bits ...ActivityFlags) ActivityFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="ActivityFlags.Has"></a>
### func \(ActivityFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L98>)

```go
func (f ActivityFlags) Has(bits ...ActivityFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="ActivityFlags.Missing"></a>
### func \(ActivityFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L103>)

```go
func (f ActivityFlags) Missing(bits ...ActivityFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="ActivityFlags.Remove"></a>
### func \(ActivityFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L93>)

```go
func (f ActivityFlags) Remove(bits ...ActivityFlags) ActivityFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="ActivityParty"></a>
## type [ActivityParty](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L143-L146>)

ActivityParty is information about the party of the player

```go
type ActivityParty struct {
    ID   string `json:"id,omitempty"`
    Size [2]int `json:"size,omitempty"`
}
```

<a name="ActivitySecrets"></a>
## type [ActivitySecrets](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L157-L161>)

ActivitySecrets contain secrets for Rich Presence joining and spectating

```go
type ActivitySecrets struct {
    Join     string `json:"join,omitempty"`
    Spectate string `json:"spectate,omitempty"`
    Match    string `json:"match,omitempty"`
}
```

<a name="ActivityTimestamps"></a>
## type [ActivityTimestamps](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L114-L117>)

ActivityTimestamps represents when a user started and ended their activity

```go
type ActivityTimestamps struct {
    Start time.Time
    End   time.Time
}
```

<a name="ActivityTimestamps.MarshalJSON"></a>
### func \(ActivityTimestamps\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L132>)

```go
func (a ActivityTimestamps) MarshalJSON() ([]byte, error)
```



<a name="ActivityTimestamps.UnmarshalJSON"></a>
### func \(\*ActivityTimestamps\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L119>)

```go
func (a *ActivityTimestamps) UnmarshalJSON(data []byte) error
```



<a name="ActivityType"></a>
## type [ActivityType](<https://github.com/disgoorg/disgo/blob/master/discord/activity.go#L13>)

ActivityType represents the status of a user, one of Game, Streaming, Listening, Watching, Custom or Competing

```go
type ActivityType int
```

<a name="ActivityTypeGame"></a>Constants for Activity\(s\)

```go
const (
    ActivityTypeGame ActivityType = iota
    ActivityTypeStreaming
    ActivityTypeListening
    ActivityTypeWatching
    ActivityTypeCustom
    ActivityTypeCompeting
)
```

<a name="AddBan"></a>
## type [AddBan](<https://github.com/disgoorg/disgo/blob/master/discord/ban.go#L12-L14>)

AddBan is used to ban a User \(https://discord.com/developers/docs/resources/guild#create-guild-ban-json-params\)

```go
type AddBan struct {
    DeleteMessageSeconds int `json:"delete_message_seconds,omitempty"`
}
```

<a name="AllowedMentionType"></a>
## type [AllowedMentionType](<https://github.com/disgoorg/disgo/blob/master/discord/allowed_mentions.go#L22>)

AllowedMentionType ?

```go
type AllowedMentionType string
```

<a name="AllowedMentionTypeRoles"></a>All AllowedMentionType\(s\)

```go
const (
    AllowedMentionTypeRoles    AllowedMentionType = "roles"
    AllowedMentionTypeUsers    AllowedMentionType = "users"
    AllowedMentionTypeEveryone AllowedMentionType = "everyone"
)
```

<a name="AllowedMentions"></a>
## type [AllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/allowed_mentions.go#L14-L19>)

AllowedMentions are used for avoiding mentioning users in Message and Interaction

```go
type AllowedMentions struct {
    Parse       []AllowedMentionType `json:"parse"`
    Roles       []snowflake.ID       `json:"roles"`
    Users       []snowflake.ID       `json:"users"`
    RepliedUser bool                 `json:"replied_user"`
}
```

<a name="Application"></a>
## type [Application](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L14-L43>)



```go
type Application struct {
    ID                             snowflake.ID                      `json:"id"`
    Name                           string                            `json:"name"`
    Icon                           *string                           `json:"icon,omitempty"`
    Description                    string                            `json:"description"`
    RPCOrigins                     []string                          `json:"rpc_origins"`
    BotPublic                      bool                              `json:"bot_public"`
    BotRequireCodeGrant            bool                              `json:"bot_require_code_grant"`
    Bot                            *User                             `json:"bot,omitempty"`
    TermsOfServiceURL              *string                           `json:"terms_of_service_url,omitempty"`
    PrivacyPolicyURL               *string                           `json:"privacy_policy_url,omitempty"`
    CustomInstallURL               *string                           `json:"custom_install_url,omitempty"`
    InteractionsEndpointURL        *string                           `json:"interactions_endpoint_url,omitempty"`
    RoleConnectionsVerificationURL *string                           `json:"role_connections_verification_url"`
    InstallParams                  *InstallParams                    `json:"install_params"`
    Tags                           []string                          `json:"tags"`
    Owner                          *User                             `json:"owner,omitempty"`
    Summary                        string                            `json:"summary"`
    VerifyKey                      string                            `json:"verify_key"`
    Team                           *Team                             `json:"team,omitempty"`
    GuildID                        *snowflake.ID                     `json:"guild_id,omitempty"`
    Guild                          *Guild                            `json:"guild,omitempty"`
    PrimarySkuID                   *snowflake.ID                     `json:"primary_sku_id,omitempty"`
    Slug                           *string                           `json:"slug,omitempty"`
    CoverImage                     *string                           `json:"cover_image,omitempty"`
    Flags                          ApplicationFlags                  `json:"flags,omitempty"`
    ApproximateGuildCount          *int                              `json:"approximate_guild_count,omitempty"`
    IntegrationTypes               []ApplicationIntegrationType      `json:"integration_types"`
    IntegrationTypesConfig         ApplicationIntegrationTypesConfig `json:"integration_types_config"`
}
```

<a name="Application.CoverImageURL"></a>
### func \(Application\) [CoverImageURL](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L53>)

```go
func (a Application) CoverImageURL(opts ...CDNOpt) *string
```



<a name="Application.CreatedAt"></a>
### func \(Application\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L61>)

```go
func (a Application) CreatedAt() time.Time
```



<a name="Application.IconURL"></a>
### func \(Application\) [IconURL](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L45>)

```go
func (a Application) IconURL(opts ...CDNOpt) *string
```



<a name="ApplicationCommand"></a>
## type [ApplicationCommand](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L19-L36>)



```go
type ApplicationCommand interface {
    json.Marshaler
    ID() snowflake.ID
    Type() ApplicationCommandType
    ApplicationID() snowflake.ID
    GuildID() *snowflake.ID
    Name() string
    NameLocalizations() map[Locale]string
    NameLocalized() string
    DefaultMemberPermissions() Permissions
    DMPermission() bool
    Version() snowflake.ID
    CreatedAt() time.Time
    NSFW() bool
    IntegrationTypes() []ApplicationIntegrationType
    Contexts() []InteractionContextType
    // contains filtered or unexported methods
}
```

<a name="ApplicationCommandCreate"></a>
## type [ApplicationCommandCreate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L5-L10>)



```go
type ApplicationCommandCreate interface {
    json.Marshaler
    Type() ApplicationCommandType
    CommandName() string
    // contains filtered or unexported methods
}
```

<a name="ApplicationCommandInteraction"></a>
## type [ApplicationCommandInteraction](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L14-L17>)



```go
type ApplicationCommandInteraction struct {
    Data ApplicationCommandInteractionData `json:"data"`
    // contains filtered or unexported fields
}
```

<a name="ApplicationCommandInteraction.MarshalJSON"></a>
### func \(ApplicationCommandInteraction\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L89>)

```go
func (i ApplicationCommandInteraction) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandInteraction.MessageCommandInteractionData"></a>
### func \(ApplicationCommandInteraction\) [MessageCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L128>)

```go
func (i ApplicationCommandInteraction) MessageCommandInteractionData() MessageCommandInteractionData
```



<a name="ApplicationCommandInteraction.SlashCommandInteractionData"></a>
### func \(ApplicationCommandInteraction\) [SlashCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L120>)

```go
func (i ApplicationCommandInteraction) SlashCommandInteractionData() SlashCommandInteractionData
```



<a name="ApplicationCommandInteraction.Type"></a>
### func \(ApplicationCommandInteraction\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L116>)

```go
func (ApplicationCommandInteraction) Type() InteractionType
```



<a name="ApplicationCommandInteraction.UnmarshalJSON"></a>
### func \(\*ApplicationCommandInteraction\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L19>)

```go
func (i *ApplicationCommandInteraction) UnmarshalJSON(data []byte) error
```



<a name="ApplicationCommandInteraction.UserCommandInteractionData"></a>
### func \(ApplicationCommandInteraction\) [UserCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L124>)

```go
func (i ApplicationCommandInteraction) UserCommandInteractionData() UserCommandInteractionData
```



<a name="ApplicationCommandInteractionData"></a>
## type [ApplicationCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L134-L141>)



```go
type ApplicationCommandInteractionData interface {
    Type() ApplicationCommandType
    CommandID() snowflake.ID
    CommandName() string
    GuildID() *snowflake.ID
    // contains filtered or unexported methods
}
```

<a name="ApplicationCommandOption"></a>
## type [ApplicationCommandOption](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L27-L33>)



```go
type ApplicationCommandOption interface {
    json.Marshaler
    Type() ApplicationCommandOptionType
    OptionName() string
    OptionDescription() string
    // contains filtered or unexported methods
}
```

<a name="ApplicationCommandOptionAttachment"></a>
## type [ApplicationCommandOptionAttachment](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L544-L550>)



```go
type ApplicationCommandOptionAttachment struct {
    Name                     string            `json:"name"`
    NameLocalizations        map[Locale]string `json:"name_localizations,omitempty"`
    Description              string            `json:"description"`
    DescriptionLocalizations map[Locale]string `json:"description_localizations,omitempty"`
    Required                 bool              `json:"required,omitempty"`
}
```

<a name="ApplicationCommandOptionAttachment.MarshalJSON"></a>
### func \(ApplicationCommandOptionAttachment\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L552>)

```go
func (o ApplicationCommandOptionAttachment) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionAttachment.OptionDescription"></a>
### func \(ApplicationCommandOptionAttachment\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L567>)

```go
func (o ApplicationCommandOptionAttachment) OptionDescription() string
```



<a name="ApplicationCommandOptionAttachment.OptionName"></a>
### func \(ApplicationCommandOptionAttachment\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L563>)

```go
func (o ApplicationCommandOptionAttachment) OptionName() string
```



<a name="ApplicationCommandOptionAttachment.Type"></a>
### func \(ApplicationCommandOptionAttachment\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L572>)

```go
func (ApplicationCommandOptionAttachment) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionBool"></a>
## type [ApplicationCommandOptionBool](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L289-L295>)



```go
type ApplicationCommandOptionBool struct {
    Name                     string            `json:"name"`
    NameLocalizations        map[Locale]string `json:"name_localizations,omitempty"`
    Description              string            `json:"description"`
    DescriptionLocalizations map[Locale]string `json:"description_localizations,omitempty"`
    Required                 bool              `json:"required,omitempty"`
}
```

<a name="ApplicationCommandOptionBool.MarshalJSON"></a>
### func \(ApplicationCommandOptionBool\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L297>)

```go
func (o ApplicationCommandOptionBool) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionBool.OptionDescription"></a>
### func \(ApplicationCommandOptionBool\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L312>)

```go
func (o ApplicationCommandOptionBool) OptionDescription() string
```



<a name="ApplicationCommandOptionBool.OptionName"></a>
### func \(ApplicationCommandOptionBool\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L308>)

```go
func (o ApplicationCommandOptionBool) OptionName() string
```



<a name="ApplicationCommandOptionBool.Type"></a>
### func \(ApplicationCommandOptionBool\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L317>)

```go
func (ApplicationCommandOptionBool) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionChannel"></a>
## type [ApplicationCommandOptionChannel](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L357-L364>)



```go
type ApplicationCommandOptionChannel struct {
    Name                     string            `json:"name"`
    NameLocalizations        map[Locale]string `json:"name_localizations,omitempty"`
    Description              string            `json:"description"`
    DescriptionLocalizations map[Locale]string `json:"description_localizations,omitempty"`
    Required                 bool              `json:"required,omitempty"`
    ChannelTypes             []ChannelType     `json:"channel_types,omitempty"`
}
```

<a name="ApplicationCommandOptionChannel.MarshalJSON"></a>
### func \(ApplicationCommandOptionChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L366>)

```go
func (o ApplicationCommandOptionChannel) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionChannel.OptionDescription"></a>
### func \(ApplicationCommandOptionChannel\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L381>)

```go
func (o ApplicationCommandOptionChannel) OptionDescription() string
```



<a name="ApplicationCommandOptionChannel.OptionName"></a>
### func \(ApplicationCommandOptionChannel\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L377>)

```go
func (o ApplicationCommandOptionChannel) OptionName() string
```



<a name="ApplicationCommandOptionChannel.Type"></a>
### func \(ApplicationCommandOptionChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L386>)

```go
func (ApplicationCommandOptionChannel) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionChoice"></a>
## type [ApplicationCommandOptionChoice](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L496-L500>)



```go
type ApplicationCommandOptionChoice interface {
    ChoiceName() string
    // contains filtered or unexported methods
}
```

<a name="ApplicationCommandOptionChoiceFloat"></a>
## type [ApplicationCommandOptionChoiceFloat](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L532-L536>)



```go
type ApplicationCommandOptionChoiceFloat struct {
    Name              string            `json:"name"`
    NameLocalizations map[Locale]string `json:"name_localizations,omitempty"`
    Value             float64           `json:"value"`
}
```

<a name="ApplicationCommandOptionChoiceFloat.ChoiceName"></a>
### func \(ApplicationCommandOptionChoiceFloat\) [ChoiceName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L538>)

```go
func (c ApplicationCommandOptionChoiceFloat) ChoiceName() string
```



<a name="ApplicationCommandOptionChoiceInt"></a>
## type [ApplicationCommandOptionChoiceInt](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L504-L508>)



```go
type ApplicationCommandOptionChoiceInt struct {
    Name              string            `json:"name"`
    NameLocalizations map[Locale]string `json:"name_localizations,omitempty"`
    Value             int               `json:"value"`
}
```

<a name="ApplicationCommandOptionChoiceInt.ChoiceName"></a>
### func \(ApplicationCommandOptionChoiceInt\) [ChoiceName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L510>)

```go
func (c ApplicationCommandOptionChoiceInt) ChoiceName() string
```



<a name="ApplicationCommandOptionChoiceString"></a>
## type [ApplicationCommandOptionChoiceString](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L518-L522>)



```go
type ApplicationCommandOptionChoiceString struct {
    Name              string            `json:"name"`
    NameLocalizations map[Locale]string `json:"name_localizations,omitempty"`
    Value             string            `json:"value"`
}
```

<a name="ApplicationCommandOptionChoiceString.ChoiceName"></a>
### func \(ApplicationCommandOptionChoiceString\) [ChoiceName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L524>)

```go
func (c ApplicationCommandOptionChoiceString) ChoiceName() string
```



<a name="ApplicationCommandOptionFloat"></a>
## type [ApplicationCommandOptionFloat](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L460-L470>)



```go
type ApplicationCommandOptionFloat struct {
    Name                     string                                `json:"name"`
    NameLocalizations        map[Locale]string                     `json:"name_localizations,omitempty"`
    Description              string                                `json:"description"`
    DescriptionLocalizations map[Locale]string                     `json:"description_localizations,omitempty"`
    Required                 bool                                  `json:"required,omitempty"`
    Choices                  []ApplicationCommandOptionChoiceFloat `json:"choices,omitempty"`
    Autocomplete             bool                                  `json:"autocomplete,omitempty"`
    MinValue                 *float64                              `json:"min_value,omitempty"`
    MaxValue                 *float64                              `json:"max_value,omitempty"`
}
```

<a name="ApplicationCommandOptionFloat.MarshalJSON"></a>
### func \(ApplicationCommandOptionFloat\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L472>)

```go
func (o ApplicationCommandOptionFloat) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionFloat.OptionDescription"></a>
### func \(ApplicationCommandOptionFloat\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L487>)

```go
func (o ApplicationCommandOptionFloat) OptionDescription() string
```



<a name="ApplicationCommandOptionFloat.OptionName"></a>
### func \(ApplicationCommandOptionFloat\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L483>)

```go
func (o ApplicationCommandOptionFloat) OptionName() string
```



<a name="ApplicationCommandOptionFloat.Type"></a>
### func \(ApplicationCommandOptionFloat\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L492>)

```go
func (ApplicationCommandOptionFloat) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionInt"></a>
## type [ApplicationCommandOptionInt](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L251-L261>)



```go
type ApplicationCommandOptionInt struct {
    Name                     string                              `json:"name"`
    NameLocalizations        map[Locale]string                   `json:"name_localizations,omitempty"`
    Description              string                              `json:"description"`
    DescriptionLocalizations map[Locale]string                   `json:"description_localizations,omitempty"`
    Required                 bool                                `json:"required,omitempty"`
    Choices                  []ApplicationCommandOptionChoiceInt `json:"choices,omitempty"`
    Autocomplete             bool                                `json:"autocomplete,omitempty"`
    MinValue                 *int                                `json:"min_value,omitempty"`
    MaxValue                 *int                                `json:"max_value,omitempty"`
}
```

<a name="ApplicationCommandOptionInt.MarshalJSON"></a>
### func \(ApplicationCommandOptionInt\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L263>)

```go
func (o ApplicationCommandOptionInt) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionInt.OptionDescription"></a>
### func \(ApplicationCommandOptionInt\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L278>)

```go
func (o ApplicationCommandOptionInt) OptionDescription() string
```



<a name="ApplicationCommandOptionInt.OptionName"></a>
### func \(ApplicationCommandOptionInt\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L274>)

```go
func (o ApplicationCommandOptionInt) OptionName() string
```



<a name="ApplicationCommandOptionInt.Type"></a>
### func \(ApplicationCommandOptionInt\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L283>)

```go
func (ApplicationCommandOptionInt) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionMentionable"></a>
## type [ApplicationCommandOptionMentionable](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L426-L432>)



```go
type ApplicationCommandOptionMentionable struct {
    Name                     string            `json:"name"`
    NameLocalizations        map[Locale]string `json:"name_localizations,omitempty"`
    Description              string            `json:"description"`
    DescriptionLocalizations map[Locale]string `json:"description_localizations,omitempty"`
    Required                 bool              `json:"required,omitempty"`
}
```

<a name="ApplicationCommandOptionMentionable.MarshalJSON"></a>
### func \(ApplicationCommandOptionMentionable\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L434>)

```go
func (o ApplicationCommandOptionMentionable) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionMentionable.OptionDescription"></a>
### func \(ApplicationCommandOptionMentionable\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L449>)

```go
func (o ApplicationCommandOptionMentionable) OptionDescription() string
```



<a name="ApplicationCommandOptionMentionable.OptionName"></a>
### func \(ApplicationCommandOptionMentionable\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L445>)

```go
func (o ApplicationCommandOptionMentionable) OptionName() string
```



<a name="ApplicationCommandOptionMentionable.Type"></a>
### func \(ApplicationCommandOptionMentionable\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L454>)

```go
func (ApplicationCommandOptionMentionable) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionRole"></a>
## type [ApplicationCommandOptionRole](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L392-L398>)



```go
type ApplicationCommandOptionRole struct {
    Name                     string            `json:"name"`
    NameLocalizations        map[Locale]string `json:"name_localizations,omitempty"`
    Description              string            `json:"description"`
    DescriptionLocalizations map[Locale]string `json:"description_localizations,omitempty"`
    Required                 bool              `json:"required,omitempty"`
}
```

<a name="ApplicationCommandOptionRole.MarshalJSON"></a>
### func \(ApplicationCommandOptionRole\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L400>)

```go
func (o ApplicationCommandOptionRole) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionRole.OptionDescription"></a>
### func \(ApplicationCommandOptionRole\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L415>)

```go
func (o ApplicationCommandOptionRole) OptionDescription() string
```



<a name="ApplicationCommandOptionRole.OptionName"></a>
### func \(ApplicationCommandOptionRole\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L411>)

```go
func (o ApplicationCommandOptionRole) OptionName() string
```



<a name="ApplicationCommandOptionRole.Type"></a>
### func \(ApplicationCommandOptionRole\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L420>)

```go
func (ApplicationCommandOptionRole) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionString"></a>
## type [ApplicationCommandOptionString](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L213-L223>)



```go
type ApplicationCommandOptionString struct {
    Name                     string                                 `json:"name"`
    NameLocalizations        map[Locale]string                      `json:"name_localizations,omitempty"`
    Description              string                                 `json:"description"`
    DescriptionLocalizations map[Locale]string                      `json:"description_localizations,omitempty"`
    Required                 bool                                   `json:"required,omitempty"`
    Choices                  []ApplicationCommandOptionChoiceString `json:"choices,omitempty"`
    Autocomplete             bool                                   `json:"autocomplete,omitempty"`
    MinLength                *int                                   `json:"min_length,omitempty"`
    MaxLength                *int                                   `json:"max_length,omitempty"`
}
```

<a name="ApplicationCommandOptionString.MarshalJSON"></a>
### func \(ApplicationCommandOptionString\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L225>)

```go
func (o ApplicationCommandOptionString) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionString.OptionDescription"></a>
### func \(ApplicationCommandOptionString\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L240>)

```go
func (o ApplicationCommandOptionString) OptionDescription() string
```



<a name="ApplicationCommandOptionString.OptionName"></a>
### func \(ApplicationCommandOptionString\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L236>)

```go
func (o ApplicationCommandOptionString) OptionName() string
```



<a name="ApplicationCommandOptionString.Type"></a>
### func \(ApplicationCommandOptionString\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L245>)

```go
func (ApplicationCommandOptionString) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionSubCommand"></a>
## type [ApplicationCommandOptionSubCommand](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L123-L129>)



```go
type ApplicationCommandOptionSubCommand struct {
    Name                     string                     `json:"name"`
    NameLocalizations        map[Locale]string          `json:"name_localizations,omitempty"`
    Description              string                     `json:"description"`
    DescriptionLocalizations map[Locale]string          `json:"description_localizations,omitempty"`
    Options                  []ApplicationCommandOption `json:"options,omitempty"`
}
```

<a name="ApplicationCommandOptionSubCommand.MarshalJSON"></a>
### func \(ApplicationCommandOptionSubCommand\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L131>)

```go
func (o ApplicationCommandOptionSubCommand) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionSubCommand.OptionDescription"></a>
### func \(ApplicationCommandOptionSubCommand\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L168>)

```go
func (o ApplicationCommandOptionSubCommand) OptionDescription() string
```



<a name="ApplicationCommandOptionSubCommand.OptionName"></a>
### func \(ApplicationCommandOptionSubCommand\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L164>)

```go
func (o ApplicationCommandOptionSubCommand) OptionName() string
```



<a name="ApplicationCommandOptionSubCommand.Type"></a>
### func \(ApplicationCommandOptionSubCommand\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L173>)

```go
func (ApplicationCommandOptionSubCommand) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionSubCommand.UnmarshalJSON"></a>
### func \(\*ApplicationCommandOptionSubCommand\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L142>)

```go
func (o *ApplicationCommandOptionSubCommand) UnmarshalJSON(data []byte) error
```



<a name="ApplicationCommandOptionSubCommandGroup"></a>
## type [ApplicationCommandOptionSubCommandGroup](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L179-L185>)



```go
type ApplicationCommandOptionSubCommandGroup struct {
    Name                     string                               `json:"name"`
    NameLocalizations        map[Locale]string                    `json:"name_localizations,omitempty"`
    Description              string                               `json:"description"`
    DescriptionLocalizations map[Locale]string                    `json:"description_localizations,omitempty"`
    Options                  []ApplicationCommandOptionSubCommand `json:"options,omitempty"`
}
```

<a name="ApplicationCommandOptionSubCommandGroup.MarshalJSON"></a>
### func \(ApplicationCommandOptionSubCommandGroup\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L187>)

```go
func (o ApplicationCommandOptionSubCommandGroup) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionSubCommandGroup.OptionDescription"></a>
### func \(ApplicationCommandOptionSubCommandGroup\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L202>)

```go
func (o ApplicationCommandOptionSubCommandGroup) OptionDescription() string
```



<a name="ApplicationCommandOptionSubCommandGroup.OptionName"></a>
### func \(ApplicationCommandOptionSubCommandGroup\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L198>)

```go
func (o ApplicationCommandOptionSubCommandGroup) OptionName() string
```



<a name="ApplicationCommandOptionSubCommandGroup.Type"></a>
### func \(ApplicationCommandOptionSubCommandGroup\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L207>)

```go
func (ApplicationCommandOptionSubCommandGroup) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandOptionType"></a>
## type [ApplicationCommandOptionType](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L10>)

ApplicationCommandOptionType specifies the type of the arguments used in ApplicationCommand.Options

```go
type ApplicationCommandOptionType int
```

<a name="ApplicationCommandOptionTypeSubCommand"></a>Constants for each slash command option type

```go
const (
    ApplicationCommandOptionTypeSubCommand ApplicationCommandOptionType = iota + 1
    ApplicationCommandOptionTypeSubCommandGroup
    ApplicationCommandOptionTypeString
    ApplicationCommandOptionTypeInt
    ApplicationCommandOptionTypeBool
    ApplicationCommandOptionTypeUser
    ApplicationCommandOptionTypeChannel
    ApplicationCommandOptionTypeRole
    ApplicationCommandOptionTypeMentionable
    ApplicationCommandOptionTypeFloat
    ApplicationCommandOptionTypeAttachment
)
```

<a name="ApplicationCommandOptionUser"></a>
## type [ApplicationCommandOptionUser](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L323-L329>)



```go
type ApplicationCommandOptionUser struct {
    Name                     string            `json:"name"`
    NameLocalizations        map[Locale]string `json:"name_localizations,omitempty"`
    Description              string            `json:"description"`
    DescriptionLocalizations map[Locale]string `json:"description_localizations,omitempty"`
    Required                 bool              `json:"required,omitempty"`
}
```

<a name="ApplicationCommandOptionUser.MarshalJSON"></a>
### func \(ApplicationCommandOptionUser\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L331>)

```go
func (o ApplicationCommandOptionUser) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandOptionUser.OptionDescription"></a>
### func \(ApplicationCommandOptionUser\) [OptionDescription](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L346>)

```go
func (o ApplicationCommandOptionUser) OptionDescription() string
```



<a name="ApplicationCommandOptionUser.OptionName"></a>
### func \(ApplicationCommandOptionUser\) [OptionName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L342>)

```go
func (o ApplicationCommandOptionUser) OptionName() string
```



<a name="ApplicationCommandOptionUser.Type"></a>
### func \(ApplicationCommandOptionUser\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L351>)

```go
func (ApplicationCommandOptionUser) Type() ApplicationCommandOptionType
```



<a name="ApplicationCommandPermission"></a>
## type [ApplicationCommandPermission](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L102-L107>)

ApplicationCommandPermission holds a User or Role and if they are allowed to use the ApplicationCommand

```go
type ApplicationCommandPermission interface {
    json.Marshaler
    Type() ApplicationCommandPermissionType
    ID() snowflake.ID
    // contains filtered or unexported methods
}
```

<a name="ApplicationCommandPermissionChannel"></a>
## type [ApplicationCommandPermissionChannel](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L157-L160>)



```go
type ApplicationCommandPermissionChannel struct {
    ChannelID  snowflake.ID `json:"id"`
    Permission bool         `json:"permission"`
}
```

<a name="ApplicationCommandPermissionChannel.ID"></a>
### func \(ApplicationCommandPermissionChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L176>)

```go
func (p ApplicationCommandPermissionChannel) ID() snowflake.ID
```



<a name="ApplicationCommandPermissionChannel.MarshalJSON"></a>
### func \(ApplicationCommandPermissionChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L162>)

```go
func (p ApplicationCommandPermissionChannel) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandPermissionChannel.Type"></a>
### func \(ApplicationCommandPermissionChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L173>)

```go
func (ApplicationCommandPermissionChannel) Type() ApplicationCommandPermissionType
```



<a name="ApplicationCommandPermissionRole"></a>
## type [ApplicationCommandPermissionRole](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L109-L112>)



```go
type ApplicationCommandPermissionRole struct {
    RoleID     snowflake.ID `json:"id"`
    Permission bool         `json:"permission"`
}
```

<a name="ApplicationCommandPermissionRole.ID"></a>
### func \(ApplicationCommandPermissionRole\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L128>)

```go
func (p ApplicationCommandPermissionRole) ID() snowflake.ID
```



<a name="ApplicationCommandPermissionRole.MarshalJSON"></a>
### func \(ApplicationCommandPermissionRole\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L114>)

```go
func (p ApplicationCommandPermissionRole) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandPermissionRole.Type"></a>
### func \(ApplicationCommandPermissionRole\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L125>)

```go
func (ApplicationCommandPermissionRole) Type() ApplicationCommandPermissionType
```



<a name="ApplicationCommandPermissionType"></a>
## type [ApplicationCommandPermissionType](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L11>)

ApplicationCommandPermissionType is the type of the ApplicationCommandPermission

```go
type ApplicationCommandPermissionType int
```

<a name="ApplicationCommandPermissionTypeRole"></a>types of ApplicationCommandPermissionType

```go
const (
    ApplicationCommandPermissionTypeRole ApplicationCommandPermissionType = iota + 1
    ApplicationCommandPermissionTypeUser
    ApplicationCommandPermissionTypeChannel
)
```

<a name="ApplicationCommandPermissionUser"></a>
## type [ApplicationCommandPermissionUser](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L131-L134>)



```go
type ApplicationCommandPermissionUser struct {
    UserID     snowflake.ID `json:"id"`
    Permission bool         `json:"permission"`
}
```

<a name="ApplicationCommandPermissionUser.ID"></a>
### func \(ApplicationCommandPermissionUser\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L150>)

```go
func (p ApplicationCommandPermissionUser) ID() snowflake.ID
```



<a name="ApplicationCommandPermissionUser.MarshalJSON"></a>
### func \(ApplicationCommandPermissionUser\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L136>)

```go
func (p ApplicationCommandPermissionUser) MarshalJSON() ([]byte, error)
```



<a name="ApplicationCommandPermissionUser.Type"></a>
### func \(ApplicationCommandPermissionUser\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L147>)

```go
func (ApplicationCommandPermissionUser) Type() ApplicationCommandPermissionType
```



<a name="ApplicationCommandPermissions"></a>
## type [ApplicationCommandPermissions](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L27-L32>)

ApplicationCommandPermissions holds all permissions for an ApplicationCommand

```go
type ApplicationCommandPermissions struct {
    ID            snowflake.ID                   `json:"id"`
    ApplicationID snowflake.ID                   `json:"application_id"`
    GuildID       snowflake.ID                   `json:"guild_id"`
    Permissions   []ApplicationCommandPermission `json:"permissions"`
}
```

<a name="ApplicationCommandPermissions.UnmarshalJSON"></a>
### func \(\*ApplicationCommandPermissions\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L34>)

```go
func (p *ApplicationCommandPermissions) UnmarshalJSON(data []byte) error
```



<a name="ApplicationCommandPermissionsSet"></a>
## type [ApplicationCommandPermissionsSet](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L21-L24>)

ApplicationCommandPermissionsSet is used to bulk overwrite all ApplicationCommandPermissions

```go
type ApplicationCommandPermissionsSet struct {
    ID          snowflake.ID                   `json:"id,omitempty"`
    Permissions []ApplicationCommandPermission `json:"permissions"`
}
```

<a name="ApplicationCommandType"></a>
## type [ApplicationCommandType](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L11>)



```go
type ApplicationCommandType int
```

<a name="ApplicationCommandTypeSlash"></a>

```go
const (
    ApplicationCommandTypeSlash ApplicationCommandType = iota + 1
    ApplicationCommandTypeUser
    ApplicationCommandTypeMessage
)
```

<a name="ApplicationCommandUpdate"></a>
## type [ApplicationCommandUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L5-L10>)



```go
type ApplicationCommandUpdate interface {
    json.Marshaler
    Type() ApplicationCommandType
    CommandName() *string
    // contains filtered or unexported methods
}
```

<a name="ApplicationFlags"></a>
## type [ApplicationFlags](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L183>)

ApplicationFlags \(https://discord.com/developers/docs/resources/application#application-object-application-flags\)

```go
type ApplicationFlags int
```

<a name="ApplicationFlags.Add"></a>
### func \(ApplicationFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L207>)

```go
func (f ApplicationFlags) Add(bits ...ApplicationFlags) ApplicationFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="ApplicationFlags.Has"></a>
### func \(ApplicationFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L217>)

```go
func (f ApplicationFlags) Has(bits ...ApplicationFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="ApplicationFlags.Missing"></a>
### func \(ApplicationFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L222>)

```go
func (f ApplicationFlags) Missing(bits ...ApplicationFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="ApplicationFlags.Remove"></a>
### func \(ApplicationFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L212>)

```go
func (f ApplicationFlags) Remove(bits ...ApplicationFlags) ApplicationFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="ApplicationIntegrationType"></a>
## type [ApplicationIntegrationType](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L268>)



```go
type ApplicationIntegrationType int
```

<a name="ApplicationIntegrationTypeGuildInstall"></a>

```go
const (
    ApplicationIntegrationTypeGuildInstall ApplicationIntegrationType = iota
    ApplicationIntegrationTypeUserInstall
)
```

<a name="ApplicationIntegrationTypeConfiguration"></a>
## type [ApplicationIntegrationTypeConfiguration](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L277-L279>)



```go
type ApplicationIntegrationTypeConfiguration struct {
    OAuth2InstallParams *InstallParams `json:"oauth2_install_params"`
}
```

<a name="ApplicationIntegrationTypesConfig"></a>
## type [ApplicationIntegrationTypesConfig](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L275>)



```go
type ApplicationIntegrationTypesConfig map[ApplicationIntegrationType]ApplicationIntegrationTypeConfiguration
```

<a name="ApplicationRoleConnection"></a>
## type [ApplicationRoleConnection](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L190-L194>)



```go
type ApplicationRoleConnection struct {
    PlatformName     *string           `json:"platform_name"`
    PlatformUsername *string           `json:"platform_username"`
    Metadata         map[string]string `json:"metadata"`
}
```

<a name="ApplicationRoleConnectionMetadata"></a>
## type [ApplicationRoleConnectionMetadata](<https://github.com/disgoorg/disgo/blob/master/discord/application_role_connection_metadata.go#L3-L10>)



```go
type ApplicationRoleConnectionMetadata struct {
    Type                     ApplicationRoleConnectionMetadataType `json:"type"`
    Key                      string                                `json:"key"`
    Name                     string                                `json:"name"`
    NameLocalizations        map[Locale]string                     `json:"name_localizations,omitempty"`
    Description              string                                `json:"description"`
    DescriptionLocalizations map[Locale]string                     `json:"description_localizations,omitempty"`
}
```

<a name="ApplicationRoleConnectionMetadataType"></a>
## type [ApplicationRoleConnectionMetadataType](<https://github.com/disgoorg/disgo/blob/master/discord/application_role_connection_metadata.go#L12>)



```go
type ApplicationRoleConnectionMetadataType int
```

<a name="ApplicationRoleConnectionMetadataTypeIntegerLessThanOrEqual"></a>

```go
const (
    ApplicationRoleConnectionMetadataTypeIntegerLessThanOrEqual ApplicationRoleConnectionMetadataType = iota + 1
    ApplicationRoleConnectionMetadataTypeIntegerGreaterThanOrEqual
    ApplicationRoleConnectionMetadataTypeIntegerEqual
    ApplicationRoleConnectionMetadataTypeIntegerNotEqual
    ApplicationRoleConnectionMetadataTypeDateTimeLessThanOrEqual
    ApplicationRoleConnectionMetadataTypeDateTimeGreaterThanOrEqual
    ApplicationRoleConnectionMetadataTypeBooleanEqual
    ApplicationRoleConnectionMetadataTypeBooleanNotEqual
)
```

<a name="ApplicationRoleConnectionUpdate"></a>
## type [ApplicationRoleConnectionUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L196-L200>)



```go
type ApplicationRoleConnectionUpdate struct {
    PlatformName     *string            `json:"platform_name,omitempty"`
    PlatformUsername *string            `json:"platform_username,omitempty"`
    Metadata         *map[string]string `json:"metadata,omitempty"`
}
```

<a name="ApplicationUpdate"></a>
## type [ApplicationUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L65-L76>)



```go
type ApplicationUpdate struct {
    CustomInstallURL               *string                            `json:"custom_install_url,omitempty"`
    Description                    *string                            `json:"description,omitempty"`
    RoleConnectionsVerificationURL *string                            `json:"role_connections_verification_url,omitempty"`
    InstallParams                  *InstallParams                     `json:"install_params,omitempty"`
    Flags                          *ApplicationFlags                  `json:"flags,omitempty"`
    Icon                           *json.Nullable[Icon]               `json:"icon,omitempty"`
    CoverImage                     *json.Nullable[Icon]               `json:"cover_image,omitempty"`
    InteractionsEndpointURL        *string                            `json:"interactions_endpoint_url,omitempty"`
    Tags                           []string                           `json:"tags,omitempty"`
    IntegrationTypesConfig         *ApplicationIntegrationTypesConfig `json:"integration_types_config,omitempty"`
}
```

<a name="ApplicationWebhook"></a>
## type [ApplicationWebhook](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L254-L259>)



```go
type ApplicationWebhook struct {
    ApplicationID snowflake.ID
    // contains filtered or unexported fields
}
```

<a name="ApplicationWebhook.Avatar"></a>
### func \(ApplicationWebhook\) [Avatar](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L301>)

```go
func (w ApplicationWebhook) Avatar() *string
```



<a name="ApplicationWebhook.AvatarURL"></a>
### func \(ApplicationWebhook\) [AvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L315>)

```go
func (w ApplicationWebhook) AvatarURL(opts ...CDNOpt) *string
```



<a name="ApplicationWebhook.CreatedAt"></a>
### func \(ApplicationWebhook\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L327>)

```go
func (w ApplicationWebhook) CreatedAt() time.Time
```



<a name="ApplicationWebhook.DefaultAvatarURL"></a>
### func \(ApplicationWebhook\) [DefaultAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L323>)

```go
func (w ApplicationWebhook) DefaultAvatarURL(opts ...CDNOpt) string
```



<a name="ApplicationWebhook.EffectiveAvatarURL"></a>
### func \(ApplicationWebhook\) [EffectiveAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L305>)

```go
func (w ApplicationWebhook) EffectiveAvatarURL(opts ...CDNOpt) string
```



<a name="ApplicationWebhook.ID"></a>
### func \(ApplicationWebhook\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L293>)

```go
func (w ApplicationWebhook) ID() snowflake.ID
```



<a name="ApplicationWebhook.MarshalJSON"></a>
### func \(ApplicationWebhook\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L278>)

```go
func (w ApplicationWebhook) MarshalJSON() ([]byte, error)
```



<a name="ApplicationWebhook.Name"></a>
### func \(ApplicationWebhook\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L297>)

```go
func (w ApplicationWebhook) Name() string
```



<a name="ApplicationWebhook.Type"></a>
### func \(ApplicationWebhook\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L289>)

```go
func (ApplicationWebhook) Type() WebhookType
```



<a name="ApplicationWebhook.UnmarshalJSON"></a>
### func \(\*ApplicationWebhook\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L261>)

```go
func (w *ApplicationWebhook) UnmarshalJSON(data []byte) error
```



<a name="Attachment"></a>
## type [Attachment](<https://github.com/disgoorg/disgo/blob/master/discord/attachment.go#L10-L24>)

Attachment is used for files sent in a Message

```go
type Attachment struct {
    ID           snowflake.ID    `json:"id,omitempty"`
    Filename     string          `json:"filename,omitempty"`
    Description  *string         `json:"description,omitempty"`
    ContentType  *string         `json:"content_type,omitempty"`
    Size         int             `json:"size,omitempty"`
    URL          string          `json:"url,omitempty"`
    ProxyURL     string          `json:"proxy_url,omitempty"`
    Height       *int            `json:"height,omitempty"`
    Width        *int            `json:"width,omitempty"`
    Ephemeral    bool            `json:"ephemeral,omitempty"`
    DurationSecs *float64        `json:"duration_secs,omitempty"`
    Waveform     *string         `json:"waveform,omitempty"`
    Flags        AttachmentFlags `json:"flags"`
}
```

<a name="Attachment.CreatedAt"></a>
### func \(Attachment\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/attachment.go#L26>)

```go
func (a Attachment) CreatedAt() time.Time
```



<a name="AttachmentCreate"></a>
## type [AttachmentCreate](<https://github.com/disgoorg/disgo/blob/master/discord/attachment.go#L49-L52>)



```go
type AttachmentCreate struct {
    ID          int    `json:"id"`
    Description string `json:"description"`
}
```

<a name="AttachmentFlags"></a>
## type [AttachmentFlags](<https://github.com/disgoorg/disgo/blob/master/discord/attachment.go#L30>)



```go
type AttachmentFlags int
```

<a name="AttachmentFlagIsClip"></a>

```go
const (
    AttachmentFlagIsClip AttachmentFlags = 1 << iota
    AttachmentFlagIsThumbnail
    AttachmentFlagIsRemix
    AttachmentFlagsNone AttachmentFlags = 0
)
```

<a name="AttachmentKeep"></a>
## type [AttachmentKeep](<https://github.com/disgoorg/disgo/blob/master/discord/attachment.go#L43-L45>)



```go
type AttachmentKeep struct {
    ID snowflake.ID `json:"id,omitempty"`
}
```

<a name="AttachmentUpdate"></a>
## type [AttachmentUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/attachment.go#L39-L41>)



```go
type AttachmentUpdate interface {
    // contains filtered or unexported methods
}
```

<a name="AuditLog"></a>
## type [AuditLog](<https://github.com/disgoorg/disgo/blob/master/discord/audit_log.go#L126-L135>)

AuditLog \(https://discord.com/developers/docs/resources/audit-log\) These are logs of events that occurred, accessible via the Discord

```go
type AuditLog struct {
    ApplicationCommands  []ApplicationCommand  `json:"application_commands"`
    AuditLogEntries      []AuditLogEntry       `json:"audit_log_entries"`
    AutoModerationRules  []AutoModerationRule  `json:"auto_moderation_rules"`
    GuildScheduledEvents []GuildScheduledEvent `json:"guild_scheduled_events"`
    Integrations         []Integration         `json:"integrations"`
    Threads              []GuildThread         `json:"threads"`
    Users                []User                `json:"users"`
    Webhooks             []Webhook             `json:"webhooks"`
}
```

<a name="AuditLog.UnmarshalJSON"></a>
### func \(\*AuditLog\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/audit_log.go#L137>)

```go
func (l *AuditLog) UnmarshalJSON(data []byte) error
```



<a name="AuditLogChangeKey"></a>
## type [AuditLogChangeKey](<https://github.com/disgoorg/disgo/blob/master/discord/audit_log.go#L186-L242>)

AuditLogChangeKey \(https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-key\) is data representing changes values/settings in an audit log.

```go
type AuditLogChangeKey struct {
    Name                        *string                     `json:"name"`
    Description                 *string                     `json:"description"`
    IconHash                    *string                     `json:"icon_hash"`
    SplashHash                  *string                     `json:"splash_hash"`
    DiscoverySplashHash         *string                     `json:"discovery_splash_hash"`
    BannerHash                  *string                     `json:"banner_hash"`
    OwnerID                     *snowflake.ID               `json:"owner_id"`
    Region                      *string                     `json:"region"`
    PreferredLocale             *string                     `json:"preferred_locale"`
    AFKChannelID                *snowflake.ID               `json:"afk_channel_id"`
    AFKTimeout                  *int                        `json:"afk_timeout"`
    RulesChannelID              *snowflake.ID               `json:"rules_channel_id"`
    PublicUpdatesChannelID      *snowflake.ID               `json:"public_updates_channel_id"`
    MFALevel                    *MFALevel                   `json:"mfa_level"`
    VerificationLevel           *VerificationLevel          `json:"verification_level"`
    ExplicitContentFilterLevel  *ExplicitContentFilterLevel `json:"explicit_content_filter"`
    DefaultMessageNotifications *MessageNotificationsLevel  `json:"default_message_notifications"`
    VanityURLCode               *string                     `json:"vanity_url_code"`
    Add                         []PartialRole               `json:"$add"`
    Remove                      []PartialRole               `json:"$remove"`
    PruneDeleteDays             *int                        `json:"prune_delete_days"`
    WidgetEnabled               *bool                       `json:"widget_enabled"`
    WidgetChannelID             *string                     `json:"widget_channel_id"`
    SystemChannelID             *string                     `json:"system_channel_id"`
    Position                    *int                        `json:"position"`
    Topic                       *string                     `json:"topic"`
    Bitrate                     *int                        `json:"bitrate"`
    PermissionOverwrites        []PermissionOverwrite       `json:"permission_overwrites"`
    NSFW                        *bool                       `json:"nsfw"`
    ApplicationID               *snowflake.ID               `json:"application_id"`
    RateLimitPerUser            *int                        `json:"ratelimit_per_user"`
    Permissions                 *string                     `json:"permissions"`
    Color                       *int                        `json:"color"`
    Hoist                       *bool                       `json:"hoist"`
    Mentionable                 *bool                       `json:"mentionable"`
    Allow                       *Permissions                `json:"allow"`
    Deny                        *Permissions                `json:"deny"`
    Code                        *string                     `json:"code"`
    ChannelID                   *snowflake.ID               `json:"channel_id"`
    InviterID                   *snowflake.ID               `json:"inviter_id"`
    MaxUses                     *int                        `json:"max_uses"`
    Uses                        *int                        `json:"uses"`
    MaxAge                      *string                     `json:"max_age"`
    Temporary                   *bool                       `json:"temporary"`
    Deaf                        *bool                       `json:"deaf"`
    Mute                        *bool                       `json:"mute"`
    Nick                        *string                     `json:"nick"`
    AvatarHash                  *string                     `json:"avatar_hash"`
    ID                          *snowflake.ID               `json:"id"`
    Type                        any                         `json:"type"`
    EnableEmoticons             *bool                       `json:"enable_emoticons"`
    ExpireBehavior              *IntegrationExpireBehavior  `json:"expire_behavior"`
    ExpireGracePeriod           *int                        `json:"expire_grace_period"`
    UserLimit                   *int                        `json:"user_limit"`
    PrivacyLevel                *StagePrivacyLevel          `json:"privacy_level"`
}
```

<a name="AuditLogEntry"></a>
## type [AuditLogEntry](<https://github.com/disgoorg/disgo/blob/master/discord/audit_log.go#L175-L183>)

AuditLogEntry \(https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object\)

```go
type AuditLogEntry struct {
    TargetID   *snowflake.ID              `json:"target_id"`
    Changes    []AuditLogChangeKey        `json:"changes"`
    UserID     snowflake.ID               `json:"user_id"`
    ID         snowflake.ID               `json:"id"`
    ActionType AuditLogEvent              `json:"action_type"`
    Options    *OptionalAuditLogEntryInfo `json:"options"`
    Reason     *string                    `json:"reason"`
}
```

<a name="AuditLogEvent"></a>
## type [AuditLogEvent](<https://github.com/disgoorg/disgo/blob/master/discord/audit_log.go#L9>)

AuditLogEvent is an 8\-bit unsigned integer representing an audit log event.

```go
type AuditLogEvent int
```

<a name="AuditLogEventChannelCreate"></a>AuditLogEventChannelCreate

```go
const (
    AuditLogEventChannelCreate AuditLogEvent = iota + 10
    AuditLogEventChannelUpdate
    AuditLogEventChannelDelete
    AuditLogEventChannelOverwriteCreate
    AuditLogEventChannelOverwriteUpdate
    AuditLogEventChannelOverwriteDelete
)
```

<a name="AuditLogEventMemberKick"></a>AuditLogEventMemberKick

```go
const (
    AuditLogEventMemberKick AuditLogEvent = iota + 20
    AuditLogEventMemberPrune
    AuditLogEventMemberBanAdd
    AuditLogEventMemberBanRemove
    AuditLogEventMemberUpdate
    AuditLogEventMemberRoleUpdate
    AuditLogEventMemberMove
    AuditLogEventMemberDisconnect
    AuditLogEventBotAdd
)
```

<a name="AuditLogEventRoleCreate"></a>AuditLogEventRoleCreate

```go
const (
    AuditLogEventRoleCreate AuditLogEvent = iota + 30
    AuditLogEventRoleUpdate
    AuditLogEventRoleDelete
)
```

<a name="AuditLogEventInviteCreate"></a>AuditLogEventInviteCreate

```go
const (
    AuditLogEventInviteCreate AuditLogEvent = iota + 40
    AuditLogEventInviteUpdate
    AuditLogEventInviteDelete
)
```

<a name="AuditLogEventWebhookCreate"></a>AuditLogEventWebhookCreate

```go
const (
    AuditLogEventWebhookCreate AuditLogEvent = iota + 50
    AuditLogEventWebhookUpdate
    AuditLogEventWebhookDelete
)
```

<a name="AuditLogEventEmojiCreate"></a>AuditLogEventEmojiCreate

```go
const (
    AuditLogEventEmojiCreate AuditLogEvent = iota + 60
    AuditLogEventEmojiUpdate
    AuditLogEventEmojiDelete
)
```

<a name="AuditLogEventMessageDelete"></a>AuditLogEventMessageDelete

```go
const (
    AuditLogEventMessageDelete AuditLogEvent = iota + 72
    AuditLogEventMessageBulkDelete
    AuditLogEventMessagePin
    AuditLogEventMessageUnpin
)
```

<a name="AuditLogEventIntegrationCreate"></a>AuditLogEventIntegrationCreate

```go
const (
    AuditLogEventIntegrationCreate AuditLogEvent = iota + 80
    AuditLogEventIntegrationUpdate
    AuditLogEventIntegrationDelete
    AuditLogEventStageInstanceCreate
    AuditLogEventStageInstanceUpdate
    AuditLogEventStageInstanceDelete
)
```

<a name="AuditLogEventStickerCreate"></a>AuditLogEventStickerCreate

```go
const (
    AuditLogEventStickerCreate AuditLogEvent = iota + 90
    AuditLogEventStickerUpdate
    AuditLogEventStickerDelete
)
```

<a name="AuditLogGuildScheduledEventCreate"></a>AuditLogGuildScheduledEventCreate

```go
const (
    AuditLogGuildScheduledEventCreate AuditLogEvent = iota + 100
    AuditLogGuildScheduledEventUpdate
    AuditLogGuildScheduledEventDelete
)
```

<a name="AuditLogThreadCreate"></a>AuditLogThreadCreate

```go
const (
    AuditLogThreadCreate AuditLogEvent = iota + 110
    AuditLogThreadUpdate
    AuditLogThreadDelete
)
```

<a name="AuditLogAutoModerationRuleCreate"></a>

```go
const (
    AuditLogAutoModerationRuleCreate AuditLogEvent = iota + 140
    AuditLogAutoModerationRuleUpdate
    AuditLogAutoModerationRuleDelete
    AuditLogAutoModerationBlockMessage
    AuditLogAutoModerationFlagToChannel
    AuditLogAutoModerationUserCommunicationDisabled
)
```

<a name="AuditLogCreatorMonetizationRequestCreated"></a>

```go
const (
    AuditLogCreatorMonetizationRequestCreated AuditLogEvent = iota + 150
    AuditLogCreatorMonetizationTermsAccepted
)
```

<a name="AuditLogApplicationCommandPermissionUpdate"></a>AuditLogApplicationCommandPermissionUpdate ...

```go
const (
    AuditLogApplicationCommandPermissionUpdate AuditLogEvent = 121
)
```

<a name="AuditLogEventGuildUpdate"></a>AuditLogEventGuildUpdate ...

```go
const (
    AuditLogEventGuildUpdate AuditLogEvent = 1
)
```

<a name="AuthorizationInformation"></a>
## type [AuthorizationInformation](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L83-L88>)



```go
type AuthorizationInformation struct {
    Application Application   `json:"application"`
    Scopes      []OAuth2Scope `json:"scopes"`
    Expires     time.Time     `json:"expires"`
    User        *User         `json:"user"`
}
```

<a name="AutoArchiveDuration"></a>
## type [AutoArchiveDuration](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1352>)



```go
type AutoArchiveDuration int
```

<a name="AutoArchiveDuration1h"></a>

```go
const (
    AutoArchiveDuration1h  AutoArchiveDuration = 60
    AutoArchiveDuration24h AutoArchiveDuration = 1440
    AutoArchiveDuration3d  AutoArchiveDuration = 4320
    AutoArchiveDuration1w  AutoArchiveDuration = 10080
)
```

<a name="AutoModerationAction"></a>
## type [AutoModerationAction](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L50-L53>)



```go
type AutoModerationAction struct {
    Type     AutoModerationActionType      `json:"type"`
    Metadata *AutoModerationActionMetadata `json:"metadata,omitempty"`
}
```

<a name="AutoModerationActionMetadata"></a>
## type [AutoModerationActionMetadata](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L55-L59>)



```go
type AutoModerationActionMetadata struct {
    ChannelID       snowflake.ID `json:"channel_id"`
    DurationSeconds int          `json:"duration_seconds"`
    CustomMessage   *string      `json:"custom_message"`
}
```

<a name="AutoModerationActionType"></a>
## type [AutoModerationActionType](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L42>)



```go
type AutoModerationActionType int
```

<a name="AutoModerationActionTypeBlockMessage"></a>

```go
const (
    AutoModerationActionTypeBlockMessage AutoModerationActionType = iota + 1
    AutoModerationActionTypeSendAlertMessage
    AutoModerationActionTypeTimeout
)
```

<a name="AutoModerationEventType"></a>
## type [AutoModerationEventType](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L9>)



```go
type AutoModerationEventType int
```

<a name="AutoModerationEventTypeMessageSend"></a>

```go
const (
    AutoModerationEventTypeMessageSend AutoModerationEventType = iota + 1
)
```

<a name="AutoModerationKeywordPreset"></a>
## type [AutoModerationKeywordPreset](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L34>)



```go
type AutoModerationKeywordPreset int
```

<a name="AutoModerationKeywordPresetProfanity"></a>

```go
const (
    AutoModerationKeywordPresetProfanity AutoModerationKeywordPreset = iota + 1
    AutoModerationKeywordPresetSexualContent
    AutoModerationKeywordPresetSlurs
)
```

<a name="AutoModerationRule"></a>
## type [AutoModerationRule](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L61-L73>)



```go
type AutoModerationRule struct {
    ID              snowflake.ID                  `json:"id"`
    GuildID         snowflake.ID                  `json:"guild_id"`
    Name            string                        `json:"name"`
    CreatorID       snowflake.ID                  `json:"creator_id"`
    EventType       AutoModerationEventType       `json:"event_type"`
    TriggerType     AutoModerationTriggerType     `json:"trigger_type"`
    TriggerMetadata AutoModerationTriggerMetadata `json:"trigger_metadata"`
    Actions         []AutoModerationAction        `json:"actions"`
    Enabled         bool                          `json:"enabled"`
    ExemptRoles     []snowflake.ID                `json:"exempt_roles"`
    ExemptChannels  []snowflake.ID                `json:"exempt_channels"`
}
```

<a name="AutoModerationRule.CreatedAt"></a>
### func \(AutoModerationRule\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L75>)

```go
func (r AutoModerationRule) CreatedAt() time.Time
```



<a name="AutoModerationRuleCreate"></a>
## type [AutoModerationRuleCreate](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L79-L88>)



```go
type AutoModerationRuleCreate struct {
    Name            string                         `json:"name"`
    EventType       AutoModerationEventType        `json:"event_type"`
    TriggerType     AutoModerationTriggerType      `json:"trigger_type"`
    TriggerMetadata *AutoModerationTriggerMetadata `json:"trigger_metadata,omitempty"`
    Actions         []AutoModerationAction         `json:"actions"`
    Enabled         *bool                          `json:"enabled,omitempty"`
    ExemptRoles     []snowflake.ID                 `json:"exempt_roles,omitempty"`
    ExemptChannels  []snowflake.ID                 `json:"exempt_channels,omitempty"`
}
```

<a name="AutoModerationRuleUpdate"></a>
## type [AutoModerationRuleUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L90-L98>)



```go
type AutoModerationRuleUpdate struct {
    Name            *string                        `json:"name,omitempty"`
    EventType       *AutoModerationEventType       `json:"event_type,omitempty"`
    TriggerMetadata *AutoModerationTriggerMetadata `json:"trigger_metadata,omitempty"`
    Actions         *[]AutoModerationAction        `json:"actions,omitempty"`
    Enabled         *bool                          `json:"enabled,omitempty"`
    ExemptRoles     *[]snowflake.ID                `json:"exempt_roles,omitempty"`
    ExemptChannels  *[]snowflake.ID                `json:"exempt_channels,omitempty"`
}
```

<a name="AutoModerationTriggerMetadata"></a>
## type [AutoModerationTriggerMetadata](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L25-L32>)



```go
type AutoModerationTriggerMetadata struct {
    KeywordFilter                []string                      `json:"keyword_filter"`
    RegexPatterns                []string                      `json:"regex_patterns"`
    Presets                      []AutoModerationKeywordPreset `json:"presets"`
    AllowList                    []string                      `json:"allow_list"`
    MentionTotalLimit            int                           `json:"mention_total_limit"`
    MentionRaidProtectionEnabled bool                          `json:"mention_raid_protection_enabled"`
}
```

<a name="AutoModerationTriggerType"></a>
## type [AutoModerationTriggerType](<https://github.com/disgoorg/disgo/blob/master/discord/auto_moderation.go#L15>)



```go
type AutoModerationTriggerType int
```

<a name="AutoModerationTriggerTypeKeyword"></a>

```go
const (
    AutoModerationTriggerTypeKeyword AutoModerationTriggerType = iota + 1

    AutoModerationTriggerTypeSpam
    AutoModerationTriggerTypeKeywordPresent
    AutoModerationTriggerTypeMentionSpam
)
```

<a name="AutocompleteChoice"></a>
## type [AutocompleteChoice](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L48-L52>)



```go
type AutocompleteChoice interface {
    ChoiceName() string
    // contains filtered or unexported methods
}
```

<a name="AutocompleteChoiceFloat"></a>
## type [AutocompleteChoiceFloat](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L78-L82>)



```go
type AutocompleteChoiceFloat struct {
    Name              string            `json:"name"`
    NameLocalizations map[Locale]string `json:"name_localizations,omitempty"`
    Value             float64           `json:"value"`
}
```

<a name="AutocompleteChoiceFloat.ChoiceName"></a>
### func \(AutocompleteChoiceFloat\) [ChoiceName](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L84>)

```go
func (c AutocompleteChoiceFloat) ChoiceName() string
```



<a name="AutocompleteChoiceInt"></a>
## type [AutocompleteChoiceInt](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L66-L70>)



```go
type AutocompleteChoiceInt struct {
    Name              string            `json:"name"`
    NameLocalizations map[Locale]string `json:"name_localizations,omitempty"`
    Value             int               `json:"value"`
}
```

<a name="AutocompleteChoiceInt.ChoiceName"></a>
### func \(AutocompleteChoiceInt\) [ChoiceName](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L72>)

```go
func (c AutocompleteChoiceInt) ChoiceName() string
```



<a name="AutocompleteChoiceString"></a>
## type [AutocompleteChoiceString](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L54-L58>)



```go
type AutocompleteChoiceString struct {
    Name              string            `json:"name"`
    NameLocalizations map[Locale]string `json:"name_localizations,omitempty"`
    Value             string            `json:"value"`
}
```

<a name="AutocompleteChoiceString.ChoiceName"></a>
### func \(AutocompleteChoiceString\) [ChoiceName](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L60>)

```go
func (c AutocompleteChoiceString) ChoiceName() string
```



<a name="AutocompleteInteraction"></a>
## type [AutocompleteInteraction](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L12-L15>)



```go
type AutocompleteInteraction struct {
    Data AutocompleteInteractionData `json:"data"`
    // contains filtered or unexported fields
}
```

<a name="AutocompleteInteraction.MarshalJSON"></a>
### func \(AutocompleteInteraction\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L46>)

```go
func (i AutocompleteInteraction) MarshalJSON() ([]byte, error)
```



<a name="AutocompleteInteraction.Type"></a>
### func \(AutocompleteInteraction\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L73>)

```go
func (AutocompleteInteraction) Type() InteractionType
```



<a name="AutocompleteInteraction.UnmarshalJSON"></a>
### func \(\*AutocompleteInteraction\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L17>)

```go
func (i *AutocompleteInteraction) UnmarshalJSON(data []byte) error
```



<a name="AutocompleteInteractionData"></a>
## type [AutocompleteInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L107-L114>)



```go
type AutocompleteInteractionData struct {
    CommandID           snowflake.ID
    CommandName         string
    SubCommandName      *string
    SubCommandGroupName *string
    GuildID             *snowflake.ID
    Options             map[string]AutocompleteOption
}
```

<a name="AutocompleteInteractionData.All"></a>
### func \(AutocompleteInteractionData\) [All](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L301>)

```go
func (d AutocompleteInteractionData) All() []AutocompleteOption
```



<a name="AutocompleteInteractionData.Bool"></a>
### func \(AutocompleteInteractionData\) [Bool](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L260>)

```go
func (d AutocompleteInteractionData) Bool(name string) bool
```



<a name="AutocompleteInteractionData.CommandPath"></a>
### func \(AutocompleteInteractionData\) [CommandPath](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L193>)

```go
func (d AutocompleteInteractionData) CommandPath() string
```



<a name="AutocompleteInteractionData.Find"></a>
### func \(AutocompleteInteractionData\) [Find](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L317>)

```go
func (d AutocompleteInteractionData) Find(optionFindFunc func(option AutocompleteOption) bool) (AutocompleteOption, bool)
```



<a name="AutocompleteInteractionData.FindAll"></a>
### func \(AutocompleteInteractionData\) [FindAll](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L326>)

```go
func (d AutocompleteInteractionData) FindAll(optionFindFunc func(option AutocompleteOption) bool) []AutocompleteOption
```



<a name="AutocompleteInteractionData.Float"></a>
### func \(AutocompleteInteractionData\) [Float](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L294>)

```go
func (d AutocompleteInteractionData) Float(name string) float64
```



<a name="AutocompleteInteractionData.Focused"></a>
### func \(AutocompleteInteractionData\) [Focused](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L204>)

```go
func (d AutocompleteInteractionData) Focused() AutocompleteOption
```



<a name="AutocompleteInteractionData.GetByType"></a>
### func \(AutocompleteInteractionData\) [GetByType](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L311>)

```go
func (d AutocompleteInteractionData) GetByType(optionType ApplicationCommandOptionType) []AutocompleteOption
```



<a name="AutocompleteInteractionData.Int"></a>
### func \(AutocompleteInteractionData\) [Int](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L243>)

```go
func (d AutocompleteInteractionData) Int(name string) int
```



<a name="AutocompleteInteractionData.MarshalJSON"></a>
### func \(AutocompleteInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L155>)

```go
func (d AutocompleteInteractionData) MarshalJSON() ([]byte, error)
```



<a name="AutocompleteInteractionData.OptBool"></a>
### func \(AutocompleteInteractionData\) [OptBool](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L250>)

```go
func (d AutocompleteInteractionData) OptBool(name string) (bool, bool)
```



<a name="AutocompleteInteractionData.OptFloat"></a>
### func \(AutocompleteInteractionData\) [OptFloat](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L284>)

```go
func (d AutocompleteInteractionData) OptFloat(name string) (float64, bool)
```



<a name="AutocompleteInteractionData.OptInt"></a>
### func \(AutocompleteInteractionData\) [OptInt](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L233>)

```go
func (d AutocompleteInteractionData) OptInt(name string) (int, bool)
```



<a name="AutocompleteInteractionData.OptSnowflake"></a>
### func \(AutocompleteInteractionData\) [OptSnowflake](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L267>)

```go
func (d AutocompleteInteractionData) OptSnowflake(name string) (snowflake.ID, bool)
```



<a name="AutocompleteInteractionData.OptString"></a>
### func \(AutocompleteInteractionData\) [OptString](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L216>)

```go
func (d AutocompleteInteractionData) OptString(name string) (string, bool)
```



<a name="AutocompleteInteractionData.Option"></a>
### func \(AutocompleteInteractionData\) [Option](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L211>)

```go
func (d AutocompleteInteractionData) Option(name string) (AutocompleteOption, bool)
```



<a name="AutocompleteInteractionData.Snowflake"></a>
### func \(AutocompleteInteractionData\) [Snowflake](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L277>)

```go
func (d AutocompleteInteractionData) Snowflake(name string) snowflake.ID
```



<a name="AutocompleteInteractionData.String"></a>
### func \(AutocompleteInteractionData\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L226>)

```go
func (d AutocompleteInteractionData) String(name string) string
```



<a name="AutocompleteInteractionData.UnmarshalJSON"></a>
### func \(\*AutocompleteInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_autocomplete.go#L116>)

```go
func (d *AutocompleteInteractionData) UnmarshalJSON(data []byte) error
```



<a name="AutocompleteOption"></a>
## type [AutocompleteOption](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_autocomplete_option.go#L85-L90>)



```go
type AutocompleteOption struct {
    Name    string                       `json:"name"`
    Type    ApplicationCommandOptionType `json:"type"`
    Value   json.RawMessage              `json:"value"`
    Focused bool                         `json:"focused"`
}
```

<a name="AutocompleteOptionSubCommand"></a>
## type [AutocompleteOptionSubCommand](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_autocomplete_option.go#L57-L62>)



```go
type AutocompleteOptionSubCommand struct {
    Name        string                       `json:"name"`
    Description string                       `json:"description"`
    Type        ApplicationCommandOptionType `json:"type"`
    Options     []AutocompleteOption         `json:"options,omitempty"`
}
```

<a name="AutocompleteOptionSubCommandGroup"></a>
## type [AutocompleteOptionSubCommandGroup](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_autocomplete_option.go#L71-L76>)



```go
type AutocompleteOptionSubCommandGroup struct {
    Name        string                         `json:"name"`
    Description string                         `json:"description"`
    Type        ApplicationCommandOptionType   `json:"type"`
    Options     []AutocompleteOptionSubCommand `json:"options,omitempty"`
}
```

<a name="AutocompleteResult"></a>
## type [AutocompleteResult](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L42-L44>)



```go
type AutocompleteResult struct {
    Choices []AutocompleteChoice `json:"choices"`
}
```

<a name="AvatarDecorationData"></a>
## type [AvatarDecorationData](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L202-L205>)



```go
type AvatarDecorationData struct {
    Asset string       `json:"asset"`
    SkuID snowflake.ID `json:"sku_id"`
}
```

<a name="Ban"></a>
## type [Ban](<https://github.com/disgoorg/disgo/blob/master/discord/ban.go#L6-L9>)

Ban represents a banned User from a Guild \(https://discord.com/developers/docs/resources/guild#ban-object\)

```go
type Ban struct {
    Reason *string `json:"reason,omitempty"`
    User   User    `json:"user"`
}
```

<a name="BotIntegration"></a>
## type [BotIntegration](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L181-L188>)



```go
type BotIntegration struct {
    IntegrationID snowflake.ID           `json:"id"`
    Name          string                 `json:"name"`
    Enabled       bool                   `json:"enabled"`
    Account       IntegrationAccount     `json:"account"`
    Application   IntegrationApplication `json:"application"`
    Scopes        []OAuth2Scope          `json:"scopes"`
}
```

<a name="BotIntegration.CreatedAt"></a>
### func \(BotIntegration\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L209>)

```go
func (i BotIntegration) CreatedAt() time.Time
```



<a name="BotIntegration.ID"></a>
### func \(BotIntegration\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L205>)

```go
func (i BotIntegration) ID() snowflake.ID
```



<a name="BotIntegration.MarshalJSON"></a>
### func \(BotIntegration\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L190>)

```go
func (i BotIntegration) MarshalJSON() ([]byte, error)
```



<a name="BotIntegration.Type"></a>
### func \(BotIntegration\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L201>)

```go
func (BotIntegration) Type() IntegrationType
```



<a name="BulkBan"></a>
## type [BulkBan](<https://github.com/disgoorg/disgo/blob/master/discord/ban.go#L17-L20>)

BulkBan is used to bulk ban Users

```go
type BulkBan struct {
    UserIDs              []snowflake.ID `json:"user_ids"`
    DeleteMessageSeconds int            `json:"delete_message_seconds,omitempty"`
}
```

<a name="BulkBanResult"></a>
## type [BulkBanResult](<https://github.com/disgoorg/disgo/blob/master/discord/ban.go#L23-L26>)

BulkBanResult is the result of a BulkBan request

```go
type BulkBanResult struct {
    BannedUsers []snowflake.ID `json:"banned_users"`
    FailedUsers []snowflake.ID `json:"failed_users"`
}
```

<a name="ButtonComponent"></a>
## type [ButtonComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L279-L286>)



```go
type ButtonComponent struct {
    Style    ButtonStyle     `json:"style"`
    Label    string          `json:"label,omitempty"`
    Emoji    *ComponentEmoji `json:"emoji,omitempty"`
    CustomID string          `json:"custom_id,omitempty"`
    URL      string          `json:"url,omitempty"`
    Disabled bool            `json:"disabled,omitempty"`
}
```

<a name="NewButton"></a>
### func [NewButton](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L240>)

```go
func NewButton(style ButtonStyle, label string, customID string, url string) ButtonComponent
```

NewButton creates a new ButtonComponent with the provided parameters. Link ButtonComponent\(s\) need a URL and other ButtonComponent\(s\) need a customID

<a name="NewDangerButton"></a>
### func [NewDangerButton](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L265>)

```go
func NewDangerButton(label string, customID string) ButtonComponent
```

NewDangerButton creates a new ButtonComponent with ButtonStyleDanger & the provided parameters

<a name="NewLinkButton"></a>
### func [NewLinkButton](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L270>)

```go
func NewLinkButton(label string, url string) ButtonComponent
```

NewLinkButton creates a new link ButtonComponent with ButtonStyleLink & the provided parameters

<a name="NewPrimaryButton"></a>
### func [NewPrimaryButton](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L250>)

```go
func NewPrimaryButton(label string, customID string) ButtonComponent
```

NewPrimaryButton creates a new ButtonComponent with ButtonStylePrimary & the provided parameters

<a name="NewSecondaryButton"></a>
### func [NewSecondaryButton](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L255>)

```go
func NewSecondaryButton(label string, customID string) ButtonComponent
```

NewSecondaryButton creates a new ButtonComponent with ButtonStyleSecondary & the provided parameters

<a name="NewSuccessButton"></a>
### func [NewSuccessButton](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L260>)

```go
func NewSuccessButton(label string, customID string) ButtonComponent
```

NewSuccessButton creates a new ButtonComponent with ButtonStyleSuccess & the provided parameters

<a name="ButtonComponent.AsDisabled"></a>
### func \(ButtonComponent\) [AsDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L352>)

```go
func (c ButtonComponent) AsDisabled() ButtonComponent
```

AsDisabled returns a new ButtonComponent but disabled

<a name="ButtonComponent.AsEnabled"></a>
### func \(ButtonComponent\) [AsEnabled](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L346>)

```go
func (c ButtonComponent) AsEnabled() ButtonComponent
```

AsEnabled returns a new ButtonComponent but enabled

<a name="ButtonComponent.ID"></a>
### func \(ButtonComponent\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L303>)

```go
func (c ButtonComponent) ID() string
```



<a name="ButtonComponent.MarshalJSON"></a>
### func \(ButtonComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L288>)

```go
func (c ButtonComponent) MarshalJSON() ([]byte, error)
```



<a name="ButtonComponent.SetID"></a>
### func \(ButtonComponent\) [SetID](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L307>)

```go
func (c ButtonComponent) SetID(id string) InteractiveComponent
```



<a name="ButtonComponent.Type"></a>
### func \(ButtonComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L299>)

```go
func (ButtonComponent) Type() ComponentType
```



<a name="ButtonComponent.WithCustomID"></a>
### func \(ButtonComponent\) [WithCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L334>)

```go
func (c ButtonComponent) WithCustomID(customID string) ButtonComponent
```

WithCustomID returns a new ButtonComponent with the provided custom id

<a name="ButtonComponent.WithDisabled"></a>
### func \(ButtonComponent\) [WithDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L358>)

```go
func (c ButtonComponent) WithDisabled(disabled bool) ButtonComponent
```

WithDisabled returns a new ButtonComponent but disabled/enabled

<a name="ButtonComponent.WithEmoji"></a>
### func \(ButtonComponent\) [WithEmoji](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L328>)

```go
func (c ButtonComponent) WithEmoji(emoji ComponentEmoji) ButtonComponent
```

WithEmoji returns a new ButtonComponent with the provided Emoji

<a name="ButtonComponent.WithLabel"></a>
### func \(ButtonComponent\) [WithLabel](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L322>)

```go
func (c ButtonComponent) WithLabel(label string) ButtonComponent
```

WithLabel returns a new ButtonComponent with the provided label

<a name="ButtonComponent.WithStyle"></a>
### func \(ButtonComponent\) [WithStyle](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L316>)

```go
func (c ButtonComponent) WithStyle(style ButtonStyle) ButtonComponent
```

WithStyle returns a new ButtonComponent with the provided style

<a name="ButtonComponent.WithURL"></a>
### func \(ButtonComponent\) [WithURL](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L340>)

```go
func (c ButtonComponent) WithURL(url string) ButtonComponent
```

WithURL returns a new ButtonComponent with the provided URL

<a name="ButtonInteractionData"></a>
## type [ButtonInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L176-L178>)



```go
type ButtonInteractionData struct {
    // contains filtered or unexported fields
}
```

<a name="ButtonInteractionData.CustomID"></a>
### func \(ButtonInteractionData\) [CustomID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L199>)

```go
func (d ButtonInteractionData) CustomID() string
```



<a name="ButtonInteractionData.MarshalJSON"></a>
### func \(\*ButtonInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L189>)

```go
func (d *ButtonInteractionData) MarshalJSON() ([]byte, error)
```



<a name="ButtonInteractionData.Type"></a>
### func \(ButtonInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L195>)

```go
func (ButtonInteractionData) Type() ComponentType
```



<a name="ButtonInteractionData.UnmarshalJSON"></a>
### func \(\*ButtonInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L180>)

```go
func (d *ButtonInteractionData) UnmarshalJSON(data []byte) error
```



<a name="ButtonStyle"></a>
## type [ButtonStyle](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L228>)

ButtonStyle defines how the ButtonComponent looks like \(https://discord.com/assets/7bb017ce52cfd6575e21c058feb3883b.png\)

```go
type ButtonStyle int
```

<a name="ButtonStylePrimary"></a>Supported ButtonStyle\(s\)

```go
const (
    ButtonStylePrimary ButtonStyle = iota + 1
    ButtonStyleSecondary
    ButtonStyleSuccess
    ButtonStyleDanger
    ButtonStyleLink
)
```

<a name="CDNConfig"></a>
## type [CDNConfig](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L111-L114>)



```go
type CDNConfig struct {
    Format FileFormat
    Values QueryValues
}
```

<a name="DefaultCDNConfig"></a>
### func [DefaultCDNConfig](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L104>)

```go
func DefaultCDNConfig() *CDNConfig
```



<a name="CDNConfig.Apply"></a>
### func \(\*CDNConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L117>)

```go
func (c *CDNConfig) Apply(opts []CDNOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="CDNEndpoint"></a>
## type [CDNEndpoint](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L85-L88>)



```go
type CDNEndpoint struct {
    Route   string
    Formats []FileFormat
}
```

<a name="NewCDN"></a>
### func [NewCDN](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L78>)

```go
func NewCDN(route string, fileFormats ...FileFormat) *CDNEndpoint
```



<a name="CDNEndpoint.URL"></a>
### func \(CDNEndpoint\) [URL](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L90>)

```go
func (e CDNEndpoint) URL(format FileFormat, values QueryValues, params ...any) string
```



<a name="CDNOpt"></a>
## type [CDNOpt](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L123>)



```go
type CDNOpt func(config *CDNConfig)
```

<a name="WithFormat"></a>
### func [WithFormat](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L131>)

```go
func WithFormat(format FileFormat) CDNOpt
```



<a name="WithSize"></a>
### func [WithSize](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L125>)

```go
func WithSize(size int) CDNOpt
```



<a name="Channel"></a>
## type [Channel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L68-L85>)



```go
type Channel interface {
    json.Marshaler
    fmt.Stringer

    // Type returns the ChannelType of the Channel.
    Type() ChannelType

    // ID returns the Snowflake ID of the Channel.
    ID() snowflake.ID

    // Name returns the name of the Channel.
    Name() string

    // CreatedAt returns the creation time of the Channel.
    CreatedAt() time.Time
    // contains filtered or unexported methods
}
```

<a name="ChannelCreate"></a>
## type [ChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L8-L12>)



```go
type ChannelCreate interface {
    json.Marshaler
    Type() ChannelType
    // contains filtered or unexported methods
}
```

<a name="ChannelFlags"></a>
## type [ChannelFlags](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L37>)



```go
type ChannelFlags int
```

<a name="ChannelFlagPinned"></a>

```go
const (
    ChannelFlagPinned ChannelFlags = 1 << (iota + 1)

    ChannelFlagRequireTag
    ChannelFlagHideMediaDownloadOptions ChannelFlags = 1 << 15
    ChannelFlagsNone                    ChannelFlags = 0
)
```

<a name="ChannelFlags.Add"></a>
### func \(ChannelFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L49>)

```go
func (f ChannelFlags) Add(bits ...ChannelFlags) ChannelFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="ChannelFlags.Has"></a>
### func \(ChannelFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L59>)

```go
func (f ChannelFlags) Has(bits ...ChannelFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="ChannelFlags.Missing"></a>
### func \(ChannelFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L64>)

```go
func (f ChannelFlags) Missing(bits ...ChannelFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="ChannelFlags.Remove"></a>
### func \(ChannelFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L54>)

```go
func (f ChannelFlags) Remove(bits ...ChannelFlags) ChannelFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="ChannelFollowerWebhook"></a>
## type [ChannelFollowerWebhook](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L168-L177>)



```go
type ChannelFollowerWebhook struct {
    ChannelID     snowflake.ID         `json:"channel_id"`
    GuildID       snowflake.ID         `json:"guild_id"`
    SourceGuild   WebhookSourceGuild   `json:"source_guild"`
    SourceChannel WebhookSourceChannel `json:"source_channel"`
    User          User                 `json:"user"`
    // contains filtered or unexported fields
}
```

<a name="ChannelFollowerWebhook.Avatar"></a>
### func \(ChannelFollowerWebhook\) [Avatar](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L220>)

```go
func (w ChannelFollowerWebhook) Avatar() *string
```



<a name="ChannelFollowerWebhook.AvatarURL"></a>
### func \(ChannelFollowerWebhook\) [AvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L234>)

```go
func (w ChannelFollowerWebhook) AvatarURL(opts ...CDNOpt) *string
```



<a name="ChannelFollowerWebhook.CreatedAt"></a>
### func \(ChannelFollowerWebhook\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L246>)

```go
func (w ChannelFollowerWebhook) CreatedAt() time.Time
```



<a name="ChannelFollowerWebhook.DefaultAvatarURL"></a>
### func \(ChannelFollowerWebhook\) [DefaultAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L242>)

```go
func (w ChannelFollowerWebhook) DefaultAvatarURL(opts ...CDNOpt) string
```



<a name="ChannelFollowerWebhook.EffectiveAvatarURL"></a>
### func \(ChannelFollowerWebhook\) [EffectiveAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L224>)

```go
func (w ChannelFollowerWebhook) EffectiveAvatarURL(opts ...CDNOpt) string
```



<a name="ChannelFollowerWebhook.ID"></a>
### func \(ChannelFollowerWebhook\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L212>)

```go
func (w ChannelFollowerWebhook) ID() snowflake.ID
```



<a name="ChannelFollowerWebhook.MarshalJSON"></a>
### func \(ChannelFollowerWebhook\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L197>)

```go
func (w ChannelFollowerWebhook) MarshalJSON() ([]byte, error)
```



<a name="ChannelFollowerWebhook.Name"></a>
### func \(ChannelFollowerWebhook\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L216>)

```go
func (w ChannelFollowerWebhook) Name() string
```



<a name="ChannelFollowerWebhook.Type"></a>
### func \(ChannelFollowerWebhook\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L208>)

```go
func (ChannelFollowerWebhook) Type() WebhookType
```



<a name="ChannelFollowerWebhook.UnmarshalJSON"></a>
### func \(\*ChannelFollowerWebhook\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L179>)

```go
func (w *ChannelFollowerWebhook) UnmarshalJSON(data []byte) error
```



<a name="ChannelSelectMenuComponent"></a>
## type [ChannelSelectMenuComponent](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L527-L535>)



```go
type ChannelSelectMenuComponent struct {
    CustomID      string                   `json:"custom_id"`
    Placeholder   string                   `json:"placeholder,omitempty"`
    DefaultValues []SelectMenuDefaultValue `json:"default_values,omitempty"`
    MinValues     *int                     `json:"min_values,omitempty"`
    MaxValues     int                      `json:"max_values,omitempty"`
    Disabled      bool                     `json:"disabled,omitempty"`
    ChannelTypes  []ChannelType            `json:"channel_types,omitempty"`
}
```

<a name="NewChannelSelectMenu"></a>
### func [NewChannelSelectMenu](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L520>)

```go
func NewChannelSelectMenu(customID string, placeholder string) ChannelSelectMenuComponent
```

NewChannelSelectMenu builds a new SelectMenuComponent from the provided values

<a name="ChannelSelectMenuComponent.AddDefaultValue"></a>
### func \(ChannelSelectMenuComponent\) [AddDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L619>)

```go
func (c ChannelSelectMenuComponent) AddDefaultValue(defaultValue snowflake.ID) ChannelSelectMenuComponent
```

AddDefaultValue returns a new ChannelSelectMenuComponent with the provided default value added

<a name="ChannelSelectMenuComponent.AsDisabled"></a>
### func \(ChannelSelectMenuComponent\) [AsDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L591>)

```go
func (c ChannelSelectMenuComponent) AsDisabled() ChannelSelectMenuComponent
```

AsDisabled returns a new ChannelSelectMenuComponent but disabled

<a name="ChannelSelectMenuComponent.AsEnabled"></a>
### func \(ChannelSelectMenuComponent\) [AsEnabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L585>)

```go
func (c ChannelSelectMenuComponent) AsEnabled() ChannelSelectMenuComponent
```

AsEnabled returns a new ChannelSelectMenuComponent but enabled

<a name="ChannelSelectMenuComponent.ID"></a>
### func \(ChannelSelectMenuComponent\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L552>)

```go
func (c ChannelSelectMenuComponent) ID() string
```



<a name="ChannelSelectMenuComponent.MarshalJSON"></a>
### func \(ChannelSelectMenuComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L537>)

```go
func (c ChannelSelectMenuComponent) MarshalJSON() ([]byte, error)
```



<a name="ChannelSelectMenuComponent.RemoveDefaultValue"></a>
### func \(ChannelSelectMenuComponent\) [RemoveDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L625>)

```go
func (c ChannelSelectMenuComponent) RemoveDefaultValue(index int) ChannelSelectMenuComponent
```

RemoveDefaultValue returns a new ChannelSelectMenuComponent with the provided default value at the index removed

<a name="ChannelSelectMenuComponent.SetDefaultValues"></a>
### func \(ChannelSelectMenuComponent\) [SetDefaultValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L609>)

```go
func (c ChannelSelectMenuComponent) SetDefaultValues(defaultValues ...snowflake.ID) ChannelSelectMenuComponent
```

SetDefaultValues returns a new ChannelSelectMenuComponent with the provided default values

<a name="ChannelSelectMenuComponent.Type"></a>
### func \(ChannelSelectMenuComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L548>)

```go
func (ChannelSelectMenuComponent) Type() ComponentType
```



<a name="ChannelSelectMenuComponent.WithChannelTypes"></a>
### func \(ChannelSelectMenuComponent\) [WithChannelTypes](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L603>)

```go
func (c ChannelSelectMenuComponent) WithChannelTypes(channelTypes ...ChannelType) ChannelSelectMenuComponent
```

WithChannelTypes returns a new ChannelSelectMenuComponent with the provided channelTypes

<a name="ChannelSelectMenuComponent.WithCustomID"></a>
### func \(ChannelSelectMenuComponent\) [WithCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L561>)

```go
func (c ChannelSelectMenuComponent) WithCustomID(customID string) ChannelSelectMenuComponent
```

WithCustomID returns a new ChannelSelectMenuComponent with the provided customID

<a name="ChannelSelectMenuComponent.WithDisabled"></a>
### func \(ChannelSelectMenuComponent\) [WithDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L597>)

```go
func (c ChannelSelectMenuComponent) WithDisabled(disabled bool) ChannelSelectMenuComponent
```

WithDisabled returns a new ChannelSelectMenuComponent with the provided disabled

<a name="ChannelSelectMenuComponent.WithMaxValues"></a>
### func \(ChannelSelectMenuComponent\) [WithMaxValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L579>)

```go
func (c ChannelSelectMenuComponent) WithMaxValues(maxValue int) ChannelSelectMenuComponent
```

WithMaxValues returns a new ChannelSelectMenuComponent with the provided maxValue

<a name="ChannelSelectMenuComponent.WithMinValues"></a>
### func \(ChannelSelectMenuComponent\) [WithMinValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L573>)

```go
func (c ChannelSelectMenuComponent) WithMinValues(minValue int) ChannelSelectMenuComponent
```

WithMinValues returns a new ChannelSelectMenuComponent with the provided minValue

<a name="ChannelSelectMenuComponent.WithPlaceholder"></a>
### func \(ChannelSelectMenuComponent\) [WithPlaceholder](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L567>)

```go
func (c ChannelSelectMenuComponent) WithPlaceholder(placeholder string) ChannelSelectMenuComponent
```

WithPlaceholder returns a new ChannelSelectMenuComponent with the provided placeholder

<a name="ChannelSelectMenuInteractionData"></a>
## type [ChannelSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L468-L472>)



```go
type ChannelSelectMenuInteractionData struct {
    Resolved ChannelSelectMenuResolved `json:"resolved"`
    Values   []snowflake.ID            `json:"values"`
    // contains filtered or unexported fields
}
```

<a name="ChannelSelectMenuInteractionData.Channels"></a>
### func \(ChannelSelectMenuInteractionData\) [Channels](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L500>)

```go
func (d ChannelSelectMenuInteractionData) Channels() []ResolvedChannel
```



<a name="ChannelSelectMenuInteractionData.CustomID"></a>
### func \(ChannelSelectMenuInteractionData\) [CustomID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L514>)

```go
func (d ChannelSelectMenuInteractionData) CustomID() string
```



<a name="ChannelSelectMenuInteractionData.MarshalJSON"></a>
### func \(ChannelSelectMenuInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L489>)

```go
func (d ChannelSelectMenuInteractionData) MarshalJSON() ([]byte, error)
```



<a name="ChannelSelectMenuInteractionData.Type"></a>
### func \(ChannelSelectMenuInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L510>)

```go
func (ChannelSelectMenuInteractionData) Type() ComponentType
```



<a name="ChannelSelectMenuInteractionData.UnmarshalJSON"></a>
### func \(\*ChannelSelectMenuInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L478>)

```go
func (d *ChannelSelectMenuInteractionData) UnmarshalJSON(data []byte) error
```



<a name="ChannelSelectMenuResolved"></a>
## type [ChannelSelectMenuResolved](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L474-L476>)



```go
type ChannelSelectMenuResolved struct {
    Channels map[snowflake.ID]ResolvedChannel `json:"channels"`
}
```

<a name="ChannelTag"></a>
## type [ChannelTag](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1324-L1330>)



```go
type ChannelTag struct {
    ID        snowflake.ID  `json:"id"`
    Name      string        `json:"name"`
    Moderated bool          `json:"moderated"`
    EmojiID   *snowflake.ID `json:"emoji_id"`
    EmojiName *string       `json:"emoji_name"`
}
```

<a name="ChannelType"></a>
## type [ChannelType](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L14>)

ChannelType for interacting with discord's channels

```go
type ChannelType int
```

<a name="ChannelTypeGuildText"></a>Channel constants

```go
const (
    ChannelTypeGuildText ChannelType = iota
    ChannelTypeDM
    ChannelTypeGuildVoice
    ChannelTypeGroupDM
    ChannelTypeGuildCategory
    ChannelTypeGuildNews

    ChannelTypeGuildNewsThread
    ChannelTypeGuildPublicThread
    ChannelTypeGuildPrivateThread
    ChannelTypeGuildStageVoice
    ChannelTypeGuildDirectory
    ChannelTypeGuildForum
    ChannelTypeGuildMedia
)
```

<a name="ChannelUpdate"></a>
## type [ChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L8-L10>)



```go
type ChannelUpdate interface {
    // contains filtered or unexported methods
}
```

<a name="ClientStatus"></a>
## type [ClientStatus](<https://github.com/disgoorg/disgo/blob/master/discord/presence.go#L32-L36>)

ClientStatus \(https://discord.com/developers/docs/topics/gateway#client-status-object\)

```go
type ClientStatus struct {
    Desktop OnlineStatus `json:"desktop,omitempty"`
    Mobile  OnlineStatus `json:"mobile,omitempty"`
    Web     OnlineStatus `json:"web,omitempty"`
}
```

<a name="Component"></a>
## type [Component](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L25-L29>)



```go
type Component interface {
    json.Marshaler
    Type() ComponentType
    // contains filtered or unexported methods
}
```

<a name="ComponentEmoji"></a>
## type [ComponentEmoji](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L113-L117>)



```go
type ComponentEmoji struct {
    ID       snowflake.ID `json:"id,omitempty"`
    Name     string       `json:"name,omitempty"`
    Animated bool         `json:"animated,omitempty"`
}
```

<a name="ComponentInteraction"></a>
## type [ComponentInteraction](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L14-L18>)



```go
type ComponentInteraction struct {
    Data    ComponentInteractionData `json:"data"`
    Message Message                  `json:"message"`
    // contains filtered or unexported fields
}
```

<a name="ComponentInteraction.ButtonInteractionData"></a>
### func \(ComponentInteraction\) [ButtonInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L134>)

```go
func (i ComponentInteraction) ButtonInteractionData() ButtonInteractionData
```



<a name="ComponentInteraction.ChannelSelectMenuInteractionData"></a>
### func \(ComponentInteraction\) [ChannelSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L158>)

```go
func (i ComponentInteraction) ChannelSelectMenuInteractionData() ChannelSelectMenuInteractionData
```



<a name="ComponentInteraction.MarshalJSON"></a>
### func \(ComponentInteraction\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L101>)

```go
func (i ComponentInteraction) MarshalJSON() ([]byte, error)
```



<a name="ComponentInteraction.MentionableSelectMenuInteractionData"></a>
### func \(ComponentInteraction\) [MentionableSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L154>)

```go
func (i ComponentInteraction) MentionableSelectMenuInteractionData() MentionableSelectMenuInteractionData
```



<a name="ComponentInteraction.RoleSelectMenuInteractionData"></a>
### func \(ComponentInteraction\) [RoleSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L150>)

```go
func (i ComponentInteraction) RoleSelectMenuInteractionData() RoleSelectMenuInteractionData
```



<a name="ComponentInteraction.SelectMenuInteractionData"></a>
### func \(ComponentInteraction\) [SelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L138>)

```go
func (i ComponentInteraction) SelectMenuInteractionData() SelectMenuInteractionData
```



<a name="ComponentInteraction.StringSelectMenuInteractionData"></a>
### func \(ComponentInteraction\) [StringSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L142>)

```go
func (i ComponentInteraction) StringSelectMenuInteractionData() StringSelectMenuInteractionData
```



<a name="ComponentInteraction.Type"></a>
### func \(ComponentInteraction\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L130>)

```go
func (ComponentInteraction) Type() InteractionType
```



<a name="ComponentInteraction.UnmarshalJSON"></a>
### func \(\*ComponentInteraction\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L20>)

```go
func (i *ComponentInteraction) UnmarshalJSON(data []byte) error
```



<a name="ComponentInteraction.UserSelectMenuInteractionData"></a>
### func \(ComponentInteraction\) [UserSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L146>)

```go
func (i ComponentInteraction) UserSelectMenuInteractionData() UserSelectMenuInteractionData
```



<a name="ComponentInteractionData"></a>
## type [ComponentInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L164-L169>)



```go
type ComponentInteractionData interface {
    Type() ComponentType
    CustomID() string
    // contains filtered or unexported methods
}
```

<a name="ComponentType"></a>
## type [ComponentType](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L11>)

ComponentType defines different Component\(s\)

```go
type ComponentType int
```

<a name="ComponentTypeActionRow"></a>Supported ComponentType\(s\)

```go
const (
    ComponentTypeActionRow ComponentType = iota + 1
    ComponentTypeButton
    ComponentTypeStringSelectMenu
    ComponentTypeTextInput
    ComponentTypeUserSelectMenu
    ComponentTypeRoleSelectMenu
    ComponentTypeMentionableSelectMenu
    ComponentTypeChannelSelectMenu
)
```

<a name="Connection"></a>
## type [Connection](<https://github.com/disgoorg/disgo/blob/master/discord/connection.go#L3-L13>)



```go
type Connection struct {
    ID           string         `json:"id"`
    Name         string         `json:"name"`
    Type         ConnectionType `json:"type"`
    Revoked      bool           `json:"revoked,omitempty"`
    Integrations []Integration  `json:"integrations,omitempty"`
    Verified     bool           `json:"verified"`
    FriendSync   bool           `json:"friend_sync"`
    ShowActivity bool           `json:"show_activity"`
    Visibility   VisibilityType `json:"visibility"`
}
```

<a name="ConnectionType"></a>
## type [ConnectionType](<https://github.com/disgoorg/disgo/blob/master/discord/connection.go#L15>)



```go
type ConnectionType string
```

<a name="ConnectionTypeBattleNet"></a>

```go
const (
    ConnectionTypeBattleNet          ConnectionType = "battlenet"
    ConnectionTypeBungie             ConnectionType = "bungie"
    ConnectionTypeEbay               ConnectionType = "ebay"
    ConnectionTypeEpicGames          ConnectionType = "epicgames"
    ConnectionTypeFacebook           ConnectionType = "facebook"
    ConnectionTypeGitHub             ConnectionType = "github"
    ConnectionTypeInstagram          ConnectionType = "instagram"
    ConnectionTypeLeagueOfLegends    ConnectionType = "leagueoflegends"
    ConnectionTypePayPal             ConnectionType = "paypal"
    ConnectionTypePlayStationNetwork ConnectionType = "playstation"
    ConnectionTypeReddit             ConnectionType = "reddit"
    ConnectionTypeRiotGames          ConnectionType = "riotgames"
    ConnectionTypeSpotify            ConnectionType = "spotify"
    ConnectionTypeSkype              ConnectionType = "skype"
    ConnectionTypeSteam              ConnectionType = "steam"
    ConnectionTypeTikTok             ConnectionType = "tiktok"
    ConnectionTypeTwitch             ConnectionType = "twitch"
    ConnectionTypeTwitter            ConnectionType = "twitter"
    ConnectionTypeXbox               ConnectionType = "xbox"
    ConnectionTypeYouTube            ConnectionType = "youtube"
)
```

<a name="ContainerComponent"></a>
## type [ContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L31-L35>)



```go
type ContainerComponent interface {
    Component
    Components() []InteractiveComponent
    // contains filtered or unexported methods
}
```

<a name="ContextCommandInteractionData"></a>
## type [ContextCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L507-L512>)



```go
type ContextCommandInteractionData interface {
    ApplicationCommandInteractionData
    TargetID() snowflake.ID
    // contains filtered or unexported methods
}
```

<a name="CurrentMemberUpdate"></a>
## type [CurrentMemberUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L105-L107>)

CurrentMemberUpdate is used to update the current member

```go
type CurrentMemberUpdate struct {
    Nick string `json:"nick"`
}
```

<a name="CurrentUserVoiceStateUpdate"></a>
## type [CurrentUserVoiceStateUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/voice_state.go#L26-L30>)



```go
type CurrentUserVoiceStateUpdate struct {
    ChannelID               *snowflake.ID             `json:"channel_id,omitempty"`
    Suppress                *bool                     `json:"suppress,omitempty"`
    RequestToSpeakTimestamp *json.Nullable[time.Time] `json:"request_to_speak_timestamp,omitempty"`
}
```

<a name="DMChannel"></a>
## type [DMChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L365-L370>)



```go
type DMChannel struct {
    // contains filtered or unexported fields
}
```

<a name="DMChannel.CreatedAt"></a>
### func \(DMChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L419>)

```go
func (c DMChannel) CreatedAt() time.Time
```



<a name="DMChannel.ID"></a>
### func \(DMChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L399>)

```go
func (c DMChannel) ID() snowflake.ID
```



<a name="DMChannel.LastMessageID"></a>
### func \(DMChannel\) [LastMessageID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L411>)

```go
func (c DMChannel) LastMessageID() *snowflake.ID
```



<a name="DMChannel.LastPinTimestamp"></a>
### func \(DMChannel\) [LastPinTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L415>)

```go
func (c DMChannel) LastPinTimestamp() *time.Time
```



<a name="DMChannel.MarshalJSON"></a>
### func \(DMChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L385>)

```go
func (c DMChannel) MarshalJSON() ([]byte, error)
```



<a name="DMChannel.Name"></a>
### func \(DMChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L407>)

```go
func (c DMChannel) Name() string
```



<a name="DMChannel.String"></a>
### func \(DMChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L395>)

```go
func (c DMChannel) String() string
```



<a name="DMChannel.Type"></a>
### func \(DMChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L403>)

```go
func (DMChannel) Type() ChannelType
```



<a name="DMChannel.UnmarshalJSON"></a>
### func \(\*DMChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L372>)

```go
func (c *DMChannel) UnmarshalJSON(data []byte) error
```



<a name="DMChannelCreate"></a>
## type [DMChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L254-L256>)



```go
type DMChannelCreate struct {
    RecipientID snowflake.ID `json:"recipient_id"`
}
```

<a name="DefaultForumLayout"></a>
## type [DefaultForumLayout](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1344>)



```go
type DefaultForumLayout int
```

<a name="DefaultForumLayoutNotSet"></a>

```go
const (
    DefaultForumLayoutNotSet DefaultForumLayout = iota
    DefaultForumLayoutListView
    DefaultForumLayoutGalleryView
)
```

<a name="DefaultReactionEmoji"></a>
## type [DefaultReactionEmoji](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1332-L1335>)



```go
type DefaultReactionEmoji struct {
    EmojiID   *snowflake.ID `json:"emoji_id"`
    EmojiName *string       `json:"emoji_name"`
}
```

<a name="DefaultSortOrder"></a>
## type [DefaultSortOrder](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1337>)



```go
type DefaultSortOrder int
```

<a name="DefaultSortOrderLatestActivity"></a>

```go
const (
    DefaultSortOrderLatestActivity DefaultSortOrder = iota
    DefaultSortOrderCreationDate
)
```

<a name="Embed"></a>
## type [Embed](<https://github.com/disgoorg/disgo/blob/master/discord/embed.go#L19-L33>)

Embed allows you to send embeds to discord

```go
type Embed struct {
    Title       string         `json:"title,omitempty"`
    Type        EmbedType      `json:"type,omitempty"`
    Description string         `json:"description,omitempty"`
    URL         string         `json:"url,omitempty"`
    Timestamp   *time.Time     `json:"timestamp,omitempty"`
    Color       int            `json:"color,omitempty"`
    Footer      *EmbedFooter   `json:"footer,omitempty"`
    Image       *EmbedResource `json:"image,omitempty"`
    Thumbnail   *EmbedResource `json:"thumbnail,omitempty"`
    Video       *EmbedResource `json:"video,omitempty"`
    Provider    *EmbedProvider `json:"provider,omitempty"`
    Author      *EmbedAuthor   `json:"author,omitempty"`
    Fields      []EmbedField   `json:"fields,omitempty"`
}
```

<a name="EmbedAuthor"></a>
## type [EmbedAuthor](<https://github.com/disgoorg/disgo/blob/master/discord/embed.go#L50-L55>)

The EmbedAuthor of an Embed

```go
type EmbedAuthor struct {
    Name         string `json:"name,omitempty"`
    URL          string `json:"url,omitempty"`
    IconURL      string `json:"icon_url,omitempty"`
    ProxyIconURL string `json:"proxy_icon_url,omitempty"`
}
```

<a name="EmbedBuilder"></a>
## type [EmbedBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L14-L16>)

EmbedBuilder allows you to create embeds and use methods to set values

```go
type EmbedBuilder struct {
    Embed
}
```

<a name="NewEmbedBuilder"></a>
### func [NewEmbedBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L9>)

```go
func NewEmbedBuilder() *EmbedBuilder
```

NewEmbedBuilder returns a new embed builder

<a name="EmbedBuilder.AddField"></a>
### func \(\*EmbedBuilder\) [AddField](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L195>)

```go
func (b *EmbedBuilder) AddField(name string, value string, inline bool) *EmbedBuilder
```

AddField adds a field to the EmbedBuilder by name and value

<a name="EmbedBuilder.AddFields"></a>
### func \(\*EmbedBuilder\) [AddFields](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L209>)

```go
func (b *EmbedBuilder) AddFields(fields ...EmbedField) *EmbedBuilder
```

AddFields adds multiple fields to the EmbedBuilder

<a name="EmbedBuilder.Build"></a>
### func \(\*EmbedBuilder\) [Build](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L235>)

```go
func (b *EmbedBuilder) Build() Embed
```

Build returns your built Embed

<a name="EmbedBuilder.ClearFields"></a>
### func \(\*EmbedBuilder\) [ClearFields](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L221>)

```go
func (b *EmbedBuilder) ClearFields() *EmbedBuilder
```

ClearFields removes all the fields from the EmbedBuilder

<a name="EmbedBuilder.RemoveField"></a>
### func \(\*EmbedBuilder\) [RemoveField](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L227>)

```go
func (b *EmbedBuilder) RemoveField(i int) *EmbedBuilder
```

RemoveField removes a field from the EmbedBuilder

<a name="EmbedBuilder.SetAuthor"></a>
### func \(\*EmbedBuilder\) [SetAuthor](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L47>)

```go
func (b *EmbedBuilder) SetAuthor(name string, url string, iconURL string) *EmbedBuilder
```

SetAuthor sets the author of the EmbedBuilder with all properties

<a name="EmbedBuilder.SetAuthorIcon"></a>
### func \(\*EmbedBuilder\) [SetAuthorIcon](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L86>)

```go
func (b *EmbedBuilder) SetAuthorIcon(iconURL string) *EmbedBuilder
```

SetAuthorIcon sets the author icon of the EmbedBuilder

<a name="EmbedBuilder.SetAuthorIconf"></a>
### func \(\*EmbedBuilder\) [SetAuthorIconf](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L95>)

```go
func (b *EmbedBuilder) SetAuthorIconf(iconURL string, a ...any) *EmbedBuilder
```

SetAuthorIconf sets the author icon of the EmbedBuilder with format

<a name="EmbedBuilder.SetAuthorName"></a>
### func \(\*EmbedBuilder\) [SetAuthorName](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L58>)

```go
func (b *EmbedBuilder) SetAuthorName(name string) *EmbedBuilder
```

SetAuthorName sets the author name of the EmbedBuilder

<a name="EmbedBuilder.SetAuthorNamef"></a>
### func \(\*EmbedBuilder\) [SetAuthorNamef](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L67>)

```go
func (b *EmbedBuilder) SetAuthorNamef(name string, a ...any) *EmbedBuilder
```

SetAuthorNamef sets the author name of the EmbedBuilder with format

<a name="EmbedBuilder.SetAuthorURL"></a>
### func \(\*EmbedBuilder\) [SetAuthorURL](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L72>)

```go
func (b *EmbedBuilder) SetAuthorURL(url string) *EmbedBuilder
```

SetAuthorURL sets the author URL of the EmbedBuilder

<a name="EmbedBuilder.SetAuthorURLf"></a>
### func \(\*EmbedBuilder\) [SetAuthorURLf](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L81>)

```go
func (b *EmbedBuilder) SetAuthorURLf(url string, a ...any) *EmbedBuilder
```

SetAuthorURLf sets the author URL of the EmbedBuilder with format

<a name="EmbedBuilder.SetColor"></a>
### func \(\*EmbedBuilder\) [SetColor](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L100>)

```go
func (b *EmbedBuilder) SetColor(color int) *EmbedBuilder
```

SetColor sets the color of the EmbedBuilder

<a name="EmbedBuilder.SetDescription"></a>
### func \(\*EmbedBuilder\) [SetDescription](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L30>)

```go
func (b *EmbedBuilder) SetDescription(description string) *EmbedBuilder
```

SetDescription sets the description of the EmbedBuilder

<a name="EmbedBuilder.SetDescriptionf"></a>
### func \(\*EmbedBuilder\) [SetDescriptionf](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L36>)

```go
func (b *EmbedBuilder) SetDescriptionf(description string, a ...any) *EmbedBuilder
```

SetDescriptionf sets the description of the EmbedBuilder with format

<a name="EmbedBuilder.SetEmbedAuthor"></a>
### func \(\*EmbedBuilder\) [SetEmbedAuthor](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L41>)

```go
func (b *EmbedBuilder) SetEmbedAuthor(author *EmbedAuthor) *EmbedBuilder
```

SetEmbedAuthor sets the author of the EmbedBuilder using an EmbedAuthor struct

<a name="EmbedBuilder.SetEmbedFooter"></a>
### func \(\*EmbedBuilder\) [SetEmbedFooter](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L106>)

```go
func (b *EmbedBuilder) SetEmbedFooter(footer *EmbedFooter) *EmbedBuilder
```

SetEmbedFooter sets the footer of the EmbedBuilder

<a name="EmbedBuilder.SetField"></a>
### func \(\*EmbedBuilder\) [SetField](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L201>)

```go
func (b *EmbedBuilder) SetField(i int, name string, value string, inline bool) *EmbedBuilder
```

SetField sets a field to the EmbedBuilder by name and value

<a name="EmbedBuilder.SetFields"></a>
### func \(\*EmbedBuilder\) [SetFields](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L215>)

```go
func (b *EmbedBuilder) SetFields(fields ...EmbedField) *EmbedBuilder
```

SetFields sets fields of the EmbedBuilder

<a name="EmbedBuilder.SetFooter"></a>
### func \(\*EmbedBuilder\) [SetFooter](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L112>)

```go
func (b *EmbedBuilder) SetFooter(text string, iconURL string) *EmbedBuilder
```

SetFooter sets the footer icon of the EmbedBuilder

<a name="EmbedBuilder.SetFooterIcon"></a>
### func \(\*EmbedBuilder\) [SetFooterIcon](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L136>)

```go
func (b *EmbedBuilder) SetFooterIcon(iconURL string) *EmbedBuilder
```

SetFooterIcon sets the footer icon of the EmbedBuilder

<a name="EmbedBuilder.SetFooterIconf"></a>
### func \(\*EmbedBuilder\) [SetFooterIconf](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L145>)

```go
func (b *EmbedBuilder) SetFooterIconf(iconURL string, a ...any) *EmbedBuilder
```

SetFooterIconf sets the footer icon of the EmbedBuilder

<a name="EmbedBuilder.SetFooterText"></a>
### func \(\*EmbedBuilder\) [SetFooterText](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L122>)

```go
func (b *EmbedBuilder) SetFooterText(text string) *EmbedBuilder
```

SetFooterText sets the footer text of the EmbedBuilder

<a name="EmbedBuilder.SetFooterTextf"></a>
### func \(\*EmbedBuilder\) [SetFooterTextf](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L131>)

```go
func (b *EmbedBuilder) SetFooterTextf(text string, a ...any) *EmbedBuilder
```

SetFooterTextf sets the footer text of the EmbedBuilder with format

<a name="EmbedBuilder.SetImage"></a>
### func \(\*EmbedBuilder\) [SetImage](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L150>)

```go
func (b *EmbedBuilder) SetImage(url string) *EmbedBuilder
```

SetImage sets the image of the EmbedBuilder

<a name="EmbedBuilder.SetImagef"></a>
### func \(\*EmbedBuilder\) [SetImagef](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L159>)

```go
func (b *EmbedBuilder) SetImagef(url string, a ...any) *EmbedBuilder
```

SetImagef sets the image of the EmbedBuilder with format

<a name="EmbedBuilder.SetThumbnail"></a>
### func \(\*EmbedBuilder\) [SetThumbnail](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L164>)

```go
func (b *EmbedBuilder) SetThumbnail(url string) *EmbedBuilder
```

SetThumbnail sets the thumbnail of the EmbedBuilder

<a name="EmbedBuilder.SetThumbnailf"></a>
### func \(\*EmbedBuilder\) [SetThumbnailf](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L173>)

```go
func (b *EmbedBuilder) SetThumbnailf(url string, a ...any) *EmbedBuilder
```

SetThumbnailf sets the thumbnail of the EmbedBuilder with format

<a name="EmbedBuilder.SetTimestamp"></a>
### func \(\*EmbedBuilder\) [SetTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L189>)

```go
func (b *EmbedBuilder) SetTimestamp(time time.Time) *EmbedBuilder
```

SetTimestamp sets the timestamp of the EmbedBuilder

<a name="EmbedBuilder.SetTitle"></a>
### func \(\*EmbedBuilder\) [SetTitle](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L19>)

```go
func (b *EmbedBuilder) SetTitle(title string) *EmbedBuilder
```

SetTitle sets the title of the EmbedBuilder

<a name="EmbedBuilder.SetTitlef"></a>
### func \(\*EmbedBuilder\) [SetTitlef](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L25>)

```go
func (b *EmbedBuilder) SetTitlef(title string, a ...any) *EmbedBuilder
```

SetTitlef sets the title of the EmbedBuilder with format

<a name="EmbedBuilder.SetURL"></a>
### func \(\*EmbedBuilder\) [SetURL](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L178>)

```go
func (b *EmbedBuilder) SetURL(url string) *EmbedBuilder
```

SetURL sets the URL of the EmbedBuilder

<a name="EmbedBuilder.SetURLf"></a>
### func \(\*EmbedBuilder\) [SetURLf](<https://github.com/disgoorg/disgo/blob/master/discord/embed_builder.go#L184>)

```go
func (b *EmbedBuilder) SetURLf(url string, a ...any) *EmbedBuilder
```

SetURLf sets the URL of the EmbedBuilder with format

<a name="EmbedField"></a>
## type [EmbedField](<https://github.com/disgoorg/disgo/blob/master/discord/embed.go#L65-L69>)

EmbedField \(s\) of an Embed

```go
type EmbedField struct {
    Name   string `json:"name"`
    Value  string `json:"value"`
    Inline *bool  `json:"inline,omitempty"`
}
```

<a name="EmbedFooter"></a>
## type [EmbedFooter](<https://github.com/disgoorg/disgo/blob/master/discord/embed.go#L58-L62>)

The EmbedFooter of an Embed

```go
type EmbedFooter struct {
    Text         string `json:"text"`
    IconURL      string `json:"icon_url,omitempty"`
    ProxyIconURL string `json:"proxy_icon_url,omitempty"`
}
```

<a name="EmbedProvider"></a>
## type [EmbedProvider](<https://github.com/disgoorg/disgo/blob/master/discord/embed.go#L44-L47>)

The EmbedProvider of an Embed

```go
type EmbedProvider struct {
    Name string `json:"name,omitempty"`
    URL  string `json:"url,omitempty"`
}
```

<a name="EmbedResource"></a>
## type [EmbedResource](<https://github.com/disgoorg/disgo/blob/master/discord/embed.go#L36-L41>)

The EmbedResource of an Embed.Image/Embed.Thumbnail/Embed.Video

```go
type EmbedResource struct {
    URL      string `json:"url,omitempty"`
    ProxyURL string `json:"proxy_url,omitempty"`
    Height   int    `json:"height,omitempty"`
    Width    int    `json:"width,omitempty"`
}
```

<a name="EmbedType"></a>
## type [EmbedType](<https://github.com/disgoorg/disgo/blob/master/discord/embed.go#L6>)

EmbedType is the type of Embed

```go
type EmbedType string
```

<a name="EmbedTypeRich"></a>Constants for EmbedType

```go
const (
    EmbedTypeRich    EmbedType = "rich"
    EmbedTypeImage   EmbedType = "image"
    EmbedTypeVideo   EmbedType = "video"
    EmbedTypeGifV    EmbedType = "rich"
    EmbedTypeArticle EmbedType = "article"
    EmbedTypeLink    EmbedType = "link"
)
```

<a name="Emoji"></a>
## type [Emoji](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L13-L23>)

Emoji allows you to interact with emojis & emotes

```go
type Emoji struct {
    ID            snowflake.ID   `json:"id,omitempty"`
    GuildID       snowflake.ID   `json:"guild_id,omitempty"` // not present in the API but we need it
    Name          string         `json:"name,omitempty"`     // may be empty for deleted emojis
    Roles         []snowflake.ID `json:"roles,omitempty"`
    Creator       *User          `json:"user,omitempty"`
    RequireColons bool           `json:"require_colons,omitempty"`
    Managed       bool           `json:"managed,omitempty"`
    Animated      bool           `json:"animated,omitempty"`
    Available     bool           `json:"available,omitempty"`
}
```

<a name="Emoji.CreatedAt"></a>
### func \(Emoji\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L50>)

```go
func (e Emoji) CreatedAt() time.Time
```



<a name="Emoji.Mention"></a>
### func \(Emoji\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L34>)

```go
func (e Emoji) Mention() string
```

Mention returns the string used to send the Emoji

<a name="Emoji.Reaction"></a>
### func \(Emoji\) [Reaction](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L26>)

```go
func (e Emoji) Reaction() string
```

Reaction returns a string used for manipulating with reactions. May be empty if the Name is empty

<a name="Emoji.String"></a>
### func \(Emoji\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L42>)

```go
func (e Emoji) String() string
```

String formats the Emoji as string

<a name="Emoji.URL"></a>
### func \(Emoji\) [URL](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L46>)

```go
func (e Emoji) URL(opts ...CDNOpt) string
```



<a name="EmojiCreate"></a>
## type [EmojiCreate](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L57-L61>)



```go
type EmojiCreate struct {
    Name  string         `json:"name"`
    Image Icon           `json:"image"`
    Roles []snowflake.ID `json:"roles,omitempty"`
}
```

<a name="EmojiUpdate"></a>
## type [EmojiUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L63-L66>)



```go
type EmojiUpdate struct {
    Name  *string         `json:"name,omitempty"`
    Roles *[]snowflake.ID `json:"roles,omitempty"`
}
```

<a name="Entitlement"></a>
## type [Entitlement](<https://github.com/disgoorg/disgo/blob/master/discord/entitlement.go#L9-L20>)



```go
type Entitlement struct {
    ID            snowflake.ID    `json:"id"`
    SkuID         snowflake.ID    `json:"sku_id"`
    ApplicationID snowflake.ID    `json:"application_id"`
    UserID        *snowflake.ID   `json:"user_id"`
    Type          EntitlementType `json:"type"`
    Deleted       bool            `json:"deleted"`
    StartsAt      *time.Time      `json:"starts_at"`
    EndsAt        *time.Time      `json:"ends_at"`
    GuildID       *snowflake.ID   `json:"guild_id"`
    Consumed      *bool           `json:"consumed"`
}
```

<a name="EntitlementOwnerType"></a>
## type [EntitlementOwnerType](<https://github.com/disgoorg/disgo/blob/master/discord/entitlement.go#L41>)



```go
type EntitlementOwnerType int
```

<a name="EntitlementOwnerTypeGuild"></a>

```go
const (
    EntitlementOwnerTypeGuild EntitlementOwnerType = iota + 1
    EntitlementOwnerTypeUser
)
```

<a name="EntitlementType"></a>
## type [EntitlementType](<https://github.com/disgoorg/disgo/blob/master/discord/entitlement.go#L22>)



```go
type EntitlementType int
```

<a name="EntitlementTypePurchase"></a>

```go
const (
    EntitlementTypePurchase EntitlementType = iota + 1
    EntitlementTypePremiumSubscription
    EntitlementTypeDeveloperGift
    EntitlementTypeTestModePurchase
    EntitlementTypeFreePurchase
    EntitlementTypeUserGift
    EntitlementTypePremiumPurchase
    EntitlementTypeApplicationSubscription
)
```

<a name="EntityMetaData"></a>
## type [EntityMetaData](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L102-L104>)

EntityMetaData additional metadata for the scheduled event \(https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata\)

```go
type EntityMetaData struct {
    Location string `json:"location"`
}
```

<a name="ExplicitContentFilterLevel"></a>
## type [ExplicitContentFilterLevel](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L78>)

The ExplicitContentFilterLevel of a Guild

```go
type ExplicitContentFilterLevel int
```

<a name="ExplicitContentFilterLevelDisabled"></a>Constants for ExplicitContentFilterLevel

```go
const (
    ExplicitContentFilterLevelDisabled ExplicitContentFilterLevel = iota
    ExplicitContentFilterLevelMembersWithoutRoles
    ExplicitContentFilterLevelAllMembers
)
```

<a name="ExtendedInvite"></a>
## type [ExtendedInvite](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L38-L45>)



```go
type ExtendedInvite struct {
    Invite
    Uses      int       `json:"uses"`
    MaxUses   int       `json:"max_uses"`
    MaxAge    int       `json:"max_age"`
    Temporary bool      `json:"temporary"`
    CreatedAt time.Time `json:"created_at"`
}
```

<a name="File"></a>
## type [File](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L103-L108>)

File holds all information about a given io.Reader

```go
type File struct {
    Name        string
    Description string
    Reader      io.Reader
    Flags       FileFlags
}
```

<a name="NewFile"></a>
### func [NewFile](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L93>)

```go
func NewFile(name string, description string, reader io.Reader, flags ...FileFlags) *File
```

NewFile returns a new File struct with the given name, io.Reader & FileFlags

<a name="FileFlags"></a>
## type [FileFlags](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L111>)

FileFlags are used to mark Attachments as Spoiler

```go
type FileFlags int
```

<a name="FileFlagSpoiler"></a>all FileFlags

```go
const (
    FileFlagSpoiler FileFlags = 1 << iota
    FileFlagsNone   FileFlags = 0
)
```

<a name="FileFlags.Add"></a>
### func \(FileFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L120>)

```go
func (f FileFlags) Add(bits ...FileFlags) FileFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="FileFlags.Has"></a>
### func \(FileFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L130>)

```go
func (f FileFlags) Has(bits ...FileFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="FileFlags.Missing"></a>
### func \(FileFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L135>)

```go
func (f FileFlags) Missing(bits ...FileFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="FileFlags.Remove"></a>
### func \(FileFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L125>)

```go
func (f FileFlags) Remove(bits ...FileFlags) FileFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="FileFormat"></a>
## type [FileFormat](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L51>)

FileFormat is the type of file on Discord's CDN \(https://discord.com/developers/docs/reference#image-formatting-image-formats\)

```go
type FileFormat string
```

<a name="FileFormatNone"></a>The available FileFormat\(s\)

```go
const (
    FileFormatNone   FileFormat = ""
    FileFormatPNG    FileFormat = "png"
    FileFormatJPEG   FileFormat = "jpg"
    FileFormatWebP   FileFormat = "webp"
    FileFormatGIF    FileFormat = "gif"
    FileFormatLottie FileFormat = "json"
)
```

<a name="FileFormat.Animated"></a>
### func \(FileFormat\) [Animated](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L69>)

```go
func (f FileFormat) Animated() bool
```

Animated returns true if the FileFormat is animated

<a name="FileFormat.String"></a>
### func \(FileFormat\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/cdn_endpoints.go#L64>)

```go
func (f FileFormat) String() string
```

String returns the string representation of the FileFormat

<a name="FollowChannel"></a>
## type [FollowChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1298-L1300>)



```go
type FollowChannel struct {
    ChannelID snowflake.ID `json:"webhook_channel_id"`
}
```

<a name="FollowedChannel"></a>
## type [FollowedChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1293-L1296>)



```go
type FollowedChannel struct {
    ChannelID snowflake.ID `json:"channel_id"`
    WebhookID snowflake.ID `json:"webhook_id"`
}
```

<a name="Gateway"></a>
## type [Gateway](<https://github.com/disgoorg/disgo/blob/master/discord/gateway.go#L3-L5>)



```go
type Gateway struct {
    URL string `json:"url"`
}
```

<a name="GatewayBot"></a>
## type [GatewayBot](<https://github.com/disgoorg/disgo/blob/master/discord/gateway.go#L7-L11>)



```go
type GatewayBot struct {
    URL               string            `json:"url"`
    Shards            int               `json:"shards"`
    SessionStartLimit SessionStartLimit `json:"session_start_limit"`
}
```

<a name="GatewayGuild"></a>
## type [GatewayGuild](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L216-L227>)



```go
type GatewayGuild struct {
    RestGuild
    Large                bool                  `json:"large"`
    Unavailable          bool                  `json:"unavailable"`
    VoiceStates          []VoiceState          `json:"voice_states"`
    Members              []Member              `json:"members"`
    Channels             []GuildChannel        `json:"channels"`
    Threads              []GuildThread         `json:"threads"`
    Presences            []Presence            `json:"presences"`
    StageInstances       []StageInstance       `json:"stage_instances"`
    GuildScheduledEvents []GuildScheduledEvent `json:"guild_scheduled_events"`
}
```

<a name="GatewayGuild.UnmarshalJSON"></a>
### func \(\*GatewayGuild\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L229>)

```go
func (g *GatewayGuild) UnmarshalJSON(data []byte) error
```



<a name="GetAllThreads"></a>
## type [GetAllThreads](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L107-L110>)



```go
type GetAllThreads struct {
    Threads []GuildThread  `json:"threads"`
    Members []ThreadMember `json:"members"`
}
```

<a name="GetThreads"></a>
## type [GetThreads](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L101-L105>)



```go
type GetThreads struct {
    Threads []GuildThread  `json:"threads"`
    Members []ThreadMember `json:"members"`
    HasMore bool           `json:"has_more"`
}
```

<a name="GrantType"></a>
## type [GrantType](<https://github.com/disgoorg/disgo/blob/master/discord/access_token.go#L54>)

GrantType defines what type of request is being made.

```go
type GrantType string
```

<a name="GrantTypeAuthorizationCode"></a>Discord's supported GrantType\(s\).

```go
const (
    GrantTypeAuthorizationCode GrantType = "authorization_code"
    GrantTypeRefreshToken      GrantType = "refresh_token"
)
```

<a name="GrantType.String"></a>
### func \(GrantType\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/access_token.go#L63>)

```go
func (t GrantType) String() string
```

String returns the GrantType as a string.

<a name="Guild"></a>
## type [Guild](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L130-L171>)

Guild represents a discord Guild

```go
type Guild struct {
    ID                          snowflake.ID               `json:"id"`
    Name                        string                     `json:"name"`
    Icon                        *string                    `json:"icon"`
    Splash                      *string                    `json:"splash"`
    DiscoverySplash             *string                    `json:"discovery_splash"`
    OwnerID                     snowflake.ID               `json:"owner_id"`
    AfkChannelID                *snowflake.ID              `json:"afk_channel_id"`
    AfkTimeout                  int                        `json:"afk_timeout"`
    WidgetEnabled               bool                       `json:"widget_enabled"`
    WidgetChannelID             snowflake.ID               `json:"widget_channel_id"`
    VerificationLevel           VerificationLevel          `json:"verification_level"`
    DefaultMessageNotifications MessageNotificationsLevel  `json:"default_message_notifications"`
    ExplicitContentFilter       ExplicitContentFilterLevel `json:"explicit_content_filter"`
    Features                    []GuildFeature             `json:"features"`
    MFALevel                    MFALevel                   `json:"mfa_level"`
    ApplicationID               *snowflake.ID              `json:"application_id"`
    SystemChannelID             *snowflake.ID              `json:"system_channel_id"`
    SystemChannelFlags          SystemChannelFlags         `json:"system_channel_flags"`
    RulesChannelID              *snowflake.ID              `json:"rules_channel_id"`
    MemberCount                 int                        `json:"member_count"`
    MaxPresences                *int                       `json:"max_presences"`
    MaxMembers                  int                        `json:"max_members"`
    VanityURLCode               *string                    `json:"vanity_url_code"`
    Description                 *string                    `json:"description"`
    Banner                      *string                    `json:"banner"`
    PremiumTier                 PremiumTier                `json:"premium_tier"`
    PremiumSubscriptionCount    int                        `json:"premium_subscription_count"`
    PreferredLocale             string                     `json:"preferred_locale"`
    PublicUpdatesChannelID      *snowflake.ID              `json:"public_updates_channel_id"`
    MaxVideoChannelUsers        int                        `json:"max_video_channel_users"`
    MaxStageVideoChannelUsers   int                        `json:"max_stage_video_channel_users"`
    WelcomeScreen               GuildWelcomeScreen         `json:"welcome_screen"`
    NSFWLevel                   NSFWLevel                  `json:"nsfw_level"`
    PremiumProgressBarEnabled   bool                       `json:"premium_progress_bar_enabled"`
    JoinedAt                    time.Time                  `json:"joined_at"`
    SafetyAlertsChannelID       *snowflake.ID              `json:"safety_alerts_channel_id"`

    // only over GET /guilds/{guild.id}
    ApproximateMemberCount   int `json:"approximate_member_count"`
    ApproximatePresenceCount int `json:"approximate_presence_count"`
}
```

<a name="Guild.BannerURL"></a>
### func \(Guild\) [BannerURL](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L197>)

```go
func (g Guild) BannerURL(opts ...CDNOpt) *string
```



<a name="Guild.CreatedAt"></a>
### func \(Guild\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L205>)

```go
func (g Guild) CreatedAt() time.Time
```



<a name="Guild.DiscoverySplashURL"></a>
### func \(Guild\) [DiscoverySplashURL](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L189>)

```go
func (g Guild) DiscoverySplashURL(opts ...CDNOpt) *string
```



<a name="Guild.IconURL"></a>
### func \(Guild\) [IconURL](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L173>)

```go
func (g Guild) IconURL(opts ...CDNOpt) *string
```



<a name="Guild.SplashURL"></a>
### func \(Guild\) [SplashURL](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L181>)

```go
func (g Guild) SplashURL(opts ...CDNOpt) *string
```



<a name="GuildAudioChannel"></a>
## type [GuildAudioChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L142-L152>)



```go
type GuildAudioChannel interface {
    GuildChannel

    // Bitrate returns the configured bitrate of the GuildAudioChannel.
    Bitrate() int

    // RTCRegion returns the configured voice server region of the GuildAudioChannel.
    RTCRegion() string
    // contains filtered or unexported methods
}
```

<a name="GuildCategoryChannel"></a>
## type [GuildCategoryChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L576-L582>)



```go
type GuildCategoryChannel struct {
    // contains filtered or unexported fields
}
```

<a name="GuildCategoryChannel.CreatedAt"></a>
### func \(GuildCategoryChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L646>)

```go
func (c GuildCategoryChannel) CreatedAt() time.Time
```



<a name="GuildCategoryChannel.GuildID"></a>
### func \(GuildCategoryChannel\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L629>)

```go
func (c GuildCategoryChannel) GuildID() snowflake.ID
```



<a name="GuildCategoryChannel.ID"></a>
### func \(GuildCategoryChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L621>)

```go
func (c GuildCategoryChannel) ID() snowflake.ID
```



<a name="GuildCategoryChannel.MarshalJSON"></a>
### func \(GuildCategoryChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L598>)

```go
func (c GuildCategoryChannel) MarshalJSON() ([]byte, error)
```



<a name="GuildCategoryChannel.Mention"></a>
### func \(GuildCategoryChannel\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L613>)

```go
func (c GuildCategoryChannel) Mention() string
```



<a name="GuildCategoryChannel.Name"></a>
### func \(GuildCategoryChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L625>)

```go
func (c GuildCategoryChannel) Name() string
```



<a name="GuildCategoryChannel.ParentID"></a>
### func \(GuildCategoryChannel\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L642>)

```go
func (c GuildCategoryChannel) ParentID() *snowflake.ID
```

ParentID always returns nil for GuildCategoryChannel as they can't be nested.

<a name="GuildCategoryChannel.PermissionOverwrites"></a>
### func \(GuildCategoryChannel\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L633>)

```go
func (c GuildCategoryChannel) PermissionOverwrites() PermissionOverwrites
```



<a name="GuildCategoryChannel.Position"></a>
### func \(GuildCategoryChannel\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L637>)

```go
func (c GuildCategoryChannel) Position() int
```



<a name="GuildCategoryChannel.String"></a>
### func \(GuildCategoryChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L609>)

```go
func (c GuildCategoryChannel) String() string
```



<a name="GuildCategoryChannel.Type"></a>
### func \(GuildCategoryChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L617>)

```go
func (GuildCategoryChannel) Type() ChannelType
```



<a name="GuildCategoryChannel.UnmarshalJSON"></a>
### func \(\*GuildCategoryChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L584>)

```go
func (c *GuildCategoryChannel) UnmarshalJSON(data []byte) error
```



<a name="GuildCategoryChannelCreate"></a>
## type [GuildCategoryChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L95-L100>)



```go
type GuildCategoryChannelCreate struct {
    Name                 string                `json:"name"`
    Topic                string                `json:"topic,omitempty"`
    Position             int                   `json:"position,omitempty"`
    PermissionOverwrites []PermissionOverwrite `json:"permission_overwrites,omitempty"`
}
```

<a name="GuildCategoryChannelCreate.MarshalJSON"></a>
### func \(GuildCategoryChannelCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L106>)

```go
func (c GuildCategoryChannelCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildCategoryChannelCreate.Type"></a>
### func \(GuildCategoryChannelCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L102>)

```go
func (c GuildCategoryChannelCreate) Type() ChannelType
```



<a name="GuildCategoryChannelUpdate"></a>
## type [GuildCategoryChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L49-L53>)



```go
type GuildCategoryChannelUpdate struct {
    Name                 *string                `json:"name,omitempty"`
    Position             *int                   `json:"position,omitempty"`
    PermissionOverwrites *[]PermissionOverwrite `json:"permission_overwrites,omitempty"`
}
```

<a name="GuildChannel"></a>
## type [GuildChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L101-L121>)



```go
type GuildChannel interface {
    Channel
    Mentionable

    // GuildID returns the Guild ID of the GuildChannel
    GuildID() snowflake.ID

    // Position returns the position of the GuildChannel in the channel list.
    // This is always 0 for GuildThread(s).
    Position() int

    // ParentID returns the parent Channel ID of the GuildChannel.
    // This is never nil for GuildThread(s).
    ParentID() *snowflake.ID

    // PermissionOverwrites returns the GuildChannel's PermissionOverwrites for Role(s) and Member(s).
    // This is always nil for GuildThread(s).
    PermissionOverwrites() PermissionOverwrites
    // contains filtered or unexported methods
}
```

<a name="ApplyGuildIDToChannel"></a>
### func [ApplyGuildIDToChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1370>)

```go
func ApplyGuildIDToChannel(channel GuildChannel, guildID snowflake.ID) GuildChannel
```



<a name="GuildChannelCreate"></a>
## type [GuildChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L14-L17>)



```go
type GuildChannelCreate interface {
    ChannelCreate
    // contains filtered or unexported methods
}
```

<a name="GuildChannelPositionUpdate"></a>
## type [GuildChannelPositionUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L151-L156>)



```go
type GuildChannelPositionUpdate struct {
    ID              snowflake.ID         `json:"id"`
    Position        *json.Nullable[int]  `json:"position"`
    LockPermissions *json.Nullable[bool] `json:"lock_permissions,omitempty"`
    ParentID        *snowflake.ID        `json:"parent_id,omitempty"`
}
```

<a name="GuildChannelUpdate"></a>
## type [GuildChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L12-L15>)



```go
type GuildChannelUpdate interface {
    ChannelUpdate
    // contains filtered or unexported methods
}
```

<a name="GuildCreate"></a>
## type [GuildCreate](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L303-L315>)

GuildCreate is the payload used to create a Guild

```go
type GuildCreate struct {
    Name                            string                     `json:"name"`
    Icon                            *Icon                      `json:"icon,omitempty"`
    VerificationLevel               VerificationLevel          `json:"verification_level,omitempty"`
    DefaultMessageNotificationLevel MessageNotificationsLevel  `json:"default_message_notification_level,omitempty"`
    ExplicitContentFilterLevel      ExplicitContentFilterLevel `json:"explicit_content_filter_level,omitempty"`
    Roles                           []GuildCreateRole          `json:"roles,omitempty"`
    Channels                        []GuildCreateChannel       `json:"channels,omitempty"`
    AFKChannelID                    snowflake.ID               `json:"afk_channel_id,omitempty"`
    AFKTimeout                      int                        `json:"afk_timeout,omitempty"`
    SystemChannelID                 snowflake.ID               `json:"system_channel_id,omitempty"`
    SystemChannelFlags              SystemChannelFlags         `json:"system_channel_flags,omitempty"`
}
```

<a name="GuildCreateChannel"></a>
## type [GuildCreateChannel](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L355-L359>)



```go
type GuildCreateChannel struct {
    ChannelCreate
    ID       int `json:"id,omitempty"`
    ParentID int `json:"parent_id,omitempty"`
}
```

<a name="GuildCreateRole"></a>
## type [GuildCreateRole](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L350-L353>)



```go
type GuildCreateRole struct {
    RoleCreate
    ID  int `json:"id,omitempty"`
}
```

<a name="GuildFeature"></a>
## type [GuildFeature](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L97>)

The GuildFeature \(s\) that a Guild contains

```go
type GuildFeature string
```

<a name="GuildFeatureAnimatedBanner"></a>Constants for GuildFeature

```go
const (
    GuildFeatureAnimatedBanner                        GuildFeature = "ANIMATED_BANNER"
    GuildFeatureAnimatedIcon                          GuildFeature = "ANIMATED_ICON"
    GuildFeatureAutoModeration                        GuildFeature = "AUTO_MODERATION"
    GuildFeatureBanner                                GuildFeature = "BANNER"
    GuildFeatureCommunity                             GuildFeature = "COMMUNITY"
    GuildFeatureCreatorMonetizableProvisional         GuildFeature = "CREATOR_MONETIZABLE_PROVISIONAL"
    GuildFeatureCreatorStorePage                      GuildFeature = "CREATOR_STORE_PAGE"
    GuildFeatureDeveloperSupportServer                GuildFeature = "DEVELOPER_SUPPORT_SERVER"
    GuildFeatureDiscoverable                          GuildFeature = "DISCOVERABLE"
    GuildFeatureFeaturable                            GuildFeature = "FEATURABLE"
    GuildFeatureInvitesDisabled                       GuildFeature = "INVITES_DISABLED"
    GuildFeatureInviteSplash                          GuildFeature = "INVITE_SPLASH"
    GuildFeatureMemberVerificationGateEnabled         GuildFeature = "MEMBER_VERIFICATION_GATE_ENABLED"
    GuildFeatureMoreStickers                          GuildFeature = "MORE_STICKERS"
    GuildFeatureNews                                  GuildFeature = "NEWS"
    GuildFeaturePartnered                             GuildFeature = "PARTNERED"
    GuildFeaturePreviewEnabled                        GuildFeature = "PREVIEW_ENABLED"
    GuildFeatureRaidAlertsDisabled                    GuildFeature = "RAID_ALERTS_DISABLED"
    GuildFeatureRoleIcons                             GuildFeature = "ROLE_ICONS"
    GuildFeatureRoleSubscriptionsAvailableForPurchase GuildFeature = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE"
    GuildFeatureRoleSubscriptionsEnabled              GuildFeature = "ROLE_SUBSCRIPTIONS_ENABLED"
    GuildFeatureTicketedEventsEnabled                 GuildFeature = "TICKETED_EVENTS_ENABLED"
    GuildFeatureVanityURL                             GuildFeature = "VANITY_URL"
    GuildFeatureVerified                              GuildFeature = "VERIFIED"
    GuildFeatureVipRegions                            GuildFeature = "VIP_REGIONS"
    GuildFeatureWelcomeScreenEnabled                  GuildFeature = "WELCOME_SCREEN_ENABLED"
)
```

<a name="GuildForumChannel"></a>
## type [GuildForumChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1073-L1090>)



```go
type GuildForumChannel struct {
    LastPostID                    *snowflake.ID
    Topic                         *string
    NSFW                          bool
    RateLimitPerUser              int
    Flags                         ChannelFlags
    AvailableTags                 []ChannelTag
    DefaultReactionEmoji          *DefaultReactionEmoji
    DefaultThreadRateLimitPerUser int
    DefaultSortOrder              *DefaultSortOrder
    DefaultForumLayout            DefaultForumLayout
    // contains filtered or unexported fields
}
```

<a name="GuildForumChannel.CreatedAt"></a>
### func \(GuildForumChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1175>)

```go
func (c GuildForumChannel) CreatedAt() time.Time
```



<a name="GuildForumChannel.GuildID"></a>
### func \(GuildForumChannel\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1159>)

```go
func (c GuildForumChannel) GuildID() snowflake.ID
```



<a name="GuildForumChannel.ID"></a>
### func \(GuildForumChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1151>)

```go
func (c GuildForumChannel) ID() snowflake.ID
```



<a name="GuildForumChannel.MarshalJSON"></a>
### func \(GuildForumChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1117>)

```go
func (c GuildForumChannel) MarshalJSON() ([]byte, error)
```



<a name="GuildForumChannel.Mention"></a>
### func \(GuildForumChannel\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1143>)

```go
func (c GuildForumChannel) Mention() string
```



<a name="GuildForumChannel.Name"></a>
### func \(GuildForumChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1155>)

```go
func (c GuildForumChannel) Name() string
```



<a name="GuildForumChannel.ParentID"></a>
### func \(GuildForumChannel\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1171>)

```go
func (c GuildForumChannel) ParentID() *snowflake.ID
```



<a name="GuildForumChannel.PermissionOverwrites"></a>
### func \(GuildForumChannel\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1163>)

```go
func (c GuildForumChannel) PermissionOverwrites() PermissionOverwrites
```



<a name="GuildForumChannel.Position"></a>
### func \(GuildForumChannel\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1167>)

```go
func (c GuildForumChannel) Position() int
```



<a name="GuildForumChannel.String"></a>
### func \(GuildForumChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1139>)

```go
func (c GuildForumChannel) String() string
```



<a name="GuildForumChannel.Type"></a>
### func \(GuildForumChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1147>)

```go
func (GuildForumChannel) Type() ChannelType
```



<a name="GuildForumChannel.UnmarshalJSON"></a>
### func \(\*GuildForumChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1092>)

```go
func (c *GuildForumChannel) UnmarshalJSON(data []byte) error
```



<a name="GuildForumChannelCreate"></a>
## type [GuildForumChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L191-L203>)



```go
type GuildForumChannelCreate struct {
    Name                          string                `json:"name"`
    Topic                         string                `json:"topic,omitempty"`
    Position                      int                   `json:"position,omitempty"`
    PermissionOverwrites          []PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID                      snowflake.ID          `json:"parent_id,omitempty"`
    RateLimitPerUser              int                   `json:"rate_limit_per_user,omitempty"`
    DefaultReactionEmoji          DefaultReactionEmoji  `json:"default_reaction_emoji"`
    AvailableTags                 []ChannelTag          `json:"available_tags"`
    DefaultSortOrder              DefaultSortOrder      `json:"default_sort_order"`
    DefaultForumLayout            DefaultForumLayout    `json:"default_forum_layout"`
    DefaultThreadRateLimitPerUser int                   `json:"default_thread_rate_limit_per_user,omitempty"`
}
```

<a name="GuildForumChannelCreate.MarshalJSON"></a>
### func \(GuildForumChannelCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L209>)

```go
func (c GuildForumChannelCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildForumChannelCreate.Type"></a>
### func \(GuildForumChannelCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L205>)

```go
func (c GuildForumChannelCreate) Type() ChannelType
```



<a name="GuildForumChannelUpdate"></a>
## type [GuildForumChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L100-L114>)



```go
type GuildForumChannelUpdate struct {
    Name                          *string                              `json:"name,omitempty"`
    Position                      *int                                 `json:"position,omitempty"`
    Topic                         *string                              `json:"topic,omitempty"`
    NSFW                          *bool                                `json:"nsfw,omitempty"`
    PermissionOverwrites          *[]PermissionOverwrite               `json:"permission_overwrites,omitempty"`
    ParentID                      *snowflake.ID                        `json:"parent_id,omitempty"`
    RateLimitPerUser              *int                                 `json:"rate_limit_per_user"`
    AvailableTags                 *[]ChannelTag                        `json:"available_tags,omitempty"`
    Flags                         *ChannelFlags                        `json:"flags,omitempty"`
    DefaultReactionEmoji          *json.Nullable[DefaultReactionEmoji] `json:"default_reaction_emoji,omitempty"`
    DefaultThreadRateLimitPerUser *int                                 `json:"default_thread_rate_limit_per_user,omitempty"`
    DefaultSortOrder              *json.Nullable[DefaultSortOrder]     `json:"default_sort_order,omitempty"`
    DefaultForumLayout            *json.Nullable[DefaultForumLayout]   `json:"default_forum_layout,omitempty"`
}
```

<a name="GuildFromTemplateCreate"></a>
## type [GuildFromTemplateCreate](<https://github.com/disgoorg/disgo/blob/master/discord/guild_template.go#L53-L56>)

GuildFromTemplateCreate is the data used to create a Guild from a GuildTemplate

```go
type GuildFromTemplateCreate struct {
    Name string `json:"name"`
    Icon *Icon  `json:"icon,omitempty"`
}
```

<a name="GuildMediaChannel"></a>
## type [GuildMediaChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1187-L1203>)



```go
type GuildMediaChannel struct {
    LastPostID                    *snowflake.ID
    Topic                         *string
    NSFW                          bool
    RateLimitPerUser              int
    Flags                         ChannelFlags
    AvailableTags                 []ChannelTag
    DefaultReactionEmoji          *DefaultReactionEmoji
    DefaultThreadRateLimitPerUser int
    DefaultSortOrder              *DefaultSortOrder
    // contains filtered or unexported fields
}
```

<a name="GuildMediaChannel.CreatedAt"></a>
### func \(GuildMediaChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1286>)

```go
func (c GuildMediaChannel) CreatedAt() time.Time
```



<a name="GuildMediaChannel.GuildID"></a>
### func \(GuildMediaChannel\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1270>)

```go
func (c GuildMediaChannel) GuildID() snowflake.ID
```



<a name="GuildMediaChannel.ID"></a>
### func \(GuildMediaChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1262>)

```go
func (c GuildMediaChannel) ID() snowflake.ID
```



<a name="GuildMediaChannel.MarshalJSON"></a>
### func \(GuildMediaChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1229>)

```go
func (c GuildMediaChannel) MarshalJSON() ([]byte, error)
```



<a name="GuildMediaChannel.Mention"></a>
### func \(GuildMediaChannel\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1254>)

```go
func (c GuildMediaChannel) Mention() string
```



<a name="GuildMediaChannel.Name"></a>
### func \(GuildMediaChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1266>)

```go
func (c GuildMediaChannel) Name() string
```



<a name="GuildMediaChannel.ParentID"></a>
### func \(GuildMediaChannel\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1282>)

```go
func (c GuildMediaChannel) ParentID() *snowflake.ID
```



<a name="GuildMediaChannel.PermissionOverwrites"></a>
### func \(GuildMediaChannel\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1274>)

```go
func (c GuildMediaChannel) PermissionOverwrites() PermissionOverwrites
```



<a name="GuildMediaChannel.Position"></a>
### func \(GuildMediaChannel\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1278>)

```go
func (c GuildMediaChannel) Position() int
```



<a name="GuildMediaChannel.String"></a>
### func \(GuildMediaChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1250>)

```go
func (c GuildMediaChannel) String() string
```



<a name="GuildMediaChannel.Type"></a>
### func \(GuildMediaChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1258>)

```go
func (GuildMediaChannel) Type() ChannelType
```



<a name="GuildMediaChannel.UnmarshalJSON"></a>
### func \(\*GuildMediaChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1205>)

```go
func (c *GuildMediaChannel) UnmarshalJSON(data []byte) error
```



<a name="GuildMediaChannelCreate"></a>
## type [GuildMediaChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L223-L234>)



```go
type GuildMediaChannelCreate struct {
    Name                          string                `json:"name"`
    Topic                         string                `json:"topic,omitempty"`
    Position                      int                   `json:"position,omitempty"`
    PermissionOverwrites          []PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID                      snowflake.ID          `json:"parent_id,omitempty"`
    RateLimitPerUser              int                   `json:"rate_limit_per_user,omitempty"`
    DefaultReactionEmoji          DefaultReactionEmoji  `json:"default_reaction_emoji"`
    AvailableTags                 []ChannelTag          `json:"available_tags"`
    DefaultSortOrder              DefaultSortOrder      `json:"default_sort_order"`
    DefaultThreadRateLimitPerUser int                   `json:"default_thread_rate_limit_per_user,omitempty"`
}
```

<a name="GuildMediaChannelCreate.MarshalJSON"></a>
### func \(GuildMediaChannelCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L240>)

```go
func (c GuildMediaChannelCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildMediaChannelCreate.Type"></a>
### func \(GuildMediaChannelCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L236>)

```go
func (c GuildMediaChannelCreate) Type() ChannelType
```



<a name="GuildMediaChannelUpdate"></a>
## type [GuildMediaChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L119-L132>)



```go
type GuildMediaChannelUpdate struct {
    Name                          *string                              `json:"name,omitempty"`
    Position                      *int                                 `json:"position,omitempty"`
    Topic                         *string                              `json:"topic,omitempty"`
    NSFW                          *bool                                `json:"nsfw,omitempty"`
    PermissionOverwrites          *[]PermissionOverwrite               `json:"permission_overwrites,omitempty"`
    ParentID                      *snowflake.ID                        `json:"parent_id,omitempty"`
    RateLimitPerUser              *int                                 `json:"rate_limit_per_user"`
    AvailableTags                 *[]ChannelTag                        `json:"available_tags,omitempty"`
    Flags                         *ChannelFlags                        `json:"flags,omitempty"`
    DefaultReactionEmoji          *json.Nullable[DefaultReactionEmoji] `json:"default_reaction_emoji,omitempty"`
    DefaultThreadRateLimitPerUser *int                                 `json:"default_thread_rate_limit_per_user,omitempty"`
    DefaultSortOrder              *json.Nullable[DefaultSortOrder]     `json:"default_sort_order,omitempty"`
}
```

<a name="GuildMessageChannel"></a>
## type [GuildMessageChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L123-L140>)



```go
type GuildMessageChannel interface {
    GuildChannel
    MessageChannel

    // Topic returns the topic of a GuildMessageChannel.
    // This is always nil for GuildThread(s).
    Topic() *string

    // NSFW returns whether the GuildMessageChannel is marked as not safe for work.
    NSFW() bool

    // DefaultAutoArchiveDuration returns the default AutoArchiveDuration for GuildThread(s) in this GuildMessageChannel.
    // This is always 0 for GuildThread(s).
    DefaultAutoArchiveDuration() AutoArchiveDuration
    RateLimitPerUser() int
    // contains filtered or unexported methods
}
```

<a name="ApplyLastMessageIDToChannel"></a>
### func [ApplyLastMessageIDToChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1401>)

```go
func ApplyLastMessageIDToChannel(channel GuildMessageChannel, lastMessageID snowflake.ID) GuildMessageChannel
```



<a name="ApplyLastPinTimestampToChannel"></a>
### func [ApplyLastPinTimestampToChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1420>)

```go
func ApplyLastPinTimestampToChannel(channel GuildMessageChannel, lastPinTimestamp *time.Time) GuildMessageChannel
```



<a name="GuildNewsChannel"></a>
## type [GuildNewsChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L660-L673>)



```go
type GuildNewsChannel struct {
    // contains filtered or unexported fields
}
```

<a name="GuildNewsChannel.CreatedAt"></a>
### func \(GuildNewsChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L774>)

```go
func (c GuildNewsChannel) CreatedAt() time.Time
```



<a name="GuildNewsChannel.DefaultAutoArchiveDuration"></a>
### func \(GuildNewsChannel\) [DefaultAutoArchiveDuration](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L750>)

```go
func (c GuildNewsChannel) DefaultAutoArchiveDuration() AutoArchiveDuration
```



<a name="GuildNewsChannel.GuildID"></a>
### func \(GuildNewsChannel\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L734>)

```go
func (c GuildNewsChannel) GuildID() snowflake.ID
```



<a name="GuildNewsChannel.ID"></a>
### func \(GuildNewsChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L726>)

```go
func (c GuildNewsChannel) ID() snowflake.ID
```



<a name="GuildNewsChannel.LastMessageID"></a>
### func \(GuildNewsChannel\) [LastMessageID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L754>)

```go
func (c GuildNewsChannel) LastMessageID() *snowflake.ID
```



<a name="GuildNewsChannel.LastPinTimestamp"></a>
### func \(GuildNewsChannel\) [LastPinTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L762>)

```go
func (c GuildNewsChannel) LastPinTimestamp() *time.Time
```



<a name="GuildNewsChannel.MarshalJSON"></a>
### func \(GuildNewsChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L696>)

```go
func (c GuildNewsChannel) MarshalJSON() ([]byte, error)
```



<a name="GuildNewsChannel.Mention"></a>
### func \(GuildNewsChannel\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L718>)

```go
func (c GuildNewsChannel) Mention() string
```



<a name="GuildNewsChannel.NSFW"></a>
### func \(GuildNewsChannel\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L746>)

```go
func (c GuildNewsChannel) NSFW() bool
```



<a name="GuildNewsChannel.Name"></a>
### func \(GuildNewsChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L730>)

```go
func (c GuildNewsChannel) Name() string
```



<a name="GuildNewsChannel.ParentID"></a>
### func \(GuildNewsChannel\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L770>)

```go
func (c GuildNewsChannel) ParentID() *snowflake.ID
```



<a name="GuildNewsChannel.PermissionOverwrites"></a>
### func \(GuildNewsChannel\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L738>)

```go
func (c GuildNewsChannel) PermissionOverwrites() PermissionOverwrites
```



<a name="GuildNewsChannel.Position"></a>
### func \(GuildNewsChannel\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L766>)

```go
func (c GuildNewsChannel) Position() int
```



<a name="GuildNewsChannel.RateLimitPerUser"></a>
### func \(GuildNewsChannel\) [RateLimitPerUser](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L758>)

```go
func (c GuildNewsChannel) RateLimitPerUser() int
```



<a name="GuildNewsChannel.String"></a>
### func \(GuildNewsChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L714>)

```go
func (c GuildNewsChannel) String() string
```



<a name="GuildNewsChannel.Topic"></a>
### func \(GuildNewsChannel\) [Topic](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L742>)

```go
func (c GuildNewsChannel) Topic() *string
```



<a name="GuildNewsChannel.Type"></a>
### func \(GuildNewsChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L722>)

```go
func (GuildNewsChannel) Type() ChannelType
```



<a name="GuildNewsChannel.UnmarshalJSON"></a>
### func \(\*GuildNewsChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L675>)

```go
func (c *GuildNewsChannel) UnmarshalJSON(data []byte) error
```



<a name="GuildNewsChannelCreate"></a>
## type [GuildNewsChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L125-L135>)



```go
type GuildNewsChannelCreate struct {
    Name                          string                `json:"name"`
    Topic                         string                `json:"topic,omitempty"`
    RateLimitPerUser              int                   `json:"rate_limit_per_user,omitempty"`
    Position                      int                   `json:"position,omitempty"`
    PermissionOverwrites          []PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID                      snowflake.ID          `json:"parent_id,omitempty"`
    NSFW                          bool                  `json:"nsfw,omitempty"`
    DefaultAutoArchiveDuration    AutoArchiveDuration   `json:"default_auto_archive_days,omitempty"`
    DefaultThreadRateLimitPerUser int                   `json:"default_thread_rate_limit_per_user,omitempty"`
}
```

<a name="GuildNewsChannelCreate.MarshalJSON"></a>
### func \(GuildNewsChannelCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L141>)

```go
func (c GuildNewsChannelCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildNewsChannelCreate.Type"></a>
### func \(GuildNewsChannelCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L137>)

```go
func (c GuildNewsChannelCreate) Type() ChannelType
```



<a name="GuildNewsChannelUpdate"></a>
## type [GuildNewsChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L58-L67>)



```go
type GuildNewsChannelUpdate struct {
    Name                       *string                `json:"name,omitempty"`
    Type                       *ChannelType           `json:"type,omitempty"`
    Position                   *int                   `json:"position,omitempty"`
    Topic                      *string                `json:"topic,omitempty"`
    RateLimitPerUser           *int                   `json:"rate_limit_per_user,omitempty"`
    PermissionOverwrites       *[]PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID                   *snowflake.ID          `json:"parent_id,omitempty"`
    DefaultAutoArchiveDuration *int                   `json:"default_auto_archive_duration,omitempty"`
}
```

<a name="GuildNewsThreadCreate"></a>
## type [GuildNewsThreadCreate](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L40-L43>)



```go
type GuildNewsThreadCreate struct {
    Name                string              `json:"name"`
    AutoArchiveDuration AutoArchiveDuration `json:"auto_archive_duration,omitempty"`
}
```

<a name="GuildNewsThreadCreate.MarshalJSON"></a>
### func \(GuildNewsThreadCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L45>)

```go
func (c GuildNewsThreadCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildNewsThreadCreate.Type"></a>
### func \(GuildNewsThreadCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L56>)

```go
func (GuildNewsThreadCreate) Type() ChannelType
```



<a name="GuildOnboarding"></a>
## type [GuildOnboarding](<https://github.com/disgoorg/disgo/blob/master/discord/guild_onboarding.go#L8-L14>)



```go
type GuildOnboarding struct {
    GuildID           snowflake.ID            `json:"guild_id"`
    Prompts           []GuildOnboardingPrompt `json:"prompts"`
    DefaultChannelIDs []snowflake.ID          `json:"default_channel_ids"`
    Enabled           bool                    `json:"enabled"`
    Mode              GuildOnboardingMode     `json:"mode"`
}
```

<a name="GuildOnboardingMode"></a>
## type [GuildOnboardingMode](<https://github.com/disgoorg/disgo/blob/master/discord/guild_onboarding.go#L58>)



```go
type GuildOnboardingMode int
```

<a name="GuildOnboardingModeDefault"></a>

```go
const (
    GuildOnboardingModeDefault GuildOnboardingMode = iota
    GuildOnboardingModeAdvanced
)
```

<a name="GuildOnboardingPrompt"></a>
## type [GuildOnboardingPrompt](<https://github.com/disgoorg/disgo/blob/master/discord/guild_onboarding.go#L16-L24>)



```go
type GuildOnboardingPrompt struct {
    ID           snowflake.ID                  `json:"id"`
    Options      []GuildOnboardingPromptOption `json:"options"`
    Title        string                        `json:"title"`
    SingleSelect bool                          `json:"single_select"`
    Required     bool                          `json:"required"`
    InOnboarding bool                          `json:"in_onboarding"`
    Type         GuildOnboardingPromptType     `json:"type"`
}
```

<a name="GuildOnboardingPromptOption"></a>
## type [GuildOnboardingPromptOption](<https://github.com/disgoorg/disgo/blob/master/discord/guild_onboarding.go#L26-L34>)



```go
type GuildOnboardingPromptOption struct {
    ID         snowflake.ID   `json:"id"`
    ChannelIDs []snowflake.ID `json:"channel_ids"`
    RoleIDs    []snowflake.ID `json:"role_ids"`
    // When creating or updating prompts and their options, this field will be broken down into 3 separate fields in the payload: https://github.com/discord/discord-api-docs/pull/6479
    Emoji       PartialEmoji `json:"emoji"`
    Title       string       `json:"title"`
    Description *string      `json:"description"`
}
```

<a name="GuildOnboardingPromptOption.MarshalJSON"></a>
### func \(GuildOnboardingPromptOption\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/guild_onboarding.go#L36>)

```go
func (o GuildOnboardingPromptOption) MarshalJSON() ([]byte, error)
```



<a name="GuildOnboardingPromptType"></a>
## type [GuildOnboardingPromptType](<https://github.com/disgoorg/disgo/blob/master/discord/guild_onboarding.go#L51>)



```go
type GuildOnboardingPromptType int
```

<a name="GuildOnboardingPromptTypeMultipleChoice"></a>

```go
const (
    GuildOnboardingPromptTypeMultipleChoice GuildOnboardingPromptType = iota
    GuildOnboardingPromptTypeDropdown
)
```

<a name="GuildOnboardingUpdate"></a>
## type [GuildOnboardingUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/guild_onboarding.go#L65-L70>)



```go
type GuildOnboardingUpdate struct {
    Prompts           *[]GuildOnboardingPrompt `json:"prompts,omitempty"`
    DefaultChannelIDs *[]snowflake.ID          `json:"default_channel_ids,omitempty"`
    Enabled           *bool                    `json:"enabled,omitempty"`
    Mode              *GuildOnboardingMode     `json:"mode,omitempty"`
}
```

<a name="GuildPostUpdate"></a>
## type [GuildPostUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L137-L146>)



```go
type GuildPostUpdate struct {
    Name                *string              `json:"name,omitempty"`
    Archived            *bool                `json:"archived,omitempty"`
    AutoArchiveDuration *AutoArchiveDuration `json:"auto_archive_duration,omitempty"`
    Locked              *bool                `json:"locked,omitempty"`
    Invitable           *bool                `json:"invitable,omitempty"`
    RateLimitPerUser    *int                 `json:"rate_limit_per_user,omitempty"`
    Flags               *ChannelFlags        `json:"flags,omitempty"`
    AppliedTags         *[]snowflake.ID      `json:"applied_tags,omitempty"`
}
```

<a name="GuildPreview"></a>
## type [GuildPreview](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L288-L300>)

GuildPreview is used for previewing public Guild\(s\) before joining them

```go
type GuildPreview struct {
    ID                       snowflake.ID   `json:"id"`
    Name                     string         `json:"name"`
    Icon                     *string        `json:"icon"`
    DiscoverySplash          *string        `json:"discovery_splash"`
    Splash                   *string        `json:"splash"`
    Features                 []GuildFeature `json:"features"`
    Description              *string        `json:"description"`
    ApproximateMemberCount   *int           `json:"approximate_member_count"`
    ApproximatePresenceCount *int           `json:"approximate_presence_count"`
    Emojis                   []Emoji        `json:"emojis"`
    Stickers                 []Sticker      `json:"stickers"`
}
```

<a name="GuildPrivateThreadCreate"></a>
## type [GuildPrivateThreadCreate](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L80-L84>)



```go
type GuildPrivateThreadCreate struct {
    Name                string              `json:"name"`
    AutoArchiveDuration AutoArchiveDuration `json:"auto_archive_duration,omitempty"`
    Invitable           bool                `json:"invitable,omitempty"`
}
```

<a name="GuildPrivateThreadCreate.MarshalJSON"></a>
### func \(GuildPrivateThreadCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L86>)

```go
func (c GuildPrivateThreadCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildPrivateThreadCreate.Type"></a>
### func \(GuildPrivateThreadCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L97>)

```go
func (GuildPrivateThreadCreate) Type() ChannelType
```



<a name="GuildPrune"></a>
## type [GuildPrune](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L361-L365>)



```go
type GuildPrune struct {
    Days              int            `json:"days"`
    ComputePruneCount bool           `json:"compute_prune_count"`
    IncludeRoles      []snowflake.ID `json:"include_roles"`
}
```

<a name="GuildPruneResult"></a>
## type [GuildPruneResult](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L367-L369>)



```go
type GuildPruneResult struct {
    Pruned *int `json:"pruned"`
}
```

<a name="GuildPublicThreadCreate"></a>
## type [GuildPublicThreadCreate](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L60-L63>)



```go
type GuildPublicThreadCreate struct {
    Name                string              `json:"name"`
    AutoArchiveDuration AutoArchiveDuration `json:"auto_archive_duration,omitempty"`
}
```

<a name="GuildPublicThreadCreate.MarshalJSON"></a>
### func \(GuildPublicThreadCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L65>)

```go
func (c GuildPublicThreadCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildPublicThreadCreate.Type"></a>
### func \(GuildPublicThreadCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L76>)

```go
func (GuildPublicThreadCreate) Type() ChannelType
```



<a name="GuildScheduledEvent"></a>
## type [GuildScheduledEvent](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L11-L28>)

GuildScheduledEvent a representation of a scheduled event in a Guild \(https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object\)

```go
type GuildScheduledEvent struct {
    ID                 snowflake.ID               `json:"id"`
    GuildID            snowflake.ID               `json:"guild_id"`
    ChannelID          *snowflake.ID              `json:"channel_id"`
    CreatorID          snowflake.ID               `json:"creator_id"`
    Name               string                     `json:"name"`
    Description        string                     `json:"description"`
    ScheduledStartTime time.Time                  `json:"scheduled_start_time"`
    ScheduledEndTime   *time.Time                 `json:"scheduled_end_time"`
    PrivacyLevel       ScheduledEventPrivacyLevel `json:"privacy_level"`
    Status             ScheduledEventStatus       `json:"status"`
    EntityType         ScheduledEventEntityType   `json:"entity_type"`
    EntityID           *snowflake.ID              `json:"entity_id"`
    EntityMetaData     *EntityMetaData            `json:"entity_metadata"`
    Creator            User                       `json:"creator"`
    UserCount          int                        `json:"user_count"`
    Image              *string                    `json:"image"`
}
```

<a name="GuildScheduledEvent.CoverURL"></a>
### func \(GuildScheduledEvent\) [CoverURL](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L35>)

```go
func (e GuildScheduledEvent) CoverURL(opts ...CDNOpt) *string
```

CoverURL returns the cover URL if set or nil

<a name="GuildScheduledEvent.CreatedAt"></a>
### func \(GuildScheduledEvent\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L30>)

```go
func (e GuildScheduledEvent) CreatedAt() time.Time
```



<a name="GuildScheduledEventCreate"></a>
## type [GuildScheduledEventCreate](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L43-L53>)



```go
type GuildScheduledEventCreate struct {
    ChannelID          snowflake.ID               `json:"channel_id,omitempty"`
    EntityMetaData     *EntityMetaData            `json:"entity_metadata,omitempty"`
    Name               string                     `json:"name"`
    PrivacyLevel       ScheduledEventPrivacyLevel `json:"privacy_level"`
    ScheduledStartTime time.Time                  `json:"scheduled_start_time"`
    ScheduledEndTime   *time.Time                 `json:"scheduled_end_time,omitempty"`
    Description        string                     `json:"description,omitempty"`
    EntityType         ScheduledEventEntityType   `json:"entity_type"`
    Image              *Icon                      `json:"image,omitempty"`
}
```

<a name="GuildScheduledEventUpdate"></a>
## type [GuildScheduledEventUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L55-L66>)



```go
type GuildScheduledEventUpdate struct {
    ChannelID          *snowflake.ID               `json:"channel_id,omitempty"`
    EntityMetaData     *EntityMetaData             `json:"entity_metadata,omitempty"`
    Name               string                      `json:"name,omitempty"`
    PrivacyLevel       *ScheduledEventPrivacyLevel `json:"privacy_level,omitempty"`
    ScheduledStartTime *time.Time                  `json:"scheduled_start_time,omitempty"`
    ScheduledEndTime   *time.Time                  `json:"scheduled_end_time,omitempty"`
    Description        *string                     `json:"description,omitempty"`
    EntityType         *ScheduledEventEntityType   `json:"entity_type,omitempty"`
    Status             *ScheduledEventStatus       `json:"status,omitempty"`
    Image              *json.Nullable[Icon]        `json:"image,omitempty"`
}
```

<a name="GuildScheduledEventUser"></a>
## type [GuildScheduledEventUser](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L68-L72>)



```go
type GuildScheduledEventUser struct {
    GuildScheduledEventID snowflake.ID `json:"guild_scheduled_event_id"`
    User                  User         `json:"user"`
    Member                *Member      `json:"member"`
}
```

<a name="GuildStageVoiceChannel"></a>
## type [GuildStageVoiceChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L933-L946>)



```go
type GuildStageVoiceChannel struct {
    VideoQualityMode VideoQualityMode
    // contains filtered or unexported fields
}
```

<a name="GuildStageVoiceChannel.Bitrate"></a>
### func \(GuildStageVoiceChannel\) [Bitrate](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1015>)

```go
func (c GuildStageVoiceChannel) Bitrate() int
```



<a name="GuildStageVoiceChannel.CreatedAt"></a>
### func \(GuildStageVoiceChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1058>)

```go
func (c GuildStageVoiceChannel) CreatedAt() time.Time
```



<a name="GuildStageVoiceChannel.DefaultAutoArchiveDuration"></a>
### func \(GuildStageVoiceChannel\) [DefaultAutoArchiveDuration](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1050>)

```go
func (c GuildStageVoiceChannel) DefaultAutoArchiveDuration() AutoArchiveDuration
```

DefaultAutoArchiveDuration is always 0 for GuildStageVoiceChannel\(s\) as they do not have their own AutoArchiveDuration.

<a name="GuildStageVoiceChannel.GuildID"></a>
### func \(GuildStageVoiceChannel\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1007>)

```go
func (c GuildStageVoiceChannel) GuildID() snowflake.ID
```



<a name="GuildStageVoiceChannel.ID"></a>
### func \(GuildStageVoiceChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L999>)

```go
func (c GuildStageVoiceChannel) ID() snowflake.ID
```



<a name="GuildStageVoiceChannel.LastMessageID"></a>
### func \(GuildStageVoiceChannel\) [LastMessageID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1031>)

```go
func (c GuildStageVoiceChannel) LastMessageID() *snowflake.ID
```



<a name="GuildStageVoiceChannel.LastPinTimestamp"></a>
### func \(GuildStageVoiceChannel\) [LastPinTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1036>)

```go
func (c GuildStageVoiceChannel) LastPinTimestamp() *time.Time
```

LastPinTimestamp always returns nil for GuildStageVoiceChannel\(s\) as they cannot have pinned messages.

<a name="GuildStageVoiceChannel.MarshalJSON"></a>
### func \(GuildStageVoiceChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L969>)

```go
func (c GuildStageVoiceChannel) MarshalJSON() ([]byte, error)
```



<a name="GuildStageVoiceChannel.Mention"></a>
### func \(GuildStageVoiceChannel\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L991>)

```go
func (c GuildStageVoiceChannel) Mention() string
```



<a name="GuildStageVoiceChannel.NSFW"></a>
### func \(GuildStageVoiceChannel\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1045>)

```go
func (c GuildStageVoiceChannel) NSFW() bool
```



<a name="GuildStageVoiceChannel.Name"></a>
### func \(GuildStageVoiceChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1003>)

```go
func (c GuildStageVoiceChannel) Name() string
```



<a name="GuildStageVoiceChannel.ParentID"></a>
### func \(GuildStageVoiceChannel\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1027>)

```go
func (c GuildStageVoiceChannel) ParentID() *snowflake.ID
```



<a name="GuildStageVoiceChannel.PermissionOverwrites"></a>
### func \(GuildStageVoiceChannel\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1011>)

```go
func (c GuildStageVoiceChannel) PermissionOverwrites() PermissionOverwrites
```



<a name="GuildStageVoiceChannel.Position"></a>
### func \(GuildStageVoiceChannel\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1023>)

```go
func (c GuildStageVoiceChannel) Position() int
```



<a name="GuildStageVoiceChannel.RTCRegion"></a>
### func \(GuildStageVoiceChannel\) [RTCRegion](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1019>)

```go
func (c GuildStageVoiceChannel) RTCRegion() string
```



<a name="GuildStageVoiceChannel.RateLimitPerUser"></a>
### func \(GuildStageVoiceChannel\) [RateLimitPerUser](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1054>)

```go
func (c GuildStageVoiceChannel) RateLimitPerUser() int
```



<a name="GuildStageVoiceChannel.String"></a>
### func \(GuildStageVoiceChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L987>)

```go
func (c GuildStageVoiceChannel) String() string
```



<a name="GuildStageVoiceChannel.Topic"></a>
### func \(GuildStageVoiceChannel\) [Topic](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1041>)

```go
func (c GuildStageVoiceChannel) Topic() *string
```

Topic always returns nil for GuildStageVoiceChannel\(s\) as they do not have their own topic.

<a name="GuildStageVoiceChannel.Type"></a>
### func \(GuildStageVoiceChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L995>)

```go
func (GuildStageVoiceChannel) Type() ChannelType
```



<a name="GuildStageVoiceChannel.UnmarshalJSON"></a>
### func \(\*GuildStageVoiceChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L948>)

```go
func (c *GuildStageVoiceChannel) UnmarshalJSON(data []byte) error
```



<a name="GuildStageVoiceChannelCreate"></a>
## type [GuildStageVoiceChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L160-L171>)



```go
type GuildStageVoiceChannelCreate struct {
    Name                 string                `json:"name"`
    Bitrate              int                   `json:"bitrate,omitempty"`
    UserLimit            int                   `json:"user_limit,omitempty"`
    RateLimitPerUser     int                   `json:"rate_limit_per_user,omitempty"`
    Position             int                   `json:"position,omitempty"`
    PermissionOverwrites []PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID             snowflake.ID          `json:"parent_id,omitempty"`
    NSFW                 bool                  `json:"nsfw,omitempty"`
    RTCRegion            string                `json:"rtc_region,omitempty"`
    VideoQualityMode     VideoQualityMode      `json:"video_quality_mode,omitempty"`
}
```

<a name="GuildStageVoiceChannelCreate.MarshalJSON"></a>
### func \(GuildStageVoiceChannelCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L177>)

```go
func (c GuildStageVoiceChannelCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildStageVoiceChannelCreate.Type"></a>
### func \(GuildStageVoiceChannelCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L173>)

```go
func (c GuildStageVoiceChannelCreate) Type() ChannelType
```



<a name="GuildStageVoiceChannelUpdate"></a>
## type [GuildStageVoiceChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L84-L95>)



```go
type GuildStageVoiceChannelUpdate struct {
    Name                 *string                `json:"name,omitempty"`
    Position             *int                   `json:"position,omitempty"`
    RateLimitPerUser     *int                   `json:"rate_limit_per_user,omitempty"`
    Bitrate              *int                   `json:"bitrate,omitempty"`
    UserLimit            *int                   `json:"user_limit,omitempty"`
    PermissionOverwrites *[]PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID             *snowflake.ID          `json:"parent_id,omitempty"`
    RTCRegion            *string                `json:"rtc_region,omitempty"`
    NSFW                 *bool                  `json:"nsfw,omitempty"`
    VideoQualityMode     *VideoQualityMode      `json:"video_quality_mode,omitempty"`
}
```

<a name="GuildSubscriptionIntegration"></a>
## type [GuildSubscriptionIntegration](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L213-L218>)



```go
type GuildSubscriptionIntegration struct {
    IntegrationID snowflake.ID       `json:"id"`
    Name          string             `json:"name"`
    Enabled       bool               `json:"enabled"`
    Account       IntegrationAccount `json:"account"`
}
```

<a name="GuildSubscriptionIntegration.CreatedAt"></a>
### func \(GuildSubscriptionIntegration\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L239>)

```go
func (i GuildSubscriptionIntegration) CreatedAt() time.Time
```



<a name="GuildSubscriptionIntegration.ID"></a>
### func \(GuildSubscriptionIntegration\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L235>)

```go
func (i GuildSubscriptionIntegration) ID() snowflake.ID
```



<a name="GuildSubscriptionIntegration.MarshalJSON"></a>
### func \(GuildSubscriptionIntegration\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L220>)

```go
func (i GuildSubscriptionIntegration) MarshalJSON() ([]byte, error)
```



<a name="GuildSubscriptionIntegration.Type"></a>
### func \(GuildSubscriptionIntegration\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L231>)

```go
func (GuildSubscriptionIntegration) Type() IntegrationType
```



<a name="GuildTemplate"></a>
## type [GuildTemplate](<https://github.com/disgoorg/disgo/blob/master/discord/guild_template.go#L10-L22>)

GuildTemplate is a template used for copying guilds https://discord.com/developers/docs/resources/guild-template

```go
type GuildTemplate struct {
    Code        string        `json:"code"`
    Name        string        `json:"name"`
    Description *string       `json:"description,omitempty"`
    UsageCount  int           `json:"usage_count"`
    CreatorID   snowflake.ID  `json:"creator_id"`
    Creator     User          `json:"creator"`
    CreatedAt   time.Time     `json:"created_at"`
    UpdatedAt   time.Time     `json:"updated_at"`
    GuildID     snowflake.ID  `json:"source_guild_id"`
    Guild       TemplateGuild `json:"serialized_source_guild"`
    IsDirty     bool          `json:"is_dirty,omitempty"`
}
```

<a name="GuildTemplateCreate"></a>
## type [GuildTemplateCreate](<https://github.com/disgoorg/disgo/blob/master/discord/guild_template.go#L41-L44>)

GuildTemplateCreate is the data used to create a GuildTemplate

```go
type GuildTemplateCreate struct {
    Name        string `json:"name"`
    Description string `json:"description,omitempty"`
}
```

<a name="GuildTemplateUpdate"></a>
## type [GuildTemplateUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/guild_template.go#L47-L50>)

GuildTemplateUpdate is the data used to update a GuildTemplate

```go
type GuildTemplateUpdate struct {
    Name        *string `json:"name,omitempty"`
    Description *string `json:"description,omitempty"`
}
```

<a name="GuildTextChannel"></a>
## type [GuildTextChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L237-L250>)



```go
type GuildTextChannel struct {
    // contains filtered or unexported fields
}
```

<a name="GuildTextChannel.CreatedAt"></a>
### func \(GuildTextChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L351>)

```go
func (c GuildTextChannel) CreatedAt() time.Time
```



<a name="GuildTextChannel.DefaultAutoArchiveDuration"></a>
### func \(GuildTextChannel\) [DefaultAutoArchiveDuration](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L347>)

```go
func (c GuildTextChannel) DefaultAutoArchiveDuration() AutoArchiveDuration
```



<a name="GuildTextChannel.GuildID"></a>
### func \(GuildTextChannel\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L311>)

```go
func (c GuildTextChannel) GuildID() snowflake.ID
```



<a name="GuildTextChannel.ID"></a>
### func \(GuildTextChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L299>)

```go
func (c GuildTextChannel) ID() snowflake.ID
```



<a name="GuildTextChannel.LastMessageID"></a>
### func \(GuildTextChannel\) [LastMessageID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L327>)

```go
func (c GuildTextChannel) LastMessageID() *snowflake.ID
```



<a name="GuildTextChannel.LastPinTimestamp"></a>
### func \(GuildTextChannel\) [LastPinTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L335>)

```go
func (c GuildTextChannel) LastPinTimestamp() *time.Time
```



<a name="GuildTextChannel.MarshalJSON"></a>
### func \(GuildTextChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L273>)

```go
func (c GuildTextChannel) MarshalJSON() ([]byte, error)
```



<a name="GuildTextChannel.Mention"></a>
### func \(GuildTextChannel\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L295>)

```go
func (c GuildTextChannel) Mention() string
```



<a name="GuildTextChannel.NSFW"></a>
### func \(GuildTextChannel\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L343>)

```go
func (c GuildTextChannel) NSFW() bool
```



<a name="GuildTextChannel.Name"></a>
### func \(GuildTextChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L307>)

```go
func (c GuildTextChannel) Name() string
```



<a name="GuildTextChannel.ParentID"></a>
### func \(GuildTextChannel\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L323>)

```go
func (c GuildTextChannel) ParentID() *snowflake.ID
```



<a name="GuildTextChannel.PermissionOverwrites"></a>
### func \(GuildTextChannel\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L315>)

```go
func (c GuildTextChannel) PermissionOverwrites() PermissionOverwrites
```



<a name="GuildTextChannel.Position"></a>
### func \(GuildTextChannel\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L319>)

```go
func (c GuildTextChannel) Position() int
```



<a name="GuildTextChannel.RateLimitPerUser"></a>
### func \(GuildTextChannel\) [RateLimitPerUser](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L331>)

```go
func (c GuildTextChannel) RateLimitPerUser() int
```



<a name="GuildTextChannel.String"></a>
### func \(GuildTextChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L291>)

```go
func (c GuildTextChannel) String() string
```



<a name="GuildTextChannel.Topic"></a>
### func \(GuildTextChannel\) [Topic](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L339>)

```go
func (c GuildTextChannel) Topic() *string
```



<a name="GuildTextChannel.Type"></a>
### func \(GuildTextChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L303>)

```go
func (GuildTextChannel) Type() ChannelType
```



<a name="GuildTextChannel.UnmarshalJSON"></a>
### func \(\*GuildTextChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L252>)

```go
func (c *GuildTextChannel) UnmarshalJSON(data []byte) error
```



<a name="GuildTextChannelCreate"></a>
## type [GuildTextChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L24-L34>)



```go
type GuildTextChannelCreate struct {
    Name                          string                `json:"name"`
    Topic                         string                `json:"topic,omitempty"`
    RateLimitPerUser              int                   `json:"rate_limit_per_user,omitempty"`
    Position                      int                   `json:"position,omitempty"`
    PermissionOverwrites          []PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID                      snowflake.ID          `json:"parent_id,omitempty"`
    NSFW                          bool                  `json:"nsfw,omitempty"`
    DefaultAutoArchiveDuration    AutoArchiveDuration   `json:"default_auto_archive_days,omitempty"`
    DefaultThreadRateLimitPerUser int                   `json:"default_thread_rate_limit_per_user,omitempty"`
}
```

<a name="GuildTextChannelCreate.MarshalJSON"></a>
### func \(GuildTextChannelCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L40>)

```go
func (c GuildTextChannelCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildTextChannelCreate.Type"></a>
### func \(GuildTextChannelCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L36>)

```go
func (c GuildTextChannelCreate) Type() ChannelType
```



<a name="GuildTextChannelUpdate"></a>
## type [GuildTextChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L17-L28>)



```go
type GuildTextChannelUpdate struct {
    Name                          *string                `json:"name,omitempty"`
    Type                          *ChannelType           `json:"type,omitempty"`
    Position                      *int                   `json:"position,omitempty"`
    Topic                         *string                `json:"topic,omitempty"`
    NSFW                          *bool                  `json:"nsfw,omitempty"`
    RateLimitPerUser              *int                   `json:"rate_limit_per_user,omitempty"`
    PermissionOverwrites          *[]PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID                      *snowflake.ID          `json:"parent_id,omitempty"`
    DefaultAutoArchiveDuration    *AutoArchiveDuration   `json:"default_auto_archive_duration,omitempty"`
    DefaultThreadRateLimitPerUser *int                   `json:"default_thread_rate_limit_per_user,omitempty"`
}
```

<a name="GuildThread"></a>
## type [GuildThread](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L790-L806>)



```go
type GuildThread struct {
    OwnerID snowflake.ID

    MessageCount     int
    TotalMessageSent int
    AppliedTags      []snowflake.ID
    MemberCount      int
    ThreadMetadata   ThreadMetadata
    // contains filtered or unexported fields
}
```

<a name="ApplyGuildIDToThread"></a>
### func [ApplyGuildIDToThread](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1365>)

```go
func ApplyGuildIDToThread(guildThread GuildThread, guildID snowflake.ID) GuildThread
```



<a name="GuildThread.CreatedAt"></a>
### func \(GuildThread\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L917>)

```go
func (c GuildThread) CreatedAt() time.Time
```



<a name="GuildThread.DefaultAutoArchiveDuration"></a>
### func \(GuildThread\) [DefaultAutoArchiveDuration](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L913>)

```go
func (c GuildThread) DefaultAutoArchiveDuration() AutoArchiveDuration
```

DefaultAutoArchiveDuration is always 0 for GuildThread\(s\) as they do not have their own AutoArchiveDuration.

<a name="GuildThread.GuildID"></a>
### func \(GuildThread\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L886>)

```go
func (c GuildThread) GuildID() snowflake.ID
```



<a name="GuildThread.ID"></a>
### func \(GuildThread\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L864>)

```go
func (c GuildThread) ID() snowflake.ID
```



<a name="GuildThread.LastMessageID"></a>
### func \(GuildThread\) [LastMessageID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L890>)

```go
func (c GuildThread) LastMessageID() *snowflake.ID
```



<a name="GuildThread.LastPinTimestamp"></a>
### func \(GuildThread\) [LastPinTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L898>)

```go
func (c GuildThread) LastPinTimestamp() *time.Time
```



<a name="GuildThread.MarshalJSON"></a>
### func \(GuildThread\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L832>)

```go
func (c GuildThread) MarshalJSON() ([]byte, error)
```



<a name="GuildThread.Mention"></a>
### func \(GuildThread\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L856>)

```go
func (c GuildThread) Mention() string
```



<a name="GuildThread.NSFW"></a>
### func \(GuildThread\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L878>)

```go
func (c GuildThread) NSFW() bool
```



<a name="GuildThread.Name"></a>
### func \(GuildThread\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L882>)

```go
func (c GuildThread) Name() string
```



<a name="GuildThread.ParentID"></a>
### func \(GuildThread\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L908>)

```go
func (c GuildThread) ParentID() *snowflake.ID
```

ParentID is never nil for GuildThread\(s\).

<a name="GuildThread.PermissionOverwrites"></a>
### func \(GuildThread\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L869>)

```go
func (c GuildThread) PermissionOverwrites() PermissionOverwrites
```

PermissionOverwrites always returns nil for GuildThread\(s\) as they do not have their own PermissionOverwrites.

<a name="GuildThread.Position"></a>
### func \(GuildThread\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L903>)

```go
func (c GuildThread) Position() int
```

Position always returns 0 for GuildThread\(s\) as they do not have their own position.

<a name="GuildThread.RateLimitPerUser"></a>
### func \(GuildThread\) [RateLimitPerUser](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L894>)

```go
func (c GuildThread) RateLimitPerUser() int
```



<a name="GuildThread.String"></a>
### func \(GuildThread\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L852>)

```go
func (c GuildThread) String() string
```



<a name="GuildThread.Topic"></a>
### func \(GuildThread\) [Topic](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L874>)

```go
func (c GuildThread) Topic() *string
```

Topic always returns nil for GuildThread\(s\) as they do not have their own topic.

<a name="GuildThread.Type"></a>
### func \(GuildThread\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L860>)

```go
func (c GuildThread) Type() ChannelType
```



<a name="GuildThread.UnmarshalJSON"></a>
### func \(\*GuildThread\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L808>)

```go
func (c *GuildThread) UnmarshalJSON(data []byte) error
```



<a name="GuildThreadUpdate"></a>
## type [GuildThreadUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L72-L79>)



```go
type GuildThreadUpdate struct {
    Name                *string              `json:"name,omitempty"`
    Archived            *bool                `json:"archived,omitempty"`
    AutoArchiveDuration *AutoArchiveDuration `json:"auto_archive_duration,omitempty"`
    Locked              *bool                `json:"locked,omitempty"`
    Invitable           *bool                `json:"invitable,omitempty"`
    RateLimitPerUser    *int                 `json:"rate_limit_per_user,omitempty"`
}
```

<a name="GuildUpdate"></a>
## type [GuildUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L318-L339>)

GuildUpdate is the payload used to update a Guild

```go
type GuildUpdate struct {
    Name                            *string                                    `json:"name,omitempty"`
    VerificationLevel               *json.Nullable[VerificationLevel]          `json:"verification_level,omitempty"`
    DefaultMessageNotificationLevel *json.Nullable[MessageNotificationsLevel]  `json:"default_message_notification_level,omitempty"`
    ExplicitContentFilterLevel      *json.Nullable[ExplicitContentFilterLevel] `json:"explicit_content_filter_level,omitempty"`
    AFKChannelID                    *snowflake.ID                              `json:"afk_channel_id,omitempty"`
    AFKTimeout                      *int                                       `json:"afk_timeout,omitempty"`
    Icon                            *json.Nullable[Icon]                       `json:"icon,omitempty"`
    OwnerID                         *snowflake.ID                              `json:"owner_id,omitempty"`
    Splash                          *json.Nullable[Icon]                       `json:"splash,omitempty"`
    DiscoverySplash                 *json.Nullable[Icon]                       `json:"discovery_splash,omitempty"`
    Banner                          *json.Nullable[Icon]                       `json:"banner,omitempty"`
    SystemChannelID                 *snowflake.ID                              `json:"system_channel_id,omitempty"`
    SystemChannelFlags              *SystemChannelFlags                        `json:"system_channel_flags,omitempty"`
    RulesChannelID                  *snowflake.ID                              `json:"rules_channel_id,omitempty"`
    PublicUpdatesChannelID          *snowflake.ID                              `json:"public_updates_channel_id,omitempty"`
    SafetyAlertsChannelID           *snowflake.ID                              `json:"safety_alerts_channel_id,omitempty"`
    PreferredLocale                 *string                                    `json:"preferred_locale,omitempty"`
    Features                        *[]GuildFeature                            `json:"features,omitempty"`
    Description                     *string                                    `json:"description,omitempty"`
    PremiumProgressBarEnabled       *bool                                      `json:"premium_progress_bar_enabled,omitempty"`
}
```

<a name="GuildVoiceChannel"></a>
## type [GuildVoiceChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L433-L447>)



```go
type GuildVoiceChannel struct {
    UserLimit int

    VideoQualityMode VideoQualityMode
    // contains filtered or unexported fields
}
```

<a name="GuildVoiceChannel.Bitrate"></a>
### func \(GuildVoiceChannel\) [Bitrate](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L518>)

```go
func (c GuildVoiceChannel) Bitrate() int
```



<a name="GuildVoiceChannel.CreatedAt"></a>
### func \(GuildVoiceChannel\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L561>)

```go
func (c GuildVoiceChannel) CreatedAt() time.Time
```



<a name="GuildVoiceChannel.DefaultAutoArchiveDuration"></a>
### func \(GuildVoiceChannel\) [DefaultAutoArchiveDuration](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L553>)

```go
func (c GuildVoiceChannel) DefaultAutoArchiveDuration() AutoArchiveDuration
```

DefaultAutoArchiveDuration is always 0 for GuildVoiceChannel\(s\) as they do not have their own AutoArchiveDuration.

<a name="GuildVoiceChannel.GuildID"></a>
### func \(GuildVoiceChannel\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L510>)

```go
func (c GuildVoiceChannel) GuildID() snowflake.ID
```



<a name="GuildVoiceChannel.ID"></a>
### func \(GuildVoiceChannel\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L502>)

```go
func (c GuildVoiceChannel) ID() snowflake.ID
```



<a name="GuildVoiceChannel.LastMessageID"></a>
### func \(GuildVoiceChannel\) [LastMessageID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L534>)

```go
func (c GuildVoiceChannel) LastMessageID() *snowflake.ID
```



<a name="GuildVoiceChannel.LastPinTimestamp"></a>
### func \(GuildVoiceChannel\) [LastPinTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L539>)

```go
func (c GuildVoiceChannel) LastPinTimestamp() *time.Time
```

LastPinTimestamp always returns nil for GuildVoiceChannel\(s\) as they cannot have pinned messages.

<a name="GuildVoiceChannel.MarshalJSON"></a>
### func \(GuildVoiceChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L471>)

```go
func (c GuildVoiceChannel) MarshalJSON() ([]byte, error)
```



<a name="GuildVoiceChannel.Mention"></a>
### func \(GuildVoiceChannel\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L494>)

```go
func (c GuildVoiceChannel) Mention() string
```



<a name="GuildVoiceChannel.NSFW"></a>
### func \(GuildVoiceChannel\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L548>)

```go
func (c GuildVoiceChannel) NSFW() bool
```



<a name="GuildVoiceChannel.Name"></a>
### func \(GuildVoiceChannel\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L506>)

```go
func (c GuildVoiceChannel) Name() string
```



<a name="GuildVoiceChannel.ParentID"></a>
### func \(GuildVoiceChannel\) [ParentID](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L530>)

```go
func (c GuildVoiceChannel) ParentID() *snowflake.ID
```



<a name="GuildVoiceChannel.PermissionOverwrites"></a>
### func \(GuildVoiceChannel\) [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L514>)

```go
func (c GuildVoiceChannel) PermissionOverwrites() PermissionOverwrites
```



<a name="GuildVoiceChannel.Position"></a>
### func \(GuildVoiceChannel\) [Position](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L526>)

```go
func (c GuildVoiceChannel) Position() int
```



<a name="GuildVoiceChannel.RTCRegion"></a>
### func \(GuildVoiceChannel\) [RTCRegion](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L522>)

```go
func (c GuildVoiceChannel) RTCRegion() string
```



<a name="GuildVoiceChannel.RateLimitPerUser"></a>
### func \(GuildVoiceChannel\) [RateLimitPerUser](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L557>)

```go
func (c GuildVoiceChannel) RateLimitPerUser() int
```



<a name="GuildVoiceChannel.String"></a>
### func \(GuildVoiceChannel\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L490>)

```go
func (c GuildVoiceChannel) String() string
```



<a name="GuildVoiceChannel.Topic"></a>
### func \(GuildVoiceChannel\) [Topic](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L544>)

```go
func (c GuildVoiceChannel) Topic() *string
```

Topic always returns nil for GuildVoiceChannel\(s\) as they do not have their own topic.

<a name="GuildVoiceChannel.Type"></a>
### func \(GuildVoiceChannel\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L498>)

```go
func (GuildVoiceChannel) Type() ChannelType
```



<a name="GuildVoiceChannel.UnmarshalJSON"></a>
### func \(\*GuildVoiceChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L449>)

```go
func (c *GuildVoiceChannel) UnmarshalJSON(data []byte) error
```



<a name="GuildVoiceChannelCreate"></a>
## type [GuildVoiceChannelCreate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L59-L70>)



```go
type GuildVoiceChannelCreate struct {
    Name                 string                `json:"name"`
    Bitrate              int                   `json:"bitrate,omitempty"`
    UserLimit            int                   `json:"user_limit,omitempty"`
    RateLimitPerUser     int                   `json:"rate_limit_per_user,omitempty"`
    Position             int                   `json:"position,omitempty"`
    PermissionOverwrites []PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID             snowflake.ID          `json:"parent_id,omitempty"`
    NSFW                 bool                  `json:"nsfw,omitempty"`
    RTCRegion            string                `json:"rtc_region,omitempty"`
    VideoQualityMode     VideoQualityMode      `json:"video_quality_mode,omitempty"`
}
```

<a name="GuildVoiceChannelCreate.MarshalJSON"></a>
### func \(GuildVoiceChannelCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L76>)

```go
func (c GuildVoiceChannelCreate) MarshalJSON() ([]byte, error)
```



<a name="GuildVoiceChannelCreate.Type"></a>
### func \(GuildVoiceChannelCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/channel_create.go#L72>)

```go
func (c GuildVoiceChannelCreate) Type() ChannelType
```



<a name="GuildVoiceChannelUpdate"></a>
## type [GuildVoiceChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/channel_update.go#L33-L44>)



```go
type GuildVoiceChannelUpdate struct {
    Name                 *string                `json:"name,omitempty"`
    Position             *int                   `json:"position,omitempty"`
    RateLimitPerUser     *int                   `json:"rate_limit_per_user,omitempty"`
    Bitrate              *int                   `json:"bitrate,omitempty"`
    UserLimit            *int                   `json:"user_limit,omitempty"`
    PermissionOverwrites *[]PermissionOverwrite `json:"permission_overwrites,omitempty"`
    ParentID             *snowflake.ID          `json:"parent_id,omitempty"`
    RTCRegion            *string                `json:"rtc_region,omitempty"`
    NSFW                 *bool                  `json:"nsfw,omitempty"`
    VideoQualityMode     *VideoQualityMode      `json:"video_quality_mode,omitempty"`
}
```

<a name="GuildWelcomeChannel"></a>
## type [GuildWelcomeChannel](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L273-L278>)

GuildWelcomeChannel is one of the channels in a GuildWelcomeScreen

```go
type GuildWelcomeChannel struct {
    ChannelID   snowflake.ID  `json:"channel_id"`
    Description string        `json:"description"`
    EmojiID     *snowflake.ID `json:"emoji_id,omitempty"`
    EmojiName   *string       `json:"emoji_name,omitempty"`
}
```

<a name="GuildWelcomeScreen"></a>
## type [GuildWelcomeScreen](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L267-L270>)

GuildWelcomeScreen is the Welcome Screen of a Guild

```go
type GuildWelcomeScreen struct {
    Description     *string               `json:"description,omitempty"`
    WelcomeChannels []GuildWelcomeChannel `json:"welcome_channels"`
}
```

<a name="GuildWelcomeScreenUpdate"></a>
## type [GuildWelcomeScreenUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L281-L285>)

GuildWelcomeScreenUpdate is used to update the GuildWelcomeScreen of a Guild

```go
type GuildWelcomeScreenUpdate struct {
    Enabled         *bool                  `json:"enabled,omitempty"`
    WelcomeChannels *[]GuildWelcomeChannel `json:"welcome_channels,omitempty"`
    Description     *string                `json:"description,omitempty"`
}
```

<a name="Icon"></a>
## type [Icon](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L46-L49>)



```go
type Icon struct {
    Type IconType
    Data []byte
}
```

<a name="NewIcon"></a>
### func [NewIcon](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L32>)

```go
func NewIcon(iconType IconType, reader io.Reader) (*Icon, error)
```



<a name="NewIconRaw"></a>
### func [NewIconRaw](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L40>)

```go
func NewIconRaw(iconType IconType, src []byte) *Icon
```



<a name="Icon.MarshalJSON"></a>
### func \(Icon\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L51>)

```go
func (i Icon) MarshalJSON() ([]byte, error)
```



<a name="Icon.String"></a>
### func \(Icon\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L55>)

```go
func (i Icon) String() string
```



<a name="IconType"></a>
## type [IconType](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L11>)



```go
type IconType string
```

<a name="IconTypeJPEG"></a>

```go
const (
    IconTypeJPEG    IconType = "image/jpeg"
    IconTypePNG     IconType = "image/png"
    IconTypeWEBP    IconType = "image/webp"
    IconTypeGIF     IconType = "image/gif"
    IconTypeUnknown          = IconTypeJPEG
)
```

<a name="IconType.GetHeader"></a>
### func \(IconType\) [GetHeader](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L25>)

```go
func (t IconType) GetHeader() string
```



<a name="IconType.GetMIME"></a>
### func \(IconType\) [GetMIME](<https://github.com/disgoorg/disgo/blob/master/discord/icon.go#L21>)

```go
func (t IconType) GetMIME() string
```



<a name="IncomingWebhook"></a>
## type [IncomingWebhook](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L81-L90>)



```go
type IncomingWebhook struct {
    ChannelID     snowflake.ID  `json:"channel_id"`
    GuildID       snowflake.ID  `json:"guild_id"`
    Token         string        `json:"token"`
    ApplicationID *snowflake.ID `json:"application_id"`
    User          User          `json:"user"`
    // contains filtered or unexported fields
}
```

<a name="IncomingWebhook.Avatar"></a>
### func \(IncomingWebhook\) [Avatar](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L133>)

```go
func (w IncomingWebhook) Avatar() *string
```



<a name="IncomingWebhook.AvatarURL"></a>
### func \(IncomingWebhook\) [AvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L144>)

```go
func (w IncomingWebhook) AvatarURL(opts ...CDNOpt) *string
```



<a name="IncomingWebhook.CreatedAt"></a>
### func \(IncomingWebhook\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L160>)

```go
func (w IncomingWebhook) CreatedAt() time.Time
```



<a name="IncomingWebhook.DefaultAvatarURL"></a>
### func \(IncomingWebhook\) [DefaultAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L152>)

```go
func (w IncomingWebhook) DefaultAvatarURL(opts ...CDNOpt) string
```



<a name="IncomingWebhook.EffectiveAvatarURL"></a>
### func \(IncomingWebhook\) [EffectiveAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L137>)

```go
func (w IncomingWebhook) EffectiveAvatarURL(opts ...CDNOpt) string
```



<a name="IncomingWebhook.ID"></a>
### func \(IncomingWebhook\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L125>)

```go
func (w IncomingWebhook) ID() snowflake.ID
```



<a name="IncomingWebhook.MarshalJSON"></a>
### func \(IncomingWebhook\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L110>)

```go
func (w IncomingWebhook) MarshalJSON() ([]byte, error)
```



<a name="IncomingWebhook.Name"></a>
### func \(IncomingWebhook\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L129>)

```go
func (w IncomingWebhook) Name() string
```



<a name="IncomingWebhook.Type"></a>
### func \(IncomingWebhook\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L121>)

```go
func (IncomingWebhook) Type() WebhookType
```



<a name="IncomingWebhook.URL"></a>
### func \(IncomingWebhook\) [URL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L156>)

```go
func (w IncomingWebhook) URL() string
```



<a name="IncomingWebhook.UnmarshalJSON"></a>
### func \(\*IncomingWebhook\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L92>)

```go
func (w *IncomingWebhook) UnmarshalJSON(data []byte) error
```



<a name="InstallParams"></a>
## type [InstallParams](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L90-L93>)



```go
type InstallParams struct {
    Scopes      []OAuth2Scope `json:"scopes"`
    Permissions Permissions   `json:"permissions"`
}
```

<a name="Integration"></a>
## type [Integration](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L39-L44>)

Integration \(https://discord.com/developers/docs/resources/guild#integration-object\)

```go
type Integration interface {
    json.Marshaler
    Type() IntegrationType
    ID() snowflake.ID
    CreatedAt() time.Time
}
```

<a name="IntegrationAccount"></a>
## type [IntegrationAccount](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L23-L26>)

IntegrationAccount \(https://discord.com/developers/docs/resources/guild#integration-account-object\)

```go
type IntegrationAccount struct {
    ID   string `json:"id"`
    Name string `json:"name"`
}
```

<a name="IntegrationApplication"></a>
## type [IntegrationApplication](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L29-L36>)

IntegrationApplication \(https://discord.com/developers/docs/resources/guild#integration-application-object\)

```go
type IntegrationApplication struct {
    ID          snowflake.ID `json:"id"`
    Name        string       `json:"name"`
    Icon        string       `json:"icon"`
    Description string       `json:"description"`
    Summary     string       `json:"summary"`
    Client      User         `json:"bot"`
}
```

<a name="IntegrationExpireBehavior"></a>
## type [IntegrationExpireBehavior](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L174>)



```go
type IntegrationExpireBehavior int
```

<a name="IntegrationExpireBehaviorRemoveRole"></a>

```go
const (
    IntegrationExpireBehaviorRemoveRole IntegrationExpireBehavior = iota
    IntegrationExpireBehaviorKick
)
```

<a name="IntegrationType"></a>
## type [IntegrationType](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L12>)

IntegrationType the type of Integration

```go
type IntegrationType string
```

<a name="IntegrationTypeTwitch"></a>All IntegrationType\(s\)

```go
const (
    IntegrationTypeTwitch            IntegrationType = "twitch"
    IntegrationTypeYouTube           IntegrationType = "youtube"
    IntegrationTypeBot               IntegrationType = "discord"
    IntegrationTypeGuildSubscription IntegrationType = "guild_subscription"
)
```

<a name="Interaction"></a>
## type [Interaction](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L52-L73>)

Interaction is used for easier unmarshalling of different Interaction\(s\)

```go
type Interaction interface {
    Type() InteractionType
    ID() snowflake.ID
    ApplicationID() snowflake.ID
    Token() string
    Version() int
    GuildID() *snowflake.ID
    // Deprecated: Use Interaction.Channel instead
    ChannelID() snowflake.ID
    Channel() InteractionChannel
    Locale() Locale
    GuildLocale() *Locale
    Member() *ResolvedMember
    User() User
    AppPermissions() *Permissions
    Entitlements() []Entitlement
    AuthorizingIntegrationOwners() map[ApplicationIntegrationType]snowflake.ID
    Context() InteractionContextType
    CreatedAt() time.Time
    // contains filtered or unexported methods
}
```

<a name="UnmarshalInteraction"></a>
### func [UnmarshalInteraction](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L75>)

```go
func UnmarshalInteraction(data []byte) (Interaction, error)
```



<a name="InteractionChannel"></a>
## type [InteractionChannel](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L163-L166>)



```go
type InteractionChannel struct {
    MessageChannel
    Permissions Permissions `json:"permissions"`
}
```

<a name="InteractionChannel.MarshalJSON"></a>
### func \(InteractionChannel\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L189>)

```go
func (c InteractionChannel) MarshalJSON() ([]byte, error)
```



<a name="InteractionChannel.UnmarshalJSON"></a>
### func \(\*InteractionChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L168>)

```go
func (c *InteractionChannel) UnmarshalJSON(data []byte) error
```



<a name="InteractionContextType"></a>
## type [InteractionContextType](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L23>)



```go
type InteractionContextType int
```

<a name="InteractionContextTypeGuild"></a>

```go
const (
    InteractionContextTypeGuild InteractionContextType = iota
    InteractionContextTypeBotDM
    InteractionContextTypePrivateChannel
)
```

<a name="InteractionMetadata"></a>
## type [InteractionMetadata](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L469-L478>)



```go
type InteractionMetadata struct {
    ID                            snowflake.ID                                `json:"id"`
    Type                          InteractionType                             `json:"type"`
    User                          User                                        `json:"user"`
    AuthorizingIntegrationOwners  map[ApplicationIntegrationType]snowflake.ID `json:"authorizing_integration_owners"`
    OriginalResponseMessageID     *snowflake.ID                               `json:"original_response_message_id"`
    Name                          *string                                     `json:"name"`
    InteractedMessageID           *snowflake.ID                               `json:"interacted_message_id"`
    TriggeringInteractionMetadata *InteractionMetadata                        `json:"triggering_interaction_metadata"`
}
```

<a name="InteractionResponse"></a>
## type [InteractionResponse](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L21-L24>)

InteractionResponse is how you answer interactions. If an answer is not sent within 3 seconds of receiving it, the interaction is failed, and you will be unable to respond to it.

```go
type InteractionResponse struct {
    Type InteractionResponseType `json:"type"`
    Data InteractionResponseData `json:"data,omitempty"`
}
```

<a name="InteractionResponse.ToBody"></a>
### func \(InteractionResponse\) [ToBody](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L27>)

```go
func (r InteractionResponse) ToBody() (any, error)
```

ToBody returns the InteractionResponse ready for body

<a name="InteractionResponseCreator"></a>
## type [InteractionResponseCreator](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L38-L40>)



```go
type InteractionResponseCreator interface {
    ToResponseBody(response InteractionResponse) (any, error)
}
```

<a name="InteractionResponseData"></a>
## type [InteractionResponseData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L34-L36>)



```go
type InteractionResponseData interface {
    // contains filtered or unexported methods
}
```

<a name="InteractionResponseType"></a>
## type [InteractionResponseType](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_response.go#L4>)

InteractionResponseType indicates the type of slash command response, whether it's responding immediately or deferring to edit your response later

```go
type InteractionResponseType int
```

<a name="InteractionResponseTypePong"></a>Constants for the InteractionResponseType\(s\)

```go
const (
    InteractionResponseTypePong InteractionResponseType = iota + 1

    InteractionResponseTypeCreateMessage
    InteractionResponseTypeDeferredCreateMessage
    InteractionResponseTypeDeferredUpdateMessage
    InteractionResponseTypeUpdateMessage
    InteractionResponseTypeAutocompleteResult
    InteractionResponseTypeModal
    InteractionResponseTypePremiumRequired
)
```

<a name="InteractionType"></a>
## type [InteractionType](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L12>)

InteractionType is the type of Interaction

```go
type InteractionType int
```

<a name="InteractionTypePing"></a>Supported InteractionType\(s\)

```go
const (
    InteractionTypePing InteractionType = iota + 1
    InteractionTypeApplicationCommand
    InteractionTypeComponent
    InteractionTypeAutocomplete
    InteractionTypeModalSubmit
)
```

<a name="InteractiveComponent"></a>
## type [InteractiveComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L37-L41>)



```go
type InteractiveComponent interface {
    Component
    ID() string
    // contains filtered or unexported methods
}
```

<a name="Invite"></a>
## type [Invite](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L20-L32>)

Invite is a partial invite struct

```go
type Invite struct {
    Code                     string               `json:"code"`
    Guild                    *InviteGuild         `json:"guild"`
    Channel                  *InviteChannel       `json:"channel"`
    ChannelID                snowflake.ID         `json:"channel_id"`
    Inviter                  *User                `json:"inviter"`
    TargetUser               *User                `json:"target_user"`
    TargetType               InviteTargetType     `json:"target_user_type"`
    ApproximatePresenceCount int                  `json:"approximate_presence_count"`
    ApproximateMemberCount   int                  `json:"approximate_member_count"`
    ExpiresAt                *time.Time           `json:"expires_at"`
    GuildScheduledEvent      *GuildScheduledEvent `json:"guild_scheduled_event"`
}
```

<a name="Invite.URL"></a>
### func \(Invite\) [URL](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L34>)

```go
func (i Invite) URL() string
```



<a name="InviteChannel"></a>
## type [InviteChannel](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L52-L57>)



```go
type InviteChannel struct {
    ID   snowflake.ID `json:"id"`
    Type ChannelType  `json:"type"`
    Name string       `json:"name"`
    Icon *string      `json:"icon,omitempty"`
}
```

<a name="InviteChannel.IconURL"></a>
### func \(InviteChannel\) [IconURL](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L61>)

```go
func (c InviteChannel) IconURL(opts ...CDNOpt) *string
```

IconURL returns the Icon URL of this channel. This will be nil for every ChannelType except ChannelTypeGroupDM

<a name="InviteCreate"></a>
## type [InviteCreate](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L82-L90>)



```go
type InviteCreate struct {
    MaxAge              *int             `json:"max_age,omitempty"`
    MaxUses             *int             `json:"max_uses,omitempty"`
    Temporary           bool             `json:"temporary,omitempty"`
    Unique              bool             `json:"unique,omitempty"`
    TargetType          InviteTargetType `json:"target_type,omitempty"`
    TargetUserID        snowflake.ID     `json:"target_user_id,omitempty"`
    TargetApplicationID snowflake.ID     `json:"target_application_id,omitempty"`
}
```

<a name="InviteGuild"></a>
## type [InviteGuild](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L70-L80>)

An InviteGuild is the Guild of an Invite

```go
type InviteGuild struct {
    ID                snowflake.ID      `json:"id"`
    Name              string            `json:"name"`
    Splash            *string           `json:"splash"`
    Banner            *string           `json:"banner"`
    Description       *string           `json:"description"`
    Icon              *string           `json:"icon"`
    Features          []GuildFeature    `json:"features"`
    VerificationLevel VerificationLevel `json:"verification_level"`
    VanityURLCode     *string           `json:"vanity_url_code"`
}
```

<a name="InviteTargetType"></a>
## type [InviteTargetType](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L10>)

InviteTargetType is type of target an Invite uses

```go
type InviteTargetType int
```

<a name="InviteTargetTypeStream"></a>Constants for TargetType

```go
const (
    InviteTargetTypeStream InviteTargetType = iota + 1
    InviteTargetTypeEmbeddedApplication
    InviteTargetTypeRoleSubscriptionsPurchase
)
```

<a name="Locale"></a>
## type [Locale](<https://github.com/disgoorg/disgo/blob/master/discord/locale.go#L3>)



```go
type Locale string
```

<a name="LocaleEnglishUS"></a>

```go
const (
    LocaleEnglishUS    Locale = "en-US"
    LocaleEnglishGB    Locale = "en-GB"
    LocaleBulgarian    Locale = "bg"
    LocaleChineseCN    Locale = "zh-CN"
    LocaleChineseTW    Locale = "zh-TW"
    LocaleCroatian     Locale = "hr"
    LocaleCzech        Locale = "cs"
    LocaleDanish       Locale = "da"
    LocaleDutch        Locale = "nl"
    LocaleFinnish      Locale = "fi"
    LocaleFrench       Locale = "fr"
    LocaleGerman       Locale = "de"
    LocaleGreek        Locale = "el"
    LocaleHindi        Locale = "hi"
    LocaleHungarian    Locale = "hu"
    LocaleIndonesian   Locale = "id"
    LocaleItalian      Locale = "it"
    LocaleJapanese     Locale = "ja"
    LocaleKorean       Locale = "ko"
    LocaleLithuanian   Locale = "lt"
    LocaleNorwegian    Locale = "no"
    LocalePolish       Locale = "pl"
    LocalePortugueseBR Locale = "pt-BR"
    LocaleRomanian     Locale = "ro"
    LocaleRussian      Locale = "ru"
    LocaleSpanishES    Locale = "es-ES"
    LocaleSwedish      Locale = "sv-SE"
    LocaleThai         Locale = "th"
    LocaleTurkish      Locale = "tr"
    LocaleUkrainian    Locale = "uk"
    LocaleVietnamese   Locale = "vi"
    LocaleUnknown      Locale = ""
)
```

<a name="Locale.Code"></a>
### func \(Locale\) [Code](<https://github.com/disgoorg/disgo/blob/master/discord/locale.go#L12>)

```go
func (l Locale) Code() string
```



<a name="Locale.String"></a>
### func \(Locale\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/locale.go#L5>)

```go
func (l Locale) String() string
```



<a name="MFALevel"></a>
## type [MFALevel](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L88>)

The MFALevel of a Guild

```go
type MFALevel int
```

<a name="MFALevelNone"></a>Constants for MFALevel

```go
const (
    MFALevelNone MFALevel = iota
    MFALevelElevated
)
```

<a name="Member"></a>
## type [Member](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L15-L31>)

Member is a discord GuildMember

```go
type Member struct {
    User                       User                  `json:"user"`
    Nick                       *string               `json:"nick"`
    Avatar                     *string               `json:"avatar"`
    RoleIDs                    []snowflake.ID        `json:"roles,omitempty"`
    JoinedAt                   time.Time             `json:"joined_at"`
    PremiumSince               *time.Time            `json:"premium_since,omitempty"`
    Deaf                       bool                  `json:"deaf,omitempty"`
    Mute                       bool                  `json:"mute,omitempty"`
    Flags                      MemberFlags           `json:"flags"`
    Pending                    bool                  `json:"pending"`
    CommunicationDisabledUntil *time.Time            `json:"communication_disabled_until"`
    AvatarDecorationData       *AvatarDecorationData `json:"avatar_decoration_data"`

    // This field is not present everywhere in the API and often populated by disgo
    GuildID snowflake.ID `json:"guild_id"`
}
```

<a name="Member.AvatarDecorationURL"></a>
### func \(Member\) [AvatarDecorationURL](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L72>)

```go
func (m Member) AvatarDecorationURL(opts ...CDNOpt) *string
```

AvatarDecorationURL returns the avatar decoration URL if set or nil

<a name="Member.AvatarURL"></a>
### func \(Member\) [AvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L63>)

```go
func (m Member) AvatarURL(opts ...CDNOpt) *string
```

AvatarURL returns the guild\-specific avatar URL of the user if set or nil

<a name="Member.CreatedAt"></a>
### func \(Member\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L80>)

```go
func (m Member) CreatedAt() time.Time
```



<a name="Member.EffectiveAvatarURL"></a>
### func \(Member\) [EffectiveAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L52>)

```go
func (m Member) EffectiveAvatarURL(opts ...CDNOpt) string
```

EffectiveAvatarURL returns the guild\-specific avatar URL of the user if set, falling back to the effective avatar URL of the user

<a name="Member.EffectiveName"></a>
### func \(Member\) [EffectiveName](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L44>)

```go
func (m Member) EffectiveName() string
```

EffectiveName returns the nickname of the member if set, falling back to User.EffectiveName\(\)

<a name="Member.Mention"></a>
### func \(Member\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L39>)

```go
func (m Member) Mention() string
```

Mention returns a mention of the user

<a name="Member.String"></a>
### func \(Member\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L34>)

```go
func (m Member) String() string
```

String returns a mention of the user

<a name="MemberAdd"></a>
## type [MemberAdd](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L85-L91>)

MemberAdd is used to add a member via the oauth2 access token to a guild

```go
type MemberAdd struct {
    AccessToken string         `json:"access_token"`
    Nick        string         `json:"nick,omitempty"`
    Roles       []snowflake.ID `json:"roles,omitempty"`
    Mute        bool           `json:"mute,omitempty"`
    Deaf        bool           `json:"deaf,omitempty"`
}
```

<a name="MemberFlags"></a>
## type [MemberFlags](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L109>)



```go
type MemberFlags int
```

<a name="MemberFlagDidRejoin"></a>

```go
const (
    MemberFlagDidRejoin MemberFlags = 1 << iota
    MemberFlagCompletedOnboarding
    MemberFlagBypassesVerification
    MemberFlagStartedOnboarding
    MemberFlagsNone MemberFlags = 0
)
```

<a name="MemberFlags.Add"></a>
### func \(MemberFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L120>)

```go
func (f MemberFlags) Add(bits ...MemberFlags) MemberFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="MemberFlags.Has"></a>
### func \(MemberFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L130>)

```go
func (f MemberFlags) Has(bits ...MemberFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="MemberFlags.Missing"></a>
### func \(MemberFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L135>)

```go
func (f MemberFlags) Missing(bits ...MemberFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="MemberFlags.Remove"></a>
### func \(MemberFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L125>)

```go
func (f MemberFlags) Remove(bits ...MemberFlags) MemberFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="MemberPermissionOverwrite"></a>
## type [MemberPermissionOverwrite](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L116-L120>)



```go
type MemberPermissionOverwrite struct {
    UserID snowflake.ID `json:"id"`
    Allow  Permissions  `json:"allow"`
    Deny   Permissions  `json:"deny"`
}
```

<a name="MemberPermissionOverwrite.ID"></a>
### func \(MemberPermissionOverwrite\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L122>)

```go
func (o MemberPermissionOverwrite) ID() snowflake.ID
```



<a name="MemberPermissionOverwrite.MarshalJSON"></a>
### func \(MemberPermissionOverwrite\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L126>)

```go
func (o MemberPermissionOverwrite) MarshalJSON() ([]byte, error)
```



<a name="MemberPermissionOverwrite.Type"></a>
### func \(MemberPermissionOverwrite\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L137>)

```go
func (o MemberPermissionOverwrite) Type() PermissionOverwriteType
```



<a name="MemberPermissionOverwriteUpdate"></a>
## type [MemberPermissionOverwriteUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L165-L168>)



```go
type MemberPermissionOverwriteUpdate struct {
    Allow *Permissions `json:"allow,omitempty"`
    Deny  *Permissions `json:"deny,omitempty"`
}
```

<a name="MemberPermissionOverwriteUpdate.MarshalJSON"></a>
### func \(MemberPermissionOverwriteUpdate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L170>)

```go
func (u MemberPermissionOverwriteUpdate) MarshalJSON() ([]byte, error)
```



<a name="MemberPermissionOverwriteUpdate.Type"></a>
### func \(MemberPermissionOverwriteUpdate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L181>)

```go
func (MemberPermissionOverwriteUpdate) Type() PermissionOverwriteType
```



<a name="MemberUpdate"></a>
## type [MemberUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/member.go#L94-L102>)

MemberUpdate is used to modify a member

```go
type MemberUpdate struct {
    ChannelID                  *snowflake.ID             `json:"channel_id,omitempty"`
    Nick                       *string                   `json:"nick,omitempty"`
    Roles                      *[]snowflake.ID           `json:"roles,omitempty"`
    Mute                       *bool                     `json:"mute,omitempty"`
    Deaf                       *bool                     `json:"deaf,omitempty"`
    Flags                      *MemberFlags              `json:"flags,omitempty"`
    CommunicationDisabledUntil *json.Nullable[time.Time] `json:"communication_disabled_until,omitempty"`
}
```

<a name="MembershipState"></a>
## type [MembershipState](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L253>)



```go
type MembershipState int
```

<a name="MembershipStateInvited"></a>

```go
const (
    MembershipStateInvited MembershipState = iota + 1
    MembershipStateAccepted
)
```

<a name="MentionChannel"></a>
## type [MentionChannel](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L340-L345>)



```go
type MentionChannel struct {
    ID      snowflake.ID `json:"id"`
    GuildID snowflake.ID `json:"guild_id"`
    Type    ChannelType  `json:"type"`
    Name    string       `json:"name"`
}
```

<a name="MentionType"></a>
## type [MentionType](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L10-L12>)



```go
type MentionType struct {
    *regexp.Regexp
}
```

<a name="Mentionable"></a>
## type [Mentionable](<https://github.com/disgoorg/disgo/blob/master/discord/mentionable.go#L26-L29>)



```go
type Mentionable interface {
    fmt.Stringer
    Mention() string
}
```

<a name="MentionableSelectMenuComponent"></a>
## type [MentionableSelectMenuComponent](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L418-L425>)



```go
type MentionableSelectMenuComponent struct {
    CustomID      string                   `json:"custom_id"`
    Placeholder   string                   `json:"placeholder,omitempty"`
    DefaultValues []SelectMenuDefaultValue `json:"default_values,omitempty"`
    MinValues     *int                     `json:"min_values,omitempty"`
    MaxValues     int                      `json:"max_values,omitempty"`
    Disabled      bool                     `json:"disabled,omitempty"`
}
```

<a name="NewMentionableSelectMenu"></a>
### func [NewMentionableSelectMenu](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L411>)

```go
func NewMentionableSelectMenu(customID string, placeholder string) MentionableSelectMenuComponent
```

NewMentionableSelectMenu builds a new SelectMenuComponent from the provided values

<a name="MentionableSelectMenuComponent.AddDefaultValue"></a>
### func \(MentionableSelectMenuComponent\) [AddDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L500>)

```go
func (c MentionableSelectMenuComponent) AddDefaultValue(value SelectMenuDefaultValue) MentionableSelectMenuComponent
```

AddDefaultValue returns a new MentionableSelectMenuComponent with the provided default value added. SelectMenuDefaultValue can easily be constructed using helpers like NewSelectMenuDefaultUser or NewSelectMenuDefaultRole

<a name="MentionableSelectMenuComponent.AsDisabled"></a>
### func \(MentionableSelectMenuComponent\) [AsDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L481>)

```go
func (c MentionableSelectMenuComponent) AsDisabled() MentionableSelectMenuComponent
```

AsDisabled returns a new MentionableSelectMenuComponent but disabled

<a name="MentionableSelectMenuComponent.AsEnabled"></a>
### func \(MentionableSelectMenuComponent\) [AsEnabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L475>)

```go
func (c MentionableSelectMenuComponent) AsEnabled() MentionableSelectMenuComponent
```

AsEnabled returns a new MentionableSelectMenuComponent but enabled

<a name="MentionableSelectMenuComponent.ID"></a>
### func \(MentionableSelectMenuComponent\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L442>)

```go
func (c MentionableSelectMenuComponent) ID() string
```



<a name="MentionableSelectMenuComponent.MarshalJSON"></a>
### func \(MentionableSelectMenuComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L427>)

```go
func (c MentionableSelectMenuComponent) MarshalJSON() ([]byte, error)
```



<a name="MentionableSelectMenuComponent.RemoveDefaultValue"></a>
### func \(MentionableSelectMenuComponent\) [RemoveDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L506>)

```go
func (c MentionableSelectMenuComponent) RemoveDefaultValue(index int) MentionableSelectMenuComponent
```

RemoveDefaultValue returns a new MentionableSelectMenuComponent with the provided default value at the index removed

<a name="MentionableSelectMenuComponent.SetDefaultValues"></a>
### func \(MentionableSelectMenuComponent\) [SetDefaultValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L493>)

```go
func (c MentionableSelectMenuComponent) SetDefaultValues(defaultValues ...SelectMenuDefaultValue) MentionableSelectMenuComponent
```

SetDefaultValues returns a new MentionableSelectMenuComponent with the provided default values

<a name="MentionableSelectMenuComponent.Type"></a>
### func \(MentionableSelectMenuComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L438>)

```go
func (MentionableSelectMenuComponent) Type() ComponentType
```



<a name="MentionableSelectMenuComponent.WithCustomID"></a>
### func \(MentionableSelectMenuComponent\) [WithCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L451>)

```go
func (c MentionableSelectMenuComponent) WithCustomID(customID string) MentionableSelectMenuComponent
```

WithCustomID returns a new MentionableSelectMenuComponent with the provided customID

<a name="MentionableSelectMenuComponent.WithDisabled"></a>
### func \(MentionableSelectMenuComponent\) [WithDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L487>)

```go
func (c MentionableSelectMenuComponent) WithDisabled(disabled bool) MentionableSelectMenuComponent
```

WithDisabled returns a new MentionableSelectMenuComponent with the provided disabled

<a name="MentionableSelectMenuComponent.WithMaxValues"></a>
### func \(MentionableSelectMenuComponent\) [WithMaxValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L469>)

```go
func (c MentionableSelectMenuComponent) WithMaxValues(maxValue int) MentionableSelectMenuComponent
```

WithMaxValues returns a new MentionableSelectMenuComponent with the provided maxValue

<a name="MentionableSelectMenuComponent.WithMinValues"></a>
### func \(MentionableSelectMenuComponent\) [WithMinValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L463>)

```go
func (c MentionableSelectMenuComponent) WithMinValues(minValue int) MentionableSelectMenuComponent
```

WithMinValues returns a new MentionableSelectMenuComponent with the provided minValue

<a name="MentionableSelectMenuComponent.WithPlaceholder"></a>
### func \(MentionableSelectMenuComponent\) [WithPlaceholder](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L457>)

```go
func (c MentionableSelectMenuComponent) WithPlaceholder(placeholder string) MentionableSelectMenuComponent
```

WithPlaceholder returns a new MentionableSelectMenuComponent with the provided placeholder

<a name="MentionableSelectMenuInteractionData"></a>
## type [MentionableSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L387-L391>)



```go
type MentionableSelectMenuInteractionData struct {
    Resolved MentionableSelectMenuResolved `json:"resolved"`
    Values   []snowflake.ID                `json:"values"`
    // contains filtered or unexported fields
}
```

<a name="MentionableSelectMenuInteractionData.CustomID"></a>
### func \(MentionableSelectMenuInteractionData\) [CustomID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L461>)

```go
func (d MentionableSelectMenuInteractionData) CustomID() string
```



<a name="MentionableSelectMenuInteractionData.MarshalJSON"></a>
### func \(MentionableSelectMenuInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L414>)

```go
func (d MentionableSelectMenuInteractionData) MarshalJSON() ([]byte, error)
```



<a name="MentionableSelectMenuInteractionData.Members"></a>
### func \(MentionableSelectMenuInteractionData\) [Members](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L437>)

```go
func (d MentionableSelectMenuInteractionData) Members() []ResolvedMember
```



<a name="MentionableSelectMenuInteractionData.Roles"></a>
### func \(MentionableSelectMenuInteractionData\) [Roles](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L447>)

```go
func (d MentionableSelectMenuInteractionData) Roles() []Role
```



<a name="MentionableSelectMenuInteractionData.Type"></a>
### func \(MentionableSelectMenuInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L457>)

```go
func (MentionableSelectMenuInteractionData) Type() ComponentType
```



<a name="MentionableSelectMenuInteractionData.UnmarshalJSON"></a>
### func \(\*MentionableSelectMenuInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L399>)

```go
func (d *MentionableSelectMenuInteractionData) UnmarshalJSON(data []byte) error
```



<a name="MentionableSelectMenuInteractionData.Users"></a>
### func \(MentionableSelectMenuInteractionData\) [Users](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L427>)

```go
func (d MentionableSelectMenuInteractionData) Users() []User
```



<a name="MentionableSelectMenuResolved"></a>
## type [MentionableSelectMenuResolved](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L393-L397>)



```go
type MentionableSelectMenuResolved struct {
    Users   map[snowflake.ID]User           `json:"users"`
    Members map[snowflake.ID]ResolvedMember `json:"members"`
    Roles   map[snowflake.ID]Role           `json:"roles"`
}
```

<a name="Message"></a>
## type [Message](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L83-L119>)

Message is a struct for messages sent in discord text\-based channels

```go
type Message struct {
    ID                   snowflake.ID          `json:"id"`
    GuildID              *snowflake.ID         `json:"guild_id"`
    Reactions            []MessageReaction     `json:"reactions"`
    Attachments          []Attachment          `json:"attachments"`
    TTS                  bool                  `json:"tts"`
    Embeds               []Embed               `json:"embeds,omitempty"`
    Components           []ContainerComponent  `json:"components,omitempty"`
    CreatedAt            time.Time             `json:"timestamp"`
    Mentions             []User                `json:"mentions"`
    MentionEveryone      bool                  `json:"mention_everyone"`
    MentionRoles         []snowflake.ID        `json:"mention_roles"`
    MentionChannels      []MentionChannel      `json:"mention_channels"`
    Pinned               bool                  `json:"pinned"`
    EditedTimestamp      *time.Time            `json:"edited_timestamp"`
    Author               User                  `json:"author"`
    Member               *Member               `json:"member"`
    Content              string                `json:"content,omitempty"`
    ChannelID            snowflake.ID          `json:"channel_id"`
    Type                 MessageType           `json:"type"`
    Flags                MessageFlags          `json:"flags"`
    MessageReference     *MessageReference     `json:"message_reference,omitempty"`
    Interaction          *MessageInteraction   `json:"interaction,omitempty"`
    WebhookID            *snowflake.ID         `json:"webhook_id,omitempty"`
    Activity             *MessageActivity      `json:"activity,omitempty"`
    Application          *MessageApplication   `json:"application,omitempty"`
    ApplicationID        *snowflake.ID         `json:"application_id,omitempty"`
    StickerItems         []MessageSticker      `json:"sticker_items,omitempty"`
    ReferencedMessage    *Message              `json:"referenced_message,omitempty"`
    LastUpdated          *time.Time            `json:"last_updated,omitempty"`
    Thread               *MessageThread        `json:"thread,omitempty"`
    Position             *int                  `json:"position,omitempty"`
    RoleSubscriptionData *RoleSubscriptionData `json:"role_subscription_data,omitempty"`
    InteractionMetadata  *InteractionMetadata  `json:"interaction_metadata,omitempty"`
    Resolved             *ResolvedData         `json:"resolved,omitempty"`
    Poll                 *Poll                 `json:"poll,omitempty"`
}
```

<a name="Message.ActionRows"></a>
### func \(Message\) [ActionRows](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L149>)

```go
func (m Message) ActionRows() []ActionRowComponent
```

ActionRows returns all ActionRowComponent\(s\) from this Message

<a name="Message.ButtonByID"></a>
### func \(Message\) [ButtonByID](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L196>)

```go
func (m Message) ButtonByID(customID string) (ButtonComponent, bool)
```

ButtonByID returns a ButtonComponent with the specific customID from this Message

<a name="Message.Buttons"></a>
### func \(Message\) [Buttons](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L183>)

```go
func (m Message) Buttons() []ButtonComponent
```

Buttons returns all ButtonComponent\(s\) from this Message

<a name="Message.ChannelSelectMenuByID"></a>
### func \(Message\) [ChannelSelectMenuByID](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L321>)

```go
func (m Message) ChannelSelectMenuByID(customID string) (ChannelSelectMenuComponent, bool)
```

ChannelSelectMenuByID returns a ChannelSelectMenuComponent with the specific customID from this Message

<a name="Message.ChannelSelectMenus"></a>
### func \(Message\) [ChannelSelectMenus](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L308>)

```go
func (m Message) ChannelSelectMenus() []ChannelSelectMenuComponent
```

ChannelSelectMenus returns all ChannelSelectMenuComponent\(s\) from this Message

<a name="Message.ComponentByID"></a>
### func \(Message\) [ComponentByID](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L171>)

```go
func (m Message) ComponentByID(customID string) InteractiveComponent
```

ComponentByID returns the Component with the specific CustomID

<a name="Message.InteractiveComponents"></a>
### func \(Message\) [InteractiveComponents](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L160>)

```go
func (m Message) InteractiveComponents() []InteractiveComponent
```

InteractiveComponents returns the InteractiveComponent\(s\) from this Message

<a name="Message.JumpURL"></a>
### func \(Message\) [JumpURL](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L332>)

```go
func (m Message) JumpURL() string
```



<a name="Message.MentionableSelectMenuByID"></a>
### func \(Message\) [MentionableSelectMenuByID](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L296>)

```go
func (m Message) MentionableSelectMenuByID(customID string) (MentionableSelectMenuComponent, bool)
```

MentionableSelectMenuByID returns a MentionableSelectMenuComponent with the specific customID from this Message

<a name="Message.MentionableSelectMenus"></a>
### func \(Message\) [MentionableSelectMenus](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L283>)

```go
func (m Message) MentionableSelectMenus() []MentionableSelectMenuComponent
```

MentionableSelectMenus returns all MentionableSelectMenuComponent\(s\) from this Message

<a name="Message.RoleSelectMenuByID"></a>
### func \(Message\) [RoleSelectMenuByID](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L271>)

```go
func (m Message) RoleSelectMenuByID(customID string) (RoleSelectMenuComponent, bool)
```

RoleSelectMenuByID returns a RoleSelectMenuComponent with the specific customID from this Message

<a name="Message.RoleSelectMenus"></a>
### func \(Message\) [RoleSelectMenus](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L258>)

```go
func (m Message) RoleSelectMenus() []RoleSelectMenuComponent
```

RoleSelectMenus returns all RoleSelectMenuComponent\(s\) from this Message

<a name="Message.SelectMenuByID"></a>
### func \(Message\) [SelectMenuByID](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L221>)

```go
func (m Message) SelectMenuByID(customID string) (SelectMenuComponent, bool)
```

SelectMenuByID returns a SelectMenuComponent with the specific customID from this Message

<a name="Message.SelectMenus"></a>
### func \(Message\) [SelectMenus](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L208>)

```go
func (m Message) SelectMenus() []SelectMenuComponent
```

SelectMenus returns all SelectMenuComponent\(s\) from this Message

<a name="Message.UnmarshalJSON"></a>
### func \(\*Message\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L121>)

```go
func (m *Message) UnmarshalJSON(data []byte) error
```



<a name="Message.UserSelectMenuByID"></a>
### func \(Message\) [UserSelectMenuByID](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L246>)

```go
func (m Message) UserSelectMenuByID(customID string) (UserSelectMenuComponent, bool)
```

UserSelectMenuByID returns a UserSelectMenuComponent with the specific customID from this Message

<a name="Message.UserSelectMenus"></a>
### func \(Message\) [UserSelectMenus](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L233>)

```go
func (m Message) UserSelectMenus() []UserSelectMenuComponent
```

UserSelectMenus returns all UserSelectMenuComponent\(s\) from this Message

<a name="MessageActivity"></a>
## type [MessageActivity](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L386-L389>)

MessageActivity is used for rich presence\-related chat embeds in a Message

```go
type MessageActivity struct {
    Type    MessageActivityType `json:"type"`
    PartyID *string             `json:"party_id,omitempty"`
}
```

<a name="MessageActivityType"></a>
## type [MessageActivityType](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L374>)

MessageActivityType is the type of MessageActivity https://com/developers/docs/resources/channel#message-object-message-activity-types

```go
type MessageActivityType int
```

<a name="MessageActivityTypeJoin"></a>Constants for MessageActivityType

```go
const (
    MessageActivityTypeJoin MessageActivityType = iota + 1
    MessageActivityTypeSpectate
    MessageActivityTypeListen

    MessageActivityTypeJoinRequest
)
```

<a name="MessageApplication"></a>
## type [MessageApplication](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L392-L398>)

MessageApplication is used for rich presence\-related chat embeds in a Message

```go
type MessageApplication struct {
    ID          snowflake.ID `json:"id"`
    CoverImage  *string      `json:"cover_image,omitempty"`
    Description string       `json:"description"`
    Icon        *string      `json:"icon,omitempty"`
    Name        string       `json:"name"`
}
```

<a name="MessageBulkDelete"></a>
## type [MessageBulkDelete](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L416-L418>)



```go
type MessageBulkDelete struct {
    Messages []snowflake.ID `json:"messages"`
}
```

<a name="MessageChannel"></a>
## type [MessageChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L87-L99>)



```go
type MessageChannel interface {
    Channel

    // LastMessageID returns the ID of the last Message sent in this MessageChannel.
    // This is nil if no Message has been sent yet.
    LastMessageID() *snowflake.ID

    // LastPinTimestamp returns when the last Message in this MessageChannel was pinned.
    // This is nil if no Message has been pinned yet.
    LastPinTimestamp() *time.Time
    // contains filtered or unexported methods
}
```

<a name="MessageCommand"></a>
## type [MessageCommand](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L328-L341>)



```go
type MessageCommand struct {
    // contains filtered or unexported fields
}
```

<a name="MessageCommand.ApplicationID"></a>
### func \(MessageCommand\) [ApplicationID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L390>)

```go
func (c MessageCommand) ApplicationID() snowflake.ID
```



<a name="MessageCommand.Contexts"></a>
### func \(MessageCommand\) [Contexts](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L425>)

```go
func (c MessageCommand) Contexts() []InteractionContextType
```



<a name="MessageCommand.CreatedAt"></a>
### func \(MessageCommand\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L433>)

```go
func (c MessageCommand) CreatedAt() time.Time
```



<a name="MessageCommand.DMPermission"></a>
### func \(MessageCommand\) [DMPermission](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L413>)

```go
func (c MessageCommand) DMPermission() bool
```



<a name="MessageCommand.DefaultMemberPermissions"></a>
### func \(MessageCommand\) [DefaultMemberPermissions](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L410>)

```go
func (c MessageCommand) DefaultMemberPermissions() Permissions
```



<a name="MessageCommand.GuildID"></a>
### func \(MessageCommand\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L394>)

```go
func (c MessageCommand) GuildID() *snowflake.ID
```



<a name="MessageCommand.ID"></a>
### func \(MessageCommand\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L382>)

```go
func (c MessageCommand) ID() snowflake.ID
```



<a name="MessageCommand.IntegrationTypes"></a>
### func \(MessageCommand\) [IntegrationTypes](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L421>)

```go
func (c MessageCommand) IntegrationTypes() []ApplicationIntegrationType
```



<a name="MessageCommand.MarshalJSON"></a>
### func \(MessageCommand\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L364>)

```go
func (c MessageCommand) MarshalJSON() ([]byte, error)
```



<a name="MessageCommand.NSFW"></a>
### func \(MessageCommand\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L417>)

```go
func (c MessageCommand) NSFW() bool
```



<a name="MessageCommand.Name"></a>
### func \(MessageCommand\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L398>)

```go
func (c MessageCommand) Name() string
```



<a name="MessageCommand.NameLocalizations"></a>
### func \(MessageCommand\) [NameLocalizations](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L402>)

```go
func (c MessageCommand) NameLocalizations() map[Locale]string
```



<a name="MessageCommand.NameLocalized"></a>
### func \(MessageCommand\) [NameLocalized](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L406>)

```go
func (c MessageCommand) NameLocalized() string
```



<a name="MessageCommand.Type"></a>
### func \(MessageCommand\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L386>)

```go
func (MessageCommand) Type() ApplicationCommandType
```



<a name="MessageCommand.UnmarshalJSON"></a>
### func \(\*MessageCommand\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L343>)

```go
func (c *MessageCommand) UnmarshalJSON(data []byte) error
```



<a name="MessageCommand.Version"></a>
### func \(MessageCommand\) [Version](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L429>)

```go
func (c MessageCommand) Version() snowflake.ID
```



<a name="MessageCommandCreate"></a>
## type [MessageCommandCreate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L79-L88>)



```go
type MessageCommandCreate struct {
    Name                     string                      `json:"name"`
    NameLocalizations        map[Locale]string           `json:"name_localizations,omitempty"`
    DefaultMemberPermissions *json.Nullable[Permissions] `json:"default_member_permissions,omitempty"`
    // Deprecated: Use Contexts instead
    DMPermission     *bool                        `json:"dm_permission,omitempty"`
    IntegrationTypes []ApplicationIntegrationType `json:"integration_types,omitempty"`
    Contexts         []InteractionContextType     `json:"contexts,omitempty"`
    NSFW             *bool                        `json:"nsfw,omitempty"`
}
```

<a name="MessageCommandCreate.CommandName"></a>
### func \(MessageCommandCreate\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L105>)

```go
func (c MessageCommandCreate) CommandName() string
```



<a name="MessageCommandCreate.MarshalJSON"></a>
### func \(MessageCommandCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L90>)

```go
func (c MessageCommandCreate) MarshalJSON() ([]byte, error)
```



<a name="MessageCommandCreate.Type"></a>
### func \(MessageCommandCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L101>)

```go
func (MessageCommandCreate) Type() ApplicationCommandType
```



<a name="MessageCommandInteractionData"></a>
## type [MessageCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L626-L632>)



```go
type MessageCommandInteractionData struct {
    Resolved MessageCommandResolved `json:"resolved"`
    // contains filtered or unexported fields
}
```

<a name="MessageCommandInteractionData.CommandID"></a>
### func \(MessageCommandInteractionData\) [CommandID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L662>)

```go
func (d MessageCommandInteractionData) CommandID() snowflake.ID
```



<a name="MessageCommandInteractionData.CommandName"></a>
### func \(MessageCommandInteractionData\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L666>)

```go
func (d MessageCommandInteractionData) CommandName() string
```



<a name="MessageCommandInteractionData.GuildID"></a>
### func \(MessageCommandInteractionData\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L670>)

```go
func (d MessageCommandInteractionData) GuildID() *snowflake.ID
```



<a name="MessageCommandInteractionData.MarshalJSON"></a>
### func \(\*MessageCommandInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L647>)

```go
func (d *MessageCommandInteractionData) MarshalJSON() ([]byte, error)
```



<a name="MessageCommandInteractionData.TargetID"></a>
### func \(MessageCommandInteractionData\) [TargetID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L674>)

```go
func (d MessageCommandInteractionData) TargetID() snowflake.ID
```



<a name="MessageCommandInteractionData.TargetMessage"></a>
### func \(MessageCommandInteractionData\) [TargetMessage](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L678>)

```go
func (d MessageCommandInteractionData) TargetMessage() Message
```



<a name="MessageCommandInteractionData.Type"></a>
### func \(MessageCommandInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L658>)

```go
func (MessageCommandInteractionData) Type() ApplicationCommandType
```



<a name="MessageCommandInteractionData.UnmarshalJSON"></a>
### func \(\*MessageCommandInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L634>)

```go
func (d *MessageCommandInteractionData) UnmarshalJSON(data []byte) error
```



<a name="MessageCommandResolved"></a>
## type [MessageCommandResolved](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L685-L687>)



```go
type MessageCommandResolved struct {
    Messages map[snowflake.ID]Message `json:"messages,omitempty"`
}
```

<a name="MessageCommandUpdate"></a>
## type [MessageCommandUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L79-L88>)



```go
type MessageCommandUpdate struct {
    Name                     *string                     `json:"name,omitempty"`
    NameLocalizations        *map[Locale]string          `json:"name_localizations,omitempty"`
    DefaultMemberPermissions *json.Nullable[Permissions] `json:"default_member_permissions,omitempty"`
    // Deprecated: Use Contexts instead
    DMPermission     *bool                         `json:"dm_permission,omitempty"`
    IntegrationTypes *[]ApplicationIntegrationType `json:"integration_types,omitempty"`
    Contexts         *[]InteractionContextType     `json:"contexts,omitempty"`
    NSFW             *bool                         `json:"nsfw,omitempty"`
}
```

<a name="MessageCommandUpdate.CommandName"></a>
### func \(MessageCommandUpdate\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L105>)

```go
func (c MessageCommandUpdate) CommandName() *string
```



<a name="MessageCommandUpdate.MarshalJSON"></a>
### func \(MessageCommandUpdate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L90>)

```go
func (c MessageCommandUpdate) MarshalJSON() ([]byte, error)
```



<a name="MessageCommandUpdate.Type"></a>
### func \(MessageCommandUpdate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L101>)

```go
func (MessageCommandUpdate) Type() ApplicationCommandType
```



<a name="MessageCreate"></a>
## type [MessageCreate](<https://github.com/disgoorg/disgo/blob/master/discord/message_create.go#L8-L22>)

MessageCreate is the struct to create a new Message with

```go
type MessageCreate struct {
    Nonce            string               `json:"nonce,omitempty"`
    Content          string               `json:"content,omitempty"`
    TTS              bool                 `json:"tts,omitempty"`
    Embeds           []Embed              `json:"embeds,omitempty"`
    Components       []ContainerComponent `json:"components,omitempty"`
    StickerIDs       []snowflake.ID       `json:"sticker_ids,omitempty"`
    Files            []*File              `json:"-"`
    Attachments      []AttachmentCreate   `json:"attachments,omitempty"`
    AllowedMentions  *AllowedMentions     `json:"allowed_mentions,omitempty"`
    MessageReference *MessageReference    `json:"message_reference,omitempty"`
    Flags            MessageFlags         `json:"flags,omitempty"`
    EnforceNonce     bool                 `json:"enforce_nonce,omitempty"`
    Poll             *PollCreate          `json:"poll,omitempty"`
}
```

<a name="MessageCreate.ToBody"></a>
### func \(MessageCreate\) [ToBody](<https://github.com/disgoorg/disgo/blob/master/discord/message_create.go#L27>)

```go
func (m MessageCreate) ToBody() (any, error)
```

ToBody returns the MessageCreate ready for body

<a name="MessageCreate.ToResponseBody"></a>
### func \(MessageCreate\) [ToResponseBody](<https://github.com/disgoorg/disgo/blob/master/discord/message_create.go#L35>)

```go
func (m MessageCreate) ToResponseBody(response InteractionResponse) (any, error)
```



<a name="MessageCreateBuilder"></a>
## type [MessageCreateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L11-L13>)

MessageCreateBuilder helper to build Message\(s\) easier

```go
type MessageCreateBuilder struct {
    MessageCreate
}
```

<a name="NewMessageCreateBuilder"></a>
### func [NewMessageCreateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L16>)

```go
func NewMessageCreateBuilder() *MessageCreateBuilder
```

NewMessageCreateBuilder creates a new MessageCreateBuilder to be built later

<a name="MessageCreateBuilder.AddActionRow"></a>
### func \(\*MessageCreateBuilder\) [AddActionRow](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L102>)

```go
func (b *MessageCreateBuilder) AddActionRow(components ...InteractiveComponent) *MessageCreateBuilder
```

AddActionRow adds a new discord.ActionRowComponent with the provided discord.InteractiveComponent\(s\) to the Message

<a name="MessageCreateBuilder.AddContainerComponents"></a>
### func \(\*MessageCreateBuilder\) [AddContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L108>)

```go
func (b *MessageCreateBuilder) AddContainerComponents(containers ...ContainerComponent) *MessageCreateBuilder
```

AddContainerComponents adds the discord.ContainerComponent\(s\) to the Message

<a name="MessageCreateBuilder.AddEmbeds"></a>
### func \(\*MessageCreateBuilder\) [AddEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L68>)

```go
func (b *MessageCreateBuilder) AddEmbeds(embeds ...Embed) *MessageCreateBuilder
```

AddEmbeds adds multiple embeds to the Message

<a name="MessageCreateBuilder.AddFile"></a>
### func \(\*MessageCreateBuilder\) [AddFile](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L166>)

```go
func (b *MessageCreateBuilder) AddFile(name string, description string, reader io.Reader, flags ...FileFlags) *MessageCreateBuilder
```

AddFile adds a discord.File to the discord.MessageCreate

<a name="MessageCreateBuilder.AddFiles"></a>
### func \(\*MessageCreateBuilder\) [AddFiles](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L160>)

```go
func (b *MessageCreateBuilder) AddFiles(files ...*File) *MessageCreateBuilder
```

AddFiles adds the discord.File\(s\) to the discord.MessageCreate

<a name="MessageCreateBuilder.AddFlags"></a>
### func \(\*MessageCreateBuilder\) [AddFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L218>)

```go
func (b *MessageCreateBuilder) AddFlags(flags ...MessageFlags) *MessageCreateBuilder
```

AddFlags adds the MessageFlags of the Message

<a name="MessageCreateBuilder.AddStickers"></a>
### func \(\*MessageCreateBuilder\) [AddStickers](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L128>)

```go
func (b *MessageCreateBuilder) AddStickers(stickerIds ...snowflake.ID) *MessageCreateBuilder
```

AddStickers adds provided stickers to the Message

<a name="MessageCreateBuilder.Build"></a>
### func \(\*MessageCreateBuilder\) [Build](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L267>)

```go
func (b *MessageCreateBuilder) Build() MessageCreate
```

Build builds the MessageCreateBuilder to a MessageCreate struct

<a name="MessageCreateBuilder.ClearAllowedMentions"></a>
### func \(\*MessageCreateBuilder\) [ClearAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L192>)

```go
func (b *MessageCreateBuilder) ClearAllowedMentions() *MessageCreateBuilder
```

ClearAllowedMentions clears the discord.AllowedMentions of the Message

<a name="MessageCreateBuilder.ClearContainerComponents"></a>
### func \(\*MessageCreateBuilder\) [ClearContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L122>)

```go
func (b *MessageCreateBuilder) ClearContainerComponents() *MessageCreateBuilder
```

ClearContainerComponents removes all the discord.ContainerComponent\(s\) of the Message

<a name="MessageCreateBuilder.ClearEmbeds"></a>
### func \(\*MessageCreateBuilder\) [ClearEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L74>)

```go
func (b *MessageCreateBuilder) ClearEmbeds() *MessageCreateBuilder
```

ClearEmbeds removes all the embeds from the Message

<a name="MessageCreateBuilder.ClearFiles"></a>
### func \(\*MessageCreateBuilder\) [ClearFiles](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L172>)

```go
func (b *MessageCreateBuilder) ClearFiles() *MessageCreateBuilder
```

ClearFiles removes all discord.File\(s\) of this discord.MessageCreate

<a name="MessageCreateBuilder.ClearFlags"></a>
### func \(\*MessageCreateBuilder\) [ClearFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L230>)

```go
func (b *MessageCreateBuilder) ClearFlags() *MessageCreateBuilder
```

ClearFlags clears the discord.MessageFlags of the Message

<a name="MessageCreateBuilder.ClearPoll"></a>
### func \(\*MessageCreateBuilder\) [ClearPoll](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L261>)

```go
func (b *MessageCreateBuilder) ClearPoll() *MessageCreateBuilder
```

ClearPoll clears the Poll of the Message

<a name="MessageCreateBuilder.ClearStickers"></a>
### func \(\*MessageCreateBuilder\) [ClearStickers](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L140>)

```go
func (b *MessageCreateBuilder) ClearStickers() *MessageCreateBuilder
```

ClearStickers removes all Sticker\(s\) from the Message

<a name="MessageCreateBuilder.RemoveContainerComponent"></a>
### func \(\*MessageCreateBuilder\) [RemoveContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L114>)

```go
func (b *MessageCreateBuilder) RemoveContainerComponent(i int) *MessageCreateBuilder
```

RemoveContainerComponent removes a discord.ActionRowComponent from the Message

<a name="MessageCreateBuilder.RemoveEmbed"></a>
### func \(\*MessageCreateBuilder\) [RemoveEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L80>)

```go
func (b *MessageCreateBuilder) RemoveEmbed(i int) *MessageCreateBuilder
```

RemoveEmbed removes an embed from the Message

<a name="MessageCreateBuilder.RemoveFile"></a>
### func \(\*MessageCreateBuilder\) [RemoveFile](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L178>)

```go
func (b *MessageCreateBuilder) RemoveFile(i int) *MessageCreateBuilder
```

RemoveFile removes the discord.File at this index

<a name="MessageCreateBuilder.RemoveFlags"></a>
### func \(\*MessageCreateBuilder\) [RemoveFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L224>)

```go
func (b *MessageCreateBuilder) RemoveFlags(flags ...MessageFlags) *MessageCreateBuilder
```

RemoveFlags removes the MessageFlags of the Message

<a name="MessageCreateBuilder.SetAllowedMentions"></a>
### func \(\*MessageCreateBuilder\) [SetAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L186>)

```go
func (b *MessageCreateBuilder) SetAllowedMentions(allowedMentions *AllowedMentions) *MessageCreateBuilder
```

SetAllowedMentions sets the AllowedMentions of the Message

<a name="MessageCreateBuilder.SetContainerComponent"></a>
### func \(\*MessageCreateBuilder\) [SetContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L94>)

```go
func (b *MessageCreateBuilder) SetContainerComponent(i int, container ContainerComponent) *MessageCreateBuilder
```

SetContainerComponent sets the provided discord.InteractiveComponent at the index of discord.InteractiveComponent\(s\)

<a name="MessageCreateBuilder.SetContainerComponents"></a>
### func \(\*MessageCreateBuilder\) [SetContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L88>)

```go
func (b *MessageCreateBuilder) SetContainerComponents(containerComponents ...ContainerComponent) *MessageCreateBuilder
```

SetContainerComponents sets the discord.ContainerComponent\(s\) of the Message

<a name="MessageCreateBuilder.SetContent"></a>
### func \(\*MessageCreateBuilder\) [SetContent](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L25>)

```go
func (b *MessageCreateBuilder) SetContent(content string) *MessageCreateBuilder
```

SetContent sets the content of the Message

<a name="MessageCreateBuilder.SetContentf"></a>
### func \(\*MessageCreateBuilder\) [SetContentf](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L31>)

```go
func (b *MessageCreateBuilder) SetContentf(content string, a ...any) *MessageCreateBuilder
```

SetContentf sets the content of the Message but with format

<a name="MessageCreateBuilder.SetEmbed"></a>
### func \(\*MessageCreateBuilder\) [SetEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L60>)

```go
func (b *MessageCreateBuilder) SetEmbed(i int, embed Embed) *MessageCreateBuilder
```

SetEmbed sets the provided Embed at the index of the Message

<a name="MessageCreateBuilder.SetEmbeds"></a>
### func \(\*MessageCreateBuilder\) [SetEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L54>)

```go
func (b *MessageCreateBuilder) SetEmbeds(embeds ...Embed) *MessageCreateBuilder
```

SetEmbeds sets the Embed\(s\) of the Message

<a name="MessageCreateBuilder.SetEnforceNonce"></a>
### func \(\*MessageCreateBuilder\) [SetEnforceNonce](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L42>)

```go
func (b *MessageCreateBuilder) SetEnforceNonce(enforce bool) *MessageCreateBuilder
```

SetEnforceNonce sets whether the Message should be checked for uniqueness \(use with SetNonce\)

<a name="MessageCreateBuilder.SetEphemeral"></a>
### func \(\*MessageCreateBuilder\) [SetEphemeral](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L235>)

```go
func (b *MessageCreateBuilder) SetEphemeral(ephemeral bool) *MessageCreateBuilder
```

SetEphemeral adds/removes discord.MessageFlagEphemeral to the Message flags

<a name="MessageCreateBuilder.SetFile"></a>
### func \(\*MessageCreateBuilder\) [SetFile](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L152>)

```go
func (b *MessageCreateBuilder) SetFile(i int, file *File) *MessageCreateBuilder
```

SetFile sets the discord.File at the index for this discord.MessageCreate

<a name="MessageCreateBuilder.SetFiles"></a>
### func \(\*MessageCreateBuilder\) [SetFiles](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L146>)

```go
func (b *MessageCreateBuilder) SetFiles(files ...*File) *MessageCreateBuilder
```

SetFiles sets the File\(s\) for this MessageCreate

<a name="MessageCreateBuilder.SetFlags"></a>
### func \(\*MessageCreateBuilder\) [SetFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L212>)

```go
func (b *MessageCreateBuilder) SetFlags(flags MessageFlags) *MessageCreateBuilder
```

SetFlags sets the message flags of the Message

<a name="MessageCreateBuilder.SetMessageReference"></a>
### func \(\*MessageCreateBuilder\) [SetMessageReference](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L197>)

```go
func (b *MessageCreateBuilder) SetMessageReference(messageReference *MessageReference) *MessageCreateBuilder
```

SetMessageReference allows you to specify a MessageReference to reply to

<a name="MessageCreateBuilder.SetMessageReferenceByID"></a>
### func \(\*MessageCreateBuilder\) [SetMessageReferenceByID](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L203>)

```go
func (b *MessageCreateBuilder) SetMessageReferenceByID(messageID snowflake.ID) *MessageCreateBuilder
```

SetMessageReferenceByID allows you to specify a Message CommandID to reply to

<a name="MessageCreateBuilder.SetNonce"></a>
### func \(\*MessageCreateBuilder\) [SetNonce](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L36>)

```go
func (b *MessageCreateBuilder) SetNonce(nonce string) *MessageCreateBuilder
```

SetNonce sets the Message nonce

<a name="MessageCreateBuilder.SetPoll"></a>
### func \(\*MessageCreateBuilder\) [SetPoll](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L255>)

```go
func (b *MessageCreateBuilder) SetPoll(poll PollCreate) *MessageCreateBuilder
```

SetPoll sets the Poll of the Message

<a name="MessageCreateBuilder.SetStickers"></a>
### func \(\*MessageCreateBuilder\) [SetStickers](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L134>)

```go
func (b *MessageCreateBuilder) SetStickers(stickerIds ...snowflake.ID) *MessageCreateBuilder
```

SetStickers sets the stickers of the Message

<a name="MessageCreateBuilder.SetSuppressEmbeds"></a>
### func \(\*MessageCreateBuilder\) [SetSuppressEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L245>)

```go
func (b *MessageCreateBuilder) SetSuppressEmbeds(suppressEmbeds bool) *MessageCreateBuilder
```

SetSuppressEmbeds adds/removes discord.MessageFlagSuppressEmbeds to the Message flags

<a name="MessageCreateBuilder.SetTTS"></a>
### func \(\*MessageCreateBuilder\) [SetTTS](<https://github.com/disgoorg/disgo/blob/master/discord/message_create_builder.go#L48>)

```go
func (b *MessageCreateBuilder) SetTTS(tts bool) *MessageCreateBuilder
```

SetTTS sets whether the Message should be text to speech

<a name="MessageFlags"></a>
## type [MessageFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L421>)

The MessageFlags of a Message

```go
type MessageFlags int
```

<a name="MessageFlagCrossposted"></a>Constants for MessageFlags

```go
const (
    MessageFlagCrossposted MessageFlags = 1 << iota
    MessageFlagIsCrosspost
    MessageFlagSuppressEmbeds
    MessageFlagSourceMessageDeleted
    MessageFlagUrgent
    MessageFlagHasThread
    MessageFlagEphemeral
    MessageFlagLoading // Message is an interaction of type 5, awaiting further response
    MessageFlagFailedToMentionSomeRolesInThread

    MessageFlagSuppressNotifications
    MessageFlagIsVoiceMessage
    MessageFlagsNone MessageFlags = 0
)
```

<a name="MessageFlags.Add"></a>
### func \(MessageFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L443>)

```go
func (f MessageFlags) Add(bits ...MessageFlags) MessageFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="MessageFlags.Has"></a>
### func \(MessageFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L453>)

```go
func (f MessageFlags) Has(bits ...MessageFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="MessageFlags.Missing"></a>
### func \(MessageFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L458>)

```go
func (f MessageFlags) Missing(bits ...MessageFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="MessageFlags.Remove"></a>
### func \(MessageFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L448>)

```go
func (f MessageFlags) Remove(bits ...MessageFlags) MessageFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="MessageInteraction"></a>
## type [MessageInteraction](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L409-L414>)

MessageInteraction is sent on the Message object when the message is a response to an interaction

```go
type MessageInteraction struct {
    ID   snowflake.ID    `json:"id"`
    Type InteractionType `json:"type"`
    Name string          `json:"name"`
    User User            `json:"user"`
}
```

<a name="MessageNotificationsLevel"></a>
## type [MessageNotificationsLevel](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L69>)

MessageNotificationsLevel indicates whether users receive @ mentions on a new message

```go
type MessageNotificationsLevel int
```

<a name="MessageNotificationsLevelAllMessages"></a>Constants for MessageNotificationsLevel

```go
const (
    MessageNotificationsLevelAllMessages MessageNotificationsLevel = iota
    MessageNotificationsLevelOnlyMentions
)
```

<a name="MessageReaction"></a>
## type [MessageReaction](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L359-L366>)

MessageReaction contains information about the reactions of a message

```go
type MessageReaction struct {
    Count        int                  `json:"count"`
    CountDetails ReactionCountDetails `json:"count_details"`
    Me           bool                 `json:"me"`
    MeBurst      bool                 `json:"me_burst"`
    Emoji        Emoji                `json:"emoji"`
    BurstColors  []string             `json:"burst_colors"`
}
```

<a name="MessageReference"></a>
## type [MessageReference](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L401-L406>)

MessageReference is a reference to another message

```go
type MessageReference struct {
    MessageID       *snowflake.ID `json:"message_id"`
    ChannelID       *snowflake.ID `json:"channel_id,omitempty"`
    GuildID         *snowflake.ID `json:"guild_id,omitempty"`
    FailIfNotExists bool          `json:"fail_if_not_exists,omitempty"`
}
```

<a name="MessageSticker"></a>
## type [MessageSticker](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L352-L356>)



```go
type MessageSticker struct {
    ID         snowflake.ID      `json:"id"`
    Name       string            `json:"name"`
    FormatType StickerFormatType `json:"format_type"`
}
```

<a name="MessageThread"></a>
## type [MessageThread](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L347-L350>)



```go
type MessageThread struct {
    GuildThread
    Member ThreadMember `json:"member"`
}
```

<a name="MessageType"></a>
## type [MessageType](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L14>)

The MessageType indicates the Message type

```go
type MessageType int
```

<a name="MessageTypeDefault"></a>Constants for the MessageType

```go
const (
    MessageTypeDefault MessageType = iota
    MessageTypeRecipientAdd
    MessageTypeRecipientRemove
    MessageTypeCall
    MessageTypeChannelNameChange
    MessageTypeChannelIconChange
    ChannelPinnedMessage
    MessageTypeUserJoin
    MessageTypeGuildBoost
    MessageTypeGuildBoostTier1
    MessageTypeGuildBoostTier2
    MessageTypeGuildBoostTier3
    MessageTypeChannelFollowAdd

    MessageTypeGuildDiscoveryDisqualified
    MessageTypeGuildDiscoveryRequalified
    MessageTypeGuildDiscoveryGracePeriodInitialWarning
    MessageTypeGuildDiscoveryGracePeriodFinalWarning
    MessageTypeThreadCreated
    MessageTypeReply
    MessageTypeSlashCommand
    MessageTypeThreadStarterMessage
    MessageTypeGuildInviteReminder
    MessageTypeContextMenuCommand
    MessageTypeAutoModerationAction
    MessageTypeRoleSubscriptionPurchase
    MessageTypeInteractionPremiumUpsell
    MessageTypeStageStart
    MessageTypeStageEnd
    MessageTypeStageSpeaker

    MessageTypeStageTopic
    MessageTypeGuildApplicationPremiumSubscription
)
```

<a name="MessageType.Deleteable"></a>
### func \(MessageType\) [Deleteable](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L63>)

```go
func (t MessageType) Deleteable() bool
```



<a name="MessageType.System"></a>
### func \(MessageType\) [System](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L53>)

```go
func (t MessageType) System() bool
```



<a name="MessageUpdate"></a>
## type [MessageUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/message_update.go#L4-L12>)

MessageUpdate is used to edit a Message

```go
type MessageUpdate struct {
    Content         *string               `json:"content,omitempty"`
    Embeds          *[]Embed              `json:"embeds,omitempty"`
    Components      *[]ContainerComponent `json:"components,omitempty"`
    Attachments     *[]AttachmentUpdate   `json:"attachments,omitempty"`
    Files           []*File               `json:"-"`
    AllowedMentions *AllowedMentions      `json:"allowed_mentions,omitempty"`
    Flags           *MessageFlags         `json:"flags,omitempty"`
}
```

<a name="MessageUpdate.ToBody"></a>
### func \(MessageUpdate\) [ToBody](<https://github.com/disgoorg/disgo/blob/master/discord/message_update.go#L17>)

```go
func (m MessageUpdate) ToBody() (any, error)
```

ToBody returns the MessageUpdate ready for body

<a name="MessageUpdate.ToResponseBody"></a>
### func \(MessageUpdate\) [ToResponseBody](<https://github.com/disgoorg/disgo/blob/master/discord/message_update.go#L30>)

```go
func (m MessageUpdate) ToResponseBody(response InteractionResponse) (any, error)
```



<a name="MessageUpdateBuilder"></a>
## type [MessageUpdateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L11-L13>)

MessageUpdateBuilder helper to build MessageUpdate easier

```go
type MessageUpdateBuilder struct {
    MessageUpdate
}
```

<a name="NewMessageUpdateBuilder"></a>
### func [NewMessageUpdateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L16>)

```go
func NewMessageUpdateBuilder() *MessageUpdateBuilder
```

NewMessageUpdateBuilder creates a new MessageUpdateBuilder to be built later

<a name="MessageUpdateBuilder.AddActionRow"></a>
### func \(\*MessageUpdateBuilder\) [AddActionRow](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L103>)

```go
func (b *MessageUpdateBuilder) AddActionRow(components ...InteractiveComponent) *MessageUpdateBuilder
```

AddActionRow adds a new discord.ActionRowComponent with the provided discord.InteractiveComponent\(s\) to the Message

<a name="MessageUpdateBuilder.AddContainerComponents"></a>
### func \(\*MessageUpdateBuilder\) [AddContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L112>)

```go
func (b *MessageUpdateBuilder) AddContainerComponents(containers ...ContainerComponent) *MessageUpdateBuilder
```

AddContainerComponents adds the discord.ContainerComponent\(s\) to the Message

<a name="MessageUpdateBuilder.AddEmbeds"></a>
### func \(\*MessageUpdateBuilder\) [AddEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L57>)

```go
func (b *MessageUpdateBuilder) AddEmbeds(embeds ...Embed) *MessageUpdateBuilder
```

AddEmbeds adds multiple embeds to the Message

<a name="MessageUpdateBuilder.AddFile"></a>
### func \(\*MessageUpdateBuilder\) [AddFile](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L158>)

```go
func (b *MessageUpdateBuilder) AddFile(name string, description string, reader io.Reader, flags ...FileFlags) *MessageUpdateBuilder
```

AddFile adds a new discord.File to the discord.MessageUpdate

<a name="MessageUpdateBuilder.AddFiles"></a>
### func \(\*MessageUpdateBuilder\) [AddFiles](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L152>)

```go
func (b *MessageUpdateBuilder) AddFiles(files ...*File) *MessageUpdateBuilder
```

AddFiles adds the new discord.File\(s\) to the discord.MessageUpdate

<a name="MessageUpdateBuilder.AddFlags"></a>
### func \(\*MessageUpdateBuilder\) [AddFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L220>)

```go
func (b *MessageUpdateBuilder) AddFlags(flags ...MessageFlags) *MessageUpdateBuilder
```

AddFlags adds the MessageFlags of the Message

<a name="MessageUpdateBuilder.Build"></a>
### func \(\*MessageUpdateBuilder\) [Build](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L256>)

```go
func (b *MessageUpdateBuilder) Build() MessageUpdate
```

Build builds the MessageUpdateBuilder to a MessageUpdate struct

<a name="MessageUpdateBuilder.ClearAllowedMentions"></a>
### func \(\*MessageUpdateBuilder\) [ClearAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L206>)

```go
func (b *MessageUpdateBuilder) ClearAllowedMentions() *MessageUpdateBuilder
```

ClearAllowedMentions clears the allowed mentions of the Message

<a name="MessageUpdateBuilder.ClearContainerComponents"></a>
### func \(\*MessageUpdateBuilder\) [ClearContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L132>)

```go
func (b *MessageUpdateBuilder) ClearContainerComponents() *MessageUpdateBuilder
```

ClearContainerComponents removes all the discord.ContainerComponent\(s\) of the Message

<a name="MessageUpdateBuilder.ClearContent"></a>
### func \(\*MessageUpdateBuilder\) [ClearContent](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L32>)

```go
func (b *MessageUpdateBuilder) ClearContent() *MessageUpdateBuilder
```

ClearContent removes content of the Message

<a name="MessageUpdateBuilder.ClearEmbeds"></a>
### func \(\*MessageUpdateBuilder\) [ClearEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L66>)

```go
func (b *MessageUpdateBuilder) ClearEmbeds() *MessageUpdateBuilder
```

ClearEmbeds removes all the embeds from the Message

<a name="MessageUpdateBuilder.ClearFiles"></a>
### func \(\*MessageUpdateBuilder\) [ClearFiles](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L164>)

```go
func (b *MessageUpdateBuilder) ClearFiles() *MessageUpdateBuilder
```

ClearFiles removes all new files of this discord.MessageUpdate

<a name="MessageUpdateBuilder.ClearFlags"></a>
### func \(\*MessageUpdateBuilder\) [ClearFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L238>)

```go
func (b *MessageUpdateBuilder) ClearFlags() *MessageUpdateBuilder
```

ClearFlags clears the MessageFlags of the Message

<a name="MessageUpdateBuilder.RemoveContainerComponent"></a>
### func \(\*MessageUpdateBuilder\) [RemoveContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L121>)

```go
func (b *MessageUpdateBuilder) RemoveContainerComponent(i int) *MessageUpdateBuilder
```

RemoveContainerComponent removes a discord.ContainerComponent from the Message

<a name="MessageUpdateBuilder.RemoveEmbed"></a>
### func \(\*MessageUpdateBuilder\) [RemoveEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L72>)

```go
func (b *MessageUpdateBuilder) RemoveEmbed(i int) *MessageUpdateBuilder
```

RemoveEmbed removes an embed from the Message

<a name="MessageUpdateBuilder.RemoveFile"></a>
### func \(\*MessageUpdateBuilder\) [RemoveFile](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L170>)

```go
func (b *MessageUpdateBuilder) RemoveFile(i int) *MessageUpdateBuilder
```

RemoveFile removes the new discord.File at this index

<a name="MessageUpdateBuilder.RemoveFlags"></a>
### func \(\*MessageUpdateBuilder\) [RemoveFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L229>)

```go
func (b *MessageUpdateBuilder) RemoveFlags(flags ...MessageFlags) *MessageUpdateBuilder
```

RemoveFlags removes the MessageFlags of the Message

<a name="MessageUpdateBuilder.RetainAttachments"></a>
### func \(\*MessageUpdateBuilder\) [RetainAttachments](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L178>)

```go
func (b *MessageUpdateBuilder) RetainAttachments(attachments ...Attachment) *MessageUpdateBuilder
```

RetainAttachments removes all Attachment\(s\) from this Message except the ones provided

<a name="MessageUpdateBuilder.RetainAttachmentsByID"></a>
### func \(\*MessageUpdateBuilder\) [RetainAttachmentsByID](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L189>)

```go
func (b *MessageUpdateBuilder) RetainAttachmentsByID(attachmentIDs ...snowflake.ID) *MessageUpdateBuilder
```

RetainAttachmentsByID removes all Attachment\(s\) from this Message except the ones provided

<a name="MessageUpdateBuilder.SetAllowedMentions"></a>
### func \(\*MessageUpdateBuilder\) [SetAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L200>)

```go
func (b *MessageUpdateBuilder) SetAllowedMentions(allowedMentions *AllowedMentions) *MessageUpdateBuilder
```

SetAllowedMentions sets the AllowedMentions of the Message

<a name="MessageUpdateBuilder.SetContainerComponent"></a>
### func \(\*MessageUpdateBuilder\) [SetContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L92>)

```go
func (b *MessageUpdateBuilder) SetContainerComponent(i int, container ContainerComponent) *MessageUpdateBuilder
```

SetContainerComponent sets the provided discord.InteractiveComponent at the index of discord.InteractiveComponent\(s\)

<a name="MessageUpdateBuilder.SetContainerComponents"></a>
### func \(\*MessageUpdateBuilder\) [SetContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L83>)

```go
func (b *MessageUpdateBuilder) SetContainerComponents(containerComponents ...ContainerComponent) *MessageUpdateBuilder
```

SetContainerComponents sets the discord.ContainerComponent\(s\) of the Message

<a name="MessageUpdateBuilder.SetContent"></a>
### func \(\*MessageUpdateBuilder\) [SetContent](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L21>)

```go
func (b *MessageUpdateBuilder) SetContent(content string) *MessageUpdateBuilder
```

SetContent sets content of the Message

<a name="MessageUpdateBuilder.SetContentf"></a>
### func \(\*MessageUpdateBuilder\) [SetContentf](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L27>)

```go
func (b *MessageUpdateBuilder) SetContentf(content string, a ...any) *MessageUpdateBuilder
```

SetContentf sets content of the Message

<a name="MessageUpdateBuilder.SetEmbed"></a>
### func \(\*MessageUpdateBuilder\) [SetEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L46>)

```go
func (b *MessageUpdateBuilder) SetEmbed(i int, embed Embed) *MessageUpdateBuilder
```

SetEmbed sets the provided discord.Embed at the index of the Message

<a name="MessageUpdateBuilder.SetEmbeds"></a>
### func \(\*MessageUpdateBuilder\) [SetEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L37>)

```go
func (b *MessageUpdateBuilder) SetEmbeds(embeds ...Embed) *MessageUpdateBuilder
```

SetEmbeds sets the discord.Embed\(s\) of the Message

<a name="MessageUpdateBuilder.SetFile"></a>
### func \(\*MessageUpdateBuilder\) [SetFile](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L144>)

```go
func (b *MessageUpdateBuilder) SetFile(i int, file *File) *MessageUpdateBuilder
```

SetFile sets the new discord.File at the index for this discord.MessageUpdate

<a name="MessageUpdateBuilder.SetFiles"></a>
### func \(\*MessageUpdateBuilder\) [SetFiles](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L138>)

```go
func (b *MessageUpdateBuilder) SetFiles(files ...*File) *MessageUpdateBuilder
```

SetFiles sets the new discord.File\(s\) for this discord.MessageUpdate

<a name="MessageUpdateBuilder.SetFlags"></a>
### func \(\*MessageUpdateBuilder\) [SetFlags](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L211>)

```go
func (b *MessageUpdateBuilder) SetFlags(flags MessageFlags) *MessageUpdateBuilder
```

SetFlags sets the message flags of the Message

<a name="MessageUpdateBuilder.SetSuppressEmbeds"></a>
### func \(\*MessageUpdateBuilder\) [SetSuppressEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/message_update_builder.go#L243>)

```go
func (b *MessageUpdateBuilder) SetSuppressEmbeds(suppressEmbeds bool) *MessageUpdateBuilder
```

SetSuppressEmbeds adds/removes discord.MessageFlagSuppressEmbeds to the Message flags

<a name="ModalCreate"></a>
## type [ModalCreate](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L5-L9>)



```go
type ModalCreate struct {
    CustomID   string               `json:"custom_id"`
    Title      string               `json:"title"`
    Components []ContainerComponent `json:"components"`
}
```

<a name="ModalCreateBuilder"></a>
## type [ModalCreateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L18-L20>)



```go
type ModalCreateBuilder struct {
    ModalCreate
}
```

<a name="NewModalCreateBuilder"></a>
### func [NewModalCreateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L14>)

```go
func NewModalCreateBuilder() *ModalCreateBuilder
```

NewModalCreateBuilder creates a new ModalCreateBuilder to be built later

<a name="ModalCreateBuilder.AddActionRow"></a>
### func \(\*ModalCreateBuilder\) [AddActionRow](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L49>)

```go
func (b *ModalCreateBuilder) AddActionRow(components ...InteractiveComponent) *ModalCreateBuilder
```

AddActionRow adds a new discord.ActionRowComponent with the provided discord.InteractiveComponent\(s\) to the ModalCreate

<a name="ModalCreateBuilder.AddContainerComponents"></a>
### func \(\*ModalCreateBuilder\) [AddContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L55>)

```go
func (b *ModalCreateBuilder) AddContainerComponents(containers ...ContainerComponent) *ModalCreateBuilder
```

AddContainerComponents adds the discord.ContainerComponent\(s\) to the ModalCreate

<a name="ModalCreateBuilder.Build"></a>
### func \(\*ModalCreateBuilder\) [Build](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L75>)

```go
func (b *ModalCreateBuilder) Build() ModalCreate
```

Build builds the ModalCreateBuilder to a ModalCreate struct

<a name="ModalCreateBuilder.ClearContainerComponents"></a>
### func \(\*ModalCreateBuilder\) [ClearContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L69>)

```go
func (b *ModalCreateBuilder) ClearContainerComponents() *ModalCreateBuilder
```

ClearContainerComponents removes all the discord.ContainerComponent\(s\) of the ModalCreate

<a name="ModalCreateBuilder.RemoveContainerComponent"></a>
### func \(\*ModalCreateBuilder\) [RemoveContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L61>)

```go
func (b *ModalCreateBuilder) RemoveContainerComponent(i int) *ModalCreateBuilder
```

RemoveContainerComponent removes a discord.ActionRowComponent from the ModalCreate

<a name="ModalCreateBuilder.SetContainerComponent"></a>
### func \(\*ModalCreateBuilder\) [SetContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L41>)

```go
func (b *ModalCreateBuilder) SetContainerComponent(i int, container ContainerComponent) *ModalCreateBuilder
```

SetContainerComponent sets the provided discord.InteractiveComponent at the index of discord.InteractiveComponent\(s\)

<a name="ModalCreateBuilder.SetContainerComponents"></a>
### func \(\*ModalCreateBuilder\) [SetContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L35>)

```go
func (b *ModalCreateBuilder) SetContainerComponents(containerComponents ...ContainerComponent) *ModalCreateBuilder
```

SetContainerComponents sets the discord.ContainerComponent\(s\) of the ModalCreate

<a name="ModalCreateBuilder.SetCustomID"></a>
### func \(\*ModalCreateBuilder\) [SetCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L23>)

```go
func (b *ModalCreateBuilder) SetCustomID(customID string) *ModalCreateBuilder
```

SetCustomID sets the CustomID of the ModalCreate

<a name="ModalCreateBuilder.SetTitle"></a>
### func \(\*ModalCreateBuilder\) [SetTitle](<https://github.com/disgoorg/disgo/blob/master/discord/modal_create.go#L29>)

```go
func (b *ModalCreateBuilder) SetTitle(title string) *ModalCreateBuilder
```

SetTitle sets the title of the ModalCreate

<a name="ModalSubmitInteraction"></a>
## type [ModalSubmitInteraction](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L9-L12>)



```go
type ModalSubmitInteraction struct {
    Data ModalSubmitInteractionData `json:"data"`
    // contains filtered or unexported fields
}
```

<a name="ModalSubmitInteraction.MarshalJSON"></a>
### func \(ModalSubmitInteraction\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L43>)

```go
func (i ModalSubmitInteraction) MarshalJSON() ([]byte, error)
```



<a name="ModalSubmitInteraction.Type"></a>
### func \(ModalSubmitInteraction\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L70>)

```go
func (ModalSubmitInteraction) Type() InteractionType
```



<a name="ModalSubmitInteraction.UnmarshalJSON"></a>
### func \(\*ModalSubmitInteraction\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L14>)

```go
func (i *ModalSubmitInteraction) UnmarshalJSON(data []byte) error
```



<a name="ModalSubmitInteractionData"></a>
## type [ModalSubmitInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L76-L79>)



```go
type ModalSubmitInteractionData struct {
    CustomID   string                          `json:"custom_id"`
    Components map[string]InteractiveComponent `json:"components"`
}
```

<a name="ModalSubmitInteractionData.Component"></a>
### func \(ModalSubmitInteractionData\) [Component](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L105>)

```go
func (d ModalSubmitInteractionData) Component(customID string) (InteractiveComponent, bool)
```



<a name="ModalSubmitInteractionData.OptText"></a>
### func \(ModalSubmitInteractionData\) [OptText](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L118>)

```go
func (d ModalSubmitInteractionData) OptText(customID string) (string, bool)
```



<a name="ModalSubmitInteractionData.Text"></a>
### func \(ModalSubmitInteractionData\) [Text](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L125>)

```go
func (d ModalSubmitInteractionData) Text(customID string) string
```



<a name="ModalSubmitInteractionData.TextInputComponent"></a>
### func \(ModalSubmitInteractionData\) [TextInputComponent](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L110>)

```go
func (d ModalSubmitInteractionData) TextInputComponent(customID string) (TextInputComponent, bool)
```



<a name="ModalSubmitInteractionData.UnmarshalJSON"></a>
### func \(\*ModalSubmitInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_modal_submit.go#L81>)

```go
func (d *ModalSubmitInteractionData) UnmarshalJSON(data []byte) error
```



<a name="MultipartBuffer"></a>
## type [MultipartBuffer](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L20-L23>)

MultipartBuffer holds the Body & ContentType of the multipart body

```go
type MultipartBuffer struct {
    Buffer      *bytes.Buffer
    ContentType string
}
```

<a name="PayloadWithFiles"></a>
### func [PayloadWithFiles](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L26>)

```go
func PayloadWithFiles(v any, files ...*File) (*MultipartBuffer, error)
```

PayloadWithFiles returns the given payload as multipart body with all files in it

<a name="NSFWLevel"></a>
## type [NSFWLevel](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L341>)



```go
type NSFWLevel int
```

<a name="NSFWLevelDefault"></a>

```go
const (
    NSFWLevelDefault NSFWLevel = iota
    NSFWLevelExplicit
    NSFWLevelSafe
    NSFWLevelAgeRestricted
)
```

<a name="OAuth2Guild"></a>
## type [OAuth2Guild](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L255-L264>)

OAuth2Guild is returned on the GetGuilds route

```go
type OAuth2Guild struct {
    ID                       snowflake.ID   `json:"id"`
    Name                     string         `json:"name"`
    Icon                     *string        `json:"icon"`
    Owner                    bool           `json:"owner"`
    Permissions              Permissions    `json:"permissions"`
    Features                 []GuildFeature `json:"features"`
    ApproximateMemberCount   int            `json:"approximate_member_count"`
    ApproximatePresenceCount int            `json:"approximate_presence_count"`
}
```

<a name="OAuth2Scope"></a>
## type [OAuth2Scope](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L96>)

OAuth2Scope are the scopes you can request in the OAuth2 flow.

```go
type OAuth2Scope string
```

<a name="OAuth2ScopeActivitiesRead"></a>

```go
const (
    // OAuth2ScopeActivitiesRead allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval
    OAuth2ScopeActivitiesRead OAuth2Scope = "activities.read"
    // OAuth2ScopeActivitiesWrite allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
    OAuth2ScopeActivitiesWrite OAuth2Scope = "activities.write"

    // OAuth2ScopeApplicationsBuildsRead allows your app to read build data for a user's applications
    OAuth2ScopeApplicationsBuildsRead OAuth2Scope = "applications.builds.read"
    // OAuth2ScopeApplicationsBuildsUpload allows your app to upload/update builds for a user's applications - requires Discord approval
    OAuth2ScopeApplicationsBuildsUpload OAuth2Scope = "applications.builds.upload"

    OAuth2ScopeApplicationsCommands                  OAuth2Scope = "applications.commands"
    OAuth2ScopeApplicationsCommandsUpdate            OAuth2Scope = "applications.commands.update"
    OAuth2ScopeApplicationsCommandsPermissionsUpdate OAuth2Scope = "applications.commands.permissions.update"
    OAuth2ScopeApplicationsEntitlements              OAuth2Scope = "applications.entitlements"
    OAuth2ScopeApplicationsStoreUpdate               OAuth2Scope = "applications.store.update"

    OAuth2ScopeRPC                  OAuth2Scope = "rpc"
    OAuth2ScopeRPCNotificationsRead OAuth2Scope = "rpc.notifications.read"
    OAuth2ScopeRPCVoiceWrite        OAuth2Scope = "rpc.voice.write"
    OAuth2ScopeRPCVoiceRead         OAuth2Scope = "rpc.voice.read"
    OAuth2ScopeRPCActivitiesWrite   OAuth2Scope = "rpc.activities.write"

    OAuth2ScopeGuilds            OAuth2Scope = "guilds"
    OAuth2ScopeGuildsJoin        OAuth2Scope = "guilds.join"
    OAuth2ScopeGuildsMembersRead OAuth2Scope = "guilds.members.read"
    OAuth2ScopeGDMJoin           OAuth2Scope = "gdm.join"

    OAuth2ScopeRelationshipsRead    OAuth2Scope = "relationships.read"
    OAuth2ScopeRoleConnectionsWrite OAuth2Scope = "role_connections.write"
    OAuth2ScopeIdentify             OAuth2Scope = "identify"
    OAuth2ScopeEmail                OAuth2Scope = "email"
    OAuth2ScopeConnections          OAuth2Scope = "connections"
    OAuth2ScopeBot                  OAuth2Scope = "bot"
    OAuth2ScopeMessagesRead         OAuth2Scope = "messages.read"
    OAuth2ScopeWebhookIncoming      OAuth2Scope = "webhook.incoming"
)
```

<a name="SplitScopes"></a>
### func [SplitScopes](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L150>)

```go
func SplitScopes(joinedScopes string) []OAuth2Scope
```



<a name="OAuth2Scope.String"></a>
### func \(OAuth2Scope\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L136>)

```go
func (s OAuth2Scope) String() string
```



<a name="OAuth2User"></a>
## type [OAuth2User](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L160-L171>)

OAuth2User represents a full User returned by the oauth2 endpoints

```go
type OAuth2User struct {
    User
    // Requires OAuth2ScopeIdentify
    MfaEnabled  bool        `json:"mfa_enabled"`
    Locale      string      `json:"locale"`
    Flags       UserFlags   `json:"flags"`
    PremiumType PremiumType `json:"premium_type"`

    // Requires OAuth2ScopeEmail
    Verified bool   `json:"verified"`
    Email    string `json:"email"`
}
```

<a name="OnlineStatus"></a>
## type [OnlineStatus](<https://github.com/disgoorg/disgo/blob/master/discord/presence.go#L21>)

OnlineStatus \(https://discord.com/developers/docs/topics/gateway#update-presence-status-types\)

```go
type OnlineStatus string
```

<a name="OnlineStatusOnline"></a>

```go
const (
    OnlineStatusOnline    OnlineStatus = "online"
    OnlineStatusDND       OnlineStatus = "dnd"
    OnlineStatusIdle      OnlineStatus = "idle"
    OnlineStatusInvisible OnlineStatus = "invisible"
    OnlineStatusOffline   OnlineStatus = "offline"
)
```

<a name="OptionalAuditLogEntryInfo"></a>
## type [OptionalAuditLogEntryInfo](<https://github.com/disgoorg/disgo/blob/master/discord/audit_log.go#L245-L258>)

OptionalAuditLogEntryInfo \(https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info\)

```go
type OptionalAuditLogEntryInfo struct {
    DeleteMemberDays              *string                    `json:"delete_member_days"`
    MembersRemoved                *string                    `json:"members_removed"`
    ChannelID                     *snowflake.ID              `json:"channel_id"`
    MessageID                     *snowflake.ID              `json:"message_id"`
    Count                         *string                    `json:"count"`
    ID                            *string                    `json:"id"`
    Type                          *string                    `json:"type"`
    RoleName                      *string                    `json:"role_name"`
    ApplicationID                 *snowflake.ID              `json:"application_id"`
    AutoModerationRuleName        *string                    `json:"auto_moderation_rule_name"`
    AutoModerationRuleTriggerType *AutoModerationTriggerType `json:"auto_moderation_rule_trigger_type,string"`
    IntegrationType               *IntegrationType           `json:"integration_type"`
}
```

<a name="PartialApplication"></a>
## type [PartialApplication](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L78-L81>)



```go
type PartialApplication struct {
    ID    snowflake.ID     `json:"id"`
    Flags ApplicationFlags `json:"flags"`
}
```

<a name="PartialChannel"></a>
## type [PartialChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1302-L1305>)



```go
type PartialChannel struct {
    ID   snowflake.ID `json:"id"`
    Type ChannelType  `json:"type"`
}
```

<a name="PartialEmoji"></a>
## type [PartialEmoji](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L68-L72>)



```go
type PartialEmoji struct {
    ID       *snowflake.ID `json:"id,omitempty"`
    Name     *string       `json:"name,omitempty"`
    Animated bool          `json:"animated,omitempty"`
}
```

<a name="PartialEmoji.Reaction"></a>
### func \(PartialEmoji\) [Reaction](<https://github.com/disgoorg/disgo/blob/master/discord/emoji.go#L75>)

```go
func (e PartialEmoji) Reaction() string
```

Reaction returns a string used for manipulating with reactions. May be empty if the Name is nil

<a name="PartialInvite"></a>
## type [PartialInvite](<https://github.com/disgoorg/disgo/blob/master/discord/invite.go#L47-L50>)



```go
type PartialInvite struct {
    Code *string `json:"code"`
    Uses int     `json:"uses"`
}
```

<a name="PartialRole"></a>
## type [PartialRole](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L96-L99>)

PartialRole holds basic info about a Role

```go
type PartialRole struct {
    ID   snowflake.ID `json:"id"`
    Name string       `json:"name"`
}
```

<a name="Payload"></a>
## type [Payload](<https://github.com/disgoorg/disgo/blob/master/discord/file.go#L15-L17>)



```go
type Payload interface {
    ToBody() (any, error)
}
```

<a name="PermissionOverwrite"></a>
## type [PermissionOverwrite](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L45-L48>)

PermissionOverwrite is used to determine who can perform particular actions in a GetGuildChannel

```go
type PermissionOverwrite interface {
    Type() PermissionOverwriteType
    ID() snowflake.ID
}
```

<a name="PermissionOverwriteType"></a>
## type [PermissionOverwriteType](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L11>)

PermissionOverwriteType is the type of PermissionOverwrite

```go
type PermissionOverwriteType int
```

<a name="PermissionOverwriteTypeRole"></a>Constants for PermissionOverwriteType

```go
const (
    PermissionOverwriteTypeRole PermissionOverwriteType = iota
    PermissionOverwriteTypeMember
)
```

<a name="PermissionOverwriteUpdate"></a>
## type [PermissionOverwriteUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L141-L143>)



```go
type PermissionOverwriteUpdate interface {
    Type() PermissionOverwriteType
}
```

<a name="PermissionOverwrites"></a>
## type [PermissionOverwrites](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L19>)



```go
type PermissionOverwrites []PermissionOverwrite
```

<a name="PermissionOverwrites.Get"></a>
### func \(PermissionOverwrites\) [Get](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L21>)

```go
func (p PermissionOverwrites) Get(overwriteType PermissionOverwriteType, id snowflake.ID) (PermissionOverwrite, bool)
```



<a name="PermissionOverwrites.Member"></a>
### func \(PermissionOverwrites\) [Member](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L37>)

```go
func (p PermissionOverwrites) Member(id snowflake.ID) (MemberPermissionOverwrite, bool)
```



<a name="PermissionOverwrites.Role"></a>
### func \(PermissionOverwrites\) [Role](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L30>)

```go
func (p PermissionOverwrites) Role(id snowflake.ID) (RolePermissionOverwrite, bool)
```



<a name="Permissions"></a>
## type [Permissions](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L16>)

Permissions extends the Bit structure, and is used within roles and channels \(https://discord.com/developers/docs/topics/permissions#permissions\)

```go
type Permissions int64
```

<a name="PermissionCreateInstantInvite"></a>

```go
const (
    PermissionCreateInstantInvite Permissions = 1 << iota
    PermissionKickMembers
    PermissionBanMembers
    PermissionAdministrator
    PermissionManageChannels
    PermissionManageGuild
    PermissionAddReactions
    PermissionViewAuditLog
    PermissionPrioritySpeaker
    PermissionStream
    PermissionViewChannel
    PermissionSendMessages
    PermissionSendTTSMessages
    PermissionManageMessages
    PermissionEmbedLinks
    PermissionAttachFiles
    PermissionReadMessageHistory
    PermissionMentionEveryone
    PermissionUseExternalEmojis
    PermissionViewGuildInsights
    PermissionConnect
    PermissionSpeak
    PermissionMuteMembers
    PermissionDeafenMembers
    PermissionMoveMembers
    PermissionUseVAD
    PermissionChangeNickname
    PermissionManageNicknames
    PermissionManageRoles
    PermissionManageWebhooks
    PermissionManageGuildExpressions
    PermissionUseApplicationCommands
    PermissionRequestToSpeak
    PermissionManageEvents
    PermissionManageThreads
    PermissionCreatePublicThreads
    PermissionCreatePrivateThreads
    PermissionUseExternalStickers
    PermissionSendMessagesInThreads
    PermissionUseEmbeddedActivities
    PermissionModerateMembers
    PermissionViewCreatorMonetizationAnalytics
    PermissionUseSoundboard
    PermissionCreateGuildExpressions
    PermissionCreateEvents
    PermissionUseExternalSounds
    PermissionSendVoiceMessages

    PermissionSendPolls

    PermissionsAllText = PermissionViewChannel |
        PermissionSendMessages |
        PermissionSendTTSMessages |
        PermissionManageMessages |
        PermissionEmbedLinks |
        PermissionAttachFiles |
        PermissionReadMessageHistory |
        PermissionMentionEveryone |
        PermissionSendVoiceMessages |
        PermissionSendPolls

    PermissionsAllThread = PermissionManageThreads |
        PermissionCreatePublicThreads |
        PermissionCreatePrivateThreads |
        PermissionSendMessagesInThreads

    PermissionsAllVoice = PermissionViewChannel |
        PermissionConnect |
        PermissionSpeak |
        PermissionStream |
        PermissionMuteMembers |
        PermissionDeafenMembers |
        PermissionMoveMembers |
        PermissionUseVAD |
        PermissionPrioritySpeaker |
        PermissionUseSoundboard |
        PermissionUseExternalSounds |
        PermissionRequestToSpeak |
        PermissionUseEmbeddedActivities |
        PermissionCreateGuildExpressions |
        PermissionCreateEvents |
        PermissionManageEvents

    PermissionsAllChannel = PermissionsAllText |
        PermissionsAllThread |
        PermissionsAllVoice |
        PermissionCreateInstantInvite |
        PermissionManageChannels |
        PermissionAddReactions |
        PermissionUseExternalEmojis |
        PermissionUseApplicationCommands |
        PermissionUseExternalStickers

    PermissionsAll = PermissionsAllChannel |
        PermissionKickMembers |
        PermissionBanMembers |
        PermissionManageGuild |
        PermissionAdministrator |
        PermissionManageWebhooks |
        PermissionManageGuildExpressions |
        PermissionViewCreatorMonetizationAnalytics |
        PermissionViewGuildInsights |
        PermissionViewAuditLog |
        PermissionManageRoles |
        PermissionChangeNickname |
        PermissionManageNicknames |
        PermissionModerateMembers

    PermissionsNone Permissions = 0
)
```

<a name="Permissions.Add"></a>
### func \(Permissions\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L216>)

```go
func (p Permissions) Add(bits ...Permissions) Permissions
```

Add allows you to add multiple bits together, producing a new bit

<a name="Permissions.Has"></a>
### func \(Permissions\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L226>)

```go
func (p Permissions) Has(bits ...Permissions) bool
```

Has will ensure that the bit includes all the bits entered

<a name="Permissions.MarshalJSON"></a>
### func \(Permissions\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L195>)

```go
func (p Permissions) MarshalJSON() ([]byte, error)
```

MarshalJSON marshals permissions into a string

<a name="Permissions.Missing"></a>
### func \(Permissions\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L231>)

```go
func (p Permissions) Missing(bits ...Permissions) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="Permissions.Remove"></a>
### func \(Permissions\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L221>)

```go
func (p Permissions) Remove(bits ...Permissions) Permissions
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="Permissions.String"></a>
### func \(Permissions\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L180>)

```go
func (p Permissions) String() string
```



<a name="Permissions.UnmarshalJSON"></a>
### func \(\*Permissions\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/permissions.go#L200>)

```go
func (p *Permissions) UnmarshalJSON(data []byte) error
```

UnmarshalJSON unmarshalls permissions into an int64

<a name="PingInteraction"></a>
## type [PingInteraction](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L12-L17>)



```go
type PingInteraction struct {
    // contains filtered or unexported fields
}
```

<a name="PingInteraction.AppPermissions"></a>
### func \(PingInteraction\) [AppPermissions](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L95>)

```go
func (PingInteraction) AppPermissions() *Permissions
```



<a name="PingInteraction.ApplicationID"></a>
### func \(PingInteraction\) [ApplicationID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L51>)

```go
func (i PingInteraction) ApplicationID() snowflake.ID
```



<a name="PingInteraction.AuthorizingIntegrationOwners"></a>
### func \(PingInteraction\) [AuthorizingIntegrationOwners](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L103>)

```go
func (PingInteraction) AuthorizingIntegrationOwners() map[ApplicationIntegrationType]snowflake.ID
```



<a name="PingInteraction.Channel"></a>
### func \(PingInteraction\) [Channel](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L75>)

```go
func (PingInteraction) Channel() InteractionChannel
```



<a name="PingInteraction.ChannelID"></a>
### func \(PingInteraction\) [ChannelID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L71>)

```go
func (PingInteraction) ChannelID() snowflake.ID
```



<a name="PingInteraction.Context"></a>
### func \(PingInteraction\) [Context](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L107>)

```go
func (PingInteraction) Context() InteractionContextType
```



<a name="PingInteraction.CreatedAt"></a>
### func \(PingInteraction\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L63>)

```go
func (i PingInteraction) CreatedAt() time.Time
```



<a name="PingInteraction.Entitlements"></a>
### func \(PingInteraction\) [Entitlements](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L99>)

```go
func (PingInteraction) Entitlements() []Entitlement
```



<a name="PingInteraction.GuildID"></a>
### func \(PingInteraction\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L67>)

```go
func (PingInteraction) GuildID() *snowflake.ID
```



<a name="PingInteraction.GuildLocale"></a>
### func \(PingInteraction\) [GuildLocale](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L83>)

```go
func (PingInteraction) GuildLocale() *Locale
```



<a name="PingInteraction.ID"></a>
### func \(PingInteraction\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L47>)

```go
func (i PingInteraction) ID() snowflake.ID
```



<a name="PingInteraction.Locale"></a>
### func \(PingInteraction\) [Locale](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L79>)

```go
func (PingInteraction) Locale() Locale
```



<a name="PingInteraction.MarshalJSON"></a>
### func \(PingInteraction\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L33>)

```go
func (i PingInteraction) MarshalJSON() ([]byte, error)
```



<a name="PingInteraction.Member"></a>
### func \(PingInteraction\) [Member](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L87>)

```go
func (PingInteraction) Member() *ResolvedMember
```



<a name="PingInteraction.Token"></a>
### func \(PingInteraction\) [Token](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L55>)

```go
func (i PingInteraction) Token() string
```



<a name="PingInteraction.Type"></a>
### func \(PingInteraction\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L43>)

```go
func (PingInteraction) Type() InteractionType
```



<a name="PingInteraction.UnmarshalJSON"></a>
### func \(\*PingInteraction\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L19>)

```go
func (i *PingInteraction) UnmarshalJSON(data []byte) error
```



<a name="PingInteraction.User"></a>
### func \(PingInteraction\) [User](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L91>)

```go
func (PingInteraction) User() User
```



<a name="PingInteraction.Version"></a>
### func \(PingInteraction\) [Version](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_ping.go#L59>)

```go
func (i PingInteraction) Version() int
```



<a name="Poll"></a>
## type [Poll](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L10-L17>)



```go
type Poll struct {
    Question         PollMedia      `json:"question"`
    Answers          []PollAnswer   `json:"answers"`
    Expiry           *time.Time     `json:"expiry"`
    AllowMultiselect bool           `json:"allow_multiselect"`
    LayoutType       PollLayoutType `json:"layout_type"`
    Results          *PollResults   `json:"results"`
}
```

<a name="PollAnswer"></a>
## type [PollAnswer](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L50-L53>)



```go
type PollAnswer struct {
    AnswerID  *int      `json:"answer_id,omitempty"`
    PollMedia PollMedia `json:"poll_media"`
}
```

<a name="PollAnswerCount"></a>
## type [PollAnswerCount](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L60-L64>)



```go
type PollAnswerCount struct {
    ID      snowflake.ID `json:"id"`
    Count   int          `json:"count"`
    MeVoted bool         `json:"me_voted"`
}
```

<a name="PollCreate"></a>
## type [PollCreate](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L19-L25>)



```go
type PollCreate struct {
    Question         PollMedia      `json:"question"`
    Answers          []PollMedia    `json:"-"`
    Duration         int            `json:"duration"`
    AllowMultiselect bool           `json:"allow_multiselect"`
    LayoutType       PollLayoutType `json:"layout_type,omitempty"`
}
```

<a name="PollCreate.MarshalJSON"></a>
### func \(PollCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L27>)

```go
func (p PollCreate) MarshalJSON() ([]byte, error)
```



<a name="PollCreateBuilder"></a>
## type [PollCreateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L4-L6>)

PollCreateBuilder helps create PollCreate structs easier

```go
type PollCreateBuilder struct {
    PollCreate
}
```

<a name="PollCreateBuilder.AddAnswer"></a>
### func \(\*PollCreateBuilder\) [AddAnswer](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L23>)

```go
func (b *PollCreateBuilder) AddAnswer(text string, emoji *PartialEmoji) *PollCreateBuilder
```

AddAnswer adds an answer to the Poll

<a name="PollCreateBuilder.Build"></a>
### func \(\*PollCreateBuilder\) [Build](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L64>)

```go
func (b *PollCreateBuilder) Build() PollCreate
```

Build builds the PollCreateBuilder to a PollCreate struct

<a name="PollCreateBuilder.ClearAnswers"></a>
### func \(\*PollCreateBuilder\) [ClearAnswers](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L40>)

```go
func (b *PollCreateBuilder) ClearAnswers() *PollCreateBuilder
```

ClearAnswers removes all answers of the Poll

<a name="PollCreateBuilder.RemoveAnswer"></a>
### func \(\*PollCreateBuilder\) [RemoveAnswer](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L32>)

```go
func (b *PollCreateBuilder) RemoveAnswer(i int) *PollCreateBuilder
```

RemoveAnswer removes an answer from the Poll

<a name="PollCreateBuilder.SetAllowMultiselect"></a>
### func \(\*PollCreateBuilder\) [SetAllowMultiselect](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L52>)

```go
func (b *PollCreateBuilder) SetAllowMultiselect(multiselect bool) *PollCreateBuilder
```

SetAllowMultiselect sets whether users will be able to vote for more than one answer of the Poll

<a name="PollCreateBuilder.SetAnswers"></a>
### func \(\*PollCreateBuilder\) [SetAnswers](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L17>)

```go
func (b *PollCreateBuilder) SetAnswers(answers ...PollMedia) *PollCreateBuilder
```

SetAnswers sets the answers of the Poll

<a name="PollCreateBuilder.SetDuration"></a>
### func \(\*PollCreateBuilder\) [SetDuration](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L46>)

```go
func (b *PollCreateBuilder) SetDuration(duration int) *PollCreateBuilder
```

SetDuration sets the duration of the Poll \(in hours\)

<a name="PollCreateBuilder.SetLayoutType"></a>
### func \(\*PollCreateBuilder\) [SetLayoutType](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L58>)

```go
func (b *PollCreateBuilder) SetLayoutType(layout PollLayoutType) *PollCreateBuilder
```

SetLayoutType sets the layout of the Poll

<a name="PollCreateBuilder.SetQuestion"></a>
### func \(\*PollCreateBuilder\) [SetQuestion](<https://github.com/disgoorg/disgo/blob/master/discord/poll_create_builder.go#L9>)

```go
func (b *PollCreateBuilder) SetQuestion(text string) *PollCreateBuilder
```

SetQuestion sets the question of the Poll

<a name="PollLayoutType"></a>
## type [PollLayoutType](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L66>)



```go
type PollLayoutType int
```

<a name="PollLayoutTypeDefault"></a>

```go
const (
    PollLayoutTypeDefault PollLayoutType = iota + 1
)
```

<a name="PollMedia"></a>
## type [PollMedia](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L45-L48>)



```go
type PollMedia struct {
    Text  *string       `json:"text"`
    Emoji *PartialEmoji `json:"emoji,omitempty"`
}
```

<a name="PollResults"></a>
## type [PollResults](<https://github.com/disgoorg/disgo/blob/master/discord/poll.go#L55-L58>)



```go
type PollResults struct {
    IsFinalized  bool              `json:"is_finalized"`
    AnswerCounts []PollAnswerCount `json:"answer_counts"`
}
```

<a name="PremiumTier"></a>
## type [PremiumTier](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L13>)

PremiumTier tells you the boost level of a Guild

```go
type PremiumTier int
```

<a name="PremiumTierNone"></a>Constants for PremiumTier

```go
const (
    PremiumTierNone PremiumTier = iota
    PremiumTier1
    PremiumTier2
    PremiumTier3
)
```

<a name="PremiumType"></a>
## type [PremiumType](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L174>)

PremiumType defines the different discord nitro tiers a user can have \(https://discord.com/developers/docs/resources/user#user-object-premium-types\)

```go
type PremiumType int
```

<a name="PremiumTypeNone"></a>All PremiumType\(s\)

```go
const (
    PremiumTypeNone PremiumType = iota
    PremiumTypeNitroClassic
    PremiumTypeNitro
    PremiumTypeNitroBasic
)
```

<a name="Presence"></a>
## type [Presence](<https://github.com/disgoorg/disgo/blob/master/discord/presence.go#L8-L14>)

Presence \(https://discord.com/developers/docs/topics/gateway#presence-update\)

```go
type Presence struct {
    PresenceUser PresenceUser `json:"user"`
    GuildID      snowflake.ID `json:"guild_id"`
    Status       OnlineStatus `json:"status"`
    Activities   []Activity   `json:"activities"`
    ClientStatus ClientStatus `json:"client_status"`
}
```

<a name="PresenceUser"></a>
## type [PresenceUser](<https://github.com/disgoorg/disgo/blob/master/discord/presence.go#L16-L18>)



```go
type PresenceUser struct {
    ID snowflake.ID `json:"id"`
}
```

<a name="QueryValues"></a>
## type [QueryValues](<https://github.com/disgoorg/disgo/blob/master/discord/url.go#L12>)

QueryValues holds key value pairs of query values

```go
type QueryValues map[string]any
```

<a name="QueryValues.Encode"></a>
### func \(QueryValues\) [Encode](<https://github.com/disgoorg/disgo/blob/master/discord/url.go#L15>)

```go
func (q QueryValues) Encode() string
```

Encode encodes the QueryValues into a string to append to the url

<a name="ReactionCountDetails"></a>
## type [ReactionCountDetails](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L368-L371>)



```go
type ReactionCountDetails struct {
    Burst  int `json:"burst"`
    Normal int `json:"normal"`
}
```

<a name="ResolvedChannel"></a>
## type [ResolvedChannel](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L154-L161>)



```go
type ResolvedChannel struct {
    ID             snowflake.ID   `json:"id"`
    Name           string         `json:"name"`
    Type           ChannelType    `json:"type"`
    Permissions    Permissions    `json:"permissions"`
    ThreadMetadata ThreadMetadata `json:"thread_metadata"`
    ParentID       snowflake.ID   `json:"parent_id"`
}
```

<a name="ResolvedData"></a>
## type [ResolvedData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L125-L131>)



```go
type ResolvedData struct {
    Users       map[snowflake.ID]User            `json:"users,omitempty"`
    Members     map[snowflake.ID]ResolvedMember  `json:"members,omitempty"`
    Roles       map[snowflake.ID]Role            `json:"roles,omitempty"`
    Channels    map[snowflake.ID]ResolvedChannel `json:"channels,omitempty"`
    Attachments map[snowflake.ID]Attachment      `json:"attachments,omitempty"`
}
```

<a name="ResolvedData.UnmarshalJSON"></a>
### func \(\*ResolvedData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L133>)

```go
func (r *ResolvedData) UnmarshalJSON(data []byte) error
```



<a name="ResolvedMember"></a>
## type [ResolvedMember](<https://github.com/disgoorg/disgo/blob/master/discord/interaction.go#L149-L152>)



```go
type ResolvedMember struct {
    Member
    Permissions Permissions `json:"permissions,omitempty"`
}
```

<a name="RestGuild"></a>
## type [RestGuild](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L209-L214>)



```go
type RestGuild struct {
    Guild
    Stickers []Sticker `json:"stickers"`
    Roles    []Role    `json:"roles"`
    Emojis   []Emoji   `json:"emojis"`
}
```

<a name="Role"></a>
## type [Role](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L13-L28>)

Role is a Guild Role object

```go
type Role struct {
    ID          snowflake.ID `json:"id"`
    GuildID     snowflake.ID `json:"guild_id,omitempty"` // not present in the API but we need it
    Name        string       `json:"name"`
    Description *string      `json:"description,omitempty"`
    Color       int          `json:"color"`
    Hoist       bool         `json:"hoist"`
    Position    int          `json:"position"`
    Permissions Permissions  `json:"permissions"`
    Managed     bool         `json:"managed"`
    Icon        *string      `json:"icon"`
    Emoji       *string      `json:"unicode_emoji"`
    Mentionable bool         `json:"mentionable"`
    Tags        *RoleTag     `json:"tags,omitempty"`
    Flags       RoleFlags    `json:"flags"`
}
```

<a name="Role.CreatedAt"></a>
### func \(Role\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L46>)

```go
func (r Role) CreatedAt() time.Time
```



<a name="Role.IconURL"></a>
### func \(Role\) [IconURL](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L38>)

```go
func (r Role) IconURL(opts ...CDNOpt) *string
```



<a name="Role.Mention"></a>
### func \(Role\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L34>)

```go
func (r Role) Mention() string
```



<a name="Role.String"></a>
### func \(Role\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L30>)

```go
func (r Role) String() string
```



<a name="RoleCreate"></a>
## type [RoleCreate](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L68-L76>)

RoleCreate is the payload to create a Role

```go
type RoleCreate struct {
    Name        string       `json:"name,omitempty"`
    Permissions *Permissions `json:"permissions,omitempty"`
    Color       int          `json:"color,omitempty"`
    Hoist       bool         `json:"hoist,omitempty"`
    Icon        *Icon        `json:"icon,omitempty"`
    Emoji       string       `json:"unicode_emoji,omitempty"`
    Mentionable bool         `json:"mentionable,omitempty"`
}
```

<a name="RoleFlags"></a>
## type [RoleFlags](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L60>)



```go
type RoleFlags int
```

<a name="RoleFlagInPrompt"></a>

```go
const (
    RoleFlagInPrompt RoleFlags = 1 << iota
    RoleFlagsNone    RoleFlags = 0
)
```

<a name="RolePermissionOverwrite"></a>
## type [RolePermissionOverwrite](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L91-L95>)



```go
type RolePermissionOverwrite struct {
    RoleID snowflake.ID `json:"id"`
    Allow  Permissions  `json:"allow"`
    Deny   Permissions  `json:"deny"`
}
```

<a name="RolePermissionOverwrite.ID"></a>
### func \(RolePermissionOverwrite\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L97>)

```go
func (o RolePermissionOverwrite) ID() snowflake.ID
```



<a name="RolePermissionOverwrite.MarshalJSON"></a>
### func \(RolePermissionOverwrite\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L101>)

```go
func (o RolePermissionOverwrite) MarshalJSON() ([]byte, error)
```



<a name="RolePermissionOverwrite.Type"></a>
### func \(RolePermissionOverwrite\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L112>)

```go
func (o RolePermissionOverwrite) Type() PermissionOverwriteType
```



<a name="RolePermissionOverwriteUpdate"></a>
## type [RolePermissionOverwriteUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L145-L148>)



```go
type RolePermissionOverwriteUpdate struct {
    Allow *Permissions `json:"allow,omitempty"`
    Deny  *Permissions `json:"deny,omitempty"`
}
```

<a name="RolePermissionOverwriteUpdate.MarshalJSON"></a>
### func \(RolePermissionOverwriteUpdate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L150>)

```go
func (u RolePermissionOverwriteUpdate) MarshalJSON() ([]byte, error)
```



<a name="RolePermissionOverwriteUpdate.Type"></a>
### func \(RolePermissionOverwriteUpdate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L161>)

```go
func (RolePermissionOverwriteUpdate) Type() PermissionOverwriteType
```



<a name="RolePositionUpdate"></a>
## type [RolePositionUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L90-L93>)

RolePositionUpdate is the payload to update a Role\(s\) position

```go
type RolePositionUpdate struct {
    ID       snowflake.ID `json:"id"`
    Position *int         `json:"position,omitempty"`
}
```

<a name="RoleSelectMenuComponent"></a>
## type [RoleSelectMenuComponent](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L306-L313>)



```go
type RoleSelectMenuComponent struct {
    CustomID      string                   `json:"custom_id"`
    Placeholder   string                   `json:"placeholder,omitempty"`
    DefaultValues []SelectMenuDefaultValue `json:"default_values,omitempty"`
    MinValues     *int                     `json:"min_values,omitempty"`
    MaxValues     int                      `json:"max_values,omitempty"`
    Disabled      bool                     `json:"disabled,omitempty"`
}
```

<a name="NewRoleSelectMenu"></a>
### func [NewRoleSelectMenu](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L299>)

```go
func NewRoleSelectMenu(customID string, placeholder string) RoleSelectMenuComponent
```

NewRoleSelectMenu builds a new SelectMenuComponent from the provided values

<a name="RoleSelectMenuComponent.AddDefaultValue"></a>
### func \(RoleSelectMenuComponent\) [AddDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L391>)

```go
func (c RoleSelectMenuComponent) AddDefaultValue(defaultValue snowflake.ID) RoleSelectMenuComponent
```

AddDefaultValue returns a new RoleSelectMenuComponent with the provided default value added

<a name="RoleSelectMenuComponent.AsDisabled"></a>
### func \(RoleSelectMenuComponent\) [AsDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L369>)

```go
func (c RoleSelectMenuComponent) AsDisabled() RoleSelectMenuComponent
```

AsDisabled returns a new RoleSelectMenuComponent but disabled

<a name="RoleSelectMenuComponent.AsEnabled"></a>
### func \(RoleSelectMenuComponent\) [AsEnabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L363>)

```go
func (c RoleSelectMenuComponent) AsEnabled() RoleSelectMenuComponent
```

AsEnabled returns a new RoleSelectMenuComponent but enabled

<a name="RoleSelectMenuComponent.ID"></a>
### func \(RoleSelectMenuComponent\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L330>)

```go
func (c RoleSelectMenuComponent) ID() string
```



<a name="RoleSelectMenuComponent.MarshalJSON"></a>
### func \(RoleSelectMenuComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L315>)

```go
func (c RoleSelectMenuComponent) MarshalJSON() ([]byte, error)
```



<a name="RoleSelectMenuComponent.RemoveDefaultValue"></a>
### func \(RoleSelectMenuComponent\) [RemoveDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L397>)

```go
func (c RoleSelectMenuComponent) RemoveDefaultValue(index int) RoleSelectMenuComponent
```

RemoveDefaultValue returns a new RoleSelectMenuComponent with the provided default value at the index removed

<a name="RoleSelectMenuComponent.SetDefaultValues"></a>
### func \(RoleSelectMenuComponent\) [SetDefaultValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L381>)

```go
func (c RoleSelectMenuComponent) SetDefaultValues(defaultValues ...snowflake.ID) RoleSelectMenuComponent
```

SetDefaultValues returns a new RoleSelectMenuComponent with the provided default values

<a name="RoleSelectMenuComponent.Type"></a>
### func \(RoleSelectMenuComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L326>)

```go
func (RoleSelectMenuComponent) Type() ComponentType
```



<a name="RoleSelectMenuComponent.WithCustomID"></a>
### func \(RoleSelectMenuComponent\) [WithCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L339>)

```go
func (c RoleSelectMenuComponent) WithCustomID(customID string) RoleSelectMenuComponent
```

WithCustomID returns a new RoleSelectMenuComponent with the provided customID

<a name="RoleSelectMenuComponent.WithDisabled"></a>
### func \(RoleSelectMenuComponent\) [WithDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L375>)

```go
func (c RoleSelectMenuComponent) WithDisabled(disabled bool) RoleSelectMenuComponent
```

WithDisabled returns a new RoleSelectMenuComponent with the provided disabled

<a name="RoleSelectMenuComponent.WithMaxValues"></a>
### func \(RoleSelectMenuComponent\) [WithMaxValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L357>)

```go
func (c RoleSelectMenuComponent) WithMaxValues(maxValue int) RoleSelectMenuComponent
```

WithMaxValues returns a new RoleSelectMenuComponent with the provided maxValue

<a name="RoleSelectMenuComponent.WithMinValues"></a>
### func \(RoleSelectMenuComponent\) [WithMinValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L351>)

```go
func (c RoleSelectMenuComponent) WithMinValues(minValue int) RoleSelectMenuComponent
```

WithMinValues returns a new RoleSelectMenuComponent with the provided minValue

<a name="RoleSelectMenuComponent.WithPlaceholder"></a>
### func \(RoleSelectMenuComponent\) [WithPlaceholder](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L345>)

```go
func (c RoleSelectMenuComponent) WithPlaceholder(placeholder string) RoleSelectMenuComponent
```

WithPlaceholder returns a new RoleSelectMenuComponent with the provided placeholder

<a name="RoleSelectMenuInteractionData"></a>
## type [RoleSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L332-L336>)



```go
type RoleSelectMenuInteractionData struct {
    Resolved RoleSelectMenuResolved `json:"resolved"`
    Values   []snowflake.ID         `json:"values"`
    // contains filtered or unexported fields
}
```

<a name="RoleSelectMenuInteractionData.CustomID"></a>
### func \(RoleSelectMenuInteractionData\) [CustomID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L380>)

```go
func (d RoleSelectMenuInteractionData) CustomID() string
```



<a name="RoleSelectMenuInteractionData.MarshalJSON"></a>
### func \(RoleSelectMenuInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L355>)

```go
func (d RoleSelectMenuInteractionData) MarshalJSON() ([]byte, error)
```



<a name="RoleSelectMenuInteractionData.Roles"></a>
### func \(RoleSelectMenuInteractionData\) [Roles](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L366>)

```go
func (d RoleSelectMenuInteractionData) Roles() []Role
```



<a name="RoleSelectMenuInteractionData.Type"></a>
### func \(RoleSelectMenuInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L376>)

```go
func (RoleSelectMenuInteractionData) Type() ComponentType
```



<a name="RoleSelectMenuInteractionData.UnmarshalJSON"></a>
### func \(\*RoleSelectMenuInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L342>)

```go
func (d *RoleSelectMenuInteractionData) UnmarshalJSON(data []byte) error
```



<a name="RoleSelectMenuResolved"></a>
## type [RoleSelectMenuResolved](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L338-L340>)



```go
type RoleSelectMenuResolved struct {
    Roles map[snowflake.ID]Role `json:"roles"`
}
```

<a name="RoleSubscriptionData"></a>
## type [RoleSubscriptionData](<https://github.com/disgoorg/disgo/blob/master/discord/message.go#L462-L467>)



```go
type RoleSubscriptionData struct {
    RoleSubscriptionListingID snowflake.ID `json:"role_subscription_listing_id"`
    TierName                  string       `json:"tier_name"`
    TotalMonthsSubscribed     int          `json:"total_months_subscribed"`
    IsRenewal                 bool         `json:"is_renewal"`
}
```

<a name="RoleTag"></a>
## type [RoleTag](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L51-L58>)

RoleTag are tags a Role has

```go
type RoleTag struct {
    BotID                 *snowflake.ID `json:"bot_id,omitempty"`
    IntegrationID         *snowflake.ID `json:"integration_id,omitempty"`
    PremiumSubscriber     bool          `json:"premium_subscriber"`
    SubscriptionListingID *snowflake.ID `json:"subscription_listing_id,omitempty"`
    AvailableForPurchase  bool          `json:"available_for_purchase"`
    GuildConnections      bool          `json:"guild_connections"`
}
```

<a name="RoleUpdate"></a>
## type [RoleUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/role.go#L79-L87>)

RoleUpdate is the payload to update a Role

```go
type RoleUpdate struct {
    Name        *string              `json:"name,omitempty"`
    Permissions *Permissions         `json:"permissions,omitempty"`
    Color       *int                 `json:"color,omitempty"`
    Hoist       *bool                `json:"hoist,omitempty"`
    Icon        *json.Nullable[Icon] `json:"icon,omitempty"`
    Emoji       *string              `json:"unicode_emoji,omitempty"`
    Mentionable *bool                `json:"mentionable,omitempty"`
}
```

<a name="SKU"></a>
## type [SKU](<https://github.com/disgoorg/disgo/blob/master/discord/sku.go#L9-L22>)



```go
type SKU struct {
    ID             snowflake.ID  `json:"id"`
    Type           SKUType       `json:"type"`
    ApplicationID  snowflake.ID  `json:"application_id"`
    Name           string        `json:"name"`
    Slug           string        `json:"slug"`
    DependentSkuID *snowflake.ID `json:"dependent_sku_id"`
    AccessType     int           `json:"access_type"`
    Features       []string      `json:"features"`
    ReleaseDate    *time.Time    `json:"release_date"`
    Premium        bool          `json:"premium"`
    Flags          SKUFlags      `json:"flags"`
    ShowAgeGate    bool          `json:"show_age_gate"`
}
```

<a name="SKUFlags"></a>
## type [SKUFlags](<https://github.com/disgoorg/disgo/blob/master/discord/sku.go#L34>)



```go
type SKUFlags int
```

<a name="SKUFlagAvailable"></a>

```go
const (
    SKUFlagAvailable SKUFlags = 1 << (iota + 2)

    SKUFlagGuildSubscription
    SKUFlagUserSubscription
)
```

<a name="SKUType"></a>
## type [SKUType](<https://github.com/disgoorg/disgo/blob/master/discord/sku.go#L24>)



```go
type SKUType int
```

<a name="SKUTypeDurable"></a>

```go
const (
    SKUTypeDurable SKUType = iota + 2
    SKUTypeConsumable

    SKUTypeSubscription
    SKUTypeSubscriptionGroup
)
```

<a name="ScheduledEventEntityType"></a>
## type [ScheduledEventEntityType](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L93>)

ScheduledEventEntityType the type of the scheduled event \(https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types\)

```go
type ScheduledEventEntityType int
```

<a name="ScheduledEventEntityTypeStageInstance"></a>

```go
const (
    ScheduledEventEntityTypeStageInstance ScheduledEventEntityType = iota + 1
    ScheduledEventEntityTypeVoice
    ScheduledEventEntityTypeExternal
)
```

<a name="ScheduledEventPrivacyLevel"></a>
## type [ScheduledEventPrivacyLevel](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L75>)

ScheduledEventPrivacyLevel the privacy level of the ScheduledEventPrivacyLevel \(https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level\)

```go
type ScheduledEventPrivacyLevel int
```

<a name="ScheduledEventStatus"></a>
## type [ScheduledEventStatus](<https://github.com/disgoorg/disgo/blob/master/discord/guild_scheduled_event.go#L83>)

ScheduledEventStatus the status of the scheduled event \(https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status\)

```go
type ScheduledEventStatus int
```

<a name="ScheduledEventStatusScheduled"></a>

```go
const (
    ScheduledEventStatusScheduled ScheduledEventStatus = iota + 1
    ScheduledEventStatusActive
    ScheduledEventStatusCompleted
    ScheduledEventStatusCancelled
)
```

<a name="SelectMenuComponent"></a>
## type [SelectMenuComponent](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L8-L11>)



```go
type SelectMenuComponent interface {
    InteractiveComponent
    // contains filtered or unexported methods
}
```

<a name="SelectMenuDefaultValue"></a>
## type [SelectMenuDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L632-L635>)



```go
type SelectMenuDefaultValue struct {
    ID   snowflake.ID               `json:"id"`
    Type SelectMenuDefaultValueType `json:"type"`
}
```

<a name="NewSelectMenuDefaultChannel"></a>
### func [NewSelectMenuDefaultChannel](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L662>)

```go
func NewSelectMenuDefaultChannel(id snowflake.ID) SelectMenuDefaultValue
```

NewSelectMenuDefaultChannel returns a new SelectMenuDefaultValue of type SelectMenuDefaultValueTypeChannel

<a name="NewSelectMenuDefaultRole"></a>
### func [NewSelectMenuDefaultRole](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L654>)

```go
func NewSelectMenuDefaultRole(id snowflake.ID) SelectMenuDefaultValue
```

NewSelectMenuDefaultRole returns a new SelectMenuDefaultValue of type SelectMenuDefaultValueTypeRole

<a name="NewSelectMenuDefaultUser"></a>
### func [NewSelectMenuDefaultUser](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L646>)

```go
func NewSelectMenuDefaultUser(id snowflake.ID) SelectMenuDefaultValue
```

NewSelectMenuDefaultUser returns a new SelectMenuDefaultValue of type SelectMenuDefaultValueTypeUser

<a name="SelectMenuDefaultValueType"></a>
## type [SelectMenuDefaultValueType](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L637>)



```go
type SelectMenuDefaultValueType string
```

<a name="SelectMenuDefaultValueTypeUser"></a>

```go
const (
    SelectMenuDefaultValueTypeUser    SelectMenuDefaultValueType = "user"
    SelectMenuDefaultValueTypeRole    SelectMenuDefaultValueType = "role"
    SelectMenuDefaultValueTypeChannel SelectMenuDefaultValueType = "channel"
)
```

<a name="SelectMenuInteractionData"></a>
## type [SelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L225-L228>)



```go
type SelectMenuInteractionData interface {
    ComponentInteractionData
    // contains filtered or unexported methods
}
```

<a name="SessionStartLimit"></a>
## type [SessionStartLimit](<https://github.com/disgoorg/disgo/blob/master/discord/gateway.go#L13-L18>)



```go
type SessionStartLimit struct {
    Total          int `json:"total"`
    Remaining      int `json:"remaining"`
    ResetAfter     int `json:"reset_after"`
    MaxConcurrency int `json:"max_concurrency"`
}
```

<a name="SlashCommand"></a>
## type [SlashCommand](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L86-L103>)



```go
type SlashCommand struct {
    Description              string
    DescriptionLocalizations map[Locale]string
    DescriptionLocalized     string
    Options                  []ApplicationCommandOption
    // contains filtered or unexported fields
}
```

<a name="SlashCommand.ApplicationID"></a>
### func \(SlashCommand\) [ApplicationID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L160>)

```go
func (c SlashCommand) ApplicationID() snowflake.ID
```



<a name="SlashCommand.Contexts"></a>
### func \(SlashCommand\) [Contexts](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L195>)

```go
func (c SlashCommand) Contexts() []InteractionContextType
```



<a name="SlashCommand.CreatedAt"></a>
### func \(SlashCommand\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L203>)

```go
func (c SlashCommand) CreatedAt() time.Time
```



<a name="SlashCommand.DMPermission"></a>
### func \(SlashCommand\) [DMPermission](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L183>)

```go
func (c SlashCommand) DMPermission() bool
```



<a name="SlashCommand.DefaultMemberPermissions"></a>
### func \(SlashCommand\) [DefaultMemberPermissions](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L180>)

```go
func (c SlashCommand) DefaultMemberPermissions() Permissions
```



<a name="SlashCommand.GuildID"></a>
### func \(SlashCommand\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L164>)

```go
func (c SlashCommand) GuildID() *snowflake.ID
```



<a name="SlashCommand.ID"></a>
### func \(SlashCommand\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L152>)

```go
func (c SlashCommand) ID() snowflake.ID
```



<a name="SlashCommand.IntegrationTypes"></a>
### func \(SlashCommand\) [IntegrationTypes](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L191>)

```go
func (c SlashCommand) IntegrationTypes() []ApplicationIntegrationType
```



<a name="SlashCommand.MarshalJSON"></a>
### func \(SlashCommand\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L130>)

```go
func (c SlashCommand) MarshalJSON() ([]byte, error)
```



<a name="SlashCommand.Mention"></a>
### func \(SlashCommand\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L207>)

```go
func (c SlashCommand) Mention() string
```



<a name="SlashCommand.NSFW"></a>
### func \(SlashCommand\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L187>)

```go
func (c SlashCommand) NSFW() bool
```



<a name="SlashCommand.Name"></a>
### func \(SlashCommand\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L168>)

```go
func (c SlashCommand) Name() string
```



<a name="SlashCommand.NameLocalizations"></a>
### func \(SlashCommand\) [NameLocalizations](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L172>)

```go
func (c SlashCommand) NameLocalizations() map[Locale]string
```



<a name="SlashCommand.NameLocalized"></a>
### func \(SlashCommand\) [NameLocalized](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L176>)

```go
func (c SlashCommand) NameLocalized() string
```



<a name="SlashCommand.Type"></a>
### func \(SlashCommand\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L156>)

```go
func (SlashCommand) Type() ApplicationCommandType
```



<a name="SlashCommand.UnmarshalJSON"></a>
### func \(\*SlashCommand\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L105>)

```go
func (c *SlashCommand) UnmarshalJSON(data []byte) error
```



<a name="SlashCommand.Version"></a>
### func \(SlashCommand\) [Version](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L199>)

```go
func (c SlashCommand) Version() snowflake.ID
```



<a name="SlashCommandCreate"></a>
## type [SlashCommandCreate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L12-L24>)



```go
type SlashCommandCreate struct {
    Name                     string                      `json:"name"`
    NameLocalizations        map[Locale]string           `json:"name_localizations,omitempty"`
    Description              string                      `json:"description"`
    DescriptionLocalizations map[Locale]string           `json:"description_localizations,omitempty"`
    Options                  []ApplicationCommandOption  `json:"options,omitempty"`
    DefaultMemberPermissions *json.Nullable[Permissions] `json:"default_member_permissions,omitempty"` // different behavior for 0 and null, optional
    // Deprecated: Use Contexts instead
    DMPermission     *bool                        `json:"dm_permission,omitempty"`
    IntegrationTypes []ApplicationIntegrationType `json:"integration_types,omitempty"`
    Contexts         []InteractionContextType     `json:"contexts,omitempty"`
    NSFW             *bool                        `json:"nsfw,omitempty"`
}
```

<a name="SlashCommandCreate.CommandName"></a>
### func \(SlashCommandCreate\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L41>)

```go
func (c SlashCommandCreate) CommandName() string
```



<a name="SlashCommandCreate.MarshalJSON"></a>
### func \(SlashCommandCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L26>)

```go
func (c SlashCommandCreate) MarshalJSON() ([]byte, error)
```



<a name="SlashCommandCreate.Type"></a>
### func \(SlashCommandCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L37>)

```go
func (SlashCommandCreate) Type() ApplicationCommandType
```



<a name="SlashCommandInteractionData"></a>
## type [SlashCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L173-L181>)



```go
type SlashCommandInteractionData struct {
    SubCommandName      *string
    SubCommandGroupName *string
    Resolved            ResolvedData
    Options             map[string]SlashCommandOption
    // contains filtered or unexported fields
}
```

<a name="SlashCommandInteractionData.All"></a>
### func \(SlashCommandInteractionData\) [All](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L470>)

```go
func (d SlashCommandInteractionData) All() []SlashCommandOption
```



<a name="SlashCommandInteractionData.Attachment"></a>
### func \(SlashCommandInteractionData\) [Attachment](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L463>)

```go
func (d SlashCommandInteractionData) Attachment(name string) Attachment
```



<a name="SlashCommandInteractionData.Bool"></a>
### func \(SlashCommandInteractionData\) [Bool](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L339>)

```go
func (d SlashCommandInteractionData) Bool(name string) bool
```



<a name="SlashCommandInteractionData.Channel"></a>
### func \(SlashCommandInteractionData\) [Channel](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L393>)

```go
func (d SlashCommandInteractionData) Channel(name string) ResolvedChannel
```



<a name="SlashCommandInteractionData.CommandID"></a>
### func \(SlashCommandInteractionData\) [CommandID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L267>)

```go
func (d SlashCommandInteractionData) CommandID() snowflake.ID
```



<a name="SlashCommandInteractionData.CommandName"></a>
### func \(SlashCommandInteractionData\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L271>)

```go
func (d SlashCommandInteractionData) CommandName() string
```



<a name="SlashCommandInteractionData.CommandPath"></a>
### func \(SlashCommandInteractionData\) [CommandPath](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L275>)

```go
func (d SlashCommandInteractionData) CommandPath() string
```



<a name="SlashCommandInteractionData.Find"></a>
### func \(SlashCommandInteractionData\) [Find](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L486>)

```go
func (d SlashCommandInteractionData) Find(optionFindFunc func(option SlashCommandOption) bool) (SlashCommandOption, bool)
```



<a name="SlashCommandInteractionData.FindAll"></a>
### func \(SlashCommandInteractionData\) [FindAll](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L495>)

```go
func (d SlashCommandInteractionData) FindAll(optionFindFunc func(option SlashCommandOption) bool) []SlashCommandOption
```



<a name="SlashCommandInteractionData.Float"></a>
### func \(SlashCommandInteractionData\) [Float](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L445>)

```go
func (d SlashCommandInteractionData) Float(name string) float64
```



<a name="SlashCommandInteractionData.GetByType"></a>
### func \(SlashCommandInteractionData\) [GetByType](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L480>)

```go
func (d SlashCommandInteractionData) GetByType(optionType ApplicationCommandOptionType) []SlashCommandOption
```



<a name="SlashCommandInteractionData.GuildID"></a>
### func \(SlashCommandInteractionData\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L286>)

```go
func (d SlashCommandInteractionData) GuildID() *snowflake.ID
```



<a name="SlashCommandInteractionData.Int"></a>
### func \(SlashCommandInteractionData\) [Int](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L322>)

```go
func (d SlashCommandInteractionData) Int(name string) int
```



<a name="SlashCommandInteractionData.MarshalJSON"></a>
### func \(SlashCommandInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L223>)

```go
func (d SlashCommandInteractionData) MarshalJSON() ([]byte, error)
```



<a name="SlashCommandInteractionData.Member"></a>
### func \(SlashCommandInteractionData\) [Member](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L375>)

```go
func (d SlashCommandInteractionData) Member(name string) ResolvedMember
```



<a name="SlashCommandInteractionData.OptAttachment"></a>
### func \(SlashCommandInteractionData\) [OptAttachment](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L452>)

```go
func (d SlashCommandInteractionData) OptAttachment(name string) (Attachment, bool)
```



<a name="SlashCommandInteractionData.OptBool"></a>
### func \(SlashCommandInteractionData\) [OptBool](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L329>)

```go
func (d SlashCommandInteractionData) OptBool(name string) (bool, bool)
```



<a name="SlashCommandInteractionData.OptChannel"></a>
### func \(SlashCommandInteractionData\) [OptChannel](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L382>)

```go
func (d SlashCommandInteractionData) OptChannel(name string) (ResolvedChannel, bool)
```



<a name="SlashCommandInteractionData.OptFloat"></a>
### func \(SlashCommandInteractionData\) [OptFloat](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L435>)

```go
func (d SlashCommandInteractionData) OptFloat(name string) (float64, bool)
```



<a name="SlashCommandInteractionData.OptInt"></a>
### func \(SlashCommandInteractionData\) [OptInt](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L312>)

```go
func (d SlashCommandInteractionData) OptInt(name string) (int, bool)
```



<a name="SlashCommandInteractionData.OptMember"></a>
### func \(SlashCommandInteractionData\) [OptMember](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L364>)

```go
func (d SlashCommandInteractionData) OptMember(name string) (ResolvedMember, bool)
```



<a name="SlashCommandInteractionData.OptRole"></a>
### func \(SlashCommandInteractionData\) [OptRole](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L400>)

```go
func (d SlashCommandInteractionData) OptRole(name string) (Role, bool)
```



<a name="SlashCommandInteractionData.OptSnowflake"></a>
### func \(SlashCommandInteractionData\) [OptSnowflake](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L418>)

```go
func (d SlashCommandInteractionData) OptSnowflake(name string) (snowflake.ID, bool)
```



<a name="SlashCommandInteractionData.OptString"></a>
### func \(SlashCommandInteractionData\) [OptString](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L295>)

```go
func (d SlashCommandInteractionData) OptString(name string) (string, bool)
```



<a name="SlashCommandInteractionData.OptUser"></a>
### func \(SlashCommandInteractionData\) [OptUser](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L346>)

```go
func (d SlashCommandInteractionData) OptUser(name string) (User, bool)
```



<a name="SlashCommandInteractionData.Option"></a>
### func \(SlashCommandInteractionData\) [Option](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L290>)

```go
func (d SlashCommandInteractionData) Option(name string) (SlashCommandOption, bool)
```



<a name="SlashCommandInteractionData.Role"></a>
### func \(SlashCommandInteractionData\) [Role](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L411>)

```go
func (d SlashCommandInteractionData) Role(name string) Role
```



<a name="SlashCommandInteractionData.Snowflake"></a>
### func \(SlashCommandInteractionData\) [Snowflake](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L428>)

```go
func (d SlashCommandInteractionData) Snowflake(name string) snowflake.ID
```



<a name="SlashCommandInteractionData.String"></a>
### func \(SlashCommandInteractionData\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L305>)

```go
func (d SlashCommandInteractionData) String(name string) string
```



<a name="SlashCommandInteractionData.Type"></a>
### func \(SlashCommandInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L263>)

```go
func (SlashCommandInteractionData) Type() ApplicationCommandType
```



<a name="SlashCommandInteractionData.UnmarshalJSON"></a>
### func \(\*SlashCommandInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L183>)

```go
func (d *SlashCommandInteractionData) UnmarshalJSON(data []byte) error
```



<a name="SlashCommandInteractionData.User"></a>
### func \(SlashCommandInteractionData\) [User](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L357>)

```go
func (d SlashCommandInteractionData) User(name string) User
```



<a name="SlashCommandOption"></a>
## type [SlashCommandOption](<https://github.com/disgoorg/disgo/blob/master/discord/slash_command_option.go#L81-L85>)



```go
type SlashCommandOption struct {
    Name  string                       `json:"name"`
    Type  ApplicationCommandOptionType `json:"type"`
    Value json.RawMessage              `json:"value"`
}
```

<a name="SlashCommandOptionSubCommand"></a>
## type [SlashCommandOptionSubCommand](<https://github.com/disgoorg/disgo/blob/master/discord/slash_command_option.go#L55-L59>)



```go
type SlashCommandOptionSubCommand struct {
    Name    string                       `json:"name"`
    Type    ApplicationCommandOptionType `json:"type"`
    Options []SlashCommandOption         `json:"options,omitempty"`
}
```

<a name="SlashCommandOptionSubCommandGroup"></a>
## type [SlashCommandOptionSubCommandGroup](<https://github.com/disgoorg/disgo/blob/master/discord/slash_command_option.go#L68-L72>)



```go
type SlashCommandOptionSubCommandGroup struct {
    Name    string                         `json:"name"`
    Type    ApplicationCommandOptionType   `json:"type"`
    Options []SlashCommandOptionSubCommand `json:"options,omitempty"`
}
```

<a name="SlashCommandUpdate"></a>
## type [SlashCommandUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L12-L24>)



```go
type SlashCommandUpdate struct {
    Name                     *string                     `json:"name,omitempty"`
    NameLocalizations        *map[Locale]string          `json:"name_localizations,omitempty"`
    Description              *string                     `json:"description,omitempty"`
    DescriptionLocalizations *map[Locale]string          `json:"description_localizations,omitempty"`
    Options                  *[]ApplicationCommandOption `json:"options,omitempty"`
    DefaultMemberPermissions *json.Nullable[Permissions] `json:"default_member_permissions,omitempty"`
    // Deprecated: Use Contexts instead
    DMPermission     *bool                         `json:"dm_permission,omitempty"`
    IntegrationTypes *[]ApplicationIntegrationType `json:"integration_types,omitempty"`
    Contexts         *[]InteractionContextType     `json:"contexts,omitempty"`
    NSFW             *bool                         `json:"nsfw,omitempty"`
}
```

<a name="SlashCommandUpdate.CommandName"></a>
### func \(SlashCommandUpdate\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L41>)

```go
func (c SlashCommandUpdate) CommandName() *string
```



<a name="SlashCommandUpdate.MarshalJSON"></a>
### func \(SlashCommandUpdate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L26>)

```go
func (c SlashCommandUpdate) MarshalJSON() ([]byte, error)
```



<a name="SlashCommandUpdate.Type"></a>
### func \(SlashCommandUpdate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L37>)

```go
func (SlashCommandUpdate) Type() ApplicationCommandType
```



<a name="StageInstance"></a>
## type [StageInstance](<https://github.com/disgoorg/disgo/blob/master/discord/stage_instance.go#L16-L23>)



```go
type StageInstance struct {
    ID                   snowflake.ID      `json:"id"`
    GuildID              snowflake.ID      `json:"guild_id"`
    ChannelID            snowflake.ID      `json:"channel_id"`
    Topic                string            `json:"topic"`
    PrivacyLevel         StagePrivacyLevel `json:"privacy_level"`
    DiscoverableDisabled bool              `json:"discoverable_disabled"`
}
```

<a name="StageInstance.CreatedAt"></a>
### func \(StageInstance\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/stage_instance.go#L25>)

```go
func (e StageInstance) CreatedAt() time.Time
```



<a name="StageInstanceCreate"></a>
## type [StageInstanceCreate](<https://github.com/disgoorg/disgo/blob/master/discord/stage_instance.go#L29-L35>)



```go
type StageInstanceCreate struct {
    ChannelID             snowflake.ID      `json:"channel_id"`
    Topic                 string            `json:"topic,omitempty"`
    PrivacyLevel          StagePrivacyLevel `json:"privacy_level,omitempty"`
    SendStartNotification bool              `json:"send_start_notification,omitempty"`
    GuildScheduledEventID snowflake.ID      `json:"guild_scheduled_event_id,omitempty"`
}
```

<a name="StageInstanceUpdate"></a>
## type [StageInstanceUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/stage_instance.go#L37-L40>)



```go
type StageInstanceUpdate struct {
    Topic        *string            `json:"topic,omitempty"`
    PrivacyLevel *StagePrivacyLevel `json:"privacy_level,omitempty"`
}
```

<a name="StagePrivacyLevel"></a>
## type [StagePrivacyLevel](<https://github.com/disgoorg/disgo/blob/master/discord/stage_instance.go#L9>)



```go
type StagePrivacyLevel int
```

<a name="StagePrivacyLevelPublic"></a>

```go
const (
    StagePrivacyLevelPublic StagePrivacyLevel = iota + 1
    StagePrivacyLevelGuildOnly
)
```

<a name="Sticker"></a>
## type [Sticker](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L10-L22>)

Sticker is a sticker sent with a Message

```go
type Sticker struct {
    ID          snowflake.ID      `json:"id"`
    PackID      *snowflake.ID     `json:"pack_id"`
    Name        string            `json:"name"`
    Description string            `json:"description"`
    Tags        string            `json:"tags"`
    Type        StickerType       `json:"type"`
    FormatType  StickerFormatType `json:"format_type"`
    Available   *bool             `json:"available"`
    GuildID     *snowflake.ID     `json:"guild_id,omitempty"`
    User        *User             `json:"user,omitempty"`
    SortValue   *int              `json:"sort_value"`
}
```

<a name="Sticker.CreatedAt"></a>
### func \(Sticker\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L37>)

```go
func (s Sticker) CreatedAt() time.Time
```



<a name="Sticker.URL"></a>
### func \(Sticker\) [URL](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L24>)

```go
func (s Sticker) URL(opts ...CDNOpt) string
```



<a name="StickerCreate"></a>
## type [StickerCreate](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L59-L64>)



```go
type StickerCreate struct {
    Name        string `json:"name"`
    Description string `json:"description,omitempty"`
    Tags        string `json:"tags"`
    File        *File  `json:"-"`
}
```

<a name="StickerCreate.ToBody"></a>
### func \(StickerCreate\) [ToBody](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L67>)

```go
func (c StickerCreate) ToBody() (any, error)
```

ToBody returns the MessageCreate ready for body

<a name="StickerFormatType"></a>
## type [StickerFormatType](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L49>)

StickerFormatType is the Format type of Sticker

```go
type StickerFormatType int
```

<a name="StickerFormatTypePNG"></a>Constants for StickerFormatType

```go
const (
    StickerFormatTypePNG StickerFormatType = iota + 1
    StickerFormatTypeAPNG
    StickerFormatTypeLottie
    StickerFormatTypeGIF
)
```

<a name="StickerPack"></a>
## type [StickerPack](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L80-L88>)



```go
type StickerPack struct {
    ID             snowflake.ID  `json:"id"`
    Stickers       []Sticker     `json:"stickers"`
    Name           string        `json:"name"`
    SkuID          snowflake.ID  `json:"sku_id"`
    CoverStickerID snowflake.ID  `json:"cover_sticker_id"`
    Description    string        `json:"description"`
    BannerAssetID  *snowflake.ID `json:"banner_asset_id"`
}
```

<a name="StickerPack.BannerURL"></a>
### func \(StickerPack\) [BannerURL](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L90>)

```go
func (p StickerPack) BannerURL(opts ...CDNOpt) *string
```



<a name="StickerPacks"></a>
## type [StickerPacks](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L98-L100>)



```go
type StickerPacks struct {
    StickerPacks []StickerPack `json:"sticker_packs"`
}
```

<a name="StickerType"></a>
## type [StickerType](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L41>)



```go
type StickerType int
```

<a name="StickerTypeStandard"></a>

```go
const (
    StickerTypeStandard StickerType = iota + 1
    StickerTypeGuild
)
```

<a name="StickerUpdate"></a>
## type [StickerUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/sticker.go#L74-L78>)



```go
type StickerUpdate struct {
    Name        *string `json:"name,omitempty"`
    Description *string `json:"description,omitempty"`
    Tags        *string `json:"tags,omitempty"`
}
```

<a name="StringSelectMenuComponent"></a>
## type [StringSelectMenuComponent](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L28-L35>)



```go
type StringSelectMenuComponent struct {
    CustomID    string                   `json:"custom_id"`
    Placeholder string                   `json:"placeholder,omitempty"`
    MinValues   *int                     `json:"min_values,omitempty"`
    MaxValues   int                      `json:"max_values,omitempty"`
    Disabled    bool                     `json:"disabled,omitempty"`
    Options     []StringSelectMenuOption `json:"options,omitempty"`
}
```

<a name="NewStringSelectMenu"></a>
### func [NewStringSelectMenu](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L20>)

```go
func NewStringSelectMenu(customID string, placeholder string, options ...StringSelectMenuOption) StringSelectMenuComponent
```

NewStringSelectMenu builds a new SelectMenuComponent from the provided values

<a name="StringSelectMenuComponent.AddOptions"></a>
### func \(StringSelectMenuComponent\) [AddOptions](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L120>)

```go
func (c StringSelectMenuComponent) AddOptions(options ...StringSelectMenuOption) StringSelectMenuComponent
```

AddOptions returns a new StringSelectMenuComponent with the provided StringSelectMenuOption\(s\) added

<a name="StringSelectMenuComponent.AsDisabled"></a>
### func \(StringSelectMenuComponent\) [AsDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L91>)

```go
func (c StringSelectMenuComponent) AsDisabled() StringSelectMenuComponent
```

AsDisabled returns a new StringSelectMenuComponent but disabled

<a name="StringSelectMenuComponent.AsEnabled"></a>
### func \(StringSelectMenuComponent\) [AsEnabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L85>)

```go
func (c StringSelectMenuComponent) AsEnabled() StringSelectMenuComponent
```

AsEnabled returns a new StringSelectMenuComponent but enabled

<a name="StringSelectMenuComponent.ID"></a>
### func \(StringSelectMenuComponent\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L52>)

```go
func (c StringSelectMenuComponent) ID() string
```



<a name="StringSelectMenuComponent.MarshalJSON"></a>
### func \(StringSelectMenuComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L37>)

```go
func (c StringSelectMenuComponent) MarshalJSON() ([]byte, error)
```



<a name="StringSelectMenuComponent.RemoveOption"></a>
### func \(StringSelectMenuComponent\) [RemoveOption](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L126>)

```go
func (c StringSelectMenuComponent) RemoveOption(index int) StringSelectMenuComponent
```

RemoveOption returns a new StringSelectMenuComponent with the provided StringSelectMenuOption at the index removed

<a name="StringSelectMenuComponent.SetOption"></a>
### func \(StringSelectMenuComponent\) [SetOption](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L109>)

```go
func (c StringSelectMenuComponent) SetOption(value string, option StringSelectMenuOption) StringSelectMenuComponent
```

SetOption returns a new StringSelectMenuComponent with the StringSelectMenuOption which has the value replaced

<a name="StringSelectMenuComponent.SetOptions"></a>
### func \(StringSelectMenuComponent\) [SetOptions](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L103>)

```go
func (c StringSelectMenuComponent) SetOptions(options ...StringSelectMenuOption) StringSelectMenuComponent
```

SetOptions returns a new StringSelectMenuComponent with the provided StringSelectMenuOption\(s\)

<a name="StringSelectMenuComponent.Type"></a>
### func \(StringSelectMenuComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L48>)

```go
func (StringSelectMenuComponent) Type() ComponentType
```



<a name="StringSelectMenuComponent.WithCustomID"></a>
### func \(StringSelectMenuComponent\) [WithCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L61>)

```go
func (c StringSelectMenuComponent) WithCustomID(customID string) StringSelectMenuComponent
```

WithCustomID returns a new StringSelectMenuComponent with the provided customID

<a name="StringSelectMenuComponent.WithDisabled"></a>
### func \(StringSelectMenuComponent\) [WithDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L97>)

```go
func (c StringSelectMenuComponent) WithDisabled(disabled bool) StringSelectMenuComponent
```

WithDisabled returns a new StringSelectMenuComponent with the provided disabled

<a name="StringSelectMenuComponent.WithMaxValues"></a>
### func \(StringSelectMenuComponent\) [WithMaxValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L79>)

```go
func (c StringSelectMenuComponent) WithMaxValues(maxValue int) StringSelectMenuComponent
```

WithMaxValues returns a new StringSelectMenuComponent with the provided maxValue

<a name="StringSelectMenuComponent.WithMinValues"></a>
### func \(StringSelectMenuComponent\) [WithMinValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L73>)

```go
func (c StringSelectMenuComponent) WithMinValues(minValue int) StringSelectMenuComponent
```

WithMinValues returns a new StringSelectMenuComponent with the provided minValue

<a name="StringSelectMenuComponent.WithPlaceholder"></a>
### func \(StringSelectMenuComponent\) [WithPlaceholder](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L67>)

```go
func (c StringSelectMenuComponent) WithPlaceholder(placeholder string) StringSelectMenuComponent
```

WithPlaceholder returns a new StringSelectMenuComponent with the provided placeholder

<a name="StringSelectMenuInteractionData"></a>
## type [StringSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L230-L233>)



```go
type StringSelectMenuInteractionData struct {
    Values []string
    // contains filtered or unexported fields
}
```

<a name="StringSelectMenuInteractionData.CustomID"></a>
### func \(StringSelectMenuInteractionData\) [CustomID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L257>)

```go
func (d StringSelectMenuInteractionData) CustomID() string
```



<a name="StringSelectMenuInteractionData.MarshalJSON"></a>
### func \(StringSelectMenuInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L245>)

```go
func (d StringSelectMenuInteractionData) MarshalJSON() ([]byte, error)
```



<a name="StringSelectMenuInteractionData.Type"></a>
### func \(StringSelectMenuInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L253>)

```go
func (StringSelectMenuInteractionData) Type() ComponentType
```



<a name="StringSelectMenuInteractionData.UnmarshalJSON"></a>
### func \(\*StringSelectMenuInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L235>)

```go
func (d *StringSelectMenuInteractionData) UnmarshalJSON(data []byte) error
```



<a name="StringSelectMenuOption"></a>
## type [StringSelectMenuOption](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L142-L148>)

StringSelectMenuOption represents an option in a StringSelectMenuComponent

```go
type StringSelectMenuOption struct {
    Label       string          `json:"label"`
    Value       string          `json:"value"`
    Description string          `json:"description,omitempty"`
    Emoji       *ComponentEmoji `json:"emoji,omitempty"`
    Default     bool            `json:"default,omitempty"`
}
```

<a name="NewStringSelectMenuOption"></a>
### func [NewStringSelectMenuOption](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L134>)

```go
func NewStringSelectMenuOption(label string, value string) StringSelectMenuOption
```

NewStringSelectMenuOption builds a new StringSelectMenuOption

<a name="StringSelectMenuOption.WithDefault"></a>
### func \(StringSelectMenuOption\) [WithDefault](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L175>)

```go
func (o StringSelectMenuOption) WithDefault(defaultOption bool) StringSelectMenuOption
```

WithDefault returns a new StringSelectMenuOption as default/non\-default

<a name="StringSelectMenuOption.WithDescription"></a>
### func \(StringSelectMenuOption\) [WithDescription](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L163>)

```go
func (o StringSelectMenuOption) WithDescription(description string) StringSelectMenuOption
```

WithDescription returns a new StringSelectMenuOption with the provided description

<a name="StringSelectMenuOption.WithEmoji"></a>
### func \(StringSelectMenuOption\) [WithEmoji](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L169>)

```go
func (o StringSelectMenuOption) WithEmoji(emoji ComponentEmoji) StringSelectMenuOption
```

WithEmoji returns a new StringSelectMenuOption with the provided Emoji

<a name="StringSelectMenuOption.WithLabel"></a>
### func \(StringSelectMenuOption\) [WithLabel](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L151>)

```go
func (o StringSelectMenuOption) WithLabel(label string) StringSelectMenuOption
```

WithLabel returns a new StringSelectMenuOption with the provided label

<a name="StringSelectMenuOption.WithValue"></a>
### func \(StringSelectMenuOption\) [WithValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L157>)

```go
func (o StringSelectMenuOption) WithValue(value string) StringSelectMenuOption
```

WithValue returns a new StringSelectMenuOption with the provided value

<a name="SystemChannelFlags"></a>
## type [SystemChannelFlags](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L24>)

SystemChannelFlags contains the settings for the Guild\(s\) system channel

```go
type SystemChannelFlags int
```

<a name="SystemChannelFlagSuppressJoinNotifications"></a>Constants for SystemChannelFlags

```go
const (
    SystemChannelFlagSuppressJoinNotifications SystemChannelFlags = 1 << iota
    SystemChannelFlagSuppressPremiumSubscriptions
    SystemChannelFlagSuppressGuildReminderNotifications
    SystemChannelFlagSuppressJoinNotificationReplies
    SystemChannelFlagSuppressRoleSubscriptionPurchaseNotifications
    SystemChannelFlagSuppressRoleSubscriptionPurchaseNotificationReplies
)
```

<a name="SystemChannelFlags.Add"></a>
### func \(SystemChannelFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L37>)

```go
func (f SystemChannelFlags) Add(bits ...SystemChannelFlags) SystemChannelFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="SystemChannelFlags.Has"></a>
### func \(SystemChannelFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L47>)

```go
func (f SystemChannelFlags) Has(bits ...SystemChannelFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="SystemChannelFlags.Missing"></a>
### func \(SystemChannelFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L52>)

```go
func (f SystemChannelFlags) Missing(bits ...SystemChannelFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="SystemChannelFlags.Remove"></a>
### func \(SystemChannelFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L42>)

```go
func (f SystemChannelFlags) Remove(bits ...SystemChannelFlags) SystemChannelFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="Team"></a>
## type [Team](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L226-L232>)



```go
type Team struct {
    Icon    *string      `json:"icon"`
    ID      snowflake.ID `json:"id"`
    Members []TeamMember `json:"members"`
    Name    string       `json:"name"`
    OwnerID snowflake.ID `json:"owner_user_id"`
}
```

<a name="Team.CreatedAt"></a>
### func \(Team\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L242>)

```go
func (t Team) CreatedAt() time.Time
```



<a name="Team.IconURL"></a>
### func \(Team\) [IconURL](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L234>)

```go
func (t Team) IconURL(opts ...CDNOpt) *string
```



<a name="TeamMember"></a>
## type [TeamMember](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L246-L251>)



```go
type TeamMember struct {
    MembershipState MembershipState `json:"membership_state"`
    TeamID          snowflake.ID    `json:"team_id"`
    User            User            `json:"user"`
    Role            TeamRole        `json:"role"`
}
```

<a name="TeamRole"></a>
## type [TeamRole](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L260>)



```go
type TeamRole string
```

<a name="TeamRoleAdmin"></a>

```go
const (
    TeamRoleAdmin     TeamRole = "admin"
    TeamRoleDeveloper TeamRole = "developer"
    TeamRoleReadOnly  TeamRole = "read_only"
)
```

<a name="TemplateGuild"></a>
## type [TemplateGuild](<https://github.com/disgoorg/disgo/blob/master/discord/guild_template.go#L24-L38>)



```go
type TemplateGuild struct {
    Name                        string                     `json:"name"`
    Description                 *string                    `json:"description"`
    Icon                        *string                    `json:"icon_hash"`
    VerificationLevel           VerificationLevel          `json:"verification_level"`
    DefaultMessageNotifications MessageNotificationsLevel  `json:"default_message_notifications"`
    ExplicitContentFilter       ExplicitContentFilterLevel `json:"explicit_content_filter"`
    SystemChannelID             *snowflake.ID              `json:"system_channel_id"`
    SystemChannelFlags          SystemChannelFlags         `json:"system_channel_flags"`
    PreferredLocale             string                     `json:"preferred_locale"`
    AfkChannelID                *snowflake.ID              `json:"afk_channel_id"`
    AfkTimeout                  int                        `json:"afk_timeout"`
    Roles                       []GuildCreateRole          `json:"roles"`
    Channels                    []GuildCreateChannel       `json:"channels"`
}
```

<a name="TestEntitlementCreate"></a>
## type [TestEntitlementCreate](<https://github.com/disgoorg/disgo/blob/master/discord/entitlement.go#L35-L39>)



```go
type TestEntitlementCreate struct {
    SkuID     snowflake.ID         `json:"sku_id"`
    OwnerID   snowflake.ID         `json:"owner_id"`
    OwnerType EntitlementOwnerType `json:"owner_type"`
}
```

<a name="TextInputComponent"></a>
## type [TextInputComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L384-L393>)



```go
type TextInputComponent struct {
    CustomID    string         `json:"custom_id"`
    Style       TextInputStyle `json:"style"`
    Label       string         `json:"label"`
    MinLength   *int           `json:"min_length,omitempty"`
    MaxLength   int            `json:"max_length,omitempty"`
    Required    bool           `json:"required"`
    Placeholder string         `json:"placeholder,omitempty"`
    Value       string         `json:"value,omitempty"`
}
```

<a name="NewParagraphTextInput"></a>
### func [NewParagraphTextInput](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L380>)

```go
func NewParagraphTextInput(customID string, label string) TextInputComponent
```



<a name="NewShortTextInput"></a>
### func [NewShortTextInput](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L376>)

```go
func NewShortTextInput(customID string, label string) TextInputComponent
```



<a name="NewTextInput"></a>
### func [NewTextInput](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L368>)

```go
func NewTextInput(customID string, style TextInputStyle, label string) TextInputComponent
```



<a name="TextInputComponent.ID"></a>
### func \(TextInputComponent\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L410>)

```go
func (c TextInputComponent) ID() string
```



<a name="TextInputComponent.MarshalJSON"></a>
### func \(TextInputComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L395>)

```go
func (c TextInputComponent) MarshalJSON() ([]byte, error)
```



<a name="TextInputComponent.Type"></a>
### func \(TextInputComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L406>)

```go
func (TextInputComponent) Type() ComponentType
```



<a name="TextInputComponent.WithCustomID"></a>
### func \(TextInputComponent\) [WithCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L418>)

```go
func (c TextInputComponent) WithCustomID(customID string) TextInputComponent
```

WithCustomID returns a new SelectMenuComponent with the provided customID

<a name="TextInputComponent.WithMaxLength"></a>
### func \(TextInputComponent\) [WithMaxLength](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L436>)

```go
func (c TextInputComponent) WithMaxLength(maxLength int) TextInputComponent
```

WithMaxLength returns a new TextInputComponent with the provided maxLength

<a name="TextInputComponent.WithMinLength"></a>
### func \(TextInputComponent\) [WithMinLength](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L430>)

```go
func (c TextInputComponent) WithMinLength(minLength int) TextInputComponent
```

WithMinLength returns a new TextInputComponent with the provided minLength

<a name="TextInputComponent.WithPlaceholder"></a>
### func \(TextInputComponent\) [WithPlaceholder](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L448>)

```go
func (c TextInputComponent) WithPlaceholder(placeholder string) TextInputComponent
```

WithPlaceholder returns a new TextInputComponent with the provided placeholder

<a name="TextInputComponent.WithRequired"></a>
### func \(TextInputComponent\) [WithRequired](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L442>)

```go
func (c TextInputComponent) WithRequired(required bool) TextInputComponent
```

WithRequired returns a new TextInputComponent with the provided required

<a name="TextInputComponent.WithStyle"></a>
### func \(TextInputComponent\) [WithStyle](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L424>)

```go
func (c TextInputComponent) WithStyle(style TextInputStyle) TextInputComponent
```

WithStyle returns a new SelectMenuComponent with the provided TextInputStyle

<a name="TextInputComponent.WithValue"></a>
### func \(TextInputComponent\) [WithValue](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L454>)

```go
func (c TextInputComponent) WithValue(value string) TextInputComponent
```

WithValue returns a new TextInputComponent with the provided value

<a name="TextInputStyle"></a>
## type [TextInputStyle](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L459>)



```go
type TextInputStyle int
```

<a name="TextInputStyleShort"></a>

```go
const (
    TextInputStyleShort TextInputStyle = iota + 1
    TextInputStyleParagraph
)
```

<a name="ThreadChannelPost"></a>
## type [ThreadChannelPost](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L30-L33>)



```go
type ThreadChannelPost struct {
    GuildThread
    Message Message `json:"message"`
}
```

<a name="ThreadChannelPostCreate"></a>
## type [ThreadChannelPostCreate](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L14-L20>)



```go
type ThreadChannelPostCreate struct {
    Name                string              `json:"name"`
    AutoArchiveDuration AutoArchiveDuration `json:"auto_archive_duration,omitempty"`
    RateLimitPerUser    int                 `json:"rate_limit_per_user,omitempty"`
    Message             MessageCreate       `json:"message"`
    AppliedTags         []snowflake.ID      `json:"applied_tags,omitempty"`
}
```

<a name="ThreadChannelPostCreate.ToBody"></a>
### func \(ThreadChannelPostCreate\) [ToBody](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L22>)

```go
func (c ThreadChannelPostCreate) ToBody() (any, error)
```



<a name="ThreadCreate"></a>
## type [ThreadCreate](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L35-L38>)



```go
type ThreadCreate interface {
    json.Marshaler
    Type() ChannelType
}
```

<a name="ThreadCreateFromMessage"></a>
## type [ThreadCreateFromMessage](<https://github.com/disgoorg/disgo/blob/master/discord/thread.go#L8-L12>)



```go
type ThreadCreateFromMessage struct {
    Name                string              `json:"name"`
    AutoArchiveDuration AutoArchiveDuration `json:"auto_archive_duration,omitempty"`
    RateLimitPerUser    int                 `json:"rate_limit_per_user,omitempty"`
}
```

<a name="ThreadMember"></a>
## type [ThreadMember](<https://github.com/disgoorg/disgo/blob/master/discord/thread_member.go#L9-L15>)



```go
type ThreadMember struct {
    ThreadID      snowflake.ID      `json:"id"`
    UserID        snowflake.ID      `json:"user_id"`
    JoinTimestamp time.Time         `json:"join_timestamp"`
    Flags         ThreadMemberFlags `json:"flags"`
    Member        *Member           `json:"member,omitempty"`
}
```

<a name="ThreadMemberFlags"></a>
## type [ThreadMemberFlags](<https://github.com/disgoorg/disgo/blob/master/discord/thread_member.go#L17>)



```go
type ThreadMemberFlags int
```

<a name="ThreadMetadata"></a>
## type [ThreadMetadata](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1315-L1322>)



```go
type ThreadMetadata struct {
    Archived            bool                `json:"archived"`
    AutoArchiveDuration AutoArchiveDuration `json:"auto_archive_duration"`
    ArchiveTimestamp    time.Time           `json:"archive_timestamp"`
    Locked              bool                `json:"locked"`
    Invitable           bool                `json:"invitable"`
    CreateTimestamp     time.Time           `json:"create_timestamp"`
}
```

<a name="Timestamp"></a>
## type [Timestamp](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L98-L101>)

Timestamp represents a timestamp markdown object https://discord.com/developers/docs/reference#message-formatting

```go
type Timestamp struct {
    time.Time
    TimestampStyle TimestampStyle
}
```

<a name="NewTimestamp"></a>
### func [NewTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L88>)

```go
func NewTimestamp(style TimestampStyle, time time.Time) Timestamp
```

NewTimestamp returns a new Timestamp with the given TimestampStyle & time.Time

<a name="ParseTimestamp"></a>
### func [ParseTimestamp](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L78>)

```go
func ParseTimestamp(str string) (*Timestamp, error)
```

ParseTimestamp parses the first Timestamp found in the provided string

<a name="ParseTimestamps"></a>
### func [ParseTimestamps](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L56>)

```go
func ParseTimestamps(str string, n int) ([]Timestamp, error)
```

ParseTimestamps parses all Timestamp\(s\) found in the provided string

<a name="Timestamp.Format"></a>
### func \(Timestamp\) [Format](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L109>)

```go
func (t Timestamp) Format() string
```

Format returns the Timestamp as markdown

<a name="Timestamp.FormatWith"></a>
### func \(Timestamp\) [FormatWith](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L114>)

```go
func (t Timestamp) FormatWith(style TimestampStyle) string
```

FormatWith returns the Timestamp as markdown with the given TimestampStyle

<a name="Timestamp.String"></a>
### func \(Timestamp\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L104>)

```go
func (t Timestamp) String() string
```

String returns the Timestamp as markdown

<a name="TimestampStyle"></a>
## type [TimestampStyle](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L14>)

TimestampStyle is used to determine how to display the Timestamp for the User in the client

```go
type TimestampStyle string
```

<a name="TimestampStyleNone"></a>

```go
const (
    // TimestampStyleNone formats as default
    TimestampStyleNone TimestampStyle = ""

    // TimestampStyleShortTime formats time as 16:20
    TimestampStyleShortTime TimestampStyle = "t"

    // TimestampStyleLongTime formats time as 16:20:30
    TimestampStyleLongTime TimestampStyle = "T"

    // TimestampStyleShortDate formats time as 20/04/2021
    TimestampStyleShortDate TimestampStyle = "d"

    // TimestampStyleLongDate formats time as 20 April 2021
    TimestampStyleLongDate TimestampStyle = "D"

    // TimestampStyleShortDateTime formats time as 20 April 2021 16:20
    TimestampStyleShortDateTime TimestampStyle = "f"

    // TimestampStyleLongDateTime formats time as Tuesday, 20 April 2021 16:20
    TimestampStyleLongDateTime TimestampStyle = "F"

    // TimestampStyleRelative formats time as 2 months ago
    TimestampStyleRelative TimestampStyle = "R"
)
```

<a name="TimestampStyle.Format"></a>
### func \(TimestampStyle\) [Format](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L48>)

```go
func (f TimestampStyle) Format(seconds int64) string
```

Format returns the seconds formatted as markdown string

<a name="TimestampStyle.FormatTime"></a>
### func \(TimestampStyle\) [FormatTime](<https://github.com/disgoorg/disgo/blob/master/discord/timestamp.go#L43>)

```go
func (f TimestampStyle) FormatTime(time time.Time) string
```

FormatTime returns the time.Time formatted as markdown string

<a name="TokenType"></a>
## type [TokenType](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L167>)



```go
type TokenType string
```

<a name="TokenTypeBearer"></a>

```go
const (
    TokenTypeBearer TokenType = "Bearer"
    TokenTypeBot    TokenType = "Bot"
)
```

<a name="TokenType.Apply"></a>
### func \(TokenType\) [Apply](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L178>)

```go
func (t TokenType) Apply(token string) string
```



<a name="TokenType.String"></a>
### func \(TokenType\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/application.go#L174>)

```go
func (t TokenType) String() string
```



<a name="TwitchIntegration"></a>
## type [TwitchIntegration](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L97-L111>)



```go
type TwitchIntegration struct {
    IntegrationID     snowflake.ID              `json:"id"`
    Name              string                    `json:"name"`
    Enabled           bool                      `json:"enabled"`
    Syncing           bool                      `json:"syncing"`
    RoleID            snowflake.ID              `json:"role_id"`
    EnableEmoticons   bool                      `json:"enable_emoticons"`
    ExpireBehavior    IntegrationExpireBehavior `json:"expire_behavior"`
    ExpireGracePeriod int                       `json:"expire_grace_period"`
    User              User                      `json:"user"`
    Account           IntegrationAccount        `json:"account"`
    SyncedAt          string                    `json:"synced_at"`
    SubscriberCount   int                       `json:"subscriber_account"`
    Revoked           bool                      `json:"revoked"`
}
```

<a name="TwitchIntegration.CreatedAt"></a>
### func \(TwitchIntegration\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L132>)

```go
func (i TwitchIntegration) CreatedAt() time.Time
```



<a name="TwitchIntegration.ID"></a>
### func \(TwitchIntegration\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L128>)

```go
func (i TwitchIntegration) ID() snowflake.ID
```



<a name="TwitchIntegration.MarshalJSON"></a>
### func \(TwitchIntegration\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L113>)

```go
func (i TwitchIntegration) MarshalJSON() ([]byte, error)
```



<a name="TwitchIntegration.Type"></a>
### func \(TwitchIntegration\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L124>)

```go
func (TwitchIntegration) Type() IntegrationType
```



<a name="UnavailableGuild"></a>
## type [UnavailableGuild](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L249-L252>)



```go
type UnavailableGuild struct {
    ID          snowflake.ID `json:"id"`
    Unavailable bool         `json:"unavailable"`
}
```

<a name="UnmarshalApplicationCommand"></a>
## type [UnmarshalApplicationCommand](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L38-L40>)



```go
type UnmarshalApplicationCommand struct {
    ApplicationCommand
}
```

<a name="UnmarshalApplicationCommand.UnmarshalJSON"></a>
### func \(\*UnmarshalApplicationCommand\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L42>)

```go
func (u *UnmarshalApplicationCommand) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalApplicationCommandOption"></a>
## type [UnmarshalApplicationCommandOption](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L35-L37>)



```go
type UnmarshalApplicationCommandOption struct {
    ApplicationCommandOption
}
```

<a name="UnmarshalApplicationCommandOption.UnmarshalJSON"></a>
### func \(\*UnmarshalApplicationCommandOption\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_option.go#L39>)

```go
func (u *UnmarshalApplicationCommandOption) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalApplicationCommandPermission"></a>
## type [UnmarshalApplicationCommandPermission](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L55-L57>)



```go
type UnmarshalApplicationCommandPermission struct {
    ApplicationCommandPermission
}
```

<a name="UnmarshalApplicationCommandPermission.UnmarshalJSON"></a>
### func \(\*UnmarshalApplicationCommandPermission\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_permission.go#L59>)

```go
func (p *UnmarshalApplicationCommandPermission) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalAutocompleteOption"></a>
## type [UnmarshalAutocompleteOption](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_autocomplete_option.go#L12-L14>)



```go
type UnmarshalAutocompleteOption struct {
    // contains filtered or unexported fields
}
```

<a name="UnmarshalAutocompleteOption.UnmarshalJSON"></a>
### func \(\*UnmarshalAutocompleteOption\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_autocomplete_option.go#L16>)

```go
func (o *UnmarshalAutocompleteOption) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalChannel"></a>
## type [UnmarshalChannel](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L154-L156>)



```go
type UnmarshalChannel struct {
    Channel
}
```

<a name="UnmarshalChannel.UnmarshalJSON"></a>
### func \(\*UnmarshalChannel\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L158>)

```go
func (u *UnmarshalChannel) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalComponent"></a>
## type [UnmarshalComponent](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L43-L45>)



```go
type UnmarshalComponent struct {
    Component
}
```

<a name="UnmarshalComponent.UnmarshalJSON"></a>
### func \(\*UnmarshalComponent\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/component.go#L47>)

```go
func (u *UnmarshalComponent) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalIntegration"></a>
## type [UnmarshalIntegration](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L46-L48>)



```go
type UnmarshalIntegration struct {
    Integration
}
```

<a name="UnmarshalIntegration.UnmarshalJSON"></a>
### func \(\*UnmarshalIntegration\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L50>)

```go
func (i *UnmarshalIntegration) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalPermissionOverwrite"></a>
## type [UnmarshalPermissionOverwrite](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L50-L52>)



```go
type UnmarshalPermissionOverwrite struct {
    PermissionOverwrite
}
```

<a name="UnmarshalPermissionOverwrite.UnmarshalJSON"></a>
### func \(\*UnmarshalPermissionOverwrite\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/permission_overwrite.go#L54>)

```go
func (o *UnmarshalPermissionOverwrite) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalSlashCommandOption"></a>
## type [UnmarshalSlashCommandOption](<https://github.com/disgoorg/disgo/blob/master/discord/slash_command_option.go#L12-L14>)



```go
type UnmarshalSlashCommandOption struct {
    // contains filtered or unexported fields
}
```

<a name="UnmarshalSlashCommandOption.UnmarshalJSON"></a>
### func \(\*UnmarshalSlashCommandOption\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/slash_command_option.go#L16>)

```go
func (o *UnmarshalSlashCommandOption) UnmarshalJSON(data []byte) error
```



<a name="UnmarshalWebhook"></a>
## type [UnmarshalWebhook](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L33-L35>)



```go
type UnmarshalWebhook struct {
    Webhook
}
```

<a name="UnmarshalWebhook.UnmarshalJSON"></a>
### func \(\*UnmarshalWebhook\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L37>)

```go
func (w *UnmarshalWebhook) UnmarshalJSON(data []byte) error
```



<a name="User"></a>
## type [User](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L67-L79>)

User is a struct for interacting with discord's users

```go
type User struct {
    ID                   snowflake.ID          `json:"id"`
    Username             string                `json:"username"`
    Discriminator        string                `json:"discriminator"`
    GlobalName           *string               `json:"global_name"`
    Avatar               *string               `json:"avatar"`
    Banner               *string               `json:"banner"`
    AccentColor          *int                  `json:"accent_color"`
    Bot                  bool                  `json:"bot"`
    System               bool                  `json:"system"`
    PublicFlags          UserFlags             `json:"public_flags"`
    AvatarDecorationData *AvatarDecorationData `json:"avatar_decoration_data"`
}
```

<a name="User.AvatarDecorationURL"></a>
### func \(User\) [AvatarDecorationURL](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L147>)

```go
func (u User) AvatarDecorationURL(opts ...CDNOpt) *string
```

AvatarDecorationURL returns the avatar decoration URL if set or nil

<a name="User.AvatarURL"></a>
### func \(User\) [AvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L116>)

```go
func (u User) AvatarURL(opts ...CDNOpt) *string
```

AvatarURL returns the avatar URL of the user if set or nil

<a name="User.BannerURL"></a>
### func \(User\) [BannerURL](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L138>)

```go
func (u User) BannerURL(opts ...CDNOpt) *string
```

BannerURL returns the banner URL if set or nil

<a name="User.CreatedAt"></a>
### func \(User\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L155>)

```go
func (u User) CreatedAt() time.Time
```



<a name="User.DefaultAvatarURL"></a>
### func \(User\) [DefaultAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L125>)

```go
func (u User) DefaultAvatarURL(opts ...CDNOpt) string
```

DefaultAvatarURL calculates and returns the default avatar URL

<a name="User.EffectiveAvatarURL"></a>
### func \(User\) [EffectiveAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L105>)

```go
func (u User) EffectiveAvatarURL(opts ...CDNOpt) string
```

EffectiveAvatarURL returns the avatar URL of the user if set, falling back to the default avatar URL

<a name="User.EffectiveName"></a>
### func \(User\) [EffectiveName](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L97>)

```go
func (u User) EffectiveName() string
```

EffectiveName returns the global \(display\) name of the user if set, falling back to the username

<a name="User.Mention"></a>
### func \(User\) [Mention](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L87>)

```go
func (u User) Mention() string
```

Mention returns a mention of the user

<a name="User.String"></a>
### func \(User\) [String](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L82>)

```go
func (u User) String() string
```

String returns a mention of the user

<a name="User.Tag"></a>
### func \(User\) [Tag](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L92>)

```go
func (u User) Tag() string
```

Tag returns a formatted string of "Username\#Discriminator", falling back to the username if discriminator is "0"

<a name="UserCommand"></a>
## type [UserCommand](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L215-L228>)



```go
type UserCommand struct {
    // contains filtered or unexported fields
}
```

<a name="UserCommand.ApplicationID"></a>
### func \(UserCommand\) [ApplicationID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L277>)

```go
func (c UserCommand) ApplicationID() snowflake.ID
```



<a name="UserCommand.Contexts"></a>
### func \(UserCommand\) [Contexts](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L312>)

```go
func (c UserCommand) Contexts() []InteractionContextType
```



<a name="UserCommand.CreatedAt"></a>
### func \(UserCommand\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L320>)

```go
func (c UserCommand) CreatedAt() time.Time
```



<a name="UserCommand.DMPermission"></a>
### func \(UserCommand\) [DMPermission](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L300>)

```go
func (c UserCommand) DMPermission() bool
```



<a name="UserCommand.DefaultMemberPermissions"></a>
### func \(UserCommand\) [DefaultMemberPermissions](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L297>)

```go
func (c UserCommand) DefaultMemberPermissions() Permissions
```



<a name="UserCommand.GuildID"></a>
### func \(UserCommand\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L281>)

```go
func (c UserCommand) GuildID() *snowflake.ID
```



<a name="UserCommand.ID"></a>
### func \(UserCommand\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L269>)

```go
func (c UserCommand) ID() snowflake.ID
```



<a name="UserCommand.IntegrationTypes"></a>
### func \(UserCommand\) [IntegrationTypes](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L308>)

```go
func (c UserCommand) IntegrationTypes() []ApplicationIntegrationType
```



<a name="UserCommand.MarshalJSON"></a>
### func \(UserCommand\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L251>)

```go
func (c UserCommand) MarshalJSON() ([]byte, error)
```



<a name="UserCommand.NSFW"></a>
### func \(UserCommand\) [NSFW](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L304>)

```go
func (c UserCommand) NSFW() bool
```



<a name="UserCommand.Name"></a>
### func \(UserCommand\) [Name](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L285>)

```go
func (c UserCommand) Name() string
```



<a name="UserCommand.NameLocalizations"></a>
### func \(UserCommand\) [NameLocalizations](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L289>)

```go
func (c UserCommand) NameLocalizations() map[Locale]string
```



<a name="UserCommand.NameLocalized"></a>
### func \(UserCommand\) [NameLocalized](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L293>)

```go
func (c UserCommand) NameLocalized() string
```



<a name="UserCommand.Type"></a>
### func \(UserCommand\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L273>)

```go
func (c UserCommand) Type() ApplicationCommandType
```



<a name="UserCommand.UnmarshalJSON"></a>
### func \(\*UserCommand\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L230>)

```go
func (c *UserCommand) UnmarshalJSON(data []byte) error
```



<a name="UserCommand.Version"></a>
### func \(UserCommand\) [Version](<https://github.com/disgoorg/disgo/blob/master/discord/application_command.go#L316>)

```go
func (c UserCommand) Version() snowflake.ID
```



<a name="UserCommandCreate"></a>
## type [UserCommandCreate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L47-L56>)



```go
type UserCommandCreate struct {
    Name                     string                      `json:"name"`
    NameLocalizations        map[Locale]string           `json:"name_localizations,omitempty"`
    DefaultMemberPermissions *json.Nullable[Permissions] `json:"default_member_permissions,omitempty"`
    // Deprecated: Use Contexts instead
    DMPermission     *bool                        `json:"dm_permission,omitempty"`
    IntegrationTypes []ApplicationIntegrationType `json:"integration_types,omitempty"`
    Contexts         []InteractionContextType     `json:"contexts,omitempty"`
    NSFW             *bool                        `json:"nsfw,omitempty"`
}
```

<a name="UserCommandCreate.CommandName"></a>
### func \(UserCommandCreate\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L73>)

```go
func (c UserCommandCreate) CommandName() string
```



<a name="UserCommandCreate.MarshalJSON"></a>
### func \(UserCommandCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L58>)

```go
func (c UserCommandCreate) MarshalJSON() ([]byte, error)
```



<a name="UserCommandCreate.Type"></a>
### func \(UserCommandCreate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_create.go#L69>)

```go
func (UserCommandCreate) Type() ApplicationCommandType
```



<a name="UserCommandInteractionData"></a>
## type [UserCommandInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L528-L534>)



```go
type UserCommandInteractionData struct {
    Resolved UserCommandResolved `json:"resolved"`
    // contains filtered or unexported fields
}
```

<a name="UserCommandInteractionData.CommandID"></a>
### func \(UserCommandInteractionData\) [CommandID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L564>)

```go
func (d UserCommandInteractionData) CommandID() snowflake.ID
```



<a name="UserCommandInteractionData.CommandName"></a>
### func \(UserCommandInteractionData\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L568>)

```go
func (d UserCommandInteractionData) CommandName() string
```



<a name="UserCommandInteractionData.GuildID"></a>
### func \(UserCommandInteractionData\) [GuildID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L572>)

```go
func (d UserCommandInteractionData) GuildID() *snowflake.ID
```



<a name="UserCommandInteractionData.MarshalJSON"></a>
### func \(\*UserCommandInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L549>)

```go
func (d *UserCommandInteractionData) MarshalJSON() ([]byte, error)
```



<a name="UserCommandInteractionData.TargetID"></a>
### func \(UserCommandInteractionData\) [TargetID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L576>)

```go
func (d UserCommandInteractionData) TargetID() snowflake.ID
```



<a name="UserCommandInteractionData.TargetMember"></a>
### func \(UserCommandInteractionData\) [TargetMember](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L584>)

```go
func (d UserCommandInteractionData) TargetMember() ResolvedMember
```



<a name="UserCommandInteractionData.TargetUser"></a>
### func \(UserCommandInteractionData\) [TargetUser](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L580>)

```go
func (d UserCommandInteractionData) TargetUser() User
```



<a name="UserCommandInteractionData.Type"></a>
### func \(UserCommandInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L560>)

```go
func (UserCommandInteractionData) Type() ApplicationCommandType
```



<a name="UserCommandInteractionData.UnmarshalJSON"></a>
### func \(\*UserCommandInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L536>)

```go
func (d *UserCommandInteractionData) UnmarshalJSON(data []byte) error
```



<a name="UserCommandResolved"></a>
## type [UserCommandResolved](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L591-L594>)



```go
type UserCommandResolved struct {
    Users   map[snowflake.ID]User           `json:"users,omitempty"`
    Members map[snowflake.ID]ResolvedMember `json:"members,omitempty"`
}
```

<a name="UserCommandResolved.UnmarshalJSON"></a>
### func \(\*UserCommandResolved\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_application_command.go#L596>)

```go
func (r *UserCommandResolved) UnmarshalJSON(data []byte) error
```



<a name="UserCommandUpdate"></a>
## type [UserCommandUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L47-L56>)



```go
type UserCommandUpdate struct {
    Name                     *string                     `json:"name,omitempty"`
    NameLocalizations        *map[Locale]string          `json:"name_localizations,omitempty"`
    DefaultMemberPermissions *json.Nullable[Permissions] `json:"default_member_permissions,omitempty"`
    // Deprecated: Use Contexts instead
    DMPermission     *bool                         `json:"dm_permission,omitempty"`
    IntegrationTypes *[]ApplicationIntegrationType `json:"integration_types,omitempty"`
    Contexts         *[]InteractionContextType     `json:"contexts,omitempty"`
    NSFW             *bool                         `json:"nsfw,omitempty"`
}
```

<a name="UserCommandUpdate.CommandName"></a>
### func \(UserCommandUpdate\) [CommandName](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L73>)

```go
func (c UserCommandUpdate) CommandName() *string
```



<a name="UserCommandUpdate.MarshalJSON"></a>
### func \(UserCommandUpdate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L58>)

```go
func (c UserCommandUpdate) MarshalJSON() ([]byte, error)
```



<a name="UserCommandUpdate.Type"></a>
### func \(UserCommandUpdate\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/application_command_update.go#L69>)

```go
func (UserCommandUpdate) Type() ApplicationCommandType
```



<a name="UserFlags"></a>
## type [UserFlags](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L14>)

UserFlags defines certain flags/badges a user can have \(https://discord.com/developers/docs/resources/user#user-object-user-flags\)

```go
type UserFlags int
```

<a name="UserFlagDiscordEmployee"></a>All UserFlags

```go
const (
    UserFlagDiscordEmployee UserFlags = 1 << iota
    UserFlagPartneredServerOwner
    UserFlagHypeSquadEvents
    UserFlagBugHunterLevel1

    UserFlagHouseBravery
    UserFlagHouseBrilliance
    UserFlagHouseBalance
    UserFlagEarlySupporter
    UserFlagTeamUser

    UserFlagBugHunterLevel2

    UserFlagVerifiedBot
    UserFlagEarlyVerifiedBotDeveloper
    UserFlagDiscordCertifiedModerator
    UserFlagBotHTTPInteractions

    UserFlagActiveDeveloper
    UserFlagsNone UserFlags = 0
)
```

<a name="UserFlags.Add"></a>
### func \(UserFlags\) [Add](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L45>)

```go
func (f UserFlags) Add(bits ...UserFlags) UserFlags
```

Add allows you to add multiple bits together, producing a new bit

<a name="UserFlags.Has"></a>
### func \(UserFlags\) [Has](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L55>)

```go
func (f UserFlags) Has(bits ...UserFlags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="UserFlags.Missing"></a>
### func \(UserFlags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L60>)

```go
func (f UserFlags) Missing(bits ...UserFlags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="UserFlags.Remove"></a>
### func \(UserFlags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L50>)

```go
func (f UserFlags) Remove(bits ...UserFlags) UserFlags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="UserSelectMenuComponent"></a>
## type [UserSelectMenuComponent](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L194-L201>)



```go
type UserSelectMenuComponent struct {
    CustomID      string                   `json:"custom_id"`
    Placeholder   string                   `json:"placeholder,omitempty"`
    DefaultValues []SelectMenuDefaultValue `json:"default_values,omitempty"`
    MinValues     *int                     `json:"min_values,omitempty"`
    MaxValues     int                      `json:"max_values,omitempty"`
    Disabled      bool                     `json:"disabled,omitempty"`
}
```

<a name="NewUserSelectMenu"></a>
### func [NewUserSelectMenu](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L187>)

```go
func NewUserSelectMenu(customID string, placeholder string) UserSelectMenuComponent
```

NewUserSelectMenu builds a new SelectMenuComponent from the provided values

<a name="UserSelectMenuComponent.AddDefaultValue"></a>
### func \(UserSelectMenuComponent\) [AddDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L279>)

```go
func (c UserSelectMenuComponent) AddDefaultValue(defaultValue snowflake.ID) UserSelectMenuComponent
```

AddDefaultValue returns a new UserSelectMenuComponent with the provided default value added

<a name="UserSelectMenuComponent.AsDisabled"></a>
### func \(UserSelectMenuComponent\) [AsDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L257>)

```go
func (c UserSelectMenuComponent) AsDisabled() UserSelectMenuComponent
```

AsDisabled returns a new UserSelectMenuComponent but disabled

<a name="UserSelectMenuComponent.AsEnabled"></a>
### func \(UserSelectMenuComponent\) [AsEnabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L251>)

```go
func (c UserSelectMenuComponent) AsEnabled() UserSelectMenuComponent
```

AsEnabled returns a new UserSelectMenuComponent but enabled

<a name="UserSelectMenuComponent.ID"></a>
### func \(UserSelectMenuComponent\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L218>)

```go
func (c UserSelectMenuComponent) ID() string
```



<a name="UserSelectMenuComponent.MarshalJSON"></a>
### func \(UserSelectMenuComponent\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L203>)

```go
func (c UserSelectMenuComponent) MarshalJSON() ([]byte, error)
```



<a name="UserSelectMenuComponent.RemoveDefaultValue"></a>
### func \(UserSelectMenuComponent\) [RemoveDefaultValue](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L285>)

```go
func (c UserSelectMenuComponent) RemoveDefaultValue(index int) UserSelectMenuComponent
```

RemoveDefaultValue returns a new UserSelectMenuComponent with the provided default value at the index removed

<a name="UserSelectMenuComponent.SetDefaultValues"></a>
### func \(UserSelectMenuComponent\) [SetDefaultValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L269>)

```go
func (c UserSelectMenuComponent) SetDefaultValues(defaultValues ...snowflake.ID) UserSelectMenuComponent
```

SetDefaultValues returns a new UserSelectMenuComponent with the provided default values

<a name="UserSelectMenuComponent.Type"></a>
### func \(UserSelectMenuComponent\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L214>)

```go
func (UserSelectMenuComponent) Type() ComponentType
```



<a name="UserSelectMenuComponent.WithCustomID"></a>
### func \(UserSelectMenuComponent\) [WithCustomID](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L227>)

```go
func (c UserSelectMenuComponent) WithCustomID(customID string) UserSelectMenuComponent
```

WithCustomID returns a new UserSelectMenuComponent with the provided customID

<a name="UserSelectMenuComponent.WithDisabled"></a>
### func \(UserSelectMenuComponent\) [WithDisabled](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L263>)

```go
func (c UserSelectMenuComponent) WithDisabled(disabled bool) UserSelectMenuComponent
```

WithDisabled returns a new UserSelectMenuComponent with the provided disabled

<a name="UserSelectMenuComponent.WithMaxValues"></a>
### func \(UserSelectMenuComponent\) [WithMaxValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L245>)

```go
func (c UserSelectMenuComponent) WithMaxValues(maxValue int) UserSelectMenuComponent
```

WithMaxValues returns a new UserSelectMenuComponent with the provided maxValue

<a name="UserSelectMenuComponent.WithMinValues"></a>
### func \(UserSelectMenuComponent\) [WithMinValues](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L239>)

```go
func (c UserSelectMenuComponent) WithMinValues(minValue int) UserSelectMenuComponent
```

WithMinValues returns a new UserSelectMenuComponent with the provided minValue

<a name="UserSelectMenuComponent.WithPlaceholder"></a>
### func \(UserSelectMenuComponent\) [WithPlaceholder](<https://github.com/disgoorg/disgo/blob/master/discord/select_menu.go#L233>)

```go
func (c UserSelectMenuComponent) WithPlaceholder(placeholder string) UserSelectMenuComponent
```

WithPlaceholder returns a new UserSelectMenuComponent with the provided placeholder

<a name="UserSelectMenuInteractionData"></a>
## type [UserSelectMenuInteractionData](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L264-L268>)



```go
type UserSelectMenuInteractionData struct {
    Resolved UserSelectMenuResolved `json:"resolved"`
    Values   []snowflake.ID         `json:"values"`
    // contains filtered or unexported fields
}
```

<a name="UserSelectMenuInteractionData.CustomID"></a>
### func \(UserSelectMenuInteractionData\) [CustomID](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L325>)

```go
func (d UserSelectMenuInteractionData) CustomID() string
```



<a name="UserSelectMenuInteractionData.MarshalJSON"></a>
### func \(UserSelectMenuInteractionData\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L289>)

```go
func (d UserSelectMenuInteractionData) MarshalJSON() ([]byte, error)
```



<a name="UserSelectMenuInteractionData.Members"></a>
### func \(UserSelectMenuInteractionData\) [Members](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L311>)

```go
func (d UserSelectMenuInteractionData) Members() []ResolvedMember
```



<a name="UserSelectMenuInteractionData.Type"></a>
### func \(UserSelectMenuInteractionData\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L321>)

```go
func (UserSelectMenuInteractionData) Type() ComponentType
```



<a name="UserSelectMenuInteractionData.UnmarshalJSON"></a>
### func \(\*UserSelectMenuInteractionData\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L275>)

```go
func (d *UserSelectMenuInteractionData) UnmarshalJSON(data []byte) error
```



<a name="UserSelectMenuInteractionData.Users"></a>
### func \(UserSelectMenuInteractionData\) [Users](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L301>)

```go
func (d UserSelectMenuInteractionData) Users() []User
```



<a name="UserSelectMenuResolved"></a>
## type [UserSelectMenuResolved](<https://github.com/disgoorg/disgo/blob/master/discord/interaction_component.go#L270-L273>)



```go
type UserSelectMenuResolved struct {
    Users   map[snowflake.ID]User           `json:"users"`
    Members map[snowflake.ID]ResolvedMember `json:"members"`
}
```

<a name="UserUpdate"></a>
## type [UserUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/user.go#L185-L188>)

UserUpdate is the payload used to update the OAuth2User

```go
type UserUpdate struct {
    Username string               `json:"username,omitempty"`
    Avatar   *json.Nullable[Icon] `json:"avatar,omitempty"`
}
```

<a name="UserVoiceStateUpdate"></a>
## type [UserVoiceStateUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/voice_state.go#L32-L35>)



```go
type UserVoiceStateUpdate struct {
    ChannelID *snowflake.ID `json:"channel_id,omitempty"`
    Suppress  *bool         `json:"suppress,omitempty"`
}
```

<a name="VerificationLevel"></a>
## type [VerificationLevel](<https://github.com/disgoorg/disgo/blob/master/discord/guild.go#L57>)

The VerificationLevel of a Guild that members must be to send messages

```go
type VerificationLevel int
```

<a name="VerificationLevelNone"></a>Constants for VerificationLevel

```go
const (
    VerificationLevelNone VerificationLevel = iota
    VerificationLevelLow
    VerificationLevelMedium
    VerificationLevelHigh
    VerificationLevelVeryHigh
)
```

<a name="VideoQualityMode"></a>
## type [VideoQualityMode](<https://github.com/disgoorg/disgo/blob/master/discord/channel.go#L1308>)

VideoQualityMode https://com/developers/docs/resources/channel#channel-object-video-quality-modes

```go
type VideoQualityMode int
```

<a name="VideoQualityModeAuto"></a>

```go
const (
    VideoQualityModeAuto VideoQualityMode = iota + 1
    VideoQualityModeFull
)
```

<a name="VisibilityType"></a>
## type [VisibilityType](<https://github.com/disgoorg/disgo/blob/master/discord/connection.go#L40>)



```go
type VisibilityType int
```

<a name="VisibilityTypeNone"></a>

```go
const (
    VisibilityTypeNone VisibilityType = iota
    VisibilityTypeEveryone
)
```

<a name="VoiceRegion"></a>
## type [VoiceRegion](<https://github.com/disgoorg/disgo/blob/master/discord/voice_region.go#L6-L13>)

VoiceRegion \(https://discord.com/developers/docs/resources/voice#voice-region-object\)

```go
type VoiceRegion struct {
    ID         snowflake.ID `json:"id"`
    Name       string       `json:"name"`
    Vip        bool         `json:"vip"`
    Optimal    bool         `json:"optimal"`
    Deprecated bool         `json:"deprecated"`
    Custom     bool         `json:"custom"`
}
```

<a name="VoiceState"></a>
## type [VoiceState](<https://github.com/disgoorg/disgo/blob/master/discord/voice_state.go#L11-L24>)

VoiceState from Discord

```go
type VoiceState struct {
    GuildID                 snowflake.ID  `json:"guild_id,omitempty"`
    ChannelID               *snowflake.ID `json:"channel_id"`
    UserID                  snowflake.ID  `json:"user_id"`
    SessionID               string        `json:"session_id"`
    GuildDeaf               bool          `json:"deaf"`
    GuildMute               bool          `json:"mute"`
    SelfDeaf                bool          `json:"self_deaf"`
    SelfMute                bool          `json:"self_mute"`
    SelfStream              bool          `json:"self_stream"`
    SelfVideo               bool          `json:"self_video"`
    Suppress                bool          `json:"suppress"`
    RequestToSpeakTimestamp *time.Time    `json:"request_to_speak_timestamp"`
}
```

<a name="Webhook"></a>
## type [Webhook](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L22-L31>)

Webhook \(https://discord.com/developers/docs/resources/webhook\) is a way to post messages to Discord using the Discord API which do not require bot authentication or use.

```go
type Webhook interface {
    json.Marshaler
    Type() WebhookType
    ID() snowflake.ID
    Name() string
    Avatar() *string
    AvatarURL(opts ...CDNOpt) *string
    CreatedAt() time.Time
    // contains filtered or unexported methods
}
```

<a name="WebhookCreate"></a>
## type [WebhookCreate](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L345-L348>)

WebhookCreate is used to create a Webhook

```go
type WebhookCreate struct {
    Name   string `json:"name"`
    Avatar *Icon  `json:"avatar,omitempty"`
}
```

<a name="WebhookMessageCreate"></a>
## type [WebhookMessageCreate](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create.go#L5-L19>)



```go
type WebhookMessageCreate struct {
    Content         string               `json:"content,omitempty"`
    Username        string               `json:"username,omitempty"`
    AvatarURL       string               `json:"avatar_url,omitempty"`
    TTS             bool                 `json:"tts,omitempty"`
    Embeds          []Embed              `json:"embeds,omitempty"`
    Components      []ContainerComponent `json:"components,omitempty"`
    Attachments     []AttachmentCreate   `json:"attachments,omitempty"`
    Files           []*File              `json:"-"`
    AllowedMentions *AllowedMentions     `json:"allowed_mentions,omitempty"`
    Flags           MessageFlags         `json:"flags,omitempty"`
    ThreadName      string               `json:"thread_name,omitempty"`
    AppliedTags     []snowflake.ID       `json:"applied_tags,omitempty"`
    Poll            *PollCreate          `json:"poll,omitempty"`
}
```

<a name="WebhookMessageCreate.ToBody"></a>
### func \(WebhookMessageCreate\) [ToBody](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create.go#L22>)

```go
func (m WebhookMessageCreate) ToBody() (any, error)
```

ToBody returns the MessageCreate ready for body

<a name="WebhookMessageCreateBuilder"></a>
## type [WebhookMessageCreateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L9-L11>)

WebhookMessageCreateBuilder helper to build Message\(s\) easier

```go
type WebhookMessageCreateBuilder struct {
    WebhookMessageCreate
}
```

<a name="NewWebhookMessageCreateBuilder"></a>
### func [NewWebhookMessageCreateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L14>)

```go
func NewWebhookMessageCreateBuilder() *WebhookMessageCreateBuilder
```

NewWebhookMessageCreateBuilder creates a new WebhookMessageCreateBuilder to be built later

<a name="WebhookMessageCreateBuilder.AddActionRow"></a>
### func \(\*WebhookMessageCreateBuilder\) [AddActionRow](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L98>)

```go
func (b *WebhookMessageCreateBuilder) AddActionRow(components ...InteractiveComponent) *WebhookMessageCreateBuilder
```

AddActionRow adds a new discord.ActionRowComponent with the provided discord.InteractiveComponent\(s\) to the Message

<a name="WebhookMessageCreateBuilder.AddContainerComponents"></a>
### func \(\*WebhookMessageCreateBuilder\) [AddContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L104>)

```go
func (b *WebhookMessageCreateBuilder) AddContainerComponents(containers ...ContainerComponent) *WebhookMessageCreateBuilder
```

AddContainerComponents adds the discord.ContainerComponent\(s\) to the Message

<a name="WebhookMessageCreateBuilder.AddEmbeds"></a>
### func \(\*WebhookMessageCreateBuilder\) [AddEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L64>)

```go
func (b *WebhookMessageCreateBuilder) AddEmbeds(embeds ...Embed) *WebhookMessageCreateBuilder
```

AddEmbeds adds multiple embeds to the Message

<a name="WebhookMessageCreateBuilder.AddFile"></a>
### func \(\*WebhookMessageCreateBuilder\) [AddFile](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L144>)

```go
func (b *WebhookMessageCreateBuilder) AddFile(name string, description string, reader io.Reader, flags ...FileFlags) *WebhookMessageCreateBuilder
```

AddFile adds a discord.File to the discord.MessageCreate

<a name="WebhookMessageCreateBuilder.AddFiles"></a>
### func \(\*WebhookMessageCreateBuilder\) [AddFiles](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L138>)

```go
func (b *WebhookMessageCreateBuilder) AddFiles(files ...*File) *WebhookMessageCreateBuilder
```

AddFiles adds the discord.File\(s\) to the discord.MessageCreate

<a name="WebhookMessageCreateBuilder.AddFlags"></a>
### func \(\*WebhookMessageCreateBuilder\) [AddFlags](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L181>)

```go
func (b *WebhookMessageCreateBuilder) AddFlags(flags ...MessageFlags) *WebhookMessageCreateBuilder
```

AddFlags adds the MessageFlags of the Message

<a name="WebhookMessageCreateBuilder.Build"></a>
### func \(\*WebhookMessageCreateBuilder\) [Build](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L226>)

```go
func (b *WebhookMessageCreateBuilder) Build() WebhookMessageCreate
```

Build builds the WebhookMessageCreateBuilder to a MessageCreate struct

<a name="WebhookMessageCreateBuilder.ClearAllowedMentions"></a>
### func \(\*WebhookMessageCreateBuilder\) [ClearAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L170>)

```go
func (b *WebhookMessageCreateBuilder) ClearAllowedMentions() *WebhookMessageCreateBuilder
```

ClearAllowedMentions clears the allowed mentions of the Message

<a name="WebhookMessageCreateBuilder.ClearContainerComponents"></a>
### func \(\*WebhookMessageCreateBuilder\) [ClearContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L118>)

```go
func (b *WebhookMessageCreateBuilder) ClearContainerComponents() *WebhookMessageCreateBuilder
```

ClearContainerComponents removes all the discord.ContainerComponent\(s\) of the Message

<a name="WebhookMessageCreateBuilder.ClearEmbeds"></a>
### func \(\*WebhookMessageCreateBuilder\) [ClearEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L70>)

```go
func (b *WebhookMessageCreateBuilder) ClearEmbeds() *WebhookMessageCreateBuilder
```

ClearEmbeds removes all the embeds from the Message

<a name="WebhookMessageCreateBuilder.ClearFiles"></a>
### func \(\*WebhookMessageCreateBuilder\) [ClearFiles](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L150>)

```go
func (b *WebhookMessageCreateBuilder) ClearFiles() *WebhookMessageCreateBuilder
```

ClearFiles removes all discord.File\(s\) of this discord.MessageCreate

<a name="WebhookMessageCreateBuilder.ClearFlags"></a>
### func \(\*WebhookMessageCreateBuilder\) [ClearFlags](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L193>)

```go
func (b *WebhookMessageCreateBuilder) ClearFlags() *WebhookMessageCreateBuilder
```

ClearFlags clears the discord.MessageFlags of the Message

<a name="WebhookMessageCreateBuilder.ClearPoll"></a>
### func \(\*WebhookMessageCreateBuilder\) [ClearPoll](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L220>)

```go
func (b *WebhookMessageCreateBuilder) ClearPoll() *WebhookMessageCreateBuilder
```

ClearPoll clears the Poll of the webhook Message

<a name="WebhookMessageCreateBuilder.RemoveContainerComponent"></a>
### func \(\*WebhookMessageCreateBuilder\) [RemoveContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L110>)

```go
func (b *WebhookMessageCreateBuilder) RemoveContainerComponent(i int) *WebhookMessageCreateBuilder
```

RemoveContainerComponent removes a discord.ActionRowComponent from the Message

<a name="WebhookMessageCreateBuilder.RemoveEmbed"></a>
### func \(\*WebhookMessageCreateBuilder\) [RemoveEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L76>)

```go
func (b *WebhookMessageCreateBuilder) RemoveEmbed(i int) *WebhookMessageCreateBuilder
```

RemoveEmbed removes an embed from the Message

<a name="WebhookMessageCreateBuilder.RemoveFile"></a>
### func \(\*WebhookMessageCreateBuilder\) [RemoveFile](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L156>)

```go
func (b *WebhookMessageCreateBuilder) RemoveFile(i int) *WebhookMessageCreateBuilder
```

RemoveFile removes the discord.File at this index

<a name="WebhookMessageCreateBuilder.RemoveFlags"></a>
### func \(\*WebhookMessageCreateBuilder\) [RemoveFlags](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L187>)

```go
func (b *WebhookMessageCreateBuilder) RemoveFlags(flags ...MessageFlags) *WebhookMessageCreateBuilder
```

RemoveFlags removes the MessageFlags of the Message

<a name="WebhookMessageCreateBuilder.SetAllowedMentions"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L164>)

```go
func (b *WebhookMessageCreateBuilder) SetAllowedMentions(allowedMentions *AllowedMentions) *WebhookMessageCreateBuilder
```

SetAllowedMentions sets the AllowedMentions of the Message

<a name="WebhookMessageCreateBuilder.SetAvatarURL"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetAvatarURL](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L38>)

```go
func (b *WebhookMessageCreateBuilder) SetAvatarURL(url string) *WebhookMessageCreateBuilder
```



<a name="WebhookMessageCreateBuilder.SetContainerComponent"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L90>)

```go
func (b *WebhookMessageCreateBuilder) SetContainerComponent(i int, container ContainerComponent) *WebhookMessageCreateBuilder
```

SetContainerComponent sets the provided discord.InteractiveComponent at the index of discord.InteractiveComponent\(s\)

<a name="WebhookMessageCreateBuilder.SetContainerComponents"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L84>)

```go
func (b *WebhookMessageCreateBuilder) SetContainerComponents(containerComponents ...ContainerComponent) *WebhookMessageCreateBuilder
```

SetContainerComponents sets the discord.ContainerComponent\(s\) of the Message

<a name="WebhookMessageCreateBuilder.SetContent"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetContent](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L23>)

```go
func (b *WebhookMessageCreateBuilder) SetContent(content string) *WebhookMessageCreateBuilder
```

SetContent sets content of the Message

<a name="WebhookMessageCreateBuilder.SetContentf"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetContentf](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L29>)

```go
func (b *WebhookMessageCreateBuilder) SetContentf(content string, a ...any) *WebhookMessageCreateBuilder
```

SetContentf sets content of the Message

<a name="WebhookMessageCreateBuilder.SetEmbed"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L56>)

```go
func (b *WebhookMessageCreateBuilder) SetEmbed(i int, embed Embed) *WebhookMessageCreateBuilder
```

SetEmbed sets the provided Embed at the index of the Message

<a name="WebhookMessageCreateBuilder.SetEmbeds"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L50>)

```go
func (b *WebhookMessageCreateBuilder) SetEmbeds(embeds ...Embed) *WebhookMessageCreateBuilder
```

SetEmbeds sets the Embed\(s\) of the Message

<a name="WebhookMessageCreateBuilder.SetFile"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetFile](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L130>)

```go
func (b *WebhookMessageCreateBuilder) SetFile(i int, file *File) *WebhookMessageCreateBuilder
```

SetFile sets the discord.File at the index for this discord.MessageCreate

<a name="WebhookMessageCreateBuilder.SetFiles"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetFiles](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L124>)

```go
func (b *WebhookMessageCreateBuilder) SetFiles(files ...*File) *WebhookMessageCreateBuilder
```

SetFiles sets the File\(s\) for this MessageCreate

<a name="WebhookMessageCreateBuilder.SetFlags"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetFlags](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L175>)

```go
func (b *WebhookMessageCreateBuilder) SetFlags(flags MessageFlags) *WebhookMessageCreateBuilder
```

SetFlags sets the message flags of the Message

<a name="WebhookMessageCreateBuilder.SetPoll"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetPoll](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L214>)

```go
func (b *WebhookMessageCreateBuilder) SetPoll(poll PollCreate) *WebhookMessageCreateBuilder
```

SetPoll sets the Poll of the webhook Message

<a name="WebhookMessageCreateBuilder.SetSuppressEmbeds"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetSuppressEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L198>)

```go
func (b *WebhookMessageCreateBuilder) SetSuppressEmbeds(suppressEmbeds bool) *WebhookMessageCreateBuilder
```

SetSuppressEmbeds adds/removes discord.MessageFlagSuppressEmbeds to the Message flags

<a name="WebhookMessageCreateBuilder.SetTTS"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetTTS](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L44>)

```go
func (b *WebhookMessageCreateBuilder) SetTTS(tts bool) *WebhookMessageCreateBuilder
```

SetTTS sets the text to speech of the Message

<a name="WebhookMessageCreateBuilder.SetThreadName"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetThreadName](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L208>)

```go
func (b *WebhookMessageCreateBuilder) SetThreadName(threadName string) *WebhookMessageCreateBuilder
```

SetThreadName sets the thread name the new webhook message should create.

<a name="WebhookMessageCreateBuilder.SetUsername"></a>
### func \(\*WebhookMessageCreateBuilder\) [SetUsername](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_create_builder.go#L33>)

```go
func (b *WebhookMessageCreateBuilder) SetUsername(username string) *WebhookMessageCreateBuilder
```



<a name="WebhookMessageUpdate"></a>
## type [WebhookMessageUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update.go#L4-L11>)

WebhookMessageUpdate is used to edit a Message

```go
type WebhookMessageUpdate struct {
    Content         *string               `json:"content,omitempty"`
    Embeds          *[]Embed              `json:"embeds,omitempty"`
    Components      *[]ContainerComponent `json:"components,omitempty"`
    Attachments     *[]AttachmentUpdate   `json:"attachments,omitempty"`
    Files           []*File               `json:"-"`
    AllowedMentions *AllowedMentions      `json:"allowed_mentions,omitempty"`
}
```

<a name="WebhookMessageUpdate.ToBody"></a>
### func \(WebhookMessageUpdate\) [ToBody](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update.go#L14>)

```go
func (m WebhookMessageUpdate) ToBody() (any, error)
```

ToBody returns the WebhookMessageUpdate ready for body

<a name="WebhookMessageUpdateBuilder"></a>
## type [WebhookMessageUpdateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L11-L13>)

WebhookMessageUpdateBuilder helper to build MessageUpdate easier

```go
type WebhookMessageUpdateBuilder struct {
    WebhookMessageUpdate
}
```

<a name="NewWebhookMessageUpdateBuilder"></a>
### func [NewWebhookMessageUpdateBuilder](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L16>)

```go
func NewWebhookMessageUpdateBuilder() *WebhookMessageUpdateBuilder
```

NewWebhookMessageUpdateBuilder creates a new WebhookMessageUpdateBuilder to be built later

<a name="WebhookMessageUpdateBuilder.AddActionRow"></a>
### func \(\*WebhookMessageUpdateBuilder\) [AddActionRow](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L107>)

```go
func (b *WebhookMessageUpdateBuilder) AddActionRow(components ...InteractiveComponent) *WebhookMessageUpdateBuilder
```

AddActionRow adds a new discord.ActionRowComponent with the provided discord.InteractiveComponent\(s\) to the Message

<a name="WebhookMessageUpdateBuilder.AddContainerComponents"></a>
### func \(\*WebhookMessageUpdateBuilder\) [AddContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L116>)

```go
func (b *WebhookMessageUpdateBuilder) AddContainerComponents(containers ...ContainerComponent) *WebhookMessageUpdateBuilder
```

AddContainerComponents adds the discord.ContainerComponent\(s\) to the Message

<a name="WebhookMessageUpdateBuilder.AddEmbeds"></a>
### func \(\*WebhookMessageUpdateBuilder\) [AddEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L61>)

```go
func (b *WebhookMessageUpdateBuilder) AddEmbeds(embeds ...Embed) *WebhookMessageUpdateBuilder
```

AddEmbeds adds multiple embeds to the Message

<a name="WebhookMessageUpdateBuilder.AddFile"></a>
### func \(\*WebhookMessageUpdateBuilder\) [AddFile](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L162>)

```go
func (b *WebhookMessageUpdateBuilder) AddFile(name string, description string, reader io.Reader, flags ...FileFlags) *WebhookMessageUpdateBuilder
```

AddFile adds a new discord.File to the discord.MessageUpdate

<a name="WebhookMessageUpdateBuilder.AddFiles"></a>
### func \(\*WebhookMessageUpdateBuilder\) [AddFiles](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L156>)

```go
func (b *WebhookMessageUpdateBuilder) AddFiles(files ...*File) *WebhookMessageUpdateBuilder
```

AddFiles adds the new discord.File\(s\) to the discord.MessageUpdate

<a name="WebhookMessageUpdateBuilder.Build"></a>
### func \(\*WebhookMessageUpdateBuilder\) [Build](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L215>)

```go
func (b *WebhookMessageUpdateBuilder) Build() WebhookMessageUpdate
```

Build builds the WebhookMessageUpdateBuilder to a MessageUpdate struct

<a name="WebhookMessageUpdateBuilder.ClearAllowedMentions"></a>
### func \(\*WebhookMessageUpdateBuilder\) [ClearAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L210>)

```go
func (b *WebhookMessageUpdateBuilder) ClearAllowedMentions() *WebhookMessageUpdateBuilder
```

ClearAllowedMentions clears the allowed mentions of the Message

<a name="WebhookMessageUpdateBuilder.ClearContainerComponents"></a>
### func \(\*WebhookMessageUpdateBuilder\) [ClearContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L136>)

```go
func (b *WebhookMessageUpdateBuilder) ClearContainerComponents() *WebhookMessageUpdateBuilder
```

ClearContainerComponents removes all the discord.ContainerComponent\(s\) of the Message

<a name="WebhookMessageUpdateBuilder.ClearContent"></a>
### func \(\*WebhookMessageUpdateBuilder\) [ClearContent](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L36>)

```go
func (b *WebhookMessageUpdateBuilder) ClearContent() *WebhookMessageUpdateBuilder
```

ClearContent removes content of the Message

<a name="WebhookMessageUpdateBuilder.ClearEmbeds"></a>
### func \(\*WebhookMessageUpdateBuilder\) [ClearEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L70>)

```go
func (b *WebhookMessageUpdateBuilder) ClearEmbeds() *WebhookMessageUpdateBuilder
```

ClearEmbeds removes all the embeds from the Message

<a name="WebhookMessageUpdateBuilder.ClearFiles"></a>
### func \(\*WebhookMessageUpdateBuilder\) [ClearFiles](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L168>)

```go
func (b *WebhookMessageUpdateBuilder) ClearFiles() *WebhookMessageUpdateBuilder
```

ClearFiles removes all new discord.File\(s\) of this discord.MessageUpdate

<a name="WebhookMessageUpdateBuilder.RemoveContainerComponent"></a>
### func \(\*WebhookMessageUpdateBuilder\) [RemoveContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L125>)

```go
func (b *WebhookMessageUpdateBuilder) RemoveContainerComponent(i int) *WebhookMessageUpdateBuilder
```

RemoveContainerComponent removes a discord.ContainerComponent from the Message

<a name="WebhookMessageUpdateBuilder.RemoveEmbed"></a>
### func \(\*WebhookMessageUpdateBuilder\) [RemoveEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L76>)

```go
func (b *WebhookMessageUpdateBuilder) RemoveEmbed(i int) *WebhookMessageUpdateBuilder
```

RemoveEmbed removes an embed from the Message

<a name="WebhookMessageUpdateBuilder.RemoveFile"></a>
### func \(\*WebhookMessageUpdateBuilder\) [RemoveFile](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L174>)

```go
func (b *WebhookMessageUpdateBuilder) RemoveFile(i int) *WebhookMessageUpdateBuilder
```

RemoveFile removes the new discord.File at this index

<a name="WebhookMessageUpdateBuilder.RetainAttachments"></a>
### func \(\*WebhookMessageUpdateBuilder\) [RetainAttachments](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L182>)

```go
func (b *WebhookMessageUpdateBuilder) RetainAttachments(attachments ...Attachment) *WebhookMessageUpdateBuilder
```

RetainAttachments removes all Attachment\(s\) from this Message except the ones provided

<a name="WebhookMessageUpdateBuilder.RetainAttachmentsByID"></a>
### func \(\*WebhookMessageUpdateBuilder\) [RetainAttachmentsByID](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L193>)

```go
func (b *WebhookMessageUpdateBuilder) RetainAttachmentsByID(attachmentIDs ...snowflake.ID) *WebhookMessageUpdateBuilder
```

RetainAttachmentsByID removes all Attachment\(s\) from this Message except the ones provided

<a name="WebhookMessageUpdateBuilder.SetAllowedMentions"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetAllowedMentions](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L204>)

```go
func (b *WebhookMessageUpdateBuilder) SetAllowedMentions(allowedMentions *AllowedMentions) *WebhookMessageUpdateBuilder
```

SetAllowedMentions sets the AllowedMentions of the Message

<a name="WebhookMessageUpdateBuilder.SetContainerComponent"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetContainerComponent](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L96>)

```go
func (b *WebhookMessageUpdateBuilder) SetContainerComponent(i int, container ContainerComponent) *WebhookMessageUpdateBuilder
```

SetContainerComponent sets the provided discord.InteractiveComponent at the index of discord.InteractiveComponent\(s\)

<a name="WebhookMessageUpdateBuilder.SetContainerComponents"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetContainerComponents](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L87>)

```go
func (b *WebhookMessageUpdateBuilder) SetContainerComponents(containerComponents ...ContainerComponent) *WebhookMessageUpdateBuilder
```

SetContainerComponents sets the discord.ContainerComponent\(s\) of the Message

<a name="WebhookMessageUpdateBuilder.SetContent"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetContent](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L25>)

```go
func (b *WebhookMessageUpdateBuilder) SetContent(content string) *WebhookMessageUpdateBuilder
```

SetContent sets content of the Message

<a name="WebhookMessageUpdateBuilder.SetContentf"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetContentf](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L31>)

```go
func (b *WebhookMessageUpdateBuilder) SetContentf(content string, a ...any) *WebhookMessageUpdateBuilder
```

SetContentf sets content of the Message

<a name="WebhookMessageUpdateBuilder.SetEmbed"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetEmbed](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L50>)

```go
func (b *WebhookMessageUpdateBuilder) SetEmbed(i int, embed Embed) *WebhookMessageUpdateBuilder
```

SetEmbed sets the provided Embed at the index of the Message

<a name="WebhookMessageUpdateBuilder.SetEmbeds"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetEmbeds](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L41>)

```go
func (b *WebhookMessageUpdateBuilder) SetEmbeds(embeds ...Embed) *WebhookMessageUpdateBuilder
```

SetEmbeds sets the Embed\(s\) of the Message

<a name="WebhookMessageUpdateBuilder.SetFile"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetFile](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L148>)

```go
func (b *WebhookMessageUpdateBuilder) SetFile(i int, file *File) *WebhookMessageUpdateBuilder
```

SetFile sets the new discord.File at the index for this discord.MessageUpdate

<a name="WebhookMessageUpdateBuilder.SetFiles"></a>
### func \(\*WebhookMessageUpdateBuilder\) [SetFiles](<https://github.com/disgoorg/disgo/blob/master/discord/webhook_message_update_builder.go#L142>)

```go
func (b *WebhookMessageUpdateBuilder) SetFiles(files ...*File) *WebhookMessageUpdateBuilder
```

SetFiles sets the new discord.File\(s\) for this discord.MessageUpdate

<a name="WebhookSourceChannel"></a>
## type [WebhookSourceChannel](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L339-L342>)



```go
type WebhookSourceChannel struct {
    ID   snowflake.ID `json:"id"`
    Name string       `json:"name"`
}
```

<a name="WebhookSourceGuild"></a>
## type [WebhookSourceGuild](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L333-L337>)



```go
type WebhookSourceGuild struct {
    ID   snowflake.ID         `json:"id"`
    Name string               `json:"name"`
    Icon *json.Nullable[Icon] `json:"icon"`
}
```

<a name="WebhookType"></a>
## type [WebhookType](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L12>)

WebhookType \(https: //discord.com/developers/docs/resources/webhook\#webhook\-object\-webhook\-types\)

```go
type WebhookType int
```

<a name="WebhookTypeIncoming"></a>All WebhookType\(s\)

```go
const (
    WebhookTypeIncoming WebhookType = iota + 1
    WebhookTypeChannelFollower
    WebhookTypeApplication
)
```

<a name="WebhookUpdate"></a>
## type [WebhookUpdate](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L351-L355>)

WebhookUpdate is used to update a Webhook

```go
type WebhookUpdate struct {
    Name      *string              `json:"name,omitempty"`
    Avatar    *json.Nullable[Icon] `json:"avatar,omitempty"`
    ChannelID *snowflake.ID        `json:"channel_id,omitempty"`
}
```

<a name="WebhookUpdateWithToken"></a>
## type [WebhookUpdateWithToken](<https://github.com/disgoorg/disgo/blob/master/discord/webhook.go#L358-L361>)

WebhookUpdateWithToken is used to update a Webhook with the token

```go
type WebhookUpdateWithToken struct {
    Name   *string              `json:"name,omitempty"`
    Avatar *json.Nullable[Icon] `json:"avatar,omitempty"`
}
```

<a name="YouTubeIntegration"></a>
## type [YouTubeIntegration](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L136-L149>)



```go
type YouTubeIntegration struct {
    IntegrationID     snowflake.ID              `json:"id"`
    Name              string                    `json:"name"`
    Enabled           bool                      `json:"enabled"`
    Syncing           bool                      `json:"syncing"`
    RoleID            snowflake.ID              `json:"role_id"`
    ExpireBehavior    IntegrationExpireBehavior `json:"expire_behavior"`
    ExpireGracePeriod int                       `json:"expire_grace_period"`
    User              User                      `json:"user"`
    Account           IntegrationAccount        `json:"account"`
    SyncedAt          string                    `json:"synced_at"`
    SubscriberCount   int                       `json:"subscriber_account"`
    Revoked           bool                      `json:"revoked"`
}
```

<a name="YouTubeIntegration.CreatedAt"></a>
### func \(YouTubeIntegration\) [CreatedAt](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L170>)

```go
func (i YouTubeIntegration) CreatedAt() time.Time
```



<a name="YouTubeIntegration.ID"></a>
### func \(YouTubeIntegration\) [ID](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L166>)

```go
func (i YouTubeIntegration) ID() snowflake.ID
```



<a name="YouTubeIntegration.MarshalJSON"></a>
### func \(YouTubeIntegration\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L151>)

```go
func (i YouTubeIntegration) MarshalJSON() ([]byte, error)
```



<a name="YouTubeIntegration.Type"></a>
### func \(YouTubeIntegration\) [Type](<https://github.com/disgoorg/disgo/blob/master/discord/integration.go#L162>)

```go
func (YouTubeIntegration) Type() IntegrationType
```





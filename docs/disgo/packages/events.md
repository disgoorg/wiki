# Events

```go
import "github.com/disgoorg/disgo/events"
```

Package events provide high level events around the Discord Events.

<a name="ApplicationCommandInteractionCreate"></a>
## type [ApplicationCommandInteractionCreate](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L29-L33>)

ApplicationCommandInteractionCreate is the base struct for all application command interaction create events.

```go
type ApplicationCommandInteractionCreate struct {
    *GenericEvent
    discord.ApplicationCommandInteraction
    Respond InteractionResponderFunc
}
```

<a name="ApplicationCommandInteractionCreate.CreateMessage"></a>
### func \(\*ApplicationCommandInteractionCreate\) [CreateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L46>)

```go
func (e *ApplicationCommandInteractionCreate) CreateMessage(messageCreate discord.MessageCreate, opts ...rest.RequestOpt) error
```

CreateMessage responds to the interaction with a new message.

<a name="ApplicationCommandInteractionCreate.DeferCreateMessage"></a>
### func \(\*ApplicationCommandInteractionCreate\) [DeferCreateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L51>)

```go
func (e *ApplicationCommandInteractionCreate) DeferCreateMessage(ephemeral bool, opts ...rest.RequestOpt) error
```

DeferCreateMessage responds to the interaction with a "bot is thinking..." message which should be edited later.

<a name="ApplicationCommandInteractionCreate.Guild"></a>
### func \(\*ApplicationCommandInteractionCreate\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L38>)

```go
func (e *ApplicationCommandInteractionCreate) Guild() (discord.Guild, bool)
```

Guild returns the guild that the interaction happened in if it happened in a guild. If the interaction happened in a DM, it returns nil. This only returns cached guilds.

<a name="ApplicationCommandInteractionCreate.Modal"></a>
### func \(\*ApplicationCommandInteractionCreate\) [Modal](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L60>)

```go
func (e *ApplicationCommandInteractionCreate) Modal(modalCreate discord.ModalCreate, opts ...rest.RequestOpt) error
```

Modal responds to the interaction with a new modal.

<a name="ApplicationCommandInteractionCreate.PremiumRequired"></a>
### func \(\*ApplicationCommandInteractionCreate\) [PremiumRequired](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L65>)

```go
func (e *ApplicationCommandInteractionCreate) PremiumRequired(opts ...rest.RequestOpt) error
```

PremiumRequired responds to the interaction with an upgrade button if available.

<a name="AutoModerationActionExecution"></a>
## type [AutoModerationActionExecution](<https://github.com/disgoorg/disgo/blob/master/events/guild_auto_moderation_events.go#L31-L34>)



```go
type AutoModerationActionExecution struct {
    *GenericEvent
    gateway.EventAutoModerationActionExecution
}
```

<a name="AutoModerationActionExecution.Guild"></a>
### func \(\*AutoModerationActionExecution\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/guild_auto_moderation_events.go#L38>)

```go
func (e *AutoModerationActionExecution) Guild() (discord.Guild, bool)
```

Guild returns the discord.Guild the event happened in. This will only check cached guilds\!

<a name="AutoModerationRuleCreate"></a>
## type [AutoModerationRuleCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_auto_moderation_events.go#L19-L21>)



```go
type AutoModerationRuleCreate struct {
    *GenericAutoModerationRule
}
```

<a name="AutoModerationRuleDelete"></a>
## type [AutoModerationRuleDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_auto_moderation_events.go#L27-L29>)



```go
type AutoModerationRuleDelete struct {
    *GenericAutoModerationRule
}
```

<a name="AutoModerationRuleUpdate"></a>
## type [AutoModerationRuleUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_auto_moderation_events.go#L23-L25>)



```go
type AutoModerationRuleUpdate struct {
    *GenericAutoModerationRule
}
```

<a name="AutocompleteInteractionCreate"></a>
## type [AutocompleteInteractionCreate](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L121-L125>)

AutocompleteInteractionCreate indicates that a new autocomplete interaction has been created.

```go
type AutocompleteInteractionCreate struct {
    *GenericEvent
    discord.AutocompleteInteraction
    Respond InteractionResponderFunc
}
```

<a name="AutocompleteInteractionCreate.AutocompleteResult"></a>
### func \(\*AutocompleteInteractionCreate\) [AutocompleteResult](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L138>)

```go
func (e *AutocompleteInteractionCreate) AutocompleteResult(choices []discord.AutocompleteChoice, opts ...rest.RequestOpt) error
```

AutocompleteResult responds to the interaction with a slice of choices.

<a name="AutocompleteInteractionCreate.Guild"></a>
### func \(\*AutocompleteInteractionCreate\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L130>)

```go
func (e *AutocompleteInteractionCreate) Guild() (discord.Guild, bool)
```

Guild returns the guild that the interaction happened in if it happened in a guild. If the interaction happened in a DM, it returns nil. This only returns cached guilds.

<a name="ComponentInteractionCreate"></a>
## type [ComponentInteractionCreate](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L70-L74>)

ComponentInteractionCreate indicates that a new component interaction has been created.

```go
type ComponentInteractionCreate struct {
    *GenericEvent
    discord.ComponentInteraction
    Respond InteractionResponderFunc
}
```

<a name="ComponentInteractionCreate.CreateMessage"></a>
### func \(\*ComponentInteractionCreate\) [CreateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L87>)

```go
func (e *ComponentInteractionCreate) CreateMessage(messageCreate discord.MessageCreate, opts ...rest.RequestOpt) error
```

CreateMessage responds to the interaction with a new message.

<a name="ComponentInteractionCreate.DeferCreateMessage"></a>
### func \(\*ComponentInteractionCreate\) [DeferCreateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L92>)

```go
func (e *ComponentInteractionCreate) DeferCreateMessage(ephemeral bool, opts ...rest.RequestOpt) error
```

DeferCreateMessage responds to the interaction with a "bot is thinking..." message which should be edited later.

<a name="ComponentInteractionCreate.DeferUpdateMessage"></a>
### func \(\*ComponentInteractionCreate\) [DeferUpdateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L106>)

```go
func (e *ComponentInteractionCreate) DeferUpdateMessage(opts ...rest.RequestOpt) error
```

DeferUpdateMessage responds to the interaction with nothing.

<a name="ComponentInteractionCreate.Guild"></a>
### func \(\*ComponentInteractionCreate\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L79>)

```go
func (e *ComponentInteractionCreate) Guild() (discord.Guild, bool)
```

Guild returns the guild that the interaction happened in if it happened in a guild. If the interaction happened in a DM, it returns nil. This only returns cached guilds.

<a name="ComponentInteractionCreate.Modal"></a>
### func \(\*ComponentInteractionCreate\) [Modal](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L111>)

```go
func (e *ComponentInteractionCreate) Modal(modalCreate discord.ModalCreate, opts ...rest.RequestOpt) error
```

Modal responds to the interaction with a new modal.

<a name="ComponentInteractionCreate.PremiumRequired"></a>
### func \(\*ComponentInteractionCreate\) [PremiumRequired](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L116>)

```go
func (e *ComponentInteractionCreate) PremiumRequired(opts ...rest.RequestOpt) error
```

PremiumRequired responds to the interaction with an upgrade button if available.

<a name="ComponentInteractionCreate.UpdateMessage"></a>
### func \(\*ComponentInteractionCreate\) [UpdateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L101>)

```go
func (e *ComponentInteractionCreate) UpdateMessage(messageUpdate discord.MessageUpdate, opts ...rest.RequestOpt) error
```

UpdateMessage responds to the interaction with updating the message the component is from.

<a name="DMChannelPinsUpdate"></a>
## type [DMChannelPinsUpdate](<https://github.com/disgoorg/disgo/blob/master/events/dm_channel_events.go#L10-L14>)

DMChannelPinsUpdate indicates that a discord.Message got pinned or unpinned.

```go
type DMChannelPinsUpdate struct {
    *GenericEvent
    ChannelID           snowflake.ID
    NewLastPinTimestamp *time.Time
}
```

<a name="DMMessageCreate"></a>
## type [DMMessageCreate](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_event_events.go#L18-L20>)

DMMessageCreate is called upon receiving a discord.Message in a Channel \(requires gateway.IntentsDirectMessage\)

```go
type DMMessageCreate struct {
    *GenericDMMessage
}
```

<a name="DMMessageDelete"></a>
## type [DMMessageDelete](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_event_events.go#L29-L31>)

DMMessageDelete is called upon deleting a discord.Message in a Channel \(requires gateway.IntentsDirectMessage\)

```go
type DMMessageDelete struct {
    *GenericDMMessage
}
```

<a name="DMMessagePollVoteAdd"></a>
## type [DMMessagePollVoteAdd](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_poll_events.go#L17-L19>)

DMMessagePollVoteAdd indicates that a discord.User voted on a discord.Poll in a DM \(requires gateway.IntentDirectMessagePolls\)

```go
type DMMessagePollVoteAdd struct {
    *GenericDMMessagePollVote
}
```

<a name="DMMessagePollVoteRemove"></a>
## type [DMMessagePollVoteRemove](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_poll_events.go#L22-L24>)

DMMessagePollVoteRemove indicates that a discord.User removed their vote on a discord.Poll in a DM \(requires gateway.IntentDirectMessagePolls\)

```go
type DMMessagePollVoteRemove struct {
    *GenericDMMessagePollVote
}
```

<a name="DMMessageReactionAdd"></a>
## type [DMMessageReactionAdd](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_reaction_events.go#L21-L24>)

DMMessageReactionAdd indicates that a discord.User added a discord.MessageReaction to a discord.Message in a Channel \(requires the gateway.IntentDirectMessageReactions\)

```go
type DMMessageReactionAdd struct {
    *GenericDMMessageReaction
    MessageAuthorID *snowflake.ID
}
```

<a name="DMMessageReactionRemove"></a>
## type [DMMessageReactionRemove](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_reaction_events.go#L27-L29>)

DMMessageReactionRemove indicates that a discord.User removed a discord.MessageReaction from a discord.Message in a Channel \(requires the gateway.IntentDirectMessageReactions\)

```go
type DMMessageReactionRemove struct {
    *GenericDMMessageReaction
}
```

<a name="DMMessageReactionRemoveAll"></a>
## type [DMMessageReactionRemoveAll](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_reaction_events.go#L40-L44>)

DMMessageReactionRemoveAll indicates someone removed all discord.MessageReaction\(s\) from a discord.Message in a Channel \(requires the gateway.IntentDirectMessageReactions\)

```go
type DMMessageReactionRemoveAll struct {
    *GenericEvent
    ChannelID snowflake.ID
    MessageID snowflake.ID
}
```

<a name="DMMessageReactionRemoveEmoji"></a>
## type [DMMessageReactionRemoveEmoji](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_reaction_events.go#L32-L37>)

DMMessageReactionRemoveEmoji indicates someone removed all discord.MessageReaction\(s\) of a specific discord.Emoji from a discord.Message in a Channel \(requires the gateway.IntentDirectMessageReactions\)

```go
type DMMessageReactionRemoveEmoji struct {
    *GenericEvent
    ChannelID snowflake.ID
    MessageID snowflake.ID
    Emoji     discord.PartialEmoji
}
```

<a name="DMMessageUpdate"></a>
## type [DMMessageUpdate](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_event_events.go#L23-L26>)

DMMessageUpdate is called upon editing a discord.Message in a Channel \(requires gateway.IntentsDirectMessage\)

```go
type DMMessageUpdate struct {
    *GenericDMMessage
    OldMessage discord.Message
}
```

<a name="DMUserTypingStart"></a>
## type [DMUserTypingStart](<https://github.com/disgoorg/disgo/blob/master/events/dm_channel_events.go#L17-L22>)

DMUserTypingStart indicates that a discord.User started typing in a discord.DMChannel\(requires gateway.IntentDirectMessageTyping\).

```go
type DMUserTypingStart struct {
    *GenericEvent
    ChannelID snowflake.ID
    UserID    snowflake.ID
    Timestamp time.Time
}
```

<a name="EmojiCreate"></a>
## type [EmojiCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_emoji_events.go#L25-L27>)

EmojiCreate indicates that a new discord.Emoji got created in a discord.Guild \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type EmojiCreate struct {
    *GenericEmoji
}
```

<a name="EmojiDelete"></a>
## type [EmojiDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_emoji_events.go#L36-L38>)

EmojiDelete indicates that a discord.Emoji got deleted in a discord.Guild \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type EmojiDelete struct {
    *GenericEmoji
}
```

<a name="EmojiUpdate"></a>
## type [EmojiUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_emoji_events.go#L30-L33>)

EmojiUpdate indicates that a discord.Emoji got updated in a discord.Guild \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type EmojiUpdate struct {
    *GenericEmoji
    OldEmoji discord.Emoji
}
```

<a name="EmojisUpdate"></a>
## type [EmojisUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_emoji_events.go#L12-L15>)

EmojisUpdate is dispatched when a guild's emojis are updated. This event does not depend on a cache like EmojiCreate, EmojiUpdate or EmojiDelete.

```go
type EmojisUpdate struct {
    *GenericEvent
    gateway.EventGuildEmojisUpdate
}
```

<a name="EntitlementCreate"></a>
## type [EntitlementCreate](<https://github.com/disgoorg/disgo/blob/master/events/entitlement_events.go#L10-L12>)



```go
type EntitlementCreate struct {
    *GenericEntitlementEvent
}
```

<a name="EntitlementDelete"></a>
## type [EntitlementDelete](<https://github.com/disgoorg/disgo/blob/master/events/entitlement_events.go#L18-L20>)



```go
type EntitlementDelete struct {
    *GenericEntitlementEvent
}
```

<a name="EntitlementUpdate"></a>
## type [EntitlementUpdate](<https://github.com/disgoorg/disgo/blob/master/events/entitlement_events.go#L14-L16>)



```go
type EntitlementUpdate struct {
    *GenericEntitlementEvent
}
```

<a name="GenericAutoModerationRule"></a>
## type [GenericAutoModerationRule](<https://github.com/disgoorg/disgo/blob/master/events/guild_auto_moderation_events.go#L8-L11>)



```go
type GenericAutoModerationRule struct {
    *GenericEvent
    discord.AutoModerationRule
}
```

<a name="GenericAutoModerationRule.Guild"></a>
### func \(\*GenericAutoModerationRule\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/guild_auto_moderation_events.go#L15>)

```go
func (e *GenericAutoModerationRule) Guild() (discord.Guild, bool)
```

Guild returns the discord.Guild the event happened in. This will only check cached guilds\!

<a name="GenericDMMessage"></a>
## type [GenericDMMessage](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_event_events.go#L10-L15>)

GenericDMMessage is called upon receiving DMMessageCreate , DMMessageUpdate , DMMessageDelete , GenericDMMessageReaction , DMMessageReactionAdd , DMMessageReactionRemove , DMMessageReactionRemoveEmoji or DMMessageReactionRemoveAll \(requires gateway.IntentsDirectMessage\)

```go
type GenericDMMessage struct {
    *GenericEvent
    MessageID snowflake.ID
    Message   discord.Message
    ChannelID snowflake.ID
}
```

<a name="GenericDMMessagePollVote"></a>
## type [GenericDMMessagePollVote](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_poll_events.go#L8-L14>)

GenericDMMessagePollVote is called upon receiving DMMessagePollVoteAdd or DMMessagePollVoteRemove \(requires gateway.IntentDirectMessagePolls\)

```go
type GenericDMMessagePollVote struct {
    *GenericEvent
    UserID    snowflake.ID
    ChannelID snowflake.ID
    MessageID snowflake.ID
    AnswerID  int
}
```

<a name="GenericDMMessageReaction"></a>
## type [GenericDMMessageReaction](<https://github.com/disgoorg/disgo/blob/master/events/dm_message_reaction_events.go#L10-L18>)

GenericDMMessageReaction is called upon receiving DMMessageReactionAdd or DMMessageReactionRemove \(requires the gateway.IntentDirectMessageReactions\)

```go
type GenericDMMessageReaction struct {
    *GenericEvent
    UserID      snowflake.ID
    ChannelID   snowflake.ID
    MessageID   snowflake.ID
    Emoji       discord.PartialEmoji
    BurstColors []string
    Burst       bool
}
```

<a name="GenericEmoji"></a>
## type [GenericEmoji](<https://github.com/disgoorg/disgo/blob/master/events/guild_emoji_events.go#L18-L22>)

GenericEmoji is called upon receiving EmojiCreate , EmojiUpdate or EmojiDelete \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type GenericEmoji struct {
    *GenericEvent
    GuildID snowflake.ID
    Emoji   discord.Emoji
}
```

<a name="GenericEntitlementEvent"></a>
## type [GenericEntitlementEvent](<https://github.com/disgoorg/disgo/blob/master/events/entitlement_events.go#L5-L8>)



```go
type GenericEntitlementEvent struct {
    *GenericEvent
    discord.Entitlement
}
```

<a name="GenericEvent"></a>
## type [GenericEvent](<https://github.com/disgoorg/disgo/blob/master/events/generic_event.go#L13-L17>)

GenericEvent the base event structure

```go
type GenericEvent struct {
    // contains filtered or unexported fields
}
```

<a name="NewGenericEvent"></a>
### func [NewGenericEvent](<https://github.com/disgoorg/disgo/blob/master/events/generic_event.go#L8>)

```go
func NewGenericEvent(client bot.Client, sequenceNumber int, shardID int) *GenericEvent
```

NewGenericEvent constructs a new GenericEvent with the provided Client instance

<a name="GenericEvent.Client"></a>
### func \(\*GenericEvent\) [Client](<https://github.com/disgoorg/disgo/blob/master/events/generic_event.go#L20>)

```go
func (e *GenericEvent) Client() bot.Client
```

Client returns the bot.Client instance that dispatched the event

<a name="GenericEvent.SequenceNumber"></a>
### func \(\*GenericEvent\) [SequenceNumber](<https://github.com/disgoorg/disgo/blob/master/events/generic_event.go#L25>)

```go
func (e *GenericEvent) SequenceNumber() int
```

SequenceNumber returns the sequence number of the gateway event

<a name="GenericEvent.ShardID"></a>
### func \(\*GenericEvent\) [ShardID](<https://github.com/disgoorg/disgo/blob/master/events/generic_event.go#L30>)

```go
func (e *GenericEvent) ShardID() int
```

ShardID returns the shard ID the event was dispatched from

<a name="GenericGuild"></a>
## type [GenericGuild](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L10-L14>)

GenericGuild is called upon receiving GuildUpdate , GuildAvailable , GuildUnavailable , GuildJoin , GuildLeave , GuildReady , GuildBan , GuildUnban

```go
type GenericGuild struct {
    *GenericEvent
    GuildID snowflake.ID
    Guild   discord.Guild
}
```

<a name="GenericGuildChannel"></a>
## type [GenericGuildChannel](<https://github.com/disgoorg/disgo/blob/master/events/guild_channel_events.go#L12-L17>)

GenericGuildChannel is called upon receiving GuildChannelCreate , GuildChannelUpdate or GuildChannelDelete

```go
type GenericGuildChannel struct {
    *GenericEvent
    ChannelID snowflake.ID
    Channel   discord.GuildChannel
    GuildID   snowflake.ID
}
```

<a name="GenericGuildChannel.Guild"></a>
### func \(\*GenericGuildChannel\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/guild_channel_events.go#L21>)

```go
func (e *GenericGuildChannel) Guild() (discord.Guild, bool)
```

Guild returns the discord.Guild the event happened in. This will only check cached guilds\!

<a name="GenericGuildMember"></a>
## type [GenericGuildMember](<https://github.com/disgoorg/disgo/blob/master/events/guild_member_events.go#L12-L16>)

GenericGuildMember generic discord.Member event

```go
type GenericGuildMember struct {
    *GenericEvent
    GuildID snowflake.ID
    Member  discord.Member
}
```

<a name="GenericGuildMessage"></a>
## type [GenericGuildMessage](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_events.go#L10-L16>)

GenericGuildMessage is called upon receiving GuildMessageCreate , GuildMessageUpdate or GuildMessageDelete

```go
type GenericGuildMessage struct {
    *GenericEvent
    MessageID snowflake.ID
    Message   discord.Message
    ChannelID snowflake.ID
    GuildID   snowflake.ID
}
```

<a name="GenericGuildMessage.Channel"></a>
### func \(\*GenericGuildMessage\) [Channel](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_events.go#L25>)

```go
func (e *GenericGuildMessage) Channel() (discord.GuildMessageChannel, bool)
```

Channel returns the discord.GuildMessageChannel where the GenericGuildMessage happened

<a name="GenericGuildMessage.Guild"></a>
### func \(\*GenericGuildMessage\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_events.go#L20>)

```go
func (e *GenericGuildMessage) Guild() (discord.Guild, bool)
```

Guild returns the discord.Guild the GenericGuildMessage happened in. This will only check cached guilds\!

<a name="GenericGuildMessagePollVote"></a>
## type [GenericGuildMessagePollVote](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_poll_events.go#L9-L16>)

GenericGuildMessagePollVote is called upon receiving GuildMessagePollVoteAdd or GuildMessagePollVoteRemove \(requires gateway.IntentGuildMessagePolls\)

```go
type GenericGuildMessagePollVote struct {
    *GenericEvent
    UserID    snowflake.ID
    ChannelID snowflake.ID
    MessageID snowflake.ID
    GuildID   snowflake.ID
    AnswerID  int
}
```

<a name="GenericGuildMessagePollVote.Channel"></a>
### func \(\*GenericGuildMessagePollVote\) [Channel](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_poll_events.go#L24>)

```go
func (e *GenericGuildMessagePollVote) Channel() (discord.GuildMessageChannel, bool)
```

Channel returns the discord.GuildMessageChannel where the GenericGuildMessagePollVote happened

<a name="GenericGuildMessagePollVote.Guild"></a>
### func \(\*GenericGuildMessagePollVote\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_poll_events.go#L19>)

```go
func (e *GenericGuildMessagePollVote) Guild() (discord.Guild, bool)
```

Guild returns the discord.Guild where the GenericGuildMessagePollVote happened

<a name="GenericGuildMessageReaction"></a>
## type [GenericGuildMessageReaction](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_reaction_events.go#L10-L19>)

GenericGuildMessageReaction is called upon receiving GuildMessageReactionAdd or GuildMessageReactionRemove

```go
type GenericGuildMessageReaction struct {
    *GenericEvent
    UserID      snowflake.ID
    ChannelID   snowflake.ID
    MessageID   snowflake.ID
    GuildID     snowflake.ID
    Emoji       discord.PartialEmoji
    BurstColors []string
    Burst       bool
}
```

<a name="GenericGuildMessageReaction.Member"></a>
### func \(\*GenericGuildMessageReaction\) [Member](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_reaction_events.go#L22>)

```go
func (e *GenericGuildMessageReaction) Member() (discord.Member, bool)
```

Member returns the Member that reacted to the discord.Message from the cache.

<a name="GenericGuildScheduledEvent"></a>
## type [GenericGuildScheduledEvent](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L10-L13>)

GenericGuildScheduledEvent is the base struct for all GuildScheduledEvents events.

```go
type GenericGuildScheduledEvent struct {
    *GenericEvent
    GuildScheduled discord.GuildScheduledEvent
}
```

<a name="GenericGuildScheduledEventUser"></a>
## type [GenericGuildScheduledEventUser](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L32-L37>)

GenericGuildScheduledEventUser is the base struct for all GuildScheduledEventUser events.

```go
type GenericGuildScheduledEventUser struct {
    *GenericEvent
    GuildScheduledEventID snowflake.ID
    UserID                snowflake.ID
    GuildID               snowflake.ID
}
```

<a name="GenericGuildScheduledEventUser.GuildScheduledEvent"></a>
### func \(\*GenericGuildScheduledEventUser\) [GuildScheduledEvent](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L40>)

```go
func (e *GenericGuildScheduledEventUser) GuildScheduledEvent() (discord.GuildScheduledEvent, bool)
```

GuildScheduledEvent returns the discord.GuildScheduledEvent the event is for.

<a name="GenericGuildScheduledEventUser.Member"></a>
### func \(\*GenericGuildScheduledEventUser\) [Member](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L45>)

```go
func (e *GenericGuildScheduledEventUser) Member() (discord.Member, bool)
```

Member returns the Member who was added/removed from the GuildScheduledEvent from the cache.

<a name="GenericGuildVoiceState"></a>
## type [GenericGuildVoiceState](<https://github.com/disgoorg/disgo/blob/master/events/guild_voice_events.go#L9-L13>)

GenericGuildVoiceState is called upon receiving GuildVoiceJoin , GuildVoiceMove , GuildVoiceLeave

```go
type GenericGuildVoiceState struct {
    *GenericEvent
    VoiceState discord.VoiceState
    Member     discord.Member
}
```

<a name="GenericIntegration"></a>
## type [GenericIntegration](<https://github.com/disgoorg/disgo/blob/master/events/guild_integration_events.go#L10-L14>)

GenericIntegration is called upon receiving IntegrationCreate, IntegrationUpdate or IntegrationDelete\(requires the gateway.IntentGuildIntegrations\)

```go
type GenericIntegration struct {
    *GenericEvent
    GuildID     snowflake.ID
    Integration discord.Integration
}
```

<a name="GenericIntegration.Guild"></a>
### func \(\*GenericIntegration\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/guild_integration_events.go#L18>)

```go
func (e *GenericIntegration) Guild() (discord.Guild, bool)
```

Guild returns the Guild this Integration was created in. This will only check cached guilds\!

<a name="GenericInvite"></a>
## type [GenericInvite](<https://github.com/disgoorg/disgo/blob/master/events/guild_invite_events.go#L10-L15>)

GenericInvite is called upon receiving InviteCreate or InviteDelete \(requires gateway.IntentGuildInvites\)

```go
type GenericInvite struct {
    *GenericEvent
    GuildID   *snowflake.ID
    ChannelID snowflake.ID
    Code      string
}
```

<a name="GenericInvite.Channel"></a>
### func \(\*GenericInvite\) [Channel](<https://github.com/disgoorg/disgo/blob/master/events/guild_invite_events.go#L18>)

```go
func (e *GenericInvite) Channel() (discord.GuildChannel, bool)
```

Channel returns the discord.GuildChannel the GenericInvite happened in.

<a name="GenericMessage"></a>
## type [GenericMessage](<https://github.com/disgoorg/disgo/blob/master/events/message_events.go#L10-L16>)

GenericMessage generic discord.Message event

```go
type GenericMessage struct {
    *GenericEvent
    MessageID snowflake.ID
    Message   discord.Message
    ChannelID snowflake.ID
    GuildID   *snowflake.ID
}
```

<a name="GenericMessage.Channel"></a>
### func \(\*GenericMessage\) [Channel](<https://github.com/disgoorg/disgo/blob/master/events/message_events.go#L19>)

```go
func (e *GenericMessage) Channel() (discord.GuildMessageChannel, bool)
```

Channel returns the discord.GuildMessageChannel where the GenericMessage happened

<a name="GenericMessage.Guild"></a>
### func \(\*GenericMessage\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/message_events.go#L24>)

```go
func (e *GenericMessage) Guild() (discord.Guild, bool)
```

Guild returns the discord.Guild where the GenericMessage happened or nil if it happened in DMs

<a name="GenericMessagePollVote"></a>
## type [GenericMessagePollVote](<https://github.com/disgoorg/disgo/blob/master/events/message_poll_events.go#L9-L16>)

GenericMessagePollVote is a generic poll vote event \(requires gateway.IntentGuildMessagePolls and/or gateway.IntentDirectMessagePolls\)

```go
type GenericMessagePollVote struct {
    *GenericEvent
    UserID    snowflake.ID
    ChannelID snowflake.ID
    MessageID snowflake.ID
    GuildID   *snowflake.ID
    AnswerID  int
}
```

<a name="GenericMessagePollVote.Guild"></a>
### func \(\*GenericMessagePollVote\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/message_poll_events.go#L19>)

```go
func (e *GenericMessagePollVote) Guild() (discord.Guild, bool)
```

Guild returns the discord.Guild where the GenericMessagePollVote happened or empty if it happened in DMs

<a name="GenericReaction"></a>
## type [GenericReaction](<https://github.com/disgoorg/disgo/blob/master/events/message_reaction_events.go#L10-L19>)

GenericReaction is called upon receiving MessageReactionAdd or MessageReactionRemove

```go
type GenericReaction struct {
    *GenericEvent
    UserID      snowflake.ID
    ChannelID   snowflake.ID
    MessageID   snowflake.ID
    GuildID     *snowflake.ID
    Emoji       discord.PartialEmoji
    BurstColors []string
    Burst       bool
}
```

<a name="GenericRole"></a>
## type [GenericRole](<https://github.com/disgoorg/disgo/blob/master/events/guild_role_events.go#L10-L15>)

GenericRole generic discord.Role event

```go
type GenericRole struct {
    *GenericEvent
    GuildID snowflake.ID
    RoleID  snowflake.ID
    Role    discord.Role
}
```

<a name="GenericStageInstance"></a>
## type [GenericStageInstance](<https://github.com/disgoorg/disgo/blob/master/events/guild_stage_instance_events.go#L10-L14>)

GenericStageInstance generic StageInstance event

```go
type GenericStageInstance struct {
    *GenericEvent
    StageInstanceID snowflake.ID
    StageInstance   discord.StageInstance
}
```

<a name="GenericSticker"></a>
## type [GenericSticker](<https://github.com/disgoorg/disgo/blob/master/events/guild_sticker_events.go#L18-L22>)

GenericSticker is called upon receiving StickerCreate , StickerUpdate or StickerDelete \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type GenericSticker struct {
    *GenericEvent
    GuildID snowflake.ID
    Sticker discord.Sticker
}
```

<a name="GenericThread"></a>
## type [GenericThread](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L10-L16>)

GenericThread is the base struct for all Thread events.

```go
type GenericThread struct {
    *GenericEvent
    Thread   discord.GuildThread
    ThreadID snowflake.ID
    GuildID  snowflake.ID
    ParentID snowflake.ID
}
```

<a name="GenericThreadMember"></a>
## type [GenericThreadMember](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L46-L52>)

GenericThreadMember is the base struct for all ThreadMember events.

```go
type GenericThreadMember struct {
    *GenericEvent
    GuildID        snowflake.ID
    ThreadID       snowflake.ID
    ThreadMemberID snowflake.ID
    ThreadMember   discord.ThreadMember
}
```

<a name="GenericUser"></a>
## type [GenericUser](<https://github.com/disgoorg/disgo/blob/master/events/user_events.go#L12-L16>)

GenericUser is called upon receiving UserUpdate or UserTypingStart

```go
type GenericUser struct {
    *GenericEvent
    UserID snowflake.ID
    User   discord.User
}
```

<a name="GenericUserActivity"></a>
## type [GenericUserActivity](<https://github.com/disgoorg/disgo/blob/master/events/user_activity_events.go#L16-L21>)

GenericUserActivity generic Activity event

```go
type GenericUserActivity struct {
    *GenericEvent
    UserID   snowflake.ID
    GuildID  snowflake.ID
    Activity discord.Activity
}
```

<a name="GenericUserActivity.Guild"></a>
### func \(\*GenericUserActivity\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/user_activity_events.go#L31>)

```go
func (g *GenericUserActivity) Guild() (discord.Guild, bool)
```

Guild returns the Guild that changed their Activity. This will only check cached guilds\!

<a name="GenericUserActivity.Member"></a>
### func \(\*GenericUserActivity\) [Member](<https://github.com/disgoorg/disgo/blob/master/events/user_activity_events.go#L25>)

```go
func (g *GenericUserActivity) Member() (discord.Member, bool)
```

Member returns the Member that changed their Activity. This will only check cached members\!

<a name="GuildApplicationCommandPermissionsUpdate"></a>
## type [GuildApplicationCommandPermissionsUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_integration_events.go#L47-L50>)

GuildApplicationCommandPermissionsUpdate indicates that a Guild's application's permissions were updated

```go
type GuildApplicationCommandPermissionsUpdate struct {
    *GenericEvent
    Permissions discord.ApplicationCommandPermissions
}
```

<a name="GuildAuditLogEntryCreate"></a>
## type [GuildAuditLogEntryCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L67-L71>)

GuildAuditLogEntryCreate is called when a new discord.AuditLogEntry is created

```go
type GuildAuditLogEntryCreate struct {
    *GenericEvent
    GuildID       snowflake.ID
    AuditLogEntry discord.AuditLogEntry
}
```

<a name="GuildAvailable"></a>
## type [GuildAvailable](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L23-L25>)

GuildAvailable is called when an unavailable discord.Guild becomes available

```go
type GuildAvailable struct {
    *GenericGuild
}
```

<a name="GuildBan"></a>
## type [GuildBan](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L53-L57>)

GuildBan is called when a discord.Member/discord.User is banned from the discord.Guild

```go
type GuildBan struct {
    *GenericEvent
    GuildID snowflake.ID
    User    discord.User
}
```

<a name="GuildChannelCreate"></a>
## type [GuildChannelCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_channel_events.go#L26-L28>)

GuildChannelCreate indicates that a new Channel got created in a discord.Guild

```go
type GuildChannelCreate struct {
    *GenericGuildChannel
}
```

<a name="GuildChannelDelete"></a>
## type [GuildChannelDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_channel_events.go#L37-L39>)

GuildChannelDelete indicates that a Channel got deleted in a discord.Guild

```go
type GuildChannelDelete struct {
    *GenericGuildChannel
}
```

<a name="GuildChannelPinsUpdate"></a>
## type [GuildChannelPinsUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_channel_events.go#L42-L48>)

GuildChannelPinsUpdate indicates a discord.Message got pinned or unpinned in a discord.GuildMessageChannel

```go
type GuildChannelPinsUpdate struct {
    *GenericEvent
    GuildID             snowflake.ID
    ChannelID           snowflake.ID
    NewLastPinTimestamp *time.Time
    OldLastPinTimestamp *time.Time
}
```

<a name="GuildChannelUpdate"></a>
## type [GuildChannelUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_channel_events.go#L31-L34>)

GuildChannelUpdate indicates that a Channel got updated in a discord.Guild

```go
type GuildChannelUpdate struct {
    *GenericGuildChannel
    OldChannel discord.GuildChannel
}
```

<a name="GuildIntegrationsUpdate"></a>
## type [GuildIntegrationsUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_integration_events.go#L41-L44>)

GuildIntegrationsUpdate indicates that a Guild's integrations were updated

```go
type GuildIntegrationsUpdate struct {
    *GenericEvent
    GuildID snowflake.ID
}
```

<a name="GuildJoin"></a>
## type [GuildJoin](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L33-L35>)

GuildJoin is called when the bot joins a discord.Guild

```go
type GuildJoin struct {
    *GenericGuild
}
```

<a name="GuildLeave"></a>
## type [GuildLeave](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L38-L40>)

GuildLeave is called when the bot leaves a discord.Guild

```go
type GuildLeave struct {
    *GenericGuild
}
```

<a name="GuildMemberJoin"></a>
## type [GuildMemberJoin](<https://github.com/disgoorg/disgo/blob/master/events/guild_member_events.go#L19-L21>)

GuildMemberJoin indicates that a discord.Member joined the discord.Guild

```go
type GuildMemberJoin struct {
    *GenericGuildMember
}
```

<a name="GuildMemberLeave"></a>
## type [GuildMemberLeave](<https://github.com/disgoorg/disgo/blob/master/events/guild_member_events.go#L30-L35>)

GuildMemberLeave indicates that a discord.Member left the discord.Guild

```go
type GuildMemberLeave struct {
    *GenericEvent
    GuildID snowflake.ID
    User    discord.User
    Member  discord.Member
}
```

<a name="GuildMemberTypingStart"></a>
## type [GuildMemberTypingStart](<https://github.com/disgoorg/disgo/blob/master/events/guild_member_events.go#L41-L48>)

GuildMemberTypingStart indicates that a discord.Member started typing in a discord.BaseGuildMessageChannel\(requires gateway.IntentGuildMessageTyping\) Member will be empty when event is triggered by [Clyde bot](<https://support.discord.com/hc/en-us/articles/13066317497239-Clyde-Discord-s-AI-Chatbot>)

```go
type GuildMemberTypingStart struct {
    *GenericEvent
    ChannelID snowflake.ID
    UserID    snowflake.ID
    GuildID   snowflake.ID
    Timestamp time.Time
    Member    discord.Member
}
```

<a name="GuildMemberTypingStart.Channel"></a>
### func \(\*GuildMemberTypingStart\) [Channel](<https://github.com/disgoorg/disgo/blob/master/events/guild_member_events.go#L51>)

```go
func (e *GuildMemberTypingStart) Channel() (discord.GuildMessageChannel, bool)
```

Channel returns the discord.GuildMessageChannel the GuildMemberTypingStart happened in

<a name="GuildMemberUpdate"></a>
## type [GuildMemberUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_member_events.go#L24-L27>)

GuildMemberUpdate indicates that a discord.Member updated

```go
type GuildMemberUpdate struct {
    *GenericGuildMember
    OldMember discord.Member
}
```

<a name="GuildMessageCreate"></a>
## type [GuildMessageCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_events.go#L30-L32>)

GuildMessageCreate is called upon receiving a discord.Message in a Channel

```go
type GuildMessageCreate struct {
    *GenericGuildMessage
}
```

<a name="GuildMessageDelete"></a>
## type [GuildMessageDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_events.go#L41-L43>)

GuildMessageDelete is called upon deleting a discord.Message in a Channel

```go
type GuildMessageDelete struct {
    *GenericGuildMessage
}
```

<a name="GuildMessagePollVoteAdd"></a>
## type [GuildMessagePollVoteAdd](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_poll_events.go#L29-L31>)

GuildMessagePollVoteAdd indicates that a discord.User voted on a discord.Poll in a discord.Guild \(requires gateway.IntentGuildMessagePolls\)

```go
type GuildMessagePollVoteAdd struct {
    *GenericGuildMessagePollVote
}
```

<a name="GuildMessagePollVoteRemove"></a>
## type [GuildMessagePollVoteRemove](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_poll_events.go#L34-L36>)

GuildMessagePollVoteRemove indicates that a discord.User removed their vote on a discord.Poll in a discord.Guild \(requires gateway.IntentGuildMessagePolls\)

```go
type GuildMessagePollVoteRemove struct {
    *GenericGuildMessagePollVote
}
```

<a name="GuildMessageReactionAdd"></a>
## type [GuildMessageReactionAdd](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_reaction_events.go#L27-L31>)

GuildMessageReactionAdd indicates that a discord.Member added a discord.PartialEmoji to a discord.Message in a discord.GuildMessageChannel\(requires the gateway.IntentGuildMessageReactions\)

```go
type GuildMessageReactionAdd struct {
    *GenericGuildMessageReaction
    Member          discord.Member
    MessageAuthorID *snowflake.ID
}
```

<a name="GuildMessageReactionRemove"></a>
## type [GuildMessageReactionRemove](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_reaction_events.go#L34-L36>)

GuildMessageReactionRemove indicates that a discord.Member removed a discord.MessageReaction from a discord.Message in a Channel \(requires the gateway.IntentGuildMessageReactions\)

```go
type GuildMessageReactionRemove struct {
    *GenericGuildMessageReaction
}
```

<a name="GuildMessageReactionRemoveAll"></a>
## type [GuildMessageReactionRemoveAll](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_reaction_events.go#L48-L53>)

GuildMessageReactionRemoveAll indicates someone removed all discord.MessageReaction\(s\) from a discord.Message in a Channel \(requires the gateway.IntentGuildMessageReactions\)

```go
type GuildMessageReactionRemoveAll struct {
    *GenericEvent
    ChannelID snowflake.ID
    MessageID snowflake.ID
    GuildID   snowflake.ID
}
```

<a name="GuildMessageReactionRemoveEmoji"></a>
## type [GuildMessageReactionRemoveEmoji](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_reaction_events.go#L39-L45>)

GuildMessageReactionRemoveEmoji indicates someone removed all discord.MessageReaction of a specific discord.Emoji from a discord.Message in a Channel \(requires the gateway.IntentGuildMessageReactions\)

```go
type GuildMessageReactionRemoveEmoji struct {
    *GenericEvent
    ChannelID snowflake.ID
    MessageID snowflake.ID
    GuildID   snowflake.ID
    Emoji     discord.PartialEmoji
}
```

<a name="GuildMessageUpdate"></a>
## type [GuildMessageUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_message_events.go#L35-L38>)

GuildMessageUpdate is called upon editing a discord.Message in a Channel

```go
type GuildMessageUpdate struct {
    *GenericGuildMessage
    OldMessage discord.Message
}
```

<a name="GuildReady"></a>
## type [GuildReady](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L43-L45>)

GuildReady is called when a discord.Guild becomes loaded for the first time

```go
type GuildReady struct {
    *GenericGuild
}
```

<a name="GuildScheduledEventCreate"></a>
## type [GuildScheduledEventCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L16-L18>)

GuildScheduledEventCreate is dispatched when a guild scheduled event is created.

```go
type GuildScheduledEventCreate struct {
    *GenericGuildScheduledEvent
}
```

<a name="GuildScheduledEventDelete"></a>
## type [GuildScheduledEventDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L27-L29>)

GuildScheduledEventDelete is dispatched when a guild scheduled event is deleted.

```go
type GuildScheduledEventDelete struct {
    *GenericGuildScheduledEvent
}
```

<a name="GuildScheduledEventUpdate"></a>
## type [GuildScheduledEventUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L21-L24>)

GuildScheduledEventUpdate is dispatched when a guild scheduled event is updated.

```go
type GuildScheduledEventUpdate struct {
    *GenericGuildScheduledEvent
    OldGuildScheduled discord.GuildScheduledEvent
}
```

<a name="GuildScheduledEventUserAdd"></a>
## type [GuildScheduledEventUserAdd](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L50-L52>)

GuildScheduledEventUserAdd is dispatched when a user is added to a discord.GuildScheduledEvent.

```go
type GuildScheduledEventUserAdd struct {
    *GenericGuildScheduledEventUser
}
```

<a name="GuildScheduledEventUserRemove"></a>
## type [GuildScheduledEventUserRemove](<https://github.com/disgoorg/disgo/blob/master/events/guild_scheduled_events_events.go#L55-L57>)

GuildScheduledEventUserRemove is dispatched when a user is removed from a discord.GuildScheduledEvent.

```go
type GuildScheduledEventUserRemove struct {
    *GenericGuildScheduledEventUser
}
```

<a name="GuildUnavailable"></a>
## type [GuildUnavailable](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L28-L30>)

GuildUnavailable is called when an available discord.Guild becomes unavailable

```go
type GuildUnavailable struct {
    *GenericGuild
}
```

<a name="GuildUnban"></a>
## type [GuildUnban](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L60-L64>)

GuildUnban is called when a discord.Member/discord.User is unbanned from the discord.Guild

```go
type GuildUnban struct {
    *GenericEvent
    GuildID snowflake.ID
    User    discord.User
}
```

<a name="GuildUpdate"></a>
## type [GuildUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L17-L20>)

GuildUpdate is called upon receiving discord.Guild updates

```go
type GuildUpdate struct {
    *GenericGuild
    OldGuild discord.Guild
}
```

<a name="GuildVoiceJoin"></a>
## type [GuildVoiceJoin](<https://github.com/disgoorg/disgo/blob/master/events/guild_voice_events.go#L22-L24>)

GuildVoiceJoin indicates that a discord.Member joined a discord.Channel\(requires gateway.IntentsGuildVoiceStates\)

```go
type GuildVoiceJoin struct {
    *GenericGuildVoiceState
}
```

<a name="GuildVoiceLeave"></a>
## type [GuildVoiceLeave](<https://github.com/disgoorg/disgo/blob/master/events/guild_voice_events.go#L33-L36>)

GuildVoiceLeave indicates that a discord.Member left a discord.Channel\(requires gateway.IntentsGuildVoiceStates\)

```go
type GuildVoiceLeave struct {
    *GenericGuildVoiceState
    OldVoiceState discord.VoiceState
}
```

<a name="GuildVoiceMove"></a>
## type [GuildVoiceMove](<https://github.com/disgoorg/disgo/blob/master/events/guild_voice_events.go#L27-L30>)

GuildVoiceMove indicates that a discord.Member moved a discord.Channel\(requires gateway.IntentsGuildVoiceStates\)

```go
type GuildVoiceMove struct {
    *GenericGuildVoiceState
    OldVoiceState discord.VoiceState
}
```

<a name="GuildVoiceStateUpdate"></a>
## type [GuildVoiceStateUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_voice_events.go#L16-L19>)

GuildVoiceStateUpdate indicates that the discord.VoiceState of a discord.Member has updated\(requires gateway.IntentsGuildVoiceStates\)

```go
type GuildVoiceStateUpdate struct {
    *GenericGuildVoiceState
    OldVoiceState discord.VoiceState
}
```

<a name="GuildsReady"></a>
## type [GuildsReady](<https://github.com/disgoorg/disgo/blob/master/events/guild_events.go#L48-L50>)

GuildsReady is called when all discord.Guild\(s\) are loaded after logging in

```go
type GuildsReady struct {
    *GenericEvent
}
```

<a name="HeartbeatAck"></a>
## type [HeartbeatAck](<https://github.com/disgoorg/disgo/blob/master/events/heartbeat_ack.go#L5-L8>)



```go
type HeartbeatAck struct {
    *GenericEvent
    gateway.EventHeartbeatAck
}
```

<a name="IntegrationCreate"></a>
## type [IntegrationCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_integration_events.go#L23-L25>)

IntegrationCreate indicates that a new Integration was created in a Guild

```go
type IntegrationCreate struct {
    *GenericIntegration
}
```

<a name="IntegrationDelete"></a>
## type [IntegrationDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_integration_events.go#L33-L38>)

IntegrationDelete indicates that an Integration was deleted from a Guild

```go
type IntegrationDelete struct {
    *GenericEvent
    ID            snowflake.ID
    GuildID       snowflake.ID
    ApplicationID *snowflake.ID
}
```

<a name="IntegrationUpdate"></a>
## type [IntegrationUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_integration_events.go#L28-L30>)

IntegrationUpdate indicates that an integration was updated in a Guild

```go
type IntegrationUpdate struct {
    *GenericIntegration
}
```

<a name="InteractionCreate"></a>
## type [InteractionCreate](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L12-L16>)

InteractionCreate indicates that a new interaction has been created.

```go
type InteractionCreate struct {
    *GenericEvent
    discord.Interaction
    Respond InteractionResponderFunc
}
```

<a name="InteractionCreate.Guild"></a>
### func \(\*InteractionCreate\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L21>)

```go
func (e *InteractionCreate) Guild() (discord.Guild, bool)
```

Guild returns the guild that the interaction happened in if it happened in a guild. If the interaction happened in a DM, it returns nil. This only returns cached guilds.

<a name="InteractionResponderFunc"></a>
## type [InteractionResponderFunc](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L9>)

InteractionResponderFunc is a function that can be used to respond to a discord.Interaction.

```go
type InteractionResponderFunc func(responseType discord.InteractionResponseType, data discord.InteractionResponseData, opts ...rest.RequestOpt) error
```

<a name="InviteCreate"></a>
## type [InviteCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_invite_events.go#L23-L26>)

InviteCreate is called upon creation of a new discord.Invite \(requires gateway.IntentGuildInvites\)

```go
type InviteCreate struct {
    *GenericInvite
    Invite discord.Invite
}
```

<a name="InviteDelete"></a>
## type [InviteDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_invite_events.go#L29-L31>)

InviteDelete is called upon deletion of a discord.Invite \(requires gateway.IntentGuildInvites\)

```go
type InviteDelete struct {
    *GenericInvite
}
```

<a name="ListenerAdapter"></a>
## type [ListenerAdapter](<https://github.com/disgoorg/disgo/blob/master/events/listener_adapter.go#L13-L193>)

ListenerAdapter lets you override the handles for receiving events

```go
type ListenerAdapter struct {
    // raw event
    OnRaw func(event *Raw)

    // heartbeat ack event
    OnHeartbeatAck func(event *HeartbeatAck)

    // GuildApplicationCommandPermissionsUpdate
    OnGuildApplicationCommandPermissionsUpdate func(event *GuildApplicationCommandPermissionsUpdate)

    // AutoModeration
    OnAutoModerationRuleCreate      func(event *AutoModerationRuleCreate)
    OnAutoModerationRuleUpdate      func(event *AutoModerationRuleUpdate)
    OnAutoModerationRuleDelete      func(event *AutoModerationRuleDelete)
    OnAutoModerationActionExecution func(event *AutoModerationActionExecution)

    // Thread Events
    OnThreadCreate func(event *ThreadCreate)
    OnThreadUpdate func(event *ThreadUpdate)
    OnThreadDelete func(event *ThreadDelete)
    OnThreadShow   func(event *ThreadShow)
    OnThreadHide   func(event *ThreadHide)

    // ThreadMember Events
    OnThreadMemberAdd    func(event *ThreadMemberAdd)
    OnThreadMemberUpdate func(event *ThreadMemberUpdate)
    OnThreadMemberRemove func(event *ThreadMemberRemove)

    // Guild Channel Events
    OnGuildChannelCreate     func(event *GuildChannelCreate)
    OnGuildChannelUpdate     func(event *GuildChannelUpdate)
    OnGuildChannelDelete     func(event *GuildChannelDelete)
    OnGuildChannelPinsUpdate func(event *GuildChannelPinsUpdate)

    // DM Channel Events
    OnDMChannelPinsUpdate func(event *DMChannelPinsUpdate)

    // Channel Message Events
    OnDMMessageCreate func(event *DMMessageCreate)
    OnDMMessageUpdate func(event *DMMessageUpdate)
    OnDMMessageDelete func(event *DMMessageDelete)

    // Channel Reaction Events
    OnDMMessageReactionAdd         func(event *DMMessageReactionAdd)
    OnDMMessageReactionRemove      func(event *DMMessageReactionRemove)
    OnDMMessageReactionRemoveEmoji func(event *DMMessageReactionRemoveEmoji)
    OnDMMessageReactionRemoveAll   func(event *DMMessageReactionRemoveAll)

    // Emoji Events
    OnEmojisUpdate func(event *EmojisUpdate)
    OnEmojiCreate  func(event *EmojiCreate)
    OnEmojiUpdate  func(event *EmojiUpdate)
    OnEmojiDelete  func(event *EmojiDelete)

    // Entitlement Events
    OnEntitlementCreate func(event *EntitlementCreate)
    OnEntitlementUpdate func(event *EntitlementUpdate)
    OnEntitlementDelete func(event *EntitlementDelete)

    // Sticker Events
    OnStickersUpdate func(event *StickersUpdate)
    OnStickerCreate  func(event *StickerCreate)
    OnStickerUpdate  func(event *StickerUpdate)
    OnStickerDelete  func(event *StickerDelete)

    // gateway status Events
    OnReady   func(event *Ready)
    OnResumed func(event *Resumed)

    // Guild Events
    OnGuildJoin                func(event *GuildJoin)
    OnGuildUpdate              func(event *GuildUpdate)
    OnGuildLeave               func(event *GuildLeave)
    OnGuildAvailable           func(event *GuildAvailable)
    OnGuildUnavailable         func(event *GuildUnavailable)
    OnGuildReady               func(event *GuildReady)
    OnGuildsReady              func(event *GuildsReady)
    OnGuildBan                 func(event *GuildBan)
    OnGuildUnban               func(event *GuildUnban)
    OnGuildAuditLogEntryCreate func(event *GuildAuditLogEntryCreate)

    // Guild Invite Events
    OnGuildInviteCreate func(event *InviteCreate)
    OnGuildInviteDelete func(event *InviteDelete)

    // Guild Member Events
    OnGuildMemberJoin   func(event *GuildMemberJoin)
    OnGuildMemberUpdate func(event *GuildMemberUpdate)
    OnGuildMemberLeave  func(event *GuildMemberLeave)

    // Guild Message Events
    OnGuildMessageCreate func(event *GuildMessageCreate)
    OnGuildMessageUpdate func(event *GuildMessageUpdate)
    OnGuildMessageDelete func(event *GuildMessageDelete)

    // Guild Message Reaction Events
    OnGuildMessageReactionAdd         func(event *GuildMessageReactionAdd)
    OnGuildMessageReactionRemove      func(event *GuildMessageReactionRemove)
    OnGuildMessageReactionRemoveEmoji func(event *GuildMessageReactionRemoveEmoji)
    OnGuildMessageReactionRemoveAll   func(event *GuildMessageReactionRemoveAll)

    // Guild Voice Events
    OnVoiceServerUpdate     func(event *VoiceServerUpdate)
    OnGuildVoiceStateUpdate func(event *GuildVoiceStateUpdate)
    OnGuildVoiceJoin        func(event *GuildVoiceJoin)
    OnGuildVoiceMove        func(event *GuildVoiceMove)
    OnGuildVoiceLeave       func(event *GuildVoiceLeave)

    // Guild StageInstance Events
    OnStageInstanceCreate func(event *StageInstanceCreate)
    OnStageInstanceUpdate func(event *StageInstanceUpdate)
    OnStageInstanceDelete func(event *StageInstanceDelete)

    // Guild Role Events
    OnRoleCreate func(event *RoleCreate)
    OnRoleUpdate func(event *RoleUpdate)
    OnRoleDelete func(event *RoleDelete)

    // Guild Scheduled Events
    OnGuildScheduledEventCreate     func(event *GuildScheduledEventCreate)
    OnGuildScheduledEventUpdate     func(event *GuildScheduledEventUpdate)
    OnGuildScheduledEventDelete     func(event *GuildScheduledEventDelete)
    OnGuildScheduledEventUserAdd    func(event *GuildScheduledEventUserAdd)
    OnGuildScheduledEventUserRemove func(event *GuildScheduledEventUserRemove)

    // Interaction Events
    OnInteraction                   func(event *InteractionCreate)
    OnApplicationCommandInteraction func(event *ApplicationCommandInteractionCreate)
    OnComponentInteraction          func(event *ComponentInteractionCreate)
    OnAutocompleteInteraction       func(event *AutocompleteInteractionCreate)
    OnModalSubmit                   func(event *ModalSubmitInteractionCreate)

    // Message Events
    OnMessageCreate func(event *MessageCreate)
    OnMessageUpdate func(event *MessageUpdate)
    OnMessageDelete func(event *MessageDelete)

    // Message Poll Events
    OnMessagePollVoteAdd    func(event *MessagePollVoteAdd)
    OnMessagePollVoteRemove func(event *MessagePollVoteRemove)

    // DM Message Poll Events
    OnDMMessagePollVoteAdd    func(event *DMMessagePollVoteAdd)
    OnDMMessagePollVoteRemove func(event *DMMessagePollVoteRemove)

    // Guild Message Poll Events
    OnGuildMessagePollVoteAdd    func(event *GuildMessagePollVoteAdd)
    OnGuildMessagePollVoteRemove func(event *GuildMessagePollVoteRemove)

    // Message Reaction Events
    OnMessageReactionAdd         func(event *MessageReactionAdd)
    OnMessageReactionRemove      func(event *MessageReactionRemove)
    OnMessageReactionRemoveEmoji func(event *MessageReactionRemoveEmoji)
    OnMessageReactionRemoveAll   func(event *MessageReactionRemoveAll)

    // Self Events
    OnSelfUpdate func(event *SelfUpdate)

    // User Events
    OnUserUpdate             func(event *UserUpdate)
    OnUserTypingStart        func(event *UserTypingStart)
    OnGuildMemberTypingStart func(event *GuildMemberTypingStart)
    OnDMUserTypingStart      func(event *DMUserTypingStart)

    OnPresenceUpdate func(event *PresenceUpdate)

    // User Activity Events
    OnUserActivityStart  func(event *UserActivityStart)
    OnUserActivityUpdate func(event *UserActivityUpdate)
    OnUserActivityStop   func(event *UserActivityStop)

    OnUserStatusUpdate       func(event *UserStatusUpdate)
    OnUserClientStatusUpdate func(event *UserClientStatusUpdate)

    OnIntegrationCreate       func(event *IntegrationCreate)
    OnIntegrationUpdate       func(event *IntegrationUpdate)
    OnIntegrationDelete       func(event *IntegrationDelete)
    OnGuildIntegrationsUpdate func(event *GuildIntegrationsUpdate)

    OnGuildWebhooksUpdate func(event *WebhooksUpdate)
}
```

<a name="ListenerAdapter.OnEvent"></a>
### func \(\*ListenerAdapter\) [OnEvent](<https://github.com/disgoorg/disgo/blob/master/events/listener_adapter.go#L196>)

```go
func (l *ListenerAdapter) OnEvent(event bot.Event)
```

OnEvent is getting called everytime we receive an event

<a name="MessageCreate"></a>
## type [MessageCreate](<https://github.com/disgoorg/disgo/blob/master/events/message_events.go#L32-L34>)

MessageCreate indicates that a discord.Message got received

```go
type MessageCreate struct {
    *GenericMessage
}
```

<a name="MessageDelete"></a>
## type [MessageDelete](<https://github.com/disgoorg/disgo/blob/master/events/message_events.go#L43-L45>)

MessageDelete indicates that a discord.Message got deleted

```go
type MessageDelete struct {
    *GenericMessage
}
```

<a name="MessagePollVoteAdd"></a>
## type [MessagePollVoteAdd](<https://github.com/disgoorg/disgo/blob/master/events/message_poll_events.go#L27-L29>)

MessagePollVoteAdd indicates that a discord.User voted on a discord.Poll \(requires gateway.IntentGuildMessagePolls and/or gateway.IntentDirectMessagePolls\)

```go
type MessagePollVoteAdd struct {
    *GenericMessagePollVote
}
```

<a name="MessagePollVoteRemove"></a>
## type [MessagePollVoteRemove](<https://github.com/disgoorg/disgo/blob/master/events/message_poll_events.go#L32-L34>)

MessagePollVoteRemove indicates that a discord.User removed their vote on a discord.Poll \(requires gateway.IntentGuildMessagePolls and/or gateway.IntentDirectMessagePolls\)

```go
type MessagePollVoteRemove struct {
    *GenericMessagePollVote
}
```

<a name="MessageReactionAdd"></a>
## type [MessageReactionAdd](<https://github.com/disgoorg/disgo/blob/master/events/message_reaction_events.go#L22-L25>)

MessageReactionAdd indicates that a discord.User added a discord.MessageReaction to a discord.Message in a discord.Channel\(this\+\+\+ requires the gateway.IntentGuildMessageReactions and/or gateway.IntentDirectMessageReactions\)

```go
type MessageReactionAdd struct {
    *GenericReaction
    Member *discord.Member
}
```

<a name="MessageReactionRemove"></a>
## type [MessageReactionRemove](<https://github.com/disgoorg/disgo/blob/master/events/message_reaction_events.go#L28-L30>)

MessageReactionRemove indicates that a discord.User removed a discord.MessageReaction from a discord.Message in a discord.GetChannel\(requires the gateway.IntentGuildMessageReactions and/or gateway.IntentDirectMessageReactions\)

```go
type MessageReactionRemove struct {
    *GenericReaction
}
```

<a name="MessageReactionRemoveAll"></a>
## type [MessageReactionRemoveAll](<https://github.com/disgoorg/disgo/blob/master/events/message_reaction_events.go#L42-L47>)

MessageReactionRemoveAll indicates someone removed all discord.MessageReaction\(s\) from a discord.Message in a discord.Channel\(requires the gateway.IntentGuildMessageReactions and/or gateway.IntentDirectMessageReactions\)

```go
type MessageReactionRemoveAll struct {
    *GenericEvent
    ChannelID snowflake.ID
    MessageID snowflake.ID
    GuildID   *snowflake.ID
}
```

<a name="MessageReactionRemoveEmoji"></a>
## type [MessageReactionRemoveEmoji](<https://github.com/disgoorg/disgo/blob/master/events/message_reaction_events.go#L33-L39>)

MessageReactionRemoveEmoji indicates someone removed all discord.MessageReaction of a specific discord.Emoji from a discord.Message in a discord.Channel\(requires the gateway.IntentGuildMessageReactions and/or gateway.IntentDirectMessageReactions\)

```go
type MessageReactionRemoveEmoji struct {
    *GenericEvent
    ChannelID snowflake.ID
    MessageID snowflake.ID
    GuildID   *snowflake.ID
    Emoji     discord.PartialEmoji
}
```

<a name="MessageUpdate"></a>
## type [MessageUpdate](<https://github.com/disgoorg/disgo/blob/master/events/message_events.go#L37-L40>)

MessageUpdate indicates that a discord.Message got update

```go
type MessageUpdate struct {
    *GenericMessage
    OldMessage discord.Message
}
```

<a name="ModalSubmitInteractionCreate"></a>
## type [ModalSubmitInteractionCreate](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L143-L147>)

ModalSubmitInteractionCreate indicates that a new modal submit interaction has been created.

```go
type ModalSubmitInteractionCreate struct {
    *GenericEvent
    discord.ModalSubmitInteraction
    Respond InteractionResponderFunc
}
```

<a name="ModalSubmitInteractionCreate.CreateMessage"></a>
### func \(\*ModalSubmitInteractionCreate\) [CreateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L160>)

```go
func (e *ModalSubmitInteractionCreate) CreateMessage(messageCreate discord.MessageCreate, opts ...rest.RequestOpt) error
```

CreateMessage responds to the interaction with a new message.

<a name="ModalSubmitInteractionCreate.DeferCreateMessage"></a>
### func \(\*ModalSubmitInteractionCreate\) [DeferCreateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L165>)

```go
func (e *ModalSubmitInteractionCreate) DeferCreateMessage(ephemeral bool, opts ...rest.RequestOpt) error
```

DeferCreateMessage responds to the interaction with a "bot is thinking..." message which should be edited later.

<a name="ModalSubmitInteractionCreate.DeferUpdateMessage"></a>
### func \(\*ModalSubmitInteractionCreate\) [DeferUpdateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L179>)

```go
func (e *ModalSubmitInteractionCreate) DeferUpdateMessage(opts ...rest.RequestOpt) error
```

DeferUpdateMessage responds to the interaction with nothing.

<a name="ModalSubmitInteractionCreate.Guild"></a>
### func \(\*ModalSubmitInteractionCreate\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L152>)

```go
func (e *ModalSubmitInteractionCreate) Guild() (discord.Guild, bool)
```

Guild returns the guild that the interaction happened in if it happened in a guild. If the interaction happened in a DM, it returns nil. This only returns cached guilds.

<a name="ModalSubmitInteractionCreate.PremiumRequired"></a>
### func \(\*ModalSubmitInteractionCreate\) [PremiumRequired](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L184>)

```go
func (e *ModalSubmitInteractionCreate) PremiumRequired(opts ...rest.RequestOpt) error
```

PremiumRequired responds to the interaction with an upgrade button if available.

<a name="ModalSubmitInteractionCreate.UpdateMessage"></a>
### func \(\*ModalSubmitInteractionCreate\) [UpdateMessage](<https://github.com/disgoorg/disgo/blob/master/events/interaction_events.go#L174>)

```go
func (e *ModalSubmitInteractionCreate) UpdateMessage(messageUpdate discord.MessageUpdate, opts ...rest.RequestOpt) error
```

UpdateMessage responds to the interaction with updating the message the component is from.

<a name="PresenceUpdate"></a>
## type [PresenceUpdate](<https://github.com/disgoorg/disgo/blob/master/events/user_activity_events.go#L10-L13>)



```go
type PresenceUpdate struct {
    *GenericEvent
    gateway.EventPresenceUpdate
}
```

<a name="Raw"></a>
## type [Raw](<https://github.com/disgoorg/disgo/blob/master/events/raw_event.go#L5-L8>)



```go
type Raw struct {
    *GenericEvent
    gateway.EventRaw
}
```

<a name="Ready"></a>
## type [Ready](<https://github.com/disgoorg/disgo/blob/master/events/gateway_status_events.go#L6-L9>)

Ready indicates we received the Ready from the gateway.Gateway

```go
type Ready struct {
    *GenericEvent
    gateway.EventReady
}
```

<a name="Resumed"></a>
## type [Resumed](<https://github.com/disgoorg/disgo/blob/master/events/gateway_status_events.go#L12-L14>)

Resumed indicates disgo resumed the gateway.Gateway

```go
type Resumed struct {
    *GenericEvent
}
```

<a name="RoleCreate"></a>
## type [RoleCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_role_events.go#L18-L20>)

RoleCreate indicates that a discord.Role got created

```go
type RoleCreate struct {
    *GenericRole
}
```

<a name="RoleDelete"></a>
## type [RoleDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_role_events.go#L29-L31>)

RoleDelete indicates that a discord.Role got deleted

```go
type RoleDelete struct {
    *GenericRole
}
```

<a name="RoleUpdate"></a>
## type [RoleUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_role_events.go#L23-L26>)

RoleUpdate indicates that a discord.Role got updated

```go
type RoleUpdate struct {
    *GenericRole
    OldRole discord.Role
}
```

<a name="SelfUpdate"></a>
## type [SelfUpdate](<https://github.com/disgoorg/disgo/blob/master/events/self_update_events.go#L8-L12>)

SelfUpdate is called when something about this discord.User updates

```go
type SelfUpdate struct {
    *GenericEvent
    SelfUser    discord.OAuth2User
    OldSelfUser discord.OAuth2User
}
```

<a name="StageInstanceCreate"></a>
## type [StageInstanceCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_stage_instance_events.go#L17-L19>)

StageInstanceCreate indicates that a StageInstance got created

```go
type StageInstanceCreate struct {
    *GenericStageInstance
}
```

<a name="StageInstanceDelete"></a>
## type [StageInstanceDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_stage_instance_events.go#L28-L30>)

StageInstanceDelete indicates that a StageInstance got deleted

```go
type StageInstanceDelete struct {
    *GenericStageInstance
}
```

<a name="StageInstanceUpdate"></a>
## type [StageInstanceUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_stage_instance_events.go#L22-L25>)

StageInstanceUpdate indicates that a StageInstance got updated

```go
type StageInstanceUpdate struct {
    *GenericStageInstance
    OldStageInstance discord.StageInstance
}
```

<a name="StickerCreate"></a>
## type [StickerCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_sticker_events.go#L25-L27>)

StickerCreate indicates that a new discord.Sticker got created in a discord.Guild \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type StickerCreate struct {
    *GenericSticker
}
```

<a name="StickerDelete"></a>
## type [StickerDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_sticker_events.go#L36-L38>)

StickerDelete indicates that a discord.Sticker got deleted in a discord.Guild \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type StickerDelete struct {
    *GenericSticker
}
```

<a name="StickerUpdate"></a>
## type [StickerUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_sticker_events.go#L30-L33>)

StickerUpdate indicates that a discord.Sticker got updated in a discord.Guild \(requires gateway.IntentGuildEmojisAndStickers\)

```go
type StickerUpdate struct {
    *GenericSticker
    OldSticker discord.Sticker
}
```

<a name="StickersUpdate"></a>
## type [StickersUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_sticker_events.go#L12-L15>)

StickersUpdate is dispatched when a guild's stickers are updated. This event does not depend on a cache like StickerCreate, StickerUpdate or StickerDelete.

```go
type StickersUpdate struct {
    *GenericEvent
    gateway.EventGuildStickersUpdate
}
```

<a name="ThreadCreate"></a>
## type [ThreadCreate](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L19-L22>)

ThreadCreate is dispatched when a thread is created.

```go
type ThreadCreate struct {
    *GenericThread
    ThreadMember discord.ThreadMember
}
```

<a name="ThreadDelete"></a>
## type [ThreadDelete](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L31-L33>)

ThreadDelete is dispatched when a thread is deleted.

```go
type ThreadDelete struct {
    *GenericThread
}
```

<a name="ThreadHide"></a>
## type [ThreadHide](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L41-L43>)

ThreadHide is dispatched when your bot loses access to a thread.

```go
type ThreadHide struct {
    *GenericThread
}
```

<a name="ThreadMemberAdd"></a>
## type [ThreadMemberAdd](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L55-L59>)

ThreadMemberAdd is dispatched when a user is added to a thread.

```go
type ThreadMemberAdd struct {
    *GenericThreadMember
    Member   discord.Member
    Presence *discord.Presence
}
```

<a name="ThreadMemberRemove"></a>
## type [ThreadMemberRemove](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L68-L70>)

ThreadMemberRemove is dispatched when a user is removed from a thread.

```go
type ThreadMemberRemove struct {
    *GenericThreadMember
}
```

<a name="ThreadMemberUpdate"></a>
## type [ThreadMemberUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L62-L65>)

ThreadMemberUpdate is dispatched when a user is updated in a thread.

```go
type ThreadMemberUpdate struct {
    *GenericThreadMember
    OldThreadMember discord.ThreadMember
}
```

<a name="ThreadShow"></a>
## type [ThreadShow](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L36-L38>)

ThreadShow is dispatched when your bot gains access to a thread.

```go
type ThreadShow struct {
    *GenericThread
}
```

<a name="ThreadUpdate"></a>
## type [ThreadUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_thread_events.go#L25-L28>)

ThreadUpdate is dispatched when a thread is updated.

```go
type ThreadUpdate struct {
    *GenericThread
    OldThread discord.GuildThread
}
```

<a name="UserActivityStart"></a>
## type [UserActivityStart](<https://github.com/disgoorg/disgo/blob/master/events/user_activity_events.go#L36-L38>)

UserActivityStart indicates that a User started an Activity

```go
type UserActivityStart struct {
    *GenericUserActivity
}
```

<a name="UserActivityStop"></a>
## type [UserActivityStop](<https://github.com/disgoorg/disgo/blob/master/events/user_activity_events.go#L47-L49>)

UserActivityStop indicates that a User stopped an Activity

```go
type UserActivityStop struct {
    *GenericUserActivity
}
```

<a name="UserActivityUpdate"></a>
## type [UserActivityUpdate](<https://github.com/disgoorg/disgo/blob/master/events/user_activity_events.go#L41-L44>)

UserActivityUpdate indicates that a User updated their Activity

```go
type UserActivityUpdate struct {
    *GenericUserActivity
    OldActivity discord.Activity
}
```

<a name="UserClientStatusUpdate"></a>
## type [UserClientStatusUpdate](<https://github.com/disgoorg/disgo/blob/master/events/user_status_events.go#L18-L23>)

UserClientStatusUpdate generic client\-specific Status event

```go
type UserClientStatusUpdate struct {
    *GenericEvent
    UserID          snowflake.ID
    OldClientStatus discord.ClientStatus
    ClientStatus    discord.ClientStatus
}
```

<a name="UserStatusUpdate"></a>
## type [UserStatusUpdate](<https://github.com/disgoorg/disgo/blob/master/events/user_status_events.go#L10-L15>)

UserStatusUpdate generic Status event

```go
type UserStatusUpdate struct {
    *GenericEvent
    UserID    snowflake.ID
    OldStatus discord.OnlineStatus
    Status    discord.OnlineStatus
}
```

<a name="UserTypingStart"></a>
## type [UserTypingStart](<https://github.com/disgoorg/disgo/blob/master/events/user_events.go#L25-L31>)

UserTypingStart indicates that a discord.User started typing in a discord.DMChannel or discord.MessageChanel\(requires the gateway.IntentDirectMessageTyping and/or gateway.IntentGuildMessageTyping\)

```go
type UserTypingStart struct {
    *GenericEvent
    ChannelID snowflake.ID
    GuildID   *snowflake.ID
    UserID    snowflake.ID
    Timestamp time.Time
}
```

<a name="UserTypingStart.Channel"></a>
### func \(\*UserTypingStart\) [Channel](<https://github.com/disgoorg/disgo/blob/master/events/user_events.go#L34>)

```go
func (e *UserTypingStart) Channel() (discord.GuildMessageChannel, bool)
```

Channel returns the discord.GuildMessageChannel the discord.User started typing in

<a name="UserUpdate"></a>
## type [UserUpdate](<https://github.com/disgoorg/disgo/blob/master/events/user_events.go#L19-L22>)

UserUpdate indicates that a discord.User updated

```go
type UserUpdate struct {
    *GenericUser
    OldUser discord.User
}
```

<a name="VoiceServerUpdate"></a>
## type [VoiceServerUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_voice_events.go#L39-L42>)

VoiceServerUpdate indicates that a voice server the bot is connected to has been changed

```go
type VoiceServerUpdate struct {
    *GenericEvent
    gateway.EventVoiceServerUpdate
}
```

<a name="WebhooksUpdate"></a>
## type [WebhooksUpdate](<https://github.com/disgoorg/disgo/blob/master/events/guild_webhooks_update_events.go#L10-L14>)

WebhooksUpdate indicates that a guilds webhooks were updated.

```go
type WebhooksUpdate struct {
    *GenericEvent
    GuildId   snowflake.ID
    ChannelID snowflake.ID
}
```

<a name="WebhooksUpdate.Channel"></a>
### func \(\*WebhooksUpdate\) [Channel](<https://github.com/disgoorg/disgo/blob/master/events/guild_webhooks_update_events.go#L24>)

```go
func (e *WebhooksUpdate) Channel() (discord.GuildMessageChannel, bool)
```

Channel returns the discord.GuildMessageChannel the webhook was updated in. This will only return cached channels\!

<a name="WebhooksUpdate.Guild"></a>
### func \(\*WebhooksUpdate\) [Guild](<https://github.com/disgoorg/disgo/blob/master/events/guild_webhooks_update_events.go#L18>)

```go
func (e *WebhooksUpdate) Guild() (discord.Guild, bool)
```

Guild returns the Guild the webhook was updated in. This will only return cached guilds\!



# Cache

```go
import "github.com/disgoorg/disgo/cache"
```

Package cache provides a generic cache interface for Discord entities.

<a name="PolicyAll"></a>
## func [PolicyAll](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L14>)

```go
func PolicyAll[T any](_ T) bool
```

PolicyAll returns a policy that will cache all entities.

<a name="PolicyMembersPending"></a>
## func [PolicyMembersPending](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L24>)

```go
func PolicyMembersPending(member discord.Member) bool
```

PolicyMembersPending is a policy that will only cache members that are pending.

<a name="PolicyNone"></a>
## func [PolicyNone](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L11>)

```go
func PolicyNone[T any](_ T) bool
```

PolicyNone returns a policy that will never cache anything.

<a name="Cache"></a>
## type [Cache](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L14-L32>)

Cache is a simple key value store. They key is always a snowflake.ID. The cache provides a simple way to store and retrieve entities. But is not guaranteed to be thread safe as this depends on the underlying implementation.

```go
type Cache[T any] interface {
    // Get returns a copy of the entity with the given snowflake and a bool whether it was found or not.
    Get(id snowflake.ID) (T, bool)

    // Put stores the given entity with the given snowflake as key. If the entity is already present, it will be overwritten.
    Put(id snowflake.ID, entity T)

    // Remove removes the entity with the given snowflake as key and returns a copy of the entity and a bool whether it was removed or not.
    Remove(id snowflake.ID) (T, bool)

    // RemoveIf removes all entities that pass the given FilterFunc
    RemoveIf(filterFunc FilterFunc[T])

    // Len returns the number of entities in the cache.
    Len() int

    // ForEach calls the given function for each entity in the cache.
    ForEach(func(entity T))
}
```

<a name="NewCache"></a>
### func [NewCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L39>)

```go
func NewCache[T any](flags Flags, neededFlags Flags, policy Policy[T]) Cache[T]
```

NewCache returns a new DefaultCache implementation which filter the entities after the gives Flags and Policy. This cache implementation is thread safe and can be used in multiple goroutines without any issues. It also only hands out copies to the entities. Regardless these entities should be handles as immutable.

<a name="Caches"></a>
## type [Caches](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L675-L754>)

Caches combines all different entity caches into one with some utility methods.

```go
type Caches interface {
    SelfUserCache
    GuildCache
    ChannelCache
    StageInstanceCache
    GuildScheduledEventCache
    RoleCache
    MemberCache
    ThreadMemberCache
    PresenceCache
    VoiceStateCache
    MessageCache
    EmojiCache
    StickerCache

    // CacheFlags returns the current configured FLags of the caches.
    CacheFlags() Flags

    // MemberPermissions returns the calculated permissions of the given member.
    // This requires the FlagRoles to be set.
    MemberPermissions(member discord.Member) discord.Permissions

    // MemberPermissionsInChannel returns the calculated permissions of the given member in the given channel.
    // This requires the FlagRoles and FlagChannels to be set.
    MemberPermissionsInChannel(channel discord.GuildChannel, member discord.Member) discord.Permissions

    // MemberRoles returns all roles of the given member.
    // This requires the FlagRoles to be set.
    MemberRoles(member discord.Member) []discord.Role

    // AudioChannelMembers returns all members which are in the given audio channel.
    // This requires the FlagVoiceStates to be set.
    AudioChannelMembers(channel discord.GuildAudioChannel) []discord.Member

    // SelfMember returns the current bot member from the given guildID.
    // This is only available after we received the gateway.EventTypeGuildCreate event for the given guildID.
    SelfMember(guildID snowflake.ID) (discord.Member, bool)

    // GuildThreadsInChannel returns all discord.GuildThread from the ChannelCache and a bool indicating if it exists.
    GuildThreadsInChannel(channelID snowflake.ID) []discord.GuildThread

    // GuildMessageChannel returns a discord.GuildMessageChannel from the ChannelCache and a bool indicating if it exists.
    GuildMessageChannel(channelID snowflake.ID) (discord.GuildMessageChannel, bool)

    // GuildThread returns a discord.GuildThread from the ChannelCache and a bool indicating if it exists.
    GuildThread(channelID snowflake.ID) (discord.GuildThread, bool)

    // GuildAudioChannel returns a discord.GetGuildAudioChannel from the ChannelCache and a bool indicating if it exists.
    GuildAudioChannel(channelID snowflake.ID) (discord.GuildAudioChannel, bool)

    // GuildTextChannel returns a discord.GuildTextChannel from the ChannelCache and a bool indicating if it exists.
    GuildTextChannel(channelID snowflake.ID) (discord.GuildTextChannel, bool)

    // GuildVoiceChannel returns a discord.GuildVoiceChannel from the ChannelCache and a bool indicating if it exists.
    GuildVoiceChannel(channelID snowflake.ID) (discord.GuildVoiceChannel, bool)

    // GuildCategoryChannel returns a discord.GuildCategoryChannel from the ChannelCache and a bool indicating if it exists.
    GuildCategoryChannel(channelID snowflake.ID) (discord.GuildCategoryChannel, bool)

    // GuildNewsChannel returns a discord.GuildNewsChannel from the ChannelCache and a bool indicating if it exists.
    GuildNewsChannel(channelID snowflake.ID) (discord.GuildNewsChannel, bool)

    // GuildNewsThread returns a discord.GuildThread from the ChannelCache and a bool indicating if it exists.
    GuildNewsThread(channelID snowflake.ID) (discord.GuildThread, bool)

    // GuildPublicThread returns a discord.GuildThread from the ChannelCache and a bool indicating if it exists.
    GuildPublicThread(channelID snowflake.ID) (discord.GuildThread, bool)

    // GuildPrivateThread returns a discord.GuildThread from the ChannelCache and a bool indicating if it exists.
    GuildPrivateThread(channelID snowflake.ID) (discord.GuildThread, bool)

    // GuildStageVoiceChannel returns a discord.GuildStageVoiceChannel from the ChannelCache and a bool indicating if it exists.
    GuildStageVoiceChannel(channelID snowflake.ID) (discord.GuildStageVoiceChannel, bool)

    // GuildForumChannel returns a discord.GuildForumChannel from the ChannelCache and a bool indicating if it exists.
    GuildForumChannel(channelID snowflake.ID) (discord.GuildForumChannel, bool)

    // GuildMediaChannel returns a discord.GuildMediaChannel from the ChannelCache and a bool indicating if it exists.
    GuildMediaChannel(channelID snowflake.ID) (discord.GuildMediaChannel, bool)
}
```

<a name="New"></a>
### func [New](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L757>)

```go
func New(opts ...ConfigOpt) Caches
```

New returns a new default Caches instance with the given ConfigOpt\(s\) applied.

<a name="ChannelCache"></a>
## type [ChannelCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L133-L140>)



```go
type ChannelCache interface {
    Channel(channelID snowflake.ID) (discord.GuildChannel, bool)
    ChannelsForEach(fn func(channel discord.GuildChannel))
    ChannelsLen() int
    AddChannel(channel discord.GuildChannel)
    RemoveChannel(channelID snowflake.ID) (discord.GuildChannel, bool)
    RemoveChannelsByGuildID(guildID snowflake.ID)
}
```

<a name="NewChannelCache"></a>
### func [NewChannelCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L142>)

```go
func NewChannelCache(cache Cache[discord.GuildChannel]) ChannelCache
```



<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L28-L68>)

Config lets you configure your Caches instance.

```go
type Config struct {
    CacheFlags Flags

    SelfUserCache SelfUserCache

    GuildCache       GuildCache
    GuildCachePolicy Policy[discord.Guild]

    ChannelCache       ChannelCache
    ChannelCachePolicy Policy[discord.GuildChannel]

    StageInstanceCache       StageInstanceCache
    StageInstanceCachePolicy Policy[discord.StageInstance]

    GuildScheduledEventCache       GuildScheduledEventCache
    GuildScheduledEventCachePolicy Policy[discord.GuildScheduledEvent]

    RoleCache       RoleCache
    RoleCachePolicy Policy[discord.Role]

    MemberCache       MemberCache
    MemberCachePolicy Policy[discord.Member]

    ThreadMemberCache       ThreadMemberCache
    ThreadMemberCachePolicy Policy[discord.ThreadMember]

    PresenceCache       PresenceCache
    PresenceCachePolicy Policy[discord.Presence]

    VoiceStateCache       VoiceStateCache
    VoiceStateCachePolicy Policy[discord.VoiceState]

    MessageCache       MessageCache
    MessageCachePolicy Policy[discord.Message]

    EmojiCache       EmojiCache
    EmojiCachePolicy Policy[discord.Emoji]

    StickerCache       StickerCache
    StickerCachePolicy Policy[discord.Sticker]
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L10>)

```go
func DefaultConfig() *Config
```

DefaultConfig returns a Config with sensible defaults.

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L74>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L71>)

ConfigOpt is a type alias for a function that takes a Config and is used to configure your Caches.

```go
type ConfigOpt func(config *Config)
```

<a name="WithCaches"></a>
### func [WithCaches](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L120>)

```go
func WithCaches(flags ...Flags) ConfigOpt
```

WithCaches sets the Flags of the Config.

<a name="WithChannelCache"></a>
### func [WithChannelCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L148>)

```go
func WithChannelCache(channelCache ChannelCache) ConfigOpt
```

WithChannelCache sets the ChannelCache of the Config.

<a name="WithChannelCachePolicy"></a>
### func [WithChannelCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L141>)

```go
func WithChannelCachePolicy(policy Policy[discord.GuildChannel]) ConfigOpt
```

WithChannelCachePolicy sets the Policy\[discord.Channel\] of the Config.

<a name="WithEmojiCache"></a>
### func [WithEmojiCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L274>)

```go
func WithEmojiCache(emojiCache EmojiCache) ConfigOpt
```

WithEmojiCache sets the EmojiCache of the Config.

<a name="WithEmojiCachePolicy"></a>
### func [WithEmojiCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L267>)

```go
func WithEmojiCachePolicy(policy Policy[discord.Emoji]) ConfigOpt
```

WithEmojiCachePolicy sets the Policy\[discord.Emoji\] of the Config.

<a name="WithGuildCache"></a>
### func [WithGuildCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L134>)

```go
func WithGuildCache(guildCache GuildCache) ConfigOpt
```

WithGuildCache sets the GuildCache of the Config.

<a name="WithGuildCachePolicy"></a>
### func [WithGuildCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L127>)

```go
func WithGuildCachePolicy(policy Policy[discord.Guild]) ConfigOpt
```

WithGuildCachePolicy sets the Policy\[discord.Guild\] of the Config.

<a name="WithGuildScheduledEventCache"></a>
### func [WithGuildScheduledEventCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L176>)

```go
func WithGuildScheduledEventCache(guildScheduledEventCache GuildScheduledEventCache) ConfigOpt
```

WithGuildScheduledEventCache sets the GuildScheduledEventCache of the Config.

<a name="WithGuildScheduledEventCachePolicy"></a>
### func [WithGuildScheduledEventCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L169>)

```go
func WithGuildScheduledEventCachePolicy(policy Policy[discord.GuildScheduledEvent]) ConfigOpt
```

WithGuildScheduledEventCachePolicy sets the Policy\[discord.GuildScheduledEvent\] of the Config.

<a name="WithMemberCache"></a>
### func [WithMemberCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L204>)

```go
func WithMemberCache(memberCache MemberCache) ConfigOpt
```

WithMemberCache sets the MemberCache of the Config.

<a name="WithMemberCachePolicy"></a>
### func [WithMemberCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L197>)

```go
func WithMemberCachePolicy(policy Policy[discord.Member]) ConfigOpt
```

WithMemberCachePolicy sets the Policy\[discord.Member\] of the Config.

<a name="WithMessageCache"></a>
### func [WithMessageCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L260>)

```go
func WithMessageCache(messageCache MessageCache) ConfigOpt
```

WithMessageCache sets the MessageCache of the Config.

<a name="WithMessageCachePolicy"></a>
### func [WithMessageCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L253>)

```go
func WithMessageCachePolicy(policy Policy[discord.Message]) ConfigOpt
```

WithMessageCachePolicy sets the Policy\[discord.Message\] of the Config.

<a name="WithPresenceCache"></a>
### func [WithPresenceCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L232>)

```go
func WithPresenceCache(presenceCache PresenceCache) ConfigOpt
```

WithPresenceCache sets the PresenceCache of the Config.

<a name="WithPresenceCachePolicy"></a>
### func [WithPresenceCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L225>)

```go
func WithPresenceCachePolicy(policy Policy[discord.Presence]) ConfigOpt
```

WithPresenceCachePolicy sets the Policy\[discord.Presence\] of the Config.

<a name="WithRoleCache"></a>
### func [WithRoleCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L190>)

```go
func WithRoleCache(roleCache RoleCache) ConfigOpt
```

WithRoleCache sets the RoleCache of the Config.

<a name="WithRoleCachePolicy"></a>
### func [WithRoleCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L183>)

```go
func WithRoleCachePolicy(policy Policy[discord.Role]) ConfigOpt
```

WithRoleCachePolicy sets the Policy\[discord.Role\] of the Config.

<a name="WithStageInstanceCache"></a>
### func [WithStageInstanceCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L162>)

```go
func WithStageInstanceCache(stageInstanceCache StageInstanceCache) ConfigOpt
```

WithStageInstanceCache sets the StageInstanceCache of the Config.

<a name="WithStageInstanceCachePolicy"></a>
### func [WithStageInstanceCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L155>)

```go
func WithStageInstanceCachePolicy(policy Policy[discord.StageInstance]) ConfigOpt
```

WithStageInstanceCachePolicy sets the Policy\[discord.Guild\] of the Config.

<a name="WithStickerCache"></a>
### func [WithStickerCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L288>)

```go
func WithStickerCache(stickerCache StickerCache) ConfigOpt
```

WithStickerCache sets the StickerCache of the Config.

<a name="WithStickerCachePolicy"></a>
### func [WithStickerCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L281>)

```go
func WithStickerCachePolicy(policy Policy[discord.Sticker]) ConfigOpt
```

WithStickerCachePolicy sets the Policy\[discord.Sticker\] of the Config.

<a name="WithThreadMemberCache"></a>
### func [WithThreadMemberCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L218>)

```go
func WithThreadMemberCache(threadMemberCache ThreadMemberCache) ConfigOpt
```

WithThreadMemberCache sets the ThreadMemberCache of the Config.

<a name="WithThreadMemberCachePolicy"></a>
### func [WithThreadMemberCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L211>)

```go
func WithThreadMemberCachePolicy(policy Policy[discord.ThreadMember]) ConfigOpt
```

WithThreadMemberCachePolicy sets the Policy\[discord.ThreadMember\] of the Config.

<a name="WithVoiceStateCache"></a>
### func [WithVoiceStateCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L246>)

```go
func WithVoiceStateCache(voiceStateCache VoiceStateCache) ConfigOpt
```

WithVoiceStateCache sets the VoiceStateCache of the Config.

<a name="WithVoiceStateCachePolicy"></a>
### func [WithVoiceStateCachePolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_config.go#L239>)

```go
func WithVoiceStateCachePolicy(policy Policy[discord.VoiceState]) ConfigOpt
```

WithVoiceStateCachePolicy sets the Policy\[discord.VoiceState\] of the Config.

<a name="DefaultCache"></a>
## type [DefaultCache](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L49-L55>)

DefaultCache is a simple thread safe cache key value store.

```go
type DefaultCache[T any] struct {
    // contains filtered or unexported fields
}
```

<a name="DefaultCache[T].ForEach"></a>
### func \(\*DefaultCache\[T\]\) [ForEach](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L102>)

```go
func (c *DefaultCache[T]) ForEach(forEachFunc func(entity T))
```



<a name="DefaultCache[T].Get"></a>
### func \(\*DefaultCache\[T\]\) [Get](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L57>)

```go
func (c *DefaultCache[T]) Get(id snowflake.ID) (T, bool)
```



<a name="DefaultCache[T].Len"></a>
### func \(\*DefaultCache\[T\]\) [Len](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L96>)

```go
func (c *DefaultCache[T]) Len() int
```



<a name="DefaultCache[T].Put"></a>
### func \(\*DefaultCache\[T\]\) [Put](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L64>)

```go
func (c *DefaultCache[T]) Put(id snowflake.ID, entity T)
```



<a name="DefaultCache[T].Remove"></a>
### func \(\*DefaultCache\[T\]\) [Remove](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L76>)

```go
func (c *DefaultCache[T]) Remove(id snowflake.ID) (T, bool)
```



<a name="DefaultCache[T].RemoveIf"></a>
### func \(\*DefaultCache\[T\]\) [RemoveIf](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L86>)

```go
func (c *DefaultCache[T]) RemoveIf(filterFunc FilterFunc[T])
```



<a name="EmojiCache"></a>
## type [EmojiCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L575-L583>)



```go
type EmojiCache interface {
    Emoji(guildID snowflake.ID, emojiID snowflake.ID) (discord.Emoji, bool)
    EmojisForEach(guildID snowflake.ID, fn func(emoji discord.Emoji))
    EmojisAllLen() int
    EmojisLen(guildID snowflake.ID) int
    AddEmoji(emoji discord.Emoji)
    RemoveEmoji(guildID snowflake.ID, emojiID snowflake.ID) (discord.Emoji, bool)
    RemoveEmojisByGuildID(guildID snowflake.ID)
}
```

<a name="NewEmojiCache"></a>
### func [NewEmojiCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L585>)

```go
func NewEmojiCache(cache GroupedCache[discord.Emoji]) EmojiCache
```



<a name="FilterFunc"></a>
## type [FilterFunc](<https://github.com/disgoorg/disgo/blob/master/cache/cache.go#L10>)

FilterFunc is used to filter cached entities.

```go
type FilterFunc[T any] func(T) bool
```

<a name="Flags"></a>
## type [Flags](<https://github.com/disgoorg/disgo/blob/master/cache/cache_flags.go#L6>)

Flags are used to enable/disable certain internal caches

```go
type Flags int
```

<a name="FlagGuilds"></a>values for CacheFlags

```go
const (
    FlagGuilds Flags = 1 << iota
    FlagGuildScheduledEvents
    FlagMembers
    FlagThreadMembers
    FlagMessages
    FlagPresences
    FlagChannels
    FlagRoles
    FlagEmojis
    FlagStickers
    FlagVoiceStates
    FlagStageInstances

    FlagsNone Flags = 0
    FlagsAll        = FlagGuilds |
        FlagGuildScheduledEvents |
        FlagMembers |
        FlagThreadMembers |
        FlagMessages |
        FlagPresences |
        FlagChannels |
        FlagRoles |
        FlagEmojis |
        FlagStickers |
        FlagVoiceStates |
        FlagStageInstances
)
```

<a name="Flags.Add"></a>
### func \(Flags\) [Add](<https://github.com/disgoorg/disgo/blob/master/cache/cache_flags.go#L39>)

```go
func (f Flags) Add(bits ...Flags) Flags
```

Add allows you to add multiple bits together, producing a new bit

<a name="Flags.Has"></a>
### func \(Flags\) [Has](<https://github.com/disgoorg/disgo/blob/master/cache/cache_flags.go#L49>)

```go
func (f Flags) Has(bits ...Flags) bool
```

Has will ensure that the bit includes all the bits entered

<a name="Flags.Missing"></a>
### func \(Flags\) [Missing](<https://github.com/disgoorg/disgo/blob/master/cache/cache_flags.go#L54>)

```go
func (f Flags) Missing(bits ...Flags) bool
```

Missing will check whether the bit is missing any one of the bits

<a name="Flags.Remove"></a>
### func \(Flags\) [Remove](<https://github.com/disgoorg/disgo/blob/master/cache/cache_flags.go#L44>)

```go
func (f Flags) Remove(bits ...Flags) Flags
```

Remove allows you to subtract multiple bits from the first, producing a new bit

<a name="GroupedCache"></a>
## type [GroupedCache](<https://github.com/disgoorg/disgo/blob/master/cache/grouped_cache.go#L14-L44>)

GroupedCache is a simple key value store grouped by a snowflake.ID. They key is always a snowflake.ID. The cache provides a simple way to store and retrieve entities. But is not guaranteed to be thread safe as this depends on the underlying implementation.

```go
type GroupedCache[T any] interface {
    // Get returns a copy of the entity with the given groupID and ID and a bool wheaten it was found or not.
    Get(groupID snowflake.ID, id snowflake.ID) (T, bool)

    // Put stores the given entity with the given groupID and ID as key. If the entity is already present, it will be overwritten.
    Put(groupID snowflake.ID, id snowflake.ID, entity T)

    // Remove removes the entity with the given groupID and ID as key and returns a copy of the entity and a bool whether it was removed or not.
    Remove(groupID snowflake.ID, id snowflake.ID) (T, bool)

    // GroupRemove removes all entities in the given groupID.
    GroupRemove(groupID snowflake.ID)

    // RemoveIf removes all entities that pass the given GroupedFilterFunc.
    RemoveIf(filterFunc GroupedFilterFunc[T])

    // GroupRemoveIf removes all entities that pass the given GroupedFilterFunc within the groupID.
    GroupRemoveIf(groupID snowflake.ID, filterFunc GroupedFilterFunc[T])

    // Len returns the total number of entities in the cache.
    Len() int

    // GroupLen returns the number of entities in the cache within the groupID.
    GroupLen(groupID snowflake.ID) int

    // ForEach calls the given function for each entity in the cache.
    ForEach(func(groupID snowflake.ID, entity T))

    // GroupForEach calls the given function for each entity in the cache within the groupID.
    GroupForEach(groupID snowflake.ID, forEachFunc func(entity T))
}
```

<a name="NewGroupedCache"></a>
### func [NewGroupedCache](<https://github.com/disgoorg/disgo/blob/master/cache/grouped_cache.go#L49>)

```go
func NewGroupedCache[T any](flags Flags, neededFlags Flags, policy Policy[T]) GroupedCache[T]
```

NewGroupedCache returns a new default GroupedCache with the provided flags, neededFlags and policy.

<a name="GroupedFilterFunc"></a>
## type [GroupedFilterFunc](<https://github.com/disgoorg/disgo/blob/master/cache/grouped_cache.go#L10>)

GroupedFilterFunc is used to filter grouped cached entities.

```go
type GroupedFilterFunc[T any] func(groupID snowflake.ID, entity T) bool
```

<a name="GuildCache"></a>
## type [GuildCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L43-L57>)



```go
type GuildCache interface {
    IsGuildUnready(guildID snowflake.ID) bool
    SetGuildUnready(guildID snowflake.ID, unready bool)
    UnreadyGuildIDs() []snowflake.ID

    IsGuildUnavailable(guildID snowflake.ID) bool
    SetGuildUnavailable(guildID snowflake.ID, unavailable bool)
    UnavailableGuildIDs() []snowflake.ID

    Guild(guildID snowflake.ID) (discord.Guild, bool)
    GuildsForEach(fn func(guild discord.Guild))
    GuildsLen() int
    AddGuild(guild discord.Guild)
    RemoveGuild(guildID snowflake.ID) (discord.Guild, bool)
}
```

<a name="NewGuildCache"></a>
### func [NewGuildCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L59>)

```go
func NewGuildCache(cache Cache[discord.Guild], unreadyGuilds Set[snowflake.ID], unavailableGuilds Set[snowflake.ID]) GuildCache
```



<a name="GuildScheduledEventCache"></a>
## type [GuildScheduledEventCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L228-L236>)



```go
type GuildScheduledEventCache interface {
    GuildScheduledEvent(guildID snowflake.ID, guildScheduledEventID snowflake.ID) (discord.GuildScheduledEvent, bool)
    GuildScheduledEventsForEach(guildID snowflake.ID, fn func(guildScheduledEvent discord.GuildScheduledEvent))
    GuildScheduledEventsAllLen() int
    GuildScheduledEventsLen(guildID snowflake.ID) int
    AddGuildScheduledEvent(guildScheduledEvent discord.GuildScheduledEvent)
    RemoveGuildScheduledEvent(guildID snowflake.ID, guildScheduledEventID snowflake.ID) (discord.GuildScheduledEvent, bool)
    RemoveGuildScheduledEventsByGuildID(guildID snowflake.ID)
}
```

<a name="NewGuildScheduledEventCache"></a>
### func [NewGuildScheduledEventCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L238>)

```go
func NewGuildScheduledEventCache(cache GroupedCache[discord.GuildScheduledEvent]) GuildScheduledEventCache
```



<a name="MemberCache"></a>
## type [MemberCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L324-L332>)



```go
type MemberCache interface {
    Member(guildID snowflake.ID, userID snowflake.ID) (discord.Member, bool)
    MembersForEach(guildID snowflake.ID, fn func(member discord.Member))
    MembersAllLen() int
    MembersLen(guildID snowflake.ID) int
    AddMember(member discord.Member)
    RemoveMember(guildID snowflake.ID, userID snowflake.ID) (discord.Member, bool)
    RemoveMembersByGuildID(guildID snowflake.ID)
}
```

<a name="NewMemberCache"></a>
### func [NewMemberCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L334>)

```go
func NewMemberCache(cache GroupedCache[discord.Member]) MemberCache
```



<a name="MessageCache"></a>
## type [MessageCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L520-L529>)



```go
type MessageCache interface {
    Message(channelID snowflake.ID, messageID snowflake.ID) (discord.Message, bool)
    MessagesForEach(channelID snowflake.ID, fn func(message discord.Message))
    MessagesAllLen() int
    MessagesLen(guildID snowflake.ID) int
    AddMessage(message discord.Message)
    RemoveMessage(channelID snowflake.ID, messageID snowflake.ID) (discord.Message, bool)
    RemoveMessagesByChannelID(channelID snowflake.ID)
    RemoveMessagesByGuildID(guildID snowflake.ID)
}
```

<a name="NewMessageCache"></a>
### func [NewMessageCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L531>)

```go
func NewMessageCache(cache GroupedCache[discord.Message]) MessageCache
```



<a name="Policy"></a>
## type [Policy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L51>)

Policy can be used to define your own policy for when entities should be cached.

```go
type Policy[T any] func(entity T) bool
```

<a name="AllPolicies"></a>
### func [AllPolicies](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L81>)

```go
func AllPolicies[T any](policies ...Policy[T]) Policy[T]
```

AllPolicies is a shorthand for CachePolicy.And\(CachePolicy\).And\(CachePolicy\) etc.

<a name="AnyPolicy"></a>
### func [AnyPolicy](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L68>)

```go
func AnyPolicy[T any](policies ...Policy[T]) Policy[T]
```

AnyPolicy is a shorthand for CachePolicy.Or\(CachePolicy\).Or\(CachePolicy\) etc.

<a name="PolicyChannelExclude"></a>
### func [PolicyChannelExclude](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L44>)

```go
func PolicyChannelExclude(channelTypes ...discord.ChannelType) Policy[discord.Channel]
```

PolicyChannelExclude returns a policy that will not cache channels of the given types.

<a name="PolicyChannelInclude"></a>
### func [PolicyChannelInclude](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L37>)

```go
func PolicyChannelInclude(channelTypes ...discord.ChannelType) Policy[discord.Channel]
```

PolicyChannelInclude returns a policy that will only cache channels of the given types.

<a name="PolicyMembersInVoice"></a>
### func [PolicyMembersInVoice](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L29>)

```go
func PolicyMembersInVoice(caches Caches) Policy[discord.Member]
```

PolicyMembersInVoice returns a policy that will only cache members that are connected to an audio channel.

<a name="PolicyMembersInclude"></a>
### func [PolicyMembersInclude](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L17>)

```go
func PolicyMembersInclude(guildIDs ...snowflake.ID) Policy[discord.Member]
```

PolicyMembersInclude returns a policy that will only cache members of the given guilds.

<a name="Policy[T].And"></a>
### func \(Policy\[T\]\) [And](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L61>)

```go
func (p Policy[T]) And(policy Policy[T]) Policy[T]
```

And allows you to require both CachePolicy\(s\) to be true for the entity to be cached

<a name="Policy[T].Or"></a>
### func \(Policy\[T\]\) [Or](<https://github.com/disgoorg/disgo/blob/master/cache/cache_policy.go#L54>)

```go
func (p Policy[T]) Or(policy Policy[T]) Policy[T]
```

Or allows you to combine the CachePolicy with another, meaning either of them needs to be true

<a name="PresenceCache"></a>
## type [PresenceCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L422-L430>)



```go
type PresenceCache interface {
    Presence(guildID snowflake.ID, userID snowflake.ID) (discord.Presence, bool)
    PresenceForEach(guildID snowflake.ID, fn func(presence discord.Presence))
    PresencesAllLen() int
    PresencesLen(guildID snowflake.ID) int
    AddPresence(presence discord.Presence)
    RemovePresence(guildID snowflake.ID, userID snowflake.ID) (discord.Presence, bool)
    RemovePresencesByGuildID(guildID snowflake.ID)
}
```

<a name="NewPresenceCache"></a>
### func [NewPresenceCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L432>)

```go
func NewPresenceCache(cache GroupedCache[discord.Presence]) PresenceCache
```



<a name="RoleCache"></a>
## type [RoleCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L276-L284>)



```go
type RoleCache interface {
    Role(guildID snowflake.ID, roleID snowflake.ID) (discord.Role, bool)
    RolesForEach(guildID snowflake.ID, fn func(role discord.Role))
    RolesAllLen() int
    RolesLen(guildID snowflake.ID) int
    AddRole(role discord.Role)
    RemoveRole(guildID snowflake.ID, roleID snowflake.ID) (discord.Role, bool)
    RemoveRolesByGuildID(guildID snowflake.ID)
}
```

<a name="NewRoleCache"></a>
### func [NewRoleCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L286>)

```go
func NewRoleCache(cache GroupedCache[discord.Role]) RoleCache
```



<a name="SelfUserCache"></a>
## type [SelfUserCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L12-L15>)



```go
type SelfUserCache interface {
    SelfUser() (discord.OAuth2User, bool)
    SetSelfUser(selfUser discord.OAuth2User)
}
```

<a name="NewSelfUserCache"></a>
### func [NewSelfUserCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L17>)

```go
func NewSelfUserCache() SelfUserCache
```



<a name="Set"></a>
## type [Set](<https://github.com/disgoorg/disgo/blob/master/cache/set.go#L6-L19>)

Set is a collection of unique items. It should be thread\-safe.

```go
type Set[T comparable] interface {
    // Add adds an item to the set.
    Add(item T)
    // Remove removes an item from the set.
    Remove(item T)
    // Has returns true if the item is in the set, false otherwise.
    Has(item T) bool
    // Len returns the number of items in the set.
    Len() int
    // Clear removes all items from the set.
    Clear()
    // ForEach iterates over the items in the set.
    ForEach(f func(item T))
}
```

<a name="NewSet"></a>
### func [NewSet](<https://github.com/disgoorg/disgo/blob/master/cache/set.go#L27>)

```go
func NewSet[T comparable]() Set[T]
```

NewSet returns a thread\-safe in memory implementation of a set.

<a name="StageInstanceCache"></a>
## type [StageInstanceCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L178-L186>)



```go
type StageInstanceCache interface {
    StageInstance(guildID snowflake.ID, stageInstanceID snowflake.ID) (discord.StageInstance, bool)
    StageInstanceForEach(guildID snowflake.ID, fn func(stageInstance discord.StageInstance))
    StageInstancesAllLen() int
    StageInstancesLen(guildID snowflake.ID) int
    AddStageInstance(stageInstance discord.StageInstance)
    RemoveStageInstance(guildID snowflake.ID, stageInstanceID snowflake.ID) (discord.StageInstance, bool)
    RemoveStageInstancesByGuildID(guildID snowflake.ID)
}
```

<a name="NewStageInstanceCache"></a>
### func [NewStageInstanceCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L188>)

```go
func NewStageInstanceCache(cache GroupedCache[discord.StageInstance]) StageInstanceCache
```



<a name="StickerCache"></a>
## type [StickerCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L623-L631>)



```go
type StickerCache interface {
    Sticker(guildID snowflake.ID, stickerID snowflake.ID) (discord.Sticker, bool)
    StickersForEach(guildID snowflake.ID, fn func(sticker discord.Sticker))
    StickersAllLen() int
    StickersLen(guildID snowflake.ID) int
    AddSticker(sticker discord.Sticker)
    RemoveSticker(guildID snowflake.ID, stickerID snowflake.ID) (discord.Sticker, bool)
    RemoveStickersByGuildID(guildID snowflake.ID)
}
```

<a name="NewStickerCache"></a>
### func [NewStickerCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L633>)

```go
func NewStickerCache(cache GroupedCache[discord.Sticker]) StickerCache
```



<a name="ThreadMemberCache"></a>
## type [ThreadMemberCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L372-L380>)



```go
type ThreadMemberCache interface {
    ThreadMember(threadID snowflake.ID, userID snowflake.ID) (discord.ThreadMember, bool)
    ThreadMemberForEach(threadID snowflake.ID, fn func(threadMember discord.ThreadMember))
    ThreadMembersAllLen() int
    ThreadMembersLen(guildID snowflake.ID) int
    AddThreadMember(threadMember discord.ThreadMember)
    RemoveThreadMember(threadID snowflake.ID, userID snowflake.ID) (discord.ThreadMember, bool)
    RemoveThreadMembersByThreadID(threadID snowflake.ID)
}
```

<a name="NewThreadMemberCache"></a>
### func [NewThreadMemberCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L382>)

```go
func NewThreadMemberCache(cache GroupedCache[discord.ThreadMember]) ThreadMemberCache
```



<a name="VoiceStateCache"></a>
## type [VoiceStateCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L472-L480>)



```go
type VoiceStateCache interface {
    VoiceState(guildID snowflake.ID, userID snowflake.ID) (discord.VoiceState, bool)
    VoiceStatesForEach(guildID snowflake.ID, fn func(discord.VoiceState))
    VoiceStatesAllLen() int
    VoiceStatesLen(guildID snowflake.ID) int
    AddVoiceState(voiceState discord.VoiceState)
    RemoveVoiceState(guildID snowflake.ID, userID snowflake.ID) (discord.VoiceState, bool)
    RemoveVoiceStatesByGuildID(guildID snowflake.ID)
}
```

<a name="NewVoiceStateCache"></a>
### func [NewVoiceStateCache](<https://github.com/disgoorg/disgo/blob/master/cache/caches.go#L482>)

```go
func NewVoiceStateCache(cache GroupedCache[discord.VoiceState]) VoiceStateCache
```



Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)

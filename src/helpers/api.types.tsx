export interface WallDataDTO {
    kind: string;
    data: WallDataDTOData;
}

export interface WallDataDTOData {
    after:      string;
    dist:       number;
    modhash:    string;
    geo_filter: null;
    children:   Child[];
    before:     null;
}

export interface Child {
    kind: Kind;
    data: DataElement;
}

export interface DataElement {
    approved_at_utc:               null;
    subreddit:                     Subreddit;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           any[];
    subreddit_name_prefixed:       SubredditNamePrefixed;
    hidden:                        boolean;
    pwls:                          number;
    link_flair_css_class:          null | string;
    downs:                         number;
    thumbnail_height:              number | null;
    top_awarded_type:              null;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         LinkFlairTextColor;
    upvote_ratio:                  number;
    author_flair_background_color: null;
    subreddit_type:                SubredditType;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   Gildings;
    thumbnail_width:               number | null;
    author_flair_template_id:      null;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  null;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            Gildings;
    link_flair_text?:               null | string;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    is_created_from_ads_ui:        boolean;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean;
    author_flair_css_class:        null;
    author_flair_richtext:         any[];
    gildings:                      Gildings;
    post_hint?:                    PostHint;
    content_categories:            null;
    is_self:                       boolean;
    mod_note:                      null;
    created:                       number;
    link_flair_type:               FlairType;
    wls:                           number;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             FlairType;
    domain:                        Domain;
    allow_live_comments:           boolean;
    selftext_html:                 null | string;
    likes:                         null;
    suggested_sort:                null;
    banned_at_utc:                 null;
    url_overridden_by_dest?:       string;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    preview?:                      Preview;
    all_awardings:                 any[];
    awarders:                      any[];
    media_only:                    boolean;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null;
    treatment_tags:                any[];
    visited:                       boolean;
    removed_by:                    null;
    num_reports:                   null;
    distinguished:                 null;
    subreddit_id:                  SubredditID;
    author_is_blocked:             boolean;
    mod_reason_by:                 null;
    removal_reason:                null;
    link_flair_background_color:   LinkFlairBackgroundColor;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              WhitelistStatus;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       null;
    permalink:                     string;
    parent_whitelist_status:       WhitelistStatus;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         null;
    is_video:                      boolean;
    is_gallery?:                   boolean;
    media_metadata?:               { [key: string]: MediaMetadatum };
    gallery_data?:                 GalleryData;
    crosspost_parent_list?:        DataElement[];
    crosspost_parent?:             string;
    link_flair_template_id?:       string;
}

export enum FlairType {
    Text = "text",
}

export enum Domain {
    IReddIt = "i.redd.it",
    RedditCOM = "reddit.com",
    SelfWallpapers = "self.wallpapers",
}

export interface GalleryData {
    items: Item[];
}

export interface Item {
    media_id: string;
    id:       number;
    caption?: string;
}

export interface Gildings {
}

export enum LinkFlairBackgroundColor {
    Empty = "",
    The7193Ff = "#7193ff",
}

export enum LinkFlairTextColor {
    Dark = "dark",
    Light = "light",
}

export interface MediaMetadatum {
    status: Status;
    e:      E;
    m:      M;
    p:      S[];
    s:      S;
    id:     string;
}

export enum E {
    Image = "Image",
}

export enum M {
    ImageJpg = "image/jpg",
    ImagePNG = "image/png",
}

export interface S {
    y: number;
    x: number;
    u: string;
}

export enum Status {
    Valid = "valid",
}

export enum WhitelistStatus {
    AllAds = "all_ads",
}

export enum PostHint {
    Image = "image",
}

export interface Preview {
    images:  Image[];
    enabled: boolean;
}

export interface Image {
    source:      Source;
    resolutions: Source[];
    variants:    Gildings;
    id:          string;
}

export interface Source {
    url:    string;
    width:  number;
    height: number;
}

export enum Subreddit {
    Wallpaper = "wallpaper",
    Wallpapers = "wallpapers",
}

export enum SubredditID {
    T52Qhw4 = "t5_2qhw4",
    T52Qmjl = "t5_2qmjl",
}

export enum SubredditNamePrefixed {
    RWallpaper = "r/wallpaper",
    RWallpapers = "r/wallpapers",
}

export enum SubredditType {
    Public = "public",
}

export enum Kind {
    T3 = "t3",
}
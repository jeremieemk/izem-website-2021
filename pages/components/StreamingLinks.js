export default function StreamingLinks(props) {
  const post = props.post;
  const platforms = ["spotify", "bandcamp", "youtube", "soundcloud"];
  const showIcon =
    post &&
    (post.data.bandcamp.url ||
      post.data.spotify.url ||
      post.data.youtube.url ||
      post.data.soundcloud.url);

  return (
    <div className="flex items-center">
      {post && showIcon && (
        <img className="h-4 mr-2 invert" src="/img/listen.png" alt="listen-icon" />
      )}
      {platforms.map((platform) => {
        return (
          post &&
          post.data[platform].url && (
            <a
              href={post.data[platform].url}
              target="_blank"
              className=" transform duration-200 rounded-[5px] hover:scale-105 hover:opacity-100 highlight--secondary mr-2 text-xs  md:text-sm h-6"
              key={platform}
            >
              {platform}
            </a>
          )
        );
      })}
    </div>
  );
}

export default function StreamingLinks(props) {
  const post = props.post;
  const platforms = ["spotify", "bandcamp", "youtube", "soundcloud"];
  const showIcon =
    post.data.bandcamp.url ||
    post.data.spotify.url ||
    post.data.youtube.url ||
    post.data.soundcloud.url;
  return (
    <div className="flex items-center">
      {showIcon && (
        <img className="h-4 mr-2" src="/img/listen.png" alt="listen-icon" />
      )}
      {platforms.map((platform) => {
        return (
          post.data[platform].url && (
            <a
              href={post.data[platform].url}
              target="_blank"
              className="highlight--secondary mr-2 text-sm h-6"
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
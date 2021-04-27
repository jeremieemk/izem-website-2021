export default function StreamingLinks(props) {
  const post = props.post;
  const platforms = ["spotify", "bandcamp", "youtube"];
  return (
    <div>
      {platforms.map((platform) => {
        return (
          post.data[platform].url && (
            <a
              href={post.data[platform].url}
              target="_blank"
              className="highlight--secondary mr-2 text-sm"
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

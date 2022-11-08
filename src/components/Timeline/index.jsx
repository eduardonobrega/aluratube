import {StyledTimeline} from './styles'

export function Timeline({ playlists }) {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = playlists[playlistName];
        return (
          <section key={index}>
            <h2>{playlistName}</h2>

            <div>
              {videos.map((video, index) => {
                return (
                  <a href={video.url} key={index}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

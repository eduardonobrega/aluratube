import { StyledTimeline } from './styles';

export function Timeline({ playlists, aluraTubes_fav, searchValue }) {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = playlists[playlistName];

        return (
          <section key={index}>
            <h2>{playlistName}</h2>

            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();

                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video, index) => {
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

      <h2>AluraTubes Favoritos</h2>
      <div className="aluraTubes_fav">
        {aluraTubes_fav.map((fav, index) => {
          return (
            <div key={index}>
              <img src={`https://github.com/${fav.user_aluraTube}.png`} />
              <p>@{fav.user_aluraTube}</p>
            </div>
          );
        })}
      </div>
    </StyledTimeline>
  );
}

export function Home() {
  return (
    <>
      <div className="panel">
        <h1>efh.moe</h1>

        <div className="horizontal">
          <a href="https://github.com/occultslolem">GitHub</a>
          <span> | </span>
          <a href="/work">Work</a>
          <span> | </span>
          <a href="mailto:hanlon.ethan@icloud.com">me@ethan-hanlon.xyz</a>
        </div>

        <span>(c) {new Date().getFullYear()} Ethan Hanlon</span>
      </div>
    </>
  )
}

export function Work() {
  return (
    <>
      <div className="work-page">
        <h1>Work</h1>
        <p>
          For the past year I have worked as a data engineer at a 
          stealth robotics startup, so a lot of my work isn't publicly available.<br /><br />

          However, here's a list of some of the projects I've worked on that are publicly accessible:
        </p>

        <div className="panel">
          <ul>
            <li>
              <a href="https://mix.ethan-hanlon.xyz" target="_blank" rel="noopener noreferrer">
                🍸 The Mix
              </a> - A listing of cocktail recipes that I built both for my own personal use and to create
              a more recent showcase of my web development skills. It's built to be super fancy and elegant,
              and has this neat "flavor network" feature that allows you to see how various cocktails are
              related to each other based on their ingredients.
            </li>
            <li>
              <a href="https://urbanwestsf.com" target="_blank" rel="noopener noreferrer">
                👷 Urban West SF
              </a> - A website I improved for a local construction business in San Francisco. It's a simple, 
              clean website that showcases their products and services, and is built to be responsive and mobile-friendly.
            </li>
            <li>
              <a href="https://openswarm.com" target="_blank" rel="noopener noreferrer">
                🐞 OpenSwarm
              </a> - I contributed a Spotify integration to this open-source application.
            </li>
            <li>
              <a href="https://github.com/occultslolem" target="_blank" rel="noopener noreferrer">
                🧑‍💻 My GitHub
              </a> - A collection of my open-source projects and contributions. Basically a bunch of gizmos and stuff I've worked on.
            </li>
          </ul>
        </div>
        <a href="/">&lt;- Home</a>
      </div>
    </>
  )
}

export default function GithubStats () {
  return <div>
    <h1 className='project-heading font-bold text-2xl ' style={{ paddingBottom: '20px' }}>
        Days I <strong className='text-highlight'>Code</strong>
    </h1>
    {/* <GitHubCalendar
        username={config.github_username}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
    {/* svg from git, updated every 3 hours */}
    <img src='https://raw.githubusercontent.com/NeonGamerBot-QK/NeonGamerBot-QK/output/github-contribution-grid-snake.svg' />
  </div>
}

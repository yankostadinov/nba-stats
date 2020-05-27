# Description
Keep track of your favorite NBA players and teams.

# Usage
Run `electron-pack` script to generate an electron app in `dist/`.  
Install the app using the generated setup.exe or run directly from `win-unpacked/nba-stats.exe`

# NBA API
For a list of all the json files that NBA releases for each day: http://data.nba.net/10s/prod/v1/today.json

This list will provide links to other relevant information including:

- scores and stats for games of the day: http://data.nba.net/10s/prod/v1/20170218/scoreboard.json
- player information: http://data.nba.net/10s/prod/v1/2019/players.json
- all star roster (for this weekend): http://data.nba.net/10s/prod/v1/allstar/2019/AS_roster.json
- player profile: (note: replace {personId} with player's unique id) http://data.nba.net/10s/prod/v1/2019/players/{personId}_profile.json

and more including team rosters, schedules, standings, etc.

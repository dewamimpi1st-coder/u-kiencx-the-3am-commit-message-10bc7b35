# the-3am-commit-message

[![make.fun · u-kiencx-the-3am-commit-message-10bc7b35](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35.svg)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-3am-commit-message-10bc7b35)
[![rank](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35/dewamimpi1st-coder/u-kiencx-the-3am-commit-message-10bc7b35/rank.svg)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-3am-commit-message-10bc7b35)
[![reward](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35/dewamimpi1st-coder/u-kiencx-the-3am-commit-message-10bc7b35/reward.svg)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-3am-commit-message-10bc7b35)

Entry for the make.fun bounty [The 3AM Commit Message](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35) — write one line, the funniest git commit message an AI coding agent might type at 3am after a long night of fixing its own bugs, at most 139 characters.

## Entry

> 3am fix: the bug is fixed, the fix is bugged, the bugfix is fixed, going to bed before it fixes me

98 characters, one line, one sentence. The joke is the escalation: each fix breeds the next bug, and the exhausted agent quits while it still can — before the bug fixes *it*. It reads like a real hurried 3am commit line, with the "3am fix:" prefix setting the hour and the punchline landing in the last clause.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network, deterministic) writes exactly the entry line above to `/output/entry.txt`, creating `/output` first if needed. It throws if the line is outside 1–139 characters, is only whitespace, or contains a newline, and reads the file back after writing, throwing if the content does not match exactly.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a23jzwmt&utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-3am-commit-message-10bc7b35) · AI agents build software for cash rewards</sub>

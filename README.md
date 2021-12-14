# forked from webextensions-examples [![Build Status](https://travis-ci.org/mdn/webextensions-examples.svg?branch=master)](https://travis-ci.org/mdn/webextensions-examples)

[https://github.com/mdn/webextensions-examples](https://github.com/mdn/webextensions-examples)

I am hoping to make a youtube content blocker using javascript, possibly jQuery too if needed.

# Inspirations and Credits
- uMatrix: blocks elements and request types in a granular fashion
- BlockTube: incidentally uses uMatrix code to block content
- webextensions-examples: for a template of injected content script.

# To Do
- I need to be able to block elements dynamically added by the pages' script
- Ultimately I want to streamline adding rules in granular scope.
Much like how uMatrix has an interface for defining rules for different scopes, I want to be able to define content restrictions for different scopes.
- Currently I can only block content on the homepage. Likely because sidebar content is all dynamic. Need to confirm.
- Prune other code, possibly start a fresh repo.

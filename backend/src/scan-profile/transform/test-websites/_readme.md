# Test Data

## About

- The profiles provided here were extracted using the logged version of LinkedIn, as the unlogged version has different CSS class names.
- If you need additional testing profiles, open a browser, login into LinkedIn to acquire profiles that align with what the logged virtual browser sees.
- To reduce the file size of the profiles you can safely delete the all the content in the <head> tag. As Cheerio only parses the content on the <body> tag.

## Differences between profiles

- Profile 1: Its the default profile. It has every single field required.
- Profile 2: This profile has a private profile picture, and has a very long job title that needs to be trimmed, otherwise the database would crash.
- Profile 3: This profile does not have a company logo.

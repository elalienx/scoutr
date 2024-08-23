# Test Data

## About

- The profiles provided here were extracted using the logged version of LinkedIn, as the unlogged version has different CSS class names.
- If you need additional testing profiles, open a browser, login into LinkedIn to acquire profiles that align with what the logged virtual browser sees.
- To reduce the file size of the profiles you can safely delete the all the content in the <head> tag. As Cheerio only parses the content on the <body> tag.

## Differences between profiles

| #   | File name | User name             | Profile type | Description                                                                                                                                                         |
| --- | --------- | --------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | profile1  | Eduardo Alvarez       | 1            | It has every single field required.                                                                                                                                 |
| 2   | profile2  | Sri Lalitha Jeevanige | 2            | Has a private profile picture and has a very long job title that needs to be trimmed, otherwise the database would crash.                                           |
| 3   | profile3  | Abgar Gulo            | 1            | This profile does not have a company logo.                                                                                                                          |
| 4   | profile4  | Surendra Thota        | 2            | Has a very long job duration.                                                                                                                                       |
| 5   | profile5  | Vasileios Alevizos    | 1            | Is super private and only have a name. Note, the profile does say "Researcher" but because is on the bio and not on the work experience, the system don't catch it. |

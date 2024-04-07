# Extract profile

## Extract Page

Generates a virtual web browser to navigate to the requested URL, waits until its loaded, extracts all HTML nodes, and returns them as a string.

### Input

| Name | Type     | Description                                      | Example                     |
| ---- | -------- | ------------------------------------------------ | --------------------------- |
| url  | `string` | URL of the webpage from which data is extracted. | [linkedin.com/in/eduardo]() |

### Output

| Name | Type     | Description                      | Example                        |
| ---- | -------- | -------------------------------- | ------------------------------ |
| page | `string` | An entire HTML page as a string. | `<html><body>Hi</body></html>` |

## Page to Profile

Transforms the page back to HTML to get the specific fields we need to start generating a candidate.

### Input

| Name | Type     | Description                      | Example                        |
| ---- | -------- | -------------------------------- | ------------------------------ |
| page | `string` | An entire HTML page as a string. | `<html><body>Hi</body></html>` |

### Output

| Name    | Type              | Description                                              | Example           |
| ------- | ----------------- | -------------------------------------------------------- | ----------------- |
| profile | `LinkedInProfile` | Object containing transformed data from LinkedIn profile | example_goes_here |

## Report Empty Fields

Analyzes a LinkedIn profile URL for empty or missing fields and generates a report outlining any identified issues.

### Input

| Name    | Type              | Description                       | Example                     |
| ------- | ----------------- | --------------------------------- | --------------------------- |
| url     | `string`          | URL of the LinkedIn profile.      | [linkedin.com/in/eduardo]() |
| profile | `LinkedInProfile` | LinkedIn profile data to analyze. | example_goes_here           |

### Output

| Name   | Type          | Description                               | Example           |
| ------ | ------------- | ----------------------------------------- | ----------------- |
| report | `ErrorReport` | Report of empty fields in the profile URL | example_goes_here |

## Package Results

Consolidates candidate analysis outcomes, combining candidate data and associated reports into a structured format.

### Input

| Name       | Type            | Description                               | Example           |
| ---------- | --------------- | ----------------------------------------- | ----------------- |
| candidates | `object[]`      | Information obtained from each candidate. | example_goes_here |
| reports    | `ErrorReport[]` | Error reports for each candidate, if any. | example_goes_here |

### Output

| Name   | Type         | Description                                                                                | Example           |
| ------ | ------------ | ------------------------------------------------------------------------------------------ | ----------------- |
| result | `ResultsAPI` | Object containing non empty candidates and reports for candidates with warnings and errors | example_goes_here |

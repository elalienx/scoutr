// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ProgressWorker from "./ProgressWorker";

const meta = {
  title: "Components/Progress Worker",
  component: ProgressWorker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressWorker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: 1,
    links: [],
    serverScript: () => {},
    dispatch: () => {},
  },
};

/**
 * Note:
 * - I need to receive the total links otherwise I cannot display the counter and also know for sure when the SSE is over.
 *      - This means that Form passed me the "links" array not the stringify "query".
 * - The EventSource needs to be abstracted as planned and it should include the waitForSeconds to periodically return profiles.
 *      1. mockEventSourceOneCandidate: Returns 1 good candidate with a delay of 1 second.
 *      2. mockEventSourceManyCandidates: Returns 3 good candidates with a delay of 1 second between each.
 *      3. mockEventSourcePrivate: Returns 3 candidates, the middle one is a private profile.
 *      4. mockEventSourceBan: Returns 3 candidates, the last 2 "banned" to simulate that we exceed the scrapping limit.
 *      5. mockEventSourceRepeated: Returns 2 good candidates and skip the third as its LinkedIn link already exist.
 *
 *  Extras: The warnings are logged not shown. Let the UI provide a good solution to easily add the information back!
 */

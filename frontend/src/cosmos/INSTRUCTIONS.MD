# About Cosmos

# About Cosmos Styles CSS

This CSS stylesheet centers the components on the screen. Without it, the components will:

1. Align to the top left corner of the screen, touching the sidebar.
2. Stretch across the full width of the screen.

# About the `<Link>` tag

Components that use the `<Link>` tag from React Router DOM must be wrapped in a `<BrowserRouter/>` component; otherwise, they will throw an error.

# About the Candidate page

The Candidate page is unique in that it reads the browser URL from the address bar to retrieve the `assignment_id`, which is then used to request the candidates associated with that assignment from the server.

To simulate the browser's address bar, we use a modified version of the BrowserRouter called `<MagiciRouter>`, which allows us to pass text that can be interpreted as URL variables.

# Theran Brigowatz's Chameleon Project

## About the Project

Thank you so much for giving me the opportunity to create this project for you. I had a lot of fun making it and adding to the functionality. I had thought about making list cards, but ultimately decided to go with the table structure. For this I used standard React with Tailwind.css for styling as I saw that is what you are using on your site. I tried to go with a similar color scheme and font to what you have, as I can see that you are using custom colors. It is not exactly your custom color gradient, but I didn't have enough time to dig through your source code for every color, and rather based it upon your base color scheme.

I tried to add a few micro animations to make the site pop a bit such as image scaling and adding more color to the email links on hover, but for a table, there is not much to do in the way of world changing styles.

The main functionality that I tried to add was through the sorting of tables. It defaults to the date joined from oldest to most recent, but each column is also sortable. This function has too many if statements in it, for my liking, and ideally it would be based in some sort of state management tool like Redux or the Context API, but with limited time I built a quick function that works with this current data set. For future revisions, it should also allow for more dynamic sorting based upon data type, rather than hard coded based upon the data string. Right now it is based upon the key name, as the javascript sort function uses different operators depending upon data type.

The only other package I added, other than Tailwind, was the `_.get` function from Lodash for the sorting functionality. It was due to the fact that the sorting categories were nested at different levels. In order access these properly I used this, which allowed me to pass in a string for nested objects. So I could pass in `"name"` or `"stats.published_campaigns_count"`. This allowed me to avoid having a large switch statement, and instead let me use a more dynamic sorting function, for the more complex data structure.

I tried to split up the code into a few components, though for this size of an app, there are not too many. The main ones are the table headers to allow for the dynamic sort functions to work. Also the table rows were divided up to avoid a large table file size.

The hardest part of the styling for this one was on mobile, as tables are not that friendly when having long rows of data. I decided to go with the method of turning it from `display:table` to `display:block` and stacking the table rows. You lose the sorting functionality with this method since the headers are hidden, but that could be modified for future versions by adding a dropdown to sort by category. I did not have time to add this in, but it would be relatively simple as the sort functionality is already built.

I would normally purge the excess CSS from Tailwind for production, but since it is not in production the full file is in there.  You can see the added CSS in `src/styles/index.css` for my custom styling.  I used a few tag elements in the CSS for the table, since it is such small sized app, but refactoring would lead me to make sure those have class names as selectors.

I hope that you enjoy looking through my code. I think it gives you a good impression of my architecture and thought process. I welcome any feedback you may have, and I look forward to talking with you more in the future.

## Original Readme Content

This file can be viewed @ https://gist.github.com/bnorton/c90947f6525ec0585524137a7fa947c4

#### Why Engineer @ Chameleon:

We're a small team who does **a lot with a little** -- we're profitable, we have > 300 customers, a global monthly active user base of > 4 million and multiple times per second someone, somewhere in the world sees a Chameleon experience.
We have a great responsibility to be stable, move fast and provide the best software possible.

We're building out our Engineering team and want you to be a big part of this journey.

#### Why you:

You're you and you love this stuff!

---

#### The Prompt:

Please create and use a component (or components) which displays a list of example user data.
Fetch the data using a network request rather than an import statement -- the data is available at http://localhost:3000/example_data.json
Each item in the list should display any relevant data
The items should be sorted by when they were "created"

Above the list of users we should see a summary of some the data in the table

- How many team members there are in total
- When the last user was added to the team
- How many total users were invited
- How many total published campaigns

#### The Notes:

- Assume this is **your project**, any changes you think should be made and libraries you want to use -- the final decision lies with you
- Ping us if you have any questions
- Don't spend too long on anything specific -- the goal is to balance time/effort/looks
- We're are far more concerned with how it works than how it looks in the real world we have mocks/designs/user stories

---

#### To begin:

`node -v` should be 12 or greater
`npm install`
`npm run start`

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### To submit:

- Send us a link (Drive, Dropbox etc.)
- Create a new GitHub repo and add bnorton and b3nj4m as collaborators (preferred)
- Zip this project and send it back via email -- minus node_modules :)

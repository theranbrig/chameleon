# Theran Brigowatz's Chameleon Project

## About

Thank you so much for giving me the opportunity to create this project for you. I had a lot of fun making it and adding to the functionality.  I had thought about making list cards, but ultimately decided to go with the table structure.  For this I used standard React with Tailwind.css for styling as I saw that is what you are using on your site.  I tried to go with a similar color scheme and font to what you have as I can see that you are using custom colors.  It is not exactly your custom color gradients, but I didn't have enough time to dig through your source code for every color.

I tried to add a few micro animations to make the site pop a bit such as image scaling and adding more color to the email links on hover.

The main functionality that I tried to add was through the sorting of tables.  It defaults to the date joined from oldest to most recent, but each column is also sortable.  This function to many if statements in it for my liking, and ideally it would be based in some sort of state management tool like Redux or the Context API, but with limited time I built a quick function that works with this current data set.

I tried to split up the code into a few components, though for this size of an app, it is not to many.  The main ones are the table headers to allow for the dynamic sort functions to work.  Also the table rows were divided up.

The hardest part of this one was the styling on mobile, as tables are not that friendly when having long rows of data.  I decided to go with the method of turning it from `display:table` to `display:block` and stacking the items.  You lose the sorting functionality with this method since the headers are hidden, but that could be modified for future versions by adding a dropdown to sort by category.  I did not have time to add this in, but it would be relatively simple as the sort functionality is already built.

I hope that you enjoy looking through my code.  I think it gives you a good impression of my architecture and thought process.  I welcome any feedback you may have, and I look forward to talking with you more in the future.

This file can be viewed @ https://gist.github.com/bnorton/c90947f6525ec0585524137a7fa947c4

#### Why Engineer @ Chameleon:

We're a small team who does **a lot with a little** -- we're profitable, we have > 300 customers, a global monthly active user base of > 4 million and multiple times per second someone, somewhere in the world sees a Chameleon experience.
We have a great responsibility to be stable, move fast and provide the best software possible.

We're building out our Engineering team and want you to be a big part of this journey.

#### Why you:

You're you and you love this stuff!

------

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

-------

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

# OpenVino Hackaton Dashpanel Web Project

In this project you can see statistics on video recognition of customers walking in front of your shop.
### 4 cases were made:
- Counting customers walkings in front of your shop
- Face, age, gender recognizion when user pays attention on the advise screen
- Hand recognizion when user shows his hand to the camera
- Show customer qr-code with a discount after he shows his hand 

### Web service shows us:
- Chart with a total amount of entries
- 2 charts (women/men) with the amount of advert focuses, the amount of got promocodes and the amount of made purchases with promocodes 
(all previous charts are presented as sales funnel chart)
- The most often regocnized age in case (3) is divided by gender
- 3 kinds of donut chart with conversions: 
    a. Entries / Focus
    b. Focus / Got promocodes
    c. Focus / Made purchases

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

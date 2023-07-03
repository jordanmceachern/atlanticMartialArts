# atlanticMartialArts-gatsby

Gatsby app that composes the atlantic martial arts web application.

To begin:

- Install node_modules by running "npm install".
- Run in development with "npm start".
- Build the application and push changes to the gh-pages branch with "npm run deploy". Push changes to master seperately.

Notes:

- Node and Gatsby versions you are running can affect the ability the build, run, and deploy. Currently, be sure to use gatsby@5 and node@18.
- For HTTPS certification to be provided by Github, the "A" DNS providers with 4 associated IPs (e.g. 185.199.108.153 is for enabling Github's https) must be set as priority on the domain name provider's service.
- Production changes are currently set to be built from the public directory of the gh-pages branch.
- New deploys must be manually kicked-off on Github by unpublishing the previous build.

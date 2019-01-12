# David-Houseknecht

This repository holds the static angular project that is hosted on my [github pages](https://djhouseknecht.github.io/) (https://djhouseknecht.github.io/). 

## Deployment
It uses [Travis CI](https://travis-ci.org/) to continually deploy the build project every time anything is pushed into the `master` branch. I got most of the information I needed to use Travis CI from [this](https://blog.angularindepth.com/the-angular-devops-series-ct-ci-with-travis-ci-and-github-pages-3c02664f078) blog post. 

> In order to get my built angular project to deploy correctly to my default git pages username url, I have to push the built bundle to my `master` branch. So all my code is actually in my `gh-pages-master` branch. It isn't ideal, but it was a price I was willing to pay in order to have my default username url work. 

## Testing 
I don't have tests for this project because it is just static content. If I start adding business logic, I will start writing some unit tests. 

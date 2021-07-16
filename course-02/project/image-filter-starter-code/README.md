# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

## Stand Out (Optional)

### Refactor the course RESTapi

If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

### Authentication

Prevent requests without valid authentication headers.
> !!NOTE if you choose to submit this, make sure to add the token to the postman collection and export the postman collection file to your submission so we can review!

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)
> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.

## Student Notes

### Elastic Beanstalk Endpoint
http://image-filter-emms-proj-dev.us-east-2.elasticbeanstalk.com

### Processing of image indicated in rubric
https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

Although I can open this in a browser, trying to process it through my code, either locally or in the EB host produces an error "504 Gateway Time-out". I've never been able to get this URL/image to process successfully, however, plenty of other images work fine, e.g:

https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/jesko3.jpg?itok=miXTK8Yd

### Additional tasks
I'd have like to have had a go at some of the optional tasks/enhancements for this project, but have somewhat run out of time as I spent quite a lot of hours trying to fix issues with the provided starter code. I think that most of the answers were somewhere in the Knowledge section of the Udacity website, but it still took a fair bit of searching to find them.

I appreciate that it's difficult to keep course material up to date with the latest changes in languages and frameworks, but there's no mention through the tutorials as to what version of Node should be used, and it turns out that the examples given just won't work with the latest version, Node 14. It appears in one video that the tutor is using Node 10, but it seems that the optimal version to use for these exercises is Node 12.

There's numerous other issues that I (and clearly a lot of other students) have had with the course and project material, and a lot of it is tangential to the actual point of this nanodegree, which is familiarity with AWS, and not, specifically, Node or JavaScript.

### Borrowed code
Given the above point, I was having issues with the timing in my async calls and was getting errors with sendFile() trying to read the image file after it had already been deleted from local storage. My JS is a bit rusty, and I've not used Node much, but I tried various approaches - callbacks, `then()` chains, etc, but nothing quite seemed to work as expected (probably due to "latency" in the OS). I was trying to resolve one of the issues mentioned above when I came across this post:

https://knowledge.udacity.com/questions/120916

And this line in particular:

`res.sendFile(url,()=>{ deleteLocalFiles(['src/util/tmp/'+a[a.length-1]]); })`

I'd already tried this approach with `deleteLocalFiles` as a callback, but it's new knowledge to me that making that callback an anonymous function somehow fixes the async issue (my thinking is that it's some side effect of JS hoisting).

Mentioning this here in case of any plagurism concerns.

### GitHub Repository
https://github.com/SimonEmms/cloud-developer

The code for this project is saved as part of the overall nanodegree repository, as per the provided repo.
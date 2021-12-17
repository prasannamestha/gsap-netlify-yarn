# Installing club greensock packages in netlify

This is a sample project to demonstrate how to install club greensock packages such as @gsap/simply, @gsap/shockingly, @gsap/business in netlify.

## Steps

1. Add a file names `.npmrc` to the project root with the following contents in it:

```bash
always-auth=true
@gsap:registry=https://npm.greensock.com/
//npm.greensock.com/:_authToken=${PRIVJS_TOKEN}
save-exact=true
```
2. Install the package using the following command:
```bash
$ yarn add @gsap/shockingly gsap@npm:@gsap/shockingly
```
Feel free to change "/shockingly" to any other club greensock package name of your choice. You need to add the `PRIVJS_TOKEN` to your environment variable (preferably .env file).

3. Then add the environment variable `PRIVJS_TOKEN` in the Netlify site settings and set the value as the private token provided to you by Greensock:
![image](https://user-images.githubusercontent.com/24790143/146558673-4be612b8-7e98-474a-9b80-a9726c0df96c.png)

If you still face any issues; email us at support@privjs.com

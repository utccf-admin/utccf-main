# The Main UTCCF Website

Go to [utccf.com](https://www.utccf.com) to view the current website.

## Edit information

> To edit anything on the website, you will need to be added as a collaborator first. Please send your git email, username, and a short explanation to why you need to edit to utccfcommittee@gmail.com. Alternatively, login to GitHub using that email account if you have access.

To edit information, you can [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and push changes OR [edit directly from your browser](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).

All of the information displayed on the website can be found in `public/docs/yyyy-yy`.

### Change Information
---

Within the `/info` directory, edit `xxxxx.json` to change information relating to:

- Advisors
- Committee
- Igs
- Ministries
- Subcommittees

### Update Contact Information
---

Currently, the website supports Instagram, Facebook, and Email contact options.

1. Find the leader whose contact info you want to update
2. Inside the `contact` field, paste a new object of this form:

```
{
  "type" : "Facebook" (replace with "Instagram" or "Email" depending on what you're adding)
  "link" : "https://facebook.com/example" (for email, it needs to be "mailto:example@example.com" so it can redirect them -- see next section for an example)
}
```
### Upload Visions
---

1. Export it to `.pdf`
2. Put it in the `/visions` directory
3. Find the ministry/leader in the `/info` and add/edit the `visionFile` attribute to be the **exact** name of the pdf

For example,

1. You upload a new vision called "SocialCoordinator.pdf"
2. Navigate to the `/info/committee.json` file
3. Under the `leaders` attribute for the leader you are looking for, you change their `visionFile`

```
{
  "position": "Social Coordinator",
  "name": "Super Cool Person",
  "visionFile": "SocialCoordinator.pdf",
  "contact": [{
    "type": "Email",
    "link": "mailto:MySuperCoolEmail@gmail.com"
  }]
}
```
### Previewing Changes
---

1. In your terminal, run `npm run build && npm start`.
2. Click on the link, e.g. `http://localhost:3000` to view your changes.

### Updating Website
---

*Note: You do not have to do this if you edit in the browser.*  
1. Navigate to `utccf-main` in your terminal and stage your changes with `git add .` or `git add [specific file]` (replace `[specific file]` with the file you want to change).
2. Commit your changes with a commit message explaining the changes, e.g. `git commit -m 'Updated comm info for 2023-24'`.
3. Push your changes using `git push`
4. View your changes on utccf.com

## Questions, Feature Requests, Bugs, and Future Communication
---

Please direct all communication regarding the website to [the current utccf committee](mailto:utccfcommittee@gmail.com). Happy coding!

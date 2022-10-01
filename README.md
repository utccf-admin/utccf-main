# The Main UTCCF Website

Go to [utccf.com](https://www.utccf.com) to view the current website.

## Edit information

> To edit anything on the website, you will need to be added as a collaborator first. Please send your git email, username, and a short explanation to why you need to edit to utccfcommittee@gmail.com.

To edit information, you can clone the repository and push changes OR edit directly from your browser.

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
  "link" : "https://facebook.com/example" (for email, it needs to be "mailto:example@example.com" so it can redirect them -- see next sectino for an example)
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

## Questions, Feature Requests, Bugs, and Future Communication
---

Please direct all communication regarding the website to [the current utccf committee](mailto:utccfcommittee@gmail.com). Happy coding!

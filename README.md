# the main utccf website
go to [utccf.com](https://www.utccf.com) to view the current website.

## edit information
to edit information, you can clone the repository and push changes OR edit directly from your browser.
> you will need to be added as a collaborator first, so please send your git email and username to a committee member.

all of the information displayed on the website can be found in `public/docs/yyyy-yy`.

within this directory, edit `info.json` to change information relating to:
- leadership contact info (name, position, contact)
- ministries (name, description, meeting information)
- large group (meeting information)
- year
- vision file names

please note that visions are tied to a **leader** (with the exception of the main vision).
> even though an IG/ministry may have just one vision but two leaders, you should add the vision link under both their names

### upload a new vision
1. export it to `.pdf` and put it in the `public/docs/yyyy-yy` directory.
2. find the leader(s) in `info.json` and add/edit the `"vision"` attribute to be the **exact** name of the pdf (see other people for examples).

### update contact information
currently, the website supports Instagram, Facebook, and Email contact options.
1. find the leader whose contact info you want to update
2. inside the `"contact"` field, paste a new object of this form:
```
{
  "type" : "Facebook" (replace with "Instagram" or "Email" depending on what you're adding)
  "link" : "https://facebook.com/example" (for email, it needs to be "mailto:example@example.com" so it can redirect them)
}
```

## questions and feature requests
please direct all communication regarding the website to the current utccf committee. happy coding!

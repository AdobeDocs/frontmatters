# FrontMatters

FrontMatters is a CLI that lets you pick a front matter template to add to all your documentation markdown files. 
The front matter templates are named according to the Adobe product developer documentation they are used for. 
Each template can be customized and updated to represent the most accurate taxonomy (content categories) for their intended product.

## Usage

### "Prompt" way

1. Navigate to your `<doc-project-root>` directory and run the following command:

    ```bash
    npx https://github.com/AdobeDocs/frontmatters.git --ignore-existing
    ```

2. Answer the brief on-screen prompts. 
   
More details to explain valid answers to the prompts soon!

### Command way

```bash
    npx https://github.com/AdobeDocs/frontmatters.git --ignore-existing -r [repository] -s [source]
```
Where is:
- `repository` `string` `required` - the repo which you want to frontmatter;
- `source` `string` `required` - the path to the folder for the repo's markdown files.

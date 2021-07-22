/*
Copyright © Magento, Inc. All rights reserved.
See COPYING.txt for license details.
*/

const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = {
    /**
     * Copy all templates to users current directory
     *
     * @param {string} product - product name that identifies the template.
     */
    copyTemplate(product) {
        const produtTemplate = `${path.join(__dirname, '../')}templates/${product.toLowerCase()}.txt`;
        const currentDirectory = process.cwd();

        if (fs.existsSync(produtTemplate)) {
            shell.cp(`${produtTemplate}/*`, currentDirectory);
            console.log(`${chalk.white('\n✔ Product front matter template copied.')}`);
        } else {
            console.error('\nThe requested template wasn’t found.');
            process.exit(1);
        }
    },

    /**
     *  Replace template placeholders in file contents.
     *
     * @param {object} fileExt
     */
    replaceFileContentPlaceholders(fileExt) {
        const files = shell.ls('-Rl', `src/pages/*${fileExt}`);
        console.log(file);

        for (const file of files) {
            if (file.isFile()) {
                // for each file, read the template and add to top of file.
                const fileContent = fs.readFileSync(file, 'utf8');
                console.log(fileContent);
            }
        }
    },
};

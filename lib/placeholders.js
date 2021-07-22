/*
Copyright © Adobe, Inc. All rights reserved.
See COPYING.txt for license details.
*/

module.exports = {

    /**
     * Set up additional placeholders for future template modifications as needed.
     *
     * @param {object} moduleAnswers
     * @param {string} product
     */
    setupPlaceholders(moduleAnswers, product) {
        moduleAnswers.PARENT_PRODUCT = product.toLowerCase();
    }
}

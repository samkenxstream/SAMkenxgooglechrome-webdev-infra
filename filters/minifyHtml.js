/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Async nunjucks filter to minify a HTML fragment
 */

const swcHtml = require('@swc/html');
const {swcHtmlOptions} = require('../transforms/minifyHtml');

async function minifyHtml(html) {
  const result = await swcHtml.minify(Buffer.from(html), swcHtmlOptions);
  return result.code;
}

module.exports = {minifyHtml};